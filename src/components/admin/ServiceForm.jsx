import { useState, useEffect } from 'react';
import './Admin.css';

const ServiceForm = ({ initialData, onSuccess, onCancel }) => {
  const isEditMode = !!initialData;
  const [formData, setFormData] = useState({
    title: '',
    tagline: '',
    description: '',
    detailed_description: '',
    icon: '',
    category: '',
    features: [],
  });
  
  const [currentFeature, setCurrentFeature] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        tagline: initialData.tagline || '',
        description: initialData.description || '',
        detailed_description: initialData.detailed_description || '',
        icon: initialData.icon || '',
        category: initialData.category || '',
        features: initialData.features || [],
      });
    }
  }, [initialData]);

  const handleAddFeature = (e) => {
    e.preventDefault();
    if (currentFeature.trim()) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, currentFeature.trim()]
      }));
      setCurrentFeature('');
    }
  };

  const handleRemoveFeature = (index) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.title.trim()) {
      setError('عنوان الخدمة مطلوب');
      return;
    }

    setLoading(true);

    try {
      const url = isEditMode ? '/api/admin/services/update' : '/api/admin/services/create';
      const method = isEditMode ? 'PUT' : 'POST';
      const body = isEditMode ? { ...formData, id: initialData.id } : formData;

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'فشل في حفظ الخدمة');
        return;
      }

      // Reset if not edit mode
      if (!isEditMode) {
        setFormData({
          title: '',
          tagline: '',
          description: '',
          detailed_description: '',
          icon: '',
          category: '',
          features: [],
        });
      }

      onSuccess(data.data);
    } catch (err) {
      console.error('Error saving service:', err);
      setError('حدث خطأ. يرجى المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-entry-form service-form">
      <div className="form-header">
        <h3>{isEditMode ? 'تعديل الخدمة' : 'إضافة خدمة جديدة'}</h3>
        {onCancel && (
          <button type="button" className="btn-secondary" onClick={onCancel}>
            إلغاء
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="service-title">عنوان الخدمة *</label>
            <input
              type="text"
              id="service-title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="مثال: تفاويض العمالة"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="service-category">الفئة</label>
            <input
              type="text"
              id="service-category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              placeholder="مثال: visa, musaned"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="service-icon">أيقونة (React Icons Name)</label>
            <input
              type="text"
              id="service-icon"
              value={formData.icon}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              placeholder="مثال: FiFileText"
              disabled={loading}
            />
            <small className="input-hint">
              يجب أن يبدأ الاسم بـ Fi, Tb, Fa, أو Md (مثال: FiHome, TbUser)
            </small>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="service-tagline">الشعار / العنوان الفرعي</label>
          <input
            type="text"
            id="service-tagline"
            value={formData.tagline}
            onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
            placeholder="وصف مختصر جداً يظهر تحت العنوان"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="service-description">وصف مختصر</label>
          <textarea
            id="service-description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="وصف يظهر في البطاقة الرئيسية"
            rows="2"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="service-detailed">وصف تفصيلي</label>
          <textarea
            id="service-detailed"
            value={formData.detailed_description}
            onChange={(e) => setFormData({ ...formData, detailed_description: e.target.value })}
            placeholder="شرح كامل للخدمة"
            rows="4"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>المميزات</label>
          <div className="features-input-group">
            <input
              type="text"
              value={currentFeature}
              onChange={(e) => setCurrentFeature(e.target.value)}
              placeholder="أضف ميزة جديدة..."
              disabled={loading}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault(); // Prevent form submission
                  if (currentFeature.trim()) {
                     setFormData(prev => ({
                        ...prev,
                        features: [...prev.features, currentFeature.trim()]
                      }));
                      setCurrentFeature('');
                  }
                }
              }}
            />
            <button 
              type="button" 
              className="btn-secondary" 
              onClick={handleAddFeature}
              disabled={!currentFeature.trim() || loading}
            >
              إضافة
            </button>
          </div>
          
          <ul className="features-list">
            {formData.features.map((feature, index) => (
              <li key={index}>
                <span>{feature}</span>
                <button 
                  type="button" 
                  className="btn-icon-small"
                  onClick={() => handleRemoveFeature(index)}
                  title="حذف"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? 'جارٍ الحفظ...' : (isEditMode ? 'حفظ التعديلات' : 'إضافة الخدمة')}
        </button>
      </form>
    </div>
  );
};

export default ServiceForm;
