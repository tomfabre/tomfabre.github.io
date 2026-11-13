"""Strict validation of case-study `sections` (see c1k.js). build.py calls validate() and aborts on any error.

A section is a dict with a `type` from TYPES. Every visible string is a localized dict {es, en, fr}.
To add a new type: add it to TYPES here and to SECTION_RENDER in c2.js. An unknown type is always an error.
"""
import re
from urllib.parse import urlparse

LANGS = ("es", "en", "fr")
ID_RE = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")
# type -> (required keys, optional keys)
TYPES = {
    "text":    ({"type", "id", "h", "p"},          {"t", "img", "flow"}),
    "metrics": ({"type", "id", "h", "items"},      {"t", "p", "after", "flow"}),
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


TOKEN_RE = re.compile(r"\{([a-z][a-z0-9]*)\}")


def _url_ok(u):
    """Absolute https URL with a host, no credentials, no whitespace/control characters."""
    if not isinstance(u, str) or not u.strip() or len(u) > 300 or re.search(r"[\s\x00-\x1f<>\"']", u): return False
    p = urlparse(u)
    return p.scheme == "https" and bool(p.hostname) and "@" not in p.netloc and "." in p.hostname


def _para(v, path, errs):
    """Paragraph: localized dict plus optional em:true (rendered bold) and optional `links`.
    Inline links are structured data, never HTML: the text holds {name} markers and `links` maps each name to
    {href, t:{es,en,fr}}. Every marker must exist in every language exactly once, and every link must be used."""
    if not isinstance(v, dict):
        errs.append(f"{path}: must be an object {{es, en, fr[, em, links]}}"); return
    if "em" in v and not isinstance(v["em"], bool):
        errs.append(f"{path}.em: must be true/false")
    _loc({k: x for k, x in v.items() if k not in ("em", "links")}, path, errs)
    links = v.get("links", {})
    if not isinstance(links, dict):
        errs.append(f"{path}.links: must be an object {{name: {{href, t}}}}"); return
    for name, ln in links.items():
        w = f"{path}.links.{name}"
        if not re.match(r"^[a-z][a-z0-9]*$", str(name)): errs.append(f"{w}: invalid link name (use lowercase letters/digits)")
        if not isinstance(ln, dict) or set(ln) != {"href", "t"}: errs.append(f"{w}: must be {{href, t}}"); continue
        if not _url_ok(ln["href"]): errs.append(f"{w}.href: must be an absolute https URL ({ln['href']!r})")
        _loc(ln["t"], f"{w}.t", errs)
    for lg in LANGS:
        s = v.get(lg)
        if not isinstance(s, str): continue
        used = TOKEN_RE.findall(s)
        for name in used:
            if name not in links: errs.append(f"{path}.{lg}: marker {{{name}}} has no entry in links")
        for name in links:
            if used.count(name) != 1: errs.append(f"{path}.{lg}: link '{name}' must appear exactly once as {{{name}}} (found {used.count(name)})")
        if re.search(r"[{}]", TOKEN_RE.sub("", s)): errs.append(f"{path}.{lg}: stray '{{' or '}}' in text")


def _paras(v, path, errs, required):
    if not isinstance(v, list) or (required and not v):
        errs.append(f"{path}: must be a non-empty list of paragraphs" if required else f"{path}: must be a list of paragraphs"); return
    for i, p in enumerate(v):
        _para(p, f"{path}[{i}]", errs)


def _img(im, path, errs, img_exists):
    """Image {key, v, alt}; optional: r ("1440/743", exact aspect ratio, no cropping), zoom (true: opens the original in a new tab), cap (localized caption)."""
    if not isinstance(im, dict) or not {"key", "v", "alt"} <= set(im) or set(im) - {"key", "v", "alt", "r", "zoom", "cap"}:
        errs.append(f"{path}: must be {{key, v, alt[, r, zoom, cap]}}"); return
    _loc(im["alt"], f"{path}.alt", errs)
    if "r" in im and not re.match(r"^\d{1,5}/\d{1,5}$", str(im["r"])): errs.append(f"{path}.r: must look like '1440/743'")
    if "zoom" in im and not isinstance(im["zoom"], bool): errs.append(f"{path}.zoom: must be true/false")
    if "cap" in im: _loc(im["cap"], f"{path}.cap", errs)
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
            if typ in ("text", "metrics"):
                if "flow" in s:
                    fl = s["flow"]
                    if not isinstance(fl, list) or not fl:
                        errs.append(f"{at}.flow: must be a non-empty list")
                    else:
                        for j, it in enumerate(fl):
                            w = f"{at}.flow[{j}]"
                            if not isinstance(it, dict) or len(it) != 1 or next(iter(it)) not in ("p", "img", "fig", "pair"):
                                errs.append(f"{w}: must be exactly one of {{p: [...]}}, {{img: {{...}}}} (wide), {{fig: {{..., r?}}}} (in the text column) or {{pair: [img, img]}}"); continue
                            k = next(iter(it))
                            if k == "p": _paras(it["p"], f"{w}.p", errs, False)
                            elif k == "pair":
                                pr = it["pair"]
                                if not isinstance(pr, list) or len(pr) != 2: errs.append(f"{w}.pair: must be a list of exactly 2 images")
                                else:
                                    for n, im in enumerate(pr): _img(im, f"{w}.pair[{n}]", errs, img_exists)
                            elif k == "fig" and isinstance(it["fig"], dict) and "r" in it["fig"]:
                                im = {a: b for a, b in it["fig"].items() if a != "r"}
                                if not re.match(r"^\d{1,2}/\d{1,2}$", str(it["fig"]["r"])): errs.append(f"{w}.fig.r: must look like '16/7'")
                                _img(im, f"{w}.fig", errs, img_exists)
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


def plain(p, lg):
    """Paragraph text for one language; {name} markers become Markdown links [text](url)."""
    return TOKEN_RE.sub(lambda m: f"[{p['links'][m.group(1)]['t'][lg]}]({p['links'][m.group(1)]['href']})" if m.group(1) in p.get("links", {}) else m.group(0), p[lg])


def flatten(secs, lg):
    """Plain-text view of a project's sections in one language (for llms-full.txt and portfolio.json)."""
    out = []
    for s in secs:
        paras = [plain(p, lg) for p in s.get("p", [])] + [plain(p, lg) for f in s.get("flow", []) for p in f.get("p", [])] + [plain(p, lg) for p in s.get("after", [])]
        if s["type"] == "metrics":
            paras.insert(len(s.get("p", [])), " · ".join(f"{it['n'][lg]} {it['l'][lg]}" for it in s["items"]))
        out.append({"id": s["id"], "heading": s["t"][lg] if "t" in s else s["h"][lg], "label": s["h"][lg], "text": paras})
    return out


DASH_RE = re.compile("[\u2013\u2014]")


def _strings(o, path=""):
    if isinstance(o, str): yield path, o
    elif isinstance(o, dict):
        for k, x in o.items():
            if k != "href": yield from _strings(x, f"{path}.{k}")
    elif isinstance(o, list):
        for i, x in enumerate(o): yield from _strings(x, f"{path}[{i}]")


def validate_hero(hero, project_keys):
    """HERO[projectKey] = {tag, lead, alt}, all localized. Returns a list of errors."""
    errs = []
    if not isinstance(hero, dict): return ["HERO must be an object {projectKey: {tag, lead, alt}}"]
    for pk, h in hero.items():
        if pk not in project_keys: errs.append(f"HERO['{pk}']: unknown project key"); continue
        if not isinstance(h, dict) or set(h) != {"tag", "lead", "alt"}: errs.append(f"HERO['{pk}']: must be {{tag, lead, alt}}"); continue
        for f in ("tag", "lead", "alt"): _loc(h[f], f"HERO['{pk}'].{f}", errs)
    return errs


def check_no_dash(projects, sections, hero, rows, role_years_exempt=True):
    """Editorial rule: no en/em dashes in the visible text of these projects (periods like '2023 – 2024' are exempt).
    projects: keys to check; rows: {lang: {projectKey: [name, category, context, summary, description, services, tagline]}}."""
    errs = []
    for pk in projects:
        for src, name in ((sections.get(pk), "sections"), (hero.get(pk), "hero")):
            for p, s in _strings(src, f"{pk}.{name}"):
                if DASH_RE.search(s): errs.append(f"{p}: contains an en/em dash (editorial rule): {s[:60]!r}")
        for lg, byk in rows.items():
            for i, s in enumerate(byk.get(pk, [])):
                if DASH_RE.search(s): errs.append(f"{pk}.row.{lg}[{i}]: contains an en/em dash (editorial rule): {s[:60]!r}")
    return errs
