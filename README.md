# Portfolio — Gonzalo Varela

Desarrollador Web con React · Portfolio personal con tema claro/oscuro y animaciones.

---

## 🚀 Setup paso a paso

### 1. Requisitos previos
- **Node.js** versión 18 o superior → [nodejs.org](https://nodejs.org)
- **VSCode** → [code.visualstudio.com](https://code.visualstudio.com)

### 2. Extensiones de VSCode recomendadas
Instalá estas desde el panel de extensiones (`Ctrl+Shift+X`):

| Extensión | ID para buscar |
|-----------|---------------|
| ES7+ React/Redux Snippets | `dsznajder.es7-react-js-snippets` |
| Prettier - Code formatter  | `esbenp.prettier-vscode` |
| ESLint                     | `dbaeumer.vscode-eslint` |
| Auto Rename Tag            | `formulahendry.auto-rename-tag` |
| GitLens                    | `eamodio.gitlens` |

### 3. Instalar dependencias

Abrí la terminal en VSCode (`Ctrl+` `) dentro de la carpeta del proyecto y ejecutá:

```bash
npm install
```

### 4. Levantar en desarrollo

```bash
npm run dev
```

Abrí el navegador en `http://localhost:5173`

### 5. Build para producción

```bash
npm run build
```

Los archivos quedan en la carpeta `/dist`, listos para subir a Vercel, Netlify, GitHub Pages, etc.

---

## 📁 Estructura del proyecto

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar/         → Barra de navegación fija con scroll spy
│   │   ├── Hero/           → Sección principal con typewriter y ventana de código
│   │   ├── SobreMi/        → Sección "Sobre mí" con estadísticas
│   │   ├── Technologies/   → Stack tecnológico en 3 columnas
│   │   ├── Projects/       → Proyectos destacados (agregar imágenes aquí)
│   │   ├── Formation/      → Cursos y formación
│   │   ├── Contact/        → Sección de contacto con links a redes
│   │   └── Footer/         → Pie de página
│   ├── context/
│   │   └── ThemeContext.jsx → Estado global del tema claro/oscuro
│   ├── hooks/
│   │   └── useScrollReveal.js → Hook para animar elementos al hacer scroll
│   ├── App.jsx
│   ├── App.css
│   ├── index.css           → Variables CSS globales, tokens de diseño
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🖼 Cómo agregar imágenes a tus proyectos

1. Guardá tus capturas en `src/assets/` (creá la carpeta si no existe):
   ```
   src/assets/proyecto1.png
   src/assets/proyecto2.png
   ```

2. En `src/components/Projects/Projects.jsx`, en el array `PROJECTS`, importá y usá cada imagen:
   ```jsx
   // Arriba del archivo, después de los imports:
   import imgProyecto1 from '../../assets/proyecto1.png'
   import imgProyecto2 from '../../assets/proyecto2.png'

   // Luego en cada objeto del array:
   const PROJECTS = [
     {
       id: 1,
       title: "E-commerce",
       description: "Tu descripción aquí...",
       tags: ["React", "Firebase", "SCSS"],
       demo: "https://tu-demo.com",
       github: "https://github.com/GonVar230/repo",
       image: imgProyecto1,   // ← acá
     },
     {
       id: 2,
       title: "Gestor de gastos",
       description: "Tu descripción aquí...",
       tags: ["JavaScript", "HTML", "CSS"],
       demo: "https://tu-demo.com",
       github: "https://github.com/GonVar230/repo",
       image: imgProyecto2,   // ← acá
     },
   ]
   ```

---

## ✏️ Cómo personalizar el contenido

| Qué cambiar | Dónde hacerlo |
|-------------|--------------|
| Nombre, rol, descripción | `src/components/Hero/Hero.jsx` |
| Links GitHub / LinkedIn | `src/components/Hero/Hero.jsx` y `src/components/Contact/Contact.jsx` |
| Tecnologías | `src/components/Technologies/Technologies.jsx` |
| Proyectos (título, desc, links) | `src/components/Projects/Projects.jsx` |
| Cursos / formación | `src/components/Formation/Formation.jsx` |
| Color de acento | `src/index.css` → variable `--accent` |
| Fuente tipográfica | `src/index.css` → `@import` de Google Fonts |

---

## 🎨 Animaciones incluidas

| Animación | Dónde se usa |
|-----------|-------------|
| `pulse-dot` — tintinea en verde | Badge "Disponible para proyectos freelance" |
| `typewriter` — escribe y borra palabras | Palabra resaltada en el título Hero |
| `float` — flota suavemente | Ventana de código y badges de tecnología |
| `blink-cursor` — cursor parpadeante | Cursor del typewriter |
| `fadeUp` — aparece desde abajo | Hero al cargar la página |
| `reveal` — scroll reveal | Disponible via hook `useScrollReveal` |
| Hover cards — sube al pasar el mouse | Proyectos, Tecnologías, Formación |

Para agregar el scroll reveal a cualquier sección:
```jsx
import useScrollReveal from '../../hooks/useScrollReveal'

export default function MiSeccion() {
  const ref = useScrollReveal()
  return <div ref={ref} className="reveal"> ... </div>
}
```

---

## 🌐 Deploy en Vercel (recomendado)

1. Subí el proyecto a un repositorio de GitHub
2. Entrá a [vercel.com](https://vercel.com) y conectá tu cuenta de GitHub
3. Importá el repositorio → Vercel detecta Vite automáticamente
4. Hacé click en **Deploy** — listo ✅

---

## 📦 Dependencias usadas

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "vite": "^5.4.2",
  "@vitejs/plugin-react": "^4.3.1"
}
```

> **Nota:** No se usaron librerías externas de animación (como Framer Motion) a propósito — todo se logra con CSS puro para mantener el bundle liviano y sin dependencias extra.

---

© 2024 Gonzalo Varela
