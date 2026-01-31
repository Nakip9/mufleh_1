import { useState, useEffect } from 'react';
import { useContent } from '../../context/ContentContext';
import './Admin.css';

const ContentEditor = () => {
  const { content, refreshContent } = useContent();
  const [activeTab, setActiveTab] = useState('company_info');
  const [editData, setEditData] = useState({});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);

  // Tabs configuration
  const tabs = [
    { id: 'company_info', label: 'معلومات الشركة' },
    { id: 'contact_info', label: 'معلومات الاتصال' },
    { id: 'destinations', label: 'الوجهات' },
    { id: 'testimonials', label: 'آراء العملاء' },
    { id: 'faqs', label: 'الأسئلة الشائعة' },
    { id: 'services', label: 'الخدمات' },
    { id: 'offers', label: 'العروض' },
    { id: 'gallery', label: 'معرض الصور' }
  ];

  // Arabic Label Mappings
  const labelMap = {
    // Company Info
    companyName: 'اسم الشركة',
    description: 'الوصف العام',
    foundedYear: 'سنة التأسيس',
    licenseNumber: 'رقم الترخيص',
    
    // Contact Info
    phone: 'رقم الهاتف',
    email: 'البريد الإلكتروني',
    address: 'العنوان',
    whatsapp: 'رقم الواتساب',
    facebook: 'فيسبوك',
    instagram: 'انستقرام',
    twitter: 'تويتر/إكس',
    mapUrl: 'رابط الخريطة',
    
    // Common
    id: 'المعرف',
    name: 'الاسم',
    title: 'العنوان',
    image: 'رابط الصورة',
    rating: 'التقييم',
    text: 'النص/المحتوى',
    question: 'السؤال',
    answer: 'الإجابة',
    category: 'الفئة',
    price: 'السعر',
    features: 'المميزات',
    detailedDescription: 'وصف تفصيلي',
    image_url: 'رابط الصورة',
    type: 'النوع',
    description: 'الوصف'
  };

  const getLabel = (key) => labelMap[key] || key;

  useEffect(() => {
    if (content[activeTab]) {
      setEditData(content[activeTab]);
    }
  }, [content, activeTab]);

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);
    try {
      const response = await fetch('/api/admin/content/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          key: activeTab,
          content: editData
        })
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'تم حفظ التغييرات بنجاح!' });
        refreshContent();
        setTimeout(() => setMessage(null), 3000);
      } else {
        setMessage({ type: 'error', text: 'فشل الحفظ. يرجى المحاولة مرة أخرى.' });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: 'error', text: 'حدث خطأ في الاتصال.' });
    } finally {
      setSaving(false);
    }
  };

  const handleObjectChange = (key, value) => {
    setEditData(prev => ({ ...prev, [key]: value }));
  };

  const handleArrayChange = (index, key, value) => {
    setEditData(prev => {
      const newArray = [...prev];
      newArray[index] = { ...newArray[index], [key]: value };
      return newArray;
    });
  };

  const addItem = () => {
    setEditData(prev => {
      const template = prev.length > 0 ? Object.keys(prev[0]).reduce((acc, k) => ({...acc, [k]: ''}), {}) : {};
      if (activeTab === 'destinations' || activeTab === 'services') {
        template.id = Date.now();
      }
      return [...prev, template];
    });
  };

  const removeItem = (index) => {
    if (window.confirm('هل أنت متأكد من الحذف؟')) {
      setEditData(prev => prev.filter((_, i) => i !== index));
    }
  };

  const renderEditor = () => {
    if (Array.isArray(editData)) {
      return (
        <div className="array-editor">
          <button className="btn btn-secondary mb-4" onClick={addItem}>+ إضافة عنصر جديد</button>
          
          {editData.length === 0 && <p className="text-muted">لا توجد عناصر. أضف واحداً جديداً.</p>}
          
          {editData.map((item, index) => (
            <div key={index} className="admin-card" style={{ marginBottom: '1.5rem', background: '#f8fafc' }}>
              <div className="card-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>عنصر #{index + 1}</span>
                <button className="btn btn-danger" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }} onClick={() => removeItem(index)}>حذف</button>
              </div>
              <div className="form-grid">
                {Object.keys(item).map(key => (
                  key !== 'id' && (
                    <div key={key} className="form-group">
                      <label className="form-label">{getLabel(key)}</label>
                      {key === 'description' || key === 'text' || key === 'answer' || key === 'detailedDescription' ? (
                        <textarea
                          className="form-textarea"
                          value={item[key]}
                          onChange={(e) => handleArrayChange(index, key, e.target.value)}
                          rows="3"
                        />
                      ) : (
                        <input
                          type="text"
                          className="form-input"
                          value={item[key]}
                          onChange={(e) => handleArrayChange(index, key, e.target.value)}
                        />
                      )}
                    </div>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="admin-card">
          <div className="form-grid">
            {Object.keys(editData).map(key => (
              <div key={key} className="form-group">
                <label className="form-label">{getLabel(key)}</label>
                <input
                  type="text"
                  className="form-input"
                  value={editData[key]}
                  onChange={(e) => handleObjectChange(key, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="content-editor">
      <div className="filters-bar" style={{ gap: '0.5rem', overflowX: 'auto', flexWrap: 'nowrap' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`btn ${activeTab === tab.id ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => {
              setActiveTab(tab.id);
              setMessage(null);
            }}
            style={{ whiteSpace: 'nowrap' }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="page-header">
        <h2 className="page-title" style={{ fontSize: '1.5rem' }}>تعديل: {tabs.find(t => t.id === activeTab)?.label}</h2>
        <button 
          className="btn btn-primary" 
          onClick={handleSave} 
          disabled={saving}
        >
          {saving ? 'جاري الحفظ...' : 'حفظ التغييرات 💾'}
        </button>
      </div>

      {message && (
        <div className={`alert ${message.type === 'success' ? 'badge-success' : 'badge-warning'}`} style={{ padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', display: 'block', textAlign: 'center' }}>
          {message.text}
        </div>
      )}

      {renderEditor()}
    </div>
  );
};

export default ContentEditor;
