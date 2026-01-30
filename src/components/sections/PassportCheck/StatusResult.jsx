import { FiCheckCircle, FiClock, FiAlertCircle, FiUser, FiFileText, FiRefreshCw } from 'react-icons/fi';
import './PassportCheck.css';

const StatusResult = ({ result, onReset }) => {
  if (!result) return null;

  // Configuration for different statuses
  const getStatusConfig = (status) => {
    const configs = {
      ready: {
        label: 'جاهز للاستلام',
        icon: <FiCheckCircle />,
        theme: 'success', // green
        message: 'جواز السفر جاهز، يمكنك استلامه الآن.',
        progress: 100
      },
      in_embassy: {
        label: 'في السفارة',
        icon: <FiClock />,
        theme: 'warning', // amber
        message: 'الجواز حالياً قيد المعالجة في السفارة.',
        progress: 66
      },
      pending: {
        label: 'تم الاستلام',
        icon: <FiFileText />,
        theme: 'info', // blue
        message: 'تم استلام الجواز وجاري مراجعة الطلب.',
        progress: 33
      },
      in_aden: {
        label: 'واصل عدن',
        icon: <FiFileText />,
        theme: 'purple', // blue
        message: 'الجواز واصل عدن وجاري مراجعة الطلب.',
        progress: 75
      },
    };
    return configs[status] || configs.pending;
  };

  if (!result.found) {
    return (
      <div className="status-result-container not-found">
        <div className="result-icon-box error">
          <FiAlertCircle />
        </div>
        <h3>لم يتم العثور على الجواز</h3>
        <p>{result.message || 'يرجى التحقق من الرقم والمحاولة مرة أخرى'}</p>
        <button onClick={onReset} className="btn-result-action">
          <FiRefreshCw /> محاولة جديدة
        </button>
      </div>
    );
  }

  const config = getStatusConfig(result.status);
  const fullName = [result.first_name, result.last_name].filter(Boolean).join(' ');

  return (
    <div className={`status-result-container ${config.theme}`}>
      
      {/* 1. Header: Status Icon & Title */}
      <div className="result-header">
        <div className="result-icon-box">
          {config.icon}
        </div>
        <h2 className="result-title">{config.label}</h2>
        <p className="result-message">{config.message}</p>
      </div>

      {/* 2. Progress Bar */}
      <div className="result-progress-track">
        <div className="progress-fill" style={{ width: `${config.progress}%` }}></div>
      </div>

      {/* 3. Details Grid (Ticket Style) */}
      <div className="result-details-grid">
        <div className="detail-item">
          <span className="detail-label"><FiUser /> الاسم</span>
          <span className="detail-value">{fullName || '---'}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label"><FiFileText /> رقم الجواز</span>
          <span className="detail-value mono">{result.passport_number}</span>
        </div>
        {result.visa_type && (
          <div className="detail-item full-width">
            <span className="detail-label">نوع التأشيرة</span>
            <span className="detail-value">{result.visa_type}</span>
          </div>
        )}
      </div>

      {/* 4. Admin Notes (if any) */}
      {result.admin_notes && (
        <div className="admin-notes-box">
          <strong>ملاحظة:</strong> {result.admin_notes}
        </div>
      )}

      {/* 5. Action */}
      <button onClick={onReset} className="btn-result-action">
        <FiRefreshCw /> استعلام جديد
      </button>

    </div>
  );
};

export default StatusResult;
