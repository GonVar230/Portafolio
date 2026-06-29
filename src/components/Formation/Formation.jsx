import "./Formation.css";

const COURSES = [
  {
    id: 1,
    icon: "⚛",
    iconBg: "#61DAFB",
    iconColor: "#20232a",
    title: "Curso 1 — Tu título aquí",
    desc: "Descripción del curso: qué aprendiste, qué construiste, qué habilidades desarrollaste.",
    badge: "Proyecto final",
  },
  {
    id: 2,
    icon: "JS",
    iconBg: "#F7DF1E",
    iconColor: "#1a1a1a",
    title: "Curso 2 — Tu título aquí",
    desc: "Descripción del segundo curso. Qué tecnologías cubre y qué proyecto final tiene.",
    badge: "Proyecto final",
  },
  {
    id: 3,
    icon: "</>",
    iconBg: "#6366F1",
    iconColor: "#fff",
    title: "Curso 3 — Tu título aquí",
    desc: "Descripción del tercer curso. Podés incluir el nombre de la plataforma o instructor.",
    badge: "Proyecto final",
  },
];

export default function Formation() {
  return (
    <section id="formacion" className="formation">
      <div className="container">
        <div className="formation__header">
          <div>
            <p className="formation__eyebrow">Aprendizaje</p>
            <h2 className="section-title">Formación</h2>
          </div>
          <a href="#formacion" className="formation__ver-todos">
            Ver todos los cursos <span>→</span>
          </a>
        </div>

        <div className="formation__grid">
          {COURSES.map((c) => (
            <div key={c.id} className="formation__card">
              <div
                className="formation__icon"
                style={{ background: c.iconBg, color: c.iconColor }}
              >
                {c.icon}
              </div>
              <div className="formation__content">
                <h3 className="formation__title">{c.title}</h3>
                <p className="formation__desc">{c.desc}</p>
                <span className="formation__badge">{c.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
