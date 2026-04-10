import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
                        alt="Roofing Contractor in Navi Mumbai"
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
                <div className={styles.badge}>
                    <span className={styles.badgeDot}></span>
                    EXPERT STRUCTURAL SOLUTIONS
                </div>
                
                <motion.h1 
                    className={styles.title}
                    initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', opacity: 0, y: 30 }}
                    animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    Trusted Roofing Contractor<br />in <span>Navi Mumbai</span>
                </motion.h1>

                <p className={styles.description}>
                    Zinco Roofing is the leading <strong>Roofing Contractor in Navi Mumbai</strong> with 8+ years of experience in expert roof installation, PUF panel solutions, and structural shed construction.
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
