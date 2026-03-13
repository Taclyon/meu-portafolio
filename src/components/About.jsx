const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Cabecera con Imagen y Título */}
        <div className="about-header">
          <div className="about-image">
            <img 
              src="/assets/ico-sobre-mi.png"
              alt="Sobre mí"
              className="about-img"
            />
          </div>
          <h2 className="section-title">Sobre mí</h2>
        </div>

        {/* Contenido Principal */}
        <article className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Olá! Meu nome é <strong>Tomas Lyon</strong>. Sou apaixonado por tecnologia e atualmente estou finalizando meus estudos como <strong>Desenvolvedor Front-End</strong>.
            </p>
            <p>
              Estou em busca da minha <strong>primeira oportunidade na área de desenvolvimento</strong>, onde eu possa aplicar meus conhecimentos.
            </p>
            <p>
              Gosto de construir interfaces web e explorar novas tecnologias.
            </p>
          </div>

          <aside className="about-info">
            <ul className="about-list">
              <li>📍 <strong>Localização:</strong> Boa Vista, Roraima - Brasil</li>
              <li>💻 <strong>Profissão:</strong> Front-End Developer em formação</li>
              <li>🚀 <strong>Foco:</strong> Interfaces modernas e funcionais</li>
              <li>📚 <strong>Mentalidade:</strong> Sempre aprendendo</li>
            </ul>
          </aside>
        </article>

        {/* Sección de Tecnologías */}
        <div className="tech-section">
          <h3 className="tech-title">Tecnologias</h3>
          <div className="tech-icons">
            {["html", "css", "js", "react", "git", "github"].map((tech) => (
              <img 
                key={tech}
                src={`https://skillicons.dev/icons?i=${tech}`} 
                alt={tech.toUpperCase()} 
              />
            ))}
          </div>
        </div>

        {/* Metas y Objetivos */}
        <div className="goals-grid">
          <div className="learning-section">
            <h3>📚 Atualmente aprendendo</h3>
            <ul>
              <li>⚛️ Aprofundando meus conhecimentos em React</li>
              <li>🧠 Melhorando lógica de programação</li>
              <li>🧹 Escrevendo código limpo e organizado</li>
            </ul>
          </div>

          <div className="goal-section">
            <h3>🎯 Objetivo</h3>
            <p>
              Fazer parte de uma <strong>equipe de desenvolvimento</strong> e contribuir com soluções criativas.
            </p>
            <p className="quote">💡 Sempre aprendendo, sempre construindo.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;