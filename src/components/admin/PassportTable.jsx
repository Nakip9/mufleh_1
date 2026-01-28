import { useState } from 'react';
import EditEntryModal from './EditEntryModal';
import './Admin.css';

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
      ready: { label: 'جاهز', className: 'badge-success' },
      in_embassy: { label: 'في السفارة', className: 'badge-warning' },
      pending: { label: 'قيد الانتظار', className: 'badge-info' },
      in_aden: { label: 'في عدن', className: 'badge-info' },
    };

    const badge = badges[status] || badges.pending;
    return <span className={`status-badge ${badge.className}`}>{badge.label}</span>;
  };

  if (entries.length === 0) {
    return (
      <div className="empty-state">
        <p>لم يتم العثور على إدخالات جواز السفر. أضف أول إدخال لك باستخدام النموذج أعلاه</p>
      </div>
    );
  }

  return (
    <>
      <div className="table-container">
        <table className="passport-table">
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
                  <strong>{entry.passport_number}</strong>
                </td>
                <td>
                  {[entry.first_name, entry.last_name].filter(Boolean).join(' ') || '—'}
                </td>
                <td>{entry.visa_type || '—'}</td>
                <td>{getStatusBadge(entry.status)}</td>
                <td>{new Date(entry.created_at).toLocaleDateString()}</td>
                <td>{new Date(entry.updated_at).toLocaleDateString()}</td>
                <td className="notes-cell">
                  {entry.admin_notes ? (
                    <span title={entry.admin_notes}>
                      {entry.admin_notes.length > 30
                        ? `${entry.admin_notes.substring(0, 30)}...`
                        : entry.admin_notes}
                    </span>
                  ) : (
                    <span className="text-muted">—</span>
                  )}
                </td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="btn-edit"
                      onClick={() => handleEdit(entry)}
                      title="تعديل"
                    >
                      ✏️ تعديل
                    </button>
                    <button
                      className="btn-delete"
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