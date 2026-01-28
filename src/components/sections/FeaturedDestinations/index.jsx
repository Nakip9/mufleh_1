import { Link } from 'react-router-dom';
import { FiMapPin, FiClock, FiStar, FiArrowLeft } from 'react-icons/fi';
import { useContent } from '../../../context/ContentContext';
import './FeaturedDestinations.css';

const FeaturedDestinations = () => {
  const { content } = useContent();
  // Use first 3 destinations from the centralized data
  const destinations = content.destinations ? content.destinations.slice(0, 3) : [];

  return (
    <section className="destinations-azure">
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="azure-tag">وجهات مميزة</span>
            <h2 className="section-title">اختر وجهتك القادمة</h2>
          </div>
          <Link to="/destinations" className="view-all-btn">
            عرض كل الرحلات <FiArrowLeft />
          </Link>
        </div>
        <div className="destinations-grid">
          {destinations.map((place, index) => (
            <div className="dest-card" key={place.id || index}>
              <div className="card-image-wrapper">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80'} 
                />
                <div className="price-badge">{place.price}</div>
                <div className="rating-badge"><FiStar className="star-icon" /> 5.0</div>
              </div>
              <div className="card-content">
                <div className="card-meta">
                  <span className="meta-item"><FiClock /> 5 أيام / 4 ليالي</span>
                </div>
                <h3><FiMapPin className="pin-icon" /> {place.name}</h3>
                <p>{place.description ? place.description.substring(0, 100) + '...' : ''}</p>
                <Link to={`/destinations`} className="btn-card-action">تفاصيل الرحلة</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturedDestinations;
