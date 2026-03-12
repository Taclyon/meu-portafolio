
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="/assets/about-photo.png" alt="Sobre mí" className="about-img"/>
        </div>
        <div className="about-text">
          <h2 className="section-title">Sobre mí</h2>
          <p className="about-description">
            Soy desarrollador frontend con pasión por crear experiencias digitales elegantes y funcionales. 
            Me especializo en React, diseño UI/UX y desarrollo de portafolios profesionales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;