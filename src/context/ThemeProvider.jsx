import React, { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

 const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const dadosSalvos = localStorage.getItem("theme");
    return dadosSalvos ? JSON.parse(dadosSalvos) : "claro";
  });

  useEffect(() => {
     document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "claro" ? "escuro" : "claro"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider