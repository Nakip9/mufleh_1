import { Link } from 'react-router-dom';
import { FiArrowLeft, FiPlay, FiCheck, FiChevronDown } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-mobile-first">
      {/* Immersive Background */}
      <div className="hero-bg-wrapper">
        <div className="hero-bg-image" style={{ backgroundImage: "url('/hero_makkah_background_1764893075599.jpg')" }}></div>
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content-wrapper">
        
        {/* Animated Badge */}
        <div className="hero-badge-animated">
          <span className="pulse-dot"></span>
          <span>موسم العمرة مفتوح الآن</span>
        </div>

        {/* Main Title */}
        <h1 className="hero-title-mobile">
          <span className="slide-text-1">رحلتك القادمة</span>
          <br />
          <span className="slide-text-2 text-gradient">تبدأ من هنا</span>
        </h1>

        {/* Description */}
        <p className="hero-desc-mobile">
          نحول أحلامك بالسفر إلى واقع ملموس. خدمات متكاملة، راحة تامة، وتجارب لا تُنسى في أطهر البقاع وأجمل وجهات العالم.
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <Link to="/contact" className="btn-hero btn-primary-hero">
            <span>احجز رحلتك</span>
            <FiArrowLeft className="action-icon" />
          </Link>
          
          <Link to="/services" className="btn-hero btn-glass-hero">
            <span className="play-icon-wrapper"><FiPlay /></span>
            <span>شاهد خدماتنا</span>
          </Link>
        </div>

        {/* Trust Indicators (Swipeable/Grid on mobile) */}
        <div className="hero-trust-indicators">
          <div className="trust-item">
            <div className="check-icon"><FiCheck /></div>
            <span>أفضل الأسعار</span>
          </div>
          <div className="trust-item">
            <div className="check-icon"><FiCheck /></div>
            <span>دعم 24/7</span>
          </div>
          <div className="trust-item">
            <div className="check-icon"><FiCheck /></div>
            <span>حجوزات مؤكدة</span>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>اكتشف المزيد</span>
        <FiChevronDown className="bounce-icon" />
      </div>
    </section>
  );
};

export default Hero;