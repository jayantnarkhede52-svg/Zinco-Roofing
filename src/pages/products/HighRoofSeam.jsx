import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImg from '../../assets/productshero/highroof-hero.webp';
import styles from './ProductCategory.module.css';

const HighRoofSeam = () => {
    const navigate = useNavigate();
    const features = [
        'Advanced high roof seam in navi mumbai',
        'Top high roof seam in navi mumbai',
        'Balanced high roof seam in navi mumbai',
        'Expert high roof seam in navi mumbai',
        'Quality high roof seam in navi mumbai',
        'Best high roof seam in navi mumbai'
    ];

    const specifications = [
        { label: 'System Type', value: 'Standing Seam Roofing' },
        { label: 'Fastening', value: 'Concealed Clips / Seaming' },
        { label: 'Material', value: 'Galvalume / Aluminum / Copper' },
        { label: 'Seam Height', value: '50mm - 65mm' },
        { label: 'Width', value: '300mm to 500mm' },
        { label: 'Finish', value: 'PVDF / SMP Color Coating' }
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
                title="High Roof Seam Systems in Navi Mumbai | Standing Seam"
                description="Leak-proof standing seam roofing systems (High Roof Seam) for airports, warehouses, and industrial sheds in Taloja and Panvel. Concealed fastener technology."
                keywords="standing seam roofing, high roof seam, leak proof roofing, concealed fastener roofing, industrial roofing mumbai"
                canonicalUrl="https://zincoroof.com/products/high-roof-seam"
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
                            high roof seam in navi mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Ultimate leak protection with advanced <strong>high roof seam in navi mumbai</strong> concealed-fastener technology.
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
                                <h2>Complete high roof seam in navi mumbai solutions</h2>
                                <p>
                                    At Zinco Roofing Solution, we provide the best <strong>high roof seam in navi mumbai</strong>. Our <strong>high roof seam in navi mumbai</strong> systems are designed for massive industrial sheds.
                                </p>
                                <p>
                                    Using <strong>high roof seam in navi mumbai</strong> ensures a leak-proof roof for decades. Our <strong>high roof seam in navi mumbai</strong> are built for the heavy Mumbai monsoons.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Efficiency of high roof seam in navi mumbai</h3>
                                <p>
                                    A high-quality <strong>high roof seam in navi mumbai</strong> improves structural integrity. Our <strong>high roof seam in navi mumbai</strong> are balanced for thermal expansion.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Why Zinco for high roof seam in navi mumbai?</h3>
                                <ul className={styles.styledList}>
                                    <li><strong>Leak Proof:</strong> Every <strong>high roof seam in navi mumbai</strong> has zero penetrations.</li>
                                    <li><strong>Durable:</strong> Our <strong>high roof seam in navi mumbai</strong> uses concealed clip technology.</li>
                                    <li><strong>Precision:</strong> We ensure perfect installation of <strong>high roof seam in navi mumbai</strong>.</li>
                                    <li><strong>Value:</strong> Our <strong>high roof seam in navi mumbai</strong> is a lifetime investment.</li>
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
                        <h2>Specifications of high roof seam in navi mumbai</h2>
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
                        <h2>Features of high roof seam in navi mumbai</h2>
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
                                <h2>Modern high roof seam in navi mumbai</h2>
                                <p>
                                    Our <strong>high roof seam in navi mumbai</strong> is ideal for airports and hubs. Once installed, the <strong>high roof seam in navi mumbai</strong> protects high-value assets.
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
                        <h2>FAQs on high roof seam in navi mumbai</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>Are <strong>high roof seam in navi mumbai</strong> leak proof?</h4>
                                <p>Yes, <strong>high roof seam in navi mumbai</strong> uses zero-penetration technology.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Can <strong>high roof seam in navi mumbai</strong> handle wind?</h4>
                                <p>Yes, <strong>high roof seam in navi mumbai</strong> has extreme wind uplift resistance.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>What is the life of <strong>high roof seam in navi mumbai</strong>?</h4>
                                <p>A <strong>high roof seam in navi mumbai</strong> can last over 50 years.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Get Best Quote for high roof seam in navi mumbai</h3>
                            <p>Contact the leading manufacturer for <strong>high roof seam in navi mumbai</strong> today.</p>
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

export default HighRoofSeam;
