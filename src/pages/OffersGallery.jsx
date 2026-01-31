import { useState } from 'react';
import { FiTag, FiImage, FiX, FiZoomIn } from 'react-icons/fi';
import './OffersGallery.css';

const OffersGallery = () => {
  const [filter, setFilter] = useState('all'); // 'all', 'offer', 'gallery'
  const [selectedImage, setSelectedImage] = useState(null);

  // Hardcoded Data (No Database)
  const items = [
    {
      id: 1,
      title: "عرض شهر العسل - المالديف",
      description: "استمتع بإقامة فاخرة لمدة 5 أيام في منتجع فوق الماء مع وجبات كاملة.",
      type: "offer",
      image_url: "/beach.jpg",
      price: "4500 ر.س"
    },
    {
      id: 2,
      title: "رحلة إسطنبول التاريخية",
      description: "جولة سياحية شاملة لزيارة المعالم التاريخية والبوسفور.",
      type: "offer",
      image_url: "/istanbul.jpeg",
      price: "2000 ر.س"
    },
    {
      id: 3,
      title: "فندق برج الساعة",
      description: "صور من إقامتنا المميزة لعملائنا في مكة المكرمة.",
      type: "gallery",
      image_url: "/hero_makkah_background_1764893075599.jpg"
    },
    {
      id: 4,
      title: "مجموعة سياحية في لندن",
      description: "لقطات من رحلتنا الجماعية الأخيرة إلى لندن.",
      type: "gallery",
      image_url: "/london.jpeg"
    },
    {
      id: 5,
      title: "عرض دبي للتسوق",
      description: "تذكرة طيران + فيزا + فندق 4 نجوم لمدة 4 ليالي.",
      type: "offer",
      image_url: "/dubai.jpg",
      price: "1800 ر.س"
    }
  ];

  const filteredItems = items.filter(item => filter === 'all' ? true : item.type === filter);

  return (
    <div className="offers-gallery-page">
      
      {/* Header */}
      <div className="page-hero">
        <div className="container">
          <h1>العروض <span className="highlight">والمعرض</span></h1>
          <p>اكتشف أحدث العروض الحصرية وجولة في معرض صور رحلاتنا المميزة</p>
        </div>
      </div>

      <div className="container">
        {/* Tabs */}
        <div className="gallery-tabs">
          <button 
            className={`tab-btn ${filter === 'all' ? 'active' : ''}`} 
            onClick={() => setFilter('all')}
          >
            الكل
          </button>
          <button 
            className={`tab-btn ${filter === 'offer' ? 'active' : ''}`} 
            onClick={() => setFilter('offer')}
          >
            <FiTag /> عروض خاصة
          </button>
          <button 
            className={`tab-btn ${filter === 'gallery' ? 'active' : ''}`} 
            onClick={() => setFilter('gallery')}
          >
            <FiImage /> معرض الصور
          </button>
        </div>

        {/* Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div key={item.id || index} className={`gallery-card ${item.type}`}>
              <div className="card-media" onClick={() => setSelectedImage(item)}>
                <img src={item.image_url} alt={item.title} loading="lazy" />
                <div className="media-overlay">
                  <FiZoomIn />
                </div>
                {item.type === 'offer' && <span className="badge-offer">عرض مميز</span>}
              </div>
              <div className="card-body">
                <div className="card-header-row">
                  <h3>{item.title}</h3>
                  {item.price && <span className="price-tag">{item.price}</span>}
                </div>
                <p>{item.description}</p>
                {item.type === 'offer' && (
                  <a href="https://wa.me/967775972318" target="_blank" rel="noopener noreferrer" className="book-btn">
                    احجز الآن
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="empty-state">
            <p>لا توجد عناصر لعرضها في هذا القسم حالياً.</p>
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