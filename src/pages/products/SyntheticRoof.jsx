import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaLeaf, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/services-hero.webp';
import styles from './ProductCategory.module.css';

const SyntheticRoof = () => {
    const navigate = useNavigate();
    const features = [
        'Advanced synthetic roofing in navi mumbai',
        'Top synthetic roofing in navi mumbai',
        'Balanced synthetic roofing in navi mumbai',
        'Expert synthetic roofing in navi mumbai',
        'Quality synthetic roofing in navi mumbai',
        'Best synthetic roofing in navi mumbai'
    ];

    const specifications = [
        { label: 'Material', value: 'Synthetic Synthetic Resins (UV Stable)' },
        { label: 'Aesthetic', value: 'Natural Thatch / Straw / Wood' },
        { label: 'Service Life', value: '20 - 30 Years' },
        { label: 'Maintenance', value: 'Zero (No replacement needed)' },
        { label: 'Weight', value: 'Lightweight & Flexible' },
        { label: 'Region', value: 'Resorts & Farmhouses' }
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
                title="Synthetic Thatch & Shingle Roofing in Mumbai | Zinco"
                description="Premium synthetic thatch and shingle roofing for resorts and farmhouses in Alibaug, Lonavala, and Karjat. Fire-retardant and zero maintenance."
                keywords="synthetic thatch roofing, synthetic shingles, resort roofing mumbai, artificial thatch, eco friendly roofing"
                canonicalUrl="https://www.zincoroof.com/products/synthetic-roof"
            />
            <Helmet>
                <link rel="preload" as="image" href={heroImage} fetchpriority="high" />
            </Helmet>
            <div className={styles.hero} style={{ '--hero-image': `url(${heroImage})` }}>
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
                            synthetic roofing in navi mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Elevate your tropical projects with reliable <strong>synthetic roofing in navi mumbai</strong> solutions.
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
                                <h2>Complete synthetic roofing in navi mumbai solutions</h2>
                                <p>
                                    At Zinco Roofing Solution, we provide the best <strong>synthetic roofing in navi mumbai</strong>. Our <strong>synthetic roofing in navi mumbai</strong> are designed for massive resort projects.
                                </p>
                                <p>
                                    Using <strong>synthetic roofing in navi mumbai</strong> ensures a beautiful look for decades. Our <strong>synthetic roofing in navi mumbai</strong> are built for the heavy Mumbai monsoons.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Efficiency of synthetic roofing in navi mumbai</h3>
                                <p>
                                    A high-quality <strong>synthetic roofing in navi mumbai</strong> improves aesthetic value. Our <strong>synthetic roofing in navi mumbai</strong> are balanced for low maintenance.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Why Zinco for synthetic roofing in navi mumbai?</h3>
                                <ul className={styles.styledList}>
                                    <li><strong>Tropical look:</strong> Every <strong>synthetic roofing in navi mumbai</strong> mimics natural straw.</li>
                                    <li><strong>Safe:</strong> Our <strong>synthetic roofing in navi mumbai</strong> is fire retardant.</li>
                                    <li><strong>Quality:</strong> We ensure perfect installation of <strong>synthetic roofing in navi mumbai</strong>.</li>
                                    <li><strong>Value:</strong> Our <strong>synthetic roofing in navi mumbai</strong> is a long-lasting industrial choice.</li>
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
                        <h2>Specifications of synthetic roofing in navi mumbai</h2>
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
                        <h2>Features of synthetic roofing in navi mumbai</h2>
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
                                <h2>Modern synthetic roofing in navi mumbai</h2>
                                <p>
                                    Our <strong>synthetic roofing in navi mumbai</strong> is ideal for theme parks. Once installed, the <strong>synthetic roofing in navi mumbai</strong> prevents rot and mold.
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
                        <h2>FAQs on synthetic roofing in navi mumbai</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>Is <strong>synthetic roofing in navi mumbai</strong> fire safe?</h4>
                                <p>Yes, <strong>synthetic roofing in navi mumbai</strong> has built-in retardants.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Does <strong>synthetic roofing in navi mumbai</strong> rot?</h4>
                                <p>No, <strong>synthetic roofing in navi mumbai</strong> is inorganic and rot-free.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Is <strong>synthetic roofing in navi mumbai</strong> recyclable?</h4>
                                <p>Yes, <strong>synthetic roofing in navi mumbai</strong> is eco-friendly.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Get Best Quote for synthetic roofing in navi mumbai</h3>
                            <p>Contact the leading manufacturer for <strong>synthetic roofing in navi mumbai</strong> today.</p>
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

export default SyntheticRoof;

