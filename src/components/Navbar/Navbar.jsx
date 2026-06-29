import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Inicio",       href: "#inicio" },
  { label: "Sobre mí",     href: "#sobre-mi" },
  { label: "Tecnologías",  href: "#tecnologias" },
  { label: "Proyectos",    href: "#proyectos" },
  { label: "Formación",    href: "#formacion" },
  { label: "Contacto",     href: "#contacto" },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled]   = useState(false);
  const [active, setActive]       = useState("#inicio");
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a className="navbar__logo" href="#inicio" onClick={(e) => { e.preventDefault(); handleNav("#inicio"); }}>
          <span className="navbar__logo-box">G<span>V</span></span>
          <span className="navbar__logo-name">Gonzalo Varela</span>
        </a>

        {/* Desktop links */}
        <nav className="navbar__links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link${active === link.href ? " navbar__link--active" : ""}`}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Theme toggle */}
        <button className="navbar__theme" onClick={toggleTheme} aria-label="Cambiar tema">
          <span className={`navbar__theme-icon${!isDark ? " navbar__theme-icon--active" : ""}`}>☀️</span>
          <span className={`navbar__theme-icon${isDark ? " navbar__theme-icon--active" : ""}`}>🌙</span>
        </button>

        {/* Hamburger */}
        <button className={`navbar__burger${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen((p) => !p)} aria-label="Menú">
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile${menuOpen ? " navbar__mobile--open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`navbar__mobile-link${active === link.href ? " navbar__mobile-link--active" : ""}`}
            onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
