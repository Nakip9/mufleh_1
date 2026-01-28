import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
import LazyImage from '../../common/LazyImage';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section className="section about-us-section">
            <div className="container">
                <div className="about-grid">
                    {/* Visual Side */}
                    <motion.div
                        className="about-visual"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="image-stack">
                            <div className="main-image-wrapper">
                                <LazyImage src="/hero-bg.jpg" alt="About Al Muflehi" className="main-image" />
                            </div>
                            <div className="experience-badge glass">
                                <span className="years">15+</span>
                                <span className="text">عاماً من<br />التميز</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="section-tag">من نحن</span>
                        <h2 className="section-title">
                            نصنع ذكريات <span className="text-gradient">لا تُنسى</span>
                        </h2>
                        <p className="about-description">
                            في ابن المفلحي، لا نقدم مجرد رحلات، بل نصمم تجارب حياة. نحن نؤمن بأن السفر هو أكثر من مجرد انتقال من مكان لآخر؛ إنه اكتشاف للذات وللعالم من حولنا.
                        </p>

                        <div className="features-list">
                            <div className="feature-item">
                                <FiCheckCircle className="icon" />
                                <div>
                                    <h4>خدمة شخصية</h4>
                                    <p>نهتم بأدق التفاصيل لتناسب رغباتك.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <FiCheckCircle className="icon" />
                                <div>
                                    <h4>وجهات حصرية</h4>
                                    <p>نأخذك إلى أماكن لا يعرفها الجميع.</p>
                                </div>
                            </div>
                        </div>

                        <Link to="/contact" className="btn btn-primary btn-lg">
                            تواصل معنا <FiArrowLeft />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
