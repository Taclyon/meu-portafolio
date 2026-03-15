import { useState } from "react";
import knowledgeData from "../data/knowledgeData";
import certificatesData from "../data/certificatesData";
import "../styles/components/Knowledge.css";

const Knowledge = () => {
  const [certificadoSelecionado, setCertificadoSelecionado] = useState(null);

  return (
    <section id="knowledge" className="knowledge-section">
      <h2 className="section-title">Conhecimentos Técnicos</h2>

      <div className="knowledge-container">
        {knowledgeData.map((item) => (
          <div key={item.id} className="knowledge-card">
            <div className="knowledge-header">
              <img
                src={item.icone}
                alt={item.tecnologia}
                className="knowledge-icon"
              />

              <h3 className="knowledge-title">{item.tecnologia}</h3>
            </div>

            <p className="knowledge-description">{item.descricao}</p>

            <div className="knowledge-tags">
              {item.conhecimentos.map((skill, index) => (
                <span key={index} className="knowledge-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CERTIFICADOS */}

      <h2 className="section-title certificates-title">Certificados</h2>

      <div className="certificates-container">
        {certificatesData &&
          certificatesData.map((cert) => (
            <div key={cert.id} className="certificate-card">
              {!cert.imagem ? (
                <h1>Carregando</h1>
              ) : (
                <img
                  src={cert.imagem}
                  alt={cert.titulo}
                  className="certificate-img"
                  onClick={() => setCertificadoSelecionado(cert.imagem)}
                />
              )}

              <div className="certificate-info">
                <h3 className="certificate-title">{cert.titulo}</h3>

                <p className="certificate-platform">{cert.plataforma}</p>
              </div>
            </div>
          ))}
      </div>

      {/* MODAL */}

      {certificadoSelecionado && (
        <div
          className="certificate-modal"
          onClick={() => setCertificadoSelecionado(null)}
        >
          <img src={certificadoSelecionado} className="certificate-modal-img" />
        </div>
      )}
      <br />
      <p className="certificados-texto">
        Ver más certificados no{" "}
        <a
          href="https://github.com/Taclyon/meu-portafolio"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          GitHub
        </a>
      </p>
    </section>
  );
};

export default Knowledge;
