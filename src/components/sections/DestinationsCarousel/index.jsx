import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMapPin, FiClock, FiX, FiCheckCircle, FiStar, FiArrowLeft } from 'react-icons/fi';
import { allDestinations } from '../../../data';
import LazyImage from '../../common/LazyImage';
import './DestinationsCarousel.css';

const DestinationsCarousel = () => {
    const [selectedDestination, setSelectedDestination] = useState(null);

    // Select first 5 destinations
    const displayDestinations = allDestinations.slice(0, 5);

    const handleCardClick = (dest) => {
        setSelectedDestination(dest);
    };

    const closeModal = () => {
        setSelectedDestination(null);
    };

    return (
        <section className="section destinations-grid-section">
            <div className="container">
                <div className="section-header text-center mb-xl">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="section-tag"
                    >
                        وجهاتنا
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        وجهات سياحية <span className="text-gradient">مختارة</span>
                    </motion.h2>
                </div>
            </div>

            <div className="container-fluid p-0">
                <div className="destinations-static-grid">
                    {displayDestinations.map((dest, index) => (
                        <motion.div
                            key={index}
                            className="destination-grid-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => handleCardClick(dest)}
                        >
                            <div className="grid-image-wrapper">
                                <LazyImage src={dest.image} alt={dest.name} className="grid-image" />
                                <div className="grid-overlay"></div>
                            </div>

                            <div className="grid-content">
                                <div className="grid-header">
                                    <h3>{dest.name}</h3>
                                    <div className="grid-location">
                                        <FiMapPin />
                                        <span>{dest.country}</span>
                                    </div>
                                </div>

                                <div className="grid-footer">
                                    <span className="grid-cta">
                                        استكشف
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Quick View Modal - Text Focused Redesign */}
            <AnimatePresence>
                {selectedDestination && (
                    <div className="destination-modal-overlay" onClick={closeModal}>
                        <motion.div
                            className="destination-modal-content text-focused glass"
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close-btn" onClick={closeModal}>
                                <FiX />
                            </button>

                            <div className="modal-text-layout">
                                {/* Header */}
                                <div className="modal-text-header">
                                    <span className="modal-country-tag">{selectedDestination.country}</span>
                                    <h2>{selectedDestination.name}</h2>
                                </div>

                                {/* Review Section */}
                                <div className="modal-section review-section">
                                    <h3><FiStar className="section-icon" /> نبذة عن الوجهة</h3>
                                    <p className="modal-description">
                                        {selectedDestination.description}
                                    </p>
                                </div>

                                <div className="modal-columns">
                                    {/* Services Section */}
                                    <div className="modal-section services-section">
                                        <h3><FiCheckCircle className="section-icon" /> خدماتنا المتاحة</h3>
                                        <ul className="info-list">
                                            {selectedDestination.offeredServices && selectedDestination.offeredServices.map((service, idx) => (
                                                <li key={idx}>{service}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Places Section */}
                                    <div className="modal-section places-section">
                                        <h3><FiMapPin className="section-icon" /> أماكن ننصح بزيارتها</h3>
                                        <ul className="info-list">
                                            {selectedDestination.placesToVisit && selectedDestination.placesToVisit.map((place, idx) => (
                                                <li key={idx}>{place}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Footer CTA */}
                                <div className="modal-text-footer">
                                    <Link to="/contact" className="btn btn-primary btn-lg w-full">
                                        احجز رحلتك إلى {selectedDestination.name} الآن <FiArrowLeft />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default DestinationsCarousel;
