import { useState, useEffect } from 'react';
import { useContent } from '../../context/ContentContext';
import ServiceForm from './ServiceForm';
import './Admin.css';

const ServicesManager = () => {
  const { refreshContent } = useContent();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [editingService, setEditingService] = useState(null);

  const fetchServices = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/services?t=${Date.now()}`);
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

      setServices(prev => prev.filter(service => service.id !== id));
      refreshContent();
    } catch (err) {
      console.error('Error deleting service:', err);
      alert('حدث خطأ أثناء حذف الخدمة');
    }
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setIsCreating(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCreateSuccess = () => {
    setIsCreating(false);
    fetchServices();
    refreshContent();
  };

  const handleUpdateSuccess = (updatedService) => {
    setServices(prev => prev.map(s => s.id === updatedService.id ? updatedService : s));
    setEditingService(null);
    refreshContent();
  };

  return (
    <div className="services-manager">
      <div className="page-header">
        <h2 className="page-title">إدارة الخدمات</h2>
        {!isCreating && !editingService && (
          <button className="btn btn-primary" onClick={() => setIsCreating(true)}>
            + إضافة خدمة جديدة
          </button>
        )}
      </div>

      {(isCreating || editingService) && (
        <div className="admin-card">
          <div className="card-title">
            {isCreating ? 'إضافة خدمة جديدة' : 'تعديل الخدمة'}
          </div>
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
        <div className="text-center" style={{ padding: '2rem' }}>
          <div className="spinner"></div>
          <p>جاري تحميل الخدمات...</p>
        </div>
      ) : error ? (
        <div className="alert alert-danger" style={{ padding: '1rem', background: '#fee2e2', color: '#b91c1c', borderRadius: '0.5rem' }}>
          {error}
          <button className="btn btn-secondary" style={{ marginRight: '1rem' }} onClick={fetchServices}>إعادة المحاولة</button>
        </div>
      ) : (
        <div className="admin-card">
          {services.length === 0 ? (
            <p className="text-center text-muted" style={{ padding: '2rem' }}>لا توجد خدمات مضافة حالياً.</p>
          ) : (
            <div className="table-wrapper">
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
                        <span className="badge badge-info">{service.category || '-'}</span>
                      </td>
                      <td>{new Date(service.updated_at).toLocaleDateString('ar-SA')}</td>
                      <td>
                        <div className="action-buttons" style={{ display: 'flex', gap: '0.5rem' }}>
                          <button 
                            className="btn btn-secondary"
                            style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}
                            onClick={() => handleEdit(service)}
                          >
                            تعديل
                          </button>
                          <button 
                            className="btn btn-danger"
                            style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}
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
