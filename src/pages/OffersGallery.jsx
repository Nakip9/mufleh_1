import { useState } from 'react';
import { FiTag, FiX, FiZoomIn } from 'react-icons/fi';
import { useContent } from '../context/ContentContext';
import './OffersGallery.css';

const OffersGallery = () => {
  const { content } = useContent();
  const [selectedImage, setSelectedImage] = useState(null);

  const items = content.offers || [];

  return (
    <div className="offers-gallery-page">
      
      {/* Header */}
      <div className="page-hero">
        <div className="container">
          <h1>أحدث <span className="highlight">العروض</span></h1>
          <p>اكتشف أحدث العروض الحصرية ورحلاتنا المميزة</p>
        </div>
      </div>

      <div className="container">
        {/* Grid */}
        <div className="gallery-grid">
          {items.map((item, index) => (
            <div key={item.id || index} className={`gallery-card ${item.type}`}>
              <div className="card-media" onClick={() => setSelectedImage(item)}>
                <img src={item.image_url} alt={item.title} loading="lazy" />
                <div className="media-overlay">
                  <FiZoomIn />
                </div>
                <span className="badge-offer">عرض مميز</span>
              </div>
              <div className="card-body">
                <div className="card-header-row">
                  <h3>{item.title}</h3>
                  {item.price && <span className="price-tag">{item.price}</span>}
                </div>
                <p>{item.description}</p>
                <a href="https://wa.me/967775972318" target="_blank" rel="noopener noreferrer" className="book-btn">
                  احجز الآن
                </a>
              </div>
            </div>
          ))}
        </div>

        {items.length === 0 && (
          <div className="empty-state">
            <p>لا توجد عروض حالياً.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <button className="close-lightbox"><FiX /></button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.image_url} alt={selectedImage.title} />
            <div className="lightbox-caption">
              <h3>{selectedImage.title}</h3>
              {selectedImage.price && <span className="lightbox-price">{selectedImage.price}</span>}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default OffersGallery;
