import { useState, useEffect } from 'react';
import ServiceForm from './ServiceForm';
import './Admin.css';

const ServicesManager = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [editingService, setEditingService] = useState(null);

  const fetchServices = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/services');
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch services');
      }
      
      setServices(data.data || []);
    } catch (err) {
      console.error('Error fetching services:', err);
      setError('فشل في جلب الخدمات. يرجى المحاولة لاحقاً.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('هل أنت متأكد من حذف هذه الخدمة؟')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/services/delete?id=${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to delete service');
      }

      // Remove from local state
      setServices(prev => prev.filter(service => service.id !== id));
    } catch (err) {
      console.error('Error deleting service:', err);
      alert('حدث خطأ أثناء حذف الخدمة');
    }
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setIsCreating(false);
    // Scroll to top of form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCreateSuccess = () => {
    setIsCreating(false);
    fetchServices();
  };

  const handleUpdateSuccess = (updatedService) => {
    setServices(prev => prev.map(s => s.id === updatedService.id ? updatedService : s));
    setEditingService(null);
  };

  return (
    <div className="services-manager">
      <div className="section-header">
        <h2>إدارة الخدمات</h2>
        {!isCreating && !editingService && (
          <button className="btn-primary" onClick={() => setIsCreating(true)}>
            + إضافة خدمة جديدة
          </button>
        )}
      </div>

      {(isCreating || editingService) && (
        <div className="form-container">
          <ServiceForm 
            initialData={editingService}
            onSuccess={editingService ? handleUpdateSuccess : handleCreateSuccess}
            onCancel={() => {
              setIsCreating(false);
              setEditingService(null);
            }}
          />
        </div>
      )}

      {loading ? (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>جاري تحميل الخدمات...</p>
        </div>
      ) : error ? (
        <div className="error-banner">
          {error}
          <button onClick={fetchServices}>إعادة المحاولة</button>
        </div>
      ) : (
        <div className="services-list">
          {services.length === 0 ? (
            <p className="no-data">لا توجد خدمات مضافة حالياً.</p>
          ) : (
            <div className="table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>العنوان</th>
                    <th>الفئة</th>
                    <th>آخر تحديث</th>
                    <th>الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map(service => (
                    <tr key={service.id}>
                      <td className="font-medium">{service.title}</td>
                      <td>
                        <span className="badge">{service.category || '-'}</span>
                      </td>
                      <td>{new Date(service.updated_at).toLocaleDateString('ar-SA')}</td>
                      <td>
                        <div className="actions-cell">
                          <button 
                            className="btn-edit"
                            onClick={() => handleEdit(service)}
                          >
                            تعديل
                          </button>
                          <button 
                            className="btn-delete"
                            onClick={() => handleDelete(service.id)}
                          >
                            حذف
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ServicesManager;
