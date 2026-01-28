import { useState, useEffect } from 'react';
import './Admin.css';

const EditEntryModal = ({ entry, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    first_name: entry.first_name || '',
    last_name: entry.last_name || '',
    status: entry.status,
    admin_notes: entry.admin_notes || '',
    visa_type: entry.visa_type || '',
    passport_received_date: entry.passport_received_date || '',
    embassy_submit_date: entry.embassy_submit_date || '',
    expected_exit_date: entry.expected_exit_date || '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    setLoading(true);

    try {
      const response = await fetch('/api/admin/update-status', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: entry.id,
          first_name: formData.first_name.trim(),
          last_name: formData.last_name.trim(),
          status: formData.status,
          admin_notes: formData.admin_notes.trim() || null,
          visa_type: formData.visa_type || null,
          passport_received_date: formData.passport_received_date || null,
          embassy_submit_date: formData.embassy_submit_date || null,
          expected_exit_date: formData.expected_exit_date || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to update entry');
        return;
      }

      alert('تم تحديث البيانات بنجاح!');
      onSuccess();
    } catch (err) {
      console.error('Error updating entry:', err);
      setError('حدث خطأ. يرجى المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h3>تعديل البيانات</h3>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-body">
          <div className="entry-info">
            <p>
              <strong>رقم الجواز:</strong> {entry.passport_number}
            </p>
            <p>
              <strong>تاريخ الإنشاء:</strong> {new Date(entry.created_at).toLocaleString('ar-SA')}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="edit-first-name">الاسم الأول</label>
                <input
                  type="text"
                  id="edit-first-name"
                  value={formData.first_name}
                  onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                  placeholder="الاسم الأول"
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="edit-last-name">اسم العائلة</label>
                <input
                  type="text"
                  id="edit-last-name"
                  value={formData.last_name}
                  onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                  placeholder="اسم العائلة"
                  disabled={loading}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="edit-visa-type">نوع التأشيرة</label>
                <select
                  id="edit-visa-type"
                  value={formData.visa_type}
                  onChange={(e) =>
                    setFormData({ ...formData, visa_type: e.target.value })
                  }
                  disabled={loading}
                >
                  <option value="">اختر النوع</option>
                  <option value="زيارة">زيارة</option>
                  <option value="عمل">عمل</option>
                  <option value="عمرة">عمرة</option>
                  <option value="أخرى">أخرى</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="edit-passport-received">تاريخ استلام الجواز</label>
                <input
                  type="date"
                  id="edit-passport-received"
                  value={formData.passport_received_date}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      passport_received_date: e.target.value,
                    })
                  }
                  disabled={loading}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="edit-embassy-submit">تاريخ التقديم للسفارة</label>
                <input
                  type="date"
                  id="edit-embassy-submit"
                  value={formData.embassy_submit_date}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      embassy_submit_date: e.target.value,
                    })
                  }
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="edit-expected-exit">تاريخ الخروج المتوقع</label>
                <input
                  type="date"
                  id="edit-expected-exit"
                  value={formData.expected_exit_date}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      expected_exit_date: e.target.value,
                    })
                  }
                  disabled={loading}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="edit-status">الحالة *</label>
              <select
                id="edit-status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                required
                disabled={loading}
              >
                <option value="pending">قيد الانتظار</option>
                <option value="in_embassy">في السفارة</option>
                <option value="ready">جاهز</option>
                <option value="in_aden">في عدن</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="edit-notes">ملاحظات المدير (اختياري)</label>
              <textarea
                id="edit-notes"
                value={formData.admin_notes}
                onChange={(e) => setFormData({ ...formData, admin_notes: e.target.value })}
                placeholder="أضف أي ملاحظات حول هذا المدخل..."
                rows="4"
                disabled={loading}
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <div className="modal-actions">
              <button type="button" className="btn-secondary" onClick={onClose} disabled={loading}>
                إلغاء
              </button>
              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? 'جاري التحديث...' : 'تحديث البيانات'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEntryModal;