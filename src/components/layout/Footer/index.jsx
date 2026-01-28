import { Link } from 'react-router-dom';
import { FiInstagram, FiTwitter, FiFacebook, FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { useContent } from '../../../context/ContentContext';
import './Footer.css';

const Footer = () => {
  const { content } = useContent();
  const { contact_info, social_links } = content;

  return (
    <footer className="footer-azure">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <img src="/logo_muf.svg" alt="شعار ابن المفلحي" className="footer-logo-image" />
            </Link>
            <p>شريكك الموثوق للسفر والسياحة. نحول أحلامك إلى وجهات، ونضمن لك رحلة آمنة وممتعة.</p>
            <div className="social-links">
              <a href={social_links.instagram} className="social-icon" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
              <a href={social_links.twitter} className="social-icon" target="_blank" rel="noopener noreferrer"><FiTwitter /></a>
              <a href={social_links.facebook} className="social-icon" target="_blank" rel="noopener noreferrer"><FiFacebook /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>روابط سريعة</h4>
            <ul className="footer-links">
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/about">من نحن</Link></li>
              <li><Link to="/services">خدماتنا</Link></li>
              <li><Link to="/destinations">الوجهات</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>تواصل معنا</h4>
            <ul className="contact-list">
              <li><FiPhone /> {contact_info.phone}</li>
              <li><FiMail /> {contact_info.email}</li>
              <li><FiMapPin /> {contact_info.address}</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>نشرة العروض</h4>
            <p className="newsletter-text">اشترك للحصول على آخر العروض الحصرية.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="بريدك الإلكتروني" />
              <button type="submit">اشترك</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ابن المفلحي للسفر والسياحة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
