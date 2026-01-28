import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Card.css';

const ServiceCard = ({ title, description, icon, features = [], link, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="service-card"
        >
            <div className="service-card-accent"></div>

            <div className="service-icon-wrapper">
                <span className="service-icon">{icon}</span>
            </div>

            <h3 className="service-title">{title}</h3>
            <p className="service-description">{description}</p>

            <ul className="service-features">
                {features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="feature-item">
                        <span className="check-icon">✓</span>
                        {feature}
                    </li>
                ))}
            </ul>

            <Link to={link || '/services'} className="service-link">
                <span>المزيد من التفاصيل</span>
                <span className="arrow-icon">←</span>
            </Link>
        </motion.div>
    );
};

export default ServiceCard;
