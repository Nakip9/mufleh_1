import React from 'react';
import './Partners.css';

const Partners = () => {
  // You can add more partner logos here
  const partners = [
    { id: 1, name: "Jubari Travel", logo: "https://jubaritravel.com/media/140/tvrmf3iv6yfJpQCYMiX8UwR5yeDcCNbamrXlhCK3-1.png" },
    { id: 2, name: "Yemenia", logo: "https://yemenia.com/assets/img/logo.png" }, // Placeholder example (publicly available)
    { id: 3, name: "Partner 3", logo: "https://fly-aden.com/wp-content/uploads/2024/04/Artboard-1-1024x261.png" },
    { id: 4, name: "Partner 4", logo: "https://www.haj.gov.sa/assets/images/logos/header-logo.png" },
    { id: 5, name: "Partner 5", logo: "https://yemenia.com/assets/img/logo.png" },
  ];

  // Duplicate the array to create the seamless infinite loop effect
  const carouselItems = [...partners, ...partners];

  return (
    <section className="partners-section">
      <div className="container">
        <div className="section-header-simple">
          <h2>شركاء <span className="text-highlight">النجاح</span></h2>
          <div className="header-line"></div>
        </div>
      </div>

      <div className="partners-carousel-wrapper">
        <div className="partners-track">
          {carouselItems.map((partner, index) => (
            <div className="partner-logo-card" key={`${partner.id}-${index}`}>
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="partner-img"
                draggable="false"
              />
            </div>
          ))}
        </div>
        {/* Left/Right Gradients for fade effect */}
        <div className="fade-overlay left"></div>
        <div className="fade-overlay right"></div>
      </div>
    </section>
  );
};

export default Partners;