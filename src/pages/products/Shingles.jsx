import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImg from '../../assets/productshero/shingles-hero.webp';
import styles from './ProductCategory.module.css';

const Shingles = () => {
    const navigate = useNavigate();
    const features = [
        'Advanced roofing shingles in mumbai',
        'Top roofing shingles in mumbai',
        'Balanced roofing shingles in mumbai',
        'Expert roofing shingles in mumbai',
        'Quality roofing shingles in mumbai',
        'Best roofing shingles in mumbai'
    ];

    const specifications = [
        { label: 'Material', value: 'Fiberglass Asphalt Shingles' },
        { label: 'Style', value: '3-Tab / Architectural / Laminate' },
        { label: 'Weight', value: '10kg - 13kg per m²' },
        { label: 'Warranty', value: '20 - 50 Years' },
        { label: 'Installation', value: 'Self-Adhesive with Nails' },
        { label: 'Regions', value: 'Mumbai, Lonavala, Karjat' }
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
                title="Premium Roofing Shingles in Mumbai | Zinco"
                description="Luxury asphalt roofing shingles for villas and resorts in Lonavala, Alibaug, and Karjat. Durable, weather-resistant, and aesthetically superior."
                keywords="roofing shingles mumbai, asphalt shingles, villa roofing, resort roofing lonavala, shingle roof contractors"
                canonicalUrl="https://www.zincoroof.com/products/shingles"
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
                            roofing shingles in mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Elevate your property aesthetics with durable and climate-ready <strong>roofing shingles in mumbai</strong> solutions.
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
                                <h2>Complete roofing shingles in mumbai solutions</h2>
                                <p>
                                    At Zinco Roofing Solution, we provide the best <strong>roofing shingles in mumbai</strong>. Our <strong>roofing shingles in mumbai</strong> are perfect for villas and luxury bungalows.
                                </p>
                                <p>
                                    Using <strong>roofing shingles in mumbai</strong> ensures an elegant roof for decades. Our <strong>roofing shingles in mumbai</strong> are built for the intense Mumbai weather.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Efficiency of roofing shingles in mumbai</h3>
                                <p>
                                    A high-quality <strong>roofing shingles in mumbai</strong> improves property value. Our <strong>roofing shingles in mumbai</strong> are balanced for weather resistance.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Why Zinco for roofing shingles in mumbai?</h3>
                                <ul className={styles.styledList}>
                                    <li><strong>Aesthetics:</strong> Every <strong>roofing shingles in mumbai</strong> offers a premium look.</li>
                                    <li><strong>Resilience:</strong> Our <strong>roofing shingles in mumbai</strong> is impact and fire resistant.</li>
                                    <li><strong>Quality:</strong> We ensure perfect installation of <strong>roofing shingles in mumbai</strong>.</li>
                                    <li><strong>Value:</strong> Our <strong>roofing shingles in mumbai</strong> is a long-term roofing solution.</li>
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
                        <h2>Specifications of roofing shingles in mumbai</h2>
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
                        <h2>Features of roofing shingles in mumbai</h2>
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
                                <h2>Modern roofing shingles in mumbai</h2>
                                <p>
                                    Our <strong>roofing shingles in mumbai</strong> is ideal for resorts. Once installed, the <strong>roofing shingles in mumbai</strong> provides a self-sealing bond.
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
                        <h2>FAQs on roofing shingles in mumbai</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>Is <strong>roofing shingles in mumbai</strong> weather safe?</h4>
                                <p>Yes, <strong>roofing shingles in mumbai</strong> is engineered for high heat.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Does <strong>roofing shingles in mumbai</strong> stop leaks?</h4>
                                <p>Yes, <strong>roofing shingles in mumbai</strong> creates a waterproof seal.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>What is the life of <strong>roofing shingles in mumbai</strong>?</h4>
                                <p>A <strong>roofing shingles in mumbai</strong> can last over 20-50 years.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Get Best Quote for roofing shingles in mumbai</h3>
                            <p>Contact the leading manufacturer for <strong>roofing shingles in mumbai</strong> today.</p>
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

export default Shingles;
