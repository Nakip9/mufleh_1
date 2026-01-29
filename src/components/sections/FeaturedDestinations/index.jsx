import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiClock, FiStar, FiArrowLeft, FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useContent } from '../../../context/ContentContext';
import './FeaturedDestinations.css';

const FeaturedDestinations = () => {
  const { content } = useContent();
  const destinations = content.destinations || [];
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 350; // Card width approx
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="destinations-showcase-section">
      <div className="container">
        
        {/* Header */}
        <div className="showcase-header">
          <div>
            <span className="pill-tag">اكتشف العالم</span>
            <h2 className="showcase-title">وجهاتنا <span className="highlight">المختارة</span></h2>
          </div>
          
          <div className="header-actions">
            <div className="nav-buttons">
              <button onClick={() => scroll('right')} className="nav-btn prev" aria-label="السابق">
                <FiChevronRight />
              </button>
              <button onClick={() => scroll('left')} className="nav-btn next" aria-label="التالي">
                <FiChevronLeft />
              </button>
            </div>
            <Link to="/destinations" className="view-all-link">
              عرض الكل <FiArrowLeft />
            </Link>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="destinations-carousel-container" ref={scrollRef}>
          {destinations.map((place, index) => (
            <div className="showcase-card" key={place.id || index}>
              
              <div className="card-image-box">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80'} 
                />
                <div className="overlay-gradient"></div>
                <div className="card-top-badges">
                  <span className="rating-pill"><FiStar className="star-fill" /> {place.rating || '5.0'}</span>
                </div>
              </div>

              <div className="card-details-floating">
                <h3><FiMapPin className="pin" /> {place.name}</h3>
                <div className="meta-row">
                  <span><FiClock /> {place.duration || '5 أيام'}</span>
                  <span className="price">{place.price}</span>
                </div>
                <Link to="/contact" className="card-link-overlay"></Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedDestinations;