"""Strict validation of case-study `sections` (see c1k.js). build.py calls validate() and aborts on any error.

A section is a dict with a `type` from TYPES. Every visible string is a localized dict {es, en, fr}.
To add a new type: add it to TYPES here and to SECTION_RENDER in c2.js. An unknown type is always an error.
"""
import re

LANGS = ("es", "en", "fr")
ID_RE = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")
# type -> (required keys, optional keys)
TYPES = {
    "text":    ({"type", "id", "h", "p"},          {"t", "img", "flow"}),
    "metrics": ({"type", "id", "h", "items"},      {"t", "p", "after"}),
}


def _loc(v, path, errs):
    """Localized string: exactly {es, en, fr}, all non-empty strings."""
    if not isinstance(v, dict):
        errs.append(f"{path}: must be an object {{es, en, fr}}"); return
    for k in v:
        if k not in LANGS:
            errs.append(f"{path}: unexpected language key '{k}'")
    for lg in LANGS:
        s = v.get(lg)
        if not isinstance(s, str) or not s.strip():
            errs.append(f"{path}.{lg}: missing or empty translation")


def _para(v, path, errs):
    """Paragraph: localized dict plus optional em:true (rendered bold)."""
    if not isinstance(v, dict):
        errs.append(f"{path}: must be an object {{es, en, fr[, em]}}"); return
    if "em" in v and not isinstance(v["em"], bool):
        errs.append(f"{path}.em: must be true/false")
    _loc({k: x for k, x in v.items() if k != "em"}, path, errs)


def _paras(v, path, errs, required):
    if not isinstance(v, list) or (required and not v):
        errs.append(f"{path}: must be a non-empty list of paragraphs" if required else f"{path}: must be a list of paragraphs"); return
    for i, p in enumerate(v):
        _para(p, f"{path}[{i}]", errs)


def _img(im, path, errs, img_exists):
    if not isinstance(im, dict) or set(im) != {"key", "v", "alt"}:
        errs.append(f"{path}: must be {{key, v, alt}}"); return
    _loc(im["alt"], f"{path}.alt", errs)
    if not img_exists(str(im["key"]), str(im["v"])):
        errs.append(f"{path}: file img/{im['key']}-{im['v']}.webp does not exist")


def validate(sections, project_keys, img_exists, projects=None):
    """Return a list of error strings (empty = OK).
    sections: {projectKey: [section, ...]}; project_keys: valid keys; img_exists(key, v) -> bool;
    projects: optional PROJ list, to validate localized `role` and `site`."""
    errs = []
    if not isinstance(sections, dict):
        return ["SECTIONS must be an object {projectKey: [sections]}"]
    for pk, secs in sections.items():
        if pk not in project_keys:
            errs.append(f"SECTIONS['{pk}']: unknown project key"); continue
        if not isinstance(secs, list) or not secs:
            errs.append(f"SECTIONS['{pk}']: must be a non-empty list"); continue
        seen = set()
        for i, s in enumerate(secs):
            at = f"{pk}.sections[{i}]"
            if not isinstance(s, dict):
                errs.append(f"{at}: must be an object"); continue
            typ = s.get("type")
            if typ not in TYPES:
                errs.append(f"{at}: unknown section type {typ!r} (known: {', '.join(sorted(TYPES))})"); continue
            req, opt = TYPES[typ]
            for k in sorted(req - set(s)):
                errs.append(f"{at} ({typ}): missing required field '{k}'")
            for k in sorted(set(s) - req - opt):
                errs.append(f"{at} ({typ}): unexpected field '{k}'")
            sid = s.get("id")
            if not isinstance(sid, str) or not ID_RE.match(sid):
                errs.append(f"{at}: id must be lowercase letters/digits/hyphens (got {sid!r})")
            elif sid in seen:
                errs.append(f"{at}: duplicate id '{sid}' in project '{pk}'")
            else:
                seen.add(sid)
            if "h" in s: _loc(s["h"], f"{at}.h", errs)
            if "t" in s: _loc(s["t"], f"{at}.t", errs)
            if typ == "text":
                if "p" in s: _paras(s["p"], f"{at}.p", errs, True)
                if "img" in s: _img(s["img"], f"{at}.img", errs, img_exists)
                if "flow" in s:
                    fl = s["flow"]
                    if not isinstance(fl, list) or not fl:
                        errs.append(f"{at}.flow: must be a non-empty list")
                    else:
                        for j, it in enumerate(fl):
                            w = f"{at}.flow[{j}]"
                            if not isinstance(it, dict) or len(it) != 1 or next(iter(it)) not in ("p", "img", "fig"):
                                errs.append(f"{w}: must be exactly one of {{p: [...]}}, {{img: {{...}}}} (wide) or {{fig: {{...}}}} (4:3)"); continue
                            k = next(iter(it))
                            if k == "p": _paras(it["p"], f"{w}.p", errs, False)
                            else: _img(it[k], f"{w}.{k}", errs, img_exists)
            if typ == "metrics":
                if "p" in s: _paras(s["p"], f"{at}.p", errs, False)
                if "after" in s: _paras(s["after"], f"{at}.after", errs, False)
                items = s.get("items")
                if not isinstance(items, list) or not items:
                    errs.append(f"{at}.items: must be a non-empty list")
                else:
                    for j, it in enumerate(items):
                        if not isinstance(it, dict) or set(it) != {"n", "l"}:
                            errs.append(f"{at}.items[{j}]: must be {{n, l}}"); continue
                        _loc(it["n"], f"{at}.items[{j}].n", errs); _loc(it["l"], f"{at}.items[{j}].l", errs)
    for d in (projects or []):
        r = d.get("role")
        if isinstance(r, dict): _loc(r, f"PROJ[{d.get('key')}].role", errs)
        elif not isinstance(r, str) or not r.strip(): errs.append(f"PROJ[{d.get('key')}].role: missing")
        st = d.get("site")
        if st is not None:
            if not isinstance(st, dict) or set(st) != {"href", "l"}:
                errs.append(f"PROJ[{d.get('key')}].site: must be {{href, l}}")
            else:
                if not str(st["href"]).startswith("https://"): errs.append(f"PROJ[{d.get('key')}].site.href: must start with https://")
                _loc(st["l"], f"PROJ[{d.get('key')}].site.l", errs)
    return errs


def flatten(secs, lg):
    """Plain-text view of a project's sections in one language (for llms-full.txt and portfolio.json)."""
    out = []
    for s in secs:
        paras = [p[lg] for p in s.get("p", [])] + [p[lg] for f in s.get("flow", []) for p in f.get("p", [])] + [p[lg] for p in s.get("after", [])]
        if s["type"] == "metrics":
            paras.insert(len(s.get("p", [])), " · ".join(f"{it['n'][lg]} {it['l'][lg]}" for it in s["items"]))
        out.append({"id": s["id"], "heading": s["t"][lg] if "t" in s else s["h"][lg], "label": s["h"][lg], "text": paras})
    return out
