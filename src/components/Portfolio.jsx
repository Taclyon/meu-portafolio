import React, { useState } from "react";
import projectsData from "../data/projects";

const Portfolio = () => {
  const [filtro, setFiltro] = useState("todos");

  const projetosFiltrados = projectsData.filter(
    (projeto) => filtro === "todos" || projeto.categoria === filtro
  );

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="section-title">Projetos</h2>

      <div className="portfolio-filters">
        <button onClick={() => setFiltro("todos")} className="filter-btn">Todos</button>
        <button onClick={() => setFiltro("React")} className="filter-btn">React</button>
        <button onClick={() => setFiltro("UI/UX")} className="filter-btn">UI/UX</button>
      </div>

      <div className="portfolio-container">
        {projetosFiltrados.map((projeto) => (
          <div key={projeto.id} className="portfolio-card">
            <img src={projeto.imagem} alt={projeto.titulo} className="portfolio-img"/>
            <div className="portfolio-info">
              <h3 className="portfolio-title">{projeto.titulo}</h3>
              <p className="portfolio-categoria">{projeto.categoria}</p>
              <a href={projeto.link} className="btn-secondary" target="_blank">Ver projeto</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;