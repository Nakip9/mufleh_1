import { Link } from 'react-router-dom';
import { FiCheckCircle, FiArrowLeft, FiAward, FiShield, FiSmile } from 'react-icons/fi';
import { getIcon } from '../utils/iconResolver';
import { useContent } from '../context/ContentContext';
import './Services.css';

const Services = () => {
  const { content } = useContent();
  const services = content.services || [];

  return (
    <div className="services-premium-page">
      
      {/* 1. Authority Hero */}
      <section className="services-hero-premium">
        <div className="hero-content container">
          <span className="premium-badge">حلول شاملة</span>
          <h1>خدماتنا <span className="highlight">الاحترافية</span></h1>
          <p>
            نضع بين يديك سنوات من الخبرة والتميز. تصفح باقتنا الواسعة من الخدمات المصممة لتلبية تطلعاتك بأعلى معايير الجودة.
          </p>
        </div>
        <div className="hero-wave"></div>
      </section>

      {/* 2. Trust Indicators (Mini Section) */}
      <section className="container trust-strip-container">
        <div className="trust-strip">
          <div className="trust-item">
            <FiAward className="trust-icon" />
            <div>
              <strong>خبرة معتمدة</strong>
              <span>+15 عام في السوق</span>
            </div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <FiShield className="trust-icon" />
            <div>
              <strong>آمن وموثوق</strong>
              <span>ضمانات حقيقية</span>
            </div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <FiSmile className="trust-icon" />
            <div>
              <strong>خدمة عملاء</strong>
              <span>دعم على مدار الساعة</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Services Ecosystem (Grid) */}
      <section className="container services-grid-section">
        <div className="services-grid-pro">
          {services.map((s, index) => (
            <div key={index} className="service-card-pro">
              
              <div className="card-header-pro">
                <div className="icon-bubble">
                  {getIcon(s.icon)}
                </div>
                <h3>{s.title}</h3>
              </div>

              <div className="card-body-pro">
                <p className="description">{s.description}</p>
                
                {s.features && Array.isArray(s.features) && (
                  <div className="features-wrapper">
                    <span className="features-label">مميزات الخدمة:</span>
                    <ul className="features-list">
                      {s.features.map((f, i) => (
                        <li key={i}><FiCheckCircle className="check-icon" /> {f}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="card-footer-pro">
                <Link to="/contact" className="action-link-pro">
                  <span>طلب الخدمة</span>
                  <FiArrowLeft />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. Custom Request CTA */}
      <section className="container cta-section-pro">
        <div className="cta-box">
          <div className="cta-content">
            <h2>لم تجد ما تبحث عنه؟</h2>
            <p>نحن نقدم خدمات مخصصة حسب الطلب. تواصل معنا لنصمم لك حلاً يناسب احتياجاتك الخاصة.</p>
          </div>
          <Link to="/contact" className="btn btn-white-pro">
            تحدث مع مستشارنا
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;