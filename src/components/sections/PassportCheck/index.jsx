import { useState } from 'react';
import StatusResult from './StatusResult';
import './PassportCheck.css';

const PassportCheck = () => {
  const [passportNumber, setPassportNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Input validation function
  const validatePassportNumber = (number) => {
    const trimmed = number.trim().toUpperCase();

    // Check if empty
    if (!trimmed) {
      return { valid: false, error: 'الرجاء إدخال رقم الجواز' };
    }

    // Check length (typical passport numbers are 6-12 characters)
    if (trimmed.length < 3 || trimmed.length > 20) {
      return { valid: false, error: 'يجب أن يكون رقم الجواز بين 3 و 20 حرفاً' };
    }

    // Allow alphanumeric characters, hyphens, and spaces
    const validPattern = /^[A-Z0-9\s\-]+$/;
    if (!validPattern.test(trimmed)) {
      return { valid: false, error: 'رقم الجواز يحتوي على أحرف غير صالحة' };
    }

    return { valid: true, sanitized: trimmed };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset states
    setError(null);
    setResult(null);

    // Validate input
    const validation = validatePassportNumber(passportNumber);
    if (!validation.valid) {
      setError(validation.error);
      return;
    }

    setLoading(true);

    try {
      // Call Vercel API route with sanitized input
      const response = await fetch(
        `/api/check-visa-status?passport_number=${encodeURIComponent(validation.sanitized)}`
      );

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 404) {
          setResult({
            found: false,
            message: data.message || 'رقم الجواز غير موجود في نظامنا',
          });
        } else {
          setError(data.error || 'حدث خطأ. الرجاء المحاولة مرة أخرى.');
        }
      } else {
        setResult({
          found: true,
          passport_number: data.passport_number,
          status: data.status,
          updated_at: data.updated_at,
          admin_notes: data.admin_notes,
          first_name: data.first_name,
          last_name: data.last_name,
          visa_type: data.visa_type,
          passport_received_date: data.passport_received_date,
          embassy_submit_date: data.embassy_submit_date,
          expected_exit_date: data.expected_exit_date,
        });
      }
    } catch (err) {
      console.error('Error checking visa status:', err);
      setError('تعذر الاتصال بالخادم. الرجاء المحاولة لاحقاً.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setPassportNumber('');
    setResult(null);
    setError(null);
  };

  return (
    <section className="passport-check-section">
      <div className="container">
        <div className="passport-check-wrapper">
          <div className="passport-check-header">
            <h2 className="section-title">التحقق من حالة التأشيرة</h2>
            <p className="section-subtitle">
              أدخل رقم جواز سفرك للتحقق من حالة التأشيرة
            </p>
          </div>

          <div className="passport-check-card">
            <form onSubmit={handleSubmit} className="passport-check-form">
              <div className="form-group">
                <label htmlFor="passport-number" className="form-label">
                  رقم الجواز
                </label>
                <input
                  type="text"
                  id="passport-number"
                  className="form-input"
                  placeholder="أدخل رقم جواز سفرك"
                  value={passportNumber}
                  onChange={(e) => setPassportNumber(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>

              {error && (
                <div className="error-message" role="alert">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="btn-check"
                disabled={loading || !passportNumber.trim()}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    جاري التحقق...
                  </>
                ) : (
                  'استعلام'
                )}
              </button>
            </form>

            {result && (
              <StatusResult
                result={result}
                onReset={handleReset}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassportCheck;

