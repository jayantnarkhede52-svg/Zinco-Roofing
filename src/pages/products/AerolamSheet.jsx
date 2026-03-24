import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImg from '../../assets/productshero/aerolam-hero.webp';
import styles from './ProductCategory.module.css';

const AerolamSheet = () => {
    const navigate = useNavigate();
    const features = [
        'Advanced aerolam insulation in navi mumbai',
        'Top aerolam insulation in navi mumbai',
        'Balanced aerolam insulation in navi mumbai',
        'Expert aerolam insulation in navi mumbai',
        'Quality aerolam insulation in navi mumbai',
        'Best aerolam insulation in navi mumbai'
    ];

    const specifications = [
        { label: 'Material', value: 'Cross-linked Polyethylene / Bubble Foil' },
        { label: 'Facing', value: 'Double / Single Sided Reinforced Foil' },
        { label: 'Thickness', value: '3mm / 4mm / 8mm / 10mm' },
        { label: 'Reflectivity', value: '96% - 97%' },
        { label: 'Roll Width', value: '1.2m / 1.35m' },
        { label: 'Application', value: 'Under-deck / Over-deck' }
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
                title="Aerolam Thermal Insulation Sheets in Navi Mumbai | Zinco"
                description="Reflective radiant barrier insulation (Aerolam) for industrial sheds in Taloja, Panvel, and Mumbai. Reduces heat by up to 10°C. Energy efficient."
                keywords="aerolam insulation, bubble foil insulation, radiant barrier, thermal insulation sheet, roof insulation mumbai"
                canonicalUrl="https://www.zincoroof.com/products/aerolam-sheet"
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
                            aerolam insulation in navi mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Keep your buildings cool and energy-efficient with advanced <strong>aerolam insulation in navi mumbai</strong> radiant barrier.
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
                                <h2>Complete aerolam insulation in navi mumbai solutions</h2>
                                <p>
                                    At Zinco Roofing Solution, we provide the best <strong>aerolam insulation in navi mumbai</strong>. Our <strong>aerolam insulation in navi mumbai</strong> are designed for massive industrial cooling.
                                </p>
                                <p>
                                    Using <strong>aerolam insulation in navi mumbai</strong> ensures a cooler factory floor. Our <strong>aerolam insulation in navi mumbai</strong> are built for the Mumbai climate.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Efficiency of aerolam insulation in navi mumbai</h3>
                                <p>
                                    A high-quality <strong>aerolam insulation in navi mumbai</strong> improves energy savings. Our <strong>aerolam insulation in navi mumbai</strong> are balanced for 97% heat reflection.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Why Zinco for aerolam insulation in navi mumbai?</h3>
                                <ul className={styles.styledList}>
                                    <li><strong>Effective:</strong> Every <strong>aerolam insulation in navi mumbai</strong> reflects radiant heat.</li>
                                    <li><strong>Safe:</strong> Our <strong>aerolam insulation in navi mumbai</strong> is fiber-free and non-toxic.</li>
                                    <li><strong>Quality:</strong> We ensure perfect installation of <strong>aerolam insulation in navi mumbai</strong>.</li>
                                    <li><strong>Value:</strong> Our <strong>aerolam insulation in navi mumbai</strong> is cost-effective.</li>
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
                        <h2>Specifications of aerolam insulation in navi mumbai</h2>
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
                        <h2>Features of aerolam insulation in navi mumbai</h2>
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
                                <h2>Modern aerolam insulation in navi mumbai</h2>
                                <p>
                                    Our <strong>aerolam insulation in navi mumbai</strong> is ideal for sheds. Once installed, the <strong>aerolam insulation in navi mumbai</strong> provides a vapor barrier.
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
                        <h2>FAQs on aerolam insulation in navi mumbai</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>Is <strong>aerolam insulation in navi mumbai</strong> effective?</h4>
                                <p>Yes, <strong>aerolam insulation in navi mumbai</strong> reflects 97% of radiant heat.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Does <strong>aerolam insulation in navi mumbai</strong> stop condensation?</h4>
                                <p>Yes, <strong>aerolam insulation in navi mumbai</strong> acts as a continuous vapor barrier.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Is <strong>aerolam insulation in navi mumbai</strong> fire safe?</h4>
                                <p>Yes, our <strong>aerolam insulation in navi mumbai</strong> is FR grade.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Get Best Quote for aerolam insulation in navi mumbai</h3>
                            <p>Contact the leading manufacturer for <strong>aerolam insulation in navi mumbai</strong> today.</p>
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

export default AerolamSheet;
