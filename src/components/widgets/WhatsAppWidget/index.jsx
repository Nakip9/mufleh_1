import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../../constants/company';
import './WhatsAppWidget.css';

const WhatsAppWidget = () => {
    const whatsappNumber = CONTACT_INFO.whatsapp.replace(/[^\d]/g, ''); // Remove all non-digits

    return (
        <motion.a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-widget"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <div className="whatsapp-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.654-.698c.93.509 1.842.771 2.803.771h.003c3.181 0 5.768-2.586 5.769-5.766.001-3.18-2.585-5.766-5.766-5.766zm0 10.16c-.863 0-1.705-.237-2.438-.669l-.174-.101-1.815.478.483-1.77-.11-.182c-.467-.775-.712-1.65-.712-2.551-.001-2.658 2.16-4.819 4.823-4.819 1.288.001 2.496.502 3.405 1.411.909.909 1.41 2.116 1.411 3.403.002 2.657-2.159 4.819-4.816 4.819zM14.65 12.53c-.146-.073-.861-.424-.994-.473-.134-.049-.231-.073-.328.073-.097.146-.379.473-.465.57-.087.097-.173.11-.318.037-.146-.073-.615-.227-1.173-.723-.433-.385-.726-.86-.811-1.006-.087-.146-.009-.225.064-.298.066-.066.146-.172.219-.258.073-.087.097-.146.146-.243.049-.097.024-.182-.012-.255-.036-.073-.328-.791-.449-1.084-.118-.285-.238-.246-.328-.251-.087-.005-.186-.005-.285-.005-.099 0-.26.037-.396.185-.136.149-.52.509-.52 1.241 0 .733.533 1.441.607 1.538.073.097 1.048 1.6 2.539 2.243.355.153.632.245.851.314.363.114.693.098.956.059.293-.044.861-.352.982-.692.121-.341.121-.633.085-.692-.036-.059-.134-.097-.28-.17z" />
                </svg>
            </div>
            <div className="whatsapp-pulse"></div>
            <span className="whatsapp-tooltip">تواصل معنا الآن</span>
        </motion.a>
    );
};

export default WhatsAppWidget;
