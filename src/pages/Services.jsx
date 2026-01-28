import { FiCheckCircle } from 'react-icons/fi';
import { getIcon } from '../utils/iconResolver';
import { useContent } from '../context/ContentContext';
import './Services.css';

const Services = () => {
  const { content } = useContent();
  const services = content.services || [];

  return (
    <div className="services-page-azure">
      <div className="services-hero">
        <div className="container">
          <h1>خدماتنا المتميزة</h1>
          <p>حلول متكاملة تناسب جميع احتياجاتك، مصممة بدقة وعناية.</p>
        </div>
      </div>
      <div className="container services-list-container">
        <div className="services-full-grid">
          {services.map((s, index) => (
            <div key={index} className="service-box">
              <div className="service-icon-wrapper" style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                {getIcon(s.icon)}
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              {s.features && Array.isArray(s.features) && (
                <ul className="service-features">
                  {s.features.map((f, i) => (
                    <li key={i}><FiCheckCircle /> {f}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
