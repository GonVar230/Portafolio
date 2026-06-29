import { useEffect, useRef } from "react";
import "./Hero.css";

const CODE_LINES = [
  `import React from 'react'`,
  ``,
  `function App() {`,
  `  return (`,
  `    <div className="app">`,
  `      <h1>Construyendo ideas</h1>`,
  `      <p>Con código y propósito.</p>`,
  `    </div>`,
  `  )`,
  `}`,
  ``,
  `export default App`,
];

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    // Typewriter on the accent word
    const words = ["React", "JavaScript", "Ideas", "Proyectos"];
    let wi = 0, ci = 0, deleting = false;
    let timer;

    const type = () => {
      const word = words[wi];
      if (!typedRef.current) return;

      if (!deleting) {
        typedRef.current.textContent = word.slice(0, ci + 1);
        ci++;
        if (ci === word.length) {
          deleting = true;
          timer = setTimeout(type, 1800);
          return;
        }
      } else {
        typedRef.current.textContent = word.slice(0, ci - 1);
        ci--;
        if (ci === 0) {
          deleting = false;
          wi = (wi + 1) % words.length;
        }
      }
      timer = setTimeout(type, deleting ? 60 : 100);
    };

    timer = setTimeout(type, 600);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero__bg-dots" aria-hidden="true" />

      <div className="container hero__inner">
        {/* LEFT */}
        <div className="hero__content">
          {/* Available badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Disponible para proyectos freelance
          </div>

          {/* Headline */}
          <h1 className="hero__title">
            Desarrollador Web<br />
            con <span className="hero__accent" ref={typedRef}>React</span>
            <span className="hero__cursor">|</span>
          </h1>

          <p className="hero__sub">Pienso, creo y mejoro en cosas nuevas.</p>

          {/* CTAs */}
          <div className="hero__ctas">
            <button className="hero__btn hero__btn--primary" onClick={() => scrollTo("proyectos")}>
              Ver proyectos <span className="hero__btn-arrow">→</span>
            </button>
            <button className="hero__btn hero__btn--secondary" onClick={() => scrollTo("contacto")}>
              Contactarme <span>✉</span>
            </button>
          </div>

          {/* Social */}
          <div className="hero__social">
            <a href="https://github.com/GonVar230" target="_blank" rel="noreferrer" className="hero__social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              GitHub
            </a>
            <span className="hero__social-divider" />
            <a href="https://www.linkedin.com/in/gonzalo-varela-5a044532a/" target="_blank" rel="noreferrer" className="hero__social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT — code window */}
        <div className="hero__visual">
          <div className="hero__window">
            <div className="hero__window-header">
              <span className="hero__window-dot hero__window-dot--red" />
              <span className="hero__window-dot hero__window-dot--yellow" />
              <span className="hero__window-dot hero__window-dot--green" />
            </div>
            <div className="hero__code">
              {CODE_LINES.map((line, i) => (
                <div key={i} className="hero__code-line">
                  <span className="hero__code-num">{i + 1}</span>
                  <span className="hero__code-text" dangerouslySetInnerHTML={{ __html: highlightCode(line) }} />
                </div>
              ))}
            </div>
          </div>

          {/* Floating badges */}
          <div className="hero__badge-float hero__badge-float--react">
            <span>⚛</span>
          </div>
          <div className="hero__badge-float hero__badge-float--js">
            <span>JS</span>
          </div>
          <div className="hero__badge-float hero__badge-float--html">
            <span>&lt;/&gt;</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function highlightCode(line) {
  if (!line) return "&nbsp;";
  return line
    .replace(/\b(import|from|function|return|export|default|const|let)\b/g, '<span class="kw">$1</span>')
    .replace(/('.*?'|".*?")/g, '<span class="str">$1</span>')
    .replace(/\b(React|App)\b/g, '<span class="cls">$1</span>')
    .replace(/(&lt;.*?&gt;|<.*?>)/g, '<span class="tag">$&</span>');
}
