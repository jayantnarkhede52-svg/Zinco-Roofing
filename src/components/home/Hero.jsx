import { useRef, useState, useEffect } from 'react';
import Button from '../shared/Button';
import { SOCIAL_LINKS } from '../../utils/constants';
import styles from './Hero.module.css';

import heroPoster from '../../assets/videos/hero-poster.webp';
import mobileHero from '../../assets/projects-hero.webp';

const Hero = () => {
    const heroRef = useRef(null);
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' ? window.innerWidth < 768 : false
    );
    const [videoSrc, setVideoSrc] = useState(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Dynamically import video only on desktop — avoids 1.6MB in mobile bundle
    useEffect(() => {
        if (!isMobile && !videoSrc) {
            import('../../assets/videos/hero-video-compressed.mp4').then((mod) => {
                setVideoSrc(mod.default);
            });
        }
    }, [isMobile, videoSrc]);

    return (
        <section ref={heroRef} className={styles.hero}>
            <div className={styles.background}>
                {isMobile ? (
                    <img src={mobileHero}
                        alt="Zinco Roofing Solutions"
                        className={styles.mobileHeroImage}
                        fetchpriority="high"
                        loading="eager"
                        decoding="async"
                        width="800"
                        height="600"
                    />
                ) : (
                    <video
                        className={styles.heroVideo}
                        src={videoSrc || undefined}
                        poster={heroPoster}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                    />
                )}
                <div className={styles.overlay}></div>
                <div className={styles.gradientMesh}></div>
            </div>

            {/* Content */}
            <div className={styles.content}>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.title}>
                        Roofing Contractor in Navi Mumbai
                    </h1>
                    <div className={styles.underline} />
                </div>

                <p className={styles.subtitle}>
                    Professional Roofing Solutions for
                    <span className={styles.highlight}> Navi Mumbai & Beyond</span>
                </p>

                <p className={styles.description}>
                    Expert Roof installation, PUF panel installation & Structural Painting services with 8+ years experience
                </p>

                <div className={styles.buttonGroup}>
                    <Button href={SOCIAL_LINKS.whatsapp} size="lg" target="_blank" rel="noopener noreferrer">
                        Get Free Quote
                    </Button>
                    <Button href="/premium-roofing-sheets-navi-mumbai" variant="outline" size="lg">
                        View Our Products
                    </Button>
                </div>

                {/* Scroll Indicator */}
                <div className={styles.scrollIndicator}>
                    <a href="#services-showcase" className={styles.scrollLink}>
                        <div className={styles.scrollArrow}>↓</div>
                        <span>Scroll to Explore</span>
                    </a>
                </div>
            </div>

            {/* Decorative Elements - Subtle */}
            <div className={styles.decorativeCircle1}></div>
            <div className={styles.decorativeCircle2}></div>
        </section>
    );
};

export default Hero;
