import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero/index.jsx';
import HomeServices from '../components/sections/HomeServices/index.jsx';
import FeaturedDestinations from '../components/sections/FeaturedDestinations/index.jsx';
import './Home.css'; 

const Home = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="home-page-container">
      <Hero />
      <HomeServices />
      <FeaturedDestinations />
      <section style={{ padding: '4rem 0', textAlign: 'center', background: 'var(--primary-light)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>هل أنت جاهز لرحلتك القادمة؟</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>فريقنا بانتظارك لتلبية كافة طلباتك واستفساراتك.</p>
          <a href="/contact" className="btn btn-primary">تواصل معنا الآن</a>
        </div>
      </section>
    </main>
  );
};
export default Home;
