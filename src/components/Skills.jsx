import React, { useState, useEffect, useRef } from "react";
import { skills } from "../data/skills";
const Skills = () => {

  const [animate, setAnimate] = useState(false);
  
  const skillsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // só animar uma vez
        }
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <h2 className="section-title">Habilidades</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.name} className="skill">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: animate ? `${skill.level}%` : "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;