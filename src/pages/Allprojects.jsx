import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectModal from "../components/Projects/ProjectModal";

// ── E-commerce ──────────────────────────────────────────
import ecommerce1 from "../assets/e-commerce/hero.png";
import ecommerce2 from "../assets/e-commerce/productos.png";
import ecommerce3 from "../assets/e-commerce/detalle-producto.png";
import ecommerce4 from "../assets/e-commerce/carrito.png";
import ecommerce5 from "../assets/e-commerce/compra-finalizada.png";

// ── Gestor financiero ───────────────────────────────────
import finflow1 from "../assets/gasto-ingreso/form-inicial.png";
import finflow2 from "../assets/gasto-ingreso/dashboard.png";
import finflow3 from "../assets/gasto-ingreso/agregar-ingreso.png";

// ── Quizz ───────────────────────────────────────────────
import quizz1 from "../assets/quizz/inicio-quizz.png";
import quizz2 from "../assets/quizz/inicio-preguntas.png";
import quizz3 from "../assets/quizz/respuesta-correcta.png";
import quizz4 from "../assets/quizz/respuesta-incorrecta.png";
import quizz5 from "../assets/quizz/resumen.png";

import "./AllProjects.css";

const ALL_PROJECTS = [
  {
    id: 1,
    title: "Vintage Jerseys",
    description: "E-commerce de camisetas de fútbol vintage. Explorá y comprá camisetas históricas con carrito de compras, autenticación de usuarios y gestión de productos en tiempo real con Firebase.",
    tags: ["React", "Firebase", "CSS", "Bootstrap Icons", "Context API", "React Router DOM", "Vite"],
    github: "https://github.com/GonVar230/E-commerce",
    images: [ecommerce1, ecommerce2, ecommerce3, ecommerce4, ecommerce5],
  },
  {
    id: 2,
    title: "FinFlow — Gestor Financiero",
    description: "Aplicación para administrar ingresos, gastos y ahorros personales. Balance mensual, filtros por categoría, conversión de monedas en tiempo real y progreso guardado en el navegador.",
    tags: ["HTML5", "CSS3", "JavaScript ES6+", "SweetAlert2", "Bootstrap Icons", "Exchange Rate API"],
    github: "https://github.com/GonVar230/Registro-gastos-e-ingresos-",
    images: [finflow1, finflow2, finflow3],
  },
  {
    id: 3,
    title: "Quizz JavaScript",
    description: "Juego de preguntas y respuestas sobre JavaScript. Respondé una serie de preguntas de opción múltiple, recibí feedback inmediato por cada respuesta y consultá tu puntaje final en la pantalla de resumen.",
    tags: ["HTML5", "CSS3", "JavaScript", "JSON"],
    github: "https://github.com/GonVar230/Quizz-",
    images: [quizz1, quizz2, quizz3, quizz4, quizz5],
  },
  {
    id: 4,
    title: "Portfolio Personal",
    description: "Este mismo portfolio. Diseño one-page con tema claro/oscuro, animaciones CSS, navegación con scroll spy y componentes React reutilizables.",
    tags: ["React", "CSS3", "Vite", "React Router DOM"],
    github: "https://github.com/GonVar230",
    images: [],
  },
];

export default function AllProjects() {
  const [modal, setModal] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="allp">

      <div className="allp__header">
        <button className="allp__back" onClick={() => navigate("/")}>
          ← Volver al portfolio
        </button>
        <div className="allp__hero">
          <p className="allp__eyebrow">Trabajo</p>
          <h1 className="allp__title">Todos los proyectos</h1>
          <p className="allp__sub">{ALL_PROJECTS.length} proyectos · React, JavaScript, Firebase y más</p>
        </div>
      </div>

      <main className="allp__main">
        <div className="allp__grid">
          {ALL_PROJECTS.map((p) => (
            <article key={p.id} className="allp__card">

              <div className="allp__img-wrap">
                {p.images.length > 0 ? (
                  <img src={p.images[0]} alt={p.title} className="allp__img" />
                ) : (
                  <div className="allp__img-placeholder">
                    <span>🖼</span>
                    <span>Próximamente</span>
                  </div>
                )}
                {p.images.length > 1 && (
                  <span className="allp__img-count">📷 {p.images.length}</span>
                )}
              </div>

              <div className="allp__info">
                <h3 className="allp__card-title">{p.title}</h3>
                <p className="allp__card-desc">{p.description}</p>

                <div className="allp__tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="allp__tag">{tag}</span>
                  ))}
                </div>

                <div className="allp__links">
                  {p.images.length > 0 && (
                    <button
                      className="allp__link allp__link--primary"
                      onClick={() => setModal(p)}
                    >
                      Ver más 
                    </button>
                  )}
                  <a href={p.github} target="_blank" rel="noreferrer" className="allp__link">
                    GitHub
                    <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </article>
          ))}
        </div>
      </main>

      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
    </div>
  );
}