import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/services-hero.webp';
import styles from './ProductCategory.module.css';

const MetalTileSheet = () => {
    const navigate = useNavigate();
    const features = [
        'Metal tile sheets in navi mumbai Experts',
        'Top Metal tile sheets in navi mumbai',
        'Aesthetic Metal tile sheets in navi mumbai',
        'Durable Metal tile sheets in navi mumbai',
        'Quality Metal tile sheets in navi mumbai',
        'Modern Metal tile sheets in navi mumbai'
    ];

    const specifications = [
        { label: 'Material', value: 'Pre-painted Galvalume / Galvanized' },
        { label: 'Width', value: '1100mm (Overall) / 1000mm (Effective)' },
        { label: 'Thickness', value: '0.40mm - 0.60mm' },
        { label: 'Coating', value: 'Al-Zn Alloy / Zinc Coating' },
        { label: 'Tile Step', value: '250mm - 300mm' },
        { label: 'Finishes', value: 'Glossy / Matte / Texture' }
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
                title="Metal Tile Sheets in Navi Mumbai | Zinco"
                description="Aesthetic metal tile roofing sheets for resorts and bungalows in Alibaug, Panvel, and Konkan. Lightweight, leak-proof, and durable tile profile."
                keywords="metal tile sheets, mangalore tile profile, metal roofing tiles, resort roofing alibaug"
                canonicalUrl="https://zincoroof.com/products/metal-tile-sheet"
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
                            metal tile sheets in navi mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            The classic beauty of clay tiles with the modern durability of <strong>metal tile sheets in navi mumbai</strong>.
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
                                <h2>Complete metal tile sheets in navi mumbai solutions</h2>
                                <p>
                                    At Zinco Roofing Solution, we provide the finest <strong>metal tile sheets in navi mumbai</strong>. Our <strong>metal tile sheets in navi mumbai</strong> combine Mangalore tile aesthetics with high-strength galvalume.
                                </p>
                                <p>
                                    Using <strong>metal tile sheets in navi mumbai</strong> ensures a maintenance-free life for Your resort. Our <strong>metal tile sheets in navi mumbai</strong> are balanced for performance.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Benefits of metal tile sheets in navi mumbai</h3>
                                <p>
                                    A high-quality <strong>metal tile sheets in navi mumbai</strong> reduces structural load by 85%. Our <strong>metal tile sheets in navi mumbai</strong> features UV-stabilized coatings.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Why Zinco for metal tile sheets in navi mumbai?</h3>
                                <ul className={styles.styledList}>
                                    <li><strong>100% Leak Proof:</strong> Our <strong>metal tile sheets in navi mumbai</strong> ensures watertight overlapping.</li>
                                    <li><strong>Durability:</strong> Every <strong>metal tile sheets in navi mumbai</strong> is corrosion resistant.</li>
                                    <li><strong>Swift Setup:</strong> We provide rapid installation for <strong>metal tile sheets in navi mumbai</strong>.</li>
                                    <li><strong>Eco-Friendly:</strong> Our <strong>metal tile sheets in navi mumbai</strong> is fully recyclable.</li>
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
                        <h2>Metal tile sheets in navi mumbai Specifications</h2>
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
                        <h2>Features of Zinco metal tile sheets in navi mumbai</h2>
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
                                <h2>Modern metal tile sheets in navi mumbai</h2>
                                <p>
                                    Our <strong>metal tile sheets in navi mumbai</strong> is built for the Mumbai climate. Once installed, the <strong>metal tile sheets in navi mumbai</strong> protects your home for decades.
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
                        <h2>FAQs on metal tile sheets in navi mumbai</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>Are <strong>metal tile sheets in navi mumbai</strong> noisy?</h4>
                                <p>No, the stepped profile and insulation of <strong>metal tile sheets in navi mumbai</strong> break rain impact noise.</p>
                            </div>
                            <div className={div style={styles.faqItem}}>
                                <h4>Can I walk on <strong>metal tile sheets in navi mumbai</strong>?</h4>
                                <p>Yes, <strong>metal tile sheets in navi mumbai</strong> can support weight if you walk on the purlin supports.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Will the <strong>metal tile sheets in navi mumbai</strong> color fade?</h4>
                                <p>No, our <strong>metal tile sheets in navi mumbai</strong> uses pre-painted, baked-on coatings that stay vibrant.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Get Quote for metal tile sheets in navi mumbai</h3>
                            <p>Contact the leading manufacturer for <strong>metal tile sheets in navi mumbai</strong> today.</p>
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

export default MetalTileSheet;
