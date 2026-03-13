
import useTypewriter from "../hooks/useTypewriter";
import profileImg from '/assets/profile.png'

const Hero = () => {
  const text = "Olá! Sou Tomas, Desenvolvedor Front-End.";
  //const typedText = useTypewriter(text, 100); // velocidad de escritura
  
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">{text}<span className="cursor"></span></h1>
        <p className="hero-subtitle">Creo experiencias digitales elegantes con React y UI/UX.</p>
        <div className="hero-buttons">
          <button className="btn-primary">Ver mis proyectos</button>
          <button className="btn-secondary">Descargar CV</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={profileImg} alt="Tomas" className="profile-img" />
      </div>
    </section>
  );
};

export default Hero;