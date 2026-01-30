import { FiMapPin, FiPhoneCall, FiMessageCircle, FiUsers, FiClock } from 'react-icons/fi';
import { FaWhatsapp, FaFacebookF, FaPlane, FaGlobe, FaPassport } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-modern-page">
      
      {/* 1. Header Section */}
      <div className="contact-header-modern">
        <div className="container">
          <span className="subtitle-badge">تواصل معنا</span>
          <h1>فريقنا في <span className="highlight">خدمتك</span></h1>
          <p>
            اختر القسم المختص لطلبك للحصول على أسرع استجابة. نحن هنا لتسهيل جميع إجراءات سفرك ومعاملاتك.
          </p>
        </div>
      </div>

      <div className="container contact-hub-wrapper">
        
        {/* 2. Management (New) */}
        <div className="section-label">الإدارة العامة</div>
        <div className="management-grid" style={{ marginBottom: '2rem' }}>
          <a href="https://wa.me/967775972318" target="_blank" rel="noopener noreferrer" className="sales-card blue-dark">
            <div className="icon-box" style={{ background: '#1e293b' }}><FaWhatsapp /></div>
            <div className="text-box">
              <h3>المدير العام محمد المفلحي</h3>
              <p>للشكاوى والمقترحات والتواصل المباشر</p>
            </div>
            <span className="arrow-icon">&larr;</span>
          </a>
        </div>

        {/* 3. Sales Team (Primary Action) */}
        <div className="section-label">فريق المبيعات (حجوزات فورية)</div>
        <div className="sales-grid">
          <a href="https://wa.me/780104667" target="_blank" rel="noopener noreferrer" className="sales-card orange">
            <div className="icon-box"><FaWhatsapp /></div>
            <div className="text-box">
              <h3>مبيعات 1</h3>
              <p>للحجوزات والاستفسارات السريعة</p>
            </div>
            <span className="arrow-icon">&larr;</span>
          </a>

          <a href="https://wa.me/781379611" target="_blank" rel="noopener noreferrer" className="sales-card red">
            <div className="icon-box"><FaWhatsapp /></div>
            <div className="text-box">
              <h3>مبيعات 2</h3>
              <p>دعم مباشر وخدمة العملاء</p>
            </div>
            <span className="arrow-icon">&larr;</span>
          </a>
        </div>

        {/* 3. Specialized Departments */}
        <div className="section-label">الأقسام المتخصصة</div>
        <div className="departments-grid">
          
          {/* Transport */}
          <a href="https://wa.me/782425551" className="dept-modern-card">
            <div className="dept-icon-wrapper blue"><FaPlane /></div>
            <div className="dept-content">
              <h3>الطيران والنقل البري</h3>
              <p>حجوزات تذاكر، نقل بري، وموافقات دخول (مصر/الأردن).</p>
              <span className="action-text">تواصل واتساب</span>
            </div>
          </a>

          {/* Hajj & Umrah */}
          <a href="https://wa.me/782425552" className="dept-modern-card">
            <div className="dept-icon-wrapper gold"><FaGlobe /></div>
            <div className="dept-content">
              <h3>الحج والعمرة والتأشيرات</h3>
              <p>برامج العمرة، فيز العمل، وتأشيرات الزيارة.</p>
              <span className="action-text">تواصل واتساب</span>
            </div>
          </a>

          {/* General Services */}
          <a href="https://wa.me/782111608" className="dept-modern-card">
            <div className="dept-icon-wrapper green"><FaPassport /></div>
            <div className="dept-content">
              <h3>الخدمات العامة</h3>
              <p>بطائق شخصية، جوازات، شهادات ميلاد، ودفتر عائلي.</p>
              <span className="action-text">تواصل واتساب</span>
            </div>
          </a>
        </div>

        {/* 4. Location & Fixed Phone */}
        <div className="section-label">المقر الرئيسي</div>
        <div className="location-grid">
          <div className="info-card location">
            <FiMapPin className="info-icon" />
            <div>
              <h3>المنصورة</h3>
              <p>شارع خديجة بنت خويلد - بلوك 33</p>
              <a href="https://maps.app.goo.gl/DiyZKTDnnF7SRxmr5" target="_blank" rel="noopener noreferrer" className="map-link">عرض الموقع</a>
            </div>
          </div>

          <div className="info-card phone">
            <FiPhoneCall className="info-icon" />
            <div>
              <h3>الهاتف الثابت</h3>
              <p>للاتصال المباشر بالمكتب</p>
              <a href="tel:02352646" className="phone-number">02-352646</a>
            </div>
          </div>
        </div>

        {/* 5. Community & Socials */}
        <div className="community-banner">
          <h3>انضم لمجتمعنا</h3>
          <div className="social-row">
            <a href="https://www.facebook.com/share/1AcWpmnJ5P/" target="_blank" rel="noopener noreferrer" className="social-pill fb">
              <FaFacebookF /> فيسبوك
            </a>
            <a href="https://whatsapp.com/channel/0029Vavig5c2v1IloZ1TpV0D" target="_blank" rel="noopener noreferrer" className="social-pill channel">
              <FaWhatsapp /> القناة الرسمية
            </a>
            <a href="https://chat.whatsapp.com/BbemjsKXHMeErDjTBWjQ0X" target="_blank" rel="noopener noreferrer" className="social-pill group">
              <FiUsers /> مجتمع العملاء
            </a>
          </div>
        </div>

      </div>

      {/* 6. Map Section */}
      <div className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.123456789012!2d44.9876543!3d12.8765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzM1LjYiTiA0NMKwNTknMTUuNiJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s" 
          width="100%" 
          height="400" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy"
          title="موقعنا"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;