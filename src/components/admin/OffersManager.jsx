import { useState, useEffect } from 'react';
import { FiTrash2, FiPlus, FiTag, FiImage } from 'react-icons/fi';
import './Admin.css';

const OffersManager = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'offer', // or 'gallery'
    image_url: '',
    price: ''
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/offers/get');
      const data = await res.json();
      if (data.success) {
        setItems(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch items', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('هل أنت متأكد من حذف هذا العنصر؟')) return;

    try {
      const res = await fetch(`/api/admin/delete-offer?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchItems();
      } else {
        alert('فشل الحذف');
      }
    } catch (error) {
      console.error('Delete error', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/create-offer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (data.success) {
        alert('تمت الإضافة بنجاح');
        setShowForm(false);
        setFormData({ title: '', description: '', type: 'offer', image_url: '', price: '' });
        fetchItems();
      } else {
        alert('حدث خطأ: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Submit error', error);
    }
  };

  return (
    <div className="offers-manager">
      <div className="page-header">
        <h1 className="page-title">إدارة العروض والمعرض</h1>
        <button 
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'إلغاء' : <><FiPlus /> إضافة جديد</>}
        </button>
      </div>

      {showForm && (
        <div className="admin-card">
          <h3 className="card-title">إضافة عنصر جديد</h3>
          <form onSubmit={handleSubmit} className="form-grid">
            <div className="form-group">
              <label className="form-label">العنوان</label>
              <input 
                type="text" 
                className="form-input" 
                required
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">النوع</label>
              <select 
                className="form-select"
                value={formData.type}
                onChange={e => setFormData({...formData, type: e.target.value})}
              >
                <option value="offer">عرض خاص (Offer)</option>
                <option value="gallery">صورة للمعرض (Gallery)</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">رابط الصورة</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="https://... or /image.jpg"
                required
                value={formData.image_url}
                onChange={e => setFormData({...formData, image_url: e.target.value})}
              />
            </div>

            {formData.type === 'offer' && (
              <div className="form-group">
                <label className="form-label">السعر (اختياري)</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="مثال: 500 ر.س"
                  value={formData.price}
                  onChange={e => setFormData({...formData, price: e.target.value})}
                />
              </div>
            )}

            <div className="form-group full-width" style={{ gridColumn: '1 / -1' }}>
              <label className="form-label">الوصف</label>
              <textarea 
                className="form-textarea" 
                rows="3"
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
              ></textarea>
            </div>

            <div className="form-actions" style={{ gridColumn: '1 / -1' }}>
              <button type="submit" className="btn btn-primary">حفظ</button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="text-center"><div className="spinner"></div></div>
      ) : (
        <div className="admin-card">
          <div className="table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>الصورة</th>
                  <th>العنوان</th>
                  <th>النوع</th>
                  <th>السعر</th>
                  <th>الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id}>
                    <td data-label="الصورة">
                      <img src={item.image_url} alt="" style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
                    </td>
                    <td data-label="العنوان"><strong>{item.title}</strong></td>
                    <td data-label="النوع">
                      <span className={`badge ${item.type === 'offer' ? 'badge-warning' : 'badge-info'}`}>
                        {item.type === 'offer' ? <><FiTag /> عرض</> : <><FiImage /> معرض</>}
                      </span>
                    </td>
                    <td data-label="السعر">{item.price || '-'}</td>
                    <td data-label="الإجراءات">
                      <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(item.id)}
                      >
                        <FiTrash2 /> حذف
                      </button>
                    </td>
                  </tr>
                ))}
                {items.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center">لا توجد عناصر. ابدأ بإضافة واحد!</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default OffersManager;
