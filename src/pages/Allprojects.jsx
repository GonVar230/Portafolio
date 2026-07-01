import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import ProjectModal from "../components/Projects/ProjectModal";

import ecommerce1 from "../assets/e-commerce/hero.png";
import ecommerce2 from "../assets/e-commerce/productos.png";
import ecommerce3 from "../assets/e-commerce/detalle-producto.png";
import ecommerce4 from "../assets/e-commerce/carrito.png";
import ecommerce5 from "../assets/e-commerce/compra-finalizada.png";

import finflow1 from "../assets/gasto-ingreso/form-inicial.png";
import finflow2 from "../assets/gasto-ingreso/dashboard.png";
import finflow3 from "../assets/gasto-ingreso/agregar-ingreso.png";

import quizz1 from "../assets/quizz/inicio-quizz.png";
import quizz2 from "../assets/quizz/inicio-preguntas.png";
import quizz3 from "../assets/quizz/respuesta-correcta.png";
import quizz4 from "../assets/quizz/respuesta-incorrecta.png";
import quizz5 from "../assets/quizz/resumen.png";

import portafolio from "../assets/portafolio/inicio-portafolio.png";

import "./Allprojects.css";

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
    github: "https://github.com/GonVar230/Portafolio",
    images: [portafolio],
  },
];

export default function AllProjects() {
  const [modal, setModal] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="allp">

      <div className="allp__header">
        <div className="allp__header-inner">
          <button className="allp__back" onClick={() => navigate("/")}>
            ← Volver al portfolio
          </button>
          <div className="allp__hero">
            <div>
              <p className="allp__eyebrow">Trabajo</p>
              <h1 className="allp__title">Todos los proyectos</h1>
              <p className="allp__sub">{ALL_PROJECTS.length} proyectos · React, JavaScript, Firebase y más</p>
            </div>
            <div className="allp__stats">
              <div className="allp__stat">
                <span className="allp__stat-value">{ALL_PROJECTS.length}</span>
                <span className="allp__stat-label">Proyectos</span>
              </div>
              <div className="allp__stat">
                <span className="allp__stat-value">8+</span>
                <span className="allp__stat-label">Tecnologías</span>
              </div>
              <div className="allp__stat">
                <span className="allp__stat-value">1+</span>
                <span className="allp__stat-label">Años</span>
              </div>
            </div>
          </div>
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
                    <button className="allp__link allp__link--primary" onClick={() => setModal(p)}>
                      Ver más 
                    </button>
                  )}
                  <a href={p.github} target="_blank" rel="noreferrer" className="allp__link">
                    <FaGithub size={14} /> GitHub
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