import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { getIcon } from '../../../utils/iconResolver';
import { useContent } from '../../../context/ContentContext';
import './HomeServices.css';

const HomeServices = () => {
  const { content } = useContent();
  // Use first 3 services from the dynamic content
  const displayServices = content.services ? content.services.slice(0, 3) : [];

  return (
    <section className="services-azure">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">ماذا نقدم؟</span>
          <h2 className="section-title">خدمات مصممة لراحتك</h2>
          <p className="section-subtitle">
            كل ما تحتاجه لتجربة سفر لا تُنسى تحت سقف واحد.
          </p>
        </div>

        <div className="services-grid">
          {displayServices.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="icon-wrapper">
                {getIcon(item.icon)}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              
              <Link to="/services" className="card-link">
                اقرأ المزيد <FiArrowLeft />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeServices;