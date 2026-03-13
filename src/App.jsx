/* Importar componentes */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portafolio from "./components/Portfolio";
import Knowledge from "./components/Knowledge";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/* Importar estilos globales */
import "./styles/globals.css";

/* Importar estilos por componente */
import "./styles/components/Header.css";
import "./styles/components/Hero.css";
import "./styles/components/About.css";
import "./styles/components/Skills.css";
import "./styles/components/Portfolio.css";
import "./styles/components/Knowledge.css";
import "./styles/components/Contact.css";
import "./styles/components/Footer.css";

function App() {
  return (
    <>
      {/* Encabezado / Navbar */}
      <Header />

      {/* Secciones principales */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Portafolio />
        <Knowledge />
        <Contact />
      </main>

      {/* Pie de página */}
      <Footer />
    </>
  );
}

export default App;