import os, tempfile, unittest
import lastmod as lm

class Decide(unittest.TestCase):
    def test_sin_cambios_conserva_fecha(self):
        self.assertEqual(lm.decide({"hash": "a", "date": "2026-01-01"}, "a", "a", "2026-02-02", "2026-11-23"), ("a", "2026-01-01"))
    def test_cambio_pone_hoy(self):
        self.assertEqual(lm.decide({"hash": "a", "date": "2026-01-01"}, "b", "a", "2026-02-02", "2026-11-23"), ("b", "2026-11-23"))
    def test_nuevo_igual_a_publicado_usa_fecha_git(self):
        self.assertEqual(lm.decide(None, "a", "a", "2026-02-02", "2026-11-23"), ("a", "2026-02-02"))
    def test_nuevo_distinto_usa_hoy(self):
        self.assertEqual(lm.decide(None, "b", "a", "2026-02-02", "2026-11-23"), ("b", "2026-11-23"))

class Hash(unittest.TestCase):
    def test_ignora_nombre_del_bundle(self):
        self.assertEqual(lm.norm_hash(b'<script src="/js/app.0123456789.js">'), lm.norm_hash(b'<script src="/js/app.abcdef0123.js">'))

class Apply(unittest.TestCase):
    def test_inyecta_lastmod_y_no_inventa_si_falta_pagina(self):
        with tempfile.TemporaryDirectory() as dist, tempfile.TemporaryDirectory() as repo:
            open(os.path.join(dist, "index.html"), "w").write("hola")
            xml = '<url><loc>https://x.com/</loc><priority>1</priority></url><url><loc>https://x.com/no/</loc></url>'
            out, st = lm.apply(xml, "https://x.com", dist, repo, {}, today="2026-11-23")
            self.assertIn("<loc>https://x.com/</loc><lastmod>2026-11-23</lastmod>", out)
            self.assertIn("<loc>https://x.com/no/</loc></url>", out)
            self.assertEqual(list(st), ["https://x.com/"])

if __name__ == "__main__":
    unittest.main()
