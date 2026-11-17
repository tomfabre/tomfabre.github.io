#!/usr/bin/env python3
"""Sustituye el dominio provisional por el tuyo en todos los archivos del sitio.
Uso:  python3 poner-dominio.py https://tudominio.com
"""
import sys, pathlib
if len(sys.argv) != 2 or not sys.argv[1].startswith("https://"):
    sys.exit("Uso: python3 poner-dominio.py https://tudominio.com")
new = sys.argv[1].rstrip("/")
old = "https://TU-DOMINIO.com"
root = pathlib.Path(__file__).parent
n = 0
for f in root.rglob("*"):
    if f.is_file() and f.suffix in {".html", ".txt", ".json", ".xml", ".webmanifest", ".svg"}:
        t = f.read_text(encoding="utf-8")
        bare_old, bare_new = "TU-DOMINIO.com", new.replace("https://", "")
        t2 = t.replace(old, new).replace(old.lower(), new).replace(bare_old, bare_new).replace(bare_old.lower(), bare_new)
        if t2 != t:
            f.write_text(t2, encoding="utf-8"); n += 1
print(f"Listo: dominio actualizado en {n} archivos -> {new}")
