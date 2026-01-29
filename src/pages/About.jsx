import { useState } from 'react';
import { FiAward, FiUsers, FiTrendingUp, FiTarget, FiChevronDown, FiHelpCircle } from 'react-icons/fi';
import { useContent } from '../context/ContentContext';
import './About.css';

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={toggle}>
      <div className="faq-question">
        <h4>{question}</h4>
        <span className="toggle-icon"><FiChevronDown /></span>
      </div>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

const About = () => {
  const { content } = useContent();
  const { company_info } = content;
  const faqs = content.faqs || [];
  
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="about-modern">
      {/* 1. Cinematic Hero */}
      <section className="about-hero-cinematic">
        <div className="hero-bg" style={{backgroundImage: "url('/hero_mountain_background_1764893090134.jpg')"}}></div>
        <div className="overlay-gradient"></div>
        <div className="container relative z-10 text-center text-white">
          <span className="pill-badge fade-in-up">قصتنا ورؤيتنا</span>
          <h1 className="hero-title fade-in-up delay-100">
            أكثر من مجرد <span className="text-highlight">وكالة سفر</span>
          </h1>
          <p className="hero-subtitle fade-in-up delay-200">
            نحن الجسر الذي يربطك بأجمل ذكريات حياتك. رحلة بدأت بشغف، واستمرت بخدمة آلاف المسافرين.
          </p>
        </div>
      </section>

      {/* 2. The Story (Split Layout) */}
      <section className="about-story-section container">
        <div className="story-grid">
          <div className="story-content slide-in-right">
            <h2 className="section-title">
              الرحلة من <span className="accent-text">الحلم</span> إلى الواقع
            </h2>
            <div className="story-text">
              <p>
                تأسست <strong>{company_info.name}</strong> برؤية بسيطة ولكن طموحة: إعادة تعريف مفهوم السفر للمسافر العربي.
                لم نرد أن نكون مجرد وسيط لحجز التذاكر، بل أردنا أن نكون الرفيق الأمين الذي يحمل عنك عبء التخطيط ويترك لك متعة الاستكشاف.
              </p>
              <p>
                من بداياتنا المتواضعة، نمت عائلتنا لتشمل خبراء في السياحة، مرشدين محليين، وشركاء حول العالم، 
                يجمعنا هدف واحد: <strong>راحتك وسعادتك.</strong>
              </p>
            </div>
            
            <div className="stats-counter-row">
              <div className="stat-item">
                <span className="stat-number">+15</span>
                <span className="stat-label">عاماً من الخبرة</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">+50k</span>
                <span className="stat-label">مسافر سعيد</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">التزام بالجودة</span>
              </div>
            </div>
          </div>
          
          <div className="story-visual slide-in-left">
            <div className="visual-card main-visual">
              <img src="/assets/travel-happy.jpg" alt="فريقنا" className="img-cover" /> 
              {/* Fallback color if image missing */}
            </div>
            <div className="visual-card floating-visual">
              <img src="/public/hajj.jpg" alt="خدماتنا" className="img-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values (Glass Cards) */}
      <section className="about-values-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>قيمنا الراسخة</h2>
            <p>المبادئ التي تقود كل قرار نتخذه</p>
          </div>
          
          <div className="values-grid-modern">
            <div className="value-card-glass">
              <div className="icon-wrapper"><FiUsers /></div>
              <h3>العميل أولاً</h3>
              <p>أنت لست مجرد رقم. نحن نصمم كل رحلة وكأنها رحلتنا الخاصة.</p>
            </div>
            <div className="value-card-glass">
              <div className="icon-wrapper"><FiAward /></div>
              <h3>التميز والدقة</h3>
              <p>نهتم بأدق التفاصيل، من لحظة الحجز وحتى عودتك سالماً.</p>
            </div>
            <div className="value-card-glass">
              <div className="icon-wrapper"><FiTarget /></div>
              <h3>الشفافية التامة</h3>
              <p>لا رسوم خفية. وضوح كامل في الأسعار والخدمات المقدمة.</p>
            </div>
            <div className="value-card-glass">
              <div className="icon-wrapper"><FiTrendingUp /></div>
              <h3>التطوير المستمر</h3>
              <p>نبحث دائماً عن وجهات جديدة وخدمات أفضل لنقدمها لك.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="about-faq-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="pill-badge-blue">أسئلة شائعة</span>
            <h2>لديك استفسار؟ لدينا <span className="accent-text">الإجابة</span></h2>
          </div>

          <div className="faq-wrapper">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
                isOpen={openIndex === index}
                toggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
