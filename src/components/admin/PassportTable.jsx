import { useState } from 'react';
import EditEntryModal from './EditEntryModal';
import './Admin.css'; // Ensure we use the main admin styles

const PassportTable = ({ entries, onRefresh, onDelete }) => {
  const [editingEntry, setEditingEntry] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const handleEdit = (entry) => {
    setEditingEntry(entry);
  };

  const handleDelete = async (id, passportNumber) => {
    if (!window.confirm(`هل أنت متأكد من حذف رقم الجواز ${passportNumber}؟`)) {
      return;
    }

    setDeletingId(id);

    try {
      const response = await fetch(`/api/admin/delete-entry?id=${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || 'فشل في حذف المدخل');
        return;
      }

      alert('تم حذف المدخل بنجاح');
      onRefresh();
    } catch (error) {
      console.error('Error deleting entry:', error);
      alert('حدث خطأ أثناء حذف المدخل');
    } finally {
      setDeletingId(null);
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      ready: { label: 'جاهز للاستلام', className: 'badge-success' },
      in_embassy: { label: 'في السفارة', className: 'badge-warning' },
      pending: { label: 'قيد الانتظار', className: 'badge-info' },
      in_aden: { label: 'في عدن', className: 'badge-info' },
    };

    const badge = badges[status] || badges.pending;
    return <span className={`badge ${badge.className}`}>{badge.label}</span>;
  };

  if (entries.length === 0) {
    return (
      <div className="text-center" style={{ padding: '3rem', color: 'var(--admin-text-muted)' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📂</div>
        <p>لا توجد بيانات لعرضها حالياً.</p>
        <p style={{ fontSize: '0.9rem' }}>يمكنك إضافة جواز جديد باستخدام الزر أعلاه.</p>
      </div>
    );
  }

  return (
    <>
      <div className="table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>رقم الجواز</th>
              <th>الاسم الكامل</th>
              <th>نوع التأشيرة</th>
              <th>الحالة</th>
              <th>تاريخ الإنشاء</th>
              <th>آخر تحديث</th>
              <th>ملاحظات</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.id}>
                <td>
                  <strong style={{ fontFamily: 'monospace', fontSize: '1.1em' }}>{entry.passport_number}</strong>
                </td>
                <td>
                  {[entry.first_name, entry.last_name].filter(Boolean).join(' ') || '—'}
                </td>
                <td>{entry.visa_type || '—'}</td>
                <td>{getStatusBadge(entry.status)}</td>
                <td>{new Date(entry.created_at).toLocaleDateString('ar-SA')}</td>
                <td>{new Date(entry.updated_at).toLocaleDateString('ar-SA')}</td>
                <td className="notes-cell">
                  {entry.admin_notes ? (
                    <span title={entry.admin_notes} style={{ maxWidth: '150px', display: 'inline-block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {entry.admin_notes}
                    </span>
                  ) : (
                    <span className="text-muted">—</span>
                  )}
                </td>
                <td>
                  <div className="action-buttons" style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      className="btn btn-secondary"
                      style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}
                      onClick={() => handleEdit(entry)}
                      title="تعديل"
                    >
                      ✏️ تعديل
                    </button>
                    <button
                      className="btn btn-danger"
                      style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}
                      onClick={() => handleDelete(entry.id, entry.passport_number)}
                      disabled={deletingId === entry.id}
                      title="حذف"
                    >
                      {deletingId === entry.id ? '⏳' : '🗑️ حذف'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingEntry && (
        <EditEntryModal
          entry={editingEntry}
          onClose={() => setEditingEntry(null)}
          onSuccess={() => {
            setEditingEntry(null);
            onRefresh();
          }}
        />
      )}
    </>
  );
};

export default PassportTable;