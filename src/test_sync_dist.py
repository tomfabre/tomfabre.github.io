import os, tempfile, unittest
import sync_dist as sd

class SyncDist(unittest.TestCase):
    def test_plan_prune_solo_hash_y_respeta_keep(self):
        existing = {"app.aaaaaaaaaa.js", "app.bbbbbbbbbb.js", "app.cccccccccc.js", "gsap.min.js", "motion.js", "app.js", "app.zzzzzzzzzz.js.map"}
        self.assertEqual(sd.plan_prune(existing, {"app.cccccccccc.js", "app.aaaaaaaaaa.js"}), ["app.bbbbbbbbbb.js"])

    def test_nunca_borra_otros_archivos(self):
        self.assertEqual(sd.plan_prune({"gsap.min.js", "lenis.min.js", "motion.js", "app.js"}, set()), [])

    def test_refs_in_tree(self):
        with tempfile.TemporaryDirectory() as d:
            os.makedirs(os.path.join(d, "bio")); os.makedirs(os.path.join(d, "src"))
            open(os.path.join(d, "index.html"), "w").write('<script src="/js/app.0123456789.js"></script>')
            open(os.path.join(d, "bio", "index.html"), "w").write('<script src="/js/app.abcdef0123.js"></script>')
            open(os.path.join(d, "src", "index.html"), "w").write('<script src="/js/app.ffffffffff.js"></script>')  # src/ se ignora
            self.assertEqual(sd.refs_in_tree(d), {"app.0123456789.js", "app.abcdef0123.js"})

    def test_origin_no_disponible_devuelve_none(self):
        with tempfile.TemporaryDirectory() as d:
            self.assertIsNone(sd.refs_in_origin(d))

if __name__ == "__main__":
    unittest.main()
