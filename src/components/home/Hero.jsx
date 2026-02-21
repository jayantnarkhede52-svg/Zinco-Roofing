import { motion } from 'framer-motion';
import { useRef } from 'react';
import Button from '../shared/Button';
import { SOCIAL_LINKS } from '../../utils/constants';
import styles from './Hero.module.css';

import heroImage from '../../assets/home-hero.webp';

const Hero = () => {
    const heroRef = useRef(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section ref={heroRef} className={styles.hero}>
            <div className={styles.background}>
                <img
                    className={styles.heroImage}
                    src={heroImage}
                    alt="Professional roofing solutions in Navi Mumbai - Zinco Roofing"
                    loading="eager"
                />
                <div className={styles.overlay}></div>
                <div className={styles.gradientMesh}></div>
                <div className={styles.particles}>
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={styles.particle}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0.1, 0.25, 0.1],
                                y: [0, -30, 0],
                            }}
                            transition={{
                                duration: 8 + Math.random() * 4,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                                ease: "easeInOut",
                            }}
                            style={{
                                left: `${10 + Math.random() * 80}%`,
                                top: `${10 + Math.random() * 80}%`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Content */}
            <motion.div
                className={styles.content}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className={styles.titleWrapper}>
                    <motion.h1 className={styles.title} variants={titleVariants}>
                        Roofing Solutions in Navi Mumbai
                    </motion.h1>
                    <motion.div className={styles.underline} variants={itemVariants} />
                </motion.div>

                <motion.p className={styles.subtitle} variants={itemVariants}>
                    Professional Roofing Solutions for
                    <span className={styles.highlight}> Navi Mumbai & Beyond</span>
                </motion.p>

                <motion.p className={styles.description} variants={itemVariants}>
                    Expert roof installation, repair, and waterproofing services with 10+ years of excellence
                </motion.p>

                <motion.div className={styles.buttonGroup} variants={itemVariants}>
                    <Button href={SOCIAL_LINKS.whatsapp} size="lg" target="_blank" rel="noopener noreferrer">
                        Get Free Quote
                    </Button>
                    <Button href="/products" variant="outline" size="lg">
                        View Our Products
                    </Button>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className={styles.scrollIndicator}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <a href="#services-showcase" className={styles.scrollLink}>
                        <motion.div
                            className={styles.scrollArrow}
                            animate={{
                                y: [0, 8, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            ↓
                        </motion.div>
                        <span>Scroll to Explore</span>
                    </a>
                </motion.div>
            </motion.div>

            {/* Decorative Elements - Subtle */}
            <div className={styles.decorativeCircle1}></div>
            <div className={styles.decorativeCircle2}></div>
        </section>
    );
};

export default Hero;
