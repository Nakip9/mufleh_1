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
            <Link to="/destinations" className="view-all-link">
              عرض الكل <FiArrowLeft />
            </Link>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="carousel-wrapper">
          <button 
            onClick={() => scroll('right')} 
            className="floating-nav-btn prev-float" 
            aria-label="السابق"
          >
            <FiChevronRight />
          </button>

          <div className="destinations-carousel-container" ref={scrollRef}>
            {destinations.map((place, index) => (
              <div className="showcase-card flip-card" key={place.id || index}>
                <div className="flip-card-inner">
                  
                  {/* Front Side */}
                  <div className="flip-card-front">
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
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back">
                    <div className="back-content">
                      <h3>{place.name}</h3>
                      <div className="divider-line"></div>
                      <p>{place.description ? (place.description.length > 100 ? place.description.substring(0, 100) + "..." : place.description) : "استكشف جمال هذه الوجهة السياحية الرائعة مع برامجنا المتميزة والمصممة خصيصاً لراحتك."}</p>
                      
                      <div className="back-features">
                        {place.features && place.features.slice(0, 3).map((feature, i) => (
                          <span key={i} className="mini-tag">{feature}</span>
                        ))}
                      </div>

                      <Link to="/contact" className="btn-flip-action">
                        احجز رحلتك <FiArrowLeft />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('left')} 
            className="floating-nav-btn next-float" 
            aria-label="التالي"
          >
            <FiChevronLeft />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedDestinations;