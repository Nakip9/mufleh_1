import { Link } from 'react-router-dom';
import { 
  FaWhatsapp, 
  FaFacebookF, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaPlane, 
  FaKaaba, 
  FaIdCard, 
  FaBullhorn, 
  FaUsers
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="container">
        <div className="footer-grid-modern">
          
          {/* Column 1: Brand & Identity */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo">
              <img src="/logo_svg.svg" alt="شعار ابن المفلحي" className="footer-logo-image" />
            </Link>
            <p className="brand-slogan">"لسنا الوحيدون ولكننا نسعى للتميز"</p>
            <p className="brand-desc">
              المفلحي للسفريات والسياحة وخدمات الحج والعمرة والأيدي العاملة وجميع الخدمات العامة.
            </p>
            
            <div className="location-box">
              <a 
                href="https://maps.app.goo.gl/DiyZKTDnnF7SRxmr5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="location-link"
              >
                <div className="icon-circle"><FaMapMarkerAlt /></div>
                <span>المنصورة - شارع خديجة بنت خويلد - بلوك 33</span>
              </a>
              <a href="tel:02352646" className="phone-link">
                <div className="icon-circle"><FaPhoneAlt /></div>
                <span>02-352646</span>
              </a>
            </div>
          </div>

          {/* Column 2: Specialized Departments (WhatsApp) */}
          <div className="footer-dept-col">
            <h4 className="footer-title">أقسامنا (تواصل مباشر)</h4>
            <div className="dept-grid">
              
              <a href="https://wa.me/782425551" target="_blank" rel="noopener noreferrer" className="dept-card">
                <FaPlane className="dept-icon" />
                <div className="dept-info">
                  <span className="dept-name">الطيران والنقل البري</span>
                  <span className="dept-sub">موافقات دخول مصر والأردن</span>
                </div>
              </a>

              <a href="https://wa.me/782425552" target="_blank" rel="noopener noreferrer" className="dept-card">
                <FaKaaba className="dept-icon" />
                <div className="dept-info">
                  <span className="dept-name">الحج والعمرة والتأشيرات</span>
                  <span className="dept-sub">فيز عمل، زيارات</span>
                </div>
              </a>

              <a href="https://wa.me/782111608" target="_blank" rel="noopener noreferrer" className="dept-card">
                <FaIdCard className="dept-icon" />
                <div className="dept-info">
                  <span className="dept-name">الخدمات العامة</span>
                  <span className="dept-sub">بطائق، جوازات، شهادات</span>
                </div>
              </a>

            </div>
          </div>

          {/* Column 3: Sales & Community */}
          <div className="footer-community-col">
            
            <div className="sales-section">
              <h4 className="footer-title">فريق المبيعات</h4>
              <div className="sales-links">
                <a href="https://wa.me/780104667" className="sales-badge orange">
                  <FaWhatsapp /> مبيعات 1
                </a>
                <a href="https://wa.me/781379611" className="sales-badge red">
                  <FaWhatsapp /> مبيعات 2
                </a>
              </div>
            </div>

            <div className="community-section">
              <h4 className="footer-title">مجتمعنا</h4>
              <ul className="social-links-list">
                <li>
                  <a href="https://www.facebook.com/share/1AcWpmnJ5P/" target="_blank" rel="noopener noreferrer" className="social-btn fb">
                    <FaFacebookF /> <span>صفحتنا على فيسبوك</span>
                  </a>
                </li>
                <li>
                  <a href="https://whatsapp.com/channel/0029Vavig5c2v1IloZ1TpV0D" target="_blank" rel="noopener noreferrer" className="social-btn channel">
                    <FaBullhorn /> <span>قناة الواتساب الرسمية</span>
                  </a>
                </li>
                <li>
                  <a href="https://chat.whatsapp.com/BbemjsKXHMeErDjTBWjQ0X" target="_blank" rel="noopener noreferrer" className="social-btn community">
                    <FaUsers /> <span>مجتمع العملاء</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="footer-bottom-modern">
          <p>© {new Date().getFullYear()} مجموعة المفلحي للسفريات والخدمات العامة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;