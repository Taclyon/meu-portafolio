import React from "react";

const Services = () => {
  const services = [
    { name: "Desarrollo Web", icon: "🌐" },
    { name: "UI/UX Design", icon: "🎨" },
    { name: "Optimización SEO", icon: "⚡" },
  ];

  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Servicios</h2>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.name} className="service-card">
            <span className="service-icon">{service.icon}</span>
            <h3 className="service-title">{service.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;