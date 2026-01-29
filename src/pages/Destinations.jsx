import { Link } from 'react-router-dom';
import { FiMapPin, FiArrowUpLeft, FiClock } from 'react-icons/fi';
import { useContent } from '../context/ContentContext';
import './Destinations.css';

const Destinations = () => {
  const { content } = useContent();
  
  // Safe data fallback
  const destinations = content.destinations && content.destinations.length > 0 
    ? content.destinations 
    : [
        { id: 1, name: 'باريس', price: '$1200', image: '/assets/paris.jpg', duration: '5 أيام', rating: '4.8' },
        { id: 2, name: 'دبي', price: '$800', image: '/assets/dubai.jpg', duration: '4 أيام', rating: '4.9' },
        { id: 3, name: 'لندن', price: '$1500', image: '/assets/london.jpg', duration: '6 أيام', rating: '4.7' },
        { id: 4, name: 'إسطنبول', price: '$950', image: '/assets/istanbul.jpeg', duration: '5 أيام', rating: '4.8' },
        { id: 5, name: 'الرياض', price: '$600', image: '/assets/Riyadh.jpg', duration: '3 أيام', rating: '4.9' },
        { id: 6, name: 'القاهرة', price: '$700', image: '/assets/cairo.jpg', duration: '4 أيام', rating: '4.6' },
      ];

  return (
    <div className="destinations-creative-page">
      
      {/* 1. Minimalist Hero */}
      <section className="creative-hero">
        <div className="container">
          <span className="hero-tag">وجهات مختارة</span>
          <h1 className="hero-headline">حيث تبدأ <span className="underline-accent">القصة</span></h1>
          <p className="hero-sub">استكشف العالم بعيون مختلفة. رحلات صممت لتلهمك.</p>
        </div>
      </section>

      {/* 2. Cinematic Grid */}
      <section className="container">
        <div className="cinematic-grid">
          {destinations.map((place, index) => (
            <Link to="/contact" className="cinematic-card" key={place.id || index}>
              
              {/* Image Layer */}
              <div className="card-image-layer">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80'} 
                />
                <div className="image-overlay"></div>
                
                {/* Reveal Button */}
                <div className="explore-circle">
                  <FiArrowUpLeft />
                </div>
              </div>

              {/* Floating Info Layer */}
              <div className="card-info-glass">
                <div className="info-top">
                  <div className="dest-badge">
                    <FiMapPin className="pin" /> وجهة مميزة
                  </div>
                  <span className="duration-text"><FiClock /> {place.duration}</span>
                </div>
                
                <div className="info-main">
                  <h2>{place.name}</h2>
                  <div className="price-box">
                    <span className="label">ابتداءً من</span>
                    <span className="amount">{place.price}</span>
                  </div>
                </div>
              </div>

            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Destinations;
