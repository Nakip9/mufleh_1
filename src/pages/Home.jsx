import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMessageCircle, FiPhoneCall } from 'react-icons/fi';
import Hero from '../components/sections/Hero/index.jsx';
import PassportCheck from '../components/sections/PassportCheck/index.jsx';
import HomeServices from '../components/sections/HomeServices/index.jsx';
import FeaturedDestinations from '../components/sections/FeaturedDestinations/index.jsx';
import Testimonials from '../components/sections/Testimonials/index.jsx';
import './Home.css'; 

const Home = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="home-page-container">
      
      {/* Hero Section */}
      <Hero />

      {/* Utility Section: Passport Check */}
      <section className="utility-section">
        <PassportCheck />
      </section>

      {/* Services Section */}
      <HomeServices />

      {/* Destinations Section */}
      <FeaturedDestinations />

      {/* Social Proof */}
      <Testimonials />

      {/* Final CTA Section */}
      <section className="home-final-cta">
        <div className="container">
          <div className="cta-card">
            <h2>هل أنت جاهز لرحلتك القادمة؟</h2>
            <p>فريقنا بانتظارك لتلبية كافة طلباتك واستفساراتك. ابدأ رحلتك معنا اليوم.</p>
            <Link to="/contact" className="btn btn-primary cta-btn">
              تواصل معنا الآن
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Action Bar */}
      <div className="mobile-sticky-bar">
        <a href="https://wa.me/780104667" target="_blank" rel="noopener noreferrer" className="sticky-btn whatsapp">
          <FiMessageCircle /> <span>واتساب</span>
        </a>
        <a href="tel:02352646" className="sticky-btn call">
          <FiPhoneCall /> <span>اتصال</span>
        </a>
      </div>

    </main>
  );
};
export default Home;