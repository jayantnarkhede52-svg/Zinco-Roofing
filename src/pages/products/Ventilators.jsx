import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaWind, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImg from '../../assets/productshero/ventilator-hero.webp';
import logo from '../../assets/logo.webp';
import styles from './ProductCategory.module.css';

const Ventilators = () => {
    const navigate = useNavigate();
    const features = [
        'Roof Ventilator in Navi Mumbai Experts',
        'Top Roof Ventilator in Navi Mumbai',
        'Energy-free Roof Ventilator in Navi Mumbai',
        'Durable Roof Ventilator in Navi Mumbai',
        'Industrial Roof Ventilator in Navi Mumbai',
        'Maintenance-free Roof Ventilator in Navi Mumbai'
    ];

    const specifications = [
        { label: 'Type', value: 'Wind Turbo Ventilator' },
        { label: 'Material', value: 'Aluminum / SS 304' },
        { label: 'Sizes', value: '21" & 24" readily available' },
        { label: 'Bearing', value: 'Double Ball Bearing (Sealed)' },
        { label: 'Warranty', value: '10 Years Performance' },
        { label: 'Base Plate', value: 'Polycarbonate / Metal' }
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
                title="Roof Ventilator Manufacturer in Navi Mumbai | Free Site Visit"
                description="Get high-quality roof ventilator in Navi Mumbai from an experienced manufacturer. Free site visit, fast delivery and expert installation available."
                keywords="Roof Ventilator in Navi Mumbai, turbo ventilators navi mumbai, roof ventilators in Navi Mumbai, Industrial ventilation system, Roof Ventilator Price in Navi Mumbai"
                canonicalUrl="https://www.zincoroof.com/products/ventilators"
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
                        <motion.div variants={itemVariants} className={styles.heroLogoWrapper}>
                            <img src={logo} alt="Roof Ventilator in Navi Mumbai logo" className={styles.heroTitleLogo} />
                        </motion.div>
                        <motion.h1 variants={itemVariants}>
                            roof ventilator in navi mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Industrial wind-driven <strong>roof ventilator in navi mumbai</strong> for factories and warehouses in Taloja, Panvel, and Mumbai.
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
                                <h2>Expert roof ventilator in navi mumbai solutions</h2>
                                <p>
                                    At Zinco Roofing Solution, we are the leading provider of <strong>roof ventilator in navi mumbai</strong>. Our <strong>roof ventilator in navi mumbai</strong> systems are designed for aerodynamic efficiency.
                                </p>
                                <p>
                                    This <strong>roof ventilator in navi mumbai</strong> works 24/7 without electricity. Installing a <strong>roof ventilator in navi mumbai</strong> ensures constant fresh air flow in your industrial facility.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Benefits of installing a roof ventilator in navi mumbai</h3>
                                <p>
                                    A high-quality <strong>roof ventilator in navi mumbai</strong> helps in removing stagnant heat. Our <strong>roof ventilator in navi mumbai</strong> is balanced to withstand heavy Mumbai monsoons effortlessly.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Why Zinco for roof ventilator in navi mumbai?</h3>
                                <ul className={styles.styledList}>
                                    <li><strong>Zero Power Cost:</strong> Our <strong>roof ventilator in navi mumbai</strong> uses wind energy exclusively.</li>
                                    <li><strong>Durable Build:</strong> Every <strong>roof ventilator in navi mumbai</strong> is made from Aluminum or SS 304.</li>
                                    <li><strong>Expert Setup:</strong> We provide professional installation for every <strong>roof ventilator in navi mumbai</strong>.</li>
                                    <li><strong>Lifetime Value:</strong> Our <strong>roof ventilator in navi mumbai</strong> requires zero maintenance.</li>
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
                        <h2>Specifications of our roof ventilator in navi mumbai</h2>
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
                        <h2>Features of Zinco roof ventilator in navi mumbai</h2>
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
                                <h2>Maintenance-free roof ventilator in navi mumbai</h2>
                                <p>
                                    Our <strong>roof ventilator in navi mumbai</strong> is a one-time investment. Once installed, the <strong>roof ventilator in navi mumbai</strong> keeps your factory cool for years without extra costs.
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
                        <h2>FAQs on roof ventilator in navi mumbai</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>How many <strong>roof ventilator in navi mumbai</strong> do I need?</h4>
                                <p>Our team calculates the optimal number of <strong>roof ventilator in navi mumbai</strong> based on your facility's volume.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Is the <strong>roof ventilator in navi mumbai</strong> noisy?</h4>
                                <p>No, our <strong>roof ventilator in navi mumbai</strong> operates almost silently due to high-precision bearings.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Does rain enter through the <strong>roof ventilator in navi mumbai</strong>?</h4>
                                <p>Our <strong>roof ventilator in navi mumbai</strong> repels rainwater even during heavy Mumbai monsoons.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Get Best Quote for roof ventilator in navi mumbai</h3>
                            <p>Contact the leading manufacturer for <strong>roof ventilator in navi mumbai</strong> today.</p>
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

export default Ventilators;
