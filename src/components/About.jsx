const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img
            src="/assets/ico-sobre-mi.png"
            alt="Sobre mí"
            className="about-img"
          />
        </div>
        <div className="about-text">
          <h2 className="section-title">Sobre mí</h2>
          <p className="about-description">
            <section id="about" class="about-section">
              <div class="about-container">
                <article class="about-content">
                  <div class="about-text">
                    <p class="about-intro">
                      Olá! Meu nome é <strong>Tomas Lyon</strong>. Sou
                      apaixonado por tecnologia e atualmente estou finalizando
                      meus estudos como <strong>Desenvolvedor Front-End</strong>
                      .
                    </p>

                    <p>
                      Estou em busca da minha{" "}
                      <strong>
                        primeira oportunidade na área de desenvolvimento
                      </strong>
                      , onde eu possa aplicar meus conhecimentos, aprender com
                      uma equipe e continuar evoluindo profissionalmente.
                    </p>

                    <p>
                      Gosto de construir interfaces web, resolver problemas
                      através do código e explorar novas tecnologias que me
                      permitam crescer como desenvolvedor.
                    </p>
                  </div>

                  <aside class="about-info">
                    <ul class="about-list">
                      <li>
                        📍 <strong>Localização:</strong>
                        Boa Vista, Roraima - Brasil
                      </li>

                      <li>
                        💻 <strong>Profissão:</strong>
                        Front-End Developer em formação
                      </li>

                      <li>
                        🚀 <strong>Foco:</strong>
                        Construir interfaces modernas e funcionais
                      </li>

                      <li>
                        📚 <strong>Mentalidade:</strong>
                        Sempre aprendendo
                      </li>
                    </ul>
                  </aside>
                </article>

                <div class="tech-section">
                  <h3 class="tech-title">Tecnologias</h3>

                  <div class="tech-icons">
                    <img src="https://skillicons.dev/icons?i=html" alt="HTML" />
                    <img src="https://skillicons.dev/icons?i=css" alt="CSS" />
                    <img
                      src="https://skillicons.dev/icons?i=js"
                      alt="JavaScript"
                    />
                    <img
                      src="https://skillicons.dev/icons?i=react"
                      alt="React"
                    />
                    <img src="https://skillicons.dev/icons?i=git" alt="Git" />
                    <img
                      src="https://skillicons.dev/icons?i=github"
                      alt="GitHub"
                    />
                  </div>
                </div>

                <div class="learning-section">
                  <h3>📚 Atualmente aprendendo</h3>

                  <ul>
                    <li>⚛️ Aprofundando meus conhecimentos em React</li>

                    <li>🧠 Melhorando lógica de programação</li>

                    <li>🧹 Escrevendo código limpo e organizado</li>

                    <li>👨‍💻 Desenvolvendo projetos para meu portfólio</li>
                  </ul>
                </div>

                <div class="goal-section">
                  <h3>🎯 Objetivo</h3>

                  <p>
                    Fazer parte de uma{" "}
                    <strong>equipe de desenvolvimento</strong>, colaborar em
                    projetos reais e continuar crescendo como
                    <strong>Front-End Developer</strong>, contribuindo com
                    soluções criativas e eficientes.
                  </p>

                  <p class="quote">💡 Sempre aprendendo, sempre construindo.</p>
                </div>
              </div>
            </section>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
