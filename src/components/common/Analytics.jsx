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

