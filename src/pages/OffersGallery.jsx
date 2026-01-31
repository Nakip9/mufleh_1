import { useState, useEffect } from 'react';
import { FiTag, FiImage, FiX, FiZoomIn, FiLoader } from 'react-icons/fi';
import './OffersGallery.css';

const OffersGallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // 'all', 'offer', 'gallery'
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    setLoading(true);
    try {
      // In development (Vite), we might need to point to the local function URL if proxy isn't set up perfectly,
      // but usually /api works if configured. For now, we assume /api works or falls back.
      // Since this is a client-side fetch, ensure the API route is accessible.
      const response = await fetch('/api/offers/get'); 
      const data = await response.json();
      
      if (data.success) {
        setItems(data.data);
      } else {
        console.error('Failed to load data');
      }
    } catch (error) {
      console.error('Error loading offers:', error);
      // Fallback data if API fetch fails entirely (e.g. network error)
      setItems([
        {
          id: 1, title: "عرض شهر العسل - المالديف", description: "استمتع بإقامة فاخرة لمدة 5 أيام.", type: "offer", image_url: "/beach.jpg", price: "4500 ر.س"
        },
        {
          id: 3, title: "فندق برج الساعة", description: "صور من إقامتنا المميزة.", type: "gallery", image_url: "/hero_makkah_background_1764893075599.jpg"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

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
        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>جاري تحميل المحتوى...</p>
          </div>
        ) : (
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
        )}

        {!loading && filteredItems.length === 0 && (
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
