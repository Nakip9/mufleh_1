import { Link } from 'react-router-dom';
import { FiMapPin, FiClock, FiStar, FiArrowLeft } from 'react-icons/fi';
import { useContent } from '../context/ContentContext';
import './Destinations.css';

const Destinations = () => {
  const { content } = useContent();
  const destinations = content.destinations || [];

  return (
    <div className="destinations-page-azure">
      <div className="dest-hero">
        <div className="container">
          <h1>وجهاتنا السياحية</h1>
          <p>اختر من بين باقاتنا المختارة بعناية لأجمل مدن العالم.</p>
        </div>
      </div>

      <div className="container">
        <div className="destinations-grid-full">
          {destinations.map((place, index) => (
            <div className="dest-card" key={place.id || index}>
              <div className="card-image-wrapper">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80'} 
                />
                <div className="price-badge">{place.price}</div>
              </div>
              <div className="card-content">
                <div className="card-meta">
                  <span className="meta-item"><FiClock /> 5 أيام</span>
                  <span className="meta-item"><FiStar /> 5.0</span>
                </div>
                <h3><FiMapPin className="pin-icon" /> {place.name}</h3>
                <Link to={`/destinations`} className="btn-card-action">عرض التفاصيل</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Destinations;
