import { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';
import { FaShieldAlt, FaTrophy, FaTools, FaHeadset, FaBuilding, FaHandHoldingHeart } from 'react-icons/fa';
import styles from './TrustSection.module.css';

const Counter = ({ value, duration = 2 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView && ref.current) {
            const controls = animate(0, value, {
                duration: duration,
                onUpdate(value) {
                    ref.current.textContent = Math.round(value);
                }
            });
            return () => controls.stop();
        }
    }, [isInView, value, duration]);

    return <span ref={ref}>0</span>;
};

const trustPillars = [
    {
        icon: <FaShieldAlt />,
        title: 'Unmatched Durability',
        desc: 'Our premium zinc-coated sheets are engineered to resist corrosion in the harshest industrial environments for decades.'
    },
    {
        icon: <FaTrophy />,
        title: '8+ Years of Experience',
        desc: 'A dedicated legacy of delivering precision-engineered roofing solutions to over 500+ satisfied industrial and commercial clients.'
    },
    {
        icon: <FaTools />,
        title: 'Zero Leakage Guarantee',
        desc: 'Advanced on-site fabrication and professional installation techniques ensure a 100% leak-proof overhead system.'
    },
    {
        icon: <FaHeadset />,
        title: 'Commitment to Support',
        desc: 'From technical design consultation to post-installation maintenance, we stand by our work for the life of your building.'
    },
    {
        icon: <FaBuilding />,
        title: 'Best Service in Navi Mumbai',
        desc: 'We are the top-rated industrial roofing partners in Navi Mumbai, known for regional expertise and rapid response times.'
    },
    {
        icon: <FaHandHoldingHeart />,
        title: 'Transparent Quality',
        desc: 'We prioritize honest materials and transparent pricing, building long-term trust through unwavering structural integrity.'
    }
];

const TrustSection = () => {
    return (
        <section className={styles.trustSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.span
                        className={styles.sublabel}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        THE ZINCO EDGE
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        PUF Panel & Metal Roofing Experts in Navi Mumbai
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        We don't just provide roofing; we provide long-term protection for your industrial assets.
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {trustPillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            className={styles.pillarCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.iconWrapper}>
                                {pillar.icon}
                            </div>
                            <h3>{pillar.title}</h3>
                            <p>{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.statsBanner}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>
                            <Counter value={500} />+
                        </span>
                        <span className={styles.statLabel}>Projects Completed</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>
                            <Counter value={8} />+
                        </span>
                        <span className={styles.statLabel}>Years Experience</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>
                            <Counter value={100} />%
                        </span>
                        <span className={styles.statLabel}>Leakage Proof</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TrustSection;
