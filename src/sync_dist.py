#!/usr/bin/env python3
"""Copia src/dist a la raíz del repo y poda de forma segura los js/app.<hash>.js antiguos.

Uso (desde src/, después de `python3 build.py --site https://tomfabre.com`):
    python3 sync_dist.py [--dry-run] [--keep-dist]

Qué hace
  1. Lee qué app.<hash>.js referencia el HTML que hay AHORA en la raíz (versión anterior, publicada o a punto de estarlo)
     y el HTML publicado en origin/main (lo que sirve GitHub Pages hoy).
  2. Copia dist/ a la raíz (sin poner-dominio.py) y borra src/dist salvo --keep-dist.
  3. Borra solo los js/app.<hash>.js que NO son: la versión nueva, la que referenciaba la raíz antes de copiar ni ninguna de
     las referenciadas en origin/main. Resultado: se conservan como mucho la versión nueva y la anterior publicada, de modo
     que HTML cacheado (10 min en GitHub Pages) o pestañas abiertas con la versión anterior nunca apuntan a un 404.

Seguridad
  - Solo toca archivos con el patrón exacto js/app.<10 hex>.js; nada más.
  - Si no se puede leer origin/main (sin red, sin remoto, sin git) NO se borra nada: solo se informa.
  - --dry-run muestra el plan sin copiar ni borrar.
"""
import os, re, shutil, subprocess, sys

HASHED = re.compile(r"^app\.[0-9a-f]{10}\.js$")
REF = re.compile(r"/js/(app\.[0-9a-f]{10}\.js)")


def refs_in_tree(root):
    """app.<hash>.js referenciados por los index.html bajo root (ignora src/ y .git/)."""
    found = set()
    for d, dirs, files in os.walk(root):
        dirs[:] = [x for x in dirs if x not in (".git", "src", "node_modules")]
        for f in files:
            if f.endswith(".html"):
                with open(os.path.join(d, f), encoding="utf-8", errors="ignore") as fh:
                    found.update(REF.findall(fh.read()))
    return found


def refs_in_origin(repo, ref="origin/main"):
    """app.<hash>.js referenciados por el HTML de origin/main; None si no se puede determinar."""
    try:
        subprocess.run(["git", "-C", repo, "fetch", "-q", "origin", "main"], check=False, capture_output=True, timeout=60)
        out = subprocess.run(["git", "-C", repo, "grep", "-h", "-o", "-E", r"/js/app\.[0-9a-f]{10}\.js", ref, "--", "*.html"],
                             capture_output=True, text=True, timeout=60)
        if out.returncode not in (0, 1):  # 1 = sin coincidencias (p. ej. publicado aún con JS en línea)
            return None
        chk = subprocess.run(["git", "-C", repo, "rev-parse", "--verify", "-q", ref], capture_output=True, text=True)
        if chk.returncode != 0:
            return None
        return set(REF.findall(out.stdout))
    except Exception:
        return None


def plan_prune(existing, keep):
    """existing: nombres presentes en js/. keep: nombres a conservar. Devuelve los borrables (solo app.<hash>.js)."""
    return sorted(n for n in existing if HASHED.match(n) and n not in keep)


def main(argv, here=None):
    dry = "--dry-run" in argv
    here = here or os.path.dirname(os.path.abspath(__file__))
    repo = os.path.dirname(here)
    dist = os.path.join(here, "dist")
    if not os.path.isdir(os.path.join(dist, "js")):
        print("No hay src/dist/js: ejecuta antes build.py"); return 1
    new = {n for n in os.listdir(os.path.join(dist, "js")) if HASHED.match(n)}
    if not new:
        print("dist/js no contiene ningún app.<hash>.js: no se poda nada"); return 1
    before = refs_in_tree(repo)          # lo que referencia la raíz antes de copiar
    published = refs_in_origin(repo)     # lo que referencia origin/main
    existing = {n for n in os.listdir(os.path.join(repo, "js"))} if os.path.isdir(os.path.join(repo, "js")) else set()
    print("nueva versión      :", sorted(new))
    print("raíz antes de copiar:", sorted(before) or "-")
    print("origin/main        :", "no disponible (no se borrará nada)" if published is None else (sorted(published) or "-"))
    if not dry:
        for item in os.listdir(dist):
            if item == "poner-dominio.py":
                continue
            s, t = os.path.join(dist, item), os.path.join(repo, item)
            if os.path.isdir(s):
                shutil.copytree(s, t, dirs_exist_ok=True)
            else:
                shutil.copy2(s, t)
    if published is None:
        victims = []
    else:
        victims = plan_prune(existing | new, new | before | published)
    for v in victims:
        print(("[dry-run] borraría js/" if dry else "borrado js/") + v)
        if not dry:
            os.remove(os.path.join(repo, "js", v))
    kept = sorted(n for n in (existing | new) if HASHED.match(n) and n not in victims)
    print("conservados        :", kept)
    if not dry and "--keep-dist" not in argv:
        shutil.rmtree(dist, ignore_errors=True)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
