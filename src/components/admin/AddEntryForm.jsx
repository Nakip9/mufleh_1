import { useState } from 'react';
import './Admin.css';

const AddEntryForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    passport_number: '',
    first_name: '',
    last_name: '',
    status: 'pending',
    admin_notes: '',
    visa_type: '',
    passport_received_date: '',
    embassy_submit_date: '',
    expected_exit_date: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.passport_number.trim()) {
      setError('رقم الجواز مطلوب');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/admin/create-entry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          passport_number: formData.passport_number.trim().toUpperCase(),
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
        setError(data.error || 'فشل في إضافة المدخل');
        return;
      }

      // Reset form
      setFormData({
        passport_number: '',
        first_name: '',
        last_name: '',
        status: 'pending',
        admin_notes: '',
        visa_type: '',
        passport_received_date: '',
        embassy_submit_date: '',
        expected_exit_date: '',
      });

      alert('تم إضافة المدخل بنجاح!');
      onSuccess();
    } catch (err) {
      console.error('خطأ في إضافة المدخل:', err);
      setError('حدث خطأ. يرجى المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-entry-form">
      <h3>إضافة مدخل جديد لجواز السفر</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="passport-number">رقم الجواز *</label>
            <input
              type="text"
              id="passport-number"
              value={formData.passport_number}
              onChange={(e) =>
                setFormData({ ...formData, passport_number: e.target.value })
              }
              placeholder="أدخل رقم الجواز"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="first-name">الاسم الأول</label>
            <input
              type="text"
              id="first-name"
              value={formData.first_name}
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
              placeholder="الاسم الأول"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="last-name">اسم العائلة</label>
            <input
              type="text"
              id="last-name"
              value={formData.last_name}
              onChange={(e) =>
                setFormData({ ...formData, last_name: e.target.value })
              }
              placeholder="اسم العائلة"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">الحالة *</label>
            <select
              id="status"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              required
              disabled={loading}
            >
              <option value="pending"> تم الاستلام </option>
              <option value="in_embassy">في السفارة</option>
              <option value="ready">جاهز</option>
              <option value="in_aden">في عدن</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="visa-type">نوع التأشيرة</label>
            <select
              id="visa-type"
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
            <label htmlFor="passport-received-date">تاريخ استلام الجواز</label>
            <input
              type="date"
              id="passport-received-date"
              value={formData.passport_received_date}
              onChange={(e) =>
                setFormData({ ...formData, passport_received_date: e.target.value })
              }
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="embassy-submit-date">تاريخ التقديم للسفارة</label>
            <input
              type="date"
              id="embassy-submit-date"
              value={formData.embassy_submit_date}
              onChange={(e) =>
                setFormData({ ...formData, embassy_submit_date: e.target.value })
              }
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="expected-exit-date">تاريخ الخروج المتوقع</label>
            <input
              type="date"
              id="expected-exit-date"
              value={formData.expected_exit_date}
              onChange={(e) =>
                setFormData({ ...formData, expected_exit_date: e.target.value })
              }
              disabled={loading}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="admin-notes">ملاحظات المدير (اختياري)</label>
          <textarea
            id="admin-notes"
            value={formData.admin_notes}
            onChange={(e) => setFormData({ ...formData, admin_notes: e.target.value })}
            placeholder="أضف أي ملاحظات حول هذا المدخل..."
            rows="3"
            disabled={loading}
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? 'جارٍ الإضافة...' : 'إضافة المدخل'}
        </button>
      </form>
    </div>
  );
};

export default AddEntryForm;