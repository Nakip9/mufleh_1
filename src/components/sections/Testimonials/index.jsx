import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteRight, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { useContent } from '../../../context/ContentContext';
import './Testimonials.css';

const Testimonials = () => {
    const { content } = useContent();
    
    // Safety Fallback Data
    const fallbackTestimonials = [
        { name: "أحمد العولقي", text: "خدمة ممتازة وسرعة في استخراج التأشيرات. شكراً لفريق المفلحي على الاحترافية.", location: "عدن", rating: 5 },
        { name: "سارة محمد", text: "أفضل وكالة سفر تعاملت معها، برامج العمرة لديهم منظمة جداً والأسعار منافسة.", location: "صنعاء", rating: 5 },
        { name: "خالد سعيد", text: "التزام بالمواعيد ومصداقية تامة. أنصح الجميع بالتعامل معهم في حجوزات الطيران.", location: "الرياض", rating: 5 }
    ];

    const testimonials = content && content.testimonials && content.testimonials.length > 0 
        ? content.testimonials 
        : fallbackTestimonials;

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-advance
    useEffect(() => {
        if (!testimonials || testimonials.length <= 1) return;
        const timer = setInterval(() => {
            handleNext();
        }, 6000); // Slower auto-advance for better reading
        return () => clearInterval(timer);
    }, [currentIndex, testimonials?.length]);

    if (!testimonials || testimonials.length === 0) {
        return null; 
    }

    const currentTestimonial = testimonials[currentIndex] || testimonials[0];

    return (
        <section className="testimonials-luxury">
            <div className="container">
                <div className="header-center">
                    <span className="sub-tag">آراء عملائنا</span>
                    <h2>قصص <span className="text-gradient">نجاح</span> حقيقية</h2>
                </div>

                <div className="testimonials-slider-wrapper">
                    <div className="glass-card-stage">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="testimonial-luxury-card"
                            >
                                <div className="quote-watermark"><FaQuoteRight /></div>
                                
                                <div className="user-avatar-area">
                                    <div className="avatar-circle">
                                        {currentTestimonial.name ? currentTestimonial.name.charAt(0) : "U"}
                                    </div>
                                    <div className="stars-row">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="star-gold" />
                                        ))}
                                    </div>
                                </div>

                                <p className="review-story">
                                    "{currentTestimonial.text}"
                                </p>

                                <div className="reviewer-meta">
                                    <h4>{currentTestimonial.name}</h4>
                                    <span>{currentTestimonial.location}</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="slider-controls">
                        <button className="nav-btn" onClick={handlePrev} aria-label="Previous testimonial">
                            <FaChevronRight /> {/* RTL Arrow direction */}
                        </button>
                        
                        <div className="slider-indicators">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                ></button>
                            ))}
                        </div>

                        <button className="nav-btn" onClick={handleNext} aria-label="Next testimonial">
                            <FaChevronLeft /> {/* RTL Arrow direction */}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;