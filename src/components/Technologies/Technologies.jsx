import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaGithub, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import "./Technologies.css";

export default function Technologies() {
  return (
    <section id="tecnologias" className="tech">
      <div className="container">
        <p className="tech__eyebrow">Stack</p>
        <h2 className="section-title">Tecnologías</h2>
        <p className="section-subtitle">Mis principales fortalezas y herramientas</p>

        <div className="tech__grid">

          {/* ── MAIN ── */}
          <div className="tech__col tech__col--main">
            <p className="tech__col-label">Mis principales fortalezas</p>
            <div className="tech__main-cards">

              <div className="tech__main-card tech__main-card--react">
                <FaReact className="tech__main-icon" />
                <span className="tech__main-name">React</span>
              </div>

              <div className="tech__main-card tech__main-card--js">
                <IoLogoJavascript className="tech__main-icon" />
                <span className="tech__main-name">JavaScript</span>
              </div>

            </div>
          </div>

          {/* ── OTHER ── */}
          <div className="tech__col">
            <p className="tech__col-label">Otras tecnologías que manejo</p>
            <div className="tech__other-grid">

              <div className="tech__chip">
                <FaHtml5 className="tech__chip-icon tech__chip-icon--html" />
                <span>HTML5</span>
              </div>
              <div className="tech__chip">
                <FaCss3Alt className="tech__chip-icon tech__chip-icon--css" />
                <span>CSS3</span>
              </div>
              <div className="tech__chip">
                <FaSass className="tech__chip-icon tech__chip-icon--sass" />
                <span>Sass</span>
              </div>
              <div className="tech__chip">
                <IoLogoFirebase className="tech__chip-icon tech__chip-icon--firebase" />
                <span>Firebase</span>
              </div>
              <div className="tech__chip">
                <FaGitAlt className="tech__chip-icon tech__chip-icon--git" />
                <span>Git</span>
              </div>
              <div className="tech__chip">
                <FaGithub className="tech__chip-icon tech__chip-icon--github" />
                <span>GitHub</span>
              </div>

            </div>
          </div>

          {/* ── LEARNING ── */}
          <div className="tech__col">
            <p className="tech__col-label">Actualmente aprendiendo</p>
            <div className="tech__learning">

              <div className="tech__chip tech__chip--learning">
                <FaNodeJs className="tech__chip-icon tech__chip-icon--node" />
                <span>Node.js</span>
              </div>
              <div className="tech__chip tech__chip--learning">
                <SiNextdotjs className="tech__chip-icon tech__chip-icon--next" />
                <span>Next.js</span>
              </div>

              <div className="tech__learning-note">
                <span className="tech__learning-rocket">🚀</span>
                <span>Siempre aprendiendo para seguir creciendo.</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}