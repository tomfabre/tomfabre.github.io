import contextlib, io, os, subprocess, tempfile, unittest
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


def _git(cwd, *a):
    subprocess.run(["git", "-C", cwd, "-c", "user.email=t@t", "-c", "user.name=t", *a], check=True, capture_output=True)

class SyncDistIntegracion(unittest.TestCase):
    """Escenarios reales con un origin bare temporal: primer despliegue, bundle publicado antiguo, sin origin."""
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory(); self.addCleanup(self.tmp.cleanup)
        self.origin = os.path.join(self.tmp.name, "origin.git"); self.repo = os.path.join(self.tmp.name, "repo")
        _git(self.tmp.name, "init", "-q", "--bare", "-b", "main", self.origin)
        os.makedirs(os.path.join(self.repo, "src", "dist", "js")); os.makedirs(os.path.join(self.repo, "js"))
        _git(self.repo, "init", "-q", "-b", "main"); _git(self.repo, "remote", "add", "origin", self.origin)

    def w(self, rel, txt=""):
        p = os.path.join(self.repo, rel); os.makedirs(os.path.dirname(p), exist_ok=True); open(p, "w").write(txt)

    def publish(self, html):
        self.w("index.html", html); _git(self.repo, "add", "-A"); _git(self.repo, "commit", "-qm", "x"); _git(self.repo, "push", "-q", "origin", "main")

    def dist(self, name):
        self.w("src/dist/js/" + name, "//js"); self.w("src/dist/index.html", f'<script src="/js/{name}"></script>')

    def run_sync(self, *flags):
        with contextlib.redirect_stdout(io.StringIO()):
            rc = sd.main(list(flags), here=os.path.join(self.repo, "src"))
        self.assertEqual(rc, 0)
        return sorted(os.listdir(os.path.join(self.repo, "js")))

    def test_primer_despliegue_main_con_js_en_linea_no_borra_nada(self):
        self.publish("<script>inline()</script>")                    # origin/main sin bundles (estado actual real)
        self.w("js/gsap.min.js"); self.w("js/motion.js")
        self.dist("app.1111111111.js")
        self.assertEqual(self.run_sync(), ["app.1111111111.js", "gsap.min.js", "motion.js"])

    def test_bundle_publicado_se_conserva_y_el_antiguo_no_referenciado_se_poda(self):
        self.w("js/app.0000000000.js"); self.publish('<script src="/js/app.0000000000.js"></script>')   # publicado
        self.w("js/app.aaaaaaaaaa.js")                                 # huérfano: nadie lo referencia
        self.dist("app.2222222222.js")
        self.assertEqual(self.run_sync(), ["app.0000000000.js", "app.2222222222.js"])

    def test_bundle_que_referencia_la_raiz_antes_de_copiar_se_conserva(self):
        self.publish("<script>inline()</script>")
        self.w("js/app.3333333333.js"); self.w("index.html", '<script src="/js/app.3333333333.js"></script>')  # sin publicar aún
        self.dist("app.4444444444.js")
        self.assertEqual(self.run_sync(), ["app.3333333333.js", "app.4444444444.js"])

    def test_sin_origin_no_borra_nada(self):
        _git(self.repo, "remote", "remove", "origin")
        self.w("js/app.5555555555.js"); self.dist("app.6666666666.js")
        self.assertEqual(self.run_sync(), ["app.5555555555.js", "app.6666666666.js"])

    def test_dry_run_no_copia_ni_borra(self):
        self.publish("<script>inline()</script>"); self.w("js/app.7777777777.js"); self.dist("app.8888888888.js")
        self.assertEqual(self.run_sync("--dry-run"), ["app.7777777777.js"])
        self.assertTrue(os.path.isdir(os.path.join(self.repo, "src", "dist")))

if __name__ == "__main__":
    unittest.main()
