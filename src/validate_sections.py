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
    "text":    ({"type", "id", "h", "p"},          {"t", "img", "flow", "langs"}),
    "metrics": ({"type", "id", "h", "items"},      {"t", "p", "after", "flow", "langs"}),
    "chapter": ({"type", "id", "h", "t", "layout"}, {"p", "media", "meta", "metric", "links", "langs", "eb", "sub", "blocks", "kit", "figs"}),
    "index":   ({"type", "id", "h", "t", "p", "items"}, {"langs"}),
}
LAYOUTS = ("right", "left", "wide")


def _langs(v, path, errs, inherited=LANGS):
    """Optional `langs` marker: list of languages an item is written for (default: inherited, normally all three).
    A language-specific item is skipped by the renderer in the other languages (used when one language is rewritten on its own)."""
    if not isinstance(v, dict) or "langs" not in v: return tuple(inherited)
    ls = v["langs"]
    if not isinstance(ls, list) or not ls or len(set(ls)) != len(ls) or any(l not in inherited for l in ls):
        errs.append(f"{path}.langs: must be a non-empty list of distinct languages within {list(inherited)}"); return tuple(inherited)
    return tuple(l for l in LANGS if l in ls)


def _loc(v, path, errs, langs=LANGS):
    """Localized string: exactly the declared languages (default es, en, fr), all non-empty strings."""
    if not isinstance(v, dict):
        errs.append(f"{path}: must be an object {{{', '.join(langs)}}}"); return
    for k in v:
        if k not in LANGS:
            errs.append(f"{path}: unexpected language key '{k}'")
        elif k not in langs:
            errs.append(f"{path}: language '{k}' is not declared in langs {list(langs)}")
    for lg in langs:
        s = v.get(lg)
        if not isinstance(s, str) or not s.strip():
            errs.append(f"{path}.{lg}: missing or empty translation")


TOKEN_RE = re.compile(r"\{([a-z][a-z0-9]*)\}")


def _url_ok(u):
    """Absolute https URL with a host, no credentials, no whitespace/control characters."""
    if not isinstance(u, str) or not u.strip() or len(u) > 300 or re.search(r"[\s\x00-\x1f<>\"']", u): return False
    p = urlparse(u)
    return p.scheme == "https" and bool(p.hostname) and "@" not in p.netloc and "." in p.hostname


def _para(v, path, errs, inherited=LANGS):
    """Paragraph: localized dict plus optional em:true (rendered bold) and optional `links`.
    Inline links are structured data, never HTML: the text holds {name} markers and `links` maps each name to
    {href, t:{es,en,fr}}. Every marker must exist in every language exactly once, and every link must be used."""
    if not isinstance(v, dict):
        errs.append(f"{path}: must be an object {{es, en, fr[, em, links]}}"); return
    if "em" in v and not isinstance(v["em"], bool):
        errs.append(f"{path}.em: must be true/false")
    langs = _langs(v, path, errs, inherited)
    _loc({k: x for k, x in v.items() if k not in ("em", "links", "langs")}, path, errs, langs)
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


def _paras(v, path, errs, required, inherited=LANGS):
    if not isinstance(v, list) or (required and not v):
        errs.append(f"{path}: must be a non-empty list of paragraphs" if required else f"{path}: must be a list of paragraphs"); return
    for i, p in enumerate(v):
        _para(p, f"{path}[{i}]", errs, inherited)


def _img(im, path, errs, img_exists):
    """Image {key, v, alt}; optional: r ("1440/743", exact aspect ratio, no cropping), w (chapter images: desktop width in %), a (start|end: alignment when w < 100), m (false: hidden on mobile), t (true: shown above the text column), o (top offset in rem, desktop), zoom (true: opens the original in a new tab), cap (localized caption)."""
    if not isinstance(im, dict) or not {"key", "v", "alt"} <= set(im) or set(im) - {"key", "v", "alt", "r", "zoom", "cap", "ph", "w", "a", "m", "t", "o"}:
        errs.append(f"{path}: must be {{key, v, alt[, r, zoom, cap, ph, w, a, m, t, o]}}"); return
    if "w" in im and not (isinstance(im["w"], int) and not isinstance(im["w"], bool) and 30 <= im["w"] <= 100): errs.append(f"{path}.w: desktop width in %, integer 30-100")
    if "a" in im and im["a"] not in ("start", "end"): errs.append(f"{path}.a: must be 'start' or 'end'")
    if "t" in im and im["t"] is not True: errs.append(f"{path}.t: only true is allowed (image above the text column)")
    if "o" in im and not (isinstance(im["o"], int) and not isinstance(im["o"], bool) and 0 <= im["o"] <= 16): errs.append(f"{path}.o: top offset in rem, integer 0-16")
    if "m" in im and im["m"] is not False: errs.append(f"{path}.m: only false is allowed (hide on mobile)")
    if "ph" in im and not isinstance(im["ph"], bool): errs.append(f"{path}.ph: must be true/false")
    _loc(im["alt"], f"{path}.alt", errs)
    if "r" in im and not re.match(r"^\d{1,5}/\d{1,5}$", str(im["r"])): errs.append(f"{path}.r: must look like '1440/743'")
    if "zoom" in im and not isinstance(im["zoom"], bool): errs.append(f"{path}.zoom: must be true/false")
    if "cap" in im: _loc(im["cap"], f"{path}.cap", errs)
    if not img_exists(str(im["key"]), str(im["v"])) and not im.get("ph"):   # ph: placeholder allowed until the original file is added
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
            sl = _langs(s, at, errs)          # languages this section is written for (default: all three)
            if "h" in s: _loc(s["h"], f"{at}.h", errs, sl)
            if "t" in s: _loc(s["t"], f"{at}.t", errs, sl)
            if typ == "text":
                if "p" in s: _paras(s["p"], f"{at}.p", errs, True, sl)
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
                            if k == "p": _paras(it["p"], f"{w}.p", errs, False, sl)
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
            if typ == "chapter":
                if s.get("layout") not in LAYOUTS: errs.append(f"{at}.layout: must be one of {LAYOUTS}")
                ed = "blocks" in s     # editorial chapter: eb, sub, blocks (label/title/paragraphs) and one wide `kit` figure instead of p + media
                if ed:
                    for k in ("p", "media"):
                        if k in s: errs.append(f"{at}: '{k}' is not allowed together with 'blocks'")
                    if "eb" in s: _loc(s["eb"], f"{at}.eb", errs, sl)
                    if "sub" in s: _loc(s["sub"], f"{at}.sub", errs, sl)
                    bl = s.get("blocks")
                    if not isinstance(bl, list) or not bl: errs.append(f"{at}.blocks: must be a non-empty list")
                    else:
                        for j, b in enumerate(bl):
                            w = f"{at}.blocks[{j}]"
                            if not isinstance(b, dict) or not {"l", "p"} <= set(b) or set(b) - {"l", "t", "p", "areas"}: errs.append(f"{w}: must be {{l, p[, t, areas]}}"); continue
                            _loc(b["l"], f"{w}.l", errs, sl)
                            if "t" in b: _loc(b["t"], f"{w}.t", errs, sl)
                            if "areas" in b: _loc(b["areas"], f"{w}.areas", errs, sl)
                            _paras(b["p"], f"{w}.p", errs, True, sl)
                    fg = s.get("figs", [])
                    if not isinstance(fg, list) or len(fg) > 3: errs.append(f"{at}.figs: must be a list of at most 3 {{pos, img}}")
                    else:
                        for j, f in enumerate(fg):
                            w = f"{at}.figs[{j}]"
                            if not isinstance(f, dict) or set(f) != {"pos", "img"} or f["pos"] not in ("top", "end"): errs.append(f"{w}: must be {{pos: 'top'|'end', img}}"); continue
                            _img(f["img"], f"{w}.img", errs, img_exists)
                            if not re.match(r"^\d{1,5}/\d{1,5}$", str(f["img"].get("r", ""))) if isinstance(f["img"], dict) else True: errs.append(f"{w}.img.r: required, like '1536/1024'")
                    kt = s.get("kit")
                    if not isinstance(kt, dict) or not {"l", "img"} <= set(kt) or set(kt) - {"l", "note", "img", "crops"}: errs.append(f"{at}.kit: must be {{l, img[, note, crops]}}")
                    else:
                        _loc(kt["l"], f"{at}.kit.l", errs, sl)
                        if "note" in kt: _loc(kt["note"], f"{at}.kit.note", errs, sl)
                        _img(kt["img"], f"{at}.kit.img", errs, img_exists)
                        cr = kt.get("crops", [])
                        if not isinstance(cr, list) or len(cr) > 4: errs.append(f"{at}.kit.crops: must be a list of at most 4 {{l, img}} (mobile-only details cut from the kit)")
                        else:
                            for j, c in enumerate(cr):
                                w = f"{at}.kit.crops[{j}]"
                                if not isinstance(c, dict) or set(c) != {"l", "img"}: errs.append(f"{w}: must be {{l, img}}"); continue
                                _loc(c["l"], f"{w}.l", errs, sl); _img(c["img"], f"{w}.img", errs, img_exists)
                                if isinstance(c["img"], dict) and not re.match(r"^\d{1,5}/\d{1,5}$", str(c["img"].get("r", ""))): errs.append(f"{w}.img.r: required, like '700/430'")
                        if isinstance(kt["img"], dict) and not re.match(r"^\d{1,5}/\d{1,5}$", str(kt["img"].get("r", ""))): errs.append(f"{at}.kit.img.r: required, like '1448/1086'")
                else:
                    for k in ("p", "media"):
                        if k not in s: errs.append(f"{at} (chapter): missing required field '{k}'")
                    for k in ("eb", "sub", "kit"):
                        if k in s: errs.append(f"{at}: '{k}' needs 'blocks'")
                if "p" in s: _paras(s["p"], f"{at}.p", errs, True, sl)
                md = s.get("media")
                if ed: pass
                elif not isinstance(md, list) or not md: errs.append(f"{at}.media: must be a non-empty list of images")
                else:
                    for j, im in enumerate(md):
                        _img(im, f"{at}.media[{j}]", errs, img_exists)
                        if isinstance(im, dict) and not re.match(r"^\d{1,5}/\d{1,5}$", str(im.get("r", ""))): errs.append(f"{at}.media[{j}].r: required, like '1600/1200'")
                for j, m in enumerate(s.get("meta", [])):
                    if not isinstance(m, dict) or set(m) != {"l", "v"}: errs.append(f"{at}.meta[{j}]: must be {{l, v}}"); continue
                    _loc(m["l"], f"{at}.meta[{j}].l", errs); _loc(m["v"], f"{at}.meta[{j}].v", errs)
                mt = s.get("metric")
                if mt is not None:
                    if not isinstance(mt, dict) or not {"n", "l"} <= set(mt) or set(mt) - {"n", "l", "note"}: errs.append(f"{at}.metric: must be {{n, l[, note]}}")
                    else:
                        for f in mt: _loc(mt[f], f"{at}.metric.{f}", errs)
                for j, ln in enumerate(s.get("links", [])):
                    if not isinstance(ln, dict) or set(ln) != {"href", "l"}: errs.append(f"{at}.links[{j}]: must be {{href, l}}"); continue
                    if not _url_ok(ln["href"]): errs.append(f"{at}.links[{j}].href: must be an absolute https URL ({ln['href']!r})")
                    _loc(ln["l"], f"{at}.links[{j}].l", errs)
            if typ == "index":
                _paras(s.get("p", []), f"{at}.p", errs, True, sl)
                its = s.get("items")
                if not isinstance(its, list) or not its: errs.append(f"{at}.items: must be a non-empty list")
                else:
                    ids = {x.get("id") for x in secs if isinstance(x, dict) and x.get("type") == "chapter"}
                    for j, it in enumerate(its):
                        w = f"{at}.items[{j}]"
                        if not isinstance(it, dict) or set(it) != {"to", "n", "l", "tag"}: errs.append(f"{w}: must be {{to, n, l, tag}}"); continue
                        if it["to"] not in ids: errs.append(f"{w}.to: '{it['to']}' is not a chapter id of this project")
                        if not isinstance(it["n"], str) or not re.match(r"^\d{2}$", it["n"]): errs.append(f"{w}.n: two digits, like '01'")
                        _loc(it["l"], f"{w}.l", errs, sl); _loc(it["tag"], f"{w}.tag", errs, sl)
            if typ == "metrics":
                if "p" in s: _paras(s["p"], f"{at}.p", errs, False, sl)
                if "after" in s: _paras(s["after"], f"{at}.after", errs, False, sl)
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
            if not isinstance(st, dict) or not {"href", "l"} <= set(st) or set(st) - {"href", "l", "langs"}:
                errs.append(f"PROJ[{d.get('key')}].site: must be {{href, l[, langs]}}")
            else:
                if not str(st["href"]).startswith("https://"): errs.append(f"PROJ[{d.get('key')}].site.href: must start with https://")
                _loc(st["l"], f"PROJ[{d.get('key')}].site.l", errs, _langs(st, f"PROJ[{d.get('key')}].site", errs))
    return errs


def plain(p, lg):
    """Paragraph text for one language; {name} markers become Markdown links [text](url)."""
    return TOKEN_RE.sub(lambda m: f"[{p['links'][m.group(1)]['t'][lg]}]({p['links'][m.group(1)]['href']})" if m.group(1) in p.get("links", {}) else m.group(0), p[lg])


def flatten(secs, lg):
    """Plain-text view of a project's sections in one language (for llms-full.txt and portfolio.json)."""
    out = []
    for s in secs:
        if lg not in s["h"]: continue      # section written for other languages only
        extra = [f"{m['l'][lg]}: {m['v'][lg]}" for m in s.get("meta", [])] + ([f"{s['metric']['n'][lg]} {s['metric']['l'][lg]}" + (f" ({s['metric']['note'][lg]})" if 'note' in s['metric'] else "")] if s.get("metric") else []) + [f"{x['l'][lg]}: {x['href']}" for x in s.get("links", [])]
        blk = [x for b in s.get("blocks", []) for x in ([b["l"][lg] + (": " + b["t"][lg] if "t" in b else "")] + [plain(p, lg) for p in b["p"] if lg in p] + ([b["areas"][lg]] if "areas" in b else []))]
        blk = ([s["sub"][lg]] if "sub" in s else []) + blk + ([f"{s['kit']['l'][lg]}" + (f" ({s['kit']['note'][lg]})" if "note" in s["kit"] else "")] if "kit" in s else [])
        blk += [f"{it['n']} {it['l'][lg]} ({it['tag'][lg]})" for it in s.get("items", [])] if s["type"] == "index" else []
        paras = [plain(p, lg) for p in s.get("p", []) if lg in p] + blk + [plain(p, lg) for f in s.get("flow", []) for p in f.get("p", []) if lg in p] + [plain(p, lg) for p in s.get("after", []) if lg in p] + extra
        if s["type"] == "metrics":
            paras.insert(len(s.get("p", [])), " · ".join(f"{it['n'][lg]} {it['l'][lg]}" for it in s["items"]))
        out.append({"id": s["id"], "heading": s["t"][lg] if "t" in s and lg in s["t"] else s["h"][lg], "label": s["h"][lg], "text": paras})
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
        if not isinstance(h, dict) or not {"tag", "lead", "alt"} <= set(h) or set(h) - {"tag", "lead", "alt", "eb", "h1", "lead2", "facts", "cta"}: errs.append(f"HERO['{pk}']: must be {{tag, lead, alt[, eb, h1, lead2, facts, cta]}}"); continue
        for f in ("tag", "lead", "alt", "eb", "h1", "lead2"):
            if f in h: _loc(h[f], f"HERO['{pk}'].{f}", errs)
        if "cta" in h:
            c = h["cta"]
            if not isinstance(c, dict) or set(c) != {"h", "p", "b"}: errs.append(f"HERO['{pk}'].cta: must be {{h, p, b}}")
            else:
                for f in c: _loc(c[f], f"HERO['{pk}'].cta.{f}", errs)
        if "facts" in h:
            fc = h["facts"]
            if not isinstance(fc, list) or len(fc) != 4: errs.append(f"HERO['{pk}'].facts: must be a list of exactly 4 {{l, v}}")
            else:
                for j, f in enumerate(fc):
                    if not isinstance(f, dict) or set(f) != {"l", "v"}: errs.append(f"HERO['{pk}'].facts[{j}]: must be {{l, v}}"); continue
                    _loc(f["l"], f"HERO['{pk}'].facts[{j}].l", errs); _loc(f["v"], f"HERO['{pk}'].facts[{j}].v", errs)
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
