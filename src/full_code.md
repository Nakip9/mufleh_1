# Table of Contents
- App.css
- new_o.md
- main.jsx
- index.css
- App.jsx
- components/index.js
- pages/About.jsx
- pages/Destinations.jsx
- pages/Admin.css
- pages/Admin.jsx
- pages/Contact.jsx
- pages/Home.jsx
- pages/Home.css
- pages/Services.jsx
- pages/Contact.css
- pages/About.css
- pages/Services.css
- pages/Destinations.css
- data/destinations.js
- data/faq.js
- data/testimonials.js
- data/index.js
- data/services.js
- constants/routes.js
- constants/company.js
- constants/index.js
- components/layout/index.js
- components/common/Analytics.jsx
- components/common/ErrorBoundary.jsx
- components/common/index.js
- components/common/LazyImage.jsx
- components/admin/Admin.css
- components/admin/AddEntryForm.jsx
- components/admin/EditEntryModal.jsx
- components/admin/PassportTable.jsx
- components/sections/index.js
- components/widgets/index.js
- components/layout/Footer/Footer.css
- components/layout/Footer/index.jsx
- components/layout/Navbar/index.jsx
- components/layout/Navbar/Navbar.css
- components/common/ExpandableServiceCard/ExpandableServiceCard.css
- components/common/ExpandableServiceCard/index.jsx
- components/common/Card/Card.css
- components/common/Card/index.jsx
- components/sections/AboutUs/AboutUs.css
- components/sections/AboutUs/index.jsx
- components/sections/Testimonials/index.jsx
- components/sections/Testimonials/Testimonials.css
- components/sections/DestinationsCarousel/DestinationsCarousel.css
- components/sections/DestinationsCarousel/index.jsx
- components/sections/PassportCheck/index.jsx
- components/sections/PassportCheck/PassportCheck.css
- components/sections/PassportCheck/StatusResult.jsx
- components/sections/HomeServices/index.jsx
- components/sections/HomeServices/HomeServices.css
- components/sections/Hero/Hero.css
- components/sections/Hero/index.jsx
- components/widgets/WhatsAppWidget/index.jsx
- components/widgets/WhatsAppWidget/WhatsAppWidget.css

## File: App.css

- Extension: .css
- Language: unknown
- Size: 1063 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```unknown
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: background-color var(--transition-base);
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Theme Toggle Button */
/* .theme-toggle {
  position: fixed;
  bottom: var(--spacing-xl);
  left: var(--spacing-xl);
  z-index: var(--z-fixed);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background: var(--gradient-primary);
  color: white;
  font-size: var(--font-2xl);
  cursor: pointer;
  box-shadow: var(--shadow-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-base);
}

.theme-toggle:hover {
  transform: scale(1.1) rotate(20deg);
  box-shadow: 0 8px 30px rgba(62, 146, 204, 0.4);
}

.theme-toggle:active {
  transform: scale(0.95);
}

@media (max-width: 768px) {
  .theme-toggle {
    bottom: var(--spacing-lg);
    left: var(--spacing-lg);
    width: 48px;
    height: 48px;
    font-size: var(--font-xl);
  }
} */
```

## File: new_o.md

- Extension: .md
- Language: markdown
- Size: 342290 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```markdown
# Table of Contents
- App.css
- main.jsx
- index.css
- App.jsx
- components/index.js
- pages/About.jsx
- pages/Destinations.jsx
- pages/Admin.css
- pages/Admin.jsx
- pages/Contact.jsx
- pages/Home.jsx
- pages/Home.css
- pages/Services.jsx
- pages/Contact.css
- pages/About.css
- pages/Services.css
- pages/Destinations.css
- data/destinations.js
- data/faq.js
- data/testimonials.js
- data/index.js
- data/services.js
- constants/routes.js
- constants/company.js
- constants/index.js
- components/layout/index.js
- components/common/Analytics.jsx
- components/common/ErrorBoundary.jsx
- components/common/index.js
- components/common/LazyImage.jsx
- components/admin/Admin.css
- components/admin/AddEntryForm.jsx
- components/admin/EditEntryModal.jsx
- components/admin/PassportTable.jsx
- components/sections/index.js
- components/widgets/index.js
- components/layout/Footer/Footer.css
- components/layout/Footer/index.jsx
- components/layout/Navbar/index.jsx
- components/layout/Navbar/Navbar.css
- components/common/ExpandableServiceCard/ExpandableServiceCard.css
- components/common/ExpandableServiceCard/index.jsx
- components/common/Card/Card.css
- components/common/Card/index.jsx
- components/sections/AboutUs/AboutUs.css
- components/sections/AboutUs/index.jsx
- components/sections/Testimonials/index.jsx
- components/sections/Testimonials/Testimonials.css
- components/sections/DestinationsCarousel/DestinationsCarousel.css
- components/sections/DestinationsCarousel/index.jsx
- components/sections/PassportCheck/index.jsx
- components/sections/PassportCheck/PassportCheck.css
- components/sections/PassportCheck/StatusResult.jsx
- components/sections/HomeServices/index.jsx
- components/sections/HomeServices/HomeServices.css
- components/sections/Hero/Hero.css
- components/sections/Hero/index.jsx
- components/widgets/WhatsAppWidget/index.jsx
- components/widgets/WhatsAppWidget/WhatsAppWidget.css

## File: App.css

- Extension: .css
- Language: unknown
- Size: 1063 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```unknown
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: background-color var(--transition-base);
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Theme Toggle Button */
/* .theme-toggle {
  position: fixed;
  bottom: var(--spacing-xl);
  left: var(--spacing-xl);
  z-index: var(--z-fixed);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background: var(--gradient-primary);
  color: white;
  font-size: var(--font-2xl);
  cursor: pointer;
  box-shadow: var(--shadow-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-base);
}

.theme-toggle:hover {
  transform: scale(1.1) rotate(20deg);
  box-shadow: 0 8px 30px rgba(62, 146, 204, 0.4);
}

.theme-toggle:active {
  transform: scale(0.95);
}

@media (max-width: 768px) {
  .theme-toggle {
    bottom: var(--spacing-lg);
    left: var(--spacing-lg);
    width: 48px;
    height: 48px;
    font-size: var(--font-xl);
  }
} */
```

## File: main.jsx

- Extension: .jsx
- Language: javascript
- Size: 744 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Register Service Worker for offline support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        if (import.meta.env.DEV) {
          console.log('SW registered: ', registration);
        }
      })
      .catch((registrationError) => {
        if (import.meta.env.DEV) {
          console.error('SW registration failed: ', registrationError);
        }
      });
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

## File: index.css

- Extension: .css
- Language: unknown
- Size: 8638 bytes
- Created: 2025-12-28 00:00:01
- Modified: 2025-12-28 00:00:01

### Code

```unknown
/* ========================================
   النجم الأزرق - Modern Design System 
   Brand Identity: Deep Cerulean (#004B87)
======================================== */

/* ============ CSS Variables ============ */
:root {
  /* Brand Primary Color (Extracted from your image) */
  --primary-blue: #004B87;
  /* Deep Cerulean - Main Identity */
  --primary-dark: #003661;
  /* Darker Navy - Hover/Active states */
  --primary-light: #1E6EB0;
  /* Lighter Blue - Subtle accents */

  /* Tropical Sunset Palette (Balanced for deep blue) */
  --accent-amber: #F59E0B;
  /* Sunset Orange - Highlights/Buttons */
  --accent-coral: #FB7185;
  /* Soft Vibrant Coral - Special Accents */
  --secondary-teal: #0D9488;
  /* Dark Teal - Success/Nature */

  /* Neutral Colors (Modern & Clean) */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8FAFC;
  /* Slate 50 */
  --bg-tertiary: #F1F5F9;
  /* Slate 100 */
  --text-primary: #0F172A;
  /* Slate 900 - High Contrast */
  --text-secondary: #475569;
  /* Slate 600 - Readable Body */
  --text-muted: #94A3B8;
  /* Slate 400 */

  /* Modern Glassmorphism (Tinted with brand blue) */
  --glass-bg: rgba(255, 255, 255, 0.75);
  --glass-border: rgba(255, 255, 255, 0.5);
  --glass-shadow: 0 8px 32px 0 rgba(0, 75, 135, 0.12);
  --glass-blur: blur(12px);

  /* Gradients */
  --gradient-ocean: linear-gradient(135deg, #004B87 0%, #0E7490 100%);
  --gradient-sunset: linear-gradient(135deg, #F59E0B 0%, #EA580C 100%);
  --gradient-tropical: linear-gradient(135deg, #004B87 0%, #0D9488 100%);
  --gradient-overlay: linear-gradient(180deg, rgba(0, 75, 135, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%);

  /* Shadows (Tinted for a high-end feel) */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 75, 135, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 75, 135, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 75, 135, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-glow: 0 0 20px rgba(0, 75, 135, 0.25);

  /* Spacing (Mobile-First) */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 5rem;

  /* Border Radius (More Rounded) */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-bounce: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  /* Typography Scale */
  --font-xs: clamp(0.75rem, 2vw, 0.875rem);
  --font-sm: clamp(0.875rem, 2.5vw, 1rem);
  --font-base: clamp(1rem, 3vw, 1.125rem);
  --font-lg: clamp(1.125rem, 3.5vw, 1.25rem);
  --font-xl: clamp(1.25rem, 4vw, 1.5rem);
  --font-2xl: clamp(1.5rem, 5vw, 2rem);
  --font-3xl: clamp(2rem, 6vw, 3rem);
  --font-4xl: clamp(2.5rem, 8vw, 4.5rem);

  /* Font Families */
  --font-heading: 'Tajawal', sans-serif;
  --font-body: 'IBM Plex Sans Arabic', sans-serif;

  /* Z-index Scale */
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
}

/* ============ Global Reset ============ */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-body);
  font-size: var(--font-base);
  line-height: 1.6;
  color: var(--text-primary);
  background-color: var(--bg-primary);
  direction: rtl;
  overflow-x: hidden;
  min-height: 100vh;
}

/* ============ Typography ============ */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-heading);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

h1 {
  font-size: var(--font-4xl);
}

h2 {
  font-size: var(--font-3xl);
}

h3 {
  font-size: var(--font-2xl);
}

h4 {
  font-size: var(--font-xl);
}

h5 {
  font-size: var(--font-lg);
}

h6 {
  font-size: var(--font-base);
}

p {
  margin-bottom: var(--spacing-sm);
  color: var(--text-secondary);
}

a {
  color: var(--primary-blue);
  text-decoration: none;
  transition: color var(--transition-fast);
  font-weight: 500;
}

a:hover {
  color: var(--primary-light);
}

/* ============ Layout Utilities ============ */
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--spacing-lg);
  }
}

.section {
  padding: var(--spacing-2xl) 0;
  position: relative;
  overflow: hidden;
}

/* ============ Button Styles ============ */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  padding: 16px 32px;
  min-height: 52px;
  font-family: var(--font-heading);
  font-size: var(--font-base);
  font-weight: 700;
  text-align: center;
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-base);
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.btn-primary {
  background: var(--primary-blue);
  color: white;
  box-shadow: var(--shadow-lg);
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-3px);
  box-shadow: var(--shadow-glow);
}

.btn-accent {
  background: var(--gradient-sunset);
  color: white;
  box-shadow: var(--shadow-lg);
}

.btn-accent:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(245, 158, 11, 0.3);
}

.btn-outline {
  background: transparent;
  color: var(--primary-blue);
  border: 2px solid var(--primary-blue);
}

.btn-outline:hover {
  background: var(--primary-blue);
  color: white;
  transform: translateY(-3px);
}

.btn:active {
  transform: translateY(0) scale(0.98);
}

/* ============ Card Styles ============ */
.card {
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
  border: 1px solid rgba(0, 75, 135, 0.05);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.card-glass {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}

/* ============ Utilities ============ */
.text-gradient {
  background: var(--gradient-ocean);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.bg-gradient {
  background: var(--gradient-ocean);
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.grid {
  display: grid;
  gap: var(--spacing-lg);
}

/* ============ Animations ============ */
@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }
}

@keyframes pulse-glow {

  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(0, 75, 135, 0.4);
  }

  70% {
    box-shadow: 0 0 0 20px rgba(0, 75, 135, 0);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-pulse {
  animation: pulse-glow 2s infinite;
}

/* ============ Form Styles ============ */
.form-input,
.form-textarea {
  width: 100%;
  min-height: 52px;
  padding: 14px 20px;
  font-family: var(--font-body);
  font-size: var(--font-base);
  color: var(--text-primary);
  background-color: var(--bg-secondary);
  border: 2px solid transparent;
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary-blue);
  background-color: var(--bg-primary);
  box-shadow: 0 0 0 4px rgba(0, 75, 135, 0.1);
}

/* ============ Mobile Optimizations ============ */
@media (max-width: 768px) {
  .section {
    padding: var(--spacing-xl) 0;
  }

  h1 {
    line-height: 1.1;
  }

  .container {
    padding: 0 var(--spacing-sm);
  }
}
```

## File: App.jsx

- Extension: .jsx
- Language: javascript
- Size: 2690 bytes
- Created: 2025-12-27 23:56:17
- Modified: 2025-12-27 23:56:17

### Code

```javascript
import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/layout';
import ErrorBoundary from './components/common/ErrorBoundary';
import Analytics from './components/common/Analytics';
import './App.css';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Destinations = lazy(() => import('./pages/Destinations'));
const Contact = lazy(() => import('./pages/Contact'));
const Admin = lazy(() => import('./pages/Admin'));

// Loading fallback component
const PageLoader = () => (
  <div className="page-loader" style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '60vh',
    flexDirection: 'column',
    gap: '20px'
  }}>
    <div className="spinner" style={{
      width: '40px',
      height: '40px',
      border: '3px solid rgba(8, 145, 178, 0.1)',
      borderTopColor: '#0891b2',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}></div>
    <style>{`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <ErrorBoundary>
      <Router>
        <Analytics />
        <div className="app" data-theme={theme}>
          <Navbar />

          {/* Theme Toggle Button */}
          {/* <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button> */}

          <main className="main-content">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;

```

## File: components/index.js

- Extension: .js
- Language: javascript
- Size: 147 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```javascript
// Master components barrel export
export * from './common';
export * from './layout';
export * from './sections';
export * from './widgets';

```

## File: pages/About.jsx

- Extension: .jsx
- Language: javascript
- Size: 15659 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-27 16:16:24

### Code

```javascript
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    FiArrowLeft,
    FiTarget,
    FiAward,
    FiUsers,
    FiTrendingUp,
    FiMapPin,
    FiSmile,
    FiCheckCircle
} from 'react-icons/fi';
import LazyImage from '../components/common/LazyImage';
import './About.css';

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    // Stagger animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const scrollToContent = () => {
        const storySection = document.querySelector('.story-section');
        if (storySection) {
            storySection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="about-modern" ref={containerRef}>
            {/* --- Section 1: Parallax Hero --- */}
            <header className="about-hero-modern">
                <motion.div style={{ y }} className="hero-bg-parallax">
                    <LazyImage 
                        src="/hero-bg.jpg" 
                        alt="خلفية النجم الأزرق" 
                        className="parallax-img" 
                    />
                    <div className="hero-overlay-gradient"></div>
                </motion.div>

                <div className="container hero-content-modern">
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="hero-text-wrapper"
                    >
                        <motion.span variants={itemVariants} className="hero-badge-glass">
                            منذ 2008
                        </motion.span>
                        <motion.h1 variants={itemVariants} className="hero-title-modern">
                            لسنا مجرد وكالة سفر، <br />
                            <span className="text-gradient">نحن رفقاء رحلتك.</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="hero-desc-modern">
                            في "النجم الأزرق"، نؤمن أن السفر ليس مجرد انتقال من مكان لآخر، بل هو فن صناعة الذكريات. 
                            نجمع بين الخبرة العريقة والرؤية العصرية لنقدم لك تجربة لا تُنسى.
                        </motion.p>
                    </motion.div>
                </div>
                
                {/* Scroll Indicator */}
                <motion.div 
                    className="scroll-mouse"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    onClick={scrollToContent}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="wheel"></div>
                </motion.div>
            </header>

            {/* --- Section 2: The Story (Image Collage) --- */}
            <section className="section story-section">
                <div className="container">
                    <div className="story-grid">
                        <motion.div 
                            className="story-content"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="section-label">قصتنا</span>
                            <h2 className="section-heading">
                                من مكتب صغير إلى <br/>
                                <span className="highlight-underline">نافذة على العالم</span>
                            </h2>
                            <p className="story-text">
                                بدأت حكايتنا بشغف بسيط: كيف يمكننا جعل السفر أسهل وأكثر متعة؟ 
                                انطلقنا من صنعاء برؤية واضحة، ورغم التحديات، استطعنا أن نبني جسراً من الثقة مع عملائنا.
                            </p>
                            <p className="story-text">
                                اليوم، وبعد مرور أكثر من 15 عاماً، نفخر بأننا لسنا مجرد مقدمي خدمة، بل مستشارين مؤتمنين 
                                لأحلام آلاف المسافرين، نفتح لهم أبواب العالم بمصداقية واحترافية.
                            </p>
                            
                            <div className="story-stats">
                                <div className="story-stat-item">
                                    <span className="stat-num">15+</span>
                                    <span className="stat-label">سنة خبرة</span>
                                </div>
                                <div className="story-stat-item">
                                    <span className="stat-num">50k+</span>
                                    <span className="stat-label">عميل سعيد</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="story-visuals"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="collage-wrapper">
                                <div className="collage-img-lg">
                                    <LazyImage src="/dubai.jpg" alt="سفر وسياحة" />
                                </div>
                                <div className="collage-img-sm glass-card">
                                    <LazyImage src="/london.jpeg" alt="وجهات عالمية" />
                                    <div className="collage-badge">
                                        <FiTrendingUp />
                                        <span>نمو مستمر</span>
                                    </div>
                                </div>
                                {/* Decorative elements */}
                                <div className="circle-decor"></div>
                                <div className="dots-decor"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Section 3: Values (Modern Bento Grid) --- */}
            <section className="section values-section-modern">
                <div className="container">
                    <div className="section-header-center mb-5">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="section-tag"
                        >
                            لماذا تختارنا؟
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="section-heading"
                        >
                            قيمٌ نلتزم بها في كل رحلة
                        </motion.h2>
                    </div>

                    <div className="bento-grid-modern">
                        {/* 1. Vision Card (Featured) */}
                        <motion.div 
                            className="bento-item vision-card"
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-overlay"></div>
                            <div className="bento-content relative z-10">
                                <div className="icon-wrapper glass-icon mb-4">
                                    <FiTarget />
                                </div>
                                <h3>رؤيتنا للمستقبل</h3>
                                <p>أن نكون الخيار الأول للمسافر العربي، عبر تقديم حلول سفر مبتكرة تجمع بين الفخامة، السهولة، والسعر المناسب.</p>
                            </div>
                            <div className="bg-pattern"></div>
                        </motion.div>

                        {/* 2. Trust Card (Vertical) */}
                        <motion.div 
                            className="bento-item trust-card"
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="trust-badge">
                                <FiCheckCircle /> 100% شفافية
                            </div>
                            <div className="bento-content mt-auto">
                                <div className="icon-wrapper mb-3 text-amber-500">
                                    <FiAward size={32} />
                                </div>
                                <h3>المصداقية أولاً</h3>
                                <p>لا رسوم خفية، ولا وعود زائفة. الشفافية هي عملتنا، وما نتفق عليه هو ما تحصل عليه بالضبط.</p>
                            </div>
                        </motion.div>

                        {/* 3. Team Card */}
                        <motion.div 
                            className="bento-item team-card"
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="icon-wrapper text-blue-600">
                                    <FiUsers />
                                </div>
                                <span className="tiny-tag">دعم 24/7</span>
                            </div>
                            <h3>فريق محترف</h3>
                            <p>مستشارون ذوو خبرة عالية جاهزون لخدمتك في أي وقت.</p>
                        </motion.div>

                        {/* 4. Global Coverage */}
                        <motion.div 
                            className="bento-item map-card"
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="bento-content">
                                <div className="icon-wrapper text-teal-600 mb-3">
                                    <FiMapPin />
                                </div>
                                <h3>تغطية عالمية</h3>
                                <p>شبكة واسعة من الشركاء في أكثر من 50 دولة.</p>
                            </div>
                            <div className="map-dots-decoration"></div>
                        </motion.div>

                        {/* 5. Comfort/Service */}
                        <motion.div 
                            className="bento-item service-card"
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="bento-content">
                                <div className="icon-wrapper text-rose-500 mb-3">
                                    <FiSmile />
                                </div>
                                <h3>راحة بالك</h3>
                                <p>نهتم بأدق التفاصيل الصغيرة لتستمتع برحلتك دون قلق.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Section 4: Modern CTA --- */}
            <section className="cta-modern-section">
                <div className="container">
                    <div className="cta-modern-card">
                        <div className="cta-modern-content">
                            <h2>هل أنت مستعد لمغامرتك القادمة؟</h2>
                            <p>دعنا نخطط لرحلتك بينما تتفرغ أنت لتجهيز حقائبك.</p>
                            <div className="cta-buttons">
                                <Link to="/contact" className="btn btn-primary btn-lg border-white">
                                    ابدأ التخطيط الآن <FiArrowLeft />
                                </Link>
                                <Link to="/services" className="btn btn-outline btn-lg text-white border-white hover-white">
                                    استكشف خدماتنا
                                </Link>
                            </div>
                        </div>
                        <div className="cta-pattern-overlay"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
```

## File: pages/Destinations.jsx

- Extension: .jsx
- Language: javascript
- Size: 7790 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-20 13:11:32

### Code

```javascript
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { allDestinations } from '../data';
import LazyImage from '../components/common/LazyImage';
import { FiMapPin, FiArrowLeft } from 'react-icons/fi';
import './Destinations.css';

const Destinations = () => {
    // Sliding text animation words - popular destinations
    const slidingWords = ["مكة المكرمة", "دبي", "باريس", "مالديف", "إسطنبول", "لندن", "طوكيو", "نيويورك"];

    return (
            <div className="destinations-page">
                {/* Enhanced Hero Section */}
                <section className="destinations-hero" aria-label="وجهاتنا السياحية">
                    <div className="destinations-hero-overlay"></div>
                    <div className="destinations-hero-pattern"></div>
                    
                    <div className="container destinations-hero-content">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="destinations-hero-badge"
                        >
                            <FiMapPin aria-hidden="true" />
                            <span>اكتشف العالم</span>
                        </motion.div>

                        {/* Main Title with Animated Underline */}
                        <div className="destinations-title-wrapper">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="destinations-hero-title"
                            >
                                وجهاتنا السياحية
                                <motion.span
                                    className="destinations-title-underline"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                                />
                            </motion.h1>
                        </div>

                        {/* Sliding Text Animation (RTL) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="destinations-sliding-text-wrapper"
                            aria-label="وجهاتنا المميزة"
                        >
                            <div className="destinations-sliding-text">
                                {[...slidingWords, ...slidingWords].map((word, index) => (
                                    <span key={`${word}-${index}`} className="sliding-word">
                                        {word}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="destinations-hero-subtitle"
                        >
                            اختر وجهتك القادمة من بين أجمل مدن العالم
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="destinations-hero-cta"
                        >
                            <Link 
                                to="/contact" 
                                className="destinations-cta-button"
                                aria-label="تواصل معنا لحجز رحلتك"
                            >
                                <span>احجز رحلتك الآن</span>
                                <FiArrowLeft aria-hidden="true" />
                            </Link>
                        </motion.div>
                    </div>
                </section>

                <div className="container section">
                    <div className="destinations-grid-layout">
                        {allDestinations.map((dest, index) => {
                            const isSpecial = dest.name === "مكة المكرمة" || dest.name === "المدينة المنورة";
                            return (
                            <motion.div
                                key={dest.id || index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="destination-card-full"
                                data-special={isSpecial}
                            >
                                <div className="dest-img-wrapper">
                                    <LazyImage src={dest.image} alt={dest.name} className="dest-full-img" />
                                    <div className="dest-overlay-gradient"></div>
                                    <div className="dest-duration-badge">
                                        <FiMapPin className="dest-badge-icon" />
                                        <span>{dest.duration}</span>
                                    </div>
                                </div>

                                <div className="dest-content">
                                    <div className="dest-header">
                                        <div>
                                            <h3 className="dest-title">{dest.name}</h3>
                                            <span className="dest-country">{dest.country}</span>
                                        </div>
                                    </div>

                                    <p className="dest-desc">{dest.description}</p>

                                    <div className="dest-features">
                                        {dest.features.map((feature, i) => (
                                            <span key={i} className="dest-feature-tag">{feature}</span>
                                        ))}
                                    </div>

                                    <Link 
                                        to="/contact" 
                                        className="btn btn-primary w-full mt-md dest-cta-btn"
                                        state={{ destination: dest.name }}
                                    >
                                        <span>احجز الآن</span>
                                        <FiArrowLeft className="dest-btn-icon" />
                                    </Link>
                                </div>
                            </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
    );
};

export default Destinations;

```

## File: pages/Admin.css

- Extension: .css
- Language: unknown
- Size: 11053 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-16 21:17:11

### Code

```unknown
.admin-page {
  min-height: 100vh;
  padding: var(--spacing-2xl) 0;
  background: var(--bg-secondary);
}

.admin-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
  padding-top: var(--spacing-lg); /* Add some padding at the top */
}

.admin-header h1 {
  font-size: var(--font-3xl);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.admin-header p {
  font-size: var(--font-lg);
  color: var(--text-secondary);
  margin-top: var(--spacing-sm); /* Adjust margin to move it a little down */
}

.admin-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

/* Add Entry Form */
.add-entry-form {
  background: var(--bg-primary);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

.add-entry-form h3 {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.form-group label {
  font-size: var(--font-sm);
  font-weight: 600;
  color: var(--text-primary);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: var(--spacing-md);
  font-size: var(--font-base);
  border: 2px solid var(--bg-tertiary);
  border-radius: var(--radius-md);
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-cyan);
  box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);
}

.form-group input:disabled,
.form-group select:disabled,
.form-group textarea:disabled {
  background: var(--bg-tertiary);
  cursor: not-allowed;
  opacity: 0.6;
}

.form-group textarea {
  resize: vertical;
  min-height: 80px;
}

.btn-primary {
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--font-base);
  font-weight: 600;
  color: white;
  background: var(--gradient-ocean);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-message {
  padding: var(--spacing-md);
  background: rgba(236, 72, 153, 0.1);
  border: 1px solid var(--accent-coral);
  border-radius: var(--radius-md);
  color: var(--accent-coral);
  font-size: var(--font-sm);
  font-weight: 500;
  margin-top: var(--spacing-md);
}

/* Filters */
.admin-filters {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  background: var(--bg-primary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.filter-group label {
  font-size: var(--font-sm);
  font-weight: 600;
  color: var(--text-primary);
}

.filter-group input,
.filter-group select {
  padding: var(--spacing-md);
  font-size: var(--font-base);
  border: 2px solid var(--bg-tertiary);
  border-radius: var(--radius-md);
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.filter-group input:focus,
.filter-group select:focus {
  outline: none;
  border-color: var(--primary-cyan);
  box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);
}

/* Table */
.table-container {
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow-x: auto;
}

.passport-table {
  width: 100%;
  border-collapse: collapse;
}

.passport-table thead {
  background: var(--bg-secondary);
}

.passport-table th {
  padding: var(--spacing-md) var(--spacing-lg);
  text-align: left;
  font-size: var(--font-sm);
  font-weight: 700;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 2px solid var(--bg-tertiary);
}

.passport-table td {
  padding: var(--spacing-md) var(--spacing-lg);
  border-bottom: 1px solid var(--bg-tertiary);
  font-size: var(--font-sm);
  color: var(--text-secondary);
}

.passport-table tbody tr:hover {
  background: var(--bg-secondary);
}

.passport-table tbody tr:last-child td {
  border-bottom: none;
}

.status-badge {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-full);
  font-size: var(--font-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-success {
  background: rgba(20, 184, 166, 0.1);
  color: var(--secondary-teal);
}

.badge-warning {
  background: rgba(245, 158, 11, 0.1);
  color: var(--accent-amber);
}

.badge-info {
  background: rgba(71, 85, 105, 0.1);
  color: var(--text-secondary);
}

.badge-error {
  background: rgba(236, 72, 153, 0.1);
  color: var(--accent-coral);
}

.notes-cell {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-muted {
  color: var(--text-muted);
  font-style: italic;
}

.action-buttons {
  display: flex;
  gap: var(--spacing-sm);
}

.btn-edit,
.btn-delete {
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: var(--font-xs);
  font-weight: 600;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-edit {
  background: rgba(8, 145, 178, 0.1);
  color: var(--primary-cyan);
}

.btn-edit:hover {
  background: var(--primary-cyan);
  color: white;
}

.btn-delete {
  background: rgba(236, 72, 153, 0.1);
  color: var(--accent-coral);
}

.btn-delete:hover:not(:disabled) {
  background: var(--accent-coral);
  color: white;
}

.btn-delete:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Modal */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--spacing-lg);
  animation: fadeIn 0.2s ease;
}

.modal-content {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg) var(--spacing-xl);
  border-bottom: 1px solid var(--bg-tertiary);
}

.modal-header h3 {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  font-size: var(--font-3xl);
  color: var(--text-muted);
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

.modal-body {
  padding: var(--spacing-xl);
}

.entry-info {
  background: var(--bg-secondary);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-lg);
}

.entry-info p {
  margin: var(--spacing-xs) 0;
  font-size: var(--font-sm);
  color: var(--text-secondary);
}

.entry-info strong {
  color: var(--text-primary);
  font-weight: 600;
}

.modal-actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: flex-end;
  margin-top: var(--spacing-lg);
}

.btn-secondary {
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--font-base);
  font-weight: 600;
  color: var(--text-primary);
  background: var(--bg-secondary);
  border: 2px solid var(--bg-tertiary);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover:not(:disabled) {
  background: var(--bg-tertiary);
}

.btn-secondary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Loading and Empty States */
.loading-state {
  text-align: center;
  padding: var(--spacing-3xl);
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.spinner-large {
  width: 48px;
  height: 48px;
  border: 4px solid var(--bg-tertiary);
  border-top-color: var(--primary-cyan);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto var(--spacing-md);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-state p {
  color: var(--text-secondary);
  font-size: var(--font-base);
}

.empty-state {
  text-align: center;
  padding: var(--spacing-3xl);
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.empty-state p {
  color: var(--text-secondary);
  font-size: var(--font-base);
}

.error-banner {
  background: rgba(236, 72, 153, 0.1);
  border: 1px solid var(--accent-coral);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  color: var(--accent-coral);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.error-banner button {
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--accent-coral);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: var(--font-sm);
  font-weight: 600;
}

.error-banner button:hover {
  opacity: 0.9;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.pagination-info {
  font-size: var(--font-sm);
  color: var(--text-secondary);
  font-weight: 500;
}

.btn-pagination {
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--font-sm);
  font-weight: 600;
  color: var(--primary-cyan);
  background: transparent;
  border: 2px solid var(--primary-cyan);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-pagination:hover:not(:disabled) {
  background: var(--primary-cyan);
  color: white;
}

.btn-pagination:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Responsive Design */
@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  .admin-filters {
    grid-template-columns: 1fr;
  }

  .passport-table {
    font-size: var(--font-xs);
  }

  .passport-table th,
  .passport-table td {
    padding: var(--spacing-sm);
  }

  .action-buttons {
    flex-direction: column;
  }

  .modal-content {
    margin: var(--spacing-md);
    max-height: calc(100vh - 2rem);
  }

  .pagination {
    flex-direction: column;
    gap: var(--spacing-md);
  }
}


```

## File: pages/Admin.jsx

- Extension: .jsx
- Language: javascript
- Size: 5099 bytes
- Created: 2025-12-27 17:55:58
- Modified: 2025-12-27 17:55:58

### Code

```javascript
import { useState, useEffect } from 'react';
import AddEntryForm from '../components/admin/AddEntryForm';
import PassportTable from '../components/admin/PassportTable';
import './Admin.css';

const Admin = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState(null);

  const fetchEntries = async (page = 1, search = '', status = 'all') => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '50',
      });

      if (search.trim()) {
        params.append('search', search.trim());
      }

      if (status !== 'all') {
        params.append('status', status);
      }

      const response = await fetch(`/api/admin/list-entries?${params.toString()}`);

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'فشل في جلب البيانات');
        return;
      }

      setEntries(data.data || []);
      setPagination(data.pagination);
    } catch (err) {
      console.error('Error fetching entries:', err);
      setError('حدث خطأ أثناء جلب البيانات');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries(currentPage, searchTerm, statusFilter);
  }, [currentPage, searchTerm, statusFilter]);

  const handleRefresh = () => {
    fetchEntries(currentPage, searchTerm, statusFilter);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleStatusFilter = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="admin-page">
      <div className="container">
        <div className="admin-header">
          <h1>لوحة الإدارة - إدارة حالة الفيزا</h1>
          <p>إدارة مدخلات جوازات السفر وحالات الفيزا</p>
        </div>

        <div className="admin-content">
          <AddEntryForm onSuccess={handleRefresh} />

          <div className="admin-filters">
            <div className="filter-group">
              <label htmlFor="search">ابحث عن الجواز</label>
              <input
                type="text"
                id="search"
                placeholder="أدخل رقم الجواز..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>

            <div className="filter-group">
              <label htmlFor="status-filter">فرز حسب الحاله</label>
              <select id="status-filter" value={statusFilter} onChange={handleStatusFilter}>
                <option value="all">الكل</option>
                <option value="pending">في الانتظار</option>
                <option value="in_embassy">في السفارة</option>
                <option value="ready">جاهز</option>
                <option value="rejected">مرفوض</option>
              </select>
            </div>
          </div>

          {error && (
            <div className="error-banner">
              {error}
              <button onClick={handleRefresh}>إعادة المحاولة</button>
            </div>
          )}

          {loading ? (
            <div className="loading-state">
              <div className="spinner-large"></div>
              <p>جاري تحميل البيانات...</p>
            </div>
          ) : (
            <>
              <PassportTable
                entries={entries}
                onRefresh={handleRefresh}
                onDelete={handleRefresh}
              />

              {pagination && pagination.totalPages > 1 && (
                <div className="pagination">
                  <button
                    className="btn-pagination"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    السابق
                  </button>
                  <span className="pagination-info">
                    صفحة {pagination.page} من {pagination.totalPages} (الكل {pagination.total})
                  </span>
                  <button
                    className="btn-pagination"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === pagination.totalPages}
                  >
                    التالي
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
```

## File: pages/Contact.jsx

- Extension: .jsx
- Language: javascript
- Size: 11544 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-27 00:26:50

### Code

```javascript
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiCheckCircle } from 'react-icons/fi';
import { CONTACT_INFO } from '../constants/company';
import LazyImage from '../components/common/LazyImage';
import './Contact.css';

const Contact = () => {
    // Contact methods for floating icons
    const handleMapClick = (e) => {
        e.preventDefault();
        const mapSection = document.querySelector('.contact-map-wrapper');
        if (mapSection) {
            mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const contactMethods = [
        { icon: <FiPhone />, label: 'اتصل بنا', method: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}` },
        { icon: <FiMail />, label: 'راسلنا', method: `mailto:${CONTACT_INFO.email}` },
        { 
            icon: <FiMapPin />, 
            label: 'موقعنا', 
            method: 'https://maps.google.com/?q=صنعاء+شارع+القدس+مقابل+السفارة+السعودية', 
            onClick: handleMapClick 
        }
    ];

    return (
        <div className="contact-page">
            {/* Enhanced Hero Section */}
            <section className="contact-hero" aria-label="تواصل معنا">
                <div className="contact-hero-background">
                    <LazyImage 
                        src="/dubai.jpg" 
                        alt="دبي - خلفية" 
                        className="contact-hero-image"
                    />
                    <div className="contact-hero-overlay"></div>
                    <div className="contact-hero-pattern"></div>
                </div>
                
                <div className="container contact-hero-content">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="contact-hero-badge"
                    >
                        <FiMapPin aria-hidden="true" />
                        <span>زورنا في صنعاء</span>
                    </motion.div>

                    {/* Main Title with Animated Underline */}
                    <div className="contact-title-wrapper">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="contact-hero-title"
                        >
                            تواصل معنا
                            <motion.span
                                className="contact-title-underline"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                            />
                        </motion.h1>
                    </div>

                    {/* Floating Contact Methods */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="contact-methods-floating"
                        aria-label="طرق التواصل"
                    >
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.method}
                                className="contact-method-icon"
                                onClick={method.onClick}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.1 }}
                                aria-label={method.label}
                                target={method.method.startsWith('http') ? '_blank' : undefined}
                                rel={method.method.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                                {method.icon}
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="contact-hero-subtitle"
                    >
                        نحن هنا للإجابة على استفساراتك ومساعدتك في تخطيط رحلتك القادمة
                    </motion.p>
                </div>
            </section>

            <div className="container section">
                <div className="contact-grid">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="contact-info-wrapper"
                    >
                        <h2 className="contact-title">معلومات الاتصال</h2>
                        <p className="contact-desc">يمكنك التواصل معنا عبر القنوات التالية أو زيارة مقرنا الرئيسي.</p>

                        <div className="contact-cards-grid">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="contact-card"
                            >
                                <div className="contact-card-icon">
                                    <FiPhone />
                                </div>
                                <h4 className="contact-card-title">الهاتف</h4>
                                <div className="contact-card-content">
                                    <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="contact-link">{CONTACT_INFO.phone}</a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="contact-card"
                            >
                                <div className="contact-card-icon">
                                    <FiMail />
                                </div>
                                <h4 className="contact-card-title">البريد الإلكتروني</h4>
                                <div className="contact-card-content">
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="contact-link">{CONTACT_INFO.email}</a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="contact-card"
                            >
                                <div className="contact-card-icon">
                                    <FiMapPin />
                                </div>
                                <h4 className="contact-card-title">العنوان</h4>
                                <div className="contact-card-content">
                                    <p>{CONTACT_INFO.address}</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="contact-card"
                            >
                                <div className="contact-card-icon">
                                    <FiClock />
                                </div>
                                <h4 className="contact-card-title">ساعات العمل</h4>
                                <div className="contact-card-content">
                                    <p>{CONTACT_INFO.workingHours}</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Interactive Map Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="contact-map-wrapper"
                    >
                        <h2 className="contact-title">موقعنا على الخريطة</h2>
                        <div className="map-container">
                            <iframe
                            src="https://maps.google.com/maps?q=Sana'a+Al+Quds+Street+Opposite+Saudi+Embassy&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="450"
                            style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="موقعنا في شارع القدس، صنعاء، مقابل السفارة السعودية"
                            ></iframe>
                        </div>
                        <div className="map-info">
                            <div className="map-pin-icon">
                                <FiMapPin />
                            </div>
                            <div>
                                <h4>شارع القدس، صنعاء</h4>
                                <p>مقابل السفارة السعودية</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

```

## File: pages/Home.jsx

- Extension: .jsx
- Language: javascript
- Size: 570 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-10 17:23:43

### Code

```javascript
import Hero from '../components/sections/Hero';
import HomeServices from '../components/sections/HomeServices';
import DestinationsCarousel from '../components/sections/DestinationsCarousel';
import AboutUs from '../components/sections/AboutUs';
import PassportCheck from '../components/sections/PassportCheck';

const Home = () => {
    return (
        <main>
            <Hero />
            <PassportCheck />
            <HomeServices />
            <DestinationsCarousel />
            <AboutUs />
        </main>
    );
};

export default Home;

```

## File: pages/Home.css

- Extension: .css
- Language: unknown
- Size: 3106 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```unknown
.section-header {
    margin-bottom: var(--spacing-2xl);
    text-align: center;
}

.section-subtitle {
    color: var(--text-secondary);
    font-size: var(--font-lg);
    max-width: 600px;
    margin: 0 auto;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
}

.mt-xl {
    margin-top: var(--spacing-xl);
}

.bg-secondary {
    background-color: var(--bg-secondary);
}

/* Destinations Grid */
.destinations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-md);
}

.destination-card {
    position: relative;
    border-radius: var(--radius-lg);
    overflow: hidden;
    height: 300px;
    cursor: pointer;
    box-shadow: var(--shadow-md);
}

.dest-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.destination-card:hover .dest-img {
    transform: scale(1.1);
}

.dest-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: var(--spacing-lg);
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    color: white;
}

.dest-name {
    font-size: var(--font-xl);
    margin-bottom: 4px;
    color: white;
}

.dest-price {
    font-size: var(--font-sm);
    color: var(--accent-amber);
    font-weight: bold;
}

/* Features Section */
.features-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    align-items: center;
}

@media (min-width: 992px) {
    .features-grid {
        grid-template-columns: 1fr 1fr;
    }
}

.feature-list {
    list-style: none;
    margin-top: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.feature-list li {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
}

.feature-list .icon {
    width: 48px;
    height: 48px;
    background: var(--bg-secondary);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    flex-shrink: 0;
}

.feature-image-wrapper {
    position: relative;
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-xl);
}

.feature-img {
    width: 100%;
    height: auto;
    display: block;
}

.experience-badge {
    position: absolute;
    bottom: var(--spacing-lg);
    right: var(--spacing-lg);
    /* RTL: right side */
    background: white;
    padding: var(--spacing-md);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.experience-badge .years {
    font-size: var(--font-2xl);
    font-weight: 800;
    color: var(--primary-cyan);
    line-height: 1;
}

.experience-badge span:last-child {
    font-size: var(--font-sm);
    color: var(--text-secondary);
    font-weight: 600;
}
```

## File: pages/Services.jsx

- Extension: .jsx
- Language: javascript
- Size: 11277 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-27 16:38:34

### Code

```javascript
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ExpandableServiceCard from '../components/common/ExpandableServiceCard';
import { allServices } from '../data/services';
import { 
    FiAward, FiUsers, FiClock, FiChevronDown, FiGlobe, 
    FiFileText, FiMap, FiSearch, FiPhone, FiSmile 
} from 'react-icons/fi';
import { 
    TbPlane, TbBuilding, TbMap, TbBus, TbShip, 
    TbLanguage, TbBuildingMosque, TbTicket 
} from 'react-icons/tb';
import LazyImage from '../components/common/LazyImage';
import './Services.css';

const Services = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [expandedCardTitle, setExpandedCardTitle] = useState(null);

    // Filter Categories
    const filters = useMemo(() => ([
        { id: 'all', label: 'جميع الخدمات', icon: <FiAward /> },
        { id: 'flights', label: 'حجوزات طيران', icon: <TbPlane /> },
        { id: 'hotels', label: 'فنادق وإقامة', icon: <TbBuilding /> },
        { id: 'visa', label: 'تأشيرات', icon: <FiGlobe /> },
        { id: 'tours', label: 'برامج سياحية', icon: <TbMap /> },
        { id: 'hajj', label: 'حج وعمرة', icon: <TbBuildingMosque /> },
        { id: 'transport', label: 'نقل ومواصلات', icon: <TbBus /> },
        { id: 'other', label: 'خدمات أخرى', icon: <TbTicket /> } // Grouped smaller cats
    ]), []);

    // Helper to group specific categories into 'other' if needed
    const getCategory = (cat) => {
        const mainCats = ['flights', 'hotels', 'visa', 'tours', 'hajj', 'transport'];
        return mainCats.includes(cat) ? cat : 'other';
    };

    const filteredServices = useMemo(() => {
        const data = Array.isArray(allServices) ? allServices : [];
        if (activeFilter === 'all') return data;
        return data.filter(service => getCategory(service.category) === activeFilter);
    }, [activeFilter]);

    const handleCardToggle = (title) => {
        setExpandedCardTitle(expandedCardTitle === title ? null : title);
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="services-page-premium">
            {/* --- Hero Section --- */}
            <div className="services-hero-modern">
                <div className="hero-bg-layer">
                    <div className="hero-blob blob-1"></div>
                    <div className="hero-blob blob-2"></div>
                </div>
                
                <div className="container relative z-10">
                    <div className="hero-content-center">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <span className="hero-badge-pill">خدمات متكاملة</span>
                            <h1 className="hero-title-lg">
                                وجهتك الأولى <br />
                                <span className="text-gradient-gold">لكل تفاصيل السفر</span>
                            </h1>
                            <p className="hero-desc-lg">
                                نجمع لك العالم في مكان واحد. من تذاكر الطيران إلى أدق تفاصيل إقامتك، 
                                نحن نعتني بكل خطوة لتستمتع بالرحلة.
                            </p>
                        </motion.div>
                    </div>
                </div>
                
                {/* Decorative Wave */}
                <div className="hero-wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>

            {/* --- Sticky Filter Bar --- */}
            <div className="filter-sticky-wrapper">
                <div className="container">
                    <div className="filter-glass-bar">
                        <div className="filter-scroll-container">
                            {filters.map((filter) => (
                                <button
                                    key={filter.id}
                                    className={`filter-pill ${activeFilter === filter.id ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(filter.id)}
                                >
                                    <span className="filter-icon">{filter.icon}</span>
                                    <span>{filter.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Services Grid --- */}
            <section className="section services-grid-section">
                <div className="container">
                    <div className="results-header">
                        <h3>عرض {filteredServices.length} خدمة متاحة</h3>
                        {activeFilter !== 'all' && (
                            <button className="clear-filter" onClick={() => setActiveFilter('all')}>
                                عرض الكل
                            </button>
                        )}
                    </div>

                    <motion.div 
                        className="services-grid-layout"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={activeFilter} // Re-trigger animation on filter change
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredServices.map((service, index) => (
                                <motion.div key={service.title + index} variants={itemVariants} layout>
                                    <ExpandableServiceCard
                                        title={service.title}
                                        tagline={service.tagline}
                                        icon={service.icon}
                                        detailedDescription={service.detailedDescription}
                                        features={service.features}
                                        isExpanded={expandedCardTitle === service.title}
                                        onToggle={() => handleCardToggle(service.title)}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredServices.length === 0 && (
                        <div className="empty-state-modern">
                            <FiSearch size={48} />
                            <h3>لا توجد خدمات مطابقة</h3>
                            <p>جرب اختيار تصنيف آخر</p>
                        </div>
                    )}
                </div>
            </section>

            {/* --- Process Section (How it works) --- */}
            <section className="section process-section">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-tag">كيف نعمل</span>
                        <h2 className="section-title">رحلتك تبدأ بخطوات بسيطة</h2>
                    </div>

                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number">01</div>
                            <div className="step-icon"><FiSearch /></div>
                            <h3>اختر خدمتك</h3>
                            <p>تصفح قائمة خدماتنا الشاملة واختر ما يناسب احتياجات سفرك.</p>
                        </div>
                        <div className="process-line"></div>
                        <div className="process-step">
                            <div className="step-number">02</div>
                            <div className="step-icon"><FiPhone /></div>
                            <h3>تواصل معنا</h3>
                            <p>تحدث مع مستشارينا عبر الواتساب أو الهاتف لتأكيد التفاصيل.</p>
                        </div>
                        <div className="process-line"></div>
                        <div className="process-step">
                            <div className="step-number">03</div>
                            <div className="step-icon"><FiSmile /></div>
                            <h3>سافر باطمئنان</h3>
                            <p>استلم حجوزاتك وانطلق في رحلتك ونحن معك في كل خطوة.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Premium CTA --- */}
            <section className="premium-cta-wrapper">
                <div className="container">
                    <div className="premium-cta-card">
                        <div className="cta-bg-image">
                            <LazyImage src="/hero-bg.jpg" alt="Travel" />
                            <div className="cta-overlay"></div>
                        </div>
                        <div className="cta-content-inner">
                            <h2>لم تجد ما تبحث عنه؟</h2>
                            <p>نحن متخصصون في تصميم الرحلات المخصصة. أخبرنا عن حلمك، ونحن سنحوله إلى حقيقة.</p>
                            <div className="cta-actions">
                                <Link to="/contact" className="btn btn-primary btn-lg border-white">
                                    تواصل مع مستشار سياحي
                                </Link>
                                <a href="https://wa.me/967779717177" target="_blank" rel="noreferrer" className="btn btn-outline text-white border-white hover-white">
                                    راسلنا عبر واتساب
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
```

## File: pages/Contact.css

- Extension: .css
- Language: unknown
- Size: 12371 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-20 18:26:44

### Code

```unknown
.contact-page {
    /* Removed padding-top for full screen hero */
    overflow-x: hidden;
}

/* ========================================
   ENHANCED CONTACT HERO SECTION
   ======================================== */

.contact-hero {
    position: relative;
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    /* Increased top padding for navbar clearance */
    padding: max(8rem, env(safe-area-inset-top)) var(--spacing-md) max(3rem, env(safe-area-inset-bottom));
    contain: layout style paint;
}

.contact-hero-background {
    position: absolute;
    inset: 0;
    z-index: 0;
}

.contact-hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.contact-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.5) 50%,
            rgba(0, 54, 97, 0.8) 100%);
    z-index: 1;
}

.contact-hero-pattern {
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.4;
    z-index: 1;
}

.contact-hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-md);
}

/* Hero Badge */
.contact-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1.5rem;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: var(--radius-full);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    font-size: clamp(0.875rem, 2vw, 1rem);
    font-weight: 600;
    font-family: var(--font-heading);
    min-height: 44px;
}

.contact-hero-badge svg {
    font-size: 1.1em;
}

/* Hero Title with Animated Underline */
.contact-title-wrapper {
    position: relative;
    margin: var(--spacing-sm) 0;
}

.contact-hero-title {
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    font-weight: 800;
    color: white;
    line-height: 1.2;
    margin: 0;
    font-family: var(--font-heading);
    position: relative;
    display: inline-block;
    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.contact-title-underline {
    position: absolute;
    bottom: -0.5rem;
    right: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--accent-amber), transparent);
    transform-origin: right;
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(245, 158, 11, 0.5);
}

/* Floating Contact Methods */
.contact-methods-floating {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin: var(--spacing-md) 0;
}

.contact-method-icon {
    width: 56px;
    height: 56px;
    min-width: 56px;
    min-height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    transition: all var(--transition-base);
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.contact-method-icon:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

/* Hero Subtitle */
.contact-hero-subtitle {
    font-size: clamp(1rem, 3vw, 1.5rem);
    color: rgba(255, 255, 255, 0.95);
    line-height: 1.6;
    max-width: 600px;
    margin: 0;
    font-family: var(--font-body);
    text-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
}

/* ========================================
   CONTACT CONTENT SECTION
   ======================================== */

.contact-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    margin-top: var(--spacing-2xl);
}

@media (min-width: 992px) {
    .contact-grid {
        grid-template-columns: 1fr 1.5fr;
        gap: var(--spacing-2xl);
        align-items: start;
    }

    .contact-info-wrapper {
        position: sticky;
        top: 100px;
    }

    .contact-map-wrapper {
        padding: var(--spacing-2xl);
        max-width: 100%;
    }
}

/* Contact Info Section */
.contact-info-wrapper {
    background: var(--bg-secondary);
    padding: var(--spacing-xl);
    border-radius: var(--radius-lg);
    height: fit-content;
}

.contact-title {
    font-size: clamp(1.5rem, 4vw, 2rem);
    margin-bottom: var(--spacing-sm);
    color: var(--text-primary);
    font-family: var(--font-heading);
}

.contact-desc {
    color: var(--text-secondary);
    margin-bottom: var(--spacing-xl);
    font-size: var(--font-base);
    line-height: 1.6;
}

/* Contact Cards Grid */
.contact-cards-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
}

@media (min-width: 768px) {
    .contact-cards-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

.contact-card {
    background: white;
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-md);
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all var(--transition-base);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--spacing-sm);
}

/* Enhanced Contact Cards for Desktop */
@media (min-width: 992px) {
    .contact-card {
        padding: var(--spacing-xl);
    }

    .contact-card-icon {
        width: 72px;
        height: 72px;
        min-width: 72px;
        min-height: 72px;
        font-size: 2rem;
    }
}

.contact-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
    border-color: rgba(8, 145, 178, 0.2);
}

.contact-card-icon {
    width: 64px;
    height: 64px;
    min-width: 64px;
    min-height: 64px;
    background: rgba(8, 145, 178, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    color: var(--primary-cyan);
    margin-bottom: var(--spacing-xs);
    transition: all var(--transition-base);
}

.contact-card:hover .contact-card-icon {
    background: var(--gradient-ocean);
    color: white;
    transform: scale(1.1);
}

.contact-card-title {
    font-size: var(--font-lg);
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
    font-family: var(--font-heading);
}

.contact-card-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
}

.contact-card-content p {
    font-size: var(--font-sm);
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.5;
}

.contact-link {
    font-size: var(--font-sm);
    color: var(--primary-cyan);
    text-decoration: none;
    transition: color var(--transition-fast);
    display: block;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: var(--radius-sm);
}

.contact-link:hover {
    color: var(--accent-amber);
    background: rgba(8, 145, 178, 0.05);
}

/* ========================================
   RESPONSIVE MAP SECTION
   ======================================== */

.contact-map-wrapper {
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    padding: var(--spacing-xl);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--glass-border);
    position: relative;
    overflow: hidden;
}

.contact-map-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(8, 145, 178, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(50%, -50%);
    pointer-events: none;
}

.map-container {
    position: relative;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    margin-bottom: var(--spacing-lg);
    height: 400px;
}

@media (min-width: 768px) {
    .map-container {
        height: 450px;
    }
}

@media (min-width: 992px) {
    .map-container {
        height: 500px;
    }
}

.map-container iframe {
    width: 100%;
    height: 100%;
    border: 0;
    transition: transform 0.3s ease;
}

.map-container:hover iframe {
    transform: scale(1.02);
}

.map-info {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    background: rgba(255, 255, 255, 0.5);
    border-radius: var(--radius-md);
    backdrop-filter: blur(10px);
}

.map-pin-icon {
    width: 48px;
    height: 48px;
    background: var(--primary-cyan);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    flex-shrink: 0;
}

.map-info h4 {
    margin: 0 0 var(--spacing-xs) 0;
    color: var(--text-primary);
    font-family: var(--font-heading);
    font-size: var(--font-lg);
}

.map-info p {
    margin: 0;
    color: var(--text-secondary);
    font-size: var(--font-sm);
}

/* ========================================
   MOBILE OPTIMIZATIONS
   ======================================== */

@media (max-width: 767px) {
    .contact-hero {
        min-height: 60vh;
        padding: max(2rem, env(safe-area-inset-top)) var(--spacing-sm) max(2rem, env(safe-area-inset-bottom));
    }

    .contact-hero-content {
        gap: var(--spacing-sm);
    }

    .contact-methods-floating {
        gap: 0.75rem;
    }

    .contact-method-icon {
        width: 48px;
        height: 48px;
        min-width: 48px;
        min-height: 48px;
        font-size: 1.25rem;
    }

    .contact-info-wrapper,
    .contact-map-wrapper {
        padding: var(--spacing-lg);
    }

    .contact-cards-grid {
        gap: var(--spacing-sm);
    }

    .map-info {
        flex-direction: column;
        text-align: center;
        gap: var(--spacing-sm);
    }
}

/* Touch Device Optimizations */
@media (hover: none) and (pointer: coarse) {

    .contact-method-icon,
    .contact-link {
        min-height: 44px;
    }

    .contact-card {
        min-height: 44px;
    }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
    .contact-title-underline {
        animation: none;
        transform: scaleX(1);
    }

    .contact-card:hover {
        transform: none;
    }

    .contact-card-icon {
        transition: none;
    }

    .map-container:hover iframe {
        transform: none;
    }
}

/* Performance Optimizations */
.contact-hero * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}

.contact-method-icon,
.contact-card {
    transform: translateZ(0);
    backface-visibility: hidden;
}

/* Desktop-Specific Enhancements */
@media (min-width: 1200px) {


    .contact-hero {
        min-height: 80vh;
    }

    .contact-grid {
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
    }

    .contact-map-wrapper {
        box-shadow: var(--shadow-xl);
    }

    .contact-info-wrapper {
        box-shadow: var(--shadow-lg);
    }
}

/* Better Container Width */
@media (min-width: 992px) {
    .container {
        max-width: 1400px;
    }
}
```

## File: pages/About.css

- Extension: .css
- Language: unknown
- Size: 11866 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-27 16:14:56

### Code

```unknown
/* ========================================
   MODERN ABOUT PAGE
   ======================================== */

.about-modern {
    overflow-x: hidden;
    background-color: var(--bg-primary);
}

/* --- Hero Section --- */
.about-hero-modern {
    position: relative;
    height: 90vh;
    min-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.hero-bg-parallax {
    position: absolute;
    inset: 0;
    z-index: 0;
    height: 120%; /* Taller for parallax effect */
    top: -10%;
}

.parallax-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-overlay-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(
        180deg, 
        rgba(0, 54, 97, 0.4) 0%, 
        rgba(0, 54, 97, 0.7) 60%,
        var(--bg-primary) 100%
    );
    z-index: 1;
}

.hero-content-modern {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 900px;
}

.hero-badge-glass {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    letter-spacing: 1px;
}

.hero-title-modern {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    line-height: 1.2;
    color: white;
    margin-bottom: 1.5rem;
}

.hero-title-modern .text-gradient {
    background: linear-gradient(135deg, #fff 0%, #93C5FD 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: block;
}

.hero-desc-modern {
    font-size: clamp(1.1rem, 2vw, 1.35rem);
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.7;
    max-width: 700px;
    margin: 0 auto;
}

/* Mouse Scroll Animation */
.scroll-mouse {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
}

.wheel {
    width: 30px;
    height: 50px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    position: relative;
}

.wheel::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background: #fff;
    border-radius: 2px;
    animation: scrollWheel 1.5s infinite;
}

@keyframes scrollWheel {
    0% { top: 10px; opacity: 1; }
    100% { top: 30px; opacity: 0; }
}

/* --- Story Section (Collage) --- */
.story-section {
    padding: var(--spacing-2xl) 0;
}

.story-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.section-label {
    color: var(--primary-blue);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
    display: block;
    margin-bottom: 0.5rem;
}

.section-heading {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
}

.highlight-underline {
    position: relative;
    z-index: 1;
}

.highlight-underline::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    height: 10px;
    background: rgba(245, 158, 11, 0.2); /* Accent Amber */
    z-index: -1;
    transform: rotate(-1deg);
}

.story-text {
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 1.5rem;
}

.story-stats {
    display: flex;
    gap: 3rem;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--bg-tertiary);
}

.story-stat-item {
    display: flex;
    flex-direction: column;
}

.stat-num {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--primary-blue);
    line-height: 1;
}

.stat-label {
    font-size: 0.9rem;
    color: var(--text-secondary);
    font-weight: 500;
}

/* Collage Styles */
.story-visuals {
    position: relative;
}

.collage-wrapper {
    position: relative;
    padding-bottom: 40px; 
    /* Space for floating elements */
}

.collage-img-lg {
    width: 85%;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-xl);
    aspect-ratio: 4/5;
    position: relative;
    z-index: 1;
}

.collage-img-sm {
    position: absolute;
    bottom: 0;
    left: 0; /* RTL: left side */
    width: 50%;
    aspect-ratio: 1;
    border-radius: var(--radius-lg);
    overflow: hidden;
    z-index: 2;
    border: 8px solid var(--bg-primary); /* Creates cut-out effect */
    box-shadow: var(--shadow-2xl);
}

.collage-badge {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.9);
    padding: 0.5rem 1rem;
    border-radius: var(--radius-full);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
    font-size: 0.8rem;
    color: var(--primary-blue);
    box-shadow: var(--shadow-sm);
}

.circle-decor {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 150px;
    height: 150px;
    border: 2px solid var(--accent-amber);
    border-radius: 50%;
    opacity: 0.2;
    z-index: 0;
}

.dots-decor {
    position: absolute;
    bottom: 20px;
    right: 10px;
    width: 100px;
    height: 100px;
    background-image: radial-gradient(var(--primary-blue) 1px, transparent 1px);
    background-size: 10px 10px;
    opacity: 0.1;
    z-index: 0;
}

/* ========================================
   MODERN BENTO GRID (REDESIGNED)
   ======================================== */

.values-section-modern {
    padding: 6rem 0;
    background-color: var(--bg-secondary);
}

.section-header-center {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 3rem;
}

.section-tag {
    display: inline-block;
    padding: 0.5rem 1.25rem;
    background: rgba(8, 145, 178, 0.1);
    color: var(--primary-cyan);
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.bento-grid-modern {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, minmax(260px, auto));
    gap: 1.5rem;
    max-width: 1100px;
    margin: 0 auto;
}

/* Common Card Styles */
.bento-item {
    background: #fff;
    border-radius: 24px;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0,0,0,0.03);
    display: flex;
    flex-direction: column;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.bento-item:hover {
    box-shadow: 0 12px 30px -5px rgba(0, 0, 0, 0.08);
}

.bento-item h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: var(--text-primary);
    position: relative;
    z-index: 2;
}

.bento-item p {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0;
    position: relative;
    z-index: 2;
}

.icon-wrapper {
    width: 54px;
    height: 54px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    background: var(--bg-secondary);
    transition: transform 0.3s ease;
    position: relative;
    z-index: 2;
}

.bento-item:hover .icon-wrapper {
    transform: scale(1.1) rotate(-5deg);
}

/* 1. Vision Card (Large, Dark Blue) */
.vision-card {
    grid-column: span 2;
    background: linear-gradient(135deg, #004B87 0%, #003661 100%);
    color: white;
    justify-content: center;
}

.vision-card h3, .vision-card p {
    color: white;
}

.vision-card p {
    opacity: 0.9;
    max-width: 85%;
}

.vision-card .card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(0,0,0,0.1), transparent);
    z-index: 1;
}

.glass-icon {
    background: rgba(255, 255, 255, 0.15) !important;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
}

.bg-pattern {
    position: absolute;
    right: -50px;
    bottom: -50px;
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
}

/* 2. Trust Card (Tall, Vertical) */
.trust-card {
    grid-column: span 1;
    grid-row: span 2;
    background: linear-gradient(to bottom, #fff 0%, #FFFBEB 100%);
    border: 1px solid rgba(245, 158, 11, 0.1);
}

.trust-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(245, 158, 11, 0.1);
    color: #d97706;
    padding: 6px 12px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 700;
    align-self: flex-start;
    margin-bottom: 2rem;
}

/* 3. Team Card */
.team-card {
    grid-column: span 1;
}

.tiny-tag {
    font-size: 0.75rem;
    font-weight: 700;
    color: #2563EB;
    background: #EFF6FF;
    padding: 4px 8px;
    border-radius: 6px;
}

/* 4. Map Card */
.map-card {
    grid-column: span 1;
}

.map-dots-decoration {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 60px;
    height: 60px;
    background-image: radial-gradient(#CBD5E1 1.5px, transparent 1.5px);
    background-size: 8px 8px;
    opacity: 0.5;
}

/* 5. Service Card */
.service-card {
    grid-column: span 1;
}

/* Tailwind Utilities (if not using Tailwind directly) */
.relative { position: relative; }
.z-10 { z-index: 10; }
.mb-3 { margin-bottom: 0.75rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-5 { margin-bottom: 2rem; }
.mt-auto { margin-top: auto; }
.flex { display: flex; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.text-amber-500 { color: #f59e0b; }
.text-blue-600 { color: #2563eb; }
.text-teal-600 { color: #0d9488; }
.text-rose-500 { color: #f43f5e; }

/* --- CTA Section --- */
.cta-modern-section {
    padding: var(--spacing-2xl) 0;
}

.cta-modern-card {
    background: var(--primary-dark);
    border-radius: 30px;
    padding: 4rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    color: white;
    box-shadow: var(--shadow-xl);
}

.cta-modern-content {
    position: relative;
    z-index: 2;
    max-width: 700px;
    margin: 0 auto;
}

.cta-modern-content h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 1rem;
    color: white;
}

.cta-modern-content p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2.5rem;
}

.cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.cta-pattern-overlay {
    position: absolute;
    inset: 0;
    background-image: 
        radial-gradient(circle at 10% 20%, rgba(255,255,255,0.05) 0%, transparent 20%),
        radial-gradient(circle at 90% 80%, rgba(255,255,255,0.05) 0%, transparent 20%);
    z-index: 1;
}

.text-white { color: white !important; }
.border-white { border-color: rgba(255,255,255,0.3) !important; }
.hover-white:hover { background: white !important; color: var(--primary-blue) !important; }

/* --- Responsive Adjustments --- */
@media (max-width: 992px) {
    .bento-grid-modern {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
    }
    
    .vision-card { grid-column: span 2; }
    .trust-card { grid-column: span 1; grid-row: span 1; min-height: 280px; }
    .team-card { grid-column: span 1; }
    .map-card { grid-column: span 1; }
    .service-card { grid-column: span 2; } /* Stretch service on tablet */
}

@media (max-width: 768px) {
    .story-grid {
        grid-template-columns: 1fr;
    }

    .collage-wrapper {
        max-width: 500px;
        margin: 0 auto;
    }
    
    .bento-grid-modern {
        grid-template-columns: 1fr;
    }
    
    .vision-card, .trust-card, .team-card, .map-card, .service-card {
        grid-column: span 1;
        grid-row: auto;
    }

    .hero-title-modern {
        font-size: 2.5rem;
    }
}
```

## File: pages/Services.css

- Extension: .css
- Language: unknown
- Size: 8593 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-27 16:39:04

### Code

```unknown
/* ========================================
   PREMIUM SERVICES PAGE STYLES
   ======================================== */

.services-page-premium {
    background-color: var(--bg-secondary);
    overflow-x: hidden;
    padding-bottom: var(--spacing-2xl);
}

/* --- Modern Hero Section --- */
.services-hero-modern {
    position: relative;
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #004B87 0%, #002b4d 100%);
    overflow: hidden;
    padding-top: 80px; /* Space for navbar */
    margin-bottom: -60px; /* Overlap with filter bar */
}

.hero-bg-layer {
    position: absolute;
    inset: 0;
    overflow: hidden;
}

.hero-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.4;
}

.blob-1 {
    width: 400px;
    height: 400px;
    background: var(--primary-light);
    top: -100px;
    right: -100px;
    animation: floatBlob 10s infinite ease-in-out;
}

.blob-2 {
    width: 300px;
    height: 300px;
    background: var(--accent-amber);
    bottom: 0;
    left: -50px;
    opacity: 0.2;
    animation: floatBlob 15s infinite ease-in-out reverse;
}

@keyframes floatBlob {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(30px, -30px); }
}

.hero-content-center {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}

.hero-badge-pill {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    color: var(--accent-amber);
    font-weight: 700;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    backdrop-filter: blur(5px);
}

.hero-title-lg {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    color: white;
    line-height: 1.2;
    margin-bottom: 1.5rem;
}

.text-gradient-gold {
    background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-desc-lg {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.7;
    max-width: 600px;
    margin: 0 auto;
}

.hero-wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.hero-wave svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 80px;
}

.hero-wave .shape-fill {
    fill: var(--bg-secondary);
}

/* --- Sticky Filter Bar --- */
.filter-sticky-wrapper {
    position: sticky;
    top: 90px; /* Adjust based on navbar height */
    z-index: 50;
    margin-bottom: var(--spacing-xl);
    padding: 0 var(--spacing-md);
}

.filter-glass-bar {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: var(--radius-full);
    padding: 0.75rem;
    box-shadow: 0 10px 30px -10px rgba(0, 75, 135, 0.15);
    max-width: 1000px;
    margin: 0 auto;
}

.filter-scroll-container {
    display: flex;
    gap: 0.75rem;
    overflow-x: auto;
    padding-bottom: 2px;
    justify-content: center;
    scrollbar-width: none; /* Firefox */
}

.filter-scroll-container::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
}

.filter-pill {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    border-radius: var(--radius-full);
    border: 1px solid transparent;
    background: transparent;
    color: var(--text-secondary);
    font-weight: 600;
    font-size: 0.95rem;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: var(--font-body);
}

.filter-pill:hover {
    background: rgba(8, 145, 178, 0.05);
    color: var(--primary-cyan);
}

.filter-pill.active {
    background: var(--primary-blue);
    color: white;
    box-shadow: 0 4px 12px rgba(0, 75, 135, 0.2);
}

.filter-icon {
    font-size: 1.1rem;
    display: flex;
    align-items: center;
}

/* --- Services Grid --- */
.services-grid-section {
    min-height: 400px;
}

.results-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding: 0 1rem;
}

.results-header h3 {
    font-size: 1rem;
    color: var(--text-secondary);
    font-weight: 500;
}

.clear-filter {
    background: none;
    border: none;
    color: var(--primary-cyan);
    font-weight: 700;
    cursor: pointer;
    font-size: 0.9rem;
}

.services-grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 2rem;
}

.empty-state-modern {
    text-align: center;
    padding: 4rem;
    color: var(--text-muted);
    background: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    grid-column: 1 / -1;
}

/* --- Process Section --- */
.process-section {
    padding: 4rem 0;
    background: white;
    position: relative;
}

.process-steps {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 4rem;
    position: relative;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
}

.process-step {
    flex: 1;
    text-align: center;
    position: relative;
    z-index: 2;
    padding: 0 1rem;
}

.step-number {
    font-size: 4rem;
    font-weight: 800;
    color: rgba(8, 145, 178, 0.05);
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
}

.step-icon {
    width: 70px;
    height: 70px;
    background: white;
    border: 2px solid var(--bg-tertiary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    color: var(--primary-cyan);
    margin: 0 auto 1.5rem;
    box-shadow: var(--shadow-lg);
    transition: all 0.3s ease;
}

.process-step:hover .step-icon {
    border-color: var(--primary-cyan);
    transform: scale(1.1);
}

.process-line {
    flex: 1;
    height: 2px;
    background: var(--bg-tertiary);
    margin-top: 35px; /* Aligns with center of icons */
    position: relative;
}

.process-step h3 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    color: var(--text-primary);
}

.process-step p {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.6;
}

/* --- Premium CTA --- */
.premium-cta-wrapper {
    padding: 4rem 0;
}

.premium-cta-card {
    background: var(--primary-dark);
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    color: white;
    text-align: center;
    padding: 5rem 2rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.cta-bg-image {
    position: absolute;
    inset: 0;
    z-index: 1;
}

.cta-bg-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.cta-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(0, 75, 135, 0.85), rgba(15, 23, 42, 0.95));
}

.cta-content-inner {
    position: relative;
    z-index: 2;
    max-width: 700px;
    margin: 0 auto;
}

.cta-content-inner h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: white;
}

.cta-content-inner p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2.5rem;
}

.cta-actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

/* --- Responsive --- */
@media (max-width: 992px) {
    .services-grid-layout {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .process-steps {
        flex-direction: column;
        gap: 3rem;
    }
    
    .process-line {
        display: none;
    }
    
    .hero-title-lg {
        font-size: 3rem;
    }
}

@media (max-width: 768px) {
    .filter-scroll-container {
        justify-content: flex-start;
        padding-bottom: 10px;
    }
    
    .services-grid-layout {
        grid-template-columns: 1fr;
    }
    
    .results-header {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
    
    .hero-title-lg {
        font-size: 2.5rem;
    }
    
    .cta-content-inner h2 {
        font-size: 2rem;
    }
}
```

## File: pages/Destinations.css

- Extension: .css
- Language: unknown
- Size: 12314 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-20 16:45:05

### Code

```unknown
.destinations-page {
    /* Removed padding-top to allow hero to start at top of screen behind navbar */
    overflow-x: hidden;
}

/* ========================================
   ENHANCED DESTINATIONS HERO SECTION
   ======================================== */

.destinations-hero {
    position: relative;
    min-height: 85vh;
    /* Increased height for better impact */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* Updated background to image as requested */
    background-image: url('/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* Removed solid gradient background */
    overflow: hidden;
    padding: max(8rem, env(safe-area-inset-top)) var(--spacing-md) max(3rem, env(safe-area-inset-bottom));
    /* Performance optimization */
    contain: layout style paint;
}

.destinations-hero-overlay {
    position: absolute;
    inset: 0;
    /* Darker overlay for better text readability over image */
    background: linear-gradient(to bottom,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.5) 50%,
            rgba(0, 54, 97, 0.8) 100%);
    z-index: 1;
}

.destinations-hero-pattern {
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.4;
    z-index: 1;
}

.destinations-hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-md);
}

/* Hero Badge */
.destinations-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1.5rem;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: var(--radius-full);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    font-size: clamp(0.875rem, 2vw, 1rem);
    font-weight: 600;
    font-family: var(--font-heading);
    min-height: 44px;
    /* Touch target optimization */
}

.destinations-hero-badge svg {
    font-size: 1.1em;
}

/* Hero Title with Animated Underline */
.destinations-title-wrapper {
    position: relative;
    margin: var(--spacing-sm) 0;
}

.destinations-hero-title {
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    font-weight: 800;
    color: white;
    line-height: 1.2;
    margin: 0;
    font-family: var(--font-heading);
    position: relative;
    display: inline-block;
    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}

.destinations-title-underline {
    position: absolute;
    bottom: -0.5rem;
    right: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--accent-amber), transparent);
    transform-origin: right;
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(245, 158, 11, 0.5);
}

/* Sliding Text Animation (RTL) */
.destinations-sliding-text-wrapper {
    width: 100%;
    overflow: hidden;
    margin: var(--spacing-md) 0;
    position: relative;
    mask-image: linear-gradient(to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%);
    -webkit-mask-image: linear-gradient(to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%);
}

.destinations-sliding-text {
    display: flex;
    gap: 1.5rem;
    width: max-content;
    animation: slide-text-rtl 40s linear infinite;
    will-change: transform;
    transform: translateZ(0);
    backface-visibility: hidden;
}

@keyframes slide-text-rtl {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.sliding-word {
    display: inline-block;
    padding: 0.5rem 1.25rem;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--radius-full);
    color: white;
    font-size: clamp(0.9rem, 2.5vw, 1.1rem);
    font-weight: 600;
    white-space: nowrap;
    flex-shrink: 0;
    font-family: var(--font-heading);
    transition: all 0.3s ease;
}

.sliding-word:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
}

/* Hero Subtitle */
.destinations-hero-subtitle {
    font-size: clamp(1rem, 3vw, 1.5rem);
    color: rgba(255, 255, 255, 0.95);
    line-height: 1.6;
    max-width: 600px;
    margin: 0;
    font-family: var(--font-body);
    text-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
}

/* CTA Button */
.destinations-hero-cta {
    margin-top: var(--spacing-md);
}

.destinations-cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2.5rem;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: var(--radius-full);
    color: white;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    font-weight: 700;
    font-family: var(--font-heading);
    text-decoration: none;
    transition: all var(--transition-base);
    min-height: 52px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
}

.destinations-cta-button::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
    opacity: 0;
    transition: opacity var(--transition-base);
}

.destinations-cta-button:hover::before {
    opacity: 1;
}

.destinations-cta-button:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.destinations-cta-button:active {
    transform: translateY(0);
}

.destinations-cta-button svg {
    transition: transform var(--transition-base);
}

.destinations-cta-button:hover svg {
    transform: translateX(-4px);
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
    .destinations-sliding-text {
        animation: none;
        justify-content: center;
        flex-wrap: wrap;
    }

    .destinations-title-underline {
        animation: none;
        transform: scaleX(1);
    }

    .destinations-cta-button:hover {
        transform: none;
    }
}

/* Mobile Optimizations */
@media (max-width: 767px) {
    .destinations-hero {
        min-height: 60vh;
        padding: max(2rem, env(safe-area-inset-top)) var(--spacing-sm) max(2rem, env(safe-area-inset-bottom));
    }

    .destinations-hero-content {
        gap: var(--spacing-sm);
    }

    .destinations-sliding-text {
        gap: 1rem;
    }

    .sliding-word {
        padding: 0.4rem 1rem;
    }

    .destinations-hero-decoration {
        width: 80px;
        height: 80px;
        bottom: -1rem;
    }
}

/* Touch Device Optimizations */
@media (hover: none) and (pointer: coarse) {
    .destinations-hero-badge {
        min-height: 44px;
    }

    .sliding-word {
        min-height: 44px;
        display: inline-flex;
        align-items: center;
    }
}

.destinations-grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: var(--spacing-lg);
}

.destination-card-full {
    background: var(--bg-primary);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
    height: 100%;
}

.destination-card-full:hover {
    transform: translateY(-12px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(8, 145, 178, 0.2);
}

.dest-img-wrapper {
    position: relative;
    height: 240px;
    overflow: hidden;
}

.dest-full-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.destination-card-full:hover .dest-full-img {
    transform: scale(1.15);
}

.dest-overlay-gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
}

.destination-card-full:hover .dest-overlay-gradient {
    opacity: 1;
}

.dest-duration-badge {
    position: absolute;
    top: var(--spacing-md);
    right: var(--spacing-md);
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: var(--text-primary);
    padding: 8px 14px;
    border-radius: var(--radius-full);
    font-weight: 600;
    font-size: var(--font-sm);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.3s ease;
}

.destination-card-full:hover .dest-duration-badge {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.05);
}

.dest-badge-icon {
    font-size: 14px;
    color: var(--primary-cyan);
}

.dest-content {
    padding: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.dest-header {
    margin-bottom: var(--spacing-md);
}

.dest-title {
    font-size: var(--font-xl);
    color: var(--text-primary);
    margin: 0 0 6px 0;
    font-weight: 700;
    line-height: 1.3;
}

.dest-country {
    font-size: var(--font-sm);
    color: var(--primary-cyan);
    font-weight: 600;
    display: block;
    margin-top: 4px;
}

.dest-desc {
    font-size: var(--font-base);
    color: var(--text-secondary);
    margin-bottom: var(--spacing-md);
    line-height: 1.6;
}

.dest-features {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.dest-feature-tag {
    background: linear-gradient(135deg, rgba(8, 145, 178, 0.1) 0%, rgba(14, 116, 144, 0.1) 100%);
    color: var(--primary-cyan);
    padding: 6px 12px;
    border-radius: var(--radius-sm);
    font-size: var(--font-xs);
    font-weight: 600;
    border: 1px solid rgba(8, 145, 178, 0.15);
    transition: all 0.2s ease;
}

.dest-feature-tag:hover {
    background: linear-gradient(135deg, rgba(8, 145, 178, 0.15) 0%, rgba(14, 116, 144, 0.15) 100%);
    border-color: rgba(8, 145, 178, 0.25);
    transform: translateY(-1px);
}

.dest-cta-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: auto;
    padding: 12px 24px;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.dest-cta-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.dest-cta-btn:hover::before {
    width: 300px;
    height: 300px;
}

.dest-cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(8, 145, 178, 0.3);
}

.dest-btn-icon {
    transition: transform 0.3s ease;
}

.dest-cta-btn:hover .dest-btn-icon {
    transform: translateX(-4px);
}

.mt-md {
    margin-top: var(--spacing-md);
}

/* Enhanced card animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.destination-card-full {
    animation: fadeInUp 0.6s ease-out backwards;
}

/* Special styling for Makkah and Madina cards */
.destination-card-full[data-special="true"] {
    border: 2px solid rgba(245, 158, 11, 0.3);
    background: linear-gradient(135deg, var(--bg-primary) 0%, rgba(245, 158, 11, 0.02) 100%);
}

.destination-card-full[data-special="true"]:hover {
    border-color: rgba(245, 158, 11, 0.5);
    box-shadow: 0 12px 40px rgba(245, 158, 11, 0.2);
}
```

## File: data/destinations.js

- Extension: .js
- Language: javascript
- Size: 11216 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-20 22:17:02

### Code

```javascript
// Destinations data
export const popularDestinations = [
    {
        name: "دبي",
        image: "/dubai.jpg",
        price: "تبدأ من 1500 ر.س",
        category: "تسوق وترفيه",

    },
    {
        name: "لندن",
        image: "/london.jpeg",
        price: "تبدأ من 3500 ر.س",
        category: "تاريخ وثقافة",

    },
    {
        name: "المالديف",
        image: "/beach.jpg",
        price: "تبدأ من 4500 ر.س",
        category: "استجمام",

    },
    {
        name: "إسطنبول",
        image: "/istanbul.jpeg",
        price: "تبدأ من 2000 ر.س",
        category: "تاريخ وطبيعة",

    },
    {
        name: "القاهرة",
        image: "/cairo.jpg",
        price: "تبدأ من 1800 ر.س",
        category: "تاريخ وحضارة",

    }
];

export const allDestinations = [
    {
        id: 1,
        name: "دبي",
        country: "الإمارات العربية المتحدة",
        image: "/dubai.jpg",
        description: "دبي هي وجهة عالمية تجمع بين الحداثة المذهلة والتقاليد العربية الأصيلة. من ناطحات السحاب الشاهقة إلى الأسواق التقليدية، تقدم دبي تجربة لا تُنسى لكل زائر.",
        features: ["برج خليفة", "نخلة جميرا", "دبي مول"],
        offeredServices: ["حجوزات فنادق فاخرة", "جولات سياحية خاصة"],
        placesToVisit: ["برج خليفة", "نافورة دبي", "حي الفهيدي التاريخي", "برواز دبي"],
        startingPrice: "1500 ر.س",
        price: "1500 ر.س",

    },
    {
        id: 2,
        name: "إسطنبول",
        country: "تركيا",
        image: "/istanbul.jpeg",
        description: "إسطنبول، المدينة التي تمتد عبر قارتين، هي مزيج ساحر من التاريخ والثقافة. استمتع بجمال البسفور، وروعة المساجد العثمانية، وحيوية البازارات.",
        features: ["آيا صوفيا", "البسفور", "البازار الكبير"],
        offeredServices: ["رحلات بحرية في البسفور", "جولات ثقافية وتاريخية"],
        placesToVisit: ["مسجد السلطان أحمد", "قصر توبكابي", "برج غلطة", "ميدان تقسيم"],
        startingPrice: "2000 ر.س",
        price: "2000 ر.س",

    },
    {
        id: 3,
        name: "المالديف",
        country: "جزر المالديف",
        image: "/beach.jpg",
        description: "المالديف هي الجنة الاستوائية المثالية للباحثين عن الاسترخاء والهدوء. شواطئ رملية بيضاء، مياه فيروزية صافية، ومنتجعات فاخرة فوق الماء.",
        features: ["منتجعات فاخرة", "الغوص", "رحلات بحرية"],
        offeredServices: ["باقات شهر العسل", "أنشطة الغوص والرياضات المائية"],
        placesToVisit: ["جزيرة ماليه", "جزيرة مافوشي", "منتجع أداران", "الشاطئ المضيء"],
        startingPrice: "4500 ر.س",
        price: "4500 ر.س",

    },
    {
        id: 4,
        name: "لندن",
        country: "المملكة المتحدة",
        image: "/london.jpeg",
        description: "لندن هي عاصمة الثقافة والتاريخ، حيث يلتقي الماضي بالحاضر. استكشف القصور الملكية، والمتاحف العالمية، والحدائق الخلابة في واحدة من أعظم مدن العالم.",
        features: ["بيج بن", "قصر باكنغهام", "المتحف البريطاني"],
        offeredServices: ["تذاكر المعالم السياحية", "خدمات النقل والمواصلات"],
        placesToVisit: ["عين لندن", "برج لندن", "هايد بارك", "جسر البرج"],
        startingPrice: "3500 ر.س",
        price: "3500 ر.س",

    },
    {
        id: 5,
        name: "باريس",
        country: "فرنسا",
        image: "/paris.jpg",
        description: "باريس، مدينة الحب والأضواء، تأسر القلوب بجمالها المعماري وفنونها الراقية. استمتع بجولة في الشانزليزيه، وزيارة برج إيفل، وتذوق أشهى المأكولات الفرنسية.",
        features: ["برج إيفل", "متحف اللوفر", "الشانزليزيه"],
        offeredServices: ["جولات رومانسية", "حجوزات مطاعم فاخرة"],
        placesToVisit: ["قوس النصر", "كاتدرائية نوتردام", "حي مونمارتر", "قصر فرساي"],
        startingPrice: "4000 ر.س",
        price: "4000 ر.س",

    },
    {
        id: 6,
        name: "مكة المكرمة",
        country: "المملكة العربية السعودية",
        image: "/hero_makkah_background_1764893075599.jpg",
        description: "مكة المكرمة، أقدس مدن الإسلام وقلب العالم الإسلامي. حيث يتجه ملايين المسلمين من كل أنحاء العالم لأداء فريضة الحج والعمرة. تجربة روحانية لا تُنسى في أطهر بقاع الأرض.",
        features: ["الكعبة المشرفة", "المسجد الحرام", "جبل عرفة"],
        offeredServices: ["برامج الحج والعمرة", "حجوزات فنادق قريبة من الحرم", "خدمات الإرشاد"],
        placesToVisit: ["الكعبة المشرفة", "المسجد الحرام", "جبل النور", "غار حراء", "جبل عرفة"],
        startingPrice: "1000 ر.س",
        price: "1000 ر.س",

    },
    {
        id: 7,
        name: "المدينة المنورة",
        country: "المملكة العربية السعودية",
        image: "/almadina.jpg",
        description: "المدينة المنورة، مدينة النبي صلى الله عليه وسلم، ثاني أقدس مدن الإسلام. حيث يزور المسلمون المسجد النبوي الشريف وروضة الشريف. تجربة روحانية عميقة في أرض الهجرة النبوية.",
        features: ["المسجد النبوي", "قبر النبي", "جبل أحد"],
        offeredServices: ["برامج العمرة", "زيارة المسجد النبوي", "جولات تاريخية"],
        placesToVisit: ["المسجد النبوي الشريف", "روضة الشريف", "جبل أحد", "مسجد قباء", "مقبرة البقيع"],
        startingPrice: "1000 ر.س",
        price: "1000 ر.س",

    },
    {
        id: 8,
        name: "القاهرة",
        country: "مصر",
        image: "/cairo.jpg",
        description: "القاهرة، مدينة الألف مئذنة، هي قلب العالم العربي النابض. اكتشف عظمة الأهرامات، وسحر النيل، وعبق التاريخ في خان الخليلي.",
        features: ["الأهرامات", "المتحف المصري", "خان الخليلي"],
        offeredServices: ["رحلات نيلية", "جولات أثرية متخصصة"],
        placesToVisit: ["أهرامات الجيزة", "قلعة صلاح الدين", "شارع المعز", "برج القاهرة"],
        startingPrice: "1800 ر.س",
        price: "1800 ر.س",

    },
    {
        id: 9,
        name: "الرياض",
        country: "المملكة العربية السعودية",
        image: "/Riyadh.jpg",
        description: "الرياض، عاصمة المملكة المتطورة، تجمع بين الأصالة التراثية والحداثة المعمارية. استمتع بفعاليات موسم الرياض، وزيارة الدرعية التاريخية، والتسوق في أرقى المولات.",
        features: ["الدرعية", "بوليفارد الرياض", "المتحف الوطني"],
        offeredServices: ["جولات تراثية", "حجوزات فعاليات ترفيهية"],
        placesToVisit: ["حي الطريف", "برج المملكة", "وادي حنيفة", "منتزه الملك عبدالله"],
        startingPrice: "1200 ر.س",
        price: "1200 ر.س",

    },
    {
        id: 10,
        name: "أديس أبابا",
        country: "إثيوبيا",
        image: "/adisababa.jpg",
        description: "أديس أبابا، الزهرة الجديدة، هي عاصمة إفريقيا الدبلوماسية. تتميز بطبيعتها الخلابة، وثقافتها العريقة، وتاريخها الغني كأرض القهوة الأصلية.",
        features: ["المتحف الوطني", "جبل إنتوتو", "سوق ميركاتو"],
        offeredServices: ["رحلات استكشاف الطبيعة", "تجربة القهوة الإثيوبية"],
        placesToVisit: ["كاتدرائية الثالوث القدوس", "ميدان مسكل", "حديقة الوحدة", "متحف الإثنوجرافيا"],
        startingPrice: "2500 ر.س",
        price: "2500 ر.س",

    },
    {
        id: 11,
        name: "نيودلهي",
        country: "الهند",
        image: "/delhi.jpg",
        description: "نيودلهي هي مدينة التناقضات المدهشة، حيث تتعايش المعالم التاريخية القديمة مع ناطحات السحاب الحديثة. استمتع بألوان الهند، ونكهاتها، وتراثها الغني.",
        features: ["تاج محل", "بوابة الهند", "القلعة الحمراء"],
        offeredServices: ["جولات في المثلث الذهبي", "تجارب طعام محلية"],
        placesToVisit: ["قطب منار", "معبد اللوتس", "جامع مسجد", "حدائق لودهي"],
        startingPrice: "2800 ر.س",
        price: "2800 ر.س",

    },
    {
        id: 12,
        name: "كوالالمبور",
        country: "ماليزيا",
        image: "/hero-bg.jpg",
        description: "كوالالمبور هي جوهرة جنوب شرق آسيا، مدينة نابضة بالحياة تجمع بين الثقافات المتعددة. من أبراج بتروناس الشهيرة إلى الكهوف الطبيعية، تقدم ماليزيا تجربة سياحية متكاملة.",
        features: ["أبراج بتروناس", "كهوف باتو", "مرتفعات جنتنج"],
        offeredServices: ["باقات عائلية", "رحلات للجزر الاستوائية"],
        placesToVisit: ["حديقة الطيور", "ميدان ميرديكا", "شارع العرب (بوكيت بينتانج)", "اكواريوم KLCC"],
        startingPrice: "3200 ر.س",
        price: "3200 ر.س",

    }
];

```

## File: data/faq.js

- Extension: .js
- Language: javascript
- Size: 1449 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```javascript
// FAQ data
export const faqs = [
    {
        question: "كيف يمكنني حجز رحلة؟",
        answer: "يمكنك حجز رحلتك بسهولة عن طريق التواصل معنا عبر الواتساب أو زيارة مكتبنا. قريباً سنوفر خدمة الحجز المباشر عبر الموقع."
    },
    {
        question: "هل توفرون عروضاً خاصة للعائلات؟",
        answer: "نعم، لدينا باقات مخصصة للعائلات تشمل تذاكر الطيران، الإقامة، والجولات السياحية بأسعار مميزة."
    },
    {
        question: "ما هي طرق الدفع المتاحة؟",
        answer: "نقبل الدفع نقداً، التحويل البنكي، والبطاقات الائتمانية (فيزا/ماستركارد)."
    },
    {
        question: "هل يمكنني تعديل أو إلغاء الحجز؟",
        answer: "نعم، يخضع التعديل والإلغاء لسياسة الشروط والأحكام الخاصة بكل رحلة. يرجى التواصل مع خدمة العملاء للمساعدة."
    },
    {
        question: "هل تشمل الباقات التأمين الطبي؟",
        answer: "بعض الباقات تشمل التأمين الطبي الدولي. يرجى التحقق من تفاصيل الباقة أو سؤال موظف الحجز."
    }
];

```

## File: data/testimonials.js

- Extension: .js
- Language: javascript
- Size: 1517 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```javascript
// Testimonials data
export const testimonials = [
    {
        name: "أحمد السعيد",
        rating: 5,
        text: "تجربة رائعة من البداية للنهاية. الفريق محترف جداً والخدمة ممتازة. أنصح الجميع بالتعامل معهم.",
        location: "الرياض، السعودية"
    },
    {
        name: "فاطمة محمد",
        rating: 5,
        text: "حجزت معهم رحلة شهر العسل للمالديف وكانت تجربة لا تُنسى. كل التفاصيل كانت مرتبة بشكل مثالي.",
        location: "جدة، السعودية"
    },
    {
        name: "خالد العتيبي",
        rating: 4.5,
        text: "خدمة سريعة وأسعار منافسة. استخدمت خدماتهم عدة مرات وكانت تجربتي دائماً إيجابية.",
        location: "الدمام، السعودية"
    },
    {
        name: "نورة المطيري",
        rating: 5,
        text: "أفضل وكالة سفر تعاملت معها. الموظفون متعاونون جداً ويقدمون استشارات قيمة.",
        location: "الكويت"
    },
    {
        name: "محمد الشمري",
        rating: 5,
        text: "حجزت رحلة عمرة لعائلتي وكانت التجربة رائعة. كل شيء كان منظم بشكل ممتاز.",
        location: "مكة المكرمة، السعودية"
    }
];

```

## File: data/index.js

- Extension: .js
- Language: javascript
- Size: 118 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```javascript
// Re-export all data
export * from './services';
export * from './destinations';
export * from './testimonials';

```

## File: data/services.js

- Extension: .js
- Language: javascript
- Size: 20760 bytes
- Created: 2025-12-28 00:39:35
- Modified: 2025-12-28 00:39:35

### Code

```javascript
// Services data - Highlights (Updated to include new services)
export const services = [
    {
        title: "تفاويض العمالة (مساند)",
        description: "توثيق واعتماد تفاويض التأشيرات عبر منصة مساند بكل سهولة وسرعة.",
        icon: "📋",
        features: ["توثيق فوري", "ربط آلي بمساند", "دعم فني"],
        link: "/services"
    },
    {
        title: "تأشيرات الزيارة العائلية",
        description: "تسهيل استخراج تأشيرات الزيارة للأقارب من الدرجة الأولى لجمع شمل العائلة.",
        icon: "🤝",
        features: ["مراجعة المستندات", "إنجاز سريع", "نسبة قبول عالية"],
        link: "/services"
    },
    {
        title: "استقدام الأيدي العاملة",
        description: "توفير وتخليص معاملات الكوادر المهنية لمختلف التخصصات بترخيص رسمي رقم 19.",
        icon: "👷",
        features: ["كوادر مؤهلة", "إجراءات نظامية", "خبرة واسعة"],
        link: "/services"
    }
];

export const allServices = [
    /** --- NEW SERVICES ADDED --- **/
    {
        title: "تفاويض العمالة عبر مساند",
        tagline: "توثيق واعتماد التفاويض الرسمية للعمالة المنزلية",
        description: "نقدم خدمة توثيق تفاويض تأشيرات العمالة المنزلية عبر منصة مساند بدقة وعناية.",
        detailedDescription: "بصفتنا مكتباً معتمداً، نضمن لك إنهاء جميع إجراءات تفاويض العمالة عبر منصة مساند وتسهيل عملية الربط مع مكاتب الاستقدام الخارجية لضمان وصول عمالتك في أسرع وقت ممكن وبكل احترافية.",
        icon: "FiFileText",
        features: [
            "إصدار التفاويض الإلكترونية",
            "الربط مع منصة مساند",
            "متابعة حالة الطلب",
            "إنهاء الإجراءات القانونية",
            "دعم فني للمستفيدين"
        ],
        category: "musaned"
    },
    {
        title: "تأشيرات الزيارة العائلية",
        tagline: "تخليص تأشيرات الزيارة للأقارب من الدرجة الأولى",
        description: "تسهيل إجراءات استخراج تأشيرات الزيارة لجمع شمل العائلة داخل المملكة.",
        detailedDescription: "نتولى كافة إجراءات استخراج تأشيرات الزيارة العائلية للأقارب من الدرجة الأولى (الزوجة، الأبناء، والوالدين)، مع مراجعة دقيقة لكافة المستندات المطلوبة لضمان قبول الطلب وسرعة التنفيذ لدى الجهات المختصة.",
        icon: "FiUsers",
        features: [
            "تجهيز ملف الطلب",
            "مراجعة شروط القرابة",
            "تقديم الطلب إلكترونياً",
            "متابعة صدور التأشيرة",
            "استشارات نظامية مجانية"
        ],
        category: "visa"
    },
    {
        title: "خدمات الأيدي العاملة",
        tagline: "توفير واستقدام الكوادر المهنية المتخصصة",
        description: "تخليص معاملات الأيدي العاملة لمختلف المهن بموجب ترخيص رقم 19.",
        detailedDescription: "نعمل بموجب الترخيص الرسمي رقم (19) لنقدم لأصحاب العمل حلولاً موثوقة في استقطاب الكفاءات المهنية وتسهيل إجراءات استقدامهم، مع ضمان مطابقة كافة الإجراءات للقوانين واللوائح التنظيمية المعمول بها.",
        icon: "FiBriefcase",
        features: [
            "استقدام المهن الفنية",
            "استقدام المهن الإدارية",
            "تسهيل إجراءات الإقامة",
            "فحص مهني معتمد",
            "حلول شاملة للشركات"
        ],
        category: "manpower"
    },
    {
        title: "تأشيرات الإقامة العائلية",
        tagline: "استقدام الزوجة والأبناء للإقامة الدائمة",
        description: "نساعدك في إجراءات استقدام عائلتك للإقامة الدائمة في المملكة العربية السعودية.",
        detailedDescription: "نوفر الدعم الكامل في تقديم طلبات الإقامة للزوجة والأبناء، ومتابعة كافة الخطوات النظامية لربطها بإقامة رب الأسرة، لضمان استقرار عائلتك بجانبك بيسر وسهولة وتجاوز أي عقبات إدارية.",
        icon: "FiUserCheck",
        features: [
            "تقديم طلبات الاستقدام",
            "ربط الملفات العائلية",
            "متابعة الفحص الطبي",
            "إصدار الإقامات الدائمة",
            "تحديث بيانات المرافقين"
        ],
        category: "residency"
    },

    /** --- PREVIOUS SERVICES MAINTAINED --- **/
    {
        title: "حجوزات الطيران",
        tagline: "حجز وإصدار التذاكر الداخلية والدولية",
        description: "تشمل هذه الخدمة حجز وإصدار التذاكر الداخلية والدولية والتأكيد على المقاعد لجميع شركات الطيران",
        detailedDescription: "تشمل هذه الخدمة حجز وإصدار التذاكر الداخلية والدولية والتأكيد على المقاعد لجميع شركات الطيران وتعديل التذاكر عند الحاجة كما اننا نحرص على تقديم أفضل جودة بأقل سعر ممكن ولدينا أنظمة خصومات خاصة للمجموعات واستئجار الطائرات الخاصة.",
        icon: "TbPlane",
        features: [
            "حجز وإصدار التذاكر الداخلية والدولية",
            "التأكيد على المقاعد لجميع شركات الطيران",
            "تعديل التذاكر عند الحاجة",
            "أفضل جودة بأقل سعر ممكن",
            "أنظمة خصومات خاصة للمجموعات",
            "استئجار الطائرات الخاصة"
        ],
        category: "flights"
    },
    {
        title: "حجوزات الفنادق",
        tagline: "فنادق ومنتجعات وشقق فندقية وفلل خاصة",
        description: "تتوفر لدينا حجوزات الفنادق وحجوزات المنتجعات وحجوزات الشقق الفندقية وحجوزات الفلل الخاصة",
        detailedDescription: "تتوفر لدينا حجوزات الفنادق وحجوزات المنتجعات وحجوزات الشقق الفندقية وحجوزات الفلل الخاصة وتنفيذ ترقية مجانية إلى جناح لكبار الضيوف وأيضا تتوفر لدينا خدمة الغرف لكبار الضيوف وتتوفر خدمة الغسيل لكبار الضيوف وتتوفر ايضاً خدمة السبا للكبار الضيوف.",
        icon: "TbBuilding",
        features: [
            "حجوزات الفنادق والمنتجعات",
            "حجوزات الشقق الفندقية",
            "حجوزات الفلل الخاصة",
            "ترقية مجانية إلى جناح لكبار الضيوف",
            "خدمة الغرف والغسيل والسبا لكبار الضيوف"
        ],
        category: "hotels"
    },
    {
        title: "حجوزات السيارات",
        tagline: "تأجير السيارات والحافلات والاستقبال من المطار",
        description: "تشمل هذه الخدمة تأجير السيارات بكافة أنواعها والاستقبال والتوديع من المطار",
        detailedDescription: "تشمل هذه الخدمة تأجير السيارات بكافة أنواعها والاستقبال والتوديع من المطار وتأجير السيارة بسائق خاص وتأجير الحافلات وتشمل أيضا تذاكر القطار الدولية كما أنه يتوفر سعر خاص للمجموعات.",
        icon: "TbBus",
        features: [
            "تأجير السيارات بكافة أنواعها",
            "الاستقبال والتوديع من المطار",
            "تأجير السيارة بسائق خاص",
            "تأجير الحافلات",
            "تذاكر القطار الدولية",
            "سعر خاص للمجموعات"
        ],
        category: "transport"
    },
    {
        title: "إصدار التأشيرات والفيز والرخص الدولية",
        tagline: "خدمات استخراج التأشيرات والرخص الدولية",
        description: "تشمل هذه الخدمة تعبئة نماذج الإصدار وإصدار التأشيرات السياحية والتعليمية والعمل",
        detailedDescription: "تشمل هذه الخدمة تعبئة نماذج الإصدار وإصدار التأشيرات السياحية والتعليمية و العمل وزيارة التجارية لأي دولة خارجية واستقبال مقدم الطلب أمام السفارة وحجز موعد البصمة واستلام الجواز بعد الإصدار وتوصيل الجواز.",
        icon: "FiGlobe",
        features: [
            "تعبئة نماذج الإصدار",
            "إصدار التأشيرات السياحية والتعليمية والعمل",
            "تأشيرات زيارة تجارية لأي دولة",
            "استقبال مقدم الطلب أمام السفارة",
            "حجز موعد البصمة",
            "استلام الجواز بعد الإصدار وتوصيله"
        ],
        category: "visa"
    },
    {
        title: "الترجمات المعتمدة",
        tagline: "ترجمة معتمدة لجميع المستندات الرسمية",
        description: "تشمل ترجمة من العربية الي الإنجليزية ومن الإنجليزية الي الصينة",
        detailedDescription: "تشمل ترجمة من العربية الي الإنجليزية ومن الإنجليزية الي الصينة ترجمات عقود الزواج -سجلات العائله -الوثائق والمستندات بشتي أنواعها",
        icon: "TbLanguage",
        features: [
            "ترجمة من العربية إلى الإنجليزية",
            "ترجمة من الإنجليزية إلى الصينية",
            "ترجمة عقود الزواج",
            "ترجمة سجلات العائلة",
            "ترجمة الوثائق والمستندات بشتى أنواعها"
        ],
        category: "translation"
    },
    {
        title: "الحج والعمرة",
        tagline: "برامج متكاملة للحج والعمرة مع أفضل الخدمات",
        description: "تشمل هذه الخدمة النقل الأرضي والسكن والإعاشة في مكة المكرمة والمدينة المنورة",
        detailedDescription: "تشمل هذه الخدمة النقل الأرضي والسكن والإعاشة في مكة المكرمة والمدينة المنورة كما تشمل السكن والإعاشة في مشعل عرفات ومزدلفة ومنى وتشمل أيضا حجوزات الطيران وتشغيل مركز إعلامي وتقنية المعلومات والخدمات الطبية والمترجمين.",
        icon: "TbBuildingMosque",
        features: [
            "النقل الأرضي والسكن والإعاشة في مكة والمدينة",
            "السكن والإعاشة في مشعل عرفات ومزدلفة ومنى",
            "حجوزات الطيران",
            "تشغيل مركز إعلامي وتقنية المعلومات",
            "الخدمات الطبية والمترجمين"
        ],
        category: "hajj"
    },
    {
        title: "خدمات الدراسة بالخارج",
        tagline: "تنسيق دراسة البكالوريوس والدراسات العليا ودراسة اللغات",
        description: "تشمل هذه الخدمة تنسيق دراسة البكالوريوس والدراسات العليا ودراسة اللغات المختلفة",
        detailedDescription: "تشمل هذه الخدمة تنسيق دراسة البكالوريوس والدراسات العليا ودراسة اللغات المختلفة حول العالم سواء اللغة الإنجليزية أو الصينية أو الفرنسية وغيرها من اللغات العالمية.",
        icon: "FiFileText",
        features: [
            "تنسيق دراسة البكالوريوس",
            "تنسيق الدراسات العليا",
            "دراسة اللغة الإنجليزية",
            "دراسة اللغة الصينية",
            "دراسة اللغة الفرنسية",
            "دراسة اللغات العالمية الأخرى"
        ],
        category: "education"
    },
    {
        title: "الرحلات العلاجية",
        tagline: "خدمات الرحلات العلاجية للرعاية الطبية عالية الجودة",
        description: "نحن نقدم خدمات الرحلات العلاجية للعملاء الذين يسعون للحصول على الرعاية الطبية",
        detailedDescription: "نحن نقدم خدمات الرحلات العلاجية للعملاء الذين يسعون للحصول على الرعاية الطبية عالية الجودة في وجهات سياحية.",
        icon: "FiMap",
        features: [
            "تنسيق الرحلات العلاجية",
            "الرعاية الطبية عالية الجودة",
            "وجهات سياحية علاجية",
            "تنسيق كامل للرحلة العلاجية"
        ],
        category: "medical"
    },
    {
        title: "المعارض و المؤتمرات",
        tagline: "فريق خاص لتنظيم المعارض والمؤتمرات",
        description: "تشمل هذه الخدمة تقديم فريق خاص لتنظيم المعارض والمؤتمرات",
        detailedDescription: "تشمل هذه الخدمة تقديم فريق خاص لتنظيم المعارض والمؤتمرات ولحجز القاعات واستقبال منسوبي المعرض أو المؤتمر واستقبال الضيوف من المطار وتوزيع الدعوات ومرافقة كبار الشخصيات وتنسيق الطاولات وأيضا تتوفر لدينا خدمة تنظيم الوجبات الساخنة والخفيفة وطاقم للمرافقة خارج الجمهورية وترتيب السكن والنقل والدعم اللوجيستي وتسهيل كافة إجراءات السفر وتقديم الدعم والتوثيق الإعلامي.",
        icon: "FiAward",
        features: [
            "فريق خاص لتنظيم المعارض والمؤتمرات",
            "حجز القاعات",
            "استقبال منسوبي المعرض أو المؤتمر",
            "استقبال الضيوف من المطار",
            "توزيع الدعوات ومرافقة كبار الشخصيات",
            "تنظيم الوجبات الساخنة والخفيفة",
            "طاقم للمرافقة خارج الجمهورية",
            "ترتيب السكن والنقل والدعم اللوجيستي",
            "الدعم والتوثيق الإعلامي"
        ],
        category: "events"
    },
    {
        title: "برامج سياحية متنوعة",
        tagline: "تنسيق برامج سياحية داخلية ودولية",
        description: "لدينا تنسيق برامج سياحية داخلية ودولية مع الجولات السياحية",
        detailedDescription: "لدينا تنسيق برامج سياحية داخلية ودولية مع الجولات السياحية والاستقبال والتوديع في جميع مطارات العالم و شرائح الجوال الدولية وأيضا تتوفر لدينا خدمة إصدار الرخصة الدولية والبرامج العلاجية.",
        icon: "TbMap",
        features: [
            "برامج سياحية داخلية ودولية",
            "الجولات السياحية",
            "الاستقبال والتوديع في جميع مطارات العالم",
            "شرائح الجوال الدولية",
            "إصدار الرخصة الدولية",
            "البرامج العلاجية"
        ],
        category: "tours"
    },
    {
        title: "السياحة الداخلية",
        tagline: "حجوزات الفنادق والمواصلات ورحلات المزارات السياحية",
        description: "تشمل هذه الخدمة حجوزات الفنادق والمواصلات ورحلات المزارات السياحية",
        detailedDescription: "تشمل هذه الخدمة حجوزات الفنادق والمواصلات ورحلات المزارات السياحية ورحلات المغامرات وخدمة المرشد السياحي.",
        icon: "TbMap",
        features: [
            "حجوزات الفنادق",
            "المواصلات",
            "رحلات المزارات السياحية",
            "رحلات المغامرات",
            "خدمة المرشد السياحي"
        ],
        category: "domestic"
    },
    {
        title: "خدمات التاشيرات",
        tagline: "فيز عمل وتأشيرات حج وعمرة وسياحية",
        description: "فيز عمل السعوديه وتأشيرات حج وعمره وسياحيه",
        detailedDescription: "فيز عمل السعوديه -تاشيرات حج وعمره وسياحيه -دعوات تجارية وحكوميه الصين – موافقات امنيه كلا من القاهره والأردن – فيز علاجية الي الهند …..",
        icon: "FiGlobe",
        features: [
            "فيز عمل السعودية",
            "تأشيرات حج وعمرة وسياحية",
            "دعوات تجارية وحكومية للصين",
            "موافقات أمنية من القاهرة والأردن",
            "فيز علاجية إلى الهند"
        ],
        category: "visa"
    },
    {
        title: "رحلات بحرية",
        tagline: "رحلات كروز فاخرة لأجمل الوجهات البحرية",
        description: "رحلات كروز فاخرة لأجمل الوجهات البحرية",
        detailedDescription: "استمتع برحلات كروز فاخرة إلى أجمل الوجهات البحرية في العالم. نقدم لك مجموعة متنوعة من الرحلات البحرية على سفن فاخرة مجهزة بجميع وسائل الراحة والترفيه. من رحلات قصيرة إلى رحلات طويلة، اكتشف وجهات متعددة في رحلة واحدة مع ترفيه متكامل وخدمات راقية.",
        icon: "TbShip",
        features: [
            "سفن فاخرة مجهزة بأحدث المرافق",
            "وجهات متعددة في رحلة واحدة",
            "ترفيه متكامل وخدمات راقية",
            "باقات شاملة تشمل الطعام والأنشطة",
            "رحلات مناسبة لجميع الأعمار"
        ],
        category: "cruises"
    }
];
```

## File: constants/routes.js

- Extension: .js
- Language: javascript
- Size: 509 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```javascript
// Application routes
export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    SERVICES: '/services',
    DESTINATIONS: '/destinations',
    CONTACT: '/contact'
};

// Navigation links
export const NAV_LINKS = [
    { name: 'الرئيسية', path: ROUTES.HOME },
    { name: 'من نحن', path: ROUTES.ABOUT },
    { name: 'خدماتنا', path: ROUTES.SERVICES },
    { name: 'الوجهات', path: ROUTES.DESTINATIONS },
    { name: 'اتصل بنا', path: ROUTES.CONTACT }
];

```

## File: constants/company.js

- Extension: .js
- Language: javascript
- Size: 1223 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-27 00:03:57

### Code

```javascript
// Contact information
export const CONTACT_INFO = {
   // Add \u202D at the start and \u202C at the end
    phone: "\u202D+967 779 717 177\u202C",
    email: "alnajmpluo@gmail.com",
    whatsapp: "+967 779 717 177",
    address: " صنعاء شارع القدس مقابل السفارة السعودية",
    workingHours: "السبت - الخميس: 9:00 ص - 6:00 م"
};

// Social media links
// TODO: Update these with your actual social media profile URLs
export const SOCIAL_LINKS = {
    facebook: "https://www.facebook.com/profile.php?id=61571202487332#", // Replace with your Facebook page URL
    twitter: "https://twitter.com/your-handle", // Replace with your Twitter/X handle URL
    instagram: "https://www.instagram.com/your-handle", // Replace with your Instagram profile URL
    whatsapp: "https://www.whatsapp.com/your-number" // Replace with your WhatsApp number
};

// Company info
export const COMPANY_INFO = {
    name: "النجم الأزرق للسفريات والسياحة",
    nameEn: "Alnajm Alazrak Travel & Tourism",
    slogan: "سافر إلى حيث تأخذك أحلامك",
    foundedYear: 2010,
    yearsOfExperience: new Date().getFullYear() - 2010
};

```

## File: constants/index.js

- Extension: .js
- Language: javascript
- Size: 83 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```javascript
// Re-export all constants
export * from './routes';
export * from './company';

```

## File: components/layout/index.js

- Extension: .js
- Language: javascript
- Size: 130 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```javascript
// Layout components barrel export
export { default as Navbar } from './Navbar';
export { default as Footer } from './Footer';

```

## File: components/common/Analytics.jsx

- Extension: .jsx
- Language: javascript
- Size: 3332 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```javascript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Analytics component for tracking page views
 * Supports Google Analytics, Facebook Pixel, and custom analytics
 * 
 * Usage:
 * - Add your Google Analytics ID to environment variables: VITE_GA_ID
 * - Add your Facebook Pixel ID to environment variables: VITE_FB_PIXEL_ID
 * - The component will automatically track page views on route changes
 */

const Analytics = () => {
    const location = useLocation();

    useEffect(() => {
        // Track page view on route change
        const path = location.pathname + location.search;
        
        // Google Analytics 4 (gtag)
        if (window.gtag && import.meta.env.VITE_GA_ID) {
            window.gtag('config', import.meta.env.VITE_GA_ID, {
                page_path: path,
            });
        }

        // Google Analytics Universal (ga)
        if (window.ga) {
            window.ga('send', 'pageview', path);
        }

        // Facebook Pixel
        if (window.fbq && import.meta.env.VITE_FB_PIXEL_ID) {
            window.fbq('track', 'PageView');
        }

        // Custom analytics event
        if (window.analytics && typeof window.analytics.track === 'function') {
            window.analytics.track('Page Viewed', {
                path: path,
                title: document.title,
            });
        }

        // Console log in development
        if (import.meta.env.DEV) {
            console.log('Page view tracked:', path);
        }
    }, [location]);

    // Initialize Google Analytics script
    useEffect(() => {
        const gaId = import.meta.env.VITE_GA_ID;
        
        if (gaId && !window.gtag) {
            // Google Analytics 4
            const script1 = document.createElement('script');
            script1.async = true;
            script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
            document.head.appendChild(script1);

            window.dataLayer = window.dataLayer || [];
            function gtag(...args) {
                window.dataLayer.push(args);
            }
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', gaId, {
                page_path: window.location.pathname,
            });
        }
    }, []);

    // Initialize Facebook Pixel
    useEffect(() => {
        const fbPixelId = import.meta.env.VITE_FB_PIXEL_ID;
        
        if (fbPixelId && !window.fbq) {
            !function(f,b,e,v,n,t,s) {
                if(f.fbq)return;
                n=f.fbq=function(){
                    n.callMethod ? n.callMethod.apply(n,arguments):n.queue.push(arguments)
                };
                if(!f._fbq)f._fbq=n;
                n.push=n;
                n.loaded=!0;
                n.version='2.0';
                n.queue=[];
                t=b.createElement(e);
                t.async=!0;
                t.src=v;
                s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
            }(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
            
            window.fbq('init', fbPixelId);
            window.fbq('track', 'PageView');
        }
    }, []);

    return null; // This component doesn't render anything
};

export default Analytics;


```

## File: components/common/ErrorBoundary.jsx

- Extension: .jsx
- Language: javascript
- Size: 7138 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```javascript
import React from 'react';
import { FiAlertCircle, FiRefreshCw, FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false, 
            error: null,
            errorInfo: null 
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log error to console in development only
        if (import.meta.env.DEV) {
            console.error('Error caught by boundary:', error, errorInfo);
        }
        
        // You can also log the error to an error reporting service here
        // Example: logErrorToService(error, errorInfo);
        
        this.setState({
            error,
            errorInfo
        });
    }

    handleReset = () => {
        this.setState({ 
            hasError: false, 
            error: null, 
            errorInfo: null 
        });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <div className="error-boundary-content">
                        <div className="error-boundary-icon">
                            <FiAlertCircle />
                        </div>
                        <h1 className="error-boundary-title">عذراً، حدث خطأ</h1>
                        <p className="error-boundary-message">
                            نعتذر عن الإزعاج. يبدو أن شيئاً ما لم يعمل بشكل صحيح.
                        </p>
                        <div className="error-boundary-actions">
                            <button 
                                onClick={this.handleReset}
                                className="btn btn-primary"
                            >
                                <FiRefreshCw />
                                <span>إعادة المحاولة</span>
                            </button>
                            <Link 
                                to="/" 
                                className="btn btn-outline"
                            >
                                <FiHome />
                                <span>العودة للصفحة الرئيسية</span>
                            </Link>
                        </div>
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details className="error-boundary-details">
                                <summary>تفاصيل الخطأ (للمطورين)</summary>
                                <pre className="error-boundary-stack">
                                    {this.state.error.toString()}
                                    {this.state.errorInfo?.componentStack}
                                </pre>
                            </details>
                        )}
                    </div>
                    <style>{`
                        .error-boundary {
                            min-height: 100vh;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 2rem;
                            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                        }
                        .error-boundary-content {
                            max-width: 600px;
                            width: 100%;
                            text-align: center;
                            background: white;
                            padding: 3rem;
                            border-radius: 1rem;
                            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
                        }
                        .error-boundary-icon {
                            font-size: 4rem;
                            color: #ef4444;
                            margin-bottom: 1.5rem;
                        }
                        .error-boundary-title {
                            font-size: 2rem;
                            font-weight: 700;
                            color: #1f2937;
                            margin: 0 0 1rem 0;
                        }
                        .error-boundary-message {
                            font-size: 1.1rem;
                            color: #6b7280;
                            margin-bottom: 2rem;
                            line-height: 1.6;
                        }
                        .error-boundary-actions {
                            display: flex;
                            gap: 1rem;
                            justify-content: center;
                            flex-wrap: wrap;
                        }
                        .error-boundary-actions .btn {
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                            padding: 0.75rem 1.5rem;
                        }
                        .error-boundary-details {
                            margin-top: 2rem;
                            text-align: right;
                            background: #f9fafb;
                            padding: 1rem;
                            border-radius: 0.5rem;
                            border: 1px solid #e5e7eb;
                        }
                        .error-boundary-details summary {
                            cursor: pointer;
                            font-weight: 600;
                            color: #374151;
                            margin-bottom: 0.5rem;
                        }
                        .error-boundary-stack {
                            text-align: left;
                            font-size: 0.875rem;
                            color: #dc2626;
                            background: #fee2e2;
                            padding: 1rem;
                            border-radius: 0.25rem;
                            overflow-x: auto;
                            white-space: pre-wrap;
                            word-break: break-word;
                        }
                        @media (max-width: 640px) {
                            .error-boundary-content {
                                padding: 2rem 1.5rem;
                            }
                            .error-boundary-title {
                                font-size: 1.5rem;
                            }
                            .error-boundary-actions {
                                flex-direction: column;
                            }
                            .error-boundary-actions .btn {
                                width: 100%;
                            }
                        }
                    `}</style>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;


```

## File: components/common/index.js

- Extension: .js
- Language: javascript
- Size: 79 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```javascript
// Common components barrel export
export { default as Card } from './Card';

```

## File: components/common/LazyImage.jsx

- Extension: .jsx
- Language: javascript
- Size: 4407 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```javascript
import React, { useState, useRef, useEffect } from 'react';

/**
 * Enhanced LazyImage component with Intersection Observer for better performance
 * Supports placeholder, error handling, smooth loading transitions, and modern image formats
 */
const LazyImage = ({ src, alt, className = '', webpSrc, avifSrc, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [hasError, setHasError] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { 
                threshold: 0.1,
                rootMargin: '50px' // Start loading 50px before image enters viewport
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
            observer.disconnect();
        };
    }, []);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
        setIsLoaded(true); // Show placeholder even on error
    };

    return (
        <div 
            ref={imgRef} 
            className={`lazy-image-wrapper ${className}`}
            style={{ position: 'relative', overflow: 'hidden' }}
        >
            {!isLoaded && (
                <div 
                    className="lazy-image-placeholder"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                        backgroundSize: '200% 100%',
                        animation: 'shimmer 1.5s infinite',
                    }}
                    aria-hidden="true"
                />
            )}
            {hasError ? (
                <div 
                    className="lazy-image-error"
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#f0f0f0',
                        color: '#999',
                        fontSize: '14px'
                    }}
                >
                    {alt || 'Image'}
                </div>
            ) : (
                <picture>
                    {/* AVIF format (best compression) */}
                    {avifSrc && isInView && (
                        <source srcSet={avifSrc} type="image/avif" />
                    )}
                    {/* WebP format (good compression) */}
                    {webpSrc && isInView && (
                        <source srcSet={webpSrc} type="image/webp" />
                    )}
                    {/* Fallback to original image */}
                    <img
                        src={isInView ? src : undefined}
                        alt={alt}
                        loading="lazy"
                        onLoad={handleLoad}
                        onError={handleError}
                        className={`lazy-image ${isLoaded ? 'loaded' : ''} ${className}`}
                        style={{
                            opacity: isLoaded ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                        {...props}
                    />
                </picture>
            )}
            <style>{`
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                .lazy-image.loaded {
                    opacity: 1;
                }
            `}</style>
        </div>
    );
};

export default LazyImage;

```

## File: components/admin/Admin.css

- Extension: .css
- Language: unknown
- Size: 132 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-10 17:23:43

### Code

```unknown
/* Shared admin component styles */
/* Most styles are in Admin.css, but this file can be used for component-specific overrides */


```

## File: components/admin/AddEntryForm.jsx

- Extension: .jsx
- Language: javascript
- Size: 7326 bytes
- Created: 2025-12-29 12:27:29
- Modified: 2025-12-29 12:27:29

### Code

```javascript
import { useState } from 'react';
import './Admin.css';

const AddEntryForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    passport_number: '',
    first_name: '',
    last_name: '',
    status: 'pending',
    admin_notes: '',
    visa_type: '',
    passport_received_date: '',
    embassy_submit_date: '',
    expected_exit_date: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.passport_number.trim()) {
      setError('رقم الجواز مطلوب');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/admin/create-entry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          passport_number: formData.passport_number.trim().toUpperCase(),
          first_name: formData.first_name.trim(),
          last_name: formData.last_name.trim(),
          status: formData.status,
          admin_notes: formData.admin_notes.trim() || null,
          visa_type: formData.visa_type || null,
          passport_received_date: formData.passport_received_date || null,
          embassy_submit_date: formData.embassy_submit_date || null,
          expected_exit_date: formData.expected_exit_date || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'فشل في إضافة المدخل');
        return;
      }

      // Reset form
      setFormData({
        passport_number: '',
        first_name: '',
        last_name: '',
        status: 'pending',
        admin_notes: '',
        visa_type: '',
        passport_received_date: '',
        embassy_submit_date: '',
        expected_exit_date: '',
      });

      alert('تم إضافة المدخل بنجاح!');
      onSuccess();
    } catch (err) {
      console.error('خطأ في إضافة المدخل:', err);
      setError('حدث خطأ. يرجى المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-entry-form">
      <h3>إضافة مدخل جديد لجواز السفر</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="passport-number">رقم الجواز *</label>
            <input
              type="text"
              id="passport-number"
              value={formData.passport_number}
              onChange={(e) =>
                setFormData({ ...formData, passport_number: e.target.value })
              }
              placeholder="أدخل رقم الجواز"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="first-name">الاسم الأول</label>
            <input
              type="text"
              id="first-name"
              value={formData.first_name}
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
              placeholder="الاسم الأول"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="last-name">اسم العائلة</label>
            <input
              type="text"
              id="last-name"
              value={formData.last_name}
              onChange={(e) =>
                setFormData({ ...formData, last_name: e.target.value })
              }
              placeholder="اسم العائلة"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">الحالة *</label>
            <select
              id="status"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              required
              disabled={loading}
            >
              <option value="pending">قيد الانتظار</option>
              <option value="in_embassy">في السفارة</option>
              <option value="ready">جاهز</option>
              <option value="rejected">مرفوض</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="visa-type">نوع التأشيرة</label>
            <select
              id="visa-type"
              value={formData.visa_type}
              onChange={(e) =>
                setFormData({ ...formData, visa_type: e.target.value })
              }
              disabled={loading}
            >
              <option value="">اختر النوع</option>
              <option value="زيارة">زيارة</option>
              <option value="عمل">عمل</option>
              <option value="عمرة">عمرة</option>
              <option value="أخرى">أخرى</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="passport-received-date">تاريخ استلام الجواز</label>
            <input
              type="date"
              id="passport-received-date"
              value={formData.passport_received_date}
              onChange={(e) =>
                setFormData({ ...formData, passport_received_date: e.target.value })
              }
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="embassy-submit-date">تاريخ التقديم للسفارة</label>
            <input
              type="date"
              id="embassy-submit-date"
              value={formData.embassy_submit_date}
              onChange={(e) =>
                setFormData({ ...formData, embassy_submit_date: e.target.value })
              }
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="expected-exit-date">تاريخ الخروج المتوقع</label>
            <input
              type="date"
              id="expected-exit-date"
              value={formData.expected_exit_date}
              onChange={(e) =>
                setFormData({ ...formData, expected_exit_date: e.target.value })
              }
              disabled={loading}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="admin-notes">ملاحظات المدير (اختياري)</label>
          <textarea
            id="admin-notes"
            value={formData.admin_notes}
            onChange={(e) => setFormData({ ...formData, admin_notes: e.target.value })}
            placeholder="أضف أي ملاحظات حول هذا المدخل..."
            rows="3"
            disabled={loading}
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? 'جارٍ الإضافة...' : 'إضافة المدخل'}
        </button>
      </form>
    </div>
  );
};

export default AddEntryForm;
```

## File: components/admin/EditEntryModal.jsx

- Extension: .jsx
- Language: javascript
- Size: 8296 bytes
- Created: 2025-12-29 12:27:29
- Modified: 2025-12-29 12:27:29

### Code

```javascript
import { useState, useEffect } from 'react';
import './Admin.css';

const EditEntryModal = ({ entry, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    first_name: entry.first_name || '',
    last_name: entry.last_name || '',
    status: entry.status,
    admin_notes: entry.admin_notes || '',
    visa_type: entry.visa_type || '',
    passport_received_date: entry.passport_received_date || '',
    embassy_submit_date: entry.embassy_submit_date || '',
    expected_exit_date: entry.expected_exit_date || '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    setLoading(true);

    try {
      const response = await fetch('/api/admin/update-status', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: entry.id,
          first_name: formData.first_name.trim(),
          last_name: formData.last_name.trim(),
          status: formData.status,
          admin_notes: formData.admin_notes.trim() || null,
          visa_type: formData.visa_type || null,
          passport_received_date: formData.passport_received_date || null,
          embassy_submit_date: formData.embassy_submit_date || null,
          expected_exit_date: formData.expected_exit_date || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to update entry');
        return;
      }

      alert('تم تحديث البيانات بنجاح!');
      onSuccess();
    } catch (err) {
      console.error('Error updating entry:', err);
      setError('حدث خطأ. يرجى المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h3>تعديل البيانات</h3>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-body">
          <div className="entry-info">
            <p>
              <strong>رقم الجواز:</strong> {entry.passport_number}
            </p>
            <p>
              <strong>تاريخ الإنشاء:</strong> {new Date(entry.created_at).toLocaleString('ar-SA')}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="edit-first-name">الاسم الأول</label>
                <input
                  type="text"
                  id="edit-first-name"
                  value={formData.first_name}
                  onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                  placeholder="الاسم الأول"
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="edit-last-name">اسم العائلة</label>
                <input
                  type="text"
                  id="edit-last-name"
                  value={formData.last_name}
                  onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                  placeholder="اسم العائلة"
                  disabled={loading}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="edit-visa-type">نوع التأشيرة</label>
                <select
                  id="edit-visa-type"
                  value={formData.visa_type}
                  onChange={(e) =>
                    setFormData({ ...formData, visa_type: e.target.value })
                  }
                  disabled={loading}
                >
                  <option value="">اختر النوع</option>
                  <option value="زيارة">زيارة</option>
                  <option value="عمل">عمل</option>
                  <option value="عمرة">عمرة</option>
                  <option value="أخرى">أخرى</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="edit-passport-received">تاريخ استلام الجواز</label>
                <input
                  type="date"
                  id="edit-passport-received"
                  value={formData.passport_received_date}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      passport_received_date: e.target.value,
                    })
                  }
                  disabled={loading}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="edit-embassy-submit">تاريخ التقديم للسفارة</label>
                <input
                  type="date"
                  id="edit-embassy-submit"
                  value={formData.embassy_submit_date}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      embassy_submit_date: e.target.value,
                    })
                  }
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="edit-expected-exit">تاريخ الخروج المتوقع</label>
                <input
                  type="date"
                  id="edit-expected-exit"
                  value={formData.expected_exit_date}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      expected_exit_date: e.target.value,
                    })
                  }
                  disabled={loading}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="edit-status">الحالة *</label>
              <select
                id="edit-status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                required
                disabled={loading}
              >
                <option value="pending">قيد الانتظار</option>
                <option value="in_embassy">في السفارة</option>
                <option value="ready">جاهز</option>
                <option value="rejected">مرفوض</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="edit-notes">ملاحظات المدير (اختياري)</label>
              <textarea
                id="edit-notes"
                value={formData.admin_notes}
                onChange={(e) => setFormData({ ...formData, admin_notes: e.target.value })}
                placeholder="أضف أي ملاحظات حول هذا المدخل..."
                rows="4"
                disabled={loading}
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <div className="modal-actions">
              <button type="button" className="btn-secondary" onClick={onClose} disabled={loading}>
                إلغاء
              </button>
              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? 'جاري التحديث...' : 'تحديث البيانات'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEntryModal;
```

## File: components/admin/PassportTable.jsx

- Extension: .jsx
- Language: javascript
- Size: 4551 bytes
- Created: 2025-12-29 12:27:29
- Modified: 2025-12-29 12:27:29

### Code

```javascript
import { useState } from 'react';
import EditEntryModal from './EditEntryModal';
import './Admin.css';

const PassportTable = ({ entries, onRefresh, onDelete }) => {
  const [editingEntry, setEditingEntry] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const handleEdit = (entry) => {
    setEditingEntry(entry);
  };

  const handleDelete = async (id, passportNumber) => {
    if (!window.confirm(`هل أنت متأكد من حذف رقم الجواز ${passportNumber}؟`)) {
      return;
    }

    setDeletingId(id);

    try {
      const response = await fetch(`/api/admin/delete-entry?id=${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || 'فشل في حذف المدخل');
        return;
      }

      alert('تم حذف المدخل بنجاح');
      onRefresh();
    } catch (error) {
      console.error('Error deleting entry:', error);
      alert('حدث خطأ أثناء حذف المدخل');
    } finally {
      setDeletingId(null);
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      ready: { label: 'جاهز', className: 'badge-success' },
      in_embassy: { label: 'في السفارة', className: 'badge-warning' },
      pending: { label: 'قيد الانتظار', className: 'badge-info' },
      rejected: { label: 'مرفوض', className: 'badge-error' },
    };

    const badge = badges[status] || badges.pending;
    return <span className={`status-badge ${badge.className}`}>{badge.label}</span>;
  };

  if (entries.length === 0) {
    return (
      <div className="empty-state">
        <p>لم يتم العثور على إدخالات جواز السفر. أضف أول إدخال لك باستخدام النموذج أعلاه</p>
      </div>
    );
  }

  return (
    <>
      <div className="table-container">
        <table className="passport-table">
          <thead>
            <tr>
              <th>رقم الجواز</th>
              <th>الاسم الكامل</th>
              <th>نوع التأشيرة</th>
              <th>الحالة</th>
              <th>تاريخ الإنشاء</th>
              <th>آخر تحديث</th>
              <th>ملاحظات</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.id}>
                <td>
                  <strong>{entry.passport_number}</strong>
                </td>
                <td>
                  {[entry.first_name, entry.last_name].filter(Boolean).join(' ') || '—'}
                </td>
                <td>{entry.visa_type || '—'}</td>
                <td>{getStatusBadge(entry.status)}</td>
                <td>{new Date(entry.created_at).toLocaleDateString()}</td>
                <td>{new Date(entry.updated_at).toLocaleDateString()}</td>
                <td className="notes-cell">
                  {entry.admin_notes ? (
                    <span title={entry.admin_notes}>
                      {entry.admin_notes.length > 30
                        ? `${entry.admin_notes.substring(0, 30)}...`
                        : entry.admin_notes}
                    </span>
                  ) : (
                    <span className="text-muted">—</span>
                  )}
                </td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="btn-edit"
                      onClick={() => handleEdit(entry)}
                      title="تعديل"
                    >
                      ✏️ تعديل
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(entry.id, entry.passport_number)}
                      disabled={deletingId === entry.id}
                      title="حذف"
                    >
                      {deletingId === entry.id ? '⏳' : '🗑️ حذف'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingEntry && (
        <EditEntryModal
          entry={editingEntry}
          onClose={() => setEditingEntry(null)}
          onSuccess={() => {
            setEditingEntry(null);
            onRefresh();
          }}
        />
      )}
    </>
  );
};

export default PassportTable;
```

## File: components/sections/index.js

- Extension: .js
- Language: javascript
- Size: 341 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-10 17:23:43

### Code

```javascript
export { default as Hero } from './Hero';
export { default as HomeServices } from './HomeServices';
export { default as DestinationsCarousel } from './DestinationsCarousel';
export { default as AboutUs } from './AboutUs';
export { default as Testimonials } from './Testimonials';
export { default as PassportCheck } from './PassportCheck';


```

## File: components/widgets/index.js

- Extension: .js
- Language: javascript
- Size: 99 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```javascript
// Widget components barrel export
export { default as WhatsAppWidget } from './WhatsAppWidget';

```

## File: components/layout/Footer/Footer.css

- Extension: .css
- Language: unknown
- Size: 12900 bytes
- Created: 2025-12-28 01:00:30
- Modified: 2025-12-28 01:00:30

### Code

```unknown
.footer {
    background-color: var(--bg-secondary);
    padding-top: var(--spacing-2xl);
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    /* Enhanced visual separation */
    position: relative;
}

.footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(8, 145, 178, 0.2), transparent);
}

[data-theme="dark"] .footer {
    background-color: #0B1120;
    /* Darker than bg-secondary for footer */
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-xl);
    padding-bottom: var(--spacing-2xl);
    /* Better alignment and spacing */
    align-items: start;
}

.footer-col {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-sm);
    transition: opacity var(--transition-base);
    text-decoration: none;
    color: inherit;
    /* Add padding for breathing room around logo */
    padding: var(--spacing-xs) 0;
}

.footer-logo:hover {
    opacity: 0.85;
}

.footer-logo:focus-visible {
    outline: 2px solid var(--primary-cyan);
    outline-offset: 4px;
    border-radius: var(--radius-sm);
}

@media (min-width: 992px) {
    .footer-logo {
        gap: var(--spacing-lg);
        margin-bottom: var(--spacing-md);
        padding: var(--spacing-sm) 0;
    }
}

.footer-logo-img {
    height: 100px;
    width: auto;
    max-width: 320px;
    min-width: 200px;
    object-fit: contain;
    object-position: center center;
    transition: opacity var(--transition-base);
    flex-shrink: 0;
    /* Subtle shadow for transparent SVG - single, minimal */
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
    /* SVG-specific optimizations for perfect sharpness */
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    image-rendering: auto; /* Best for SVG - smooth scaling */
    /* Prevent blur on transform */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    /* Display full logo with proper spacing */
    display: block;
    /* SVG quality enhancements */
    shape-rendering: geometricPrecision;
    text-rendering: optimizeLegibility;
}

/* Company Name Text */
.footer-logo-text {
    display: none;
    font-family: var(--font-heading);
    font-size: var(--font-lg);
    font-weight: 700;
    color: var(--text-primary);
    transition: color var(--transition-base);
}

.footer-logo-img:hover {
    /* Subtle hover effect - professional and clean */
    opacity: 1;
    transform: translateY(-2px);
    filter: drop-shadow(0 6px 15px rgba(0, 0, 0, 0.2));
}

/* Desktop Logo Enhancement - Much More Visible */
@media (min-width: 992px) {
    .footer-logo-img {
        height: 140px;
        max-width: 400px;
        min-width: 280px;
        filter: drop-shadow(0 3px 15px rgba(0, 0, 0, 0.15));
    }
    
    .footer-logo-text {
        display: block;
        font-size: var(--font-xl);
    }
    
    .footer-logo:hover .footer-logo-img {
        opacity: 0.9;
        filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.18));
    }
    
    .footer-logo:hover .footer-logo-text {
        color: var(--primary-cyan);
    }
}

@media (min-width: 1200px) {
    .footer-logo-img {
        height: 160px;
        max-width: 450px;
        min-width: 320px;
        filter: drop-shadow(0 4px 18px rgba(0, 0, 0, 0.18));
    }
    
    .footer-logo-text {
        font-size: var(--font-2xl);
    }
    
    .footer-logo:hover .footer-logo-img {
        opacity: 0.9;
        filter: drop-shadow(0 4px 18px rgba(0, 0, 0, 0.2));
    }
}

.footer-desc {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: var(--font-sm);
}

.footer-title {
    font-size: var(--font-lg);
    color: var(--text-primary);
    margin-bottom: var(--spacing-md);
    font-weight: 700;
    /* Better visual hierarchy */
    position: relative;
    padding-bottom: var(--spacing-xs);
}

.footer-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40px;
    height: 2px;
    background: var(--gradient-ocean);
    border-radius: var(--radius-full);
}

.footer-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.footer-links a {
    color: var(--text-secondary);
    font-size: var(--font-sm);
    transition: all var(--transition-base);
    font-weight: 400;
    display: inline-block;
    padding: 4px 0;
    /* Better touch targets */
    min-height: 32px;
    display: flex;
    align-items: center;
}

.footer-links a:hover {
    color: var(--primary-cyan);
    padding-right: 8px;
    /* RTL slide */
    transform: translateX(-2px);
}

.footer-links a:focus-visible {
    outline: 2px solid var(--primary-cyan);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
}

.footer-contact {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.footer-contact li {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    color: var(--text-secondary);
    font-size: var(--font-sm);
    line-height: 1.6;
    transition: all var(--transition-base);
    padding: 4px 0;
    /* Better touch targets */
    min-height: 44px;
}

.footer-contact li:hover {
    transform: translateX(-2px);
    /* RTL direction */
}

.footer-contact .icon {
    font-size: 1.25rem;
    color: var(--primary-cyan);
    flex-shrink: 0;
    margin-top: 2px;
    transition: all var(--transition-base);
}

.footer-contact a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: all var(--transition-fast);
    word-break: break-word;
}

.footer-contact a:hover {
    color: var(--primary-cyan);
    padding-right: 4px;
}

.footer-contact a:focus-visible {
    outline: 2px solid var(--primary-cyan);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
}

.footer-contact li:hover .icon {
    color: var(--accent-amber);
    transform: scale(1.1);
}

.social-links {
    display: flex;
    gap: var(--spacing-md);
    margin-top: var(--spacing-md);
    flex-wrap: wrap;
}

.social-link {
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    color: var(--text-primary);
    transition: transform var(--transition-base), box-shadow var(--transition-base), color var(--transition-base), background-color var(--transition-base), opacity var(--transition-base);
    box-shadow: 
        0 2px 8px rgba(0, 0, 0, 0.08),
        0 0 0 1px rgba(0, 75, 135, 0.06);
    text-decoration: none;
    position: relative;
    overflow: hidden;
}

.social-link::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--social-color, var(--primary-blue));
    opacity: 0;
    transition: opacity var(--transition-base);
    border-radius: 50%;
}

.social-link svg {
    position: relative;
    z-index: 1;
    transition: color var(--transition-base), transform var(--transition-base), opacity var(--transition-base);
}

[data-theme="dark"] .social-link {
    background: rgba(15, 23, 42, 0.6);
    color: var(--text-primary);
    box-shadow: 0 2px 8px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05);
}

.social-link:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 
        0 6px 14px rgba(0, 0, 0, 0.12),
        0 0 0 1px rgba(0, 75, 135, 0.08);
}

.social-link:hover::before {
    opacity: 0.1;
}

.social-link:hover svg {
    color: var(--social-color, var(--primary-blue));
    transform: scale(1.04);
}

.social-link:active {
    transform: translateY(-1px) scale(1.02);
}

.footer-bottom {
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    padding: var(--spacing-lg) 0;
    text-align: center;
    color: var(--text-secondary);
    font-size: var(--font-sm);
    margin-top: var(--spacing-xl);
    /* Better separation */
}

[data-theme="dark"] .footer-bottom {
    border-top-color: rgba(255, 255, 255, 0.05);
}

/* ========================================
   MOBILE OPTIMIZATIONS
   ======================================== */

/* Tablet and below */
@media (max-width: 992px) {
    .footer {
        padding-top: var(--spacing-xl);
    }
    
    .footer-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-lg);
        padding-bottom: var(--spacing-xl);
    }
    
    .footer-col {
        gap: var(--spacing-sm);
    }
    
    .footer-logo-img {
        /* UPSCALE: Footer logo on tablet */
        height: 100px;
        max-width: 280px;
        min-width: 200px;
    }
}

/* Mobile devices */
@media (max-width: 768px) {
    .footer {
        padding-top: var(--spacing-lg);
    }
    
    .footer-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-xl);
        padding-bottom: var(--spacing-lg);
    }
    
    /* Center company info on mobile */
    .footer-col-main {
        text-align: center;
        align-items: center;
    }
    
    .footer-logo {
        justify-content: center;
        margin-bottom: var(--spacing-md);
        flex-direction: column;
        gap: var(--spacing-sm);
    }
    
    .footer-logo-img {
        /* UPSCALE: Footer logo on mobile */
        height: 100px; /* Same as navbar */
        max-width: 260px;
        min-width: 180px;
    }
    
    .footer-desc {
        text-align: center;
        max-width: 100%;
        font-size: var(--font-sm);
        line-height: 1.7;
        margin-bottom: var(--spacing-md);
    }
    
    /* Social links - larger and centered */
    .social-links {
        justify-content: center;
        gap: var(--spacing-md);
        margin-top: var(--spacing-md);
    }
    
    .social-link {
        width: 48px;
        height: 48px;
        font-size: 1.25rem;
        min-width: 48px;
        min-height: 48px;
    }
    
    /* Footer titles - better spacing */
    .footer-title {
        font-size: var(--font-base);
        margin-bottom: var(--spacing-sm);
        font-weight: 700;
    }
    
    /* Footer links - better touch targets */
    .footer-links {
        gap: 10px;
    }
    
    .footer-links a {
        font-size: var(--font-base);
        padding: 0.5rem 0;
        min-height: 44px;
        display: flex;
        align-items: center;
    }
    
    /* Contact info - better layout */
    .footer-contact {
        gap: 12px;
    }
    
    .footer-contact li {
        font-size: var(--font-base);
        padding: 0.5rem 0;
        min-height: 44px;
        align-items: flex-start;
        gap: var(--spacing-sm);
    }
    
    .footer-contact .icon {
        font-size: 1.1rem;
        margin-top: 4px;
    }
    
    .footer-contact a,
    .footer-contact span:not(.icon) {
        flex: 1;
        word-break: break-word;
        line-height: 1.5;
    }
    
    /* Footer bottom - better readability */
    .footer-bottom {
        padding: var(--spacing-md) var(--spacing-sm);
        font-size: var(--font-sm);
        line-height: 1.6;
    }
    
    .footer-bottom p {
        margin: 0;
        padding: 0 var(--spacing-sm);
    }
}

/* Small mobile devices */
@media (max-width: 480px) {
    .footer {
        padding-top: var(--spacing-md);
    }
    
    .footer-grid {
        gap: var(--spacing-lg);
        padding-bottom: var(--spacing-md);
    }
    
    .footer-logo-img {
        /* UPSCALE: Footer logo on small mobile */
        height: 90px;
        max-width: 240px;
        min-width: 160px;
    }
    
    .footer-desc {
        font-size: 0.9rem;
    }
    
    .social-link {
        width: 44px;
        height: 44px;
        font-size: 1.1rem;
        min-width: 44px;
        min-height: 44px;
    }
    
    .footer-title {
        font-size: 1rem;
    }
    
    .footer-links a,
    .footer-contact li {
        font-size: 0.9rem;
    }
    
    .footer-bottom {
        font-size: 0.85rem;
        padding: var(--spacing-sm);
    }
    
    .footer-contact li {
        flex-direction: row;
        align-items: center;
    }
}

/* X (formerly Twitter) brand adjustment */
.social-link.x {
    --social-color: #000000;
}

/* Touch device optimizations */
@media (hover: none) and (pointer: coarse) {
    .footer-links a,
    .footer-contact li,
    .social-link {
        min-height: 44px;
    }
    
    .footer-links a:active {
        color: var(--primary-cyan);
        transform: translateX(-4px);
    }
    
    .social-link:active {
        transform: translateY(-2px) scale(1.05);
    }
}
```

## File: components/layout/Footer/index.jsx

- Extension: .jsx
- Language: javascript
- Size: 5738 bytes
- Created: 2025-12-27 23:48:04
- Modified: 2025-12-27 23:48:04

### Code

```javascript
import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiLinkedin, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { SOCIAL_LINKS, COMPANY_INFO, CONTACT_INFO } from '../../../constants/company';
import { SiX } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
    const socialMedia = [
        { icon: <SiX />, href: SOCIAL_LINKS.twitter, label: 'X', color: '#000000', className: 'x' },
        { icon: <FiInstagram />, href: SOCIAL_LINKS.instagram, label: 'إنستغرام', color: '#E4405F' },
        { icon: <FiFacebook />, href: SOCIAL_LINKS.facebook, label: 'فيسبوك', color: '#1877F2' },
        { icon: <FiLinkedin />, href: SOCIAL_LINKS.linkedin, label: 'لينكد إن', color: '#0077B5' }
    ];

    return (    
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Company Info */}
                    <div className="footer-col footer-col-main">
                        <Link to="/" className="footer-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="الرجوع إلى الصفحة الرئيسية">
                            <img 
                                src="/logo_svg.svg" 
                                alt="النجم الأزرق للسياحة والسفر" 
                                className="footer-logo-img"
                                /* Updated attributes to match new CSS max-sizes */
                                width="350"  
                                height="120"
                                loading="lazy" /* Changed to lazy for footer performance */
                            />
                        </Link>
                        <p className="footer-desc">
                            شريكك الموثوق في عالم السفر والسياحة. نقدم لك تجارب سفر استثنائية وخدمات راقية تليق بك.
                        </p>
                        <div className="social-links" role="list" aria-label="روابط التواصل الاجتماعي">
                            {socialMedia.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`social-link ${social.className || ''}`}
                                    aria-label={social.label}
                                    style={{ '--social-color': social.color }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h3 className="footer-title">روابط سريعة</h3>
                        <ul className="footer-links">
                            <li><Link to="/">الرئيسية</Link></li>
                             <li><Link to="/services">خدماتنا</Link></li>   
                            <li><Link to="/about">من نحن</Link></li>
                            <li><Link to="/destinations">الوجهات</Link></li>
                            <li><Link to="/contact">اتصل بنا</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-col">
                        <h3 className="footer-title">خدماتنا</h3>
                        <ul className="footer-links">
                            <li><Link to="/services">حجوزات الطيران</Link></li>
                            <li><Link to="/services">حجوزات الفنادق</Link></li>
                            <li><Link to="/services">البرامج السياحية</Link></li>
                            <li><Link to="/services">التأشيرات</Link></li>
                            <li><Link to="/services">السياحة العلاجية</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h3 className="footer-title">تواصل معنا</h3>
                        <ul className="footer-contact" role="list">
                            <li>
                                <FiPhone className="icon" aria-hidden="true" />
                                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} aria-label="اتصل بنا">{CONTACT_INFO.phone}</a>
                            </li>
                            <li>
                                <FiMail className="icon" aria-hidden="true" />
                                <a href={`mailto:${CONTACT_INFO.email}`} aria-label="أرسل بريد إلكتروني">{CONTACT_INFO.email}</a>
                            </li>
                            <li>
                                <FiMapPin className="icon" aria-hidden="true" />
                                <span>{CONTACT_INFO.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} النجم الأزرق للسفريات والسياحة. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
```

## File: components/layout/Navbar/index.jsx

- Extension: .jsx
- Language: javascript
- Size: 4569 bytes
- Created: 2025-12-28 00:33:17
- Modified: 2025-12-28 00:33:17

### Code

```javascript
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'من نحن', path: '/about' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'الوجهات', path: '/destinations' },
    { name: 'اتصل بنا', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" aria-label="النجم الأزرق للسياحة والسفر - العودة إلى الصفحة الرئيسية">
          <img
            src="/logo_svg.svg"
            alt="النجم الأزرق للسياحة والسفر"
            className="logo-img"
            width="480"
            height="140"
            loading="eager"
            fetchPriority="high"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="nav-underline"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="navbar-cta">
          <Link
            to="/contact"
            className="btn btn-primary"
            // Inline styles to override the class colors directly
            style={{
              backgroundColor: '#004B87',
              borderColor: '#1428A0',
              color: 'white'
            }}
          >
            احجز الآن
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`navbar-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mobile-menu"
            >
              <div className="mobile-menu-content">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mobile-cta-container"
                >
                  <Link to="/contact" className="btn btn-primary w-full">
                    احجز رحلتك الآن
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

```

## File: components/layout/Navbar/Navbar.css

- Extension: .css
- Language: unknown
- Size: 8556 bytes
- Created: 2025-12-28 01:38:40
- Modified: 2025-12-28 01:38:40

### Code

```unknown
/* Navbar Styles */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: var(--z-sticky);
    transition: all var(--transition-base);
    background: transparent;
    padding: var(--spacing-sm) 0;
    min-height: 120px;
    /* Smooth scroll behavior */
}

.navbar.scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding: var(--spacing-xs) 0;
    min-height: 100px;
}

[data-theme="dark"] .navbar.scrolled {
    background: rgba(15, 23, 42, 0.9);
}

.navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-md);
    /* Better spacing between elements */
}

/* Logo */
.navbar-logo {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    z-index: var(--z-fixed);
    transition: opacity var(--transition-base);
    height: 100%;
    /* Add padding to create breathing room around logo */
    padding: var(--spacing-xs) 0;
}

.navbar-logo:hover {
    opacity: 0.85;
}

.navbar-logo:focus-visible {
    outline: 2px solid var(--primary-cyan);
    outline-offset: 4px;
    border-radius: var(--radius-sm);
}

.logo-img {
    height: 110px;
    width: auto;
    max-width: 400px;
    min-width: 260px;
    object-fit: contain;
    object-position: center center;
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), filter 0.4s ease, opacity 0.4s ease;
    /* Richer shadow for depth and clarity */
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08));
    /* SVG-specific optimizations for perfect sharpness */
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    image-rendering: auto;
    /* Best for SVG - smooth scaling */
    /* Prevent blur on transform */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    will-change: filter, transform;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    /* Display full logo with proper spacing */
    display: block;
    /* SVG quality enhancements */
    shape-rendering: geometricPrecision;
    text-rendering: optimizeLegibility;
}

.navbar.scrolled .logo-img {
    height: 90px;
    max-width: 340px;
    min-width: 240px;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
}

.logo-img:hover {
    /* Subtle hover effect - professional and clean */
    opacity: 0.9;
    filter: drop-shadow(0 3px 10px rgba(0, 0, 0, 0.15));
}

/* Mobile optimizations for logo */
@media (max-width: 768px) {
    .navbar-logo {
        padding: var(--spacing-xs) 0;
        /* Ensure vertical center */
        display: flex;
        align-items: center;
    }

    .logo-img {
        /* UPSCALE: Larger mobile logo (was ~80px) */
        height: 100px;
        max-width: 320px;
        min-width: 220px;
    }

    .navbar.scrolled .logo-img {
        /* Slightly smaller but still clearly visible */
        height: 90px;
        max-width: 280px;
        min-width: 200px;
    }

    .navbar {
        min-height: 80px;
        padding: var(--spacing-sm) 0;
    }

    .navbar.scrolled {
        min-height: 75px;
        padding: var(--spacing-xs) 0;
    }
}

@media (max-width: 480px) {
    .navbar-logo {
        padding: 4px 0;
    }

    .logo-img {
        /* UPSCALE: Larger small-mobile logo */
        height: 90px;
        max-width: 280px;
        min-width: 200px;
    }

    .navbar.scrolled .logo-img {
        height: 80px;
        max-width: 260px;
        min-width: 180px;
    }

    .navbar {
        min-height: 70px;
    }

    .navbar.scrolled {
        min-height: 68px;
    }
}

/* Desktop - larger logo for better visibility */
@media (min-width: 992px) {
    .navbar-logo {
        padding: var(--spacing-sm) 0;
    }

    .logo-img {
        height: 120px;
        max-width: 420px;
        min-width: 300px;
    }

    .navbar.scrolled .logo-img {
        height: 100px;
        max-width: 360px;
        min-width: 260px;
    }

    .navbar {
        min-height: 140px;
    }

    .navbar.scrolled {
        min-height: 120px;
    }
}

@media (min-width: 1200px) {
    .navbar-logo {
        padding: var(--spacing-sm) 0;
    }

    .logo-img {
        height: 140px;
        max-width: 480px;
        min-width: 340px;
    }

    .navbar.scrolled .logo-img {
        height: 115px;
        max-width: 420px;
        min-width: 300px;
    }
}

/* Desktop Links */
.navbar-links {
    display: none;
}

@media (min-width: 992px) {
    .navbar-links {
        display: flex;
        align-items: center;
        gap: var(--spacing-xl);
        /* Better spacing between nav links */
        flex: 1;
        justify-content: center;
        /* Center navigation links for better balance */
    }
}

.nav-link {
    position: relative;
    font-weight: 500;
    color: var(--text-secondary);
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: var(--font-base);
    transition: color var(--transition-base);
    /* Better touch target */
    min-height: 44px;
    display: flex;
    align-items: center;
    border-radius: var(--radius-sm);
}

.nav-link:hover,
.nav-link.active {
    color: var(--primary-cyan);
}

.nav-link:hover {
    background-color: rgba(8, 145, 178, 0.05);
    /* Subtle background on hover */
}

.nav-link:focus-visible {
    outline: 2px solid var(--primary-cyan);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
}

.nav-underline {
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--gradient-ocean);
    border-radius: var(--radius-full);
}

/* Desktop CTA */
.navbar-cta {
    display: none;
}

@media (min-width: 992px) {
    .navbar-cta {
        display: block;
    }

    .btn-sm {
        padding: 10px 24px;
        min-height: 44px;
        font-size: var(--font-sm);
    }
}

/* Mobile Toggle */
.navbar-toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: var(--z-fixed);
    padding: 0;
}

@media (min-width: 992px) {
    .navbar-toggle {
        display: none;
    }
}

.bar {
    width: 100%;
    height: 2px;
    background-color: var(--text-primary);
    border-radius: var(--radius-full);
    transition: all var(--transition-fast);
}

.navbar-toggle.open .bar:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
}

.navbar-toggle.open .bar:nth-child(2) {
    opacity: 0;
}

.navbar-toggle.open .bar:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    z-index: var(--z-sticky);
    /* Behind toggle */
    padding-top: 110px;
    /* Space for navbar */
    display: flex;
    flex-direction: column;
}

@media (max-width: 768px) {
    .mobile-menu {
        padding-top: 80px;
    }
}

@media (max-width: 480px) {
    .mobile-menu {
        padding-top: 75px;
    }
}

.mobile-menu-content {
    padding: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.mobile-nav-link {
    font-family: var(--font-heading);
    font-size: var(--font-xl);
    font-weight: 700;
    color: var(--text-primary);
    display: block;
    padding: var(--spacing-md) var(--spacing-lg);
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
    /* Better touch targets */
    min-height: 56px;
    display: flex;
    align-items: center;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
    background-color: var(--bg-secondary);
    color: var(--primary-cyan);
    transform: translateX(-4px);
    /* RTL direction */
    padding-right: calc(var(--spacing-lg) + 4px);
}

.mobile-cta-container {
    margin-top: var(--spacing-lg);
}

.w-full {
    width: 100%;
}
```

## File: components/common/ExpandableServiceCard/ExpandableServiceCard.css

- Extension: .css
- Language: unknown
- Size: 7199 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```unknown
/* Expandable Service Card Styles */

.expandable-service-card {
    background: white;
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: var(--shadow-md);
    border: 2px solid transparent;
    display: flex;
    flex-direction: column;
    cursor: pointer;
}

[data-theme="dark"] .expandable-service-card {
    background: var(--bg-secondary);
}

.expandable-service-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
    border-color: rgba(8, 145, 178, 0.2);
}

.expandable-service-card.expanded {
    box-shadow: var(--shadow-xl);
    border-color: rgba(8, 145, 178, 0.3);
}

.expandable-service-card.expanded:hover {
    transform: translateY(-8px);
}

/* Gradient border accent */
.expandable-card-accent {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 4px;
    background: var(--gradient-tropical);
    opacity: 0;
    transition: opacity var(--transition-base);
}

.expandable-service-card:hover .expandable-card-accent,
.expandable-service-card.expanded .expandable-card-accent {
    opacity: 1;
}

/* Card Header */
.expandable-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-md);
    padding-bottom: var(--spacing-md);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    transition: padding-bottom var(--transition-base);
}

.expandable-service-card.expanded .expandable-card-header {
    padding-bottom: var(--spacing-lg);
    border-bottom-color: rgba(8, 145, 178, 0.2);
}

.expandable-card-header-content {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    flex: 1;
}

/* Icon Wrapper */
.expandable-icon-wrapper {
    width: 70px;
    height: 70px;
    min-width: 70px;
    border-radius: var(--radius-md);
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
    box-shadow: 0 4px 15px rgba(8, 145, 178, 0.1);
}

[data-theme="dark"] .expandable-icon-wrapper {
    background: var(--bg-tertiary);
}

.expandable-service-card:hover .expandable-icon-wrapper,
.expandable-service-card.expanded .expandable-icon-wrapper {
    background: var(--gradient-ocean);
    transform: rotate(-10deg) scale(1.1);
    box-shadow: 0 8px 25px rgba(8, 145, 178, 0.4);
}

.expandable-icon {
    font-size: 36px;
    color: var(--primary-cyan);
    transition: all 0.5s;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.expandable-service-card:hover .expandable-icon,
.expandable-service-card.expanded .expandable-icon {
    color: white;
    transform: scale(1.1);
}

/* Title Section */
.expandable-card-title-section {
    flex: 1;
}

.expandable-card-title {
    font-size: var(--font-xl);
    margin-bottom: 0.5rem;
    color: var(--text-primary);
    transition: color 0.3s;
    font-weight: 700;
}

.expandable-service-card:hover .expandable-card-title,
.expandable-service-card.expanded .expandable-card-title {
    background: var(--gradient-ocean);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.expandable-card-tagline {
    font-size: var(--font-sm);
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.5;
}

/* Chevron Icon */
.expandable-chevron {
    color: var(--primary-cyan);
    font-size: 1.5rem;
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.expandable-service-card:hover .expandable-chevron {
    color: var(--accent-amber);
    transform: scale(1.1);
}

/* Expanded Content */
.expandable-card-content {
    overflow: hidden;
}

.expandable-card-body {
    padding-top: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
}

.expandable-card-description {
    font-size: var(--font-base);
    color: var(--text-secondary);
    line-height: 1.8;
    margin: 0;
}

/* Features List */
.expandable-card-features {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
}

.expandable-feature-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    font-size: var(--font-sm);
    color: var(--text-secondary);
    transition: all 0.3s;
}

.expandable-feature-item:hover {
    color: var(--text-primary);
    transform: translateX(-3px);
}

.expandable-check-icon {
    color: var(--secondary-teal);
    font-size: 1.2rem;
    flex-shrink: 0;
    transition: transform 0.3s;
}

.expandable-feature-item:hover .expandable-check-icon {
    transform: scale(1.2);
}

/* CTA Button */
.expandable-card-cta {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-xs);
    color: var(--primary-cyan);
    font-weight: 600;
    font-size: var(--font-base);
    margin-top: var(--spacing-sm);
    transition: all 0.3s;
    width: fit-content;
    padding: 0.5rem 0;
}

.expandable-card-cta:hover {
    gap: var(--spacing-sm);
    color: var(--accent-amber);
}

.expandable-arrow-icon {
    transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.expandable-card-cta:hover .expandable-arrow-icon {
    transform: translateX(-6px);
    animation: arrowPulse 0.6s ease infinite;
}

@keyframes arrowPulse {
    0%,
    100% {
        transform: translateX(-6px);
    }

    50% {
        transform: translateX(-10px);
    }
}

/* Focus States for Accessibility */
.expandable-card-header:focus {
    outline: 2px solid var(--primary-cyan);
    outline-offset: 2px;
    border-radius: var(--radius-md);
}

.expandable-card-cta:focus {
    outline: 2px solid var(--primary-cyan);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .expandable-card-header {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--spacing-sm);
    }

    .expandable-card-header-content {
        width: 100%;
    }

    .expandable-chevron {
        align-self: flex-end;
    }

    .expandable-icon-wrapper {
        width: 60px;
        height: 60px;
        min-width: 60px;
    }

    .expandable-icon {
        font-size: 28px;
    }

    .expandable-card-title {
        font-size: var(--font-lg);
    }

    .expandable-card-tagline {
        font-size: var(--font-xs);
    }
}

/* Disable animations for reduced motion */
@media (prefers-reduced-motion: reduce) {
    .expandable-service-card,
    .expandable-icon-wrapper,
    .expandable-chevron,
    .expandable-card-cta,
    .expandable-arrow-icon {
        animation: none !important;
        transition: none !important;
    }

    .expandable-chevron {
        transform: none !important;
    }
}


```

## File: components/common/ExpandableServiceCard/index.jsx

- Extension: .jsx
- Language: javascript
- Size: 5196 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-20 18:10:53

### Code

```javascript
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


```

## File: components/common/Card/Card.css

- Extension: .css
- Language: unknown
- Size: 5809 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```unknown
.service-card {
    background: white;
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: var(--shadow-md);
    border: 2px solid transparent;
    display: flex;
    flex-direction: column;
    height: 100%;
    /* Floating animation */
    animation: cardFloat 6s ease-in-out infinite;
    /* 3D perspective */
    transform-style: preserve-3d;
    perspective: 1000px;
}

@keyframes cardFloat {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

[data-theme="dark"] .service-card {
    background: var(--bg-secondary);
}

.service-card:hover {
    transform: translateY(-15px) rotateX(5deg);
    box-shadow:
        var(--shadow-xl),
        0 0 30px rgba(8, 145, 178, 0.2);
    border-color: transparent;
    background: linear-gradient(white, white) padding-box,
        linear-gradient(135deg, #0891B2, #06B6D4, #F59E0B) border-box;
    animation: none;
    /* Stop floating on hover */
}

/* Gradient border glow */
.service-card::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: var(--radius-lg);
    padding: 2px;
    background: linear-gradient(135deg, #0891B2 0%, #06B6D4 30%, #F59E0B 70%, #EA580C 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.5s;
}

.service-card:hover::before {
    opacity: 1;
    animation: gradientSpin 3s linear infinite;
}

@keyframes gradientSpin {
    0% {
        filter: hue-rotate(0deg);
    }

    100% {
        filter: hue-rotate(360deg);
    }
}

.service-card-accent {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--gradient-tropical);
    opacity: 0;
    transition: opacity var(--transition-base);
}

.service-card:hover .service-card-accent {
    opacity: 1;
}

.service-icon-wrapper {
    width: 70px;
    height: 70px;
    border-radius: var(--radius-md);
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--spacing-md);
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
    box-shadow: 0 4px 15px rgba(8, 145, 178, 0.1);
}

[data-theme="dark"] .service-icon-wrapper {
    background: var(--bg-tertiary);
}

/* Icon pulse animation */
.service-icon-wrapper::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: var(--radius-md);
    background: inherit;
    animation: iconPulse 2s ease-in-out infinite;
    z-index: -1;
}

@keyframes iconPulse {

    0%,
    100% {
        transform: scale(1);
        opacity: 0.7;
    }

    50% {
        transform: scale(1.2);
        opacity: 0;
    }
}

.service-card:hover .service-icon-wrapper {
    background: var(--gradient-ocean);
    transform: rotate(-10deg) scale(1.15);
    box-shadow: 0 8px 25px rgba(8, 145, 178, 0.4);
}

.service-icon {
    font-size: 36px;
    transition: all 0.5s;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.service-card:hover .service-icon {
    color: white;
    transform: scale(1.1);
    animation: iconBounce 0.6s ease;
}

@keyframes iconBounce {

    0%,
    100% {
        transform: scale(1.1);
    }

    50% {
        transform: scale(1.25);
    }
}

.service-title {
    font-size: var(--font-xl);
    margin-bottom: var(--spacing-sm);
    color: var(--text-primary);
    transition: color 0.3s;
}

.service-card:hover .service-title {
    background: var(--gradient-ocean);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.service-description {
    font-size: var(--font-base);
    color: var(--text-secondary);
    margin-bottom: var(--spacing-md);
    line-height: 1.7;
    flex-grow: 1;
}

.service-features {
    list-style: none;
    margin-bottom: var(--spacing-lg);
    padding: 0;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    font-size: var(--font-sm);
    color: var(--text-secondary);
    margin-bottom: 10px;
    opacity: 0.8;
    transition: all 0.3s;
}

.service-card:hover .feature-item {
    opacity: 1;
    transform: translateX(-3px);
    /* RTL */
}

.check-icon {
    color: var(--secondary-teal);
    font-weight: bold;
    font-size: 18px;
}

.service-link {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-xs);
    color: var(--primary-cyan);
    font-weight: 600;
    font-size: var(--font-base);
    margin-top: auto;
    transition: all 0.3s;
}

.service-link:hover {
    gap: var(--spacing-sm);
    color: var(--accent-amber);
}

.arrow-icon {
    transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.service-link:hover .arrow-icon {
    transform: translateX(-6px);
    animation: arrowPulse 0.6s ease infinite;
}

@keyframes arrowPulse {

    0%,
    100% {
        transform: translateX(-6px);
    }

    50% {
        transform: translateX(-10px);
    }
}

/* Disable animations for reduced motion */
@media (prefers-reduced-motion: reduce) {

    .service-card,
    .service-icon-wrapper,
    .service-link,
    .arrow-icon {
        animation: none !important;
        transition: none !important;
    }
}
```

## File: components/common/Card/index.jsx

- Extension: .jsx
- Language: javascript
- Size: 1405 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```javascript
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

```

## File: components/sections/AboutUs/AboutUs.css

- Extension: .css
- Language: unknown
- Size: 3034 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```unknown
.about-us-section {
    padding: var(--spacing-2xl) 0;
    position: relative;
    overflow: hidden;
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-2xl);
    align-items: center;
}

/* Visual Side */
.about-visual {
    position: relative;
}

.image-stack {
    position: relative;
    padding: var(--spacing-lg);
}

.main-image-wrapper {
    border-radius: var(--radius-2xl) var(--radius-lg) var(--radius-2xl) var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-2xl);
    position: relative;
    z-index: 1;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.main-image {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
}

.main-image-wrapper:hover .main-image {
    transform: scale(1.05);
}

.experience-badge {
    position: absolute;
    bottom: -20px;
    right: -20px;
    background: #fff;
    padding: var(--spacing-lg);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-2xl);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-width: 160px;
    border: 4px solid var(--bg-secondary);
}

.experience-badge .years {
    font-size: 3.5rem;
    font-weight: 800;
    color: var(--primary-cyan);
    line-height: 1;
    margin-bottom: 5px;
}

.experience-badge .text {
    font-size: 1rem;
    color: var(--text-primary);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Content Side */
.about-content {
    text-align: right;
    /* RTL */
}

.about-description {
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: var(--spacing-xl);
}

.features-list {
    display: grid;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-xl);
}

.feature-item {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
}

.feature-item .icon {
    font-size: 1.5rem;
    color: var(--secondary-color);
    margin-top: 5px;
    flex-shrink: 0;
}

.feature-item h4 {
    font-size: 1.1rem;
    color: var(--text-primary);
    margin: 0 0 5px 0;
}

.feature-item p {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin: 0;
}

/* Responsive */
@media (max-width: 1024px) {
    .about-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-xl);
    }

    .about-visual {
        order: 2;
        /* Image below text on tablet/mobile if preferred, or remove to keep top */
        max-width: 600px;
        margin: 0 auto;
    }

    .experience-badge {
        transform: translate(10%, 10%);
    }
}

@media (max-width: 768px) {
    .about-us-section {
        padding: var(--spacing-xl) 0;
    }

    .experience-badge {
        padding: var(--spacing-md);
        min-width: 100px;
    }

    .experience-badge .years {
        font-size: 2rem;
    }
}
```

## File: components/sections/AboutUs/index.jsx

- Extension: .jsx
- Language: javascript
- Size: 3664 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```javascript
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
                                <LazyImage src="/hero-bg.jpg" alt="About Alnajm Alazrak" className="main-image" />
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
                            في النجم الأزرق، لا نقدم مجرد رحلات، بل نصمم تجارب حياة. نحن نؤمن بأن السفر هو أكثر من مجرد انتقال من مكان لآخر؛ إنه اكتشاف للذات وللعالم من حولنا.
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

```

## File: components/sections/Testimonials/index.jsx

- Extension: .jsx
- Language: javascript
- Size: 3318 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```javascript
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../../../data';
import './Testimonials.css';

const Testimonials = () => {
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

```

## File: components/sections/Testimonials/Testimonials.css

- Extension: .css
- Language: unknown
- Size: 3456 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```unknown
.testimonials-section {
    background-color: var(--bg-secondary);
    text-align: center;
}

.section-header {
    margin-bottom: var(--spacing-2xl);
}

.section-title {
    font-size: var(--font-3xl);
    color: var(--text-primary);
    margin-bottom: var(--spacing-sm);
}

.section-subtitle {
    color: var(--text-secondary);
    font-size: var(--font-lg);
}

.testimonials-carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-lg);
    max-width: 900px;
    margin: 0 auto;
    position: relative;
}

.testimonial-card-wrapper {
    width: 100%;
    min-height: 300px;
}

.testimonial-card {
    background: var(--bg-primary);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    box-shadow: var(--shadow-lg);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-lg);
    position: relative;
}

@media (min-width: 768px) {
    .testimonial-card {
        flex-direction: row;
        text-align: right;
        padding: var(--spacing-2xl);
    }
}

.testimonial-image {
    position: relative;
    flex-shrink: 0;
}

.testimonial-image img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid white;
    box-shadow: var(--shadow-md);
}

.quote-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 32px;
    height: 32px;
    background: var(--gradient-sunset);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    box-shadow: var(--shadow-sm);
}

.testimonial-content {
    flex: 1;
}

.stars {
    color: var(--accent-amber);
    font-size: 20px;
    margin-bottom: var(--spacing-sm);
}

.review-text {
    font-size: var(--font-lg);
    color: var(--text-secondary);
    margin-bottom: var(--spacing-md);
    font-style: italic;
    line-height: 1.8;
}

.reviewer-name {
    color: var(--text-primary);
    margin-bottom: 4px;
}

.reviewer-role {
    font-size: var(--font-sm);
    color: var(--primary-cyan);
    font-weight: 600;
}

.carousel-btn {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: none;
    background: white;
    color: var(--text-primary);
    font-size: 24px;
    cursor: pointer;
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

.carousel-btn:hover {
    background: var(--primary-cyan);
    color: white;
    transform: scale(1.1);
}

.carousel-dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: var(--spacing-lg);
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--bg-tertiary);
    cursor: pointer;
    transition: all var(--transition-base);
}

.dot.active {
    width: 24px;
    border-radius: 10px;
    background: var(--primary-cyan);
}

/* Mobile Adjustments */
@media (max-width: 768px) {
    .carousel-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    .prev {
        left: -10px;
    }

    .next {
        right: -10px;
    }

    .testimonial-card {
        padding: var(--spacing-lg);
    }
}
```

## File: components/sections/DestinationsCarousel/DestinationsCarousel.css

- Extension: .css
- Language: unknown
- Size: 6863 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-17 14:38:32

### Code

```unknown
.destinations-grid-section {
    padding: var(--spacing-xl) 0;
    position: relative;
}

/* Static Grid Container */
.destinations-static-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    min-height: 600px;
}

/* Grid Item */
.destination-grid-item {
    position: relative;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    transition: flex 0.5s ease;
}

.destination-grid-item:last-child {
    border-right: none;
}

.grid-image-wrapper {
    position: absolute;
    inset: 0;
    z-index: 1;
}

.grid-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s ease;
}

.destination-grid-item:hover .grid-image {
    transform: scale(1.1);
}

.grid-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 100%);
    z-index: 2;
    transition: background 0.3s ease;
}

.destination-grid-item:hover .grid-overlay {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.3) 100%);
}

.grid-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: var(--spacing-lg);
    z-index: 3;
    color: #fff;
    transform: translateY(20px);
    transition: transform 0.3s ease;
}

.destination-grid-item:hover .grid-content {
    transform: translateY(0);
}

.grid-header h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 5px 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.grid-location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.9rem;
    margin-bottom: var(--spacing-md);
}

.grid-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    padding-top: var(--spacing-sm);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.destination-grid-item:hover .grid-footer {
    opacity: 1;
}

.grid-duration {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9);
}

.grid-cta {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--secondary-color);
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* --- Modal Styles (Text Focused Redesign) --- */
.destination-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(8px);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-md);
}

.destination-modal-content {
    background: #ffffff;
    width: 100%;
    max-width: 700px;
    /* Reduced width for text focus */
    border-radius: var(--radius-xl);
    overflow: hidden;
    position: relative;
    box-shadow: var(--shadow-2xl);
    border: 1px solid rgba(0, 0, 0, 0.05);
    max-height: 90vh;
    overflow-y: auto;
}

/* .modal-close-btn {
    position: absolute;
    top: var(--spacing-md);
    left: var(--spacing-md);
    z-index: 10;
    background: rgba(0, 0, 0, 0.05);
    color: #0F172A;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.modal-close-btn:hover {
    background: var(--primary-color);
    color: #fff;
    transform: rotate(90deg);
} */
/* ============ Updated Modal Close Button ============ */
.modal-close-btn {
    /* Reset absolute positioning to sit in the layout flow */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    /* Layout & Spacing */
    width: 100%;
    height: 52px;
    margin-bottom: var(--spacing-sm);
    /* Gap between this and Book Now button */

    /* Visuals */
    background: var(--bg-tertiary);
    color: var(--text-secondary);
    border: none;
    border-radius: var(--radius-md);

    /* Typography */
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: var(--font-base);
    cursor: pointer;
    transition: all var(--transition-base);
}

.modal-close-btn:hover {
    /* Uses your brand blue on hover */
    background: var(--primary-blue);
    color: #FFFFFF;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.modal-close-btn:active {
    transform: translateY(0);
}

.modal-text-layout {
    padding: var(--spacing-xl);
    text-align: right;
}

.modal-text-header {
    margin-bottom: var(--spacing-lg);
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: var(--spacing-md);
}

.modal-country-tag {
    color: var(--primary-color);
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: block;
    margin-bottom: 5px;
}

.modal-text-header h2 {
    font-size: 2.2rem;
    margin: 0;
    color: #0F172A;
}

.modal-section {
    margin-bottom: var(--spacing-xl);
}

.modal-section h3 {
    font-size: 1.2rem;
    color: #0F172A;
    margin-bottom: var(--spacing-md);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.section-icon {
    color: var(--secondary-color);
}

.modal-description {
    color: #475569;
    line-height: 1.8;
    font-size: 1.05rem;
}

.modal-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-xl);
}

.info-list {
    list-style: none;
    padding: 0;
}

.info-list li {
    position: relative;
    padding-right: 1.5rem;
    margin-bottom: 0.75rem;
    color: #334155;
    font-weight: 500;
}

.info-list li::before {
    content: "•";
    color: var(--primary-color);
    font-weight: bold;
    position: absolute;
    right: 0;
    top: 0;
}

.modal-text-footer {
    margin-top: var(--spacing-lg);
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
    .destinations-static-grid {
        grid-template-columns: repeat(2, 1fr);
        min-height: auto;
    }

    .destination-grid-item {
        height: 400px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
}

@media (max-width: 768px) {
    .destinations-static-grid {
        grid-template-columns: 1fr;
    }

    .destination-grid-item {
        height: 350px;
    }

    .modal-columns {
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
    }

    .modal-text-header h2 {
        font-size: 1.8rem;
    }
}
```

## File: components/sections/DestinationsCarousel/index.jsx

- Extension: .jsx
- Language: javascript
- Size: 7437 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-20 22:21:41

### Code

```javascript
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

```

## File: components/sections/PassportCheck/index.jsx

- Extension: .jsx
- Language: javascript
- Size: 4957 bytes
- Created: 2025-12-29 17:53:33
- Modified: 2025-12-29 17:53:33

### Code

```javascript
import { useState } from 'react';
import StatusResult from './StatusResult';
import './PassportCheck.css';

const PassportCheck = () => {
  const [passportNumber, setPassportNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Input validation function
  const validatePassportNumber = (number) => {
    const trimmed = number.trim().toUpperCase();

    // Check if empty
    if (!trimmed) {
      return { valid: false, error: 'الرجاء إدخال رقم الجواز' };
    }

    // Check length (typical passport numbers are 6-12 characters)
    if (trimmed.length < 3 || trimmed.length > 20) {
      return { valid: false, error: 'يجب أن يكون رقم الجواز بين 3 و 20 حرفاً' };
    }

    // Allow alphanumeric characters, hyphens, and spaces
    const validPattern = /^[A-Z0-9\s\-]+$/;
    if (!validPattern.test(trimmed)) {
      return { valid: false, error: 'رقم الجواز يحتوي على أحرف غير صالحة' };
    }

    return { valid: true, sanitized: trimmed };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset states
    setError(null);
    setResult(null);

    // Validate input
    const validation = validatePassportNumber(passportNumber);
    if (!validation.valid) {
      setError(validation.error);
      return;
    }

    setLoading(true);

    try {
      // Call Vercel API route with sanitized input
      const response = await fetch(
        `/api/check-visa-status?passport_number=${encodeURIComponent(validation.sanitized)}`
      );

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 404) {
          setResult({
            found: false,
            message: data.message || 'رقم الجواز غير موجود في نظامنا',
          });
        } else {
          setError(data.error || 'حدث خطأ. الرجاء المحاولة مرة أخرى.');
        }
      } else {
        setResult({
          found: true,
          passport_number: data.passport_number,
          status: data.status,
          updated_at: data.updated_at,
          admin_notes: data.admin_notes,
          first_name: data.first_name,
          last_name: data.last_name,
          visa_type: data.visa_type,
          passport_received_date: data.passport_received_date,
          embassy_submit_date: data.embassy_submit_date,
          expected_exit_date: data.expected_exit_date,
        });
      }
    } catch (err) {
      console.error('Error checking visa status:', err);
      setError('تعذر الاتصال بالخادم. الرجاء المحاولة لاحقاً.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setPassportNumber('');
    setResult(null);
    setError(null);
  };

  return (
    <section className="passport-check-section">
      <div className="container">
        <div className="passport-check-wrapper">
          <div className="passport-check-header">
            <h2 className="section-title">التحقق من حالة التأشيرة</h2>
            <p className="section-subtitle">
              أدخل رقم جواز سفرك للتحقق من حالة التأشيرة
            </p>
          </div>

          <div className="passport-check-card">
            <form onSubmit={handleSubmit} className="passport-check-form">
              <div className="form-group">
                <label htmlFor="passport-number" className="form-label">
                  رقم الجواز
                </label>
                <input
                  type="text"
                  id="passport-number"
                  className="form-input"
                  placeholder="أدخل رقم جواز سفرك"
                  value={passportNumber}
                  onChange={(e) => setPassportNumber(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>

              {error && (
                <div className="error-message" role="alert">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="btn-check"
                disabled={loading || !passportNumber.trim()}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    جاري التحقق...
                  </>
                ) : (
                  'استعلام'
                )}
              </button>
            </form>

            {result && (
              <StatusResult
                result={result}
                onReset={handleReset}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassportCheck;


```

## File: components/sections/PassportCheck/PassportCheck.css

- Extension: .css
- Language: unknown
- Size: 8890 bytes
- Created: 2025-12-29 17:21:40
- Modified: 2025-12-29 17:21:40

### Code

```unknown
.passport-check-section {
  padding: var(--spacing-2xl) 0;
  background: var(--bg-secondary);
  direction: rtl;
  text-align: right;
}

.passport-check-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.passport-check-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
  direction: rtl;
}

.passport-check-header .section-title {
  font-size: var(--font-3xl);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.passport-check-header .section-subtitle {
  font-size: var(--font-lg);
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.passport-check-card {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-lg);
}

.passport-check-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.form-label {
  font-size: var(--font-base);
  font-weight: 600;
  color: var(--text-primary);
}

.form-input {
  width: 100%;
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: var(--font-base);
  border: 2px solid var(--bg-tertiary);
  border-radius: var(--radius-md);
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-cyan);
  box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);
}

.form-input:disabled {
  background: var(--bg-tertiary);
  cursor: not-allowed;
  opacity: 0.6;
}

.form-input::placeholder {
  color: var(--text-muted);
}

.error-message {
  padding: var(--spacing-md);
  background: rgba(236, 72, 153, 0.1);
  border: 1px solid var(--accent-coral);
  border-radius: var(--radius-md);
  color: var(--accent-coral);
  font-size: var(--font-sm);
  font-weight: 500;
}

.btn-check {
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--font-base);
  font-weight: 600;
  color: white;
  background: var(--gradient-ocean);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  box-shadow: var(--shadow-md);
}

.btn-check:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-check:active:not(:disabled) {
  transform: translateY(0);
}

.btn-check:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.status-result {
  margin-top: var(--spacing-2xl);
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.status-card {
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  border: 2px solid;
  text-align: center;
}

.status-card.found {
  background: var(--bg-primary);
}

.status-card.not-found {
  background: var(--bg-secondary);
  border-color: var(--text-muted);
}

.status-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.status-icon {
  font-size: 48px;
  margin-bottom: var(--spacing-sm);
}

.status-icon-large {
  font-size: 64px;
  margin-bottom: var(--spacing-md);
}

.status-info {
  text-align: center;
}

.status-title {
  font-size: var(--font-2xl);
  font-weight: 800;
  margin-bottom: var(--spacing-sm);
}

.status-passport {
  font-size: var(--font-base);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xs);
}

.status-passport strong {
  color: var(--text-primary);
  font-weight: 700;
}

.status-date {
  font-size: var(--font-sm);
  color: var(--text-muted);
}

.status-body {
  margin-bottom: var(--spacing-lg);
}

.status-message {
  font-size: var(--font-base);
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.admin-notes {
  margin-top: var(--spacing-lg);
  padding: var(--spacing-md);
  background: rgba(255, 255, 255, 0.5);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--primary-cyan);
  text-align: left;
  font-size: var(--font-sm);
  color: var(--text-secondary);
}

.admin-notes strong {
  color: var(--text-primary);
  font-weight: 600;
}

.btn-reset {
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--font-sm);
  font-weight: 600;
  color: var(--primary-cyan);
  background: transparent;
  border: 2px solid var(--primary-cyan);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-reset:hover {
  background: var(--primary-cyan);
  color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
  .passport-check-card {
    padding: var(--spacing-lg);
  }

  .passport-check-header .section-title {
    font-size: var(--font-2xl);
  }

  .status-icon-large {
    font-size: 48px;
  }

  .status-title {
    font-size: var(--font-xl);
  }
}

/* Timeline / Schedule Styles - Added */
.timeline-container {
  margin-top: var(--spacing-xl);
  position: relative;
  padding-right: var(--spacing-lg); /* RTL adjustment */
}

/* Vertical Line */
.timeline-container::before {
  content: "";
  position: absolute;
  top: 0;
  right: 15px; /* RTL adjustment */
  height: 100%;
  width: 2px;
  background: var(--bg-tertiary);
  z-index: 0;
}

.timeline-step {
  position: relative;
  margin-bottom: var(--spacing-xl);
  padding-right: var(--spacing-2xl); /* RTL adjustment: space for dot */
  z-index: 1;
}

.timeline-step:last-child {
  margin-bottom: 0;
}

/* Timeline Dot */
.timeline-marker {
  position: absolute;
  right: 0; /* RTL adjustment */
  top: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--bg-primary);
  border: 2px solid var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-sm);
  z-index: 2;
  transition: all 0.3s ease;
}

/* Completed Step */
.timeline-step.completed .timeline-marker {
  background: var(--secondary-teal);
  border-color: var(--secondary-teal);
  color: white;
  box-shadow: 0 0 0 4px rgba(20, 184, 166, 0.2);
}

/* Active Step */
.timeline-step.active .timeline-marker {
  background: white;
  border-color: var(--accent-amber);
  color: var(--accent-amber);
  box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.2);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(245, 158, 11, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0);
  }
}

.timeline-content {
  background: var(--bg-primary);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  border: 1px solid var(--bg-tertiary);
  transition: all 0.3s ease;
}

.timeline-step.active .timeline-content {
  border-color: var(--accent-amber);
  box-shadow: var(--shadow-md);
  background: linear-gradient(to left, rgba(245, 158, 11, 0.05), transparent);
}

.timeline-step.completed .timeline-content {
  border-color: var(--secondary-teal);
  background: linear-gradient(to left, rgba(20, 184, 166, 0.05), transparent);
}

.timeline-date {
  font-size: var(--font-xs);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xs);
  display: block;
  font-family: monospace; /* For better date alignment */
}

.timeline-title {
  font-size: var(--font-base);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
}

.timeline-desc {
  font-size: var(--font-sm);
  color: var(--text-muted);
  line-height: 1.4;
}

/* New Header Styles */
.status-header-premium {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--spacing-xl);
  text-align: center;
  border-bottom: 1px solid var(--bg-tertiary);
  padding-bottom: var(--spacing-lg);
}

.premium-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 8px 16px;
  background: rgba(8, 145, 178, 0.1); /* Cyan tint */
  color: var(--primary-cyan);
  border-radius: var(--radius-full);
  font-size: var(--font-sm);
  font-weight: 700;
  margin-top: var(--spacing-sm);
  border: 1px solid rgba(8, 145, 178, 0.2);
}

.visa-type-container {
  margin-top: var(--spacing-md);
}

.visa-type-label {
  font-size: var(--font-xs);
  color: var(--text-muted);
  display: block;
  margin-bottom: 4px;
}

.visa-type-value {
  font-size: var(--font-lg);
  font-weight: 800;
  color: var(
    --primary-gold
  ); /* Assuming grid has a gold variable, else use #F59E0B */
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

```

## File: components/sections/PassportCheck/StatusResult.jsx

- Extension: .jsx
- Language: javascript
- Size: 6650 bytes
- Created: 2025-12-29 17:21:41
- Modified: 2025-12-29 17:21:41

### Code

```javascript
import './PassportCheck.css';

const StatusResult = ({ result, onReset }) => {
  if (!result) return null;

  const getStatusConfig = (status) => {
    const configs = {
      ready: {
        label: 'جاهزة',
        icon: '✓',
        color: 'var(--secondary-teal)',
        bgColor: 'rgba(20, 184, 166, 0.1)',
        message: 'تأشيرتك جاهزة! يمكنك المتابعة مع خطط سفرك.',
      },
      in_embassy: {
        label: 'في السفارة',
        icon: '🏛️',
        color: 'var(--accent-amber)',
        bgColor: 'rgba(245, 158, 11, 0.1)',
        message: 'جواز السفر الخاص بك حالياً في السفارة لإتمام الإجراءات.',
      },
      pending: {
        label: 'معلقة',
        icon: '📋',
        color: 'var(--text-secondary)',
        bgColor: 'rgba(71, 85, 105, 0.1)',
        message: 'طلب التأشيرة الخاص بك معلق. سنقوم بتحديثك بمجرد بدء المعالجة.',
      },
      rejected: {
        label: 'مرفوضة',
        icon: '✗',
        color: 'var(--accent-coral)',
        bgColor: 'rgba(236, 72, 153, 0.1)',
        message: 'للأسف، تم رفض طلب التأشيرة الخاص بك. يرجى الاتصال بنا لمزيد من المعلومات.',
      },
    };

    return configs[status] || configs.pending;
  };

  if (!result.found) {
    return (
      <div className="status-result">
        <div className="status-card not-found">
          <div className="status-icon">🔍</div>
          <h3 className="status-title">غير موجود</h3>
          <p className="status-message">{result.message}</p>
          <p className="status-help">
            يرجى التحقق من رقم الجواز أو الاتصال بفريق الدعم للحصول على المساعدة.
          </p>
          <button onClick={onReset} className="btn-reset">
            التحقق من جواز آخر
          </button>
        </div>
      </div>
    );
  }

  const statusConfig = getStatusConfig(result.status);
  const fullName = [result.first_name, result.last_name].filter(Boolean).join(' ');
  
  // Format dates helper
  const formatDate = (dateString) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString('ar-SA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Timeline steps configuration
  const timelineSteps = [
    {
      key: 'received',
      title: 'استلام الجواز',
      desc: 'تم استلام الجواز في الوكالة',
      date: result.passport_received_date,
      icon: '📂',
    },
    {
      key: 'embassy',
      title: 'التقديم للسفارة',
      desc: 'تم تسليم الجواز للسفارة للمعالجة',
      date: result.embassy_submit_date,
      icon: '🏛️',
    },
    {
      key: 'exit',
      title: 'الخروج المتوقع',
      desc: 'الموعد المتوقع لانتهاء المعالجة',
      date: result.expected_exit_date,
      icon: '✨',
    },
  ];

  // Determine step status (completed, active, pending) based on dates and overall status
  const getStepStatus = (step, index) => {
    // If we have a date, it's at least active or completed
    if (step.date) {
      const stepDate = new Date(step.date);
      const today = new Date();
      
      // If date is in past, it's completed
      if (stepDate < today) return 'completed';
      // If date is today or future, it's active
      return 'active';
    }
    
    // Fallback logic using overall status if dates aren't fully populated
    if (result.status === 'ready') return 'completed';
    if (result.status === 'rejected') return index === 0 ? 'completed' : 'pending';
    
    if (result.status === 'in_embassy') {
        if (index <= 1) return 'completed';
        return 'active'; 
    }

    // Default for pending status
    if (index === 0) return 'active';
    return 'pending';
  };

  return (
    <div className="status-result">
      <div className="status-card found">
        {/* Premium Header */}
        <div className="status-header-premium">
          <div className="premium-info">
            <h2 className="status-title" style={{ color: statusConfig.color }}>
              {statusConfig.icon} {statusConfig.label}
            </h2>
            
            {fullName && (
              <p className="status-name">
                مرحباً، <strong>{fullName}</strong>
              </p>
            )}
            
            <div className="premium-badge">
              رقم الجواز: {result.passport_number}
            </div>

            {result.visa_type && (
               <div className="visa-type-container">
                 <span className="visa-type-label">نوع التأشيرة</span>
                 <span className="visa-type-value">{result.visa_type}</span>
               </div>
            )}
          </div>
        </div>

        {/* Timeline Schedule */}
        <div className="timeline-container">
          {timelineSteps.map((step, index) => {
            const stepStatus = getStepStatus(step, index);
            const formattedDate = formatDate(step.date);
            
            return (
              <div key={step.key} className={`timeline-step ${stepStatus}`}>
                <div className="timeline-marker">
                  {stepStatus === 'completed' ? '✓' : step.icon}
                </div>
                <div className="timeline-content">
                  {formattedDate ? (
                    <span className="timeline-date">{formattedDate}</span>
                  ) : (
                    <span className="timeline-date">--/--/----</span>
                  )}
                  <h4 className="timeline-title">{step.title}</h4>
                  <p className="timeline-desc">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="status-body" style={{ marginTop: '2rem' }}>
            {statusConfig.message && (
                <p className="status-message">{statusConfig.message}</p>
            )}
          
            {result.admin_notes && (
                <div className="admin-notes">
                <strong>ملاحظة من الإدارة:</strong> {result.admin_notes}
                </div>
            )}
        </div>

        <button onClick={onReset} className="btn-reset">
          التحقق من جواز آخر
        </button>
      </div>
    </div>
  );
};

export default StatusResult;
```

## File: components/sections/HomeServices/index.jsx

- Extension: .jsx
- Language: javascript
- Size: 7991 bytes
- Created: 2025-12-27 19:53:37
- Modified: 2025-12-27 19:53:37

### Code

```javascript
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiBriefcase, FiMap, FiCheckCircle, FiGlobe } from 'react-icons/fi';
import './HomeServices.css';
import LazyImage from '../../common/LazyImage';

const servicesList = [
    {
        id: 'musaned',
        icon: <FiGlobe />,
        title: 'تفاويض العمالة عبر مساند',
        description: 'نقدم حلولاً متكاملة لإصدار وتوثيق تفاويض تأشيرات العمالة المنزلية عبر منصة مساند بدقة وعناية.',
        image: '/flight.jpg',
        features: ['توثيق فوري ومعتمد', 'ربط آلي مع منصة مساند', 'دعم فني متكامل']
    },
    {
        id: 'visit-visa',
        icon: <FiBriefcase />,
        title: 'تأشيرات الزيارة العائلية',
        description: 'نسهل لك إجراءات جمع شمل العائلة من خلال استخراج تأشيرات الزيارة للأقارب من الدرجة الأولى.',
        image: '/hotel.jpg',
        features: ['مراجعة دقيقة للمستندات', 'سرعة عالية في الإنجاز', 'نسبة قبول مرتفعة']
    },
    {
        id: 'manpower',
        icon: <FiMap />,
        title: 'استقدام الأيدي العاملة',
        description: 'توفير وتخليص معاملات الكوادر المهنية لمختلف التخصصات بموجب الترخيص الرسمي رقم 19.',
        image: '/hero-bg.jpg',
        features: ['كوادر مهنية مؤهلة', 'إجراءات نظامية وقانونية', 'خبرة واسعة في الاستقدام']
    },
    {
        id: 'residency',
        icon: <FiCheckCircle />,
        title: 'خدمات الإقامة العائلية',
        description: 'متخصصون في إنهاء معاملات استقدام الزوجة والأبناء للإقامة الدائمة وربطها بملف رب الأسرة.',
        image: '/cairo.jpg',
        features: ['استقرار عائلي متكامل', 'متابعة حثيثة للطلبات', 'حلول للمعاملات المتعثرة']
    }
];

const HomeServices = () => {
    const [activeService, setActiveService] = useState(servicesList[0]);

    return (
        <section className="section home-services-section">
            <div className="container">
                <div className="section-header text-center mb-xl">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="section-tag"
                    >
                        خدماتنا
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        حلول وخدمات <span className="text-gradient">متكاملة</span>
                    </motion.h2>
                    <p className="section-subtitle">نضع خبرتنا بين يديك لتسهيل كافة إجراءاتك وتأشيراتك في مكان واحد</p>
                </div>

                <div className="services-showcase">
                    {/* Left Column: Interactive List */}
                    <div className="services-list">
                        {servicesList.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`service-list-item ${activeService.id === service.id ? 'active' : ''}`}
                                onMouseEnter={() => setActiveService(service)}
                                onClick={() => setActiveService(service)} // For mobile tap
                            >
                                <div className="service-item-icon">
                                    {service.icon}
                                </div>
                                <div className="service-item-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                                <div className="service-item-arrow">
                                    <FiArrowLeft />
                                </div>
                            </motion.div>
                        ))}

                        <div className="services-cta-mobile">
                            <Link to="/services" className="btn btn-primary w-full">
                                عرض جميع الخدمات
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Visual Preview */}
                    <div className="services-preview">
                        <div className="preview-card-wrapper">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeService.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="preview-image-container"
                                >
                                    <LazyImage
                                        src={activeService.image}
                                        alt={activeService.title}
                                        className="preview-image"
                                    />
                                    <div className="preview-overlay"></div>
                                </motion.div>
                            </AnimatePresence>

                            <div className="preview-content glass">
                                <motion.div
                                    key={activeService.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h3>{activeService.title}</h3>
                                    <ul className="preview-features">
                                        {activeService.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <span className="dot"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className="btn btn-sm btn-primary">
                                        احجز الآن
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
```

## File: components/sections/HomeServices/HomeServices.css

- Extension: .css
- Language: unknown
- Size: 5594 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-17 14:02:47

### Code

```unknown
/* Home Services Showcase Styles */

.home-services-section {
    position: relative;
    overflow: hidden;
    padding: 6rem 0;
    background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
}

.section-tag {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background: rgba(8, 145, 178, 0.1);
    color: var(--primary-cyan);
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.services-showcase {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
    align-items: center;
}

/* Left Column: List */
.services-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.service-list-item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;
    background: white;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid transparent;
    position: relative;
    overflow: hidden;
}

.service-list-item:hover,
.service-list-item.active {
    background: white;
    box-shadow: 0 10px 30px rgba(8, 145, 178, 0.1);
    transform: translateX(-10px);
    /* RTL pull */
    border-color: rgba(8, 145, 178, 0.2);
}

.service-list-item.active::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: var(--primary-cyan);
}

.service-item-icon {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: var(--bg-secondary);
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    transition: all 0.3s;
}

.service-list-item.active .service-item-icon {
    background: var(--primary-cyan);
    color: #004B87;
}

.service-item-content {
    flex: 1;
}

.service-item-content h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
    color: var(--text-primary);
}

.service-item-content p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.service-item-arrow {
    opacity: 0;
    transform: translateX(10px);
    transition: all 0.3s;
    color: var(--primary-cyan);
}

.service-list-item.active .service-item-arrow {
    opacity: 1;
    transform: translateX(0);
}

/* Right Column: Preview */
.services-preview {
    position: relative;
    height: 500px;
}

.preview-card-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: var(--shadow-xl);
}

.preview-image-container {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
}

.preview-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.preview-overlay {
    position: absolute;
    inset: 0;
    /* slightly lighter overlay so image remains visible under content */
    background: linear-gradient(to top, rgba(0, 0, 0, 0.55) 0%, transparent 60%);
}

.preview-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem;
    /* glass-style but lighter so it doesn't fully hide the image */
    background: rgba(15, 23, 42, 0.55);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    color: white;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    transform: translateY(0);
    transition: transform 0.3s ease;
    /* limit how much of the image the content can cover */
    max-height: 45vh;
    overflow-y: auto;
}

.preview-card-wrapper:hover .preview-content {
    transform: translateY(-5px);
}

.preview-content h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
    /* strong readable heading on the glass background */
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.preview-features {
    list-style: none;
    padding: 0;
    margin-bottom: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.preview-features li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    opacity: 0.9;
}

.preview-features .dot {
    width: 6px;
    height: 6px;
    background: var(--accent-amber);
    border-radius: 50%;
}

.services-cta-mobile {
    display: none;
}

/* Responsive */
@media (max-width: 992px) {
    .services-showcase {
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .services-preview {
        height: 400px;
        order: -1;
        /* Show image first on mobile */
    }

    .services-cta-mobile {
        display: block;
        margin-top: 1rem;
    }
}

@media (max-width: 768px) {
    .services-preview {
        height: 300px;
    }

    /* Make the preview content compact on small screens so it doesn't cover the whole image */
    .preview-content {
        padding: 1.5rem;
        bottom: 1rem;
        right: 1rem;
        left: 1rem;
        border-radius: 12px;
        max-height: 35vh;
    }

    /* Hide the long features list on mobile to reduce vertical space usage */
    .preview-features {
        display: none;
    }

    .preview-content h3 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    .service-list-item {
        padding: 1rem;
    }
}
```

## File: components/sections/Hero/Hero.css

- Extension: .css
- Language: unknown
- Size: 11267 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```unknown
/* ========================================
   PREMIUM HERO SLIDER
   ======================================== */

.hero-slider-premium {
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 700px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* ========================================
   BACKGROUND SLIDER
   ======================================== */

.hero-slider-backgrounds {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.hero-slider-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    will-change: opacity;
    transform: translateZ(0);
}

/* ========================================
   GLASSMORPHISM EFFECT
   ======================================== */

.glass {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px rgba(10, 15, 30, 0.15);
}

/* ========================================
   CONTENT
   ======================================== */

.hero-slider-content-wrapper {
    position: relative;
    z-index: 2;
    width: 100%;
    padding: 2rem;
}

.hero-slider-content {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    color: #fff;
}

/* ========================================
   DESTINATION TAG
   ======================================== */

.hero-destination-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 1.75rem;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 2rem;
    animation: tagFade 0.8s ease-out;
}

.tag-icon {
    font-size: 1.3rem;
}

@keyframes tagFade {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* ========================================
   HEADLINE & SUBTITLE
   ======================================== */

.hero-slider-headline {
    font-size: clamp(2.5rem, 7vw, 5.5rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    animation: contentFadeIn 0.8s ease-out 0.1s backwards;
}

.gradient-text {
    background: linear-gradient(135deg, #fff 0%, #f0f9ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: none;
    /* Remove shadow for gradient text */
}

.hero-slider-subtitle {
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.95);
    max-width: 650px;
    margin: 0 auto 3rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    animation: contentFadeIn 0.8s ease-out 0.2s backwards;
}

@keyframes contentFadeIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ========================================
   CTA BUTTONS
   ======================================== */

.hero-slider-cta {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    animation: contentFadeIn 0.8s ease-out 0.3s backwards;
}

.hero-btn-hero,
.hero-btn-hero-outline {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.1rem 2.5rem;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

/* Primary Button (Gold Gradient) */
.hero-btn-hero {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
    color: #fff;
    box-shadow:
        0 4px 20px rgba(8, 145, 178, 0.4),
        0 8px 30px rgba(245, 158, 11, 0.2);
}

.hero-btn-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.6s;
}

.hero-btn-hero:hover::before {
    left: 100%;
}

.hero-btn-hero:hover {
    transform: translateY(-2px);
    box-shadow:
        0 6px 25px rgba(8, 145, 178, 0.5),
        0 12px 40px rgba(245, 158, 11, 0.3);
}

/* Outline Button (Glassmorphism) */
.hero-btn-hero-outline {
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
    border: 2px solid rgba(255, 255, 255, 0.4);
}

.hero-btn-hero-outline:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.6);
    transform: translateY(-2px);
}

.btn-arrow {
    font-size: 1.3rem;
    transition: transform 0.3s;
}

.hero-btn-hero:hover .btn-arrow {
    transform: translateX(-5px);
}

/* ========================================
   NAVIGATION ARROWS
   ======================================== */

.hero-nav-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0.8;
}

.hero-nav-arrow:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1.1);
    background: rgba(255, 255, 255, 0.25);
}

.hero-nav-prev {
    right: 3rem;
    /* RTL: previous is on right */
}

.hero-nav-next {
    left: 3rem;
    /* RTL: next is on left */
}

/* ========================================
   CONTROLS CONTAINER
   ======================================== */

.hero-slider-controls {
    position: absolute;
    bottom: 3rem;
    left: 0;
    right: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;
    gap: 2rem;
}

/* ========================================
   SLIDE COUNTER
   ======================================== */

.slide-counter {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Courier New', monospace;
}

.slide-counter .current {
    font-size: 1.3rem;
    color: var(--accent-color);
}

.slide-counter .separator {
    opacity: 0.5;
    margin: 0 0.25rem;
}

.slide-counter .total {
    opacity: 0.8;
}

/* ========================================
   DOT INDICATORS
   ======================================== */

.slide-indicators-premium {
    display: flex;
    gap: 0.75rem;
    align-items: center;
}

.slide-dot-premium {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    border: none;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 0;
    position: relative;
}

.slide-dot-premium:hover {
    background: rgba(255, 255, 255, 0.6);
    transform: scale(1.2);
}

.slide-dot-premium.active {
    width: 35px;
    border-radius: 50px;
    background: #fff;
    animation: indicatorPulse 2s ease-in-out infinite;
}

@keyframes indicatorPulse {

    0%,
    100% {
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }

    50% {
        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
    }
}

/* ========================================
   PROGRESS BAR
   ======================================== */

.slide-progress {
    width: 200px;
    height: 4px;
    border-radius: 50px;
    padding: 0;
    overflow: hidden;
}

.progress-fill-premium {
    height: 100%;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    box-shadow: 0 0 10px rgba(8, 145, 178, 0.6);
    transition: width 100ms linear;
}

/* ========================================
   RESPONSIVE DESIGN
   ======================================== */

/* Tablets */
@media (max-width: 768px) {
    .hero-slider-premium {
        min-height: 600px;
    }

    .hero-slider-headline {
        font-size: clamp(2rem, 6vw, 3.5rem);
    }

    .hero-slider-subtitle {
        font-size: 1.1rem;
        margin-bottom: 2.5rem;
    }

    .hero-slider-cta {
        flex-direction: column;
        gap: 0.75rem;
    }

    .hero-btn-hero,
    .hero-btn-hero-outline {
        width: 100%;
        justify-content: center;
        padding: 1rem 2rem;
        font-size: 1rem;
    }

    .hero-slider-controls {
        padding: 0 2rem;
        bottom: 2rem;
    }

    .slide-counter {
        font-size: 0.9rem;
        padding: 0.6rem 1.2rem;
    }

    .slide-progress {
        width: 150px;
    }
}

/* Mobile */
@media (max-width: 480px) {
    .hero-slider-premium {
        min-height: 550px;
    }

    .hero-slider-content-wrapper {
        padding: 1rem;
    }

    .hero-destination-tag {
        padding: 0.65rem 1.3rem;
        font-size: 0.9rem;
        gap: 0.5rem;
    }

    .tag-icon {
        font-size: 1.1rem;
    }

    .hero-slider-headline {
        font-size: clamp(1.8rem, 7vw, 2.5rem);
        margin-bottom: 1rem;
    }

    .hero-slider-subtitle {
        font-size: 1rem;
        margin-bottom: 2rem;
    }

    .hero-slider-controls {
        flex-direction: column;
        align-items: center;
        padding: 0 1.5rem;
        gap: 1rem;
        bottom: 1.5rem;
    }

    .slide-counter {
        font-size: 0.85rem;
        padding: 0.5rem 1rem;
    }

    .slide-counter .current {
        font-size: 1.1rem;
    }

    .slide-indicators-premium {
        gap: 0.6rem;
    }

    .slide-dot-premium {
        width: 8px;
        height: 8px;
    }

    .slide-dot-premium.active {
        width: 28px;
    }

    .slide-progress {
        width: 100%;
        max-width: 250px;
    }

    .hero-nav-arrow {
        width: 44px;
        height: 44px;
        opacity: 0.6;
    }

    .hero-nav-prev {
        right: 1rem;
    }

    .hero-nav-next {
        left: 1rem;
    }
}

/* ========================================
   PERFORMANCE OPTIMIZATIONS
   ======================================== */

.hero-slider-background,
.hero-slider-content,
.progress-fill-premium {
    transform: translateZ(0);
    backface-visibility: hidden;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {

    .hero-slider-background,
    .hero-slider-content,
    .slide-dot-premium,
    .hero-btn-hero,
    .hero-btn-hero-outline,
    .hero-destination-tag,
    .hero-slider-headline,
    .hero-slider-subtitle,
    .hero-slider-cta {
        transition: none !important;
        animation: none !important;
    }
}
```

## File: components/sections/Hero/index.jsx

- Extension: .jsx
- Language: javascript
- Size: 9621 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```javascript
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMapPin, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import './Hero.css';

// Import backgrounds
import makkahBg from '/hero_makkah_background_1764893075599.jpg';
import mountainBg from '/hero_mountain_background_1764893090134.jpg';
import beachBg from '/beach.jpg';
import dubaiBg from '/dubai.jpg';
const heroSlides = [
    {
        id: 1,
        theme: 'makkah',
        background: makkahBg,
        tag: 'رحلة روحانية',
        headline: 'اكتشف مكة المكرمة',
        subtitle: 'رحلة الحج والعمرة بأفضل الخدمات والأسعار المميزة',
        cta: 'احجز رحلتك الآن',
        gradient: 'linear-gradient(180deg, rgba(8,145,178,0.2) 0%, rgba(8,145,178,0.75) 100%)'
    },
    {
        id: 2,
        theme: 'mountain',
        background: mountainBg,
        tag: 'مغامرة جبلية',
        headline: 'قمم الألب الخلابة',
        subtitle: 'تجربة فريدة في أجمل المناظر الطبيعية الجبلية',
        cta: 'استكشف الجبال',
        gradient: 'linear-gradient(180deg, rgba(99,102,241,0.2) 0%, rgba(99,102,241,0.75) 100%)'
    },
    {
        id: 3,
        theme: 'beach',
        background: beachBg,
        tag: 'جنة استوائية',
        headline: 'شواطئ المالديف الساحرة',
        subtitle: 'استرخ في أجمل الجزر الاستوائية بمياهها الفيروزية',
        cta: 'اكتشف الشواطئ',
        gradient: 'linear-gradient(180deg, rgba(6,182,212,0.2) 0%, rgba(6,182,212,0.75) 100%)'
    },
    {
        id: 4,
        theme: 'city',
        background: dubaiBg, // Placeholder
        tag: 'مدينة عصرية',
        headline: 'دبي المدينة المستقبلية',
        subtitle: 'استكشف عجائب العمارة الحديثة والحياة الفاخرة',
        cta: 'اكتشف المدن',
        gradient: 'linear-gradient(180deg, rgba(245,158,11,0.2) 0%, rgba(245,158,11,0.75) 100%)'
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [progress, setProgress] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setProgress(0);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
        setProgress(0);
    }, []);

    const goToSlide = useCallback((index) => {
        setCurrentSlide(index);
        setProgress(0);
    }, []);

    // Auto-play with progress
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    nextSlide();
                    return 0;
                }
                return prev + 2.86; // 2.86% every 100ms = 3.5 seconds
            });
        }, 100);

        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    const currentSlideData = heroSlides[currentSlide];

    return (
        <section
            className="hero-slider-premium"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Background Slider */}
            <div className="hero-slider-backgrounds">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        className="hero-slider-background"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                        style={{
                            backgroundImage: `${currentSlideData.gradient}, url(${currentSlideData.background})`
                        }}
                    />
                </AnimatePresence>
            </div>

            {/* Content */}
            <div className="hero-slider-content-wrapper">
                <div className="container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            className="hero-slider-content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Destination Tag */}
                            <motion.div
                                className="hero-destination-tag glass"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            >
                                <FiMapPin className="tag-icon" />
                                <span>{currentSlideData.tag}</span>
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                className="hero-slider-headline gradient-text"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                            >
                                {currentSlideData.headline}
                            </motion.h1>

                            {/* Subtitle */}
                            <motion.p
                                className="hero-slider-subtitle"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                            >
                                {currentSlideData.subtitle}
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                className="hero-slider-cta"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                            >
                                <Link to="/destinations" className="hero-btn-hero">
                                    <span>{currentSlideData.cta}</span>
                                    <span className="btn-arrow">←</span>
                                </Link>
                                <Link to="/contact" className="hero-btn-hero-outline glass">
                                    تواصل معنا
                                </Link>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                className="hero-nav-arrow hero-nav-prev glass"
                onClick={prevSlide}
                aria-label="الشريحة السابقة"
            >
                <FiArrowRight size={24} />
            </button>
            <button
                className="hero-nav-arrow hero-nav-next glass"
                onClick={nextSlide}
                aria-label="الشريحة التالية"
            >
                <FiArrowLeft size={24} />
            </button>

            {/* Controls Container */}  
            <div className="hero-slider-controls">
                {/* Slide Counter */}
                <div className="slide-counter glass">
                    <span className="current">{String(currentSlide + 1).padStart(2, '0')}</span>
                    <span className="separator">/</span>
                    <span className="total">{String(heroSlides.length).padStart(2, '0')}</span>
                </div>

                {/* Dot Indicators */}
                <div className="slide-indicators-premium">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            className={`slide-dot-premium ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`الذهاب إلى الشريحة ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="slide-progress glass">
                    <div
                        className="progress-fill-premium"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;

```

## File: components/widgets/WhatsAppWidget/index.jsx

- Extension: .jsx
- Language: javascript
- Size: 2210 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-20 22:22:12

### Code

```javascript
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

```

## File: components/widgets/WhatsAppWidget/WhatsAppWidget.css

- Extension: .css
- Language: unknown
- Size: 1832 bytes
- Created: 2025-12-27 17:38:00
- Modified: 2025-12-09 13:47:48

### Code

```unknown
.whatsapp-widget {
    position: fixed;
    bottom: var(--spacing-lg);
    right: var(--spacing-lg);
    z-index: var(--z-fixed);
    width: 60px;
    height: 60px;
    background-color: #25D366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
    cursor: pointer;
    text-decoration: none;
}

.whatsapp-icon {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
}

.whatsapp-pulse {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #25D366;
    border-radius: 50%;
    z-index: 1;
    animation: pulse-ring 2s infinite;
}

@keyframes pulse-ring {
    0% {
        transform: scale(1);
        opacity: 0.6;
    }

    100% {
        transform: scale(1.5);
        opacity: 0;
    }
}

.whatsapp-tooltip {
    position: absolute;
    right: 70px;
    top: 50%;
    transform: translateY(-50%) translateX(10px);
    background: white;
    color: var(--text-primary);
    padding: 8px 16px;
    border-radius: var(--radius-md);
    font-size: var(--font-sm);
    font-weight: 600;
    white-space: nowrap;
    box-shadow: var(--shadow-md);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);
}

.whatsapp-widget:hover .whatsapp-tooltip {
    opacity: 1;
    visibility: visible;
    transform: translateY(-50%) translateX(0);
}

/* Mobile Adjustments */
@media (max-width: 768px) {
    .whatsapp-widget {
        bottom: var(--spacing-md);
        right: var(--spacing-md);
        width: 50px;
        height: 50px;
    }

    .whatsapp-tooltip {
        display: none;
    }
}
```


```

## File: main.jsx

- Extension: .jsx
- Language: javascript
- Size: 744 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Register Service Worker for offline support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        if (import.meta.env.DEV) {
          console.log('SW registered: ', registration);
        }
      })
      .catch((registrationError) => {
        if (import.meta.env.DEV) {
          console.error('SW registration failed: ', registrationError);
        }
      });
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

## File: index.css

- Extension: .css
- Language: unknown
- Size: 8629 bytes
- Created: 2026-01-28 04:22:03
- Modified: 2026-01-28 04:22:03

### Code

```unknown
/* ========================================
   المفلحي - Modern Design System 
   Brand Identity: Deep Cerulean (#004B87)
======================================== */

/* ============ CSS Variables ============ */
:root {
  /* Brand Primary Color (Extracted from your image) */
  --primary-blue: #004B87;
  /* Deep Cerulean - Main Identity */
  --primary-dark: #003661;
  /* Darker Navy - Hover/Active states */
  --primary-light: #1E6EB0;
  /* Lighter Blue - Subtle accents */

  /* Tropical Sunset Palette (Balanced for deep blue) */
  --accent-amber: #F59E0B;
  /* Sunset Orange - Highlights/Buttons */
  --accent-coral: #FB7185;
  /* Soft Vibrant Coral - Special Accents */
  --secondary-teal: #0D9488;
  /* Dark Teal - Success/Nature */

  /* Neutral Colors (Modern & Clean) */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8FAFC;
  /* Slate 50 */
  --bg-tertiary: #F1F5F9;
  /* Slate 100 */
  --text-primary: #0F172A;
  /* Slate 900 - High Contrast */
  --text-secondary: #475569;
  /* Slate 600 - Readable Body */
  --text-muted: #94A3B8;
  /* Slate 400 */

  /* Modern Glassmorphism (Tinted with brand blue) */
  --glass-bg: rgba(255, 255, 255, 0.75);
  --glass-border: rgba(255, 255, 255, 0.5);
  --glass-shadow: 0 8px 32px 0 rgba(0, 75, 135, 0.12);
  --glass-blur: blur(12px);

  /* Gradients */
  --gradient-ocean: linear-gradient(135deg, #004B87 0%, #0E7490 100%);
  --gradient-sunset: linear-gradient(135deg, #F59E0B 0%, #EA580C 100%);
  --gradient-tropical: linear-gradient(135deg, #004B87 0%, #0D9488 100%);
  --gradient-overlay: linear-gradient(180deg, rgba(0, 75, 135, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%);

  /* Shadows (Tinted for a high-end feel) */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 75, 135, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 75, 135, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 75, 135, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-glow: 0 0 20px rgba(0, 75, 135, 0.25);

  /* Spacing (Mobile-First) */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 5rem;

  /* Border Radius (More Rounded) */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-bounce: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  /* Typography Scale */
  --font-xs: clamp(0.75rem, 2vw, 0.875rem);
  --font-sm: clamp(0.875rem, 2.5vw, 1rem);
  --font-base: clamp(1rem, 3vw, 1.125rem);
  --font-lg: clamp(1.125rem, 3.5vw, 1.25rem);
  --font-xl: clamp(1.25rem, 4vw, 1.5rem);
  --font-2xl: clamp(1.5rem, 5vw, 2rem);
  --font-3xl: clamp(2rem, 6vw, 3rem);
  --font-4xl: clamp(2.5rem, 8vw, 4.5rem);

  /* Font Families */
  --font-heading: 'Tajawal', sans-serif;
  --font-body: 'IBM Plex Sans Arabic', sans-serif;

  /* Z-index Scale */
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
}

/* ============ Global Reset ============ */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-body);
  font-size: var(--font-base);
  line-height: 1.6;
  color: var(--text-primary);
  background-color: var(--bg-primary);
  direction: rtl;
  overflow-x: hidden;
  min-height: 100vh;
}

/* ============ Typography ============ */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-heading);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

h1 {
  font-size: var(--font-4xl);
}

h2 {
  font-size: var(--font-3xl);
}

h3 {
  font-size: var(--font-2xl);
}

h4 {
  font-size: var(--font-xl);
}

h5 {
  font-size: var(--font-lg);
}

h6 {
  font-size: var(--font-base);
}

p {
  margin-bottom: var(--spacing-sm);
  color: var(--text-secondary);
}

a {
  color: var(--primary-blue);
  text-decoration: none;
  transition: color var(--transition-fast);
  font-weight: 500;
}

a:hover {
  color: var(--primary-light);
}

/* ============ Layout Utilities ============ */
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--spacing-lg);
  }
}

.section {
  padding: var(--spacing-2xl) 0;
  position: relative;
  overflow: hidden;
}

/* ============ Button Styles ============ */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  padding: 16px 32px;
  min-height: 52px;
  font-family: var(--font-heading);
  font-size: var(--font-base);
  font-weight: 700;
  text-align: center;
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-base);
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.btn-primary {
  background: var(--primary-blue);
  color: white;
  box-shadow: var(--shadow-lg);
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-3px);
  box-shadow: var(--shadow-glow);
}

.btn-accent {
  background: var(--gradient-sunset);
  color: white;
  box-shadow: var(--shadow-lg);
}

.btn-accent:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(245, 158, 11, 0.3);
}

.btn-outline {
  background: transparent;
  color: var(--primary-blue);
  border: 2px solid var(--primary-blue);
}

.btn-outline:hover {
  background: var(--primary-blue);
  color: white;
  transform: translateY(-3px);
}

.btn:active {
  transform: translateY(0) scale(0.98);
}

/* ============ Card Styles ============ */
.card {
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
  border: 1px solid rgba(0, 75, 135, 0.05);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.card-glass {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}

/* ============ Utilities ============ */
.text-gradient {
  background: var(--gradient-ocean);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.bg-gradient {
  background: var(--gradient-ocean);
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.grid {
  display: grid;
  gap: var(--spacing-lg);
}

/* ============ Animations ============ */
@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }
}

@keyframes pulse-glow {

  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(0, 75, 135, 0.4);
  }

  70% {
    box-shadow: 0 0 0 20px rgba(0, 75, 135, 0);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-pulse {
  animation: pulse-glow 2s infinite;
}

/* ============ Form Styles ============ */
.form-input,
.form-textarea {
  width: 100%;
  min-height: 52px;
  padding: 14px 20px;
  font-family: var(--font-body);
  font-size: var(--font-base);
  color: var(--text-primary);
  background-color: var(--bg-secondary);
  border: 2px solid transparent;
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary-blue);
  background-color: var(--bg-primary);
  box-shadow: 0 0 0 4px rgba(0, 75, 135, 0.1);
}

/* ============ Mobile Optimizations ============ */
@media (max-width: 768px) {
  .section {
    padding: var(--spacing-xl) 0;
  }

  h1 {
    line-height: 1.1;
  }

  .container {
    padding: 0 var(--spacing-sm);
  }
}
```

## File: App.jsx

- Extension: .jsx
- Language: javascript
- Size: 2700 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/layout';
import ErrorBoundary from './components/common/ErrorBoundary';
import Analytics from './components/common/Analytics';
import './App.css';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Destinations = lazy(() => import('./pages/Destinations'));
const Contact = lazy(() => import('./pages/Contact'));
const Admin = lazy(() => import('./pages/Admin'));

// Loading fallback component
const PageLoader = () => (
  <div className="page-loader" style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '60vh',
    flexDirection: 'column',
    gap: '20px'
  }}>
    <div className="spinner" style={{
      width: '40px',
      height: '40px',
      border: '3px solid rgba(8, 145, 178, 0.1)',
      borderTopColor: '#0891b2',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}></div>
    <style>{`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <ErrorBoundary>
      <Router>
        <Analytics />
        <div className="app" data-theme={theme}>
          <Navbar />

          {/* Theme Toggle Button */}
          {/* <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button> */}

          <main className="main-content">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin_najm_2026" element={<Admin />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;

```

## File: components/index.js

- Extension: .js
- Language: javascript
- Size: 147 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
// Master components barrel export
export * from './common';
export * from './layout';
export * from './sections';
export * from './widgets';

```

## File: pages/About.jsx

- Extension: .jsx
- Language: javascript
- Size: 19032 bytes
- Created: 2026-01-28 04:20:46
- Modified: 2026-01-28 04:20:46

### Code

```javascript
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FiArrowLeft,
    FiTarget,
    FiAward,
    FiUsers,
    FiTrendingUp,
    FiMapPin,
    FiSmile,
    FiCheckCircle,
    FiClock,
    FiBriefcase
} from 'react-icons/fi';
import LazyImage from '../components/common/LazyImage';
import './About.css';

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    // Stagger animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const scrollToContent = () => {
        const storySection = document.querySelector('.story-section');
        if (storySection) {
            storySection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="about-modern" ref={containerRef}>
            {/* --- Section 1: Parallax Hero --- */}
            <header className="about-hero-modern">
                <motion.div style={{ y }} className="hero-bg-parallax">
                    <LazyImage 
                        src="/hero-bg.jpg" 
                        alt="خلفية المفلحي" 
                        className="parallax-img" 
                    />
                    <div className="hero-overlay-gradient"></div>
                </motion.div>

                <div className="container hero-content-modern">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="hero-text-wrapper"
                    >
                        <motion.span variants={itemVariants} className="hero-badge-glass">
                            خبرة منذ 2008
                        </motion.span>
                        <motion.h1 variants={itemVariants} className="hero-title-modern">
                            أكثر من وكالة سفر، <br />
                            <span className="text-gradient">شريكك في كل مغامرة.</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="hero-desc-modern">
                            في "المفلحي"، نرى السفر كرحلة اكتشاف وليس مجرد تنقل من مكان إلى آخر.
                            ندمج بين الإرث الراسخ والتفكير الحديث لنصنع لك لحظات لا تُمحى من الذاكرة.
                        </motion.p>
                    </motion.div>
                </div>
                
                {/* Scroll Indicator */}
                <motion.div 
                    className="scroll-mouse"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    onClick={scrollToContent}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="wheel"></div>
                </motion.div>
            </header>

            {/* --- Section 2: The Story (Image Collage) --- */}
            <section className="section story-section">
                <div className="container">
                    <div className="story-grid">
                        <motion.div 
                            className="story-content"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="section-label">مسيرتنا</span>
                            <h2 className="section-heading">
                                من بدايات متواضعة إلى <br/>
                                <span className="highlight-underline">بوابة شاملة نحو العالم</span>
                            </h2>
                            <p className="story-text">
                                انطلقت رحلتنا من إيمان عميق: كيف نُسهّل السفر ونُحوله إلى تجربة ممتعة؟
                                بدأنا من صنعاء بقصد واضح، وعلى الرغم من العقبات، نجحنا في بناء رابطة وثيقة من الولاء مع زبائننا.
                            </p>
                            <p className="story-text">
                                الآن، وبعد أكثر من خمسة عشر عاماً، نعتز بأننا لا نقدّم خدمة فحسب، بل نكون مستشارين موثوقين
                                لطموحات آلاف المسافرين، نشرع أمامهم الأبواب العالمية بصدق وكفاءة.
                            </p>

                            <div className="story-stats">
                                <div className="story-stat-item">
                                    <span className="stat-num">15+</span>
                                    <span className="stat-label">عاماً من الإتقان</span>
                                </div>
                                <div className="story-stat-item">
                                    <span className="stat-num">50k+</span>
                                    <span className="stat-label">عميل راضٍ</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="story-visuals"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="collage-wrapper">
                                <div className="collage-img-lg">
                                    <LazyImage src="/dubai.jpg" alt="سفر وسياحة" />
                                </div>
                                <div className="collage-img-sm glass-card">
                                    <LazyImage src="/london.jpeg" alt="وجهات عالمية" />
                                    <div className="collage-badge">
                                        <FiTrendingUp />
                                        <span>تطور دائم</span>
                                    </div>
                                </div>
                                {/* Decorative elements */}
                                <div className="circle-decor"></div>
                                <div className="dots-decor"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Section 3: Values (Modern Bento Grid) --- */}
            <section className="section values-section-modern">
                <div className="container">
                    <div className="section-header-center mb-5">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="section-tag"
                        >
                            ما نقدمه لك
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="section-heading"
                        >
                            قيمٌ نعتز بها وخدماتٌ نتميز بها
                        </motion.h2>
                    </div>

                    <div className="bento-grid-modern">
                        {/* 1. Vision Card (Featured) */}
                        <motion.div
                            className="bento-item vision-card"
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-overlay"></div>
                            <div className="bento-content relative z-10">
                                <div className="icon-wrapper glass-icon mb-4">
                                    <FiTarget />
                                </div>
                                <h3>طموحنا يحدده التميز</h3>
                                <p>نسعى لأن نكون الوجهة المفضلة لكل مسافر عربي، من خلال ابتكار حلول سفر تدمج الرقي، اليسر، والقيمة التنافسية.</p>
                            </div>
                            <div className="bg-pattern"></div>
                        </motion.div>

                        {/* 2. Trust Card (Vertical) */}
                        <motion.div
                            className="bento-item trust-card"
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="trust-badge">
                                <FiCheckCircle /> 100% وضوح
                            </div>
                            <div className="bento-content mt-auto">
                                <div className="icon-wrapper mb-3 text-amber-500">
                                    <FiAward size={32} />
                                </div>
                                <h3>الثقة أساس عملنا</h3>
                                <p>بدون تكاليف مخفية أو وعود مبالغ فيها. الصرامة في الأداء هي ميزتنا، وما نلتزم به هو ما تحصل عليه حرفياً.</p>
                            </div>
                        </motion.div>

                        {/* 3. Team Card */}
                        <motion.div
                            className="bento-item team-card"
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="icon-wrapper text-blue-600">
                                    <FiUsers />
                                </div>
                                <span className="tiny-tag">دعم على مدار الساعة</span>
                            </div>
                            <h3>كفاءة وخبرة</h3>
                            <p>خبراء متخصصون على أتم الاستعداد لمساعدتك في أي لحظة.</p>
                        </motion.div>

                        {/* 4. Global Coverage */}
                        <motion.div
                            className="bento-item map-card"
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="bento-content">
                                <div className="icon-wrapper text-teal-600 mb-3">
                                    <FiMapPin />
                                </div>
                                <h3>شبكة عالمية واسعة</h3>
                                <p>تحالفات قوية مع شركاء في خمسين دولة وأكثر.</p>
                            </div>
                            <div className="map-dots-decoration"></div>
                        </motion.div>

                        {/* 5. Comfort/Service */}
                        <motion.div
                            className="bento-item service-card"
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="bento-content">
                                <div className="icon-wrapper text-rose-500 mb-3">
                                    <FiSmile />
                                </div>
                                <h3>تجربة سلسة ومريحة</h3>
                                <p>نراعي أصغر التفاصيل كي تستمتع برحلتك خالياً من أي هموم.</p>
                            </div>
                        </motion.div>

                        {/* 6. Hajj & Umrah Service (Featured) */}
                        <motion.div
                            className="bento-item hajj-umrah-card"
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="bento-content relative z-10">
                                <div className="icon-wrapper mb-4">
                                    <FiClock size={32} />
                                </div>
                                <h3>استخراج تأشيرات الحج والعمرة</h3>
                                <p>
                                    نسهل عليك رحلتك الروحانية بتقديم دعم شامل للحصول على تصريحات الحج والعمرة.
                                    نضمن لك تجربة سلسة وفعّالة تُزيل عنك عناء الإجراءات الإدارية، فنقدم لك
                                    أسرع وسيلة موثوقة للوصول إلى أقدس البقاع في المملكة العربية السعودية.
                                </p>
                            </div>
                            <div className="hajj-pattern"></div>
                        </motion.div>

                        {/* 7. Visa Sales Service */}
                        <motion.div
                            className="bento-item visa-sales-card"
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <div className="visa-badge">
                                <span>تراخيص رسمية</span>
                            </div>
                            <div className="bento-content">
                                <div className="icon-wrapper mb-3">
                                    <FiBriefcase />
                                </div>
                                <h3>تأشيرات العمل والإقامة</h3>
                                <p>
                                    نتميز في تقديم حلول دخول قانونية للمملكة العربية السعودية، سواء لغرض العمل
                                    أو الإقامة. تتوفر لدينا خيارات متنوعة تشمل الإقامات المهنية قصيرة وطويلة الأمد،
                                    بالإضافة إلى تأشيرات العمالة المنزلية وغيرها من الفئات المهنية بجميع التخصصات المطلوبة.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Section 4: Modern CTA --- */}
            <section className="cta-modern-section">
                <div className="container">
                    <div className="cta-modern-card">
                        <div className="cta-modern-content">
                            <h2>متشوق لبدء مغامرتك التالية؟</h2>
                            <p>تولّى نحن التخطيط، بينما تستعد أنت للانطلاق.</p>
                            <div className="cta-buttons">
                                <Link to="/contact" className="btn btn-primary btn-lg border-white">
                                    ابداً الآن <FiArrowLeft />
                                </Link>
                                <Link to="/services" className="btn btn-outline btn-lg text-white border-white hover-white">
                                    اطلع على خدماتنا
                                </Link>
                            </div>
                        </div>
                        <div className="cta-pattern-overlay"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
```

## File: pages/Destinations.jsx

- Extension: .jsx
- Language: javascript
- Size: 7790 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { allDestinations } from '../data';
import LazyImage from '../components/common/LazyImage';
import { FiMapPin, FiArrowLeft } from 'react-icons/fi';
import './Destinations.css';

const Destinations = () => {
    // Sliding text animation words - popular destinations
    const slidingWords = ["مكة المكرمة", "دبي", "باريس", "مالديف", "إسطنبول", "لندن", "طوكيو", "نيويورك"];

    return (
            <div className="destinations-page">
                {/* Enhanced Hero Section */}
                <section className="destinations-hero" aria-label="وجهاتنا السياحية">
                    <div className="destinations-hero-overlay"></div>
                    <div className="destinations-hero-pattern"></div>
                    
                    <div className="container destinations-hero-content">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="destinations-hero-badge"
                        >
                            <FiMapPin aria-hidden="true" />
                            <span>اكتشف العالم</span>
                        </motion.div>

                        {/* Main Title with Animated Underline */}
                        <div className="destinations-title-wrapper">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="destinations-hero-title"
                            >
                                وجهاتنا السياحية
                                <motion.span
                                    className="destinations-title-underline"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                                />
                            </motion.h1>
                        </div>

                        {/* Sliding Text Animation (RTL) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="destinations-sliding-text-wrapper"
                            aria-label="وجهاتنا المميزة"
                        >
                            <div className="destinations-sliding-text">
                                {[...slidingWords, ...slidingWords].map((word, index) => (
                                    <span key={`${word}-${index}`} className="sliding-word">
                                        {word}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="destinations-hero-subtitle"
                        >
                            اختر وجهتك القادمة من بين أجمل مدن العالم
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="destinations-hero-cta"
                        >
                            <Link 
                                to="/contact" 
                                className="destinations-cta-button"
                                aria-label="تواصل معنا لحجز رحلتك"
                            >
                                <span>احجز رحلتك الآن</span>
                                <FiArrowLeft aria-hidden="true" />
                            </Link>
                        </motion.div>
                    </div>
                </section>

                <div className="container section">
                    <div className="destinations-grid-layout">
                        {allDestinations.map((dest, index) => {
                            const isSpecial = dest.name === "مكة المكرمة" || dest.name === "المدينة المنورة";
                            return (
                            <motion.div
                                key={dest.id || index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="destination-card-full"
                                data-special={isSpecial}
                            >
                                <div className="dest-img-wrapper">
                                    <LazyImage src={dest.image} alt={dest.name} className="dest-full-img" />
                                    <div className="dest-overlay-gradient"></div>
                                    <div className="dest-duration-badge">
                                        <FiMapPin className="dest-badge-icon" />
                                        <span>{dest.duration}</span>
                                    </div>
                                </div>

                                <div className="dest-content">
                                    <div className="dest-header">
                                        <div>
                                            <h3 className="dest-title">{dest.name}</h3>
                                            <span className="dest-country">{dest.country}</span>
                                        </div>
                                    </div>

                                    <p className="dest-desc">{dest.description}</p>

                                    <div className="dest-features">
                                        {dest.features.map((feature, i) => (
                                            <span key={i} className="dest-feature-tag">{feature}</span>
                                        ))}
                                    </div>

                                    <Link 
                                        to="/contact" 
                                        className="btn btn-primary w-full mt-md dest-cta-btn"
                                        state={{ destination: dest.name }}
                                    >
                                        <span>احجز الآن</span>
                                        <FiArrowLeft className="dest-btn-icon" />
                                    </Link>
                                </div>
                            </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
    );
};

export default Destinations;

```

## File: pages/Admin.css

- Extension: .css
- Language: unknown
- Size: 11053 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```unknown
.admin-page {
  min-height: 100vh;
  padding: var(--spacing-2xl) 0;
  background: var(--bg-secondary);
}

.admin-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
  padding-top: var(--spacing-lg); /* Add some padding at the top */
}

.admin-header h1 {
  font-size: var(--font-3xl);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.admin-header p {
  font-size: var(--font-lg);
  color: var(--text-secondary);
  margin-top: var(--spacing-sm); /* Adjust margin to move it a little down */
}

.admin-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

/* Add Entry Form */
.add-entry-form {
  background: var(--bg-primary);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

.add-entry-form h3 {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.form-group label {
  font-size: var(--font-sm);
  font-weight: 600;
  color: var(--text-primary);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: var(--spacing-md);
  font-size: var(--font-base);
  border: 2px solid var(--bg-tertiary);
  border-radius: var(--radius-md);
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-cyan);
  box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);
}

.form-group input:disabled,
.form-group select:disabled,
.form-group textarea:disabled {
  background: var(--bg-tertiary);
  cursor: not-allowed;
  opacity: 0.6;
}

.form-group textarea {
  resize: vertical;
  min-height: 80px;
}

.btn-primary {
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--font-base);
  font-weight: 600;
  color: white;
  background: var(--gradient-ocean);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-message {
  padding: var(--spacing-md);
  background: rgba(236, 72, 153, 0.1);
  border: 1px solid var(--accent-coral);
  border-radius: var(--radius-md);
  color: var(--accent-coral);
  font-size: var(--font-sm);
  font-weight: 500;
  margin-top: var(--spacing-md);
}

/* Filters */
.admin-filters {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  background: var(--bg-primary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.filter-group label {
  font-size: var(--font-sm);
  font-weight: 600;
  color: var(--text-primary);
}

.filter-group input,
.filter-group select {
  padding: var(--spacing-md);
  font-size: var(--font-base);
  border: 2px solid var(--bg-tertiary);
  border-radius: var(--radius-md);
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.filter-group input:focus,
.filter-group select:focus {
  outline: none;
  border-color: var(--primary-cyan);
  box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);
}

/* Table */
.table-container {
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow-x: auto;
}

.passport-table {
  width: 100%;
  border-collapse: collapse;
}

.passport-table thead {
  background: var(--bg-secondary);
}

.passport-table th {
  padding: var(--spacing-md) var(--spacing-lg);
  text-align: left;
  font-size: var(--font-sm);
  font-weight: 700;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 2px solid var(--bg-tertiary);
}

.passport-table td {
  padding: var(--spacing-md) var(--spacing-lg);
  border-bottom: 1px solid var(--bg-tertiary);
  font-size: var(--font-sm);
  color: var(--text-secondary);
}

.passport-table tbody tr:hover {
  background: var(--bg-secondary);
}

.passport-table tbody tr:last-child td {
  border-bottom: none;
}

.status-badge {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-full);
  font-size: var(--font-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-success {
  background: rgba(20, 184, 166, 0.1);
  color: var(--secondary-teal);
}

.badge-warning {
  background: rgba(245, 158, 11, 0.1);
  color: var(--accent-amber);
}

.badge-info {
  background: rgba(71, 85, 105, 0.1);
  color: var(--text-secondary);
}

.badge-error {
  background: rgba(236, 72, 153, 0.1);
  color: var(--accent-coral);
}

.notes-cell {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-muted {
  color: var(--text-muted);
  font-style: italic;
}

.action-buttons {
  display: flex;
  gap: var(--spacing-sm);
}

.btn-edit,
.btn-delete {
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: var(--font-xs);
  font-weight: 600;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-edit {
  background: rgba(8, 145, 178, 0.1);
  color: var(--primary-cyan);
}

.btn-edit:hover {
  background: var(--primary-cyan);
  color: white;
}

.btn-delete {
  background: rgba(236, 72, 153, 0.1);
  color: var(--accent-coral);
}

.btn-delete:hover:not(:disabled) {
  background: var(--accent-coral);
  color: white;
}

.btn-delete:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Modal */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--spacing-lg);
  animation: fadeIn 0.2s ease;
}

.modal-content {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg) var(--spacing-xl);
  border-bottom: 1px solid var(--bg-tertiary);
}

.modal-header h3 {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  font-size: var(--font-3xl);
  color: var(--text-muted);
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

.modal-body {
  padding: var(--spacing-xl);
}

.entry-info {
  background: var(--bg-secondary);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-lg);
}

.entry-info p {
  margin: var(--spacing-xs) 0;
  font-size: var(--font-sm);
  color: var(--text-secondary);
}

.entry-info strong {
  color: var(--text-primary);
  font-weight: 600;
}

.modal-actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: flex-end;
  margin-top: var(--spacing-lg);
}

.btn-secondary {
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--font-base);
  font-weight: 600;
  color: var(--text-primary);
  background: var(--bg-secondary);
  border: 2px solid var(--bg-tertiary);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover:not(:disabled) {
  background: var(--bg-tertiary);
}

.btn-secondary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Loading and Empty States */
.loading-state {
  text-align: center;
  padding: var(--spacing-3xl);
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.spinner-large {
  width: 48px;
  height: 48px;
  border: 4px solid var(--bg-tertiary);
  border-top-color: var(--primary-cyan);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto var(--spacing-md);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-state p {
  color: var(--text-secondary);
  font-size: var(--font-base);
}

.empty-state {
  text-align: center;
  padding: var(--spacing-3xl);
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.empty-state p {
  color: var(--text-secondary);
  font-size: var(--font-base);
}

.error-banner {
  background: rgba(236, 72, 153, 0.1);
  border: 1px solid var(--accent-coral);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  color: var(--accent-coral);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.error-banner button {
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--accent-coral);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: var(--font-sm);
  font-weight: 600;
}

.error-banner button:hover {
  opacity: 0.9;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.pagination-info {
  font-size: var(--font-sm);
  color: var(--text-secondary);
  font-weight: 500;
}

.btn-pagination {
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--font-sm);
  font-weight: 600;
  color: var(--primary-cyan);
  background: transparent;
  border: 2px solid var(--primary-cyan);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-pagination:hover:not(:disabled) {
  background: var(--primary-cyan);
  color: white;
}

.btn-pagination:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Responsive Design */
@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  .admin-filters {
    grid-template-columns: 1fr;
  }

  .passport-table {
    font-size: var(--font-xs);
  }

  .passport-table th,
  .passport-table td {
    padding: var(--spacing-sm);
  }

  .action-buttons {
    flex-direction: column;
  }

  .modal-content {
    margin: var(--spacing-md);
    max-height: calc(100vh - 2rem);
  }

  .pagination {
    flex-direction: column;
    gap: var(--spacing-md);
  }
}


```

## File: pages/Admin.jsx

- Extension: .jsx
- Language: javascript
- Size: 5099 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
import { useState, useEffect } from 'react';
import AddEntryForm from '../components/admin/AddEntryForm';
import PassportTable from '../components/admin/PassportTable';
import './Admin.css';

const Admin = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState(null);

  const fetchEntries = async (page = 1, search = '', status = 'all') => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '50',
      });

      if (search.trim()) {
        params.append('search', search.trim());
      }

      if (status !== 'all') {
        params.append('status', status);
      }

      const response = await fetch(`/api/admin/list-entries?${params.toString()}`);

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'فشل في جلب البيانات');
        return;
      }

      setEntries(data.data || []);
      setPagination(data.pagination);
    } catch (err) {
      console.error('Error fetching entries:', err);
      setError('حدث خطأ أثناء جلب البيانات');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries(currentPage, searchTerm, statusFilter);
  }, [currentPage, searchTerm, statusFilter]);

  const handleRefresh = () => {
    fetchEntries(currentPage, searchTerm, statusFilter);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleStatusFilter = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="admin-page">
      <div className="container">
        <div className="admin-header">
          <h1>لوحة الإدارة - إدارة حالة الفيزا</h1>
          <p>إدارة مدخلات جوازات السفر وحالات الفيزا</p>
        </div>

        <div className="admin-content">
          <AddEntryForm onSuccess={handleRefresh} />

          <div className="admin-filters">
            <div className="filter-group">
              <label htmlFor="search">ابحث عن الجواز</label>
              <input
                type="text"
                id="search"
                placeholder="أدخل رقم الجواز..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>

            <div className="filter-group">
              <label htmlFor="status-filter">فرز حسب الحاله</label>
              <select id="status-filter" value={statusFilter} onChange={handleStatusFilter}>
                <option value="all">الكل</option>
                <option value="pending">في الانتظار</option>
                <option value="in_embassy">في السفارة</option>
                <option value="ready">جاهز</option>
                <option value="in_aden">في عدن</option>
              </select>
            </div>
          </div>

          {error && (
            <div className="error-banner">
              {error}
              <button onClick={handleRefresh}>إعادة المحاولة</button>
            </div>
          )}

          {loading ? (
            <div className="loading-state">
              <div className="spinner-large"></div>
              <p>جاري تحميل البيانات...</p>
            </div>
          ) : (
            <>
              <PassportTable
                entries={entries}
                onRefresh={handleRefresh}
                onDelete={handleRefresh}
              />

              {pagination && pagination.totalPages > 1 && (
                <div className="pagination">
                  <button
                    className="btn-pagination"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    السابق
                  </button>
                  <span className="pagination-info">
                    صفحة {pagination.page} من {pagination.totalPages} (الكل {pagination.total})
                  </span>
                  <button
                    className="btn-pagination"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === pagination.totalPages}
                  >
                    التالي
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
```

## File: pages/Contact.jsx

- Extension: .jsx
- Language: javascript
- Size: 11847 bytes
- Created: 2026-01-28 04:21:44
- Modified: 2026-01-28 04:21:44

### Code

```javascript
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiCheckCircle } from 'react-icons/fi';
import { CONTACT_INFO } from '../constants/company';
import LazyImage from '../components/common/LazyImage';
import './Contact.css';

const Contact = () => {
    // Contact methods for floating icons
    const handleMapClick = (e) => {
        // We remove preventDefault so the link actually opens in a new tab
    };

    const contactMethods = [
        { icon: <FiPhone />, label: 'اتصل بنا', method: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}` },
        { icon: <FiMail />, label: 'راسلنا', method: `mailto:${CONTACT_INFO.email}` },
        { 
            icon: <FiMapPin />, 
            label: 'موقعنا', 
            // This link opens the Google Maps App/Website directly when clicked
            method: 'https://www.google.com/maps/search/?api=1&query=15.336174,44.204229', 
            onClick: handleMapClick 
        }
    ];

    return (
        <div className="contact-page">
            {/* Enhanced Hero Section */}
            <section className="contact-hero" aria-label="تواصل معنا">
                <div className="contact-hero-background">
                    <LazyImage 
                        src="/dubai.jpg" 
                        alt="دبي - خلفية" 
                        className="contact-hero-image"
                    />
                    <div className="contact-hero-overlay"></div>
                    <div className="contact-hero-pattern"></div>
                </div>
                
                <div className="container contact-hero-content">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="contact-hero-badge"
                    >
                        <FiMapPin aria-hidden="true" />
                        <span>زورنا في صنعاء</span>
                    </motion.div>

                    {/* Main Title */}
                    <div className="contact-title-wrapper">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="contact-hero-title"
                        >
                            تواصل معنا
                            <motion.span
                                className="contact-title-underline"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                            />
                        </motion.h1>
                    </div>

                    {/* Floating Contact Methods */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="contact-methods-floating"
                        aria-label="طرق التواصل"
                    >
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.method}
                                className="contact-method-icon"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.1 }}
                                aria-label={method.label}
                                target={method.method.startsWith('http') ? '_blank' : undefined}
                                rel={method.method.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                                {method.icon}
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="contact-hero-subtitle"
                    >
                        نحن هنا للإجابة على استفساراتك ومساعدتك في تخطيط رحلتك القادمة
                    </motion.p>
                </div>
            </section>

            <div className="container section">
                <div className="contact-grid">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="contact-info-wrapper"
                    >
                        <h2 className="contact-title">معلومات الاتصال</h2>
                        <p className="contact-desc">يمكنك التواصل معنا عبر القنوات التالية أو زيارة مقرنا الرئيسي.</p>

                        <div className="contact-cards-grid">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="contact-card"
                            >
                                <div className="contact-card-icon">
                                    <FiPhone />
                                </div>
                                <h4 className="contact-card-title">الهاتف</h4>
                                <div className="contact-card-content">
                                    <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="contact-link">{CONTACT_INFO.phone}</a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="contact-card"
                            >
                                <div className="contact-card-icon">
                                    <FiMail />
                                </div>
                                <h4 className="contact-card-title">البريد الإلكتروني</h4>
                                <div className="contact-card-content">
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="contact-link">{CONTACT_INFO.email}</a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="contact-card"
                            >
                                <div className="contact-card-icon">
                                    <FiMapPin />
                                </div>
                                <h4 className="contact-card-title">العنوان</h4>
                                <div className="contact-card-content">
                                    <p>{CONTACT_INFO.address}</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="contact-card"
                            >
                                <div className="contact-card-icon">
                                    <FiClock />
                                </div>
                                <h4 className="contact-card-title">ساعات العمل</h4>
                                <div className="contact-card-content">
                                    <p>{CONTACT_INFO.workingHours}</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Interactive Map Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="contact-map-wrapper"
                    >
                        <h2 className="contact-title">موقعنا على الخريطة</h2>
                        <div className="map-container">
                            {/* FIXED MAP IFRAME:
                                Using the legacy 'maps?q=' format.
                                q = coordinates + (Name in parenthesis)
                                z = zoom level (15 is good for streets)
                                output = embed (essential for iframes)
                            */}
                            <iframe
                                width="100%"
                                height="450"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                style={{ borderRadius: 'var(--radius-lg)' }}
                                src="https://maps.google.com/maps?q=15.336174,44.204229+(المفلحي%20للسياحة%20والسفر)&t=&z=17&ie=UTF8&iwloc=B&output=embed"
                                title="المفلحي للسياحة والسفر"
                                aria-label="المفلحي للسياحة والسفر location map"
                            ></iframe>
                        </div>
                        <div className="map-info">
                            <div className="map-pin-icon">
                                <FiMapPin />
                            </div>
                            <div>
                                <h4>شارع القدس، صنعاء</h4>
                                <p>مقابل السفارة السعودية</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
```

## File: pages/Home.jsx

- Extension: .jsx
- Language: javascript
- Size: 570 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
import Hero from '../components/sections/Hero';
import HomeServices from '../components/sections/HomeServices';
import DestinationsCarousel from '../components/sections/DestinationsCarousel';
import AboutUs from '../components/sections/AboutUs';
import PassportCheck from '../components/sections/PassportCheck';

const Home = () => {
    return (
        <main>
            <Hero />
            <PassportCheck />
            <HomeServices />
            <DestinationsCarousel />
            <AboutUs />
        </main>
    );
};

export default Home;

```

## File: pages/Home.css

- Extension: .css
- Language: unknown
- Size: 3106 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```unknown
.section-header {
    margin-bottom: var(--spacing-2xl);
    text-align: center;
}

.section-subtitle {
    color: var(--text-secondary);
    font-size: var(--font-lg);
    max-width: 600px;
    margin: 0 auto;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
}

.mt-xl {
    margin-top: var(--spacing-xl);
}

.bg-secondary {
    background-color: var(--bg-secondary);
}

/* Destinations Grid */
.destinations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-md);
}

.destination-card {
    position: relative;
    border-radius: var(--radius-lg);
    overflow: hidden;
    height: 300px;
    cursor: pointer;
    box-shadow: var(--shadow-md);
}

.dest-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.destination-card:hover .dest-img {
    transform: scale(1.1);
}

.dest-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: var(--spacing-lg);
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    color: white;
}

.dest-name {
    font-size: var(--font-xl);
    margin-bottom: 4px;
    color: white;
}

.dest-price {
    font-size: var(--font-sm);
    color: var(--accent-amber);
    font-weight: bold;
}

/* Features Section */
.features-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    align-items: center;
}

@media (min-width: 992px) {
    .features-grid {
        grid-template-columns: 1fr 1fr;
    }
}

.feature-list {
    list-style: none;
    margin-top: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.feature-list li {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
}

.feature-list .icon {
    width: 48px;
    height: 48px;
    background: var(--bg-secondary);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    flex-shrink: 0;
}

.feature-image-wrapper {
    position: relative;
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-xl);
}

.feature-img {
    width: 100%;
    height: auto;
    display: block;
}

.experience-badge {
    position: absolute;
    bottom: var(--spacing-lg);
    right: var(--spacing-lg);
    /* RTL: right side */
    background: white;
    padding: var(--spacing-md);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.experience-badge .years {
    font-size: var(--font-2xl);
    font-weight: 800;
    color: var(--primary-cyan);
    line-height: 1;
}

.experience-badge span:last-child {
    font-size: var(--font-sm);
    color: var(--text-secondary);
    font-weight: 600;
}
```

## File: pages/Services.jsx

- Extension: .jsx
- Language: javascript
- Size: 11277 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ExpandableServiceCard from '../components/common/ExpandableServiceCard';
import { allServices } from '../data/services';
import { 
    FiAward, FiUsers, FiClock, FiChevronDown, FiGlobe, 
    FiFileText, FiMap, FiSearch, FiPhone, FiSmile 
} from 'react-icons/fi';
import { 
    TbPlane, TbBuilding, TbMap, TbBus, TbShip, 
    TbLanguage, TbBuildingMosque, TbTicket 
} from 'react-icons/tb';
import LazyImage from '../components/common/LazyImage';
import './Services.css';

const Services = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [expandedCardTitle, setExpandedCardTitle] = useState(null);

    // Filter Categories
    const filters = useMemo(() => ([
        { id: 'all', label: 'جميع الخدمات', icon: <FiAward /> },
        { id: 'flights', label: 'حجوزات طيران', icon: <TbPlane /> },
        { id: 'hotels', label: 'فنادق وإقامة', icon: <TbBuilding /> },
        { id: 'visa', label: 'تأشيرات', icon: <FiGlobe /> },
        { id: 'tours', label: 'برامج سياحية', icon: <TbMap /> },
        { id: 'hajj', label: 'حج وعمرة', icon: <TbBuildingMosque /> },
        { id: 'transport', label: 'نقل ومواصلات', icon: <TbBus /> },
        { id: 'other', label: 'خدمات أخرى', icon: <TbTicket /> } // Grouped smaller cats
    ]), []);

    // Helper to group specific categories into 'other' if needed
    const getCategory = (cat) => {
        const mainCats = ['flights', 'hotels', 'visa', 'tours', 'hajj', 'transport'];
        return mainCats.includes(cat) ? cat : 'other';
    };

    const filteredServices = useMemo(() => {
        const data = Array.isArray(allServices) ? allServices : [];
        if (activeFilter === 'all') return data;
        return data.filter(service => getCategory(service.category) === activeFilter);
    }, [activeFilter]);

    const handleCardToggle = (title) => {
        setExpandedCardTitle(expandedCardTitle === title ? null : title);
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="services-page-premium">
            {/* --- Hero Section --- */}
            <div className="services-hero-modern">
                <div className="hero-bg-layer">
                    <div className="hero-blob blob-1"></div>
                    <div className="hero-blob blob-2"></div>
                </div>
                
                <div className="container relative z-10">
                    <div className="hero-content-center">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <span className="hero-badge-pill">خدمات متكاملة</span>
                            <h1 className="hero-title-lg">
                                وجهتك الأولى <br />
                                <span className="text-gradient-gold">لكل تفاصيل السفر</span>
                            </h1>
                            <p className="hero-desc-lg">
                                نجمع لك العالم في مكان واحد. من تذاكر الطيران إلى أدق تفاصيل إقامتك، 
                                نحن نعتني بكل خطوة لتستمتع بالرحلة.
                            </p>
                        </motion.div>
                    </div>
                </div>
                
                {/* Decorative Wave */}
                <div className="hero-wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>

            {/* --- Sticky Filter Bar --- */}
            <div className="filter-sticky-wrapper">
                <div className="container">
                    <div className="filter-glass-bar">
                        <div className="filter-scroll-container">
                            {filters.map((filter) => (
                                <button
                                    key={filter.id}
                                    className={`filter-pill ${activeFilter === filter.id ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(filter.id)}
                                >
                                    <span className="filter-icon">{filter.icon}</span>
                                    <span>{filter.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Services Grid --- */}
            <section className="section services-grid-section">
                <div className="container">
                    <div className="results-header">
                        <h3>عرض {filteredServices.length} خدمة متاحة</h3>
                        {activeFilter !== 'all' && (
                            <button className="clear-filter" onClick={() => setActiveFilter('all')}>
                                عرض الكل
                            </button>
                        )}
                    </div>

                    <motion.div 
                        className="services-grid-layout"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={activeFilter} // Re-trigger animation on filter change
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredServices.map((service, index) => (
                                <motion.div key={service.title + index} variants={itemVariants} layout>
                                    <ExpandableServiceCard
                                        title={service.title}
                                        tagline={service.tagline}
                                        icon={service.icon}
                                        detailedDescription={service.detailedDescription}
                                        features={service.features}
                                        isExpanded={expandedCardTitle === service.title}
                                        onToggle={() => handleCardToggle(service.title)}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredServices.length === 0 && (
                        <div className="empty-state-modern">
                            <FiSearch size={48} />
                            <h3>لا توجد خدمات مطابقة</h3>
                            <p>جرب اختيار تصنيف آخر</p>
                        </div>
                    )}
                </div>
            </section>

            {/* --- Process Section (How it works) --- */}
            <section className="section process-section">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-tag">كيف نعمل</span>
                        <h2 className="section-title">رحلتك تبدأ بخطوات بسيطة</h2>
                    </div>

                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number">01</div>
                            <div className="step-icon"><FiSearch /></div>
                            <h3>اختر خدمتك</h3>
                            <p>تصفح قائمة خدماتنا الشاملة واختر ما يناسب احتياجات سفرك.</p>
                        </div>
                        <div className="process-line"></div>
                        <div className="process-step">
                            <div className="step-number">02</div>
                            <div className="step-icon"><FiPhone /></div>
                            <h3>تواصل معنا</h3>
                            <p>تحدث مع مستشارينا عبر الواتساب أو الهاتف لتأكيد التفاصيل.</p>
                        </div>
                        <div className="process-line"></div>
                        <div className="process-step">
                            <div className="step-number">03</div>
                            <div className="step-icon"><FiSmile /></div>
                            <h3>سافر باطمئنان</h3>
                            <p>استلم حجوزاتك وانطلق في رحلتك ونحن معك في كل خطوة.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Premium CTA --- */}
            <section className="premium-cta-wrapper">
                <div className="container">
                    <div className="premium-cta-card">
                        <div className="cta-bg-image">
                            <LazyImage src="/hero-bg.jpg" alt="Travel" />
                            <div className="cta-overlay"></div>
                        </div>
                        <div className="cta-content-inner">
                            <h2>لم تجد ما تبحث عنه؟</h2>
                            <p>نحن متخصصون في تصميم الرحلات المخصصة. أخبرنا عن حلمك، ونحن سنحوله إلى حقيقة.</p>
                            <div className="cta-actions">
                                <Link to="/contact" className="btn btn-primary btn-lg border-white">
                                    تواصل مع مستشار سياحي
                                </Link>
                                <a href="https://wa.me/967779717177" target="_blank" rel="noreferrer" className="btn btn-outline text-white border-white hover-white">
                                    راسلنا عبر واتساب
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
```

## File: pages/Contact.css

- Extension: .css
- Language: unknown
- Size: 12371 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```unknown
.contact-page {
    /* Removed padding-top for full screen hero */
    overflow-x: hidden;
}

/* ========================================
   ENHANCED CONTACT HERO SECTION
   ======================================== */

.contact-hero {
    position: relative;
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    /* Increased top padding for navbar clearance */
    padding: max(8rem, env(safe-area-inset-top)) var(--spacing-md) max(3rem, env(safe-area-inset-bottom));
    contain: layout style paint;
}

.contact-hero-background {
    position: absolute;
    inset: 0;
    z-index: 0;
}

.contact-hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.contact-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.5) 50%,
            rgba(0, 54, 97, 0.8) 100%);
    z-index: 1;
}

.contact-hero-pattern {
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.4;
    z-index: 1;
}

.contact-hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-md);
}

/* Hero Badge */
.contact-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1.5rem;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: var(--radius-full);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    font-size: clamp(0.875rem, 2vw, 1rem);
    font-weight: 600;
    font-family: var(--font-heading);
    min-height: 44px;
}

.contact-hero-badge svg {
    font-size: 1.1em;
}

/* Hero Title with Animated Underline */
.contact-title-wrapper {
    position: relative;
    margin: var(--spacing-sm) 0;
}

.contact-hero-title {
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    font-weight: 800;
    color: white;
    line-height: 1.2;
    margin: 0;
    font-family: var(--font-heading);
    position: relative;
    display: inline-block;
    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.contact-title-underline {
    position: absolute;
    bottom: -0.5rem;
    right: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--accent-amber), transparent);
    transform-origin: right;
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(245, 158, 11, 0.5);
}

/* Floating Contact Methods */
.contact-methods-floating {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin: var(--spacing-md) 0;
}

.contact-method-icon {
    width: 56px;
    height: 56px;
    min-width: 56px;
    min-height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    transition: all var(--transition-base);
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.contact-method-icon:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

/* Hero Subtitle */
.contact-hero-subtitle {
    font-size: clamp(1rem, 3vw, 1.5rem);
    color: rgba(255, 255, 255, 0.95);
    line-height: 1.6;
    max-width: 600px;
    margin: 0;
    font-family: var(--font-body);
    text-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
}

/* ========================================
   CONTACT CONTENT SECTION
   ======================================== */

.contact-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    margin-top: var(--spacing-2xl);
}

@media (min-width: 992px) {
    .contact-grid {
        grid-template-columns: 1fr 1.5fr;
        gap: var(--spacing-2xl);
        align-items: start;
    }

    .contact-info-wrapper {
        position: sticky;
        top: 100px;
    }

    .contact-map-wrapper {
        padding: var(--spacing-2xl);
        max-width: 100%;
    }
}

/* Contact Info Section */
.contact-info-wrapper {
    background: var(--bg-secondary);
    padding: var(--spacing-xl);
    border-radius: var(--radius-lg);
    height: fit-content;
}

.contact-title {
    font-size: clamp(1.5rem, 4vw, 2rem);
    margin-bottom: var(--spacing-sm);
    color: var(--text-primary);
    font-family: var(--font-heading);
}

.contact-desc {
    color: var(--text-secondary);
    margin-bottom: var(--spacing-xl);
    font-size: var(--font-base);
    line-height: 1.6;
}

/* Contact Cards Grid */
.contact-cards-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
}

@media (min-width: 768px) {
    .contact-cards-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

.contact-card {
    background: white;
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-md);
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all var(--transition-base);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--spacing-sm);
}

/* Enhanced Contact Cards for Desktop */
@media (min-width: 992px) {
    .contact-card {
        padding: var(--spacing-xl);
    }

    .contact-card-icon {
        width: 72px;
        height: 72px;
        min-width: 72px;
        min-height: 72px;
        font-size: 2rem;
    }
}

.contact-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
    border-color: rgba(8, 145, 178, 0.2);
}

.contact-card-icon {
    width: 64px;
    height: 64px;
    min-width: 64px;
    min-height: 64px;
    background: rgba(8, 145, 178, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    color: var(--primary-cyan);
    margin-bottom: var(--spacing-xs);
    transition: all var(--transition-base);
}

.contact-card:hover .contact-card-icon {
    background: var(--gradient-ocean);
    color: white;
    transform: scale(1.1);
}

.contact-card-title {
    font-size: var(--font-lg);
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
    font-family: var(--font-heading);
}

.contact-card-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
}

.contact-card-content p {
    font-size: var(--font-sm);
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.5;
}

.contact-link {
    font-size: var(--font-sm);
    color: var(--primary-cyan);
    text-decoration: none;
    transition: color var(--transition-fast);
    display: block;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: var(--radius-sm);
}

.contact-link:hover {
    color: var(--accent-amber);
    background: rgba(8, 145, 178, 0.05);
}

/* ========================================
   RESPONSIVE MAP SECTION
   ======================================== */

.contact-map-wrapper {
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    padding: var(--spacing-xl);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--glass-border);
    position: relative;
    overflow: hidden;
}

.contact-map-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(8, 145, 178, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(50%, -50%);
    pointer-events: none;
}

.map-container {
    position: relative;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    margin-bottom: var(--spacing-lg);
    height: 400px;
}

@media (min-width: 768px) {
    .map-container {
        height: 450px;
    }
}

@media (min-width: 992px) {
    .map-container {
        height: 500px;
    }
}

.map-container iframe {
    width: 100%;
    height: 100%;
    border: 0;
    transition: transform 0.3s ease;
}

.map-container:hover iframe {
    transform: scale(1.02);
}

.map-info {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    background: rgba(255, 255, 255, 0.5);
    border-radius: var(--radius-md);
    backdrop-filter: blur(10px);
}

.map-pin-icon {
    width: 48px;
    height: 48px;
    background: var(--primary-cyan);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    flex-shrink: 0;
}

.map-info h4 {
    margin: 0 0 var(--spacing-xs) 0;
    color: var(--text-primary);
    font-family: var(--font-heading);
    font-size: var(--font-lg);
}

.map-info p {
    margin: 0;
    color: var(--text-secondary);
    font-size: var(--font-sm);
}

/* ========================================
   MOBILE OPTIMIZATIONS
   ======================================== */

@media (max-width: 767px) {
    .contact-hero {
        min-height: 60vh;
        padding: max(2rem, env(safe-area-inset-top)) var(--spacing-sm) max(2rem, env(safe-area-inset-bottom));
    }

    .contact-hero-content {
        gap: var(--spacing-sm);
    }

    .contact-methods-floating {
        gap: 0.75rem;
    }

    .contact-method-icon {
        width: 48px;
        height: 48px;
        min-width: 48px;
        min-height: 48px;
        font-size: 1.25rem;
    }

    .contact-info-wrapper,
    .contact-map-wrapper {
        padding: var(--spacing-lg);
    }

    .contact-cards-grid {
        gap: var(--spacing-sm);
    }

    .map-info {
        flex-direction: column;
        text-align: center;
        gap: var(--spacing-sm);
    }
}

/* Touch Device Optimizations */
@media (hover: none) and (pointer: coarse) {

    .contact-method-icon,
    .contact-link {
        min-height: 44px;
    }

    .contact-card {
        min-height: 44px;
    }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
    .contact-title-underline {
        animation: none;
        transform: scaleX(1);
    }

    .contact-card:hover {
        transform: none;
    }

    .contact-card-icon {
        transition: none;
    }

    .map-container:hover iframe {
        transform: none;
    }
}

/* Performance Optimizations */
.contact-hero * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}

.contact-method-icon,
.contact-card {
    transform: translateZ(0);
    backface-visibility: hidden;
}

/* Desktop-Specific Enhancements */
@media (min-width: 1200px) {


    .contact-hero {
        min-height: 80vh;
    }

    .contact-grid {
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
    }

    .contact-map-wrapper {
        box-shadow: var(--shadow-xl);
    }

    .contact-info-wrapper {
        box-shadow: var(--shadow-lg);
    }
}

/* Better Container Width */
@media (min-width: 992px) {
    .container {
        max-width: 1400px;
    }
}
```

## File: pages/About.css

- Extension: .css
- Language: unknown
- Size: 14805 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```unknown
/* ========================================
   MODERN ABOUT PAGE
   ======================================== */

.about-modern {
    overflow-x: hidden;
    background-color: var(--bg-primary);
}

/* --- Hero Section --- */
.about-hero-modern {
    position: relative;
    height: 90vh;
    min-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.hero-bg-parallax {
    position: absolute;
    inset: 0;
    z-index: 0;
    height: 120%; /* Taller for parallax effect */
    top: -10%;
}

.parallax-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-overlay-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(
        180deg, 
        rgba(0, 54, 97, 0.4) 0%, 
        rgba(0, 54, 97, 0.7) 60%,
        var(--bg-primary) 100%
    );
    z-index: 1;
}

.hero-content-modern {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 900px;
}

.hero-badge-glass {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    letter-spacing: 1px;
}

.hero-title-modern {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    line-height: 1.2;
    color: white;
    margin-bottom: 1.5rem;
}

.hero-title-modern .text-gradient {
    background: linear-gradient(135deg, #fff 0%, #93C5FD 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: block;
}

.hero-desc-modern {
    font-size: clamp(1.1rem, 2vw, 1.35rem);
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.7;
    max-width: 700px;
    margin: 0 auto;
}

/* Mouse Scroll Animation */
.scroll-mouse {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
}

.wheel {
    width: 30px;
    height: 50px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    position: relative;
}

.wheel::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background: #fff;
    border-radius: 2px;
    animation: scrollWheel 1.5s infinite;
}

@keyframes scrollWheel {
    0% { top: 10px; opacity: 1; }
    100% { top: 30px; opacity: 0; }
}

/* --- Story Section (Collage) --- */
.story-section {
    padding: var(--spacing-2xl) 0;
}

.story-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.section-label {
    color: var(--primary-blue);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
    display: block;
    margin-bottom: 0.5rem;
}

.section-heading {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
}

.highlight-underline {
    position: relative;
    z-index: 1;
}

.highlight-underline::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    height: 10px;
    background: rgba(245, 158, 11, 0.2); /* Accent Amber */
    z-index: -1;
    transform: rotate(-1deg);
}

.story-text {
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 1.5rem;
}

.story-stats {
    display: flex;
    gap: 3rem;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--bg-tertiary);
}

.story-stat-item {
    display: flex;
    flex-direction: column;
}

.stat-num {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--primary-blue);
    line-height: 1;
}

.stat-label {
    font-size: 0.9rem;
    color: var(--text-secondary);
    font-weight: 500;
}

/* Collage Styles */
.story-visuals {
    position: relative;
}

.collage-wrapper {
    position: relative;
    padding-bottom: 40px; 
    /* Space for floating elements */
}

.collage-img-lg {
    width: 85%;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-xl);
    aspect-ratio: 4/5;
    position: relative;
    z-index: 1;
}

.collage-img-sm {
    position: absolute;
    bottom: 0;
    left: 0; /* RTL: left side */
    width: 50%;
    aspect-ratio: 1;
    border-radius: var(--radius-lg);
    overflow: hidden;
    z-index: 2;
    border: 8px solid var(--bg-primary); /* Creates cut-out effect */
    box-shadow: var(--shadow-2xl);
}

.collage-badge {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.9);
    padding: 0.5rem 1rem;
    border-radius: var(--radius-full);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
    font-size: 0.8rem;
    color: var(--primary-blue);
    box-shadow: var(--shadow-sm);
}

.circle-decor {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 150px;
    height: 150px;
    border: 2px solid var(--accent-amber);
    border-radius: 50%;
    opacity: 0.2;
    z-index: 0;
}

.dots-decor {
    position: absolute;
    bottom: 20px;
    right: 10px;
    width: 100px;
    height: 100px;
    background-image: radial-gradient(var(--primary-blue) 1px, transparent 1px);
    background-size: 10px 10px;
    opacity: 0.1;
    z-index: 0;
}

/* ========================================
   MODERN BENTO GRID (REDESIGNED)
   ======================================== */

.values-section-modern {
    padding: 6rem 0;
    background-color: var(--bg-secondary);
}

.section-header-center {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 3rem;
}

.section-tag {
    display: inline-block;
    padding: 0.5rem 1.25rem;
    background: rgba(8, 145, 178, 0.1);
    color: var(--primary-cyan);
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.bento-grid-modern {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, minmax(260px, auto));
    gap: 1.5rem;
    max-width: 1100px;
    margin: 0 auto;
}

/* Common Card Styles */
.bento-item {
    background: #fff;
    border-radius: 24px;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0,0,0,0.03);
    display: flex;
    flex-direction: column;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.bento-item:hover {
    box-shadow: 0 12px 30px -5px rgba(0, 0, 0, 0.08);
}

.bento-item h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: var(--text-primary);
    position: relative;
    z-index: 2;
}

.bento-item p {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin: 0;
    position: relative;
    z-index: 2;
}

.hajj-umrah-card p {
    line-height: 1.8;
    max-width: 90%;
}

.visa-sales-card p {
    line-height: 1.75;
}

.icon-wrapper {
    width: 54px;
    height: 54px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    background: var(--bg-secondary);
    transition: transform 0.3s ease;
    position: relative;
    z-index: 2;
}

.bento-item:hover .icon-wrapper {
    transform: scale(1.1) rotate(-5deg);
}

/* 1. Vision Card (Large, Dark Blue) */
.vision-card {
    grid-column: span 2;
    background: linear-gradient(135deg, #004B87 0%, #003661 100%);
    color: white;
    justify-content: center;
}

.vision-card h3, .vision-card p {
    color: white;
}

.vision-card p {
    opacity: 0.9;
    max-width: 85%;
}

.vision-card .card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(0,0,0,0.1), transparent);
    z-index: 1;
}

.glass-icon {
    background: rgba(255, 255, 255, 0.15) !important;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
}

.bg-pattern {
    position: absolute;
    right: -50px;
    bottom: -50px;
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
}

/* 2. Trust Card (Tall, Vertical) */
.trust-card {
    grid-column: span 1;
    grid-row: span 2;
    background: linear-gradient(to bottom, #fff 0%, #FFFBEB 100%);
    border: 1px solid rgba(245, 158, 11, 0.1);
}

.trust-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(245, 158, 11, 0.1);
    color: #d97706;
    padding: 6px 12px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 700;
    align-self: flex-start;
    margin-bottom: 2rem;
}

/* 3. Team Card */
.team-card {
    grid-column: span 1;
}

.tiny-tag {
    font-size: 0.75rem;
    font-weight: 700;
    color: #2563EB;
    background: #EFF6FF;
    padding: 4px 8px;
    border-radius: 6px;
}

/* 4. Map Card */
.map-card {
    grid-column: span 1;
}

.map-dots-decoration {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 60px;
    height: 60px;
    background-image: radial-gradient(#CBD5E1 1.5px, transparent 1.5px);
    background-size: 8px 8px;
    opacity: 0.5;
}

/* 5. Service Card */
.service-card {
    grid-column: span 1;
}

/* 6. Hajj & Umrah Card (Featured with gradient) */
.hajj-umrah-card {
    grid-column: span 2;
    background: linear-gradient(135deg, #065f46 0%, #047857 100%);
    color: white;
    overflow: hidden;
}

.hajj-umrah-card::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
    transition: transform 0.5s ease;
}

.hajj-umrah-card:hover::before {
    transform: scale(1.5);
}

.hajj-umrah-card h3, .hajj-umrah-card p {
    color: white;
}

.hajj-umrah-card p {
    opacity: 0.9;
}

.hajj-umrah-card .icon-wrapper {
    background: rgba(255, 255, 255, 0.15) !important;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
}

.hajj-pattern {
    position: absolute;
    left: -30px;
    top: -30px;
    width: 180px;
    height: 180px;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
}

/* 7. Visa Sales Card */
.visa-sales-card {
    grid-column: span 1;
    background: linear-gradient(to bottom, #f8fafc 0%, #f1f5f9 100%);
    border: 1px solid rgba(99, 102, 241, 0.1);
    position: relative;
    overflow: hidden;
}

.visa-sales-card::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.visa-sales-card:hover::after {
    transform: scaleX(1);
}

.visa-sales-card .icon-wrapper {
    background: rgba(99, 102, 241, 0.1);
    transition: all 0.3s ease;
}

.visa-sales-card:hover .icon-wrapper {
    background: rgba(99, 102, 241, 0.2);
    transform: scale(1.1);
}

.visa-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(99, 102, 241, 0.1);
    color: #6366f1;
    padding: 6px 12px;
    border-radius: 50px;
    font-size: 0.8rem;
    font-weight: 700;
    align-self: flex-start;
    margin-bottom: 1rem;
    border: 1px solid rgba(99, 102, 241, 0.2);
    transition: all 0.3s ease;
}

.visa-sales-card:hover .visa-badge {
    background: rgba(99, 102, 241, 0.15);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
}

/* Tailwind Utilities (if not using Tailwind directly) */
.relative { position: relative; }
.z-10 { z-index: 10; }
.mb-3 { margin-bottom: 0.75rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-5 { margin-bottom: 2rem; }
.mt-auto { margin-top: auto; }
.flex { display: flex; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.text-amber-500 { color: #f59e0b; }
.text-blue-600 { color: #2563eb; }
.text-teal-600 { color: #0d9488; }
.text-rose-500 { color: #f43f5e; }

/* --- CTA Section --- */
.cta-modern-section {
    padding: var(--spacing-2xl) 0;
}

.cta-modern-card {
    background: var(--primary-dark);
    border-radius: 30px;
    padding: 4rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    color: white;
    box-shadow: var(--shadow-xl);
}

.cta-modern-content {
    position: relative;
    z-index: 2;
    max-width: 700px;
    margin: 0 auto;
}

.cta-modern-content h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 1rem;
    color: white;
}

.cta-modern-content p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2.5rem;
}

.cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.cta-pattern-overlay {
    position: absolute;
    inset: 0;
    background-image: 
        radial-gradient(circle at 10% 20%, rgba(255,255,255,0.05) 0%, transparent 20%),
        radial-gradient(circle at 90% 80%, rgba(255,255,255,0.05) 0%, transparent 20%);
    z-index: 1;
}

.text-white { color: white !important; }
.border-white { border-color: rgba(255,255,255,0.3) !important; }
.hover-white:hover { background: white !important; color: var(--primary-blue) !important; }

/* Subtle glow animation for featured cards */
@keyframes subtlePulse {
    0%, 100% {
        box-shadow: 0 0 0 0 rgba(6, 95, 70, 0);
    }
    50% {
        box-shadow: 0 0 20px 5px rgba(6, 95, 70, 0.1);
    }
}

.hajj-umrah-card {
    animation: subtlePulse 4s ease-in-out infinite;
}

/* --- Responsive Adjustments --- */
@media (max-width: 992px) {
    .bento-grid-modern {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
    }

    .vision-card { grid-column: span 2; }
    .trust-card { grid-column: span 1; grid-row: span 1; min-height: 280px; }
    .team-card { grid-column: span 1; }
    .map-card { grid-column: span 1; }
    .service-card { grid-column: span 1; }
    .hajj-umrah-card { grid-column: span 2; }
    .visa-sales-card { grid-column: span 1; }
}

@media (max-width: 768px) {
    .story-grid {
        grid-template-columns: 1fr;
    }

    .collage-wrapper {
        max-width: 500px;
        margin: 0 auto;
    }

    .bento-grid-modern {
        grid-template-columns: 1fr;
        gap: 1.25rem;
    }

    .vision-card, .trust-card, .team-card, .map-card, .service-card, .hajj-umrah-card, .visa-sales-card {
        grid-column: span 1;
        grid-row: auto;
    }

    .hero-title-modern {
        font-size: 2.5rem;
    }

    .hajj-umrah-card, .visa-sales-card {
        animation: none;
    }
}
```

## File: pages/Services.css

- Extension: .css
- Language: unknown
- Size: 8593 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```unknown
/* ========================================
   PREMIUM SERVICES PAGE STYLES
   ======================================== */

.services-page-premium {
    background-color: var(--bg-secondary);
    overflow-x: hidden;
    padding-bottom: var(--spacing-2xl);
}

/* --- Modern Hero Section --- */
.services-hero-modern {
    position: relative;
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #004B87 0%, #002b4d 100%);
    overflow: hidden;
    padding-top: 80px; /* Space for navbar */
    margin-bottom: -60px; /* Overlap with filter bar */
}

.hero-bg-layer {
    position: absolute;
    inset: 0;
    overflow: hidden;
}

.hero-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.4;
}

.blob-1 {
    width: 400px;
    height: 400px;
    background: var(--primary-light);
    top: -100px;
    right: -100px;
    animation: floatBlob 10s infinite ease-in-out;
}

.blob-2 {
    width: 300px;
    height: 300px;
    background: var(--accent-amber);
    bottom: 0;
    left: -50px;
    opacity: 0.2;
    animation: floatBlob 15s infinite ease-in-out reverse;
}

@keyframes floatBlob {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(30px, -30px); }
}

.hero-content-center {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}

.hero-badge-pill {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    color: var(--accent-amber);
    font-weight: 700;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    backdrop-filter: blur(5px);
}

.hero-title-lg {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    color: white;
    line-height: 1.2;
    margin-bottom: 1.5rem;
}

.text-gradient-gold {
    background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-desc-lg {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.7;
    max-width: 600px;
    margin: 0 auto;
}

.hero-wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.hero-wave svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 80px;
}

.hero-wave .shape-fill {
    fill: var(--bg-secondary);
}

/* --- Sticky Filter Bar --- */
.filter-sticky-wrapper {
    position: sticky;
    top: 90px; /* Adjust based on navbar height */
    z-index: 50;
    margin-bottom: var(--spacing-xl);
    padding: 0 var(--spacing-md);
}

.filter-glass-bar {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: var(--radius-full);
    padding: 0.75rem;
    box-shadow: 0 10px 30px -10px rgba(0, 75, 135, 0.15);
    max-width: 1000px;
    margin: 0 auto;
}

.filter-scroll-container {
    display: flex;
    gap: 0.75rem;
    overflow-x: auto;
    padding-bottom: 2px;
    justify-content: center;
    scrollbar-width: none; /* Firefox */
}

.filter-scroll-container::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
}

.filter-pill {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    border-radius: var(--radius-full);
    border: 1px solid transparent;
    background: transparent;
    color: var(--text-secondary);
    font-weight: 600;
    font-size: 0.95rem;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: var(--font-body);
}

.filter-pill:hover {
    background: rgba(8, 145, 178, 0.05);
    color: var(--primary-cyan);
}

.filter-pill.active {
    background: var(--primary-blue);
    color: white;
    box-shadow: 0 4px 12px rgba(0, 75, 135, 0.2);
}

.filter-icon {
    font-size: 1.1rem;
    display: flex;
    align-items: center;
}

/* --- Services Grid --- */
.services-grid-section {
    min-height: 400px;
}

.results-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding: 0 1rem;
}

.results-header h3 {
    font-size: 1rem;
    color: var(--text-secondary);
    font-weight: 500;
}

.clear-filter {
    background: none;
    border: none;
    color: var(--primary-cyan);
    font-weight: 700;
    cursor: pointer;
    font-size: 0.9rem;
}

.services-grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 2rem;
}

.empty-state-modern {
    text-align: center;
    padding: 4rem;
    color: var(--text-muted);
    background: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    grid-column: 1 / -1;
}

/* --- Process Section --- */
.process-section {
    padding: 4rem 0;
    background: white;
    position: relative;
}

.process-steps {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 4rem;
    position: relative;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
}

.process-step {
    flex: 1;
    text-align: center;
    position: relative;
    z-index: 2;
    padding: 0 1rem;
}

.step-number {
    font-size: 4rem;
    font-weight: 800;
    color: rgba(8, 145, 178, 0.05);
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
}

.step-icon {
    width: 70px;
    height: 70px;
    background: white;
    border: 2px solid var(--bg-tertiary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    color: var(--primary-cyan);
    margin: 0 auto 1.5rem;
    box-shadow: var(--shadow-lg);
    transition: all 0.3s ease;
}

.process-step:hover .step-icon {
    border-color: var(--primary-cyan);
    transform: scale(1.1);
}

.process-line {
    flex: 1;
    height: 2px;
    background: var(--bg-tertiary);
    margin-top: 35px; /* Aligns with center of icons */
    position: relative;
}

.process-step h3 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    color: var(--text-primary);
}

.process-step p {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.6;
}

/* --- Premium CTA --- */
.premium-cta-wrapper {
    padding: 4rem 0;
}

.premium-cta-card {
    background: var(--primary-dark);
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    color: white;
    text-align: center;
    padding: 5rem 2rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.cta-bg-image {
    position: absolute;
    inset: 0;
    z-index: 1;
}

.cta-bg-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.cta-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(0, 75, 135, 0.85), rgba(15, 23, 42, 0.95));
}

.cta-content-inner {
    position: relative;
    z-index: 2;
    max-width: 700px;
    margin: 0 auto;
}

.cta-content-inner h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: white;
}

.cta-content-inner p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2.5rem;
}

.cta-actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

/* --- Responsive --- */
@media (max-width: 992px) {
    .services-grid-layout {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .process-steps {
        flex-direction: column;
        gap: 3rem;
    }
    
    .process-line {
        display: none;
    }
    
    .hero-title-lg {
        font-size: 3rem;
    }
}

@media (max-width: 768px) {
    .filter-scroll-container {
        justify-content: flex-start;
        padding-bottom: 10px;
    }
    
    .services-grid-layout {
        grid-template-columns: 1fr;
    }
    
    .results-header {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
    
    .hero-title-lg {
        font-size: 2.5rem;
    }
    
    .cta-content-inner h2 {
        font-size: 2rem;
    }
}
```

## File: pages/Destinations.css

- Extension: .css
- Language: unknown
- Size: 12314 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```unknown
.destinations-page {
    /* Removed padding-top to allow hero to start at top of screen behind navbar */
    overflow-x: hidden;
}

/* ========================================
   ENHANCED DESTINATIONS HERO SECTION
   ======================================== */

.destinations-hero {
    position: relative;
    min-height: 85vh;
    /* Increased height for better impact */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* Updated background to image as requested */
    background-image: url('/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* Removed solid gradient background */
    overflow: hidden;
    padding: max(8rem, env(safe-area-inset-top)) var(--spacing-md) max(3rem, env(safe-area-inset-bottom));
    /* Performance optimization */
    contain: layout style paint;
}

.destinations-hero-overlay {
    position: absolute;
    inset: 0;
    /* Darker overlay for better text readability over image */
    background: linear-gradient(to bottom,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.5) 50%,
            rgba(0, 54, 97, 0.8) 100%);
    z-index: 1;
}

.destinations-hero-pattern {
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.4;
    z-index: 1;
}

.destinations-hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-md);
}

/* Hero Badge */
.destinations-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1.5rem;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: var(--radius-full);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    font-size: clamp(0.875rem, 2vw, 1rem);
    font-weight: 600;
    font-family: var(--font-heading);
    min-height: 44px;
    /* Touch target optimization */
}

.destinations-hero-badge svg {
    font-size: 1.1em;
}

/* Hero Title with Animated Underline */
.destinations-title-wrapper {
    position: relative;
    margin: var(--spacing-sm) 0;
}

.destinations-hero-title {
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    font-weight: 800;
    color: white;
    line-height: 1.2;
    margin: 0;
    font-family: var(--font-heading);
    position: relative;
    display: inline-block;
    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}

.destinations-title-underline {
    position: absolute;
    bottom: -0.5rem;
    right: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--accent-amber), transparent);
    transform-origin: right;
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(245, 158, 11, 0.5);
}

/* Sliding Text Animation (RTL) */
.destinations-sliding-text-wrapper {
    width: 100%;
    overflow: hidden;
    margin: var(--spacing-md) 0;
    position: relative;
    mask-image: linear-gradient(to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%);
    -webkit-mask-image: linear-gradient(to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%);
}

.destinations-sliding-text {
    display: flex;
    gap: 1.5rem;
    width: max-content;
    animation: slide-text-rtl 40s linear infinite;
    will-change: transform;
    transform: translateZ(0);
    backface-visibility: hidden;
}

@keyframes slide-text-rtl {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.sliding-word {
    display: inline-block;
    padding: 0.5rem 1.25rem;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--radius-full);
    color: white;
    font-size: clamp(0.9rem, 2.5vw, 1.1rem);
    font-weight: 600;
    white-space: nowrap;
    flex-shrink: 0;
    font-family: var(--font-heading);
    transition: all 0.3s ease;
}

.sliding-word:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
}

/* Hero Subtitle */
.destinations-hero-subtitle {
    font-size: clamp(1rem, 3vw, 1.5rem);
    color: rgba(255, 255, 255, 0.95);
    line-height: 1.6;
    max-width: 600px;
    margin: 0;
    font-family: var(--font-body);
    text-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
}

/* CTA Button */
.destinations-hero-cta {
    margin-top: var(--spacing-md);
}

.destinations-cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2.5rem;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: var(--radius-full);
    color: white;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    font-weight: 700;
    font-family: var(--font-heading);
    text-decoration: none;
    transition: all var(--transition-base);
    min-height: 52px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
}

.destinations-cta-button::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
    opacity: 0;
    transition: opacity var(--transition-base);
}

.destinations-cta-button:hover::before {
    opacity: 1;
}

.destinations-cta-button:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.destinations-cta-button:active {
    transform: translateY(0);
}

.destinations-cta-button svg {
    transition: transform var(--transition-base);
}

.destinations-cta-button:hover svg {
    transform: translateX(-4px);
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
    .destinations-sliding-text {
        animation: none;
        justify-content: center;
        flex-wrap: wrap;
    }

    .destinations-title-underline {
        animation: none;
        transform: scaleX(1);
    }

    .destinations-cta-button:hover {
        transform: none;
    }
}

/* Mobile Optimizations */
@media (max-width: 767px) {
    .destinations-hero {
        min-height: 60vh;
        padding: max(2rem, env(safe-area-inset-top)) var(--spacing-sm) max(2rem, env(safe-area-inset-bottom));
    }

    .destinations-hero-content {
        gap: var(--spacing-sm);
    }

    .destinations-sliding-text {
        gap: 1rem;
    }

    .sliding-word {
        padding: 0.4rem 1rem;
    }

    .destinations-hero-decoration {
        width: 80px;
        height: 80px;
        bottom: -1rem;
    }
}

/* Touch Device Optimizations */
@media (hover: none) and (pointer: coarse) {
    .destinations-hero-badge {
        min-height: 44px;
    }

    .sliding-word {
        min-height: 44px;
        display: inline-flex;
        align-items: center;
    }
}

.destinations-grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: var(--spacing-lg);
}

.destination-card-full {
    background: var(--bg-primary);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
    height: 100%;
}

.destination-card-full:hover {
    transform: translateY(-12px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(8, 145, 178, 0.2);
}

.dest-img-wrapper {
    position: relative;
    height: 240px;
    overflow: hidden;
}

.dest-full-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.destination-card-full:hover .dest-full-img {
    transform: scale(1.15);
}

.dest-overlay-gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
}

.destination-card-full:hover .dest-overlay-gradient {
    opacity: 1;
}

.dest-duration-badge {
    position: absolute;
    top: var(--spacing-md);
    right: var(--spacing-md);
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: var(--text-primary);
    padding: 8px 14px;
    border-radius: var(--radius-full);
    font-weight: 600;
    font-size: var(--font-sm);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.3s ease;
}

.destination-card-full:hover .dest-duration-badge {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.05);
}

.dest-badge-icon {
    font-size: 14px;
    color: var(--primary-cyan);
}

.dest-content {
    padding: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.dest-header {
    margin-bottom: var(--spacing-md);
}

.dest-title {
    font-size: var(--font-xl);
    color: var(--text-primary);
    margin: 0 0 6px 0;
    font-weight: 700;
    line-height: 1.3;
}

.dest-country {
    font-size: var(--font-sm);
    color: var(--primary-cyan);
    font-weight: 600;
    display: block;
    margin-top: 4px;
}

.dest-desc {
    font-size: var(--font-base);
    color: var(--text-secondary);
    margin-bottom: var(--spacing-md);
    line-height: 1.6;
}

.dest-features {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.dest-feature-tag {
    background: linear-gradient(135deg, rgba(8, 145, 178, 0.1) 0%, rgba(14, 116, 144, 0.1) 100%);
    color: var(--primary-cyan);
    padding: 6px 12px;
    border-radius: var(--radius-sm);
    font-size: var(--font-xs);
    font-weight: 600;
    border: 1px solid rgba(8, 145, 178, 0.15);
    transition: all 0.2s ease;
}

.dest-feature-tag:hover {
    background: linear-gradient(135deg, rgba(8, 145, 178, 0.15) 0%, rgba(14, 116, 144, 0.15) 100%);
    border-color: rgba(8, 145, 178, 0.25);
    transform: translateY(-1px);
}

.dest-cta-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: auto;
    padding: 12px 24px;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.dest-cta-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.dest-cta-btn:hover::before {
    width: 300px;
    height: 300px;
}

.dest-cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(8, 145, 178, 0.3);
}

.dest-btn-icon {
    transition: transform 0.3s ease;
}

.dest-cta-btn:hover .dest-btn-icon {
    transform: translateX(-4px);
}

.mt-md {
    margin-top: var(--spacing-md);
}

/* Enhanced card animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.destination-card-full {
    animation: fadeInUp 0.6s ease-out backwards;
}

/* Special styling for Makkah and Madina cards */
.destination-card-full[data-special="true"] {
    border: 2px solid rgba(245, 158, 11, 0.3);
    background: linear-gradient(135deg, var(--bg-primary) 0%, rgba(245, 158, 11, 0.02) 100%);
}

.destination-card-full[data-special="true"]:hover {
    border-color: rgba(245, 158, 11, 0.5);
    box-shadow: 0 12px 40px rgba(245, 158, 11, 0.2);
}
```

## File: data/destinations.js

- Extension: .js
- Language: javascript
- Size: 11216 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
// Destinations data
export const popularDestinations = [
    {
        name: "دبي",
        image: "/dubai.jpg",
        price: "تبدأ من 1500 ر.س",
        category: "تسوق وترفيه",

    },
    {
        name: "لندن",
        image: "/london.jpeg",
        price: "تبدأ من 3500 ر.س",
        category: "تاريخ وثقافة",

    },
    {
        name: "المالديف",
        image: "/beach.jpg",
        price: "تبدأ من 4500 ر.س",
        category: "استجمام",

    },
    {
        name: "إسطنبول",
        image: "/istanbul.jpeg",
        price: "تبدأ من 2000 ر.س",
        category: "تاريخ وطبيعة",

    },
    {
        name: "القاهرة",
        image: "/cairo.jpg",
        price: "تبدأ من 1800 ر.س",
        category: "تاريخ وحضارة",

    }
];

export const allDestinations = [
    {
        id: 1,
        name: "دبي",
        country: "الإمارات العربية المتحدة",
        image: "/dubai.jpg",
        description: "دبي هي وجهة عالمية تجمع بين الحداثة المذهلة والتقاليد العربية الأصيلة. من ناطحات السحاب الشاهقة إلى الأسواق التقليدية، تقدم دبي تجربة لا تُنسى لكل زائر.",
        features: ["برج خليفة", "نخلة جميرا", "دبي مول"],
        offeredServices: ["حجوزات فنادق فاخرة", "جولات سياحية خاصة"],
        placesToVisit: ["برج خليفة", "نافورة دبي", "حي الفهيدي التاريخي", "برواز دبي"],
        startingPrice: "1500 ر.س",
        price: "1500 ر.س",

    },
    {
        id: 2,
        name: "إسطنبول",
        country: "تركيا",
        image: "/istanbul.jpeg",
        description: "إسطنبول، المدينة التي تمتد عبر قارتين، هي مزيج ساحر من التاريخ والثقافة. استمتع بجمال البسفور، وروعة المساجد العثمانية، وحيوية البازارات.",
        features: ["آيا صوفيا", "البسفور", "البازار الكبير"],
        offeredServices: ["رحلات بحرية في البسفور", "جولات ثقافية وتاريخية"],
        placesToVisit: ["مسجد السلطان أحمد", "قصر توبكابي", "برج غلطة", "ميدان تقسيم"],
        startingPrice: "2000 ر.س",
        price: "2000 ر.س",

    },
    {
        id: 3,
        name: "المالديف",
        country: "جزر المالديف",
        image: "/beach.jpg",
        description: "المالديف هي الجنة الاستوائية المثالية للباحثين عن الاسترخاء والهدوء. شواطئ رملية بيضاء، مياه فيروزية صافية، ومنتجعات فاخرة فوق الماء.",
        features: ["منتجعات فاخرة", "الغوص", "رحلات بحرية"],
        offeredServices: ["باقات شهر العسل", "أنشطة الغوص والرياضات المائية"],
        placesToVisit: ["جزيرة ماليه", "جزيرة مافوشي", "منتجع أداران", "الشاطئ المضيء"],
        startingPrice: "4500 ر.س",
        price: "4500 ر.س",

    },
    {
        id: 4,
        name: "لندن",
        country: "المملكة المتحدة",
        image: "/london.jpeg",
        description: "لندن هي عاصمة الثقافة والتاريخ، حيث يلتقي الماضي بالحاضر. استكشف القصور الملكية، والمتاحف العالمية، والحدائق الخلابة في واحدة من أعظم مدن العالم.",
        features: ["بيج بن", "قصر باكنغهام", "المتحف البريطاني"],
        offeredServices: ["تذاكر المعالم السياحية", "خدمات النقل والمواصلات"],
        placesToVisit: ["عين لندن", "برج لندن", "هايد بارك", "جسر البرج"],
        startingPrice: "3500 ر.س",
        price: "3500 ر.س",

    },
    {
        id: 5,
        name: "باريس",
        country: "فرنسا",
        image: "/paris.jpg",
        description: "باريس، مدينة الحب والأضواء، تأسر القلوب بجمالها المعماري وفنونها الراقية. استمتع بجولة في الشانزليزيه، وزيارة برج إيفل، وتذوق أشهى المأكولات الفرنسية.",
        features: ["برج إيفل", "متحف اللوفر", "الشانزليزيه"],
        offeredServices: ["جولات رومانسية", "حجوزات مطاعم فاخرة"],
        placesToVisit: ["قوس النصر", "كاتدرائية نوتردام", "حي مونمارتر", "قصر فرساي"],
        startingPrice: "4000 ر.س",
        price: "4000 ر.س",

    },
    {
        id: 6,
        name: "مكة المكرمة",
        country: "المملكة العربية السعودية",
        image: "/hero_makkah_background_1764893075599.jpg",
        description: "مكة المكرمة، أقدس مدن الإسلام وقلب العالم الإسلامي. حيث يتجه ملايين المسلمين من كل أنحاء العالم لأداء فريضة الحج والعمرة. تجربة روحانية لا تُنسى في أطهر بقاع الأرض.",
        features: ["الكعبة المشرفة", "المسجد الحرام", "جبل عرفة"],
        offeredServices: ["برامج الحج والعمرة", "حجوزات فنادق قريبة من الحرم", "خدمات الإرشاد"],
        placesToVisit: ["الكعبة المشرفة", "المسجد الحرام", "جبل النور", "غار حراء", "جبل عرفة"],
        startingPrice: "1000 ر.س",
        price: "1000 ر.س",

    },
    {
        id: 7,
        name: "المدينة المنورة",
        country: "المملكة العربية السعودية",
        image: "/almadina.jpg",
        description: "المدينة المنورة، مدينة النبي صلى الله عليه وسلم، ثاني أقدس مدن الإسلام. حيث يزور المسلمون المسجد النبوي الشريف وروضة الشريف. تجربة روحانية عميقة في أرض الهجرة النبوية.",
        features: ["المسجد النبوي", "قبر النبي", "جبل أحد"],
        offeredServices: ["برامج العمرة", "زيارة المسجد النبوي", "جولات تاريخية"],
        placesToVisit: ["المسجد النبوي الشريف", "روضة الشريف", "جبل أحد", "مسجد قباء", "مقبرة البقيع"],
        startingPrice: "1000 ر.س",
        price: "1000 ر.س",

    },
    {
        id: 8,
        name: "القاهرة",
        country: "مصر",
        image: "/cairo.jpg",
        description: "القاهرة، مدينة الألف مئذنة، هي قلب العالم العربي النابض. اكتشف عظمة الأهرامات، وسحر النيل، وعبق التاريخ في خان الخليلي.",
        features: ["الأهرامات", "المتحف المصري", "خان الخليلي"],
        offeredServices: ["رحلات نيلية", "جولات أثرية متخصصة"],
        placesToVisit: ["أهرامات الجيزة", "قلعة صلاح الدين", "شارع المعز", "برج القاهرة"],
        startingPrice: "1800 ر.س",
        price: "1800 ر.س",

    },
    {
        id: 9,
        name: "الرياض",
        country: "المملكة العربية السعودية",
        image: "/Riyadh.jpg",
        description: "الرياض، عاصمة المملكة المتطورة، تجمع بين الأصالة التراثية والحداثة المعمارية. استمتع بفعاليات موسم الرياض، وزيارة الدرعية التاريخية، والتسوق في أرقى المولات.",
        features: ["الدرعية", "بوليفارد الرياض", "المتحف الوطني"],
        offeredServices: ["جولات تراثية", "حجوزات فعاليات ترفيهية"],
        placesToVisit: ["حي الطريف", "برج المملكة", "وادي حنيفة", "منتزه الملك عبدالله"],
        startingPrice: "1200 ر.س",
        price: "1200 ر.س",

    },
    {
        id: 10,
        name: "أديس أبابا",
        country: "إثيوبيا",
        image: "/adisababa.jpg",
        description: "أديس أبابا، الزهرة الجديدة، هي عاصمة إفريقيا الدبلوماسية. تتميز بطبيعتها الخلابة، وثقافتها العريقة، وتاريخها الغني كأرض القهوة الأصلية.",
        features: ["المتحف الوطني", "جبل إنتوتو", "سوق ميركاتو"],
        offeredServices: ["رحلات استكشاف الطبيعة", "تجربة القهوة الإثيوبية"],
        placesToVisit: ["كاتدرائية الثالوث القدوس", "ميدان مسكل", "حديقة الوحدة", "متحف الإثنوجرافيا"],
        startingPrice: "2500 ر.س",
        price: "2500 ر.س",

    },
    {
        id: 11,
        name: "نيودلهي",
        country: "الهند",
        image: "/delhi.jpg",
        description: "نيودلهي هي مدينة التناقضات المدهشة، حيث تتعايش المعالم التاريخية القديمة مع ناطحات السحاب الحديثة. استمتع بألوان الهند، ونكهاتها، وتراثها الغني.",
        features: ["تاج محل", "بوابة الهند", "القلعة الحمراء"],
        offeredServices: ["جولات في المثلث الذهبي", "تجارب طعام محلية"],
        placesToVisit: ["قطب منار", "معبد اللوتس", "جامع مسجد", "حدائق لودهي"],
        startingPrice: "2800 ر.س",
        price: "2800 ر.س",

    },
    {
        id: 12,
        name: "كوالالمبور",
        country: "ماليزيا",
        image: "/hero-bg.jpg",
        description: "كوالالمبور هي جوهرة جنوب شرق آسيا، مدينة نابضة بالحياة تجمع بين الثقافات المتعددة. من أبراج بتروناس الشهيرة إلى الكهوف الطبيعية، تقدم ماليزيا تجربة سياحية متكاملة.",
        features: ["أبراج بتروناس", "كهوف باتو", "مرتفعات جنتنج"],
        offeredServices: ["باقات عائلية", "رحلات للجزر الاستوائية"],
        placesToVisit: ["حديقة الطيور", "ميدان ميرديكا", "شارع العرب (بوكيت بينتانج)", "اكواريوم KLCC"],
        startingPrice: "3200 ر.س",
        price: "3200 ر.س",

    }
];

```

## File: data/faq.js

- Extension: .js
- Language: javascript
- Size: 1449 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
// FAQ data
export const faqs = [
    {
        question: "كيف يمكنني حجز رحلة؟",
        answer: "يمكنك حجز رحلتك بسهولة عن طريق التواصل معنا عبر الواتساب أو زيارة مكتبنا. قريباً سنوفر خدمة الحجز المباشر عبر الموقع."
    },
    {
        question: "هل توفرون عروضاً خاصة للعائلات؟",
        answer: "نعم، لدينا باقات مخصصة للعائلات تشمل تذاكر الطيران، الإقامة، والجولات السياحية بأسعار مميزة."
    },
    {
        question: "ما هي طرق الدفع المتاحة؟",
        answer: "نقبل الدفع نقداً، التحويل البنكي، والبطاقات الائتمانية (فيزا/ماستركارد)."
    },
    {
        question: "هل يمكنني تعديل أو إلغاء الحجز؟",
        answer: "نعم، يخضع التعديل والإلغاء لسياسة الشروط والأحكام الخاصة بكل رحلة. يرجى التواصل مع خدمة العملاء للمساعدة."
    },
    {
        question: "هل تشمل الباقات التأمين الطبي؟",
        answer: "بعض الباقات تشمل التأمين الطبي الدولي. يرجى التحقق من تفاصيل الباقة أو سؤال موظف الحجز."
    }
];

```

## File: data/testimonials.js

- Extension: .js
- Language: javascript
- Size: 1517 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
// Testimonials data
export const testimonials = [
    {
        name: "أحمد السعيد",
        rating: 5,
        text: "تجربة رائعة من البداية للنهاية. الفريق محترف جداً والخدمة ممتازة. أنصح الجميع بالتعامل معهم.",
        location: "الرياض، السعودية"
    },
    {
        name: "فاطمة محمد",
        rating: 5,
        text: "حجزت معهم رحلة شهر العسل للمالديف وكانت تجربة لا تُنسى. كل التفاصيل كانت مرتبة بشكل مثالي.",
        location: "جدة، السعودية"
    },
    {
        name: "خالد العتيبي",
        rating: 4.5,
        text: "خدمة سريعة وأسعار منافسة. استخدمت خدماتهم عدة مرات وكانت تجربتي دائماً إيجابية.",
        location: "الدمام، السعودية"
    },
    {
        name: "نورة المطيري",
        rating: 5,
        text: "أفضل وكالة سفر تعاملت معها. الموظفون متعاونون جداً ويقدمون استشارات قيمة.",
        location: "الكويت"
    },
    {
        name: "محمد الشمري",
        rating: 5,
        text: "حجزت رحلة عمرة لعائلتي وكانت التجربة رائعة. كل شيء كان منظم بشكل ممتاز.",
        location: "مكة المكرمة، السعودية"
    }
];

```

## File: data/index.js

- Extension: .js
- Language: javascript
- Size: 118 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
// Re-export all data
export * from './services';
export * from './destinations';
export * from './testimonials';

```

## File: data/services.js

- Extension: .js
- Language: javascript
- Size: 20760 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
// Services data - Highlights (Updated to include new services)
export const services = [
    {
        title: "تفاويض العمالة (مساند)",
        description: "توثيق واعتماد تفاويض التأشيرات عبر منصة مساند بكل سهولة وسرعة.",
        icon: "📋",
        features: ["توثيق فوري", "ربط آلي بمساند", "دعم فني"],
        link: "/services"
    },
    {
        title: "تأشيرات الزيارة العائلية",
        description: "تسهيل استخراج تأشيرات الزيارة للأقارب من الدرجة الأولى لجمع شمل العائلة.",
        icon: "🤝",
        features: ["مراجعة المستندات", "إنجاز سريع", "نسبة قبول عالية"],
        link: "/services"
    },
    {
        title: "استقدام الأيدي العاملة",
        description: "توفير وتخليص معاملات الكوادر المهنية لمختلف التخصصات بترخيص رسمي رقم 19.",
        icon: "👷",
        features: ["كوادر مؤهلة", "إجراءات نظامية", "خبرة واسعة"],
        link: "/services"
    }
];

export const allServices = [
    /** --- NEW SERVICES ADDED --- **/
    {
        title: "تفاويض العمالة عبر مساند",
        tagline: "توثيق واعتماد التفاويض الرسمية للعمالة المنزلية",
        description: "نقدم خدمة توثيق تفاويض تأشيرات العمالة المنزلية عبر منصة مساند بدقة وعناية.",
        detailedDescription: "بصفتنا مكتباً معتمداً، نضمن لك إنهاء جميع إجراءات تفاويض العمالة عبر منصة مساند وتسهيل عملية الربط مع مكاتب الاستقدام الخارجية لضمان وصول عمالتك في أسرع وقت ممكن وبكل احترافية.",
        icon: "FiFileText",
        features: [
            "إصدار التفاويض الإلكترونية",
            "الربط مع منصة مساند",
            "متابعة حالة الطلب",
            "إنهاء الإجراءات القانونية",
            "دعم فني للمستفيدين"
        ],
        category: "musaned"
    },
    {
        title: "تأشيرات الزيارة العائلية",
        tagline: "تخليص تأشيرات الزيارة للأقارب من الدرجة الأولى",
        description: "تسهيل إجراءات استخراج تأشيرات الزيارة لجمع شمل العائلة داخل المملكة.",
        detailedDescription: "نتولى كافة إجراءات استخراج تأشيرات الزيارة العائلية للأقارب من الدرجة الأولى (الزوجة، الأبناء، والوالدين)، مع مراجعة دقيقة لكافة المستندات المطلوبة لضمان قبول الطلب وسرعة التنفيذ لدى الجهات المختصة.",
        icon: "FiUsers",
        features: [
            "تجهيز ملف الطلب",
            "مراجعة شروط القرابة",
            "تقديم الطلب إلكترونياً",
            "متابعة صدور التأشيرة",
            "استشارات نظامية مجانية"
        ],
        category: "visa"
    },
    {
        title: "خدمات الأيدي العاملة",
        tagline: "توفير واستقدام الكوادر المهنية المتخصصة",
        description: "تخليص معاملات الأيدي العاملة لمختلف المهن بموجب ترخيص رقم 19.",
        detailedDescription: "نعمل بموجب الترخيص الرسمي رقم (19) لنقدم لأصحاب العمل حلولاً موثوقة في استقطاب الكفاءات المهنية وتسهيل إجراءات استقدامهم، مع ضمان مطابقة كافة الإجراءات للقوانين واللوائح التنظيمية المعمول بها.",
        icon: "FiBriefcase",
        features: [
            "استقدام المهن الفنية",
            "استقدام المهن الإدارية",
            "تسهيل إجراءات الإقامة",
            "فحص مهني معتمد",
            "حلول شاملة للشركات"
        ],
        category: "manpower"
    },
    {
        title: "تأشيرات الإقامة العائلية",
        tagline: "استقدام الزوجة والأبناء للإقامة الدائمة",
        description: "نساعدك في إجراءات استقدام عائلتك للإقامة الدائمة في المملكة العربية السعودية.",
        detailedDescription: "نوفر الدعم الكامل في تقديم طلبات الإقامة للزوجة والأبناء، ومتابعة كافة الخطوات النظامية لربطها بإقامة رب الأسرة، لضمان استقرار عائلتك بجانبك بيسر وسهولة وتجاوز أي عقبات إدارية.",
        icon: "FiUserCheck",
        features: [
            "تقديم طلبات الاستقدام",
            "ربط الملفات العائلية",
            "متابعة الفحص الطبي",
            "إصدار الإقامات الدائمة",
            "تحديث بيانات المرافقين"
        ],
        category: "residency"
    },

    /** --- PREVIOUS SERVICES MAINTAINED --- **/
    {
        title: "حجوزات الطيران",
        tagline: "حجز وإصدار التذاكر الداخلية والدولية",
        description: "تشمل هذه الخدمة حجز وإصدار التذاكر الداخلية والدولية والتأكيد على المقاعد لجميع شركات الطيران",
        detailedDescription: "تشمل هذه الخدمة حجز وإصدار التذاكر الداخلية والدولية والتأكيد على المقاعد لجميع شركات الطيران وتعديل التذاكر عند الحاجة كما اننا نحرص على تقديم أفضل جودة بأقل سعر ممكن ولدينا أنظمة خصومات خاصة للمجموعات واستئجار الطائرات الخاصة.",
        icon: "TbPlane",
        features: [
            "حجز وإصدار التذاكر الداخلية والدولية",
            "التأكيد على المقاعد لجميع شركات الطيران",
            "تعديل التذاكر عند الحاجة",
            "أفضل جودة بأقل سعر ممكن",
            "أنظمة خصومات خاصة للمجموعات",
            "استئجار الطائرات الخاصة"
        ],
        category: "flights"
    },
    {
        title: "حجوزات الفنادق",
        tagline: "فنادق ومنتجعات وشقق فندقية وفلل خاصة",
        description: "تتوفر لدينا حجوزات الفنادق وحجوزات المنتجعات وحجوزات الشقق الفندقية وحجوزات الفلل الخاصة",
        detailedDescription: "تتوفر لدينا حجوزات الفنادق وحجوزات المنتجعات وحجوزات الشقق الفندقية وحجوزات الفلل الخاصة وتنفيذ ترقية مجانية إلى جناح لكبار الضيوف وأيضا تتوفر لدينا خدمة الغرف لكبار الضيوف وتتوفر خدمة الغسيل لكبار الضيوف وتتوفر ايضاً خدمة السبا للكبار الضيوف.",
        icon: "TbBuilding",
        features: [
            "حجوزات الفنادق والمنتجعات",
            "حجوزات الشقق الفندقية",
            "حجوزات الفلل الخاصة",
            "ترقية مجانية إلى جناح لكبار الضيوف",
            "خدمة الغرف والغسيل والسبا لكبار الضيوف"
        ],
        category: "hotels"
    },
    {
        title: "حجوزات السيارات",
        tagline: "تأجير السيارات والحافلات والاستقبال من المطار",
        description: "تشمل هذه الخدمة تأجير السيارات بكافة أنواعها والاستقبال والتوديع من المطار",
        detailedDescription: "تشمل هذه الخدمة تأجير السيارات بكافة أنواعها والاستقبال والتوديع من المطار وتأجير السيارة بسائق خاص وتأجير الحافلات وتشمل أيضا تذاكر القطار الدولية كما أنه يتوفر سعر خاص للمجموعات.",
        icon: "TbBus",
        features: [
            "تأجير السيارات بكافة أنواعها",
            "الاستقبال والتوديع من المطار",
            "تأجير السيارة بسائق خاص",
            "تأجير الحافلات",
            "تذاكر القطار الدولية",
            "سعر خاص للمجموعات"
        ],
        category: "transport"
    },
    {
        title: "إصدار التأشيرات والفيز والرخص الدولية",
        tagline: "خدمات استخراج التأشيرات والرخص الدولية",
        description: "تشمل هذه الخدمة تعبئة نماذج الإصدار وإصدار التأشيرات السياحية والتعليمية والعمل",
        detailedDescription: "تشمل هذه الخدمة تعبئة نماذج الإصدار وإصدار التأشيرات السياحية والتعليمية و العمل وزيارة التجارية لأي دولة خارجية واستقبال مقدم الطلب أمام السفارة وحجز موعد البصمة واستلام الجواز بعد الإصدار وتوصيل الجواز.",
        icon: "FiGlobe",
        features: [
            "تعبئة نماذج الإصدار",
            "إصدار التأشيرات السياحية والتعليمية والعمل",
            "تأشيرات زيارة تجارية لأي دولة",
            "استقبال مقدم الطلب أمام السفارة",
            "حجز موعد البصمة",
            "استلام الجواز بعد الإصدار وتوصيله"
        ],
        category: "visa"
    },
    {
        title: "الترجمات المعتمدة",
        tagline: "ترجمة معتمدة لجميع المستندات الرسمية",
        description: "تشمل ترجمة من العربية الي الإنجليزية ومن الإنجليزية الي الصينة",
        detailedDescription: "تشمل ترجمة من العربية الي الإنجليزية ومن الإنجليزية الي الصينة ترجمات عقود الزواج -سجلات العائله -الوثائق والمستندات بشتي أنواعها",
        icon: "TbLanguage",
        features: [
            "ترجمة من العربية إلى الإنجليزية",
            "ترجمة من الإنجليزية إلى الصينية",
            "ترجمة عقود الزواج",
            "ترجمة سجلات العائلة",
            "ترجمة الوثائق والمستندات بشتى أنواعها"
        ],
        category: "translation"
    },
    {
        title: "الحج والعمرة",
        tagline: "برامج متكاملة للحج والعمرة مع أفضل الخدمات",
        description: "تشمل هذه الخدمة النقل الأرضي والسكن والإعاشة في مكة المكرمة والمدينة المنورة",
        detailedDescription: "تشمل هذه الخدمة النقل الأرضي والسكن والإعاشة في مكة المكرمة والمدينة المنورة كما تشمل السكن والإعاشة في مشعل عرفات ومزدلفة ومنى وتشمل أيضا حجوزات الطيران وتشغيل مركز إعلامي وتقنية المعلومات والخدمات الطبية والمترجمين.",
        icon: "TbBuildingMosque",
        features: [
            "النقل الأرضي والسكن والإعاشة في مكة والمدينة",
            "السكن والإعاشة في مشعل عرفات ومزدلفة ومنى",
            "حجوزات الطيران",
            "تشغيل مركز إعلامي وتقنية المعلومات",
            "الخدمات الطبية والمترجمين"
        ],
        category: "hajj"
    },
    {
        title: "خدمات الدراسة بالخارج",
        tagline: "تنسيق دراسة البكالوريوس والدراسات العليا ودراسة اللغات",
        description: "تشمل هذه الخدمة تنسيق دراسة البكالوريوس والدراسات العليا ودراسة اللغات المختلفة",
        detailedDescription: "تشمل هذه الخدمة تنسيق دراسة البكالوريوس والدراسات العليا ودراسة اللغات المختلفة حول العالم سواء اللغة الإنجليزية أو الصينية أو الفرنسية وغيرها من اللغات العالمية.",
        icon: "FiFileText",
        features: [
            "تنسيق دراسة البكالوريوس",
            "تنسيق الدراسات العليا",
            "دراسة اللغة الإنجليزية",
            "دراسة اللغة الصينية",
            "دراسة اللغة الفرنسية",
            "دراسة اللغات العالمية الأخرى"
        ],
        category: "education"
    },
    {
        title: "الرحلات العلاجية",
        tagline: "خدمات الرحلات العلاجية للرعاية الطبية عالية الجودة",
        description: "نحن نقدم خدمات الرحلات العلاجية للعملاء الذين يسعون للحصول على الرعاية الطبية",
        detailedDescription: "نحن نقدم خدمات الرحلات العلاجية للعملاء الذين يسعون للحصول على الرعاية الطبية عالية الجودة في وجهات سياحية.",
        icon: "FiMap",
        features: [
            "تنسيق الرحلات العلاجية",
            "الرعاية الطبية عالية الجودة",
            "وجهات سياحية علاجية",
            "تنسيق كامل للرحلة العلاجية"
        ],
        category: "medical"
    },
    {
        title: "المعارض و المؤتمرات",
        tagline: "فريق خاص لتنظيم المعارض والمؤتمرات",
        description: "تشمل هذه الخدمة تقديم فريق خاص لتنظيم المعارض والمؤتمرات",
        detailedDescription: "تشمل هذه الخدمة تقديم فريق خاص لتنظيم المعارض والمؤتمرات ولحجز القاعات واستقبال منسوبي المعرض أو المؤتمر واستقبال الضيوف من المطار وتوزيع الدعوات ومرافقة كبار الشخصيات وتنسيق الطاولات وأيضا تتوفر لدينا خدمة تنظيم الوجبات الساخنة والخفيفة وطاقم للمرافقة خارج الجمهورية وترتيب السكن والنقل والدعم اللوجيستي وتسهيل كافة إجراءات السفر وتقديم الدعم والتوثيق الإعلامي.",
        icon: "FiAward",
        features: [
            "فريق خاص لتنظيم المعارض والمؤتمرات",
            "حجز القاعات",
            "استقبال منسوبي المعرض أو المؤتمر",
            "استقبال الضيوف من المطار",
            "توزيع الدعوات ومرافقة كبار الشخصيات",
            "تنظيم الوجبات الساخنة والخفيفة",
            "طاقم للمرافقة خارج الجمهورية",
            "ترتيب السكن والنقل والدعم اللوجيستي",
            "الدعم والتوثيق الإعلامي"
        ],
        category: "events"
    },
    {
        title: "برامج سياحية متنوعة",
        tagline: "تنسيق برامج سياحية داخلية ودولية",
        description: "لدينا تنسيق برامج سياحية داخلية ودولية مع الجولات السياحية",
        detailedDescription: "لدينا تنسيق برامج سياحية داخلية ودولية مع الجولات السياحية والاستقبال والتوديع في جميع مطارات العالم و شرائح الجوال الدولية وأيضا تتوفر لدينا خدمة إصدار الرخصة الدولية والبرامج العلاجية.",
        icon: "TbMap",
        features: [
            "برامج سياحية داخلية ودولية",
            "الجولات السياحية",
            "الاستقبال والتوديع في جميع مطارات العالم",
            "شرائح الجوال الدولية",
            "إصدار الرخصة الدولية",
            "البرامج العلاجية"
        ],
        category: "tours"
    },
    {
        title: "السياحة الداخلية",
        tagline: "حجوزات الفنادق والمواصلات ورحلات المزارات السياحية",
        description: "تشمل هذه الخدمة حجوزات الفنادق والمواصلات ورحلات المزارات السياحية",
        detailedDescription: "تشمل هذه الخدمة حجوزات الفنادق والمواصلات ورحلات المزارات السياحية ورحلات المغامرات وخدمة المرشد السياحي.",
        icon: "TbMap",
        features: [
            "حجوزات الفنادق",
            "المواصلات",
            "رحلات المزارات السياحية",
            "رحلات المغامرات",
            "خدمة المرشد السياحي"
        ],
        category: "domestic"
    },
    {
        title: "خدمات التاشيرات",
        tagline: "فيز عمل وتأشيرات حج وعمرة وسياحية",
        description: "فيز عمل السعوديه وتأشيرات حج وعمره وسياحيه",
        detailedDescription: "فيز عمل السعوديه -تاشيرات حج وعمره وسياحيه -دعوات تجارية وحكوميه الصين – موافقات امنيه كلا من القاهره والأردن – فيز علاجية الي الهند …..",
        icon: "FiGlobe",
        features: [
            "فيز عمل السعودية",
            "تأشيرات حج وعمرة وسياحية",
            "دعوات تجارية وحكومية للصين",
            "موافقات أمنية من القاهرة والأردن",
            "فيز علاجية إلى الهند"
        ],
        category: "visa"
    },
    {
        title: "رحلات بحرية",
        tagline: "رحلات كروز فاخرة لأجمل الوجهات البحرية",
        description: "رحلات كروز فاخرة لأجمل الوجهات البحرية",
        detailedDescription: "استمتع برحلات كروز فاخرة إلى أجمل الوجهات البحرية في العالم. نقدم لك مجموعة متنوعة من الرحلات البحرية على سفن فاخرة مجهزة بجميع وسائل الراحة والترفيه. من رحلات قصيرة إلى رحلات طويلة، اكتشف وجهات متعددة في رحلة واحدة مع ترفيه متكامل وخدمات راقية.",
        icon: "TbShip",
        features: [
            "سفن فاخرة مجهزة بأحدث المرافق",
            "وجهات متعددة في رحلة واحدة",
            "ترفيه متكامل وخدمات راقية",
            "باقات شاملة تشمل الطعام والأنشطة",
            "رحلات مناسبة لجميع الأعمار"
        ],
        category: "cruises"
    }
];
```

## File: constants/routes.js

- Extension: .js
- Language: javascript
- Size: 509 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
// Application routes
export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    SERVICES: '/services',
    DESTINATIONS: '/destinations',
    CONTACT: '/contact'
};

// Navigation links
export const NAV_LINKS = [
    { name: 'الرئيسية', path: ROUTES.HOME },
    { name: 'من نحن', path: ROUTES.ABOUT },
    { name: 'خدماتنا', path: ROUTES.SERVICES },
    { name: 'الوجهات', path: ROUTES.DESTINATIONS },
    { name: 'اتصل بنا', path: ROUTES.CONTACT }
];

```

## File: constants/company.js

- Extension: .js
- Language: javascript
- Size: 1210 bytes
- Created: 2026-01-28 04:19:52
- Modified: 2026-01-28 04:19:52

### Code

```javascript
// Contact information
export const CONTACT_INFO = {
   // Add \u202D at the start and \u202C at the end
    phone: "\u202D+967 779 717 177\u202C",
    email: "alnajmpluo@gmail.com",
    whatsapp: "+967 779 717 177",
    address: " صنعاء شارع القدس مقابل السفارة السعودية",
    workingHours: "السبت - الخميس: 9:00 ص - 6:00 م"
};

// Social media links
// TODO: Update these with your actual social media profile URLs
export const SOCIAL_LINKS = {
    facebook: "https://www.facebook.com/profile.php?id=61571202487332#", // Replace with your Facebook page URL
    twitter: "https://twitter.com/your-handle", // Replace with your Twitter/X handle URL
    instagram: "https://www.instagram.com/your-handle", // Replace with your Instagram profile URL
    whatsapp: "https://www.whatsapp.com/your-number" // Replace with your WhatsApp number
};

// Company info
export const COMPANY_INFO = {
    name: "المفلحي للسفريات والسياحة",
    nameEn: "Al Muflehi Travel & Tourism",
    slogan: "سافر إلى حيث تأخذك أحلامك",
    foundedYear: 2010,
    yearsOfExperience: new Date().getFullYear() - 2010
};

```

## File: constants/index.js

- Extension: .js
- Language: javascript
- Size: 83 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
// Re-export all constants
export * from './routes';
export * from './company';

```

## File: components/layout/index.js

- Extension: .js
- Language: javascript
- Size: 130 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
// Layout components barrel export
export { default as Navbar } from './Navbar';
export { default as Footer } from './Footer';

```

## File: components/common/Analytics.jsx

- Extension: .jsx
- Language: javascript
- Size: 3332 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Analytics component for tracking page views
 * Supports Google Analytics, Facebook Pixel, and custom analytics
 * 
 * Usage:
 * - Add your Google Analytics ID to environment variables: VITE_GA_ID
 * - Add your Facebook Pixel ID to environment variables: VITE_FB_PIXEL_ID
 * - The component will automatically track page views on route changes
 */

const Analytics = () => {
    const location = useLocation();

    useEffect(() => {
        // Track page view on route change
        const path = location.pathname + location.search;
        
        // Google Analytics 4 (gtag)
        if (window.gtag && import.meta.env.VITE_GA_ID) {
            window.gtag('config', import.meta.env.VITE_GA_ID, {
                page_path: path,
            });
        }

        // Google Analytics Universal (ga)
        if (window.ga) {
            window.ga('send', 'pageview', path);
        }

        // Facebook Pixel
        if (window.fbq && import.meta.env.VITE_FB_PIXEL_ID) {
            window.fbq('track', 'PageView');
        }

        // Custom analytics event
        if (window.analytics && typeof window.analytics.track === 'function') {
            window.analytics.track('Page Viewed', {
                path: path,
                title: document.title,
            });
        }

        // Console log in development
        if (import.meta.env.DEV) {
            console.log('Page view tracked:', path);
        }
    }, [location]);

    // Initialize Google Analytics script
    useEffect(() => {
        const gaId = import.meta.env.VITE_GA_ID;
        
        if (gaId && !window.gtag) {
            // Google Analytics 4
            const script1 = document.createElement('script');
            script1.async = true;
            script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
            document.head.appendChild(script1);

            window.dataLayer = window.dataLayer || [];
            function gtag(...args) {
                window.dataLayer.push(args);
            }
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', gaId, {
                page_path: window.location.pathname,
            });
        }
    }, []);

    // Initialize Facebook Pixel
    useEffect(() => {
        const fbPixelId = import.meta.env.VITE_FB_PIXEL_ID;
        
        if (fbPixelId && !window.fbq) {
            !function(f,b,e,v,n,t,s) {
                if(f.fbq)return;
                n=f.fbq=function(){
                    n.callMethod ? n.callMethod.apply(n,arguments):n.queue.push(arguments)
                };
                if(!f._fbq)f._fbq=n;
                n.push=n;
                n.loaded=!0;
                n.version='2.0';
                n.queue=[];
                t=b.createElement(e);
                t.async=!0;
                t.src=v;
                s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
            }(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
            
            window.fbq('init', fbPixelId);
            window.fbq('track', 'PageView');
        }
    }, []);

    return null; // This component doesn't render anything
};

export default Analytics;


```

## File: components/common/ErrorBoundary.jsx

- Extension: .jsx
- Language: javascript
- Size: 7138 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
import React from 'react';
import { FiAlertCircle, FiRefreshCw, FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false, 
            error: null,
            errorInfo: null 
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log error to console in development only
        if (import.meta.env.DEV) {
            console.error('Error caught by boundary:', error, errorInfo);
        }
        
        // You can also log the error to an error reporting service here
        // Example: logErrorToService(error, errorInfo);
        
        this.setState({
            error,
            errorInfo
        });
    }

    handleReset = () => {
        this.setState({ 
            hasError: false, 
            error: null, 
            errorInfo: null 
        });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <div className="error-boundary-content">
                        <div className="error-boundary-icon">
                            <FiAlertCircle />
                        </div>
                        <h1 className="error-boundary-title">عذراً، حدث خطأ</h1>
                        <p className="error-boundary-message">
                            نعتذر عن الإزعاج. يبدو أن شيئاً ما لم يعمل بشكل صحيح.
                        </p>
                        <div className="error-boundary-actions">
                            <button 
                                onClick={this.handleReset}
                                className="btn btn-primary"
                            >
                                <FiRefreshCw />
                                <span>إعادة المحاولة</span>
                            </button>
                            <Link 
                                to="/" 
                                className="btn btn-outline"
                            >
                                <FiHome />
                                <span>العودة للصفحة الرئيسية</span>
                            </Link>
                        </div>
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details className="error-boundary-details">
                                <summary>تفاصيل الخطأ (للمطورين)</summary>
                                <pre className="error-boundary-stack">
                                    {this.state.error.toString()}
                                    {this.state.errorInfo?.componentStack}
                                </pre>
                            </details>
                        )}
                    </div>
                    <style>{`
                        .error-boundary {
                            min-height: 100vh;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 2rem;
                            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                        }
                        .error-boundary-content {
                            max-width: 600px;
                            width: 100%;
                            text-align: center;
                            background: white;
                            padding: 3rem;
                            border-radius: 1rem;
                            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
                        }
                        .error-boundary-icon {
                            font-size: 4rem;
                            color: #ef4444;
                            margin-bottom: 1.5rem;
                        }
                        .error-boundary-title {
                            font-size: 2rem;
                            font-weight: 700;
                            color: #1f2937;
                            margin: 0 0 1rem 0;
                        }
                        .error-boundary-message {
                            font-size: 1.1rem;
                            color: #6b7280;
                            margin-bottom: 2rem;
                            line-height: 1.6;
                        }
                        .error-boundary-actions {
                            display: flex;
                            gap: 1rem;
                            justify-content: center;
                            flex-wrap: wrap;
                        }
                        .error-boundary-actions .btn {
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                            padding: 0.75rem 1.5rem;
                        }
                        .error-boundary-details {
                            margin-top: 2rem;
                            text-align: right;
                            background: #f9fafb;
                            padding: 1rem;
                            border-radius: 0.5rem;
                            border: 1px solid #e5e7eb;
                        }
                        .error-boundary-details summary {
                            cursor: pointer;
                            font-weight: 600;
                            color: #374151;
                            margin-bottom: 0.5rem;
                        }
                        .error-boundary-stack {
                            text-align: left;
                            font-size: 0.875rem;
                            color: #dc2626;
                            background: #fee2e2;
                            padding: 1rem;
                            border-radius: 0.25rem;
                            overflow-x: auto;
                            white-space: pre-wrap;
                            word-break: break-word;
                        }
                        @media (max-width: 640px) {
                            .error-boundary-content {
                                padding: 2rem 1.5rem;
                            }
                            .error-boundary-title {
                                font-size: 1.5rem;
                            }
                            .error-boundary-actions {
                                flex-direction: column;
                            }
                            .error-boundary-actions .btn {
                                width: 100%;
                            }
                        }
                    `}</style>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;


```

## File: components/common/index.js

- Extension: .js
- Language: javascript
- Size: 79 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
// Common components barrel export
export { default as Card } from './Card';

```

## File: components/common/LazyImage.jsx

- Extension: .jsx
- Language: javascript
- Size: 4407 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
import React, { useState, useRef, useEffect } from 'react';

/**
 * Enhanced LazyImage component with Intersection Observer for better performance
 * Supports placeholder, error handling, smooth loading transitions, and modern image formats
 */
const LazyImage = ({ src, alt, className = '', webpSrc, avifSrc, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [hasError, setHasError] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { 
                threshold: 0.1,
                rootMargin: '50px' // Start loading 50px before image enters viewport
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
            observer.disconnect();
        };
    }, []);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
        setIsLoaded(true); // Show placeholder even on error
    };

    return (
        <div 
            ref={imgRef} 
            className={`lazy-image-wrapper ${className}`}
            style={{ position: 'relative', overflow: 'hidden' }}
        >
            {!isLoaded && (
                <div 
                    className="lazy-image-placeholder"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                        backgroundSize: '200% 100%',
                        animation: 'shimmer 1.5s infinite',
                    }}
                    aria-hidden="true"
                />
            )}
            {hasError ? (
                <div 
                    className="lazy-image-error"
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#f0f0f0',
                        color: '#999',
                        fontSize: '14px'
                    }}
                >
                    {alt || 'Image'}
                </div>
            ) : (
                <picture>
                    {/* AVIF format (best compression) */}
                    {avifSrc && isInView && (
                        <source srcSet={avifSrc} type="image/avif" />
                    )}
                    {/* WebP format (good compression) */}
                    {webpSrc && isInView && (
                        <source srcSet={webpSrc} type="image/webp" />
                    )}
                    {/* Fallback to original image */}
                    <img
                        src={isInView ? src : undefined}
                        alt={alt}
                        loading="lazy"
                        onLoad={handleLoad}
                        onError={handleError}
                        className={`lazy-image ${isLoaded ? 'loaded' : ''} ${className}`}
                        style={{
                            opacity: isLoaded ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                        {...props}
                    />
                </picture>
            )}
            <style>{`
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                .lazy-image.loaded {
                    opacity: 1;
                }
            `}</style>
        </div>
    );
};

export default LazyImage;

```

## File: components/admin/Admin.css

- Extension: .css
- Language: unknown
- Size: 132 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```unknown
/* Shared admin component styles */
/* Most styles are in Admin.css, but this file can be used for component-specific overrides */


```

## File: components/admin/AddEntryForm.jsx

- Extension: .jsx
- Language: javascript
- Size: 7326 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
import { useState } from 'react';
import './Admin.css';

const AddEntryForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    passport_number: '',
    first_name: '',
    last_name: '',
    status: 'pending',
    admin_notes: '',
    visa_type: '',
    passport_received_date: '',
    embassy_submit_date: '',
    expected_exit_date: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.passport_number.trim()) {
      setError('رقم الجواز مطلوب');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/admin/create-entry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          passport_number: formData.passport_number.trim().toUpperCase(),
          first_name: formData.first_name.trim(),
          last_name: formData.last_name.trim(),
          status: formData.status,
          admin_notes: formData.admin_notes.trim() || null,
          visa_type: formData.visa_type || null,
          passport_received_date: formData.passport_received_date || null,
          embassy_submit_date: formData.embassy_submit_date || null,
          expected_exit_date: formData.expected_exit_date || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'فشل في إضافة المدخل');
        return;
      }

      // Reset form
      setFormData({
        passport_number: '',
        first_name: '',
        last_name: '',
        status: 'pending',
        admin_notes: '',
        visa_type: '',
        passport_received_date: '',
        embassy_submit_date: '',
        expected_exit_date: '',
      });

      alert('تم إضافة المدخل بنجاح!');
      onSuccess();
    } catch (err) {
      console.error('خطأ في إضافة المدخل:', err);
      setError('حدث خطأ. يرجى المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-entry-form">
      <h3>إضافة مدخل جديد لجواز السفر</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="passport-number">رقم الجواز *</label>
            <input
              type="text"
              id="passport-number"
              value={formData.passport_number}
              onChange={(e) =>
                setFormData({ ...formData, passport_number: e.target.value })
              }
              placeholder="أدخل رقم الجواز"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="first-name">الاسم الأول</label>
            <input
              type="text"
              id="first-name"
              value={formData.first_name}
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
              placeholder="الاسم الأول"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="last-name">اسم العائلة</label>
            <input
              type="text"
              id="last-name"
              value={formData.last_name}
              onChange={(e) =>
                setFormData({ ...formData, last_name: e.target.value })
              }
              placeholder="اسم العائلة"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">الحالة *</label>
            <select
              id="status"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              required
              disabled={loading}
            >
              <option value="pending"> تم الاستلام </option>
              <option value="in_embassy">في السفارة</option>
              <option value="ready">جاهز</option>
              <option value="in_aden">في عدن</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="visa-type">نوع التأشيرة</label>
            <select
              id="visa-type"
              value={formData.visa_type}
              onChange={(e) =>
                setFormData({ ...formData, visa_type: e.target.value })
              }
              disabled={loading}
            >
              <option value="">اختر النوع</option>
              <option value="زيارة">زيارة</option>
              <option value="عمل">عمل</option>
              <option value="عمرة">عمرة</option>
              <option value="أخرى">أخرى</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="passport-received-date">تاريخ استلام الجواز</label>
            <input
              type="date"
              id="passport-received-date"
              value={formData.passport_received_date}
              onChange={(e) =>
                setFormData({ ...formData, passport_received_date: e.target.value })
              }
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="embassy-submit-date">تاريخ التقديم للسفارة</label>
            <input
              type="date"
              id="embassy-submit-date"
              value={formData.embassy_submit_date}
              onChange={(e) =>
                setFormData({ ...formData, embassy_submit_date: e.target.value })
              }
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="expected-exit-date">تاريخ الخروج المتوقع</label>
            <input
              type="date"
              id="expected-exit-date"
              value={formData.expected_exit_date}
              onChange={(e) =>
                setFormData({ ...formData, expected_exit_date: e.target.value })
              }
              disabled={loading}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="admin-notes">ملاحظات المدير (اختياري)</label>
          <textarea
            id="admin-notes"
            value={formData.admin_notes}
            onChange={(e) => setFormData({ ...formData, admin_notes: e.target.value })}
            placeholder="أضف أي ملاحظات حول هذا المدخل..."
            rows="3"
            disabled={loading}
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? 'جارٍ الإضافة...' : 'إضافة المدخل'}
        </button>
      </form>
    </div>
  );
};

export default AddEntryForm;
```

## File: components/admin/EditEntryModal.jsx

- Extension: .jsx
- Language: javascript
- Size: 8296 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
import { useState, useEffect } from 'react';
import './Admin.css';

const EditEntryModal = ({ entry, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    first_name: entry.first_name || '',
    last_name: entry.last_name || '',
    status: entry.status,
    admin_notes: entry.admin_notes || '',
    visa_type: entry.visa_type || '',
    passport_received_date: entry.passport_received_date || '',
    embassy_submit_date: entry.embassy_submit_date || '',
    expected_exit_date: entry.expected_exit_date || '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    setLoading(true);

    try {
      const response = await fetch('/api/admin/update-status', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: entry.id,
          first_name: formData.first_name.trim(),
          last_name: formData.last_name.trim(),
          status: formData.status,
          admin_notes: formData.admin_notes.trim() || null,
          visa_type: formData.visa_type || null,
          passport_received_date: formData.passport_received_date || null,
          embassy_submit_date: formData.embassy_submit_date || null,
          expected_exit_date: formData.expected_exit_date || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to update entry');
        return;
      }

      alert('تم تحديث البيانات بنجاح!');
      onSuccess();
    } catch (err) {
      console.error('Error updating entry:', err);
      setError('حدث خطأ. يرجى المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h3>تعديل البيانات</h3>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-body">
          <div className="entry-info">
            <p>
              <strong>رقم الجواز:</strong> {entry.passport_number}
            </p>
            <p>
              <strong>تاريخ الإنشاء:</strong> {new Date(entry.created_at).toLocaleString('ar-SA')}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="edit-first-name">الاسم الأول</label>
                <input
                  type="text"
                  id="edit-first-name"
                  value={formData.first_name}
                  onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                  placeholder="الاسم الأول"
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="edit-last-name">اسم العائلة</label>
                <input
                  type="text"
                  id="edit-last-name"
                  value={formData.last_name}
                  onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                  placeholder="اسم العائلة"
                  disabled={loading}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="edit-visa-type">نوع التأشيرة</label>
                <select
                  id="edit-visa-type"
                  value={formData.visa_type}
                  onChange={(e) =>
                    setFormData({ ...formData, visa_type: e.target.value })
                  }
                  disabled={loading}
                >
                  <option value="">اختر النوع</option>
                  <option value="زيارة">زيارة</option>
                  <option value="عمل">عمل</option>
                  <option value="عمرة">عمرة</option>
                  <option value="أخرى">أخرى</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="edit-passport-received">تاريخ استلام الجواز</label>
                <input
                  type="date"
                  id="edit-passport-received"
                  value={formData.passport_received_date}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      passport_received_date: e.target.value,
                    })
                  }
                  disabled={loading}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="edit-embassy-submit">تاريخ التقديم للسفارة</label>
                <input
                  type="date"
                  id="edit-embassy-submit"
                  value={formData.embassy_submit_date}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      embassy_submit_date: e.target.value,
                    })
                  }
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="edit-expected-exit">تاريخ الخروج المتوقع</label>
                <input
                  type="date"
                  id="edit-expected-exit"
                  value={formData.expected_exit_date}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      expected_exit_date: e.target.value,
                    })
                  }
                  disabled={loading}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="edit-status">الحالة *</label>
              <select
                id="edit-status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                required
                disabled={loading}
              >
                <option value="pending">قيد الانتظار</option>
                <option value="in_embassy">في السفارة</option>
                <option value="ready">جاهز</option>
                <option value="in_aden">في عدن</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="edit-notes">ملاحظات المدير (اختياري)</label>
              <textarea
                id="edit-notes"
                value={formData.admin_notes}
                onChange={(e) => setFormData({ ...formData, admin_notes: e.target.value })}
                placeholder="أضف أي ملاحظات حول هذا المدخل..."
                rows="4"
                disabled={loading}
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <div className="modal-actions">
              <button type="button" className="btn-secondary" onClick={onClose} disabled={loading}>
                إلغاء
              </button>
              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? 'جاري التحديث...' : 'تحديث البيانات'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEntryModal;
```

## File: components/admin/PassportTable.jsx

- Extension: .jsx
- Language: javascript
- Size: 4550 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
import { useState } from 'react';
import EditEntryModal from './EditEntryModal';
import './Admin.css';

const PassportTable = ({ entries, onRefresh, onDelete }) => {
  const [editingEntry, setEditingEntry] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const handleEdit = (entry) => {
    setEditingEntry(entry);
  };

  const handleDelete = async (id, passportNumber) => {
    if (!window.confirm(`هل أنت متأكد من حذف رقم الجواز ${passportNumber}؟`)) {
      return;
    }

    setDeletingId(id);

    try {
      const response = await fetch(`/api/admin/delete-entry?id=${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || 'فشل في حذف المدخل');
        return;
      }

      alert('تم حذف المدخل بنجاح');
      onRefresh();
    } catch (error) {
      console.error('Error deleting entry:', error);
      alert('حدث خطأ أثناء حذف المدخل');
    } finally {
      setDeletingId(null);
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      ready: { label: 'جاهز', className: 'badge-success' },
      in_embassy: { label: 'في السفارة', className: 'badge-warning' },
      pending: { label: 'قيد الانتظار', className: 'badge-info' },
      in_aden: { label: 'في عدن', className: 'badge-info' },
    };

    const badge = badges[status] || badges.pending;
    return <span className={`status-badge ${badge.className}`}>{badge.label}</span>;
  };

  if (entries.length === 0) {
    return (
      <div className="empty-state">
        <p>لم يتم العثور على إدخالات جواز السفر. أضف أول إدخال لك باستخدام النموذج أعلاه</p>
      </div>
    );
  }

  return (
    <>
      <div className="table-container">
        <table className="passport-table">
          <thead>
            <tr>
              <th>رقم الجواز</th>
              <th>الاسم الكامل</th>
              <th>نوع التأشيرة</th>
              <th>الحالة</th>
              <th>تاريخ الإنشاء</th>
              <th>آخر تحديث</th>
              <th>ملاحظات</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.id}>
                <td>
                  <strong>{entry.passport_number}</strong>
                </td>
                <td>
                  {[entry.first_name, entry.last_name].filter(Boolean).join(' ') || '—'}
                </td>
                <td>{entry.visa_type || '—'}</td>
                <td>{getStatusBadge(entry.status)}</td>
                <td>{new Date(entry.created_at).toLocaleDateString()}</td>
                <td>{new Date(entry.updated_at).toLocaleDateString()}</td>
                <td className="notes-cell">
                  {entry.admin_notes ? (
                    <span title={entry.admin_notes}>
                      {entry.admin_notes.length > 30
                        ? `${entry.admin_notes.substring(0, 30)}...`
                        : entry.admin_notes}
                    </span>
                  ) : (
                    <span className="text-muted">—</span>
                  )}
                </td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="btn-edit"
                      onClick={() => handleEdit(entry)}
                      title="تعديل"
                    >
                      ✏️ تعديل
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(entry.id, entry.passport_number)}
                      disabled={deletingId === entry.id}
                      title="حذف"
                    >
                      {deletingId === entry.id ? '⏳' : '🗑️ حذف'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingEntry && (
        <EditEntryModal
          entry={editingEntry}
          onClose={() => setEditingEntry(null)}
          onSuccess={() => {
            setEditingEntry(null);
            onRefresh();
          }}
        />
      )}
    </>
  );
};

export default PassportTable;
```

## File: components/sections/index.js

- Extension: .js
- Language: javascript
- Size: 341 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
export { default as Hero } from './Hero';
export { default as HomeServices } from './HomeServices';
export { default as DestinationsCarousel } from './DestinationsCarousel';
export { default as AboutUs } from './AboutUs';
export { default as Testimonials } from './Testimonials';
export { default as PassportCheck } from './PassportCheck';


```

## File: components/widgets/index.js

- Extension: .js
- Language: javascript
- Size: 99 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
// Widget components barrel export
export { default as WhatsAppWidget } from './WhatsAppWidget';

```

## File: components/layout/Footer/Footer.css

- Extension: .css
- Language: unknown
- Size: 12900 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```unknown
.footer {
    background-color: var(--bg-secondary);
    padding-top: var(--spacing-2xl);
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    /* Enhanced visual separation */
    position: relative;
}

.footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(8, 145, 178, 0.2), transparent);
}

[data-theme="dark"] .footer {
    background-color: #0B1120;
    /* Darker than bg-secondary for footer */
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-xl);
    padding-bottom: var(--spacing-2xl);
    /* Better alignment and spacing */
    align-items: start;
}

.footer-col {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-sm);
    transition: opacity var(--transition-base);
    text-decoration: none;
    color: inherit;
    /* Add padding for breathing room around logo */
    padding: var(--spacing-xs) 0;
}

.footer-logo:hover {
    opacity: 0.85;
}

.footer-logo:focus-visible {
    outline: 2px solid var(--primary-cyan);
    outline-offset: 4px;
    border-radius: var(--radius-sm);
}

@media (min-width: 992px) {
    .footer-logo {
        gap: var(--spacing-lg);
        margin-bottom: var(--spacing-md);
        padding: var(--spacing-sm) 0;
    }
}

.footer-logo-img {
    height: 100px;
    width: auto;
    max-width: 320px;
    min-width: 200px;
    object-fit: contain;
    object-position: center center;
    transition: opacity var(--transition-base);
    flex-shrink: 0;
    /* Subtle shadow for transparent SVG - single, minimal */
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
    /* SVG-specific optimizations for perfect sharpness */
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    image-rendering: auto; /* Best for SVG - smooth scaling */
    /* Prevent blur on transform */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    /* Display full logo with proper spacing */
    display: block;
    /* SVG quality enhancements */
    shape-rendering: geometricPrecision;
    text-rendering: optimizeLegibility;
}

/* Company Name Text */
.footer-logo-text {
    display: none;
    font-family: var(--font-heading);
    font-size: var(--font-lg);
    font-weight: 700;
    color: var(--text-primary);
    transition: color var(--transition-base);
}

.footer-logo-img:hover {
    /* Subtle hover effect - professional and clean */
    opacity: 1;
    transform: translateY(-2px);
    filter: drop-shadow(0 6px 15px rgba(0, 0, 0, 0.2));
}

/* Desktop Logo Enhancement - Much More Visible */
@media (min-width: 992px) {
    .footer-logo-img {
        height: 140px;
        max-width: 400px;
        min-width: 280px;
        filter: drop-shadow(0 3px 15px rgba(0, 0, 0, 0.15));
    }
    
    .footer-logo-text {
        display: block;
        font-size: var(--font-xl);
    }
    
    .footer-logo:hover .footer-logo-img {
        opacity: 0.9;
        filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.18));
    }
    
    .footer-logo:hover .footer-logo-text {
        color: var(--primary-cyan);
    }
}

@media (min-width: 1200px) {
    .footer-logo-img {
        height: 160px;
        max-width: 450px;
        min-width: 320px;
        filter: drop-shadow(0 4px 18px rgba(0, 0, 0, 0.18));
    }
    
    .footer-logo-text {
        font-size: var(--font-2xl);
    }
    
    .footer-logo:hover .footer-logo-img {
        opacity: 0.9;
        filter: drop-shadow(0 4px 18px rgba(0, 0, 0, 0.2));
    }
}

.footer-desc {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: var(--font-sm);
}

.footer-title {
    font-size: var(--font-lg);
    color: var(--text-primary);
    margin-bottom: var(--spacing-md);
    font-weight: 700;
    /* Better visual hierarchy */
    position: relative;
    padding-bottom: var(--spacing-xs);
}

.footer-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40px;
    height: 2px;
    background: var(--gradient-ocean);
    border-radius: var(--radius-full);
}

.footer-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.footer-links a {
    color: var(--text-secondary);
    font-size: var(--font-sm);
    transition: all var(--transition-base);
    font-weight: 400;
    display: inline-block;
    padding: 4px 0;
    /* Better touch targets */
    min-height: 32px;
    display: flex;
    align-items: center;
}

.footer-links a:hover {
    color: var(--primary-cyan);
    padding-right: 8px;
    /* RTL slide */
    transform: translateX(-2px);
}

.footer-links a:focus-visible {
    outline: 2px solid var(--primary-cyan);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
}

.footer-contact {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.footer-contact li {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    color: var(--text-secondary);
    font-size: var(--font-sm);
    line-height: 1.6;
    transition: all var(--transition-base);
    padding: 4px 0;
    /* Better touch targets */
    min-height: 44px;
}

.footer-contact li:hover {
    transform: translateX(-2px);
    /* RTL direction */
}

.footer-contact .icon {
    font-size: 1.25rem;
    color: var(--primary-cyan);
    flex-shrink: 0;
    margin-top: 2px;
    transition: all var(--transition-base);
}

.footer-contact a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: all var(--transition-fast);
    word-break: break-word;
}

.footer-contact a:hover {
    color: var(--primary-cyan);
    padding-right: 4px;
}

.footer-contact a:focus-visible {
    outline: 2px solid var(--primary-cyan);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
}

.footer-contact li:hover .icon {
    color: var(--accent-amber);
    transform: scale(1.1);
}

.social-links {
    display: flex;
    gap: var(--spacing-md);
    margin-top: var(--spacing-md);
    flex-wrap: wrap;
}

.social-link {
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    color: var(--text-primary);
    transition: transform var(--transition-base), box-shadow var(--transition-base), color var(--transition-base), background-color var(--transition-base), opacity var(--transition-base);
    box-shadow: 
        0 2px 8px rgba(0, 0, 0, 0.08),
        0 0 0 1px rgba(0, 75, 135, 0.06);
    text-decoration: none;
    position: relative;
    overflow: hidden;
}

.social-link::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--social-color, var(--primary-blue));
    opacity: 0;
    transition: opacity var(--transition-base);
    border-radius: 50%;
}

.social-link svg {
    position: relative;
    z-index: 1;
    transition: color var(--transition-base), transform var(--transition-base), opacity var(--transition-base);
}

[data-theme="dark"] .social-link {
    background: rgba(15, 23, 42, 0.6);
    color: var(--text-primary);
    box-shadow: 0 2px 8px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05);
}

.social-link:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 
        0 6px 14px rgba(0, 0, 0, 0.12),
        0 0 0 1px rgba(0, 75, 135, 0.08);
}

.social-link:hover::before {
    opacity: 0.1;
}

.social-link:hover svg {
    color: var(--social-color, var(--primary-blue));
    transform: scale(1.04);
}

.social-link:active {
    transform: translateY(-1px) scale(1.02);
}

.footer-bottom {
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    padding: var(--spacing-lg) 0;
    text-align: center;
    color: var(--text-secondary);
    font-size: var(--font-sm);
    margin-top: var(--spacing-xl);
    /* Better separation */
}

[data-theme="dark"] .footer-bottom {
    border-top-color: rgba(255, 255, 255, 0.05);
}

/* ========================================
   MOBILE OPTIMIZATIONS
   ======================================== */

/* Tablet and below */
@media (max-width: 992px) {
    .footer {
        padding-top: var(--spacing-xl);
    }
    
    .footer-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-lg);
        padding-bottom: var(--spacing-xl);
    }
    
    .footer-col {
        gap: var(--spacing-sm);
    }
    
    .footer-logo-img {
        /* UPSCALE: Footer logo on tablet */
        height: 100px;
        max-width: 280px;
        min-width: 200px;
    }
}

/* Mobile devices */
@media (max-width: 768px) {
    .footer {
        padding-top: var(--spacing-lg);
    }
    
    .footer-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-xl);
        padding-bottom: var(--spacing-lg);
    }
    
    /* Center company info on mobile */
    .footer-col-main {
        text-align: center;
        align-items: center;
    }
    
    .footer-logo {
        justify-content: center;
        margin-bottom: var(--spacing-md);
        flex-direction: column;
        gap: var(--spacing-sm);
    }
    
    .footer-logo-img {
        /* UPSCALE: Footer logo on mobile */
        height: 100px; /* Same as navbar */
        max-width: 260px;
        min-width: 180px;
    }
    
    .footer-desc {
        text-align: center;
        max-width: 100%;
        font-size: var(--font-sm);
        line-height: 1.7;
        margin-bottom: var(--spacing-md);
    }
    
    /* Social links - larger and centered */
    .social-links {
        justify-content: center;
        gap: var(--spacing-md);
        margin-top: var(--spacing-md);
    }
    
    .social-link {
        width: 48px;
        height: 48px;
        font-size: 1.25rem;
        min-width: 48px;
        min-height: 48px;
    }
    
    /* Footer titles - better spacing */
    .footer-title {
        font-size: var(--font-base);
        margin-bottom: var(--spacing-sm);
        font-weight: 700;
    }
    
    /* Footer links - better touch targets */
    .footer-links {
        gap: 10px;
    }
    
    .footer-links a {
        font-size: var(--font-base);
        padding: 0.5rem 0;
        min-height: 44px;
        display: flex;
        align-items: center;
    }
    
    /* Contact info - better layout */
    .footer-contact {
        gap: 12px;
    }
    
    .footer-contact li {
        font-size: var(--font-base);
        padding: 0.5rem 0;
        min-height: 44px;
        align-items: flex-start;
        gap: var(--spacing-sm);
    }
    
    .footer-contact .icon {
        font-size: 1.1rem;
        margin-top: 4px;
    }
    
    .footer-contact a,
    .footer-contact span:not(.icon) {
        flex: 1;
        word-break: break-word;
        line-height: 1.5;
    }
    
    /* Footer bottom - better readability */
    .footer-bottom {
        padding: var(--spacing-md) var(--spacing-sm);
        font-size: var(--font-sm);
        line-height: 1.6;
    }
    
    .footer-bottom p {
        margin: 0;
        padding: 0 var(--spacing-sm);
    }
}

/* Small mobile devices */
@media (max-width: 480px) {
    .footer {
        padding-top: var(--spacing-md);
    }
    
    .footer-grid {
        gap: var(--spacing-lg);
        padding-bottom: var(--spacing-md);
    }
    
    .footer-logo-img {
        /* UPSCALE: Footer logo on small mobile */
        height: 90px;
        max-width: 240px;
        min-width: 160px;
    }
    
    .footer-desc {
        font-size: 0.9rem;
    }
    
    .social-link {
        width: 44px;
        height: 44px;
        font-size: 1.1rem;
        min-width: 44px;
        min-height: 44px;
    }
    
    .footer-title {
        font-size: 1rem;
    }
    
    .footer-links a,
    .footer-contact li {
        font-size: 0.9rem;
    }
    
    .footer-bottom {
        font-size: 0.85rem;
        padding: var(--spacing-sm);
    }
    
    .footer-contact li {
        flex-direction: row;
        align-items: center;
    }
}

/* X (formerly Twitter) brand adjustment */
.social-link.x {
    --social-color: #000000;
}

/* Touch device optimizations */
@media (hover: none) and (pointer: coarse) {
    .footer-links a,
    .footer-contact li,
    .social-link {
        min-height: 44px;
    }
    
    .footer-links a:active {
        color: var(--primary-cyan);
        transform: translateX(-4px);
    }
    
    .social-link:active {
        transform: translateY(-2px) scale(1.05);
    }
}
```

## File: components/layout/Footer/index.jsx

- Extension: .jsx
- Language: javascript
- Size: 5663 bytes
- Created: 2026-01-28 04:21:13
- Modified: 2026-01-28 04:21:13

### Code

```javascript
import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiLinkedin, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { SOCIAL_LINKS, COMPANY_INFO, CONTACT_INFO } from '../../../constants/company';
import { SiX } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
    const socialMedia = [
        { icon: <SiX />, href: SOCIAL_LINKS.twitter, label: 'X', color: '#000000', className: 'x' },
        { icon: <FiInstagram />, href: SOCIAL_LINKS.instagram, label: 'إنستغرام', color: '#E4405F' },
        { icon: <FiFacebook />, href: SOCIAL_LINKS.facebook, label: 'فيسبوك', color: '#1877F2' },
    ];

    return (    
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Company Info */}
                    <div className="footer-col footer-col-main">
                        <Link to="/" className="footer-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="الرجوع إلى الصفحة الرئيسية">
                            <img 
                                src="/logo_svg.svg" 
                                alt="المفلحي للسياحة والسفر" 
                                className="footer-logo-img"
                                /* Updated attributes to match new CSS max-sizes */
                                width="350"  
                                height="120"
                                loading="lazy" /* Changed to lazy for footer performance */
                            />
                        </Link>
                        <p className="footer-desc">
                            شريكك الموثوق في عالم السفر والسياحة. نقدم لك تجارب سفر استثنائية وخدمات راقية تليق بك.
                        </p>
                        <div className="social-links" role="list" aria-label="روابط التواصل الاجتماعي">
                            {socialMedia.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`social-link ${social.className || ''}`}
                                    aria-label={social.label}
                                    style={{ '--social-color': social.color }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h3 className="footer-title">روابط سريعة</h3>
                        <ul className="footer-links">
                            <li><Link to="/">الرئيسية</Link></li>
                             <li><Link to="/services">خدماتنا</Link></li>   
                            <li><Link to="/about">من نحن</Link></li>
                            <li><Link to="/destinations">الوجهات</Link></li>
                            <li><Link to="/contact">اتصل بنا</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-col">
                        <h3 className="footer-title">خدماتنا</h3>
                        <ul className="footer-links">
                            <li><Link to="/services">حجوزات الطيران</Link></li>
                            <li><Link to="/services">حجوزات الفنادق</Link></li>
                            <li><Link to="/services">البرامج السياحية</Link></li>
                            <li><Link to="/services">التأشيرات</Link></li>
                            <li><Link to="/services">السياحة العلاجية</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h3 className="footer-title">تواصل معنا</h3>
                        <ul className="footer-contact" role="list">
                            <li>
                                <FiPhone className="icon" aria-hidden="true" />
                                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} aria-label="اتصل بنا">{CONTACT_INFO.phone}</a>
                            </li>
                            <li>
                                <FiMail className="icon" aria-hidden="true" />
                                <a href={`mailto:${CONTACT_INFO.email}`} aria-label="أرسل بريد إلكتروني">{CONTACT_INFO.email}</a>
                            </li>
                            <li>
                                <FiMapPin className="icon" aria-hidden="true" />
                                <span>{CONTACT_INFO.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>  المفلحي للسفريات والسياحة. جميع الحقوق محفوظة لعام ٢٠٢٦ لدى مندوب التعميدات الخاص بالمكتب.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
```

## File: components/layout/Navbar/index.jsx

- Extension: .jsx
- Language: javascript
- Size: 4551 bytes
- Created: 2026-01-28 04:21:00
- Modified: 2026-01-28 04:21:00

### Code

```javascript
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'من نحن', path: '/about' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'الوجهات', path: '/destinations' },
    { name: 'اتصل بنا', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" aria-label="المفلحي للسياحة والسفر - العودة إلى الصفحة الرئيسية">
          <img
            src="/logo_svg.svg"
            alt="المفلحي للسياحة والسفر"
            className="logo-img"
            width="480"
            height="140"
            loading="eager"
            fetchPriority="high"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="nav-underline"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="navbar-cta">
          <Link
            to="/contact"
            className="btn btn-primary"
            // Inline styles to override the class colors directly
            style={{
              backgroundColor: '#004B87',
              borderColor: '#1428A0',
              color: 'white'
            }}
          >
            احجز الآن
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`navbar-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mobile-menu"
            >
              <div className="mobile-menu-content">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mobile-cta-container"
                >
                  <Link to="/contact" className="btn btn-primary w-full">
                    احجز رحلتك الآن
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

```

## File: components/layout/Navbar/Navbar.css

- Extension: .css
- Language: unknown
- Size: 8556 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```unknown
/* Navbar Styles */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: var(--z-sticky);
    transition: all var(--transition-base);
    background: transparent;
    padding: var(--spacing-sm) 0;
    min-height: 120px;
    /* Smooth scroll behavior */
}

.navbar.scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding: var(--spacing-xs) 0;
    min-height: 100px;
}

[data-theme="dark"] .navbar.scrolled {
    background: rgba(15, 23, 42, 0.9);
}

.navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-md);
    /* Better spacing between elements */
}

/* Logo */
.navbar-logo {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    z-index: var(--z-fixed);
    transition: opacity var(--transition-base);
    height: 100%;
    /* Add padding to create breathing room around logo */
    padding: var(--spacing-xs) 0;
}

.navbar-logo:hover {
    opacity: 0.85;
}

.navbar-logo:focus-visible {
    outline: 2px solid var(--primary-cyan);
    outline-offset: 4px;
    border-radius: var(--radius-sm);
}

.logo-img {
    height: 110px;
    width: auto;
    max-width: 400px;
    min-width: 260px;
    object-fit: contain;
    object-position: center center;
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), filter 0.4s ease, opacity 0.4s ease;
    /* Richer shadow for depth and clarity */
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08));
    /* SVG-specific optimizations for perfect sharpness */
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    image-rendering: auto;
    /* Best for SVG - smooth scaling */
    /* Prevent blur on transform */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    will-change: filter, transform;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    /* Display full logo with proper spacing */
    display: block;
    /* SVG quality enhancements */
    shape-rendering: geometricPrecision;
    text-rendering: optimizeLegibility;
}

.navbar.scrolled .logo-img {
    height: 90px;
    max-width: 340px;
    min-width: 240px;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
}

.logo-img:hover {
    /* Subtle hover effect - professional and clean */
    opacity: 0.9;
    filter: drop-shadow(0 3px 10px rgba(0, 0, 0, 0.15));
}

/* Mobile optimizations for logo */
@media (max-width: 768px) {
    .navbar-logo {
        padding: var(--spacing-xs) 0;
        /* Ensure vertical center */
        display: flex;
        align-items: center;
    }

    .logo-img {
        /* UPSCALE: Larger mobile logo (was ~80px) */
        height: 100px;
        max-width: 320px;
        min-width: 220px;
    }

    .navbar.scrolled .logo-img {
        /* Slightly smaller but still clearly visible */
        height: 90px;
        max-width: 280px;
        min-width: 200px;
    }

    .navbar {
        min-height: 80px;
        padding: var(--spacing-sm) 0;
    }

    .navbar.scrolled {
        min-height: 75px;
        padding: var(--spacing-xs) 0;
    }
}

@media (max-width: 480px) {
    .navbar-logo {
        padding: 4px 0;
    }

    .logo-img {
        /* UPSCALE: Larger small-mobile logo */
        height: 90px;
        max-width: 280px;
        min-width: 200px;
    }

    .navbar.scrolled .logo-img {
        height: 80px;
        max-width: 260px;
        min-width: 180px;
    }

    .navbar {
        min-height: 70px;
    }

    .navbar.scrolled {
        min-height: 68px;
    }
}

/* Desktop - larger logo for better visibility */
@media (min-width: 992px) {
    .navbar-logo {
        padding: var(--spacing-sm) 0;
    }

    .logo-img {
        height: 120px;
        max-width: 420px;
        min-width: 300px;
    }

    .navbar.scrolled .logo-img {
        height: 100px;
        max-width: 360px;
        min-width: 260px;
    }

    .navbar {
        min-height: 140px;
    }

    .navbar.scrolled {
        min-height: 120px;
    }
}

@media (min-width: 1200px) {
    .navbar-logo {
        padding: var(--spacing-sm) 0;
    }

    .logo-img {
        height: 140px;
        max-width: 480px;
        min-width: 340px;
    }

    .navbar.scrolled .logo-img {
        height: 115px;
        max-width: 420px;
        min-width: 300px;
    }
}

/* Desktop Links */
.navbar-links {
    display: none;
}

@media (min-width: 992px) {
    .navbar-links {
        display: flex;
        align-items: center;
        gap: var(--spacing-xl);
        /* Better spacing between nav links */
        flex: 1;
        justify-content: center;
        /* Center navigation links for better balance */
    }
}

.nav-link {
    position: relative;
    font-weight: 500;
    color: var(--text-secondary);
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: var(--font-base);
    transition: color var(--transition-base);
    /* Better touch target */
    min-height: 44px;
    display: flex;
    align-items: center;
    border-radius: var(--radius-sm);
}

.nav-link:hover,
.nav-link.active {
    color: var(--primary-cyan);
}

.nav-link:hover {
    background-color: rgba(8, 145, 178, 0.05);
    /* Subtle background on hover */
}

.nav-link:focus-visible {
    outline: 2px solid var(--primary-cyan);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
}

.nav-underline {
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--gradient-ocean);
    border-radius: var(--radius-full);
}

/* Desktop CTA */
.navbar-cta {
    display: none;
}

@media (min-width: 992px) {
    .navbar-cta {
        display: block;
    }

    .btn-sm {
        padding: 10px 24px;
        min-height: 44px;
        font-size: var(--font-sm);
    }
}

/* Mobile Toggle */
.navbar-toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: var(--z-fixed);
    padding: 0;
}

@media (min-width: 992px) {
    .navbar-toggle {
        display: none;
    }
}

.bar {
    width: 100%;
    height: 2px;
    background-color: var(--text-primary);
    border-radius: var(--radius-full);
    transition: all var(--transition-fast);
}

.navbar-toggle.open .bar:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
}

.navbar-toggle.open .bar:nth-child(2) {
    opacity: 0;
}

.navbar-toggle.open .bar:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    z-index: var(--z-sticky);
    /* Behind toggle */
    padding-top: 110px;
    /* Space for navbar */
    display: flex;
    flex-direction: column;
}

@media (max-width: 768px) {
    .mobile-menu {
        padding-top: 80px;
    }
}

@media (max-width: 480px) {
    .mobile-menu {
        padding-top: 75px;
    }
}

.mobile-menu-content {
    padding: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.mobile-nav-link {
    font-family: var(--font-heading);
    font-size: var(--font-xl);
    font-weight: 700;
    color: var(--text-primary);
    display: block;
    padding: var(--spacing-md) var(--spacing-lg);
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
    /* Better touch targets */
    min-height: 56px;
    display: flex;
    align-items: center;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
    background-color: var(--bg-secondary);
    color: var(--primary-cyan);
    transform: translateX(-4px);
    /* RTL direction */
    padding-right: calc(var(--spacing-lg) + 4px);
}

.mobile-cta-container {
    margin-top: var(--spacing-lg);
}

.w-full {
    width: 100%;
}
```

## File: components/common/ExpandableServiceCard/ExpandableServiceCard.css

- Extension: .css
- Language: unknown
- Size: 7199 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```unknown
/* Expandable Service Card Styles */

.expandable-service-card {
    background: white;
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: var(--shadow-md);
    border: 2px solid transparent;
    display: flex;
    flex-direction: column;
    cursor: pointer;
}

[data-theme="dark"] .expandable-service-card {
    background: var(--bg-secondary);
}

.expandable-service-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
    border-color: rgba(8, 145, 178, 0.2);
}

.expandable-service-card.expanded {
    box-shadow: var(--shadow-xl);
    border-color: rgba(8, 145, 178, 0.3);
}

.expandable-service-card.expanded:hover {
    transform: translateY(-8px);
}

/* Gradient border accent */
.expandable-card-accent {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 4px;
    background: var(--gradient-tropical);
    opacity: 0;
    transition: opacity var(--transition-base);
}

.expandable-service-card:hover .expandable-card-accent,
.expandable-service-card.expanded .expandable-card-accent {
    opacity: 1;
}

/* Card Header */
.expandable-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-md);
    padding-bottom: var(--spacing-md);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    transition: padding-bottom var(--transition-base);
}

.expandable-service-card.expanded .expandable-card-header {
    padding-bottom: var(--spacing-lg);
    border-bottom-color: rgba(8, 145, 178, 0.2);
}

.expandable-card-header-content {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    flex: 1;
}

/* Icon Wrapper */
.expandable-icon-wrapper {
    width: 70px;
    height: 70px;
    min-width: 70px;
    border-radius: var(--radius-md);
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
    box-shadow: 0 4px 15px rgba(8, 145, 178, 0.1);
}

[data-theme="dark"] .expandable-icon-wrapper {
    background: var(--bg-tertiary);
}

.expandable-service-card:hover .expandable-icon-wrapper,
.expandable-service-card.expanded .expandable-icon-wrapper {
    background: var(--gradient-ocean);
    transform: rotate(-10deg) scale(1.1);
    box-shadow: 0 8px 25px rgba(8, 145, 178, 0.4);
}

.expandable-icon {
    font-size: 36px;
    color: var(--primary-cyan);
    transition: all 0.5s;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.expandable-service-card:hover .expandable-icon,
.expandable-service-card.expanded .expandable-icon {
    color: white;
    transform: scale(1.1);
}

/* Title Section */
.expandable-card-title-section {
    flex: 1;
}

.expandable-card-title {
    font-size: var(--font-xl);
    margin-bottom: 0.5rem;
    color: var(--text-primary);
    transition: color 0.3s;
    font-weight: 700;
}

.expandable-service-card:hover .expandable-card-title,
.expandable-service-card.expanded .expandable-card-title {
    background: var(--gradient-ocean);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.expandable-card-tagline {
    font-size: var(--font-sm);
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.5;
}

/* Chevron Icon */
.expandable-chevron {
    color: var(--primary-cyan);
    font-size: 1.5rem;
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.expandable-service-card:hover .expandable-chevron {
    color: var(--accent-amber);
    transform: scale(1.1);
}

/* Expanded Content */
.expandable-card-content {
    overflow: hidden;
}

.expandable-card-body {
    padding-top: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
}

.expandable-card-description {
    font-size: var(--font-base);
    color: var(--text-secondary);
    line-height: 1.8;
    margin: 0;
}

/* Features List */
.expandable-card-features {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
}

.expandable-feature-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    font-size: var(--font-sm);
    color: var(--text-secondary);
    transition: all 0.3s;
}

.expandable-feature-item:hover {
    color: var(--text-primary);
    transform: translateX(-3px);
}

.expandable-check-icon {
    color: var(--secondary-teal);
    font-size: 1.2rem;
    flex-shrink: 0;
    transition: transform 0.3s;
}

.expandable-feature-item:hover .expandable-check-icon {
    transform: scale(1.2);
}

/* CTA Button */
.expandable-card-cta {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-xs);
    color: var(--primary-cyan);
    font-weight: 600;
    font-size: var(--font-base);
    margin-top: var(--spacing-sm);
    transition: all 0.3s;
    width: fit-content;
    padding: 0.5rem 0;
}

.expandable-card-cta:hover {
    gap: var(--spacing-sm);
    color: var(--accent-amber);
}

.expandable-arrow-icon {
    transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.expandable-card-cta:hover .expandable-arrow-icon {
    transform: translateX(-6px);
    animation: arrowPulse 0.6s ease infinite;
}

@keyframes arrowPulse {
    0%,
    100% {
        transform: translateX(-6px);
    }

    50% {
        transform: translateX(-10px);
    }
}

/* Focus States for Accessibility */
.expandable-card-header:focus {
    outline: 2px solid var(--primary-cyan);
    outline-offset: 2px;
    border-radius: var(--radius-md);
}

.expandable-card-cta:focus {
    outline: 2px solid var(--primary-cyan);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .expandable-card-header {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--spacing-sm);
    }

    .expandable-card-header-content {
        width: 100%;
    }

    .expandable-chevron {
        align-self: flex-end;
    }

    .expandable-icon-wrapper {
        width: 60px;
        height: 60px;
        min-width: 60px;
    }

    .expandable-icon {
        font-size: 28px;
    }

    .expandable-card-title {
        font-size: var(--font-lg);
    }

    .expandable-card-tagline {
        font-size: var(--font-xs);
    }
}

/* Disable animations for reduced motion */
@media (prefers-reduced-motion: reduce) {
    .expandable-service-card,
    .expandable-icon-wrapper,
    .expandable-chevron,
    .expandable-card-cta,
    .expandable-arrow-icon {
        animation: none !important;
        transition: none !important;
    }

    .expandable-chevron {
        transform: none !important;
    }
}


```

## File: components/common/ExpandableServiceCard/index.jsx

- Extension: .jsx
- Language: javascript
- Size: 5196 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
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


```

## File: components/common/Card/Card.css

- Extension: .css
- Language: unknown
- Size: 5809 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```unknown
.service-card {
    background: white;
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: var(--shadow-md);
    border: 2px solid transparent;
    display: flex;
    flex-direction: column;
    height: 100%;
    /* Floating animation */
    animation: cardFloat 6s ease-in-out infinite;
    /* 3D perspective */
    transform-style: preserve-3d;
    perspective: 1000px;
}

@keyframes cardFloat {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

[data-theme="dark"] .service-card {
    background: var(--bg-secondary);
}

.service-card:hover {
    transform: translateY(-15px) rotateX(5deg);
    box-shadow:
        var(--shadow-xl),
        0 0 30px rgba(8, 145, 178, 0.2);
    border-color: transparent;
    background: linear-gradient(white, white) padding-box,
        linear-gradient(135deg, #0891B2, #06B6D4, #F59E0B) border-box;
    animation: none;
    /* Stop floating on hover */
}

/* Gradient border glow */
.service-card::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: var(--radius-lg);
    padding: 2px;
    background: linear-gradient(135deg, #0891B2 0%, #06B6D4 30%, #F59E0B 70%, #EA580C 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.5s;
}

.service-card:hover::before {
    opacity: 1;
    animation: gradientSpin 3s linear infinite;
}

@keyframes gradientSpin {
    0% {
        filter: hue-rotate(0deg);
    }

    100% {
        filter: hue-rotate(360deg);
    }
}

.service-card-accent {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--gradient-tropical);
    opacity: 0;
    transition: opacity var(--transition-base);
}

.service-card:hover .service-card-accent {
    opacity: 1;
}

.service-icon-wrapper {
    width: 70px;
    height: 70px;
    border-radius: var(--radius-md);
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--spacing-md);
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
    box-shadow: 0 4px 15px rgba(8, 145, 178, 0.1);
}

[data-theme="dark"] .service-icon-wrapper {
    background: var(--bg-tertiary);
}

/* Icon pulse animation */
.service-icon-wrapper::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: var(--radius-md);
    background: inherit;
    animation: iconPulse 2s ease-in-out infinite;
    z-index: -1;
}

@keyframes iconPulse {

    0%,
    100% {
        transform: scale(1);
        opacity: 0.7;
    }

    50% {
        transform: scale(1.2);
        opacity: 0;
    }
}

.service-card:hover .service-icon-wrapper {
    background: var(--gradient-ocean);
    transform: rotate(-10deg) scale(1.15);
    box-shadow: 0 8px 25px rgba(8, 145, 178, 0.4);
}

.service-icon {
    font-size: 36px;
    transition: all 0.5s;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.service-card:hover .service-icon {
    color: white;
    transform: scale(1.1);
    animation: iconBounce 0.6s ease;
}

@keyframes iconBounce {

    0%,
    100% {
        transform: scale(1.1);
    }

    50% {
        transform: scale(1.25);
    }
}

.service-title {
    font-size: var(--font-xl);
    margin-bottom: var(--spacing-sm);
    color: var(--text-primary);
    transition: color 0.3s;
}

.service-card:hover .service-title {
    background: var(--gradient-ocean);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.service-description {
    font-size: var(--font-base);
    color: var(--text-secondary);
    margin-bottom: var(--spacing-md);
    line-height: 1.7;
    flex-grow: 1;
}

.service-features {
    list-style: none;
    margin-bottom: var(--spacing-lg);
    padding: 0;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    font-size: var(--font-sm);
    color: var(--text-secondary);
    margin-bottom: 10px;
    opacity: 0.8;
    transition: all 0.3s;
}

.service-card:hover .feature-item {
    opacity: 1;
    transform: translateX(-3px);
    /* RTL */
}

.check-icon {
    color: var(--secondary-teal);
    font-weight: bold;
    font-size: 18px;
}

.service-link {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-xs);
    color: var(--primary-cyan);
    font-weight: 600;
    font-size: var(--font-base);
    margin-top: auto;
    transition: all 0.3s;
}

.service-link:hover {
    gap: var(--spacing-sm);
    color: var(--accent-amber);
}

.arrow-icon {
    transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.service-link:hover .arrow-icon {
    transform: translateX(-6px);
    animation: arrowPulse 0.6s ease infinite;
}

@keyframes arrowPulse {

    0%,
    100% {
        transform: translateX(-6px);
    }

    50% {
        transform: translateX(-10px);
    }
}

/* Disable animations for reduced motion */
@media (prefers-reduced-motion: reduce) {

    .service-card,
    .service-icon-wrapper,
    .service-link,
    .arrow-icon {
        animation: none !important;
        transition: none !important;
    }
}
```

## File: components/common/Card/index.jsx

- Extension: .jsx
- Language: javascript
- Size: 1405 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
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

```

## File: components/sections/AboutUs/AboutUs.css

- Extension: .css
- Language: unknown
- Size: 3034 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```unknown
.about-us-section {
    padding: var(--spacing-2xl) 0;
    position: relative;
    overflow: hidden;
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-2xl);
    align-items: center;
}

/* Visual Side */
.about-visual {
    position: relative;
}

.image-stack {
    position: relative;
    padding: var(--spacing-lg);
}

.main-image-wrapper {
    border-radius: var(--radius-2xl) var(--radius-lg) var(--radius-2xl) var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-2xl);
    position: relative;
    z-index: 1;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.main-image {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
}

.main-image-wrapper:hover .main-image {
    transform: scale(1.05);
}

.experience-badge {
    position: absolute;
    bottom: -20px;
    right: -20px;
    background: #fff;
    padding: var(--spacing-lg);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-2xl);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-width: 160px;
    border: 4px solid var(--bg-secondary);
}

.experience-badge .years {
    font-size: 3.5rem;
    font-weight: 800;
    color: var(--primary-cyan);
    line-height: 1;
    margin-bottom: 5px;
}

.experience-badge .text {
    font-size: 1rem;
    color: var(--text-primary);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Content Side */
.about-content {
    text-align: right;
    /* RTL */
}

.about-description {
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: var(--spacing-xl);
}

.features-list {
    display: grid;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-xl);
}

.feature-item {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
}

.feature-item .icon {
    font-size: 1.5rem;
    color: var(--secondary-color);
    margin-top: 5px;
    flex-shrink: 0;
}

.feature-item h4 {
    font-size: 1.1rem;
    color: var(--text-primary);
    margin: 0 0 5px 0;
}

.feature-item p {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin: 0;
}

/* Responsive */
@media (max-width: 1024px) {
    .about-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-xl);
    }

    .about-visual {
        order: 2;
        /* Image below text on tablet/mobile if preferred, or remove to keep top */
        max-width: 600px;
        margin: 0 auto;
    }

    .experience-badge {
        transform: translate(10%, 10%);
    }
}

@media (max-width: 768px) {
    .about-us-section {
        padding: var(--spacing-xl) 0;
    }

    .experience-badge {
        padding: var(--spacing-md);
        min-width: 100px;
    }

    .experience-badge .years {
        font-size: 2rem;
    }
}
```

## File: components/sections/AboutUs/index.jsx

- Extension: .jsx
- Language: javascript
- Size: 3651 bytes
- Created: 2026-01-28 04:21:28
- Modified: 2026-01-28 04:21:28

### Code

```javascript
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
                            في المفلحي، لا نقدم مجرد رحلات، بل نصمم تجارب حياة. نحن نؤمن بأن السفر هو أكثر من مجرد انتقال من مكان لآخر؛ إنه اكتشاف للذات وللعالم من حولنا.
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

```

## File: components/sections/Testimonials/index.jsx

- Extension: .jsx
- Language: javascript
- Size: 3318 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../../../data';
import './Testimonials.css';

const Testimonials = () => {
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

```

## File: components/sections/Testimonials/Testimonials.css

- Extension: .css
- Language: unknown
- Size: 3456 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```unknown
.testimonials-section {
    background-color: var(--bg-secondary);
    text-align: center;
}

.section-header {
    margin-bottom: var(--spacing-2xl);
}

.section-title {
    font-size: var(--font-3xl);
    color: var(--text-primary);
    margin-bottom: var(--spacing-sm);
}

.section-subtitle {
    color: var(--text-secondary);
    font-size: var(--font-lg);
}

.testimonials-carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-lg);
    max-width: 900px;
    margin: 0 auto;
    position: relative;
}

.testimonial-card-wrapper {
    width: 100%;
    min-height: 300px;
}

.testimonial-card {
    background: var(--bg-primary);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    box-shadow: var(--shadow-lg);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-lg);
    position: relative;
}

@media (min-width: 768px) {
    .testimonial-card {
        flex-direction: row;
        text-align: right;
        padding: var(--spacing-2xl);
    }
}

.testimonial-image {
    position: relative;
    flex-shrink: 0;
}

.testimonial-image img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid white;
    box-shadow: var(--shadow-md);
}

.quote-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 32px;
    height: 32px;
    background: var(--gradient-sunset);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    box-shadow: var(--shadow-sm);
}

.testimonial-content {
    flex: 1;
}

.stars {
    color: var(--accent-amber);
    font-size: 20px;
    margin-bottom: var(--spacing-sm);
}

.review-text {
    font-size: var(--font-lg);
    color: var(--text-secondary);
    margin-bottom: var(--spacing-md);
    font-style: italic;
    line-height: 1.8;
}

.reviewer-name {
    color: var(--text-primary);
    margin-bottom: 4px;
}

.reviewer-role {
    font-size: var(--font-sm);
    color: var(--primary-cyan);
    font-weight: 600;
}

.carousel-btn {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: none;
    background: white;
    color: var(--text-primary);
    font-size: 24px;
    cursor: pointer;
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

.carousel-btn:hover {
    background: var(--primary-cyan);
    color: white;
    transform: scale(1.1);
}

.carousel-dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: var(--spacing-lg);
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--bg-tertiary);
    cursor: pointer;
    transition: all var(--transition-base);
}

.dot.active {
    width: 24px;
    border-radius: 10px;
    background: var(--primary-cyan);
}

/* Mobile Adjustments */
@media (max-width: 768px) {
    .carousel-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    .prev {
        left: -10px;
    }

    .next {
        right: -10px;
    }

    .testimonial-card {
        padding: var(--spacing-lg);
    }
}
```

## File: components/sections/DestinationsCarousel/DestinationsCarousel.css

- Extension: .css
- Language: unknown
- Size: 6863 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```unknown
.destinations-grid-section {
    padding: var(--spacing-xl) 0;
    position: relative;
}

/* Static Grid Container */
.destinations-static-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    min-height: 600px;
}

/* Grid Item */
.destination-grid-item {
    position: relative;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    transition: flex 0.5s ease;
}

.destination-grid-item:last-child {
    border-right: none;
}

.grid-image-wrapper {
    position: absolute;
    inset: 0;
    z-index: 1;
}

.grid-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s ease;
}

.destination-grid-item:hover .grid-image {
    transform: scale(1.1);
}

.grid-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 100%);
    z-index: 2;
    transition: background 0.3s ease;
}

.destination-grid-item:hover .grid-overlay {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.3) 100%);
}

.grid-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: var(--spacing-lg);
    z-index: 3;
    color: #fff;
    transform: translateY(20px);
    transition: transform 0.3s ease;
}

.destination-grid-item:hover .grid-content {
    transform: translateY(0);
}

.grid-header h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 5px 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.grid-location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.9rem;
    margin-bottom: var(--spacing-md);
}

.grid-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    padding-top: var(--spacing-sm);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.destination-grid-item:hover .grid-footer {
    opacity: 1;
}

.grid-duration {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9);
}

.grid-cta {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--secondary-color);
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* --- Modal Styles (Text Focused Redesign) --- */
.destination-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(8px);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-md);
}

.destination-modal-content {
    background: #ffffff;
    width: 100%;
    max-width: 700px;
    /* Reduced width for text focus */
    border-radius: var(--radius-xl);
    overflow: hidden;
    position: relative;
    box-shadow: var(--shadow-2xl);
    border: 1px solid rgba(0, 0, 0, 0.05);
    max-height: 90vh;
    overflow-y: auto;
}

/* .modal-close-btn {
    position: absolute;
    top: var(--spacing-md);
    left: var(--spacing-md);
    z-index: 10;
    background: rgba(0, 0, 0, 0.05);
    color: #0F172A;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.modal-close-btn:hover {
    background: var(--primary-color);
    color: #fff;
    transform: rotate(90deg);
} */
/* ============ Updated Modal Close Button ============ */
.modal-close-btn {
    /* Reset absolute positioning to sit in the layout flow */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    /* Layout & Spacing */
    width: 100%;
    height: 52px;
    margin-bottom: var(--spacing-sm);
    /* Gap between this and Book Now button */

    /* Visuals */
    background: var(--bg-tertiary);
    color: var(--text-secondary);
    border: none;
    border-radius: var(--radius-md);

    /* Typography */
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: var(--font-base);
    cursor: pointer;
    transition: all var(--transition-base);
}

.modal-close-btn:hover {
    /* Uses your brand blue on hover */
    background: var(--primary-blue);
    color: #FFFFFF;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.modal-close-btn:active {
    transform: translateY(0);
}

.modal-text-layout {
    padding: var(--spacing-xl);
    text-align: right;
}

.modal-text-header {
    margin-bottom: var(--spacing-lg);
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: var(--spacing-md);
}

.modal-country-tag {
    color: var(--primary-color);
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: block;
    margin-bottom: 5px;
}

.modal-text-header h2 {
    font-size: 2.2rem;
    margin: 0;
    color: #0F172A;
}

.modal-section {
    margin-bottom: var(--spacing-xl);
}

.modal-section h3 {
    font-size: 1.2rem;
    color: #0F172A;
    margin-bottom: var(--spacing-md);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.section-icon {
    color: var(--secondary-color);
}

.modal-description {
    color: #475569;
    line-height: 1.8;
    font-size: 1.05rem;
}

.modal-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-xl);
}

.info-list {
    list-style: none;
    padding: 0;
}

.info-list li {
    position: relative;
    padding-right: 1.5rem;
    margin-bottom: 0.75rem;
    color: #334155;
    font-weight: 500;
}

.info-list li::before {
    content: "•";
    color: var(--primary-color);
    font-weight: bold;
    position: absolute;
    right: 0;
    top: 0;
}

.modal-text-footer {
    margin-top: var(--spacing-lg);
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
    .destinations-static-grid {
        grid-template-columns: repeat(2, 1fr);
        min-height: auto;
    }

    .destination-grid-item {
        height: 400px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
}

@media (max-width: 768px) {
    .destinations-static-grid {
        grid-template-columns: 1fr;
    }

    .destination-grid-item {
        height: 350px;
    }

    .modal-columns {
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
    }

    .modal-text-header h2 {
        font-size: 1.8rem;
    }
}
```

## File: components/sections/DestinationsCarousel/index.jsx

- Extension: .jsx
- Language: javascript
- Size: 7437 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
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

```

## File: components/sections/PassportCheck/index.jsx

- Extension: .jsx
- Language: javascript
- Size: 4957 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
import { useState } from 'react';
import StatusResult from './StatusResult';
import './PassportCheck.css';

const PassportCheck = () => {
  const [passportNumber, setPassportNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Input validation function
  const validatePassportNumber = (number) => {
    const trimmed = number.trim().toUpperCase();

    // Check if empty
    if (!trimmed) {
      return { valid: false, error: 'الرجاء إدخال رقم الجواز' };
    }

    // Check length (typical passport numbers are 6-12 characters)
    if (trimmed.length < 3 || trimmed.length > 20) {
      return { valid: false, error: 'يجب أن يكون رقم الجواز بين 3 و 20 حرفاً' };
    }

    // Allow alphanumeric characters, hyphens, and spaces
    const validPattern = /^[A-Z0-9\s\-]+$/;
    if (!validPattern.test(trimmed)) {
      return { valid: false, error: 'رقم الجواز يحتوي على أحرف غير صالحة' };
    }

    return { valid: true, sanitized: trimmed };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset states
    setError(null);
    setResult(null);

    // Validate input
    const validation = validatePassportNumber(passportNumber);
    if (!validation.valid) {
      setError(validation.error);
      return;
    }

    setLoading(true);

    try {
      // Call Vercel API route with sanitized input
      const response = await fetch(
        `/api/check-visa-status?passport_number=${encodeURIComponent(validation.sanitized)}`
      );

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 404) {
          setResult({
            found: false,
            message: data.message || 'رقم الجواز غير موجود في نظامنا',
          });
        } else {
          setError(data.error || 'حدث خطأ. الرجاء المحاولة مرة أخرى.');
        }
      } else {
        setResult({
          found: true,
          passport_number: data.passport_number,
          status: data.status,
          updated_at: data.updated_at,
          admin_notes: data.admin_notes,
          first_name: data.first_name,
          last_name: data.last_name,
          visa_type: data.visa_type,
          passport_received_date: data.passport_received_date,
          embassy_submit_date: data.embassy_submit_date,
          expected_exit_date: data.expected_exit_date,
        });
      }
    } catch (err) {
      console.error('Error checking visa status:', err);
      setError('تعذر الاتصال بالخادم. الرجاء المحاولة لاحقاً.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setPassportNumber('');
    setResult(null);
    setError(null);
  };

  return (
    <section className="passport-check-section">
      <div className="container">
        <div className="passport-check-wrapper">
          <div className="passport-check-header">
            <h2 className="section-title">التحقق من حالة التأشيرة</h2>
            <p className="section-subtitle">
              أدخل رقم جواز سفرك للتحقق من حالة التأشيرة
            </p>
          </div>

          <div className="passport-check-card">
            <form onSubmit={handleSubmit} className="passport-check-form">
              <div className="form-group">
                <label htmlFor="passport-number" className="form-label">
                  رقم الجواز
                </label>
                <input
                  type="text"
                  id="passport-number"
                  className="form-input"
                  placeholder="أدخل رقم جواز سفرك"
                  value={passportNumber}
                  onChange={(e) => setPassportNumber(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>

              {error && (
                <div className="error-message" role="alert">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="btn-check"
                disabled={loading || !passportNumber.trim()}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    جاري التحقق...
                  </>
                ) : (
                  'استعلام'
                )}
              </button>
            </form>

            {result && (
              <StatusResult
                result={result}
                onReset={handleReset}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassportCheck;


```

## File: components/sections/PassportCheck/PassportCheck.css

- Extension: .css
- Language: unknown
- Size: 8725 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```unknown
/* PassportCheck.css */

/* --- Main Section Wrapper --- */
.passport-check-section {
  padding: var(--spacing-2xl) 0;
  background: var(--bg-secondary);
  direction: rtl;
  text-align: right;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.passport-check-wrapper {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

/* --- Headers --- */
.passport-check-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.passport-check-header .section-title {
  font-family: var(--font-heading);
  font-size: var(--font-3xl);
  font-weight: 800;
  color: var(--primary-blue);
  margin-bottom: var(--spacing-xs);
}

.passport-check-header .section-subtitle {
  font-family: var(--font-body);
  font-size: var(--font-lg);
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

/* --- Main Card --- */
.passport-check-card {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-xl);
  border: 1px solid rgba(0, 75, 135, 0.05); /* Subtle blue border */
  transition: transform var(--transition-base);
}

/* --- Form Styles --- */
.passport-check-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.form-label {
  font-family: var(--font-heading);
  font-size: var(--font-base);
  font-weight: 700;
  color: var(--primary-dark);
}

.form-input {
  width: 100%;
  min-height: 56px; /* Touch friendly */
  padding: 0 var(--spacing-lg);
  font-family: var(--font-body);
  font-size: var(--font-base);
  background-color: var(--bg-secondary);
  border: 2px solid transparent;
  border-radius: var(--radius-md);
  color: var(--text-primary);
  transition: all var(--transition-fast);
}

.form-input:focus {
  outline: none;
  background-color: var(--bg-primary);
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 4px rgba(0, 75, 135, 0.1);
}

.form-input::placeholder {
  color: var(--text-muted);
}

.error-message {
  padding: var(--spacing-sm) var(--spacing-md);
  background: rgba(251, 113, 133, 0.1); /* Coral tint */
  border: 1px solid var(--accent-coral);
  border-radius: var(--radius-md);
  color: #9f1239; /* Darker red for text */
  font-size: var(--font-sm);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* --- Check Button --- */
.btn-check {
  width: 100%;
  min-height: 56px;
  background: var(--gradient-ocean);
  color: white;
  border: none;
  border-radius: var(--radius-full);
  font-family: var(--font-heading);
  font-size: var(--font-lg);
  font-weight: 700;
  cursor: pointer;
  transition: all var(--transition-base);
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
}

.btn-check:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

.btn-check:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  filter: grayscale(1);
}

.spinner {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

/* --- Status Result Container --- */
.status-result {
  margin-top: var(--spacing-2xl);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--bg-tertiary);
  animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- Not Found State --- */
.status-card.not-found {
  text-align: center;
  padding: var(--spacing-xl) 0;
}

.status-icon-large {
  font-size: 3.5rem;
  margin-bottom: var(--spacing-md);
  display: block;
}

/* --- Found State & Premium Header --- */
.status-header-premium {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.status-title {
  font-family: var(--font-heading);
  font-size: var(--font-2xl);
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: var(--spacing-xs);
}

.status-name {
  font-size: var(--font-lg);
  color: var(--text-secondary);
}

.premium-badge {
  display: inline-block;
  background: var(--bg-secondary);
  border: 1px solid var(--bg-tertiary);
  color: var(--primary-blue);
  font-family: monospace;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-full);
  margin-top: var(--spacing-sm);
}

.visa-type-container {
  margin-top: var(--spacing-md);
  padding: var(--spacing-sm);
  background: rgba(245, 158, 11, 0.1); /* Amber tint */
  border-radius: var(--radius-md);
  display: inline-block;
}

.visa-type-label {
  font-size: var(--font-xs);
  color: var(--text-muted);
  display: block;
}

.visa-type-value {
  color: #b45309; /* Dark Amber */
  font-weight: 800;
  font-size: var(--font-lg);
}

/* --- The Schedule (Timeline) - Mobile Optimized --- */
.timeline-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-right: 2rem; /* Space for the line/markers on right */
  margin: var(--spacing-xl) 0;
}

/* Vertical Line */
.timeline-container::before {
  content: '';
  position: absolute;
  top: 1rem;
  bottom: 0;
  right: 0.65rem; /* Center line through markers */
  width: 2px;
  background: var(--bg-tertiary);
  z-index: 0;
}

.timeline-step {
  position: relative;
  z-index: 1;
}

/* Markers */
.timeline-marker {
  position: absolute;
  right: -2rem; /* Pull marker to the line */
  top: 0;
  width: 1.5rem; /* 24px */
  height: 1.5rem;
  border-radius: 50%;
  background: var(--bg-primary);
  border: 2px solid var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  transition: all var(--transition-base);
}

/* Active Step (Processing) */
.timeline-step.active .timeline-marker {
  background: var(--primary-blue);
  border-color: var(--primary-blue);
  color: white;
  box-shadow: 0 0 0 4px rgba(0, 75, 135, 0.2);
}

.timeline-step.active .timeline-title {
  color: var(--primary-blue);
}

/* Completed Step */
.timeline-step.completed .timeline-marker {
  background: var(--secondary-teal);
  border-color: var(--secondary-teal);
  color: white;
}

.timeline-content {
  background: var(--bg-secondary);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  transition: all var(--transition-base);
}

.timeline-step.active .timeline-content {
  background: white;
  border-color: rgba(0, 75, 135, 0.1);
  box-shadow: var(--shadow-md);
  transform: translateX(-5px); /* Gentle slide left */
}

.timeline-date {
  font-size: var(--font-xs);
  color: var(--text-muted);
  margin-bottom: 0.25rem;
  display: block;
}

.timeline-title {
  margin: 0;
  font-size: var(--font-base);
  font-weight: 700;
  color: var(--text-primary);
}

.timeline-desc {
  font-size: var(--font-sm);
  color: var(--text-secondary);
  margin-top: 0.25rem;
}

/* --- Footer Actions --- */
.status-message {
  background: rgba(13, 148, 136, 0.1); /* Teal tint */
  color: #115e59;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
}

.admin-notes {
  background: #fff7ed;
  border: 1px solid #ffedd5;
  color: #9a3412;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-sm);
}

.btn-reset {
  width: 100%;
  padding: var(--spacing-md);
  background: transparent;
  border: 2px solid var(--bg-tertiary);
  color: var(--text-secondary);
  font-weight: 600;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-reset:hover {
  border-color: var(--primary-blue);
  color: var(--primary-blue);
  background: rgba(0, 75, 135, 0.05);
}

/* --- Mobile Responsiveness --- */
@media (max-width: 768px) {
  .passport-check-section {
    padding: var(--spacing-lg) 0;
    align-items: flex-start; /* Better for mobile scrolling */
  }

  .passport-check-card {
    padding: var(--spacing-lg);
    border-radius: var(--radius-lg);
  }

  .status-title {
    font-size: var(--font-xl);
  }
  
  .timeline-content {
    padding: var(--spacing-sm);
  }
}
@media (max-width: 480px) {
  .passport-check-section { padding: var(--spacing-md) 0; }
  .passport-check-card { padding: var(--spacing-md); }
  .status-title { font-size: var(--font-lg); }
  .timeline-step { flex-direction: column; align-items: flex-start; }
  .timeline-marker { right: auto; left: -1rem; }
  .timeline-content { padding: var(--spacing-xs); }
}
```

## File: components/sections/PassportCheck/StatusResult.jsx

- Extension: .jsx
- Language: javascript
- Size: 6529 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
import './PassportCheck.css';

const StatusResult = ({ result, onReset }) => {
  if (!result) return null;

  const getStatusConfig = (status) => {
    const configs = {
      ready: {
        label: 'جاهزة',
        icon: '✓',
        color: 'var(--secondary-teal)',
        bgColor: 'rgba(20, 184, 166, 0.1)',
        message: 'تأشيرتك جاهزة! يمكنك المتابعة مع خطط سفرك.',
      },
      in_embassy: {
        label: 'في السفارة',
        icon: '🏛️',
        color: 'var(--accent-amber)',
        bgColor: 'rgba(245, 158, 11, 0.1)',
        message: 'تم ترحيل معاملتكم الى السفارة وسيتم ابلاغكم في حين وصول الدفعة المؤشرة',
      },
      pending: {
        label: '(جديده) تم الاستلام',
        icon: '📋',
        color: 'var(--text-secondary)',
        bgColor: 'rgba(71, 85, 105, 0.1)',
        message: 'تم استلام معاملتكم وسيتم ابلاغكم في حين وصول الدفعة المؤشرة',
      },
      in_aden: {
        label: 'في عدن',
        icon: '📍', // or 🚚 for transport
        color: '#3B82F6', // A nice blue
        bgColor: 'rgba(59, 130, 246, 0.1)',
        message: 'جواز السفر واصل الآن إلى عدن ويتم استكمال الإجراءات.',
    },
    };

    return configs[status] || configs.pending;
  };

  if (!result.found) {
    return (
      <div className="status-result">
        <div className="status-card not-found">
          <div className="status-icon">🔍</div>
          <h3 className="status-title">غير موجود</h3>
          <p className="status-message">{result.message}</p>
          <p className="status-help">
            يرجى التحقق من رقم الجواز أو الاتصال بفريق الدعم للحصول على المساعدة.
          </p>
          <button onClick={onReset} className="btn-reset">
            التحقق من جواز آخر
          </button>
        </div>
      </div>
    );
  }

  const statusConfig = getStatusConfig(result.status);
  const fullName = [result.first_name, result.last_name].filter(Boolean).join(' ');
  
  // Format dates helper
  const formatDate = (dateString) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString('ar-SA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Timeline steps configuration
  const timelineSteps = [
    {
      key: 'received',
      title: 'استلام الجواز',
      desc: 'تم استلام الجواز في الوكالة',
      date: result.passport_received_date,
      icon: '📂',
    },
    {
      key: 'embassy',
      title: 'التقديم للسفارة',
      desc: 'تم تسليم الجواز للسفارة للمعالجة',
      date: result.embassy_submit_date,
      icon: '🏛️',
    },
    {
      key: 'exit',
      title: 'الخروج المتوقع',
      desc: 'الموعد المتوقع لانتهاء المعالجة',
      date: result.expected_exit_date,
      icon: '✨',
    },
  ];

  // Determine step status (completed, active, pending) based on dates and overall status
// In components/sections/PassportCheck/StatusResult.jsx -> getStepStatus function

const getStepStatus = (step, index) => {
  if (step.date) {
    const stepDate = new Date(step.date);
    const today = new Date();
    if (stepDate < today) return 'completed';
    return 'active';
  }
  
  if (result.status === 'ready') return 'completed';
  
  // Update this logic:
  if (result.status === 'in_embassy' || result.status === 'in_aden') {
      // If it's in Aden or Embassy, assuming step 0 (Received) is definitely completed
      if (index === 0) return 'completed'; 
      return 'active'; 
  }

  if (index === 0) return 'active';
  return 'pending';
};
  return (
    <div className="status-result">
      <div className="status-card found">
        {/* Premium Header */}
        <div className="status-header-premium">
          <div className="premium-info">
            <h2 className="status-title" style={{ color: statusConfig.color }}>
              {statusConfig.icon} {statusConfig.label}
            </h2>
            
            {fullName && (
              <p className="status-name">
                مرحباً، <strong>{fullName}</strong>
              </p>
            )}
            
            <div className="premium-badge">
              رقم الجواز: {result.passport_number}
            </div>

            {result.visa_type && (
               <div className="visa-type-container">
                 <span className="visa-type-label">نوع التأشيرة</span>
                 <span className="visa-type-value">{result.visa_type}</span>
               </div>
            )}
          </div>
        </div>

        {/* Timeline Schedule */}
        <div className="timeline-container">
          {timelineSteps.map((step, index) => {
            const stepStatus = getStepStatus(step, index);
            const formattedDate = formatDate(step.date);
            
            return (
              <div key={step.key} className={`timeline-step ${stepStatus}`}>
                <div className="timeline-marker">
                  {stepStatus === 'completed' ? '✓' : step.icon}
                </div>
                <div className="timeline-content">
                  {formattedDate ? (
                    <span className="timeline-date">{formattedDate}</span>
                  ) : (
                    <span className="timeline-date">--/--/----</span>
                  )}
                  <h4 className="timeline-title">{step.title}</h4>
                  <p className="timeline-desc">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="status-body" style={{ marginTop: '2rem' }}>
            {statusConfig.message && (
                <p className="status-message">{statusConfig.message}</p>
            )}
          
            {result.admin_notes && (
                <div className="admin-notes">
                <strong>ملاحظة من الإدارة:</strong> {result.admin_notes}
                </div>
            )}
        </div>

        <button onClick={onReset} className="btn-reset">
          التحقق من جواز آخر
        </button>
      </div>
    </div>
  );
};

export default StatusResult;
```

## File: components/sections/HomeServices/index.jsx

- Extension: .jsx
- Language: javascript
- Size: 7991 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiBriefcase, FiMap, FiCheckCircle, FiGlobe } from 'react-icons/fi';
import './HomeServices.css';
import LazyImage from '../../common/LazyImage';

const servicesList = [
    {
        id: 'musaned',
        icon: <FiGlobe />,
        title: 'تفاويض العمالة عبر مساند',
        description: 'نقدم حلولاً متكاملة لإصدار وتوثيق تفاويض تأشيرات العمالة المنزلية عبر منصة مساند بدقة وعناية.',
        image: '/flight.jpg',
        features: ['توثيق فوري ومعتمد', 'ربط آلي مع منصة مساند', 'دعم فني متكامل']
    },
    {
        id: 'visit-visa',
        icon: <FiBriefcase />,
        title: 'تأشيرات الزيارة العائلية',
        description: 'نسهل لك إجراءات جمع شمل العائلة من خلال استخراج تأشيرات الزيارة للأقارب من الدرجة الأولى.',
        image: '/hotel.jpg',
        features: ['مراجعة دقيقة للمستندات', 'سرعة عالية في الإنجاز', 'نسبة قبول مرتفعة']
    },
    {
        id: 'manpower',
        icon: <FiMap />,
        title: 'استقدام الأيدي العاملة',
        description: 'توفير وتخليص معاملات الكوادر المهنية لمختلف التخصصات بموجب الترخيص الرسمي رقم 19.',
        image: '/hero-bg.jpg',
        features: ['كوادر مهنية مؤهلة', 'إجراءات نظامية وقانونية', 'خبرة واسعة في الاستقدام']
    },
    {
        id: 'residency',
        icon: <FiCheckCircle />,
        title: 'خدمات الإقامة العائلية',
        description: 'متخصصون في إنهاء معاملات استقدام الزوجة والأبناء للإقامة الدائمة وربطها بملف رب الأسرة.',
        image: '/cairo.jpg',
        features: ['استقرار عائلي متكامل', 'متابعة حثيثة للطلبات', 'حلول للمعاملات المتعثرة']
    }
];

const HomeServices = () => {
    const [activeService, setActiveService] = useState(servicesList[0]);

    return (
        <section className="section home-services-section">
            <div className="container">
                <div className="section-header text-center mb-xl">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="section-tag"
                    >
                        خدماتنا
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        حلول وخدمات <span className="text-gradient">متكاملة</span>
                    </motion.h2>
                    <p className="section-subtitle">نضع خبرتنا بين يديك لتسهيل كافة إجراءاتك وتأشيراتك في مكان واحد</p>
                </div>

                <div className="services-showcase">
                    {/* Left Column: Interactive List */}
                    <div className="services-list">
                        {servicesList.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`service-list-item ${activeService.id === service.id ? 'active' : ''}`}
                                onMouseEnter={() => setActiveService(service)}
                                onClick={() => setActiveService(service)} // For mobile tap
                            >
                                <div className="service-item-icon">
                                    {service.icon}
                                </div>
                                <div className="service-item-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                                <div className="service-item-arrow">
                                    <FiArrowLeft />
                                </div>
                            </motion.div>
                        ))}

                        <div className="services-cta-mobile">
                            <Link to="/services" className="btn btn-primary w-full">
                                عرض جميع الخدمات
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Visual Preview */}
                    <div className="services-preview">
                        <div className="preview-card-wrapper">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeService.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="preview-image-container"
                                >
                                    <LazyImage
                                        src={activeService.image}
                                        alt={activeService.title}
                                        className="preview-image"
                                    />
                                    <div className="preview-overlay"></div>
                                </motion.div>
                            </AnimatePresence>

                            <div className="preview-content glass">
                                <motion.div
                                    key={activeService.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h3>{activeService.title}</h3>
                                    <ul className="preview-features">
                                        {activeService.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <span className="dot"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className="btn btn-sm btn-primary">
                                        احجز الآن
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
```

## File: components/sections/HomeServices/HomeServices.css

- Extension: .css
- Language: unknown
- Size: 5594 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```unknown
/* Home Services Showcase Styles */

.home-services-section {
    position: relative;
    overflow: hidden;
    padding: 6rem 0;
    background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
}

.section-tag {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background: rgba(8, 145, 178, 0.1);
    color: var(--primary-cyan);
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.services-showcase {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
    align-items: center;
}

/* Left Column: List */
.services-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.service-list-item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;
    background: white;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid transparent;
    position: relative;
    overflow: hidden;
}

.service-list-item:hover,
.service-list-item.active {
    background: white;
    box-shadow: 0 10px 30px rgba(8, 145, 178, 0.1);
    transform: translateX(-10px);
    /* RTL pull */
    border-color: rgba(8, 145, 178, 0.2);
}

.service-list-item.active::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: var(--primary-cyan);
}

.service-item-icon {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: var(--bg-secondary);
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    transition: all 0.3s;
}

.service-list-item.active .service-item-icon {
    background: var(--primary-cyan);
    color: #004B87;
}

.service-item-content {
    flex: 1;
}

.service-item-content h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
    color: var(--text-primary);
}

.service-item-content p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.service-item-arrow {
    opacity: 0;
    transform: translateX(10px);
    transition: all 0.3s;
    color: var(--primary-cyan);
}

.service-list-item.active .service-item-arrow {
    opacity: 1;
    transform: translateX(0);
}

/* Right Column: Preview */
.services-preview {
    position: relative;
    height: 500px;
}

.preview-card-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: var(--shadow-xl);
}

.preview-image-container {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
}

.preview-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.preview-overlay {
    position: absolute;
    inset: 0;
    /* slightly lighter overlay so image remains visible under content */
    background: linear-gradient(to top, rgba(0, 0, 0, 0.55) 0%, transparent 60%);
}

.preview-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem;
    /* glass-style but lighter so it doesn't fully hide the image */
    background: rgba(15, 23, 42, 0.55);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    color: white;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    transform: translateY(0);
    transition: transform 0.3s ease;
    /* limit how much of the image the content can cover */
    max-height: 45vh;
    overflow-y: auto;
}

.preview-card-wrapper:hover .preview-content {
    transform: translateY(-5px);
}

.preview-content h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
    /* strong readable heading on the glass background */
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.preview-features {
    list-style: none;
    padding: 0;
    margin-bottom: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.preview-features li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    opacity: 0.9;
}

.preview-features .dot {
    width: 6px;
    height: 6px;
    background: var(--accent-amber);
    border-radius: 50%;
}

.services-cta-mobile {
    display: none;
}

/* Responsive */
@media (max-width: 992px) {
    .services-showcase {
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .services-preview {
        height: 400px;
        order: -1;
        /* Show image first on mobile */
    }

    .services-cta-mobile {
        display: block;
        margin-top: 1rem;
    }
}

@media (max-width: 768px) {
    .services-preview {
        height: 300px;
    }

    /* Make the preview content compact on small screens so it doesn't cover the whole image */
    .preview-content {
        padding: 1.5rem;
        bottom: 1rem;
        right: 1rem;
        left: 1rem;
        border-radius: 12px;
        max-height: 35vh;
    }

    /* Hide the long features list on mobile to reduce vertical space usage */
    .preview-features {
        display: none;
    }

    .preview-content h3 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    .service-list-item {
        padding: 1rem;
    }
}
```

## File: components/sections/Hero/Hero.css

- Extension: .css
- Language: unknown
- Size: 11267 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```unknown
/* ========================================
   PREMIUM HERO SLIDER
   ======================================== */

.hero-slider-premium {
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 700px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* ========================================
   BACKGROUND SLIDER
   ======================================== */

.hero-slider-backgrounds {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.hero-slider-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    will-change: opacity;
    transform: translateZ(0);
}

/* ========================================
   GLASSMORPHISM EFFECT
   ======================================== */

.glass {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px rgba(10, 15, 30, 0.15);
}

/* ========================================
   CONTENT
   ======================================== */

.hero-slider-content-wrapper {
    position: relative;
    z-index: 2;
    width: 100%;
    padding: 2rem;
}

.hero-slider-content {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    color: #fff;
}

/* ========================================
   DESTINATION TAG
   ======================================== */

.hero-destination-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 1.75rem;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 2rem;
    animation: tagFade 0.8s ease-out;
}

.tag-icon {
    font-size: 1.3rem;
}

@keyframes tagFade {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* ========================================
   HEADLINE & SUBTITLE
   ======================================== */

.hero-slider-headline {
    font-size: clamp(2.5rem, 7vw, 5.5rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    animation: contentFadeIn 0.8s ease-out 0.1s backwards;
}

.gradient-text {
    background: linear-gradient(135deg, #fff 0%, #f0f9ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: none;
    /* Remove shadow for gradient text */
}

.hero-slider-subtitle {
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.95);
    max-width: 650px;
    margin: 0 auto 3rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    animation: contentFadeIn 0.8s ease-out 0.2s backwards;
}

@keyframes contentFadeIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ========================================
   CTA BUTTONS
   ======================================== */

.hero-slider-cta {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    animation: contentFadeIn 0.8s ease-out 0.3s backwards;
}

.hero-btn-hero,
.hero-btn-hero-outline {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.1rem 2.5rem;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

/* Primary Button (Gold Gradient) */
.hero-btn-hero {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
    color: #fff;
    box-shadow:
        0 4px 20px rgba(8, 145, 178, 0.4),
        0 8px 30px rgba(245, 158, 11, 0.2);
}

.hero-btn-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.6s;
}

.hero-btn-hero:hover::before {
    left: 100%;
}

.hero-btn-hero:hover {
    transform: translateY(-2px);
    box-shadow:
        0 6px 25px rgba(8, 145, 178, 0.5),
        0 12px 40px rgba(245, 158, 11, 0.3);
}

/* Outline Button (Glassmorphism) */
.hero-btn-hero-outline {
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
    border: 2px solid rgba(255, 255, 255, 0.4);
}

.hero-btn-hero-outline:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.6);
    transform: translateY(-2px);
}

.btn-arrow {
    font-size: 1.3rem;
    transition: transform 0.3s;
}

.hero-btn-hero:hover .btn-arrow {
    transform: translateX(-5px);
}

/* ========================================
   NAVIGATION ARROWS
   ======================================== */

.hero-nav-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0.8;
}

.hero-nav-arrow:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1.1);
    background: rgba(255, 255, 255, 0.25);
}

.hero-nav-prev {
    right: 3rem;
    /* RTL: previous is on right */
}

.hero-nav-next {
    left: 3rem;
    /* RTL: next is on left */
}

/* ========================================
   CONTROLS CONTAINER
   ======================================== */

.hero-slider-controls {
    position: absolute;
    bottom: 3rem;
    left: 0;
    right: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;
    gap: 2rem;
}

/* ========================================
   SLIDE COUNTER
   ======================================== */

.slide-counter {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Courier New', monospace;
}

.slide-counter .current {
    font-size: 1.3rem;
    color: var(--accent-color);
}

.slide-counter .separator {
    opacity: 0.5;
    margin: 0 0.25rem;
}

.slide-counter .total {
    opacity: 0.8;
}

/* ========================================
   DOT INDICATORS
   ======================================== */

.slide-indicators-premium {
    display: flex;
    gap: 0.75rem;
    align-items: center;
}

.slide-dot-premium {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    border: none;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 0;
    position: relative;
}

.slide-dot-premium:hover {
    background: rgba(255, 255, 255, 0.6);
    transform: scale(1.2);
}

.slide-dot-premium.active {
    width: 35px;
    border-radius: 50px;
    background: #fff;
    animation: indicatorPulse 2s ease-in-out infinite;
}

@keyframes indicatorPulse {

    0%,
    100% {
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }

    50% {
        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
    }
}

/* ========================================
   PROGRESS BAR
   ======================================== */

.slide-progress {
    width: 200px;
    height: 4px;
    border-radius: 50px;
    padding: 0;
    overflow: hidden;
}

.progress-fill-premium {
    height: 100%;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    box-shadow: 0 0 10px rgba(8, 145, 178, 0.6);
    transition: width 100ms linear;
}

/* ========================================
   RESPONSIVE DESIGN
   ======================================== */

/* Tablets */
@media (max-width: 768px) {
    .hero-slider-premium {
        min-height: 600px;
    }

    .hero-slider-headline {
        font-size: clamp(2rem, 6vw, 3.5rem);
    }

    .hero-slider-subtitle {
        font-size: 1.1rem;
        margin-bottom: 2.5rem;
    }

    .hero-slider-cta {
        flex-direction: column;
        gap: 0.75rem;
    }

    .hero-btn-hero,
    .hero-btn-hero-outline {
        width: 100%;
        justify-content: center;
        padding: 1rem 2rem;
        font-size: 1rem;
    }

    .hero-slider-controls {
        padding: 0 2rem;
        bottom: 2rem;
    }

    .slide-counter {
        font-size: 0.9rem;
        padding: 0.6rem 1.2rem;
    }

    .slide-progress {
        width: 150px;
    }
}

/* Mobile */
@media (max-width: 480px) {
    .hero-slider-premium {
        min-height: 550px;
    }

    .hero-slider-content-wrapper {
        padding: 1rem;
    }

    .hero-destination-tag {
        padding: 0.65rem 1.3rem;
        font-size: 0.9rem;
        gap: 0.5rem;
    }

    .tag-icon {
        font-size: 1.1rem;
    }

    .hero-slider-headline {
        font-size: clamp(1.8rem, 7vw, 2.5rem);
        margin-bottom: 1rem;
    }

    .hero-slider-subtitle {
        font-size: 1rem;
        margin-bottom: 2rem;
    }

    .hero-slider-controls {
        flex-direction: column;
        align-items: center;
        padding: 0 1.5rem;
        gap: 1rem;
        bottom: 1.5rem;
    }

    .slide-counter {
        font-size: 0.85rem;
        padding: 0.5rem 1rem;
    }

    .slide-counter .current {
        font-size: 1.1rem;
    }

    .slide-indicators-premium {
        gap: 0.6rem;
    }

    .slide-dot-premium {
        width: 8px;
        height: 8px;
    }

    .slide-dot-premium.active {
        width: 28px;
    }

    .slide-progress {
        width: 100%;
        max-width: 250px;
    }

    .hero-nav-arrow {
        width: 44px;
        height: 44px;
        opacity: 0.6;
    }

    .hero-nav-prev {
        right: 1rem;
    }

    .hero-nav-next {
        left: 1rem;
    }
}

/* ========================================
   PERFORMANCE OPTIMIZATIONS
   ======================================== */

.hero-slider-background,
.hero-slider-content,
.progress-fill-premium {
    transform: translateZ(0);
    backface-visibility: hidden;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {

    .hero-slider-background,
    .hero-slider-content,
    .slide-dot-premium,
    .hero-btn-hero,
    .hero-btn-hero-outline,
    .hero-destination-tag,
    .hero-slider-headline,
    .hero-slider-subtitle,
    .hero-slider-cta {
        transition: none !important;
        animation: none !important;
    }
}
```

## File: components/sections/Hero/index.jsx

- Extension: .jsx
- Language: javascript
- Size: 9624 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMapPin, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import './Hero.css';

// Import backgrounds
import makkahBg from '/hero_makkah_background_1764893075599.jpg';
import mountainBg from '/hero_mountain_background_1764893090134.jpg';
import beachBg from '/beach.jpg';
import dubaiBg from '/dubai.jpg';
const heroSlides = [
{
        id: 1,
        theme: 'makkah',
        background: makkahBg,
        tag: 'رحلة روحانية',
        headline: 'زيارة بيت الله الحرام',
        subtitle: 'رحلة الحج والعمرة بأفضل الخدمات والأسعار المميزة',
        cta: 'احجز رحلتك الآن',
        gradient: 'linear-gradient(180deg, rgba(8,145,178,0.2) 0%, rgba(8,145,178,0.75) 100%)'
    },
    {
        id: 2,
        theme: 'mountain',
        background: mountainBg,
        tag: 'مغامرة جبلية',
        headline: 'قمم الألب الخلابة',
        subtitle: 'تجربة فريدة في أجمل المناظر الطبيعية الجبلية',
        cta: 'استكشف الجبال',
        gradient: 'linear-gradient(180deg, rgba(99,102,241,0.2) 0%, rgba(99,102,241,0.75) 100%)'
    },
    {
        id: 3,
        theme: 'beach',
        background: beachBg,
        tag: 'جنة استوائية',
        headline: 'شواطئ المالديف الساحرة',
        subtitle: 'استرخ في أجمل الجزر الاستوائية بمياهها الفيروزية',
        cta: 'اكتشف الشواطئ',
        gradient: 'linear-gradient(180deg, rgba(6,182,212,0.2) 0%, rgba(6,182,212,0.75) 100%)'
    },
    {
        id: 4,
        theme: 'city',
        background: dubaiBg, // Placeholder
        tag: 'مدينة عصرية',
        headline: 'دبي المدينة المستقبلية',
        subtitle: 'استكشف عجائب العمارة الحديثة والحياة الفاخرة',
        cta: 'اكتشف المدن',
        gradient: 'linear-gradient(180deg, rgba(245,158,11,0.2) 0%, rgba(245,158,11,0.75) 100%)'
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [progress, setProgress] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setProgress(0);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
        setProgress(0);
    }, []);

    const goToSlide = useCallback((index) => {
        setCurrentSlide(index);
        setProgress(0);
    }, []);

    // Auto-play with progress
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    nextSlide();
                    return 0;
                }
                return prev + 2.86; // 2.86% every 100ms = 3.5 seconds
            });
        }, 100);

        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    const currentSlideData = heroSlides[currentSlide];

    return (
        <section
            className="hero-slider-premium"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Background Slider */}
            <div className="hero-slider-backgrounds">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        className="hero-slider-background"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                        style={{
                            backgroundImage: `${currentSlideData.gradient}, url(${currentSlideData.background})`
                        }}
                    />
                </AnimatePresence>
            </div>

            {/* Content */}
            <div className="hero-slider-content-wrapper">
                <div className="container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            className="hero-slider-content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Destination Tag */}
                            <motion.div
                                className="hero-destination-tag glass"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            >
                                <FiMapPin className="tag-icon" />
                                <span>{currentSlideData.tag}</span>
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                className="hero-slider-headline gradient-text"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                            >
                                {currentSlideData.headline}
                            </motion.h1>

                            {/* Subtitle */}
                            <motion.p
                                className="hero-slider-subtitle"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                            >
                                {currentSlideData.subtitle}
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                className="hero-slider-cta"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                            >
                                <Link to="/destinations" className="hero-btn-hero">
                                    <span>{currentSlideData.cta}</span>
                                    <span className="btn-arrow">←</span>
                                </Link>
                                <Link to="/contact" className="hero-btn-hero-outline glass">
                                    تواصل معنا
                                </Link>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                className="hero-nav-arrow hero-nav-prev glass"
                onClick={prevSlide}
                aria-label="الشريحة السابقة"
            >
                <FiArrowRight size={24} />
            </button>
            <button
                className="hero-nav-arrow hero-nav-next glass"
                onClick={nextSlide}
                aria-label="الشريحة التالية"
            >
                <FiArrowLeft size={24} />
            </button>

            {/* Controls Container */}  
            <div className="hero-slider-controls">
                {/* Slide Counter */}
                <div className="slide-counter glass">
                    <span className="current">{String(currentSlide + 1).padStart(2, '0')}</span>
                    <span className="separator">/</span>
                    <span className="total">{String(heroSlides.length).padStart(2, '0')}</span>
                </div>

                {/* Dot Indicators */}
                <div className="slide-indicators-premium">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            className={`slide-dot-premium ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`الذهاب إلى الشريحة ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="slide-progress glass">
                    <div
                        className="progress-fill-premium"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;

```

## File: components/widgets/WhatsAppWidget/index.jsx

- Extension: .jsx
- Language: javascript
- Size: 2210 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```javascript
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

```

## File: components/widgets/WhatsAppWidget/WhatsAppWidget.css

- Extension: .css
- Language: unknown
- Size: 1832 bytes
- Created: 2026-01-28 04:15:13
- Modified: 2026-01-28 04:15:13

### Code

```unknown
.whatsapp-widget {
    position: fixed;
    bottom: var(--spacing-lg);
    right: var(--spacing-lg);
    z-index: var(--z-fixed);
    width: 60px;
    height: 60px;
    background-color: #25D366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
    cursor: pointer;
    text-decoration: none;
}

.whatsapp-icon {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
}

.whatsapp-pulse {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #25D366;
    border-radius: 50%;
    z-index: 1;
    animation: pulse-ring 2s infinite;
}

@keyframes pulse-ring {
    0% {
        transform: scale(1);
        opacity: 0.6;
    }

    100% {
        transform: scale(1.5);
        opacity: 0;
    }
}

.whatsapp-tooltip {
    position: absolute;
    right: 70px;
    top: 50%;
    transform: translateY(-50%) translateX(10px);
    background: white;
    color: var(--text-primary);
    padding: 8px 16px;
    border-radius: var(--radius-md);
    font-size: var(--font-sm);
    font-weight: 600;
    white-space: nowrap;
    box-shadow: var(--shadow-md);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);
}

.whatsapp-widget:hover .whatsapp-tooltip {
    opacity: 1;
    visibility: visible;
    transform: translateY(-50%) translateX(0);
}

/* Mobile Adjustments */
@media (max-width: 768px) {
    .whatsapp-widget {
        bottom: var(--spacing-md);
        right: var(--spacing-md);
        width: 50px;
        height: 50px;
    }

    .whatsapp-tooltip {
        display: none;
    }
}
```

