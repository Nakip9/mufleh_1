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
    <form onSubmit={handleSubmit} className="add-entry-form-content">
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="passport-number" className="form-label">رقم الجواز *</label>
          <input
            type="text"
            id="passport-number"
            className="form-input"
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
          <label htmlFor="first-name" className="form-label">الاسم الأول</label>
          <input
            type="text"
            id="first-name"
            className="form-input"
            value={formData.first_name}
            onChange={(e) =>
              setFormData({ ...formData, first_name: e.target.value })
            }
            placeholder="الاسم الأول"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="last-name" className="form-label">اسم العائلة</label>
          <input
            type="text"
            id="last-name"
            className="form-input"
            value={formData.last_name}
            onChange={(e) =>
              setFormData({ ...formData, last_name: e.target.value })
            }
            placeholder="اسم العائلة"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="status" className="form-label">الحالة *</label>
          <select
            id="status"
            className="form-select"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            required
            disabled={loading}
          >
            <option value="pending">تم الاستلام</option>
            <option value="in_embassy">في السفارة</option>
            <option value="ready">جاهز للاستلام</option>
            <option value="in_aden">في عدن</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="visa-type" className="form-label">نوع التأشيرة</label>
          <select
            id="visa-type"
            className="form-select"
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
          <label htmlFor="passport-received-date" className="form-label">تاريخ استلام الجواز</label>
          <input
            type="date"
            id="passport-received-date"
            className="form-input"
            value={formData.passport_received_date}
            onChange={(e) =>
              setFormData({ ...formData, passport_received_date: e.target.value })
            }
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="embassy-submit-date" className="form-label">تاريخ التقديم للسفارة</label>
          <input
            type="date"
            id="embassy-submit-date"
            className="form-input"
            value={formData.embassy_submit_date}
            onChange={(e) =>
              setFormData({ ...formData, embassy_submit_date: e.target.value })
            }
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="expected-exit-date" className="form-label">تاريخ الخروج المتوقع</label>
          <input
            type="date"
            id="expected-exit-date"
            className="form-input"
            value={formData.expected_exit_date}
            onChange={(e) =>
              setFormData({ ...formData, expected_exit_date: e.target.value })
            }
            disabled={loading}
          />
        </div>
      </div>

      <div className="form-group" style={{ marginTop: '1rem' }}>
        <label htmlFor="admin-notes" className="form-label">ملاحظات المدير (اختياري)</label>
        <textarea
          id="admin-notes"
          className="form-textarea"
          value={formData.admin_notes}
          onChange={(e) => setFormData({ ...formData, admin_notes: e.target.value })}
          placeholder="أضف أي ملاحظات حول هذا المدخل..."
          rows="3"
          disabled={loading}
        />
      </div>

      {error && <div className="alert alert-danger" style={{ color: 'red', marginTop: '1rem' }}>{error}</div>}

      <div style={{ marginTop: '2rem', textAlign: 'left' }}>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'جارٍ الإضافة...' : 'حفظ وإضافة المدخل'}
        </button>
      </div>
    </form>
  );
};

export default AddEntryForm;