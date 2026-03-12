import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useState } from "react";

const Header = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">

      <div className="header-container">

        <div className="logo">MeuPortfólio</div>

        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul>

            <li>
              <a href="#hero" className="nav-link" onClick={closeMenu}>
                Início
              </a>
            </li>

            <li>
              <a href="#about" className="nav-link" onClick={closeMenu}>
                Sobre
              </a>
            </li>

            <li>
              <a href="#skills" className="nav-link" onClick={closeMenu}>
                Skills
              </a>
            </li>

            <li>
              <a href="#portfolio" className="nav-link" onClick={closeMenu}>
                Portfolio
              </a>
            </li>

            <li>
              <a href="#contact" className="nav-link" onClick={closeMenu}>
                Contato
              </a>
            </li>

          </ul>
        </nav>

        <div className="header-buttons">

          <button className="btn-toggle" onClick={toggleTheme}>
            {theme === "claro" ? "🌙" : "☀️"}
          </button>

          <button className="hamburguer" onClick={toggleMenu}>
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>

    </header>
  );
};

export default Header;