import { useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import StatusResult from './StatusResult';
import './PassportCheck.css';

const PassportCheck = () => {
  const [passportNumber, setPassportNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const validatePassportNumber = (number) => {
    const trimmed = number.trim().toUpperCase();
    if (!trimmed) return { valid: false, error: 'الرجاء إدخال رقم الجواز' };
    if (trimmed.length < 3 || trimmed.length > 20) return { valid: false, error: 'رقم الجواز غير صحيح' };
    const validPattern = /^[A-Z0-9\s\-]+$/;
    if (!validPattern.test(trimmed)) return { valid: false, error: 'أحرف غير صالحة' };
    return { valid: true, sanitized: trimmed };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    setIsExpanded(true); // Open the result drawer

    const validation = validatePassportNumber(passportNumber);
    if (!validation.valid) {
      setError(validation.error);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `/api/check-visa-status?passport_number=${encodeURIComponent(validation.sanitized)}`
      );
      const data = await response.json();

      if (!response.ok) {
        if (response.status === 404) {
          setResult({ found: false, message: data.message || 'لم يتم العثور على الجواز' });
        } else {
          setError(data.error || 'خطأ في الاتصال');
        }
      } else {
        setResult({
          found: true,
          ...data
        });
      }
    } catch (err) {
      setError('تعذر الاتصال بالخادم');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsExpanded(false);
    setResult(null);
    setError(null);
    setPassportNumber('');
  };

  return (
    <section className="passport-utility-bar">
      <div className="container">
        
        {/* The Floating Bar */}
        <div className={`utility-glass-bar ${isExpanded ? 'expanded-mode' : ''}`}>
          
          <div className="bar-header">
            <span className="bar-label">استعلام عن تأشيرة</span>
            {isExpanded && (
              <button onClick={handleClose} className="close-btn-icon">
                <FiX />
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="bar-search-form">
            <div className="input-wrapper">
              <input
                type="text"
                className="bar-input"
                placeholder="رقم جواز السفر"
                value={passportNumber}
                onChange={(e) => setPassportNumber(e.target.value)}
                disabled={loading}
              />
              <button type="submit" className="bar-submit-btn" disabled={loading}>
                {loading ? <span className="mini-spinner"></span> : <FiSearch />}
              </button>
            </div>
          </form>

          {/* Error Toast */}
          {error && <div className="bar-error-toast">{error}</div>}

        </div>

        {/* The Result Drawer (Slides Down) */}
        <div className={`result-drawer ${isExpanded ? 'open' : ''}`}>
          {result && (
            <div className="drawer-content">
              <StatusResult result={result} onReset={handleClose} />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default PassportCheck;