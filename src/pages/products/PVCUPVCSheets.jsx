import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaIndustry, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/services-hero.webp';
import styles from './ProductCategory.module.css';

const PVCUPVCSheets = () => {
    const navigate = useNavigate();
    const features = [
        'Chemical Resistant upvc roofing sheets',
        'Anti-Corrosion upvc roofing sheets',
        'Heat Insulation upvc roofing sheets',
        'Long-Lasting in Coastal Air',
        'Sound Proofing for Factories',
        'Available in Taloja MIDC'
    ];

    const specifications = [
        { label: 'Material', value: 'UPVC / PVC Resin (ASA Coated)' },
        { label: 'Thickness', value: '1.5mm - 3.0mm' },
        { label: 'Suitability', value: 'Chemical & Coastal Zones' },
        { label: 'Width', value: '1130mm (Effective 1050mm)' },
        { label: 'Color', value: 'White / Blue / Terracotta' },
        { label: 'Warranty', value: '10-20 Years' }
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
                title="PVC & UPVC Roofing Sheets in Mumbai & Panvel"
                description="Corrosion-proof UPVC roofing sheets for chemical industries in Taloja, Rasayani, and coastal areas. Heat-resistant and durable."
                keywords="upvc roofing sheets, pvc roofing, chemical resistant roofing, plastic roofing sheets mumbai"
                canonicalUrl="https://www.zincoroof.com/products/pvc-upvc-sheets"
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
                            upvc roofing sheets
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Specialized corrosion-free <strong>upvc roofing sheets</strong> for chemical industries and coastal areas.
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
                                <h2>Superior Anti-Corrosion Solutions: upvc roofing sheets for Industry</h2>
                                <p>
                                    In intense industrial environments, Zinco's <strong>upvc roofing sheets</strong> are the ultimate choice for durability. Our <strong>upvc roofing sheets</strong> provide a 100% rust-proof alternative to metal.
                                </p>
                                <p>
                                    High-performance <strong>upvc roofing sheets</strong> are engineered for structural integrity. These <strong>upvc roofing sheets</strong> feature an ASA coating for extreme UV resistance.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Heat Insulation Properties of upvc roofing sheets</h3>
                                <p>
                                    Our <strong>upvc roofing sheets</strong> offer natural thermal insulation. Using <strong>upvc roofing sheets</strong> can significantly reduce indoor temperatures during peak summer months.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Why Choose upvc roofing sheets in Maharashtra</h3>
                                <ul className={styles.styledList}>
                                    <li><strong>Corrosion Proof:</strong> These <strong>upvc roofing sheets</strong> are unaffected by acid rain or salt air.</li>
                                    <li><strong>Sound Dampening:</strong> Heavy rain noise is virtually eliminated with our <strong>upvc roofing sheets</strong>.</li>
                                    <li><strong>Safety First:</strong> Lightweight and non-conductive <strong>upvc roofing sheets</strong> offer extra protection.</li>
                                    <li><strong>Self-Cleaning:</strong> The ASA finish on <strong>upvc roofing sheets</strong> prevents dust buildup easily.</li>
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
                        <h2>Standard upvc roofing sheets Specifications</h2>
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
                        <h2>Benefits of upvc roofing sheets</h2>
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
                        <h2>Applications for upvc roofing sheets</h2>
                        <ul className={styles.styledList}>
                            <li>Chemical Factories needing <strong>upvc roofing sheets</strong></li>
                            <li>Fertilizer plants using <strong>upvc roofing sheets</strong></li>
                            <li>Coastal warehouses choosing <strong>upvc roofing sheets</strong></li>
                            <li>Electroplating units installing <strong>upvc roofing sheets</strong></li>
                        </ul>
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
                                <h2>Long-Term Value of upvc roofing sheets</h2>
                                <p>
                                    Our premium <strong>upvc roofing sheets</strong> provide undeniable ROI. These <strong>upvc roofing sheets</strong> are designed for a 15-25 year lifespan in corrosive zones.
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
                        <h2>FAQs on upvc roofing sheets</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>Are <strong>upvc roofing sheets</strong> strong?</h4>
                                <p>Yes, our <strong>upvc roofing sheets</strong> provide high structural strength for industrial use.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Do <strong>upvc roofing sheets</strong> fade?</h4>
                                <p>The ASA layer ensures our <strong>upvc roofing sheets</strong> remain color-stable for years.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Are <strong>upvc roofing sheets</strong> fire-safe?</h4>
                                <p>Our <strong>upvc roofing sheets</strong> are self-extinguishing and meet B1 safety standards.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Get Best Quote for upvc roofing sheets</h3>
                            <p>Contact the experts for high-quality <strong>upvc roofing sheets</strong> solutions today.</p>
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

export default PVCUPVCSheets;
