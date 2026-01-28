import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { useContent } from '../context/ContentContext';
import './Contact.css';

const Contact = () => {
  const { content } = useContent();
  const { contact_info } = content;

  return (
    <div className="contact-page-azure">
      <div className="contact-header">
        <h1>تواصل معنا</h1>
        <p>نحن هنا للإجابة على جميع استفساراتك.</p>
      </div>
      <div className="container">
        <div className="contact-card-wrapper">
          {/* Info Side */}
          <div className="contact-info-side">
            <h3>معلومات الاتصال</h3>
            <p className="info-desc">يمكنك زيارة مقرنا أو الاتصال بنا مباشرة للحصول على استشارة فورية.</p>
            <div className="info-item"><FiPhone /> <span>{contact_info.phone}</span></div>
            <div className="info-item"><FiMail /> <span>{contact_info.email}</span></div>
            <div className="info-item"><FiMapPin /> <span>{contact_info.address}</span></div>
          </div>
          {/* Form Side */}
          <div className="contact-form-side">
            <form>
              <div className="form-group">
                <label>الاسم الكامل</label>
                <input type="text" placeholder="أدخل اسمك" />
              </div>
              <div className="form-group">
                <label>البريد الإلكتروني</label>
                <input type="email" placeholder="example@email.com" />
              </div>
              <div className="form-group">
                <label>الرسالة</label>
                <textarea rows="4" placeholder="كيف يمكننا مساعدتك؟"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">إرسال الرسالة <FiSend /></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
