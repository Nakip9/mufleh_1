import { Link } from 'react-router-dom';
import { FiArrowUpLeft, FiSearch, FiCheckCircle } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero-azure">
      <div className="container hero-container">
        
        {/* Right Side: Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">✨</span>
            <span>الخيار الأول للمسافر العربي</span>
          </div>

          <h1 className="hero-title">
            سافر بذكاء، <br/>
            <span className="highlight-text">واكتشف العالم</span>
            <span className="dot">.</span>
          </h1>

          <p className="hero-desc">
            نقدم لك تجربة سفر استثنائية تبدأ من استخراج التأشيرة وحتى عودتك سالماً. 
            أسعار تنافسية، دعم متواصل، وراحة بال لا تقدر بثمن.
          </p>

          <div className="hero-features">
            <div className="feature-item">
              <FiCheckCircle className="icon" /> <span>تأشيرات مضمونة</span>
            </div>
            <div className="feature-item">
              <FiCheckCircle className="icon" /> <span>دعم 24/7</span>
            </div>
            <div className="feature-item">
              <FiCheckCircle className="icon" /> <span>أفضل الأسعار</span>
            </div>
          </div>

          <div className="hero-cta-group">
            <Link to="/contact" className="btn btn-primary">
              احجز استشارتك الآن <FiArrowUpLeft />
            </Link>
            <Link to="/services" className="btn btn-secondary">
              استكشف خدماتنا
            </Link>
          </div>
        </div>

        {/* Left Side: Visuals */}
        <div className="hero-visual">
          <div className="visual-backdrop"></div>
          <div className="image-card main-img">
            <img src="/assets/travel-happy.jpg" alt="Happy Traveler" />
             {/* Note: Make sure you have a nice bright image here, or use a placeholder URL like https://images.unsplash.com/photo-1469854523086-cc02fe5d8800 */}
          </div>
          
          {/* Floating Card Element */}
          <div className="floating-stat">
            <div className="stat-icon">✈️</div>
            <div className="stat-info">
              <span className="stat-num">+5000</span>
              <span className="stat-label">رحلة ناجحة</span>
            </div>
          </div>
        </div>

      </div>
      
      {/* Decorative Background Elements */}
      <div className="bg-circle circle-1"></div>
      <div className="bg-circle circle-2"></div>
    </header>
  );
};

export default Hero;