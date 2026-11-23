"""Minimal social-card renderer (1200x630) that mirrors the site's look: cream background, Outfit, thin brand colour stripe.
Used by build.py for every page that has its own social image. Pure Pillow; the font is og-assets/outfit-latin-ext-wght.ttf (Outfit, SIL OFL)."""
import os
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG, FG, MUTED, LINE = (253, 249, 240), (44, 44, 44), (122, 119, 111), (230, 224, 210)
STRIPE = [(194, 194, 194), (163, 163, 163), (243, 102, 84), (164, 155, 246), (221, 166, 19), (114, 203, 166)]   # same six colours as og-default-*.jpg
_A = os.path.join(os.path.dirname(os.path.abspath(__file__)), "og-assets")
FONT_LATIN, FONT_EXT = os.path.join(_A, "outfit-latin-wght.ttf"), os.path.join(_A, "outfit-latin-ext-wght.ttf")   # same split as the site's woff2 subsets: U+0000-00FF / U+0100+
PAD = 64
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

def _font(size, weight): return _F(size, weight)

def _wrap(draw, text, font, maxw):
    lines, cur = [], ""
    for word in text.split():
        t = (cur + " " + word).strip()
        if font.length(t) <= maxw or not cur: cur = t
        else: lines.append(cur); cur = word
    if cur: lines.append(cur)
    return lines

def _cover(path, w, h):
    im = Image.open(path).convert("RGB"); iw, ih = im.size; r = w / h
    cw, ch = (int(round(ih * r)), ih) if iw / ih > r else (iw, int(round(iw / r)))
    x, y = (iw - cw) // 2, (ih - ch) // 2
    return im.crop((x, y, x + cw, y + ch)).resize((w, h), Image.LANCZOS)

def _rounded(im, radius):
    w, h = im.size
    m = Image.new("L", (w * SS, h * SS), 0); ImageDraw.Draw(m).rounded_rectangle((0, 0, w * SS - 1, h * SS - 1), radius * SS, fill=255)
    out = Image.new("RGBA", (w, h)); out.paste(im, (0, 0)); out.putalpha(m.resize((w, h), Image.LANCZOS)); return out

def render(out, title, kicker, brand, url, images):
    """images: one path (shown whole, 2:1) or a list of 6 paths (3x2 grid). Title/kicker text is wrapped to the left column."""
    cv = Image.new("RGB", (W, H), BG); d = ImageDraw.Draw(cv)
    cw, ch = 616, 308                       # card, 2:1 like the covers
    cx, cy = W - PAD - cw, (H - 8 - ch) // 2
    if isinstance(images, str): card = _cover(images, cw, ch)
    else:
        gap = 6; cell_w, cell_h = (cw - 2 * gap) // 3, (ch - gap) // 2
        card = Image.new("RGB", (cw, ch), BG)
        for i, p in enumerate(images): card.paste(_cover(p, cell_w, cell_h), ((i % 3) * (cell_w + gap), (i // 3) * (cell_h + gap)))
    card = _rounded(card, 22)
    cv.paste(card, (cx, cy), card)
    ring = Image.new("L", (cw * SS, ch * SS), 0); rd = ImageDraw.Draw(ring)
    rd.rounded_rectangle((0, 0, cw * SS - 1, ch * SS - 1), 22 * SS, outline=255, width=SS)
    cv.paste(Image.new("RGB", (cw, ch), LINE), (cx, cy), ring.resize((cw, ch), Image.LANCZOS))   # hairline border
    colw = cx - PAD - 40
    _font(28, 500).draw(d, (PAD, PAD - 4), brand, FG)
    size = 84
    while True:
        tf = _font(size, 600); lines = _wrap(d, title, tf, colw)
        if (len(lines) <= 3 and all(tf.length(l) <= colw for l in lines)) or size <= 48: break
        size -= 4
    lh = int(size * 1.06); kf = _font(26, 400); kl = _wrap(d, kicker, kf, colw) if kicker else []
    block = len(lines) * lh + (len(kl) * 34 + 18 if kl else 0)
    y = (H - 8 - block) // 2 + 4
    for l in lines: tf.draw(d, (PAD, y), l, FG); y += lh
    y += 18 - 4
    for l in kl: kf.draw(d, (PAD, y), l, MUTED); y += 34
    _font(24, 400).draw(d, (PAD, H - 8 - PAD - 18), url, MUTED)
    seg = W // len(STRIPE)
    for i, c in enumerate(STRIPE): d.rectangle((i * seg, H - 8, W if i == len(STRIPE) - 1 else (i + 1) * seg, H), fill=c)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    cv.save(out, "JPEG", quality=90, optimize=True, progressive=True)
