import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    FiGlobe, 
    FiHome, 
    FiMap, 
    FiFileText, 
    FiTruck, 
    FiAnchor,
    FiChevronDown,
    FiCheckCircle,
    FiAward
} from 'react-icons/fi';
import { 
    TbPlane, 
    TbBuilding, 
    TbMap, 
    TbBus, 
    TbShip, 
    TbLanguage, 
    TbBuildingMosque 
} from 'react-icons/tb';
import './ExpandableServiceCard.css';

// Icon mapping - supporting both react-icons/fi and react-icons/tb
const iconMap = {
    // Tabler icons
    TbPlane: TbPlane,
    TbBuilding: TbBuilding,
    TbMap: TbMap,
    TbBus: TbBus,
    TbShip: TbShip,
    TbLanguage: TbLanguage,
    TbBuildingMosque: TbBuildingMosque,
    // Feather icons (legacy support)
    FiPlane: TbPlane,
    FiHome: FiHome,
    FiMap: FiMap,
    FiFileText: FiFileText,
    FiTruck: FiTruck,       
    FiAnchor: FiAnchor,
    FiGlobe: FiGlobe,
    FiAward: FiAward,
};

const ExpandableServiceCard = ({ 
    title, 
    tagline,
    icon, 
    detailedDescription,
    features = [], 
    isExpanded, 
    onToggle, 
    delay = 0 
}) => {
    // Safely get icon component with fallback
    const IconComponent = (icon && iconMap[icon]) ? iconMap[icon] : FiGlobe;

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle();
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            layout
            className={`expandable-service-card ${isExpanded ? 'expanded' : ''}`}
        >
            <div className="expandable-card-accent"></div>

            {/* Card Header - Always Visible */}
            <div 
                className="expandable-card-header"
                onClick={onToggle}
                onKeyDown={handleKeyDown}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                aria-label={`${title} - ${isExpanded ? 'إغلاق' : 'فتح'} التفاصيل`}
            >
                <div className="expandable-card-header-content">
                    <div className="expandable-icon-wrapper">
                        <IconComponent className="expandable-icon" />
                    </div>
                    <div className="expandable-card-title-section">
                        <h3 className="expandable-card-title">{title}</h3>
                        <p className="expandable-card-tagline">{tagline}</p>
                    </div>
                </div>
                <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="expandable-chevron"
                >
                    <FiChevronDown />
                </motion.div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="expandable-card-content"
                    >
                        <div className="expandable-card-body">
                            <p className="expandable-card-description">
                                {detailedDescription}
                            </p>

                            <ul className="expandable-card-features">
                                {features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="expandable-feature-item"
                                    >
                                        <FiCheckCircle className="expandable-check-icon" />
                                        <span>{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <Link 
                                to="/contact" 
                                className="expandable-card-cta"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <span>تعرف على المزيد</span>
                                <span className="expandable-arrow-icon">←</span>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default memo(ExpandableServiceCard);

