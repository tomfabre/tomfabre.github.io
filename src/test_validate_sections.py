"""Tests for validate_sections.py. Run: python3 -m unittest test_validate_sections -v   (from src/)"""
import copy, unittest
from validate_sections import validate, flatten

L = lambda s: {"es": s, "en": s, "fr": s}
GOOD = {"demo": [
    {"type": "text", "id": "reto", "h": L("Reto"), "t": L("Titular"), "p": [L("Uno"), {**L("Dos"), "em": True}]},
    {"type": "metrics", "id": "cifras", "h": L("Cifras"), "p": [L("Intro")], "items": [{"n": L("+1"), "l": L("algo")}], "after": [L("Nota")]},
]}
KEYS = {"demo", "otro"}
NOIMG = lambda k, v: False
YESIMG = lambda k, v: True


def errs(mod, img=NOIMG, projects=None):
    s = copy.deepcopy(GOOD); mod(s); return validate(s, KEYS, img, projects)


class T(unittest.TestCase):
    def test_valid(self): self.assertEqual(validate(GOOD, KEYS, NOIMG), [])
    def test_unknown_type(self):
        e = errs(lambda s: s["demo"][0].update(type="quote")); self.assertTrue(any("unknown section type 'quote'" in x for x in e), e)
    def test_missing_translation(self):
        e = errs(lambda s: s["demo"][0]["p"][0].pop("fr")); self.assertTrue(any("p[0].fr" in x for x in e), e)
    def test_empty_translation(self):
        e = errs(lambda s: s["demo"][0]["h"].update(en="  ")); self.assertTrue(any("h.en" in x for x in e), e)
    def test_extra_language(self):
        e = errs(lambda s: s["demo"][0]["h"].update(de="x")); self.assertTrue(any("'de'" in x for x in e), e)
    def test_duplicate_id(self):
        e = errs(lambda s: s["demo"][1].update(id="reto")); self.assertTrue(any("duplicate id" in x for x in e), e)
    def test_bad_id(self):
        e = errs(lambda s: s["demo"][0].update(id="Mi Id")); self.assertTrue(any("id must be" in x for x in e), e)
    def test_missing_required(self):
        e = errs(lambda s: s["demo"][0].pop("p")); self.assertTrue(any("missing required field 'p'" in x for x in e), e)
    def test_unexpected_field(self):
        e = errs(lambda s: s["demo"][0].update(colour="red")); self.assertTrue(any("unexpected field 'colour'" in x for x in e), e)
    def test_unknown_project(self):
        s = copy.deepcopy(GOOD); s["nada"] = s.pop("demo"); self.assertTrue(any("unknown project key" in x for x in validate(s, KEYS, NOIMG)))
    def test_empty_paragraph_list(self):
        e = errs(lambda s: s["demo"][0].update(p=[])); self.assertTrue(any("non-empty list" in x for x in e), e)
    def test_bad_em(self):
        e = errs(lambda s: s["demo"][0]["p"][0].update(em="si")); self.assertTrue(any(".em" in x for x in e), e)
    def test_metric_shape(self):
        e = errs(lambda s: s["demo"][1]["items"][0].pop("l")); self.assertTrue(any("items[0]" in x for x in e), e)
    def test_img_missing_file(self):
        e = errs(lambda s: s["demo"][0].update(img={"key": "demo", "v": "9", "alt": L("a")})); self.assertTrue(any("does not exist" in x for x in e), e)
    def test_img_ok(self):
        self.assertEqual(errs(lambda s: s["demo"][0].update(img={"key": "demo", "v": "9", "alt": L("a")}), YESIMG), [])
    def test_img_alt_required_translation(self):
        a = L("a"); a.pop("fr"); e = errs(lambda s: s["demo"][0].update(img={"key": "demo", "v": "9", "alt": a}), YESIMG); self.assertTrue(any("img.alt.fr" in x for x in e), e)
    def test_role_and_site(self):
        p = [{"key": "demo", "role": L("Rol"), "site": {"href": "http://x.es", "l": L("Ver")}}]
        e = errs(lambda s: None, projects=p); self.assertTrue(any("https://" in x for x in e), e)
    def test_role_missing_lang(self):
        r = L("Rol"); r.pop("en"); e = errs(lambda s: None, projects=[{"key": "demo", "role": r}]); self.assertTrue(any("role.en" in x for x in e), e)
    def test_flatten(self):
        f = flatten(GOOD["demo"], "es"); self.assertEqual(f[0]["heading"], "Titular"); self.assertEqual(f[1]["text"], ["Intro", "+1 algo", "Nota"])


if __name__ == "__main__": unittest.main()
