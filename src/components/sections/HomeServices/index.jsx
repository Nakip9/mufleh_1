import { useState } from 'react';
import { FiArrowUpLeft, FiCheck } from 'react-icons/fi';
import { FaPlane, FaGlobe, FaIdCard } from 'react-icons/fa';
import './HomeServices.css';

const HomeServices = () => {
  
  // Specific Services Data with corrected paths (directly from root as they are in public folder)
  const services = [
    {
      title: "حجوزات الطيران والنقل البري",
      tagline: "سافر براحة واطمئنان إلى وجهتك",
      description: "نقدم خدمات متكاملة تشمل حجوزات تذاكر الطيران، النقل البري المريح، وتسهيل إجراءات موافقات دخول مصر والأردن.",
      features: ["حجوزات طيران دولية", "نقل بري حديث", "موافقات أمنية (مصر/الأردن)"],
      icon: <FaPlane />,
      whatsapp: "https://wa.me/782425551",
      bgImage: "/plan_ser.jpg"
    },
    {
      title: "الحج والعمرة والتأشيرات",
      tagline: "برامج روحانية وخدمات تأشيرات شاملة",
      description: "نرافقك في رحلتك الإيمانية ببرامج حج وعمرة متميزة، بالإضافة إلى استخراج فيز العمل وتأشيرات الزيارة لمختلف الوجهات.",
      features: ["برامج عمرة فاخرة", "تأشيرات عمل وزيارة", "تخليص معاملات الحج"],
      icon: <FaGlobe />,
      whatsapp: "https://wa.me/782425552",
      bgImage: "/haj_ser.jpg"
    },
    {
      title: "الخدمات العامة",
      tagline: "تخليص معاملاتك الحكومية بسرعة ودقة",
      description: "نتولى عنك عناء المعاملات الحكومية. استخراج البطائق الشخصية، الجوازات، الدفتر العائلي، شهادات الميلاد وغيرها.",
      features: ["بطائق شخصية وجوازات", "دفتر عائلي وميلاد", "خدمات تعقيب المعاملات"],
      icon: <FaIdCard />,
      whatsapp: "https://wa.me/782111608",
      bgImage: "/desk_ser.png" // Corrected extension to .png
    }
  ];
  
  const [activeId, setActiveId] = useState(0);

  return (
    <section className="services-masterpiece">
      <div className="container">
        
        <div className="masterpiece-header">
          <span className="gold-pill">خدماتنا الرئيسية</span>
          <h2>بوابتك الشاملة <span className="highlight-blue">لكل احتياجاتك</span></h2>
          <p className="header-subtitle">ثلاثة أقسام متخصصة لخدمتك بكفاءة عالية، مع تواصل مباشر لضمان سرعة الإنجاز</p>
        </div>

        <div className="accordion-gallery">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`accordion-panel ${activeId === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveId(index)}
              onTouchStart={() => setActiveId(index)}
              style={{ 
                backgroundImage: `url(${service.bgImage})` 
              }}
            >
              
              <div className="panel-overlay"></div>
              
              <div className="panel-content">
                <div className="icon-circle-glass">
                  {service.icon}
                </div>
                
                <div className="panel-header-text">
                  <h3 className="panel-title">
                    <span className="num">0{index + 1}</span>
                    {service.title}
                  </h3>
                  <p className="panel-tagline-always">{service.tagline}</p>
                </div>

                <div className="panel-details">
                  <p className="description-text">{service.description}</p>
                  
                  <div className="features-grid">
                    {service.features.map((f, i) => (
                      <div key={i} className="feature-tick-item">
                        <FiCheck className="tick" /> <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href={service.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="panel-link"
                  >
                    <span>تواصل واتساب</span> <FiArrowUpLeft />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeServices;