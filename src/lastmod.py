#!/usr/bin/env python3
"""<lastmod> honesto para sitemap.xml.

Cada URL guarda en src/lastmod.json el hash de su HTML (normalizando el nombre del bundle app.<hash>.js) y la fecha en que
ese contenido cambió por última vez. Si el contenido no cambia, la fecha NO se mueve; si cambia, pasa a hoy.
Una URL sin registro se inicializa con la fecha del último commit que tocó su HTML en la raíz si el contenido es idéntico
al ya publicado, o con hoy si el contenido es nuevo/cambia. Nunca se pone la fecha de hoy a todas las páginas por defecto.
"""
import datetime, hashlib, json, os, re, subprocess

BUNDLE = re.compile(rb"/js/app\.[0-9a-f]{10}\.js")
LOC = re.compile(r"(<url><loc>)([^<]+)(</loc>)")


def norm_hash(data: bytes) -> str:
    return hashlib.sha256(BUNDLE.sub(b"/js/app.X.js", data)).hexdigest()[:16]


def page_path(site, url):
    rel = url[len(site):].strip("/") if url.startswith(site) else None
    if rel is None:
        return None
    return os.path.join(rel, "index.html") if rel else "index.html"


def git_date(repo, rel):
    try:
        out = subprocess.run(["git", "-C", repo, "log", "-1", "--format=%cs", "--", rel], capture_output=True, text=True, timeout=30)
        d = out.stdout.strip()
        return d if re.fullmatch(r"\d{4}-\d{2}-\d{2}", d) else None
    except Exception:
        return None


def decide(stored, new_hash, root_hash, git_d, today):
    """Devuelve (hash, fecha) para una URL."""
    if stored and stored.get("hash") == new_hash:
        return new_hash, stored["date"]
    if not stored and root_hash == new_hash and git_d:
        return new_hash, git_d
    return new_hash, today


def apply(sitemap_xml, site, dist, repo, store, today=None):
    """Devuelve (sitemap con <lastmod>, store actualizado)."""
    today = today or datetime.date.today().isoformat()
    store = dict(store)

    def sub(m):
        url = m.group(2)
        rel = page_path(site, url)
        f = os.path.join(dist, rel) if rel else None
        if not f or not os.path.isfile(f):
            return m.group(0)  # sin página asociada: no se inventa fecha
        new_h = norm_hash(open(f, "rb").read())
        rf = os.path.join(repo, rel)
        root_h = norm_hash(open(rf, "rb").read()) if os.path.isfile(rf) else None
        h, d = decide(store.get(url), new_h, root_h, git_date(repo, rel) if root_h else None, today)
        store[url] = {"hash": h, "date": d}
        return f"{m.group(1)}{url}{m.group(3)}<lastmod>{d}</lastmod>"

    return LOC.sub(sub, sitemap_xml), store


def load(path):
    try:
        return json.load(open(path, encoding="utf8"))
    except Exception:
        return {}


def save(path, store):
    json.dump(store, open(path, "w", encoding="utf8"), indent=1, sort_keys=True); open(path, "a").write("\n")
