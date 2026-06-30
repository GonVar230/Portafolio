import { useState } from "react";
import { FaReact, FaCode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import CertificateModal from "./CertificateModal";

import certReact  from "../../assets/certificados/certificado-react.png";
import certJs     from "../../assets/certificados/Certificado-js.png";
import certWeb    from "../../assets/certificados/certificado-desarrolloweb.png";

import "./Formation.css";

const FEATURED = [
  {
    id: 1,
    Icon: FaReact,
    iconColor: "#61DAFB",
    iconBg: "#20232a",
    title: "React JS",
    platform: "Coderhouse",
    duration: "8 semanas · 8hs formación en vivo",
    desc: "Desarrollo de aplicaciones con React, manejo de estado, Context API, React Router y proyecto final con Firebase.",
    cert: certReact,
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
  },
];

export default function Formation() {
  const [certImg, setCertImg] = useState(null);

  return (
    <section id="formacion" className="formation">
      <div className="container">

        <div className="formation__header">
          <div>
            <p className="formation__eyebrow">Aprendizaje</p>
            <h2 className="section-title">Formación</h2>
          </div>
          <a href="/cursos" className="formation__ver-todos">
            Ver todos los cursos →
          </a>
        </div>

        <div className="formation__grid">
          {FEATURED.map((c) => (
            <div key={c.id} className="formation__card">
              <div className="formation__icon" style={{ background: c.iconBg }}>
                <c.Icon size={26} color={c.iconColor} />
              </div>
              <div className="formation__content">
                <div className="formation__meta">
                  <h3 className="formation__title">{c.title}</h3>
                  <span className="formation__platform">{c.platform}</span>
                </div>
                <p className="formation__duration">{c.duration}</p>
                <p className="formation__desc">{c.desc}</p>
                <button className="formation__cert-btn" onClick={() => setCertImg(c.cert)}>
                  Ver certificado 🎓
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {certImg && <CertificateModal img={certImg} onClose={() => setCertImg(null)} />}
    </section>
  );
}