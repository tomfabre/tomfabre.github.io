"""Minimal social-card renderer (1200x630) that mirrors the site's look: cream background, Outfit, thin brand colour stripe.
Used by build.py for every page that has its own social image. Pure Pillow; the font is og-assets/outfit-latin-ext-wght.ttf (Outfit, SIL OFL)."""
import os
from PIL import Image, ImageDraw, ImageFont

S = 2   # render at 2x so text and edges stay crisp when platforms scale the card
W, H = 1200 * S, 630 * S
BG, FG, MUTED, LINE = (253, 249, 240), (44, 44, 44), (122, 119, 111), (230, 224, 210)
STRIPE = [(194, 194, 194), (163, 163, 163), (243, 102, 84), (164, 155, 246), (221, 166, 19), (114, 203, 166)]   # same six colours as og-default-*.jpg
_A = os.path.join(os.path.dirname(os.path.abspath(__file__)), "og-assets")
FONT_LATIN, FONT_EXT = os.path.join(_A, "outfit-latin-wght.ttf"), os.path.join(_A, "outfit-latin-ext-wght.ttf")   # same split as the site's woff2 subsets: U+0000-00FF / U+0100+
PAD = 56 * S
SS = 4   # supersampling for rounded corners

class _F:
    """Outfit at one size/weight; picks the Latin or Latin-Extended subset per character (the site ships them as two files)."""
    def __init__(self, size, weight):
        self.a = ImageFont.truetype(FONT_LATIN, size); self.b = ImageFont.truetype(FONT_EXT, size)
        self.a.set_variation_by_axes([weight]); self.b.set_variation_by_axes([weight])
    def runs(self, t):
        out = []
        for ch in t:
            f = self.a if ord(ch) <= 0xFF else self.b
            if out and out[-1][1] is f: out[-1][0] += ch
            else: out.append([ch, f])
        return out
    def length(self, t): return sum(f.getlength(r) for r, f in self.runs(t))
    def draw(self, d, xy, t, fill):
        x, y = xy
        for r, f in self.runs(t): d.text((x, y), r, font=f, fill=fill); x += f.getlength(r)

def _font(size, weight): return _F(size * S, weight)   # sizes are given in 1200x630 design units

def _wrap(draw, text, font, maxw):
    lines, cur = [], ""
    for word in text.split():
        t = (cur + " " + word).strip()
        if font.length(t) <= maxw or not cur: cur = t
        else: lines.append(cur); cur = word
    if cur: lines.append(cur)
    return lines

def _cover(path, w, h, zoom=1.0):
    im = Image.open(path).convert("RGB"); iw, ih = im.size; r = w / h
    cw, ch = (int(round(ih * r)), ih) if iw / ih > r else (iw, int(round(iw / r)))
    cw, ch = int(cw / zoom), int(ch / zoom); x, y = (iw - cw) // 2, (ih - ch) // 2
    return im.crop((x, y, x + cw, y + ch)).resize((w, h), Image.LANCZOS)

def _rounded(im, radius):
    w, h = im.size
    m = Image.new("L", (w * SS, h * SS), 0); ImageDraw.Draw(m).rounded_rectangle((0, 0, w * SS - 1, h * SS - 1), radius * SS, fill=255)
    out = Image.new("RGBA", (w, h)); out.paste(im, (0, 0)); out.putalpha(m.resize((w, h), Image.LANCZOS)); return out

def _list_card(items, cw, quote=False):
    """Text block on the page background, no box. Default: coloured dot + 32px text (list). quote=True: no dots, 52px semibold lines (a short phrase)."""
    many = len(items) > 4; f = _font(72, 600) if quote else _font(40 if many else 44, 500); pad, gap, line = 0, S * (8 if quote else 16 if many else 30), S * (84 if quote else 50 if many else 54); ind = 0 if quote else 50 * S
    tmp = ImageDraw.Draw(Image.new("RGB", (4, 4))); tw = cw - 2 * pad - ind
    rows = [_wrap(tmp, t, f, tw) for t in items]; vpad = 0
    ch = 2 * vpad + sum(len(r) * line for r in rows) + gap * (len(rows) - 1)
    card = Image.new("RGB", (cw, ch), BG); d = ImageDraw.Draw(card); y = vpad
    for i, r in enumerate(rows):
        if not quote: d.ellipse((pad, y + S * (13 if many else 15), pad + 26 * S, y + S * (39 if many else 41)), fill=STRIPE[2:][i % 4])
        for l in r: f.draw(d, (pad + ind, y), l, FG); y += line
        y += gap
    return card, ch

def render(out, title, kicker, brand, url, images=None, items=None, layout="cover"):
    """layout: cover (one image shown whole, 2:1, or a list of 6 paths as a 3x2 grid) | portrait (one square image) | list (card with `items`) | quote (card with a short phrase, one line per item).
    Title/kicker text is wrapped to the left column."""
    cv = Image.new("RGB", (W, H), BG); d = ImageDraw.Draw(cv)
    if layout == "text": cw = ch = 0; card = None
    elif layout in ("list", "quote"): cw = 580 * S; card, ch = _list_card(items, cw, quote=(layout == "quote"))
    elif layout == "portrait": cw = ch = 380 * S; card = _cover(images, cw, ch)
    elif isinstance(images, str): cw, ch = 660 * S, 380 * S; card = _cover(images, cw, ch)
    else:
        cw, ch = 660 * S, 380 * S; gap = 8 * S; cell_w, cell_h = (cw - gap) // 2, (ch - 2 * gap) // 3
        card = Image.new("RGB", (cw, ch), BG)
        for i, p in enumerate(images): card.paste(_cover(p, cell_w, cell_h), ((i % 2) * (cell_w + gap), (i // 2) * (cell_h + gap)))
    cx, cy = W - PAD - cw, (H - 8 * S - ch) // 2
    if layout not in ("list", "quote", "text"):   # text-only layouts have no box/border; their block is placed after the title, to share its vertical centre
        card = _rounded(card, 22 * S)
        cv.paste(card, (cx, cy), card)
        ring = Image.new("L", (cw * SS, ch * SS), 0); rd = ImageDraw.Draw(ring)
        rd.rounded_rectangle((0, 0, cw * SS - 1, ch * SS - 1), 22 * S * SS, outline=255, width=S * SS)
        cv.paste(Image.new("RGB", (cw, ch), LINE), (cx, cy), ring.resize((cw, ch), Image.LANCZOS))   # hairline border
    colw = (cx - PAD - 36 * S) if layout != "text" else W - 2 * PAD
    if brand: _font(36, 600).draw(d, (PAD, PAD - 6 * S), brand, FG)
    size = 104
    while True:
        tf = _font(size, 600); lines = _wrap(d, title, tf, colw)
        if (len(lines) <= 3 and all(tf.length(l) <= colw for l in lines)) or size <= 48: break
        size -= 4
    lh = int(size * S * 1.06); kf = _font(36, 400); kl = [l.rstrip(" \u00b7") for l in _wrap(d, kicker, kf, colw)] if kicker else []   # no dangling separator at a line end
    block = len(lines) * lh + (len(kl) * 46 * S + 22 * S if kl else 0)
    y = (H - 8 * S - block) // 2 + 4 * S
    if layout in ("list", "quote"): cv.paste(card, (cx, y + (block - ch) // 2))
    for l in lines: tf.draw(d, (PAD, y), l, FG); y += lh
    y += (22 - 4) * S
    for l in kl: kf.draw(d, (PAD, y), l, MUTED); y += 46 * S
    _font(30, 500).draw(d, (PAD, H - 8 * S - PAD - 20 * S), url, MUTED)
    seg = W // len(STRIPE); sh = 8 * S
    for i, c in enumerate(STRIPE): d.rectangle((i * seg, H - sh, W if i == len(STRIPE) - 1 else (i + 1) * seg, H), fill=c)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    for q in (92, 88, 84, 80):   # keep every card under ~300 KB (WhatsApp drops larger previews)
        cv.save(out, "JPEG", quality=q, subsampling=0, optimize=True, progressive=True)
        if os.path.getsize(out) <= 290 * 1024: break
