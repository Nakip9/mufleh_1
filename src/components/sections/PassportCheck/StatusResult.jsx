import { FiCheckCircle, FiClock, FiAlertCircle, FiUser, FiFileText, FiRefreshCw, FiCopy, FiMapPin, FiTruck } from 'react-icons/fi';
import './PassportCheck.css';

const StatusResult = ({ result, onReset }) => {
  if (!result) return null;

  // Copy to clipboard function
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast here, but for now simple copy
  };

  if (!result.found) {
    return (
      <div className="status-result-card error-state">
        <div className="status-icon-wrapper error">
          <FiAlertCircle />
        </div>
        <div className="status-text-content">
          <h3>لم يتم العثور على الجواز</h3>
          <p>{result.message || 'تأكد من الرقم المدخل وحاول مجدداً'}</p>
        </div>
        <button onClick={onReset} className="btn-retry">
          <FiRefreshCw /> محاولة جديدة
        </button>
      </div>
    );
  }

  // Define steps for the timeline
  const steps = [
    { id: 'pending', label: 'تم الاستلام', icon: <FiFileText /> },
    { id: 'in_embassy', label: 'في السفارة', icon: <FiClock /> },
    { id: 'in_aden', label: 'واصل عدن', icon: <FiTruck /> },
    { id: 'ready', label: 'جاهز للاستلام', icon: <FiCheckCircle /> }
  ];

  // Determine current step index
  let currentStepIndex = 0;
  if (result.status === 'ready') currentStepIndex = 3;
  else if (result.status === 'in_aden') currentStepIndex = 2;
  else if (result.status === 'in_embassy') currentStepIndex = 1;
  else currentStepIndex = 0;

  const currentStatusConfig = steps[currentStepIndex];
  const fullName = [result.first_name, result.last_name].filter(Boolean).join(' ');

  // Context Messages
  const getStatusMessage = () => {
    switch (result.status) {
      case 'in_aden':
        return 'الجواز حالياً في عدن ولم يصل إلى صنعاء بعد.';
      case 'in_embassy':
        return 'الجواز حالياً في السفارة للمعالجة.';
      case 'ready':
        return 'الجواز جاهز للاستلام في مكتبنا.';
      default:
        return '';
    }
  };

  return (
    <div className="status-result-card success-state">
      
      {/* 1. Header with Big Status */}
      <div className={`result-hero-header step-${currentStepIndex}`}>
        <div className="pulse-ring"></div>
        <div className="hero-icon">
          {currentStatusConfig.icon}
        </div>
        <h2>{currentStatusConfig.label}</h2>
        <span className="last-update">آخر تحديث: {new Date(result.updated_at || Date.now()).toLocaleDateString('ar-EG')}</span>
        {getStatusMessage() && <p className="status-context-msg">{getStatusMessage()}</p>}
      </div>

      {/* 2. Timeline Stepper */}
      <div className="timeline-track">
        {steps.map((step, index) => (
          <div key={step.id} className={`timeline-step ${index <= currentStepIndex ? 'completed' : ''} ${index === currentStepIndex ? 'current' : ''}`}>
            <div className="step-dot">
              {index < currentStepIndex ? <FiCheckCircle /> : (index === currentStepIndex ? step.icon : <div className="dot-circle"></div>)}
            </div>
            <span className="step-label">{step.label}</span>
          </div>
        ))}
        {/* Progress Line */}
        <div className="timeline-line">
          <div className="line-fill" style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}></div>
        </div>
      </div>

      {/* 3. Passport Details Card */}
      <div className="details-card-modern">
        <div className="detail-row">
          <div className="detail-icon"><FiUser /></div>
          <div className="detail-content">
            <span className="lbl">صاحب الجواز</span>
            <span className="val">{fullName || '---'}</span>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-icon"><FiFileText /></div>
          <div className="detail-content">
            <span className="lbl">رقم الجواز</span>
            <span className="val mono">{result.passport_number}</span>
          </div>
          <button className="copy-btn" onClick={() => copyToClipboard(result.passport_number)} aria-label="نسخ">
            <FiCopy />
          </button>
        </div>

        {result.visa_type && (
          <div className="detail-row">
            <div className="detail-icon"><FiMapPin /></div>
            <div className="detail-content">
              <span className="lbl">نوع المعاملة</span>
              <span className="val">{result.visa_type}</span>
            </div>
          </div>
        )}

        {result.admin_notes && (
          <div className="detail-row notes-row">
            <div className="detail-icon"><FiFileText /></div>
            <div className="detail-content">
              <span className="lbl">ملاحظات إدارية</span>
              <p className="val notes-text">{result.admin_notes}</p>
            </div>
          </div>
        )}
      </div>

      {/* 4. Action Footer */}
      <div className="result-footer">
        {result.status === 'ready' && (
          <div className="pickup-alert">
            <p>📍 يرجى الحضور للمكتب لاستلام الجواز</p>
          </div>
        )}
        
        <button onClick={onReset} className="btn-new-search">
          <FiRefreshCw /> استعلام عن جواز آخر
        </button>
      </div>

    </div>
  );
};

export default StatusResult;
