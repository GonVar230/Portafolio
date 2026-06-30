import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import Navbar       from "./components/Navbar/Navbar";
import Hero         from "./components/Hero/Hero";
import SobreMi      from "./components/SobreMi/SobreMi";
import Technologies from "./components/Technologies/Technologies";
import Projects     from "./components/Projects/Projects";
import Formation    from "./components/Formation/Formation";
import Contact      from "./components/Contact/Contact";
import Footer       from "./components/Footer/Footer";
import AllProjects  from "./pages/Allprojects";
import AllCourses   from "./pages/Allcourses";

import "./index.css";
import "./App.css";

function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SobreMi />
        <Technologies />
        <Projects />
        <Formation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"          element={<Portfolio />} />
          <Route path="/proyectos" element={<AllProjects />} />
          <Route path="/cursos"    element={<AllCourses />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}