import { useState, useEffect } from 'react';
import { useContent } from '../../context/ContentContext';
import './Admin.css'; // Re-use existing admin styles

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
    { id: 'services', label: 'الخدمات' }
  ];

  // Initialize edit data when content loads or tab changes
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
        refreshContent(); // Update the live site context
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

  // Generic Input Handler for Objects
  const handleObjectChange = (key, value) => {
    setEditData(prev => ({ ...prev, [key]: value }));
  };

  // Generic Handler for Arrays (List of items)
  const handleArrayChange = (index, key, value) => {
    setEditData(prev => {
      const newArray = [...prev];
      newArray[index] = { ...newArray[index], [key]: value };
      return newArray;
    });
  };

  const addItem = () => {
    setEditData(prev => {
      // Create a template based on the first item, or empty object
      const template = prev.length > 0 ? Object.keys(prev[0]).reduce((acc, k) => ({...acc, [k]: ''}), {}) : {};
      // Add ID if it looks like a destination/service
      if (activeTab === 'destinations' || activeTab === 'services') {
        template.id = Date.now(); // Simple ID generation
      }
      return [...prev, template];
    });
  };

  const removeItem = (index) => {
    if (window.confirm('هل أنت متأكد من الحذف؟')) {
      setEditData(prev => prev.filter((_, i) => i !== index));
    }
  };

  // Renderers based on data type
  const renderEditor = () => {
    if (Array.isArray(editData)) {
      return (
        <div className="array-editor">
          <button className="btn-secondary mb-4" onClick={addItem}>+ إضافة عنصر جديد</button>
          {editData.map((item, index) => (
            <div key={index} className="editor-card">
              <div className="card-header">
                <h4>عنصر #{index + 1}</h4>
                <button className="btn-delete-sm" onClick={() => removeItem(index)}>حذف</button>
              </div>
              <div className="card-body">
                {Object.keys(item).map(key => (
                  key !== 'id' && ( // Skip editing ID
                    <div key={key} className="form-group">
                      <label>{key}</label>
                      {key === 'description' || key === 'text' || key === 'answer' || key === 'detailedDescription' ? (
                        <textarea
                          value={item[key]}
                          onChange={(e) => handleArrayChange(index, key, e.target.value)}
                          rows="3"
                        />
                      ) : (
                        <input
                          type="text"
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
      // Object Editor (Company Info, Contact Info)
      return (
        <div className="object-editor">
          {Object.keys(editData).map(key => (
            <div key={key} className="form-group">
              <label>{key}</label>
              <input
                type="text"
                value={editData[key]}
                onChange={(e) => handleObjectChange(key, e.target.value)}
              />
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="content-editor">
      <div className="editor-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => {
              setActiveTab(tab.id);
              setMessage(null);
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="editor-workspace">
        <div className="workspace-header">
          <h3>تعديل: {tabs.find(t => t.id === activeTab)?.label}</h3>
          <button 
            className="btn-primary" 
            onClick={handleSave} 
            disabled={saving}
          >
            {saving ? 'جاري الحفظ...' : 'حفظ التغييرات'}
          </button>
        </div>

        {message && (
          <div className={`message-banner ${message.type}`}>
            {message.text}
          </div>
        )}

        <div className="form-container">
          {renderEditor()}
        </div>
      </div>
    </div>
  );
};

export default ContentEditor;
