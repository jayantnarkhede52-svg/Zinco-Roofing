import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImg from '../../assets/productshero/rockwool-hero.webp';
import styles from './ProductCategory.module.css';

const RockwoolGlasswool = () => {
    const navigate = useNavigate();
    const features = [
        'Advanced rockwool glasswool insulation in navi mumbai',
        'Top rockwool glasswool insulation in navi mumbai',
        'Balanced rockwool glasswool insulation in navi mumbai',
        'Expert rockwool glasswool insulation in navi mumbai',
        'Quality rockwool glasswool insulation in navi mumbai',
        'Best rockwool glasswool insulation in navi mumbai'
    ];

    const specifications = [
        { label: 'Profile Type', value: 'High Rib (5 Crests + 3 Mini Ribs)' },
        { label: 'Glasswool Density', value: '10 - 50 kg/m³' },
        { label: 'Rockwool Density', value: '50 - 200 kg/m³' },
        { label: 'Glasswool Thickness', value: '20mm - 200mm' },
        { label: 'Rockwool Thickness', value: '30mm - 100mm' },
        { label: 'Temperature Range', value: 'Glasswool: 230-260°C | Rockwool: 700-850°C' }
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className={styles.productPage}>
            <SEO
                title="Rockwool & Glasswool Roof Panels in Navi Mumbai | Zinco"
                description="Fire-resistant Rockwool and Glasswool insulated roof panels for industrial sheds and sound studios in Taloja, Rabale, and Mumbai. High acoustic control."
                keywords="rockwool panels, glasswool insulation, fire resistant roofing, acoustic roof panels mumbai, industrial insulation"
                canonicalUrl="https://zincoroof.com/products/rockwool-glasswool"
            />
            <Helmet>
                <link rel="preload" as="image" href={heroImg} fetchpriority="high" />
            </Helmet>
            <div className={styles.hero} style={{ '--hero-image': `url(${heroImg})` }}>
                <div className={styles.heroOverlay} />
                <div className={styles.container}>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <button onClick={() => navigate(-1)} className={styles.backLink} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                            <FaArrowLeft /> Back to Products
                        </button>
                        <motion.span className={styles.sublabel} variants={itemVariants}>
                            PRECISION & DURABILITY
                        </motion.span>
                        <motion.h1 variants={itemVariants}>
                            rockwool glasswool insulation in navi mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            High-performance panels with superior <strong>rockwool glasswool insulation in navi mumbai</strong> safety and control.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <motion.section 
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.contentBlock}>
                            <Card variant="solid" className={styles.contentCard}>
                                <h2>Complete rockwool glasswool insulation in navi mumbai solutions</h2>
                                <p>
                                    At Zinco Roofing Solution, we provide the best <strong>rockwool glasswool insulation in navi mumbai</strong>. Our <strong>rockwool glasswool insulation in navi mumbai</strong> are designed for massive industrial sheds.
                                </p>
                                <p>
                                    Using <strong>rockwool glasswool insulation in navi mumbai</strong> ensures fire safety for decades. Our <strong>rockwool glasswool insulation in navi mumbai</strong> are built for the heavy Mumbai monsoons.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Efficiency of rockwool glasswool insulation in navi mumbai</h3>
                                <p>
                                    A high-quality <strong>rockwool glasswool insulation in navi mumbai</strong> improves acoustic control. Our <strong>rockwool glasswool insulation in navi mumbai</strong> are balanced for thermal efficiency.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Why Zinco for rockwool glasswool insulation in navi mumbai?</h3>
                                <ul className={styles.styledList}>
                                    <li><strong>Fire Safe:</strong> Every <strong>rockwool glasswool insulation in navi mumbai</strong> resists high heat.</li>
                                    <li><strong>Acoustic:</strong> Our <strong>rockwool glasswool insulation in navi mumbai</strong> provides sound damping.</li>
                                    <li><strong>Quality:</strong> We ensure perfect installation of <strong>rockwool glasswool insulation in navi mumbai</strong>.</li>
                                    <li><strong>Value:</strong> Our <strong>rockwool glasswool insulation in navi mumbai</strong> is a smart industrial investment.</li>
                                </ul>
                            </Card>
                        </div>
                    </motion.section>

                    <motion.section 
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Specifications of rockwool glasswool insulation in navi mumbai</h2>
                        <Card variant="glass">
                            <div className={styles.specsTable}>
                                {specifications.map((spec, index) => (
                                    <div key={index} className={styles.specRow}>
                                        <div className={styles.specLabel}>{spec.label}</div>
                                        <div className={styles.specValue}>{spec.value}</div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </motion.section>

                    <motion.section 
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Features of rockwool glasswool insulation in navi mumbai</h2>
                        <div className={styles.featuresGrid}>
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.featureItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <FaCheckCircle className={styles.checkIcon} />
                                    <span>{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    <motion.section 
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.contentBlock}>
                            <Card variant="solid" className={styles.contentCard}>
                                <h2>Modern rockwool glasswool insulation in navi mumbai</h2>
                                <p>
                                    Our <strong>rockwool glasswool insulation in navi mumbai</strong> is ideal for sound studios. Once installed, the <strong>rockwool glasswool insulation in navi mumbai</strong> protects high-value equipment.
                                </p>
                            </Card>
                        </div>
                    </motion.section>

                    <motion.section
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>FAQs on rockwool glasswool insulation in navi mumbai</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>Is <strong>rockwool glasswool insulation in navi mumbai</strong> fire safe?</h4>
                                <p>Yes, <strong>rockwool glasswool insulation in navi mumbai</strong> supports up to 850°C.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Does <strong>rockwool glasswool insulation in navi mumbai</strong> stop noise?</h4>
                                <p>Yes, <strong>rockwool glasswool insulation in navi mumbai</strong> has excellent sound absorption.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Is <strong>rockwool glasswool insulation in navi mumbai</strong> durable?</h4>
                                <p>Yes, <strong>rockwool glasswool insulation in navi mumbai</strong> is inorganic and lasts decades.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Get Best Quote for rockwool glasswool insulation in navi mumbai</h3>
                            <p>Contact the leading manufacturer for <strong>rockwool glasswool insulation in navi mumbai</strong> today.</p>
                            <div className={styles.ctaButtons}>
                                <Button size="lg" href="/contact">Get Estimate</Button>
                                <Button size="lg" variant="outline" href="tel:+919967203090">Call Expert</Button>
                            </div>
                        </Card>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default RockwoolGlasswool;
