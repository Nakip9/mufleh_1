import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '../../../context/ContentContext';
import './Testimonials.css';

const Testimonials = () => {
    const { content } = useContent();
    const testimonials = content.testimonials || [];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="testimonials-section section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">ماذا يقول عملاؤنا</h2>
                    <p className="section-subtitle">نفخر بثقة عملائنا ونسعى دائماً لتقديم الأفضل</p>
                </div>

                <div className="testimonials-carousel">
                    <button className="carousel-btn prev" onClick={prevTestimonial}>→</button>

                    <div className="testimonial-card-wrapper">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="testimonial-card"
                            >
                                <div className="testimonial-content">
                                    <div className="stars">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={i < testimonials[currentIndex].rating ? "star filled" : "star"}>★</span>
                                        ))}
                                    </div>
                                    <p className="review-text">{testimonials[currentIndex].text}</p>
                                    <div className="reviewer-info">
                                        <h4 className="reviewer-name">{testimonials[currentIndex].name}</h4>
                                        <span className="reviewer-role">{testimonials[currentIndex].location}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button className="carousel-btn next" onClick={nextTestimonial}>←</button>
                </div>

                <div className="carousel-dots">
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
