import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiZoomIn, FiX, FiCamera } from 'react-icons/fi';
import { useContent } from '../context/ContentContext';
import './Gallery.css';

const Gallery = () => {
  const { content } = useContent();
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = (content.gallery || []).map(item => item.image_url);

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <div className="page-hero gallery-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>معرض <span className="highlight">الصور</span></h1>
            <p>لحظات لا تُنسى من رحلاتنا حول العالم</p>
          </motion.div>
        </div>
      </div>

      <div className="container gallery-content">
        <div className="masonry-grid">
          {galleryImages.map((src, index) => (
            <motion.div 
              key={index} 
              className="masonry-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 % 0.5, duration: 0.5 }}
            >
              <div className="gallery-card-wrapper" onClick={() => setSelectedImage(src)}>
                <img src={src} alt={`Gallery image ${index + 1}`} loading="lazy" />
                <div className="overlay">
                  <FiZoomIn className="zoom-icon" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <button className="close-btn" aria-label="Close">
            <FiX />
          </button>
          <div className="lightbox-image-container" onClick={e => e.stopPropagation()}>
            <img src={selectedImage} alt="Full screen view" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
