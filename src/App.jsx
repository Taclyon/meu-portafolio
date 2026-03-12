/* Importar componentes */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
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
import "./styles/components/Services.css";
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
        <Portfolio />
        <Services />
        <Contact />
      </main>

      {/* Pie de página */}
      <Footer />
    </>
  );
}

export default App;