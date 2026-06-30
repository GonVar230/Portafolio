import "./SobreMi.css";

const STATS = [
  { value: "1+", label: "Años aprendiendo" },
  { value: "7+", label: "Proyectos realizados" },
  { value: "5", label: "Cursos completados" },
];

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="sobre">
      <div className="container sobre__inner">
        {/* Left */}
        <div className="sobre__content">
          <p className="sobre__eyebrow">Sobre mí</p>
          <h2 className="section-title">El desarrollador<br />detrás del código</h2>
          <p className="sobre__text">
            Soy Gonzalo Varela, desarrollador web autodidacta con pasión por construir
            interfaces modernas y funcionales. Me especializo en React y JavaScript,
            siempre buscando mejorar la experiencia del usuario.
          </p>
          <p className="sobre__text">
            Aprendo de forma autónoma desarrollando proyectos reales que resuelven problemas
            concretos. Actualmente profundizando en Node.js y Next.js para sumar el lado del servidor.
          </p>

          <div className="sobre__stats">
            {STATS.map((s) => (
              <div key={s.label} className="sobre__stat">
                <span className="sobre__stat-value">{s.value}</span>
                <span className="sobre__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — journey steps */}
        <div className="sobre__journey">
          {JOURNEY.map((step, i) => (
            <div key={i} className="sobre__step">
              <div className="sobre__step-icon">{step.icon}</div>
              <div>
                <h4 className="sobre__step-title">{step.title}</h4>
                <p className="sobre__step-desc">{step.desc}</p>
              </div>
              {i < JOURNEY.length - 1 && <span className="sobre__step-arrow">→</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const JOURNEY = [
  { icon: "📖", title: "Autodidacta",      desc: "Aprendí de forma autónoma desarrollando proyectos propios." },
  { icon: "🎓", title: "Formación",        desc: "Complementé mis conocimientos con cursos para construir una base sólida." },
  { icon: "</>", title: "Proyectos reales", desc: "Aplico lo aprendido en proyectos funcionales que resuelven problemas reales." },
  { icon: "🚀", title: "Mejora constante", desc: "Sigo aprendiendo cada día para crear mejores soluciones." },
];
