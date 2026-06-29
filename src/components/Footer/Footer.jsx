import "./Footer.css";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">© 2024 Gonzalo Varela. Todos los derechos reservados.</p>
        <button className="footer__top" onClick={scrollTop} aria-label="Volver arriba">
          ↑
        </button>
      </div>
    </footer>
  );
}
