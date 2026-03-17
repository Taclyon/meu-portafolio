
import React,{ useState } from "react";
import "../styles/components/Contact.css"

const Contact = () => {

  const email = "lyonT0m2s@gmail.com";
  const [copiado, setCopiado] = useState(false);

  const copiarEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiado(true);

    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section">

      <h2 className="section-title">Contato</h2>

      <div className="contact-container">

        {/* EMAIL */}
        <div className="contact-card">

          <div className="contact-icon">📧</div>

          <h3>Email</h3>

          <p>@Email</p>

          <button
            className="copy-btn"
            onClick={copiarEmail}
          >
            {copiado ? "Email copiado!" : "Copiar Email"}
          </button>

        </div>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/tomas-lyon-88a025308/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >

          <div className="contact-icon">💼</div>

          <h3>LinkedIn</h3>

          <p>Conectar comigo</p>

        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/Taclyon?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >

          <div className="contact-icon">🐙</div>

          <h3>GitHub</h3>

          <p>Ver projetos</p>

        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/5595991524395"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >

          <div className="contact-icon">💬</div>

          <h3>WhatsApp</h3>

          <p>Conversar</p>

        </a>

      </div>

    </section>
  );
};

export default Contact;