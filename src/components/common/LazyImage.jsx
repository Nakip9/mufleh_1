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
