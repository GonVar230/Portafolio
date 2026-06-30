import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Hero.css";

const CODE_LINES = [
  { kw: "import", plain: " React ", kw2: "from", str: " 'react'" },
  null,
  { kw: "function", cls: " App", plain: "() {" },
  { plain: "  ", kw: "return", plain2: " (" },
  { tag: "  <div", str: ' className="app"', tag2: ">" },
  { tag: "    <h1>", plain: "Construyendo ideas", tag2: "</h1>" },
  { tag: "    <p>", plain: "Con código y propósito.", tag2: "</p>" },
  { tag: "  </div>" },
  { plain: "  )" },
  { plain: "}" },
  null,
  { kw: "export", kw2: " default", cls: " App" },
];

const C = {
  kw:    "#c678dd",
  str:   "#98c379",
  cls:   "#e5c07b",
  tag:   "#61afef",
  plain: "#abb2bf",
};

function CodeLine({ line }) {
  if (!line) return <div className="hero__code-line"><span style={{ color: C.plain }}>&nbsp;</span></div>;
  return (
    <div className="hero__code-line">
      {Object.entries(line).map(([key, val], i) => {
        const baseKey = key.replace(/\d+$/, "");
        const color = C[baseKey] || C.plain;
        return <span key={i} style={{ color }}>{val}</span>;
      })}
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="inicio" className="hero">
      <div className="hero__bg-dots" aria-hidden="true" />

      <div className="container hero__inner">

        {/* ── LEFT ── */}
        <div className="hero__content">

          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Disponible para proyectos freelance
          </div>

          <h1 className="hero__title">
            Desarrollador Web<br />
            con <span className="hero__accent">React</span>
          </h1>

          <p className="hero__sub">Pienso, creo y mejoro en cosas nuevas.</p>

          <div className="hero__ctas">
            <button className="hero__btn hero__btn--primary" onClick={() => scrollTo("proyectos")}>
              Ver proyectos →
            </button>
            <button className="hero__btn hero__btn--secondary" onClick={() => scrollTo("contacto")}>
              Contactarme ✉
            </button>
          </div>

          <div className="hero__social">
            <a href="https://github.com/GonVar230" target="_blank" rel="noreferrer" className="hero__social-link">
              <FaGithub size={20} /> GitHub
            </a>
            <span className="hero__social-divider" />
            <a href="https://www.linkedin.com/in/gonzalo-varela-5a044532a/" target="_blank" rel="noreferrer" className="hero__social-link">
              <FaLinkedin size={20} /> LinkedIn
            </a>
          </div>

        </div>

        {/* ── RIGHT — code window ── */}
        <div className="hero__visual">
          <div className="hero__window">

            <div className="hero__window-header">
              <span className="hero__window-dot hero__window-dot--red" />
              <span className="hero__window-dot hero__window-dot--yellow" />
              <span className="hero__window-dot hero__window-dot--green" />
            </div>

            <div className="hero__code">
              {CODE_LINES.map((line, i) => (
                <div key={i} className="hero__code-row">
                  <span className="hero__code-num">{i + 1}</span>
                  <CodeLine line={line} />
                </div>
              ))}
            </div>

          </div>

          <div className="hero__badge-float hero__badge-float--react">⚛</div>
          <div className="hero__badge-float hero__badge-float--js">JS</div>
          <div className="hero__badge-float hero__badge-float--html">&lt;/&gt;</div>
        </div>

      </div>
    </section>
  );
}