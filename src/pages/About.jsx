import { FiUsers, FiAward, FiTarget } from 'react-icons/fi';
import { useContent } from '../context/ContentContext';
import './About.css';

const About = () => {
  const { content } = useContent();
  const { company_info } = content;

  return (
    <div className="about-page-azure">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>من نحن</h1>
          <p>أكثر من مجرد وكالة سفر.. نحن رفاقك في استكشاف العالم.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story container">
        <div className="story-grid">
          <div className="story-content">
            <span className="azure-tag">قصتنا</span>
            <h2>بدأنا بحلم، وأصبحنا واقعاً</h2>
            <p>
              تأسست وكالة "{company_info.name}" برؤية واضحة: جعل السفر تجربة سلسة وممتعة للجميع. 
              بدأنا كفريق صغير من الشغوفين بالسفر، واليوم نفتخر بخدمة آلاف المسافرين سنوياً.
            </p>
            <p>
              نؤمن بأن السفر ليس مجرد انتقال من مكان لآخر، بل هو استثمار في الذكريات وتوسيع للآفاق.
            </p>
            
            <div className="stats-row">
              <div className="stat-box">
                <strong>+15</strong> <span>عاماً خبرة</span>
              </div>
              <div className="stat-box">
                <strong>+50k</strong> <span>عميل سعيد</span>
              </div>
            </div>
          </div>
          <div className="story-image">
             {/* Placeholder for About Image */}
            <div className="img-placeholder"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <div className="values-grid">
            <div className="value-card">
              <FiUsers className="val-icon" />
              <h3>العميل أولاً</h3>
              <p>رضاك هو معيار نجاحنا الوحيد. نحن معك في كل خطوة.</p>
            </div>
            <div className="value-card">
              <FiAward className="val-icon" />
              <h3>التميز</h3>
              <p>لا نقبل بأقل من الكمال في تخطيط وتنفيذ رحلاتك.</p>
            </div>
            <div className="value-card">
              <FiTarget className="val-icon" />
              <h3>الشفافية</h3>
              <p>أسعار واضحة، لا رسوم خفية، ومصداقية تامة.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
