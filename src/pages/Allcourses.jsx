import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaReact, FaCode, FaFileExcel } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiAnthropic } from "react-icons/si";
import CertificateModal from "../components/Formation/CertificateModal";

import certReact  from "../assets/certificados/certificado-react.png";
import certJs     from "../assets/certificados/Certificado-js.png";
import certWeb    from "../assets/certificados/certificado-desarrolloweb.png";
import certExcel  from "../assets/certificados/curso-excel.png";
import certAI     from "../assets/certificados/certificado-anthropic.png";

import "./AllCourses.css";

const ALL_COURSES = [
  {
    id: 1,
    Icon: FaReact,
    iconColor: "#61DAFB",
    iconBg: "#20232a",
    title: "React JS",
    platform: "Coderhouse",
    duration: "8 semanas · 8hs en vivo",
    desc: "Desarrollo de aplicaciones con React, manejo de estado, Context API, React Router y proyecto final con Firebase.",
    cert: certReact,
    featured: true,
  },
  {
    id: 2,
    Icon: IoLogoJavascript,
    iconColor: "#1a1a1a",
    iconBg: "#F7DF1E",
    title: "JavaScript",
    platform: "Coderhouse",
    duration: "10 semanas · 20hs de formación",
    desc: "Fundamentos de JavaScript ES6+, DOM, asincronismo, fetch y lógica de programación aplicada a proyectos reales.",
    cert: certJs,
    featured: true,
  },
  {
    id: 3,
    Icon: FaCode,
    iconColor: "#fff",
    iconBg: "#6366F1",
    title: "Desarrollo Web",
    platform: "Coderhouse — TOP 10",
    duration: "10 semanas · 38hs de formación",
    desc: "HTML5, CSS3, diseño responsive y buenas prácticas para construir sitios modernos. Finalizado en el TOP 10 del curso.",
    cert: certWeb,
    featured: true,
  },
  {
    id: 4,
    Icon: FaFileExcel,
    iconColor: "#fff",
    iconBg: "#217346",
    title: "Excel TOTAL — De Cero a Avanzado",
    platform: "Udemy",
    duration: "37.5 horas en total",
    desc: "Excel completo desde cero hasta nivel avanzado. Fórmulas, tablas dinámicas, gráficos, macros y automatización de tareas.",
    cert: certExcel,
    featured: false,
  },
  {
    id: 5,
    Icon: SiAnthropic,
    iconColor: "#fff",
    iconBg: "#6B7F6B",
    title: "Claude Code in Action",
    platform: "Anthropic",
    duration: "Marzo 2026",
    desc: "Curso oficial de Anthropic sobre Claude Code. Uso de IA para desarrollo de software, automatización y flujos de trabajo con inteligencia artificial.",
    cert: certAI,
    featured: false,
  },
];

export default function AllCourses() {
  const [certImg, setCertImg]   = useState(null);
  const navigate                = useNavigate();

  return (
    <div className="allc">

      {/* Header */}
      <div className="allc__header">
        <div className="allc__header-inner">
          <button className="allc__back" onClick={() => navigate("/")}>
            ← Volver al portfolio
          </button>
          <div className="allc__hero">
            <div>
              <p className="allc__eyebrow">Aprendizaje</p>
              <h1 className="allc__title">Todos los cursos</h1>
              <p className="allc__sub">{ALL_COURSES.length} certificados · Coderhouse, Udemy y Anthropic</p>
            </div>
            <div className="allc__stats">
              <div className="allc__stat">
                <span className="allc__stat-value">{ALL_COURSES.length}</span>
                <span className="allc__stat-label">Cursos</span>
              </div>
              <div className="allc__stat">
                <span className="allc__stat-value">3</span>
                <span className="allc__stat-label">Plataformas</span>
              </div>
              <div className="allc__stat">
                <span className="allc__stat-value">TOP 10</span>
                <span className="allc__stat-label">Desarrollo Web</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <main className="allc__main">
        <div className="allc__grid">
          {ALL_COURSES.map((c) => (
            <div key={c.id} className={`allc__card${c.featured ? " allc__card--featured" : ""}`}>
              <div className="allc__icon" style={{ background: c.iconBg }}>
                <c.Icon size={26} color={c.iconColor} />
              </div>
              <div className="allc__content">
                <div className="allc__meta">
                  <h3 className="allc__title-card">{c.title}</h3>
                  <span className="allc__platform">{c.platform}</span>
                </div>
                <p className="allc__duration">{c.duration}</p>
                <p className="allc__desc">{c.desc}</p>
                <button className="allc__cert-btn" onClick={() => setCertImg(c.cert)}>
                  Ver certificado 🎓
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {certImg && <CertificateModal img={certImg} onClose={() => setCertImg(null)} />}
    </div>
  );
}
