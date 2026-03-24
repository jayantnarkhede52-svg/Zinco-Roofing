import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaTools, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/services-hero.webp';
import styles from './ProductCategory.module.css';

const UPVCHighRibSheets = () => {
    const navigate = useNavigate();
    const features = [
        'Advanced upvc high rib sheets in navi mumbai',
        'Top upvc high rib sheets in navi mumbai',
        'Balanced upvc high rib sheets in navi mumbai',
        'Expert upvc high rib sheets in navi mumbai',
        'Quality upvc high rib sheets in navi mumbai',
        'Best upvc high rib sheets in navi mumbai'
    ];

    const specifications = [
        { label: 'Total Width', value: '1070mm' },
        { label: 'Effective Width', value: '1000mm' },
        { label: 'Profile Pitch', value: '250mm' },
        { label: 'Rib Height', value: '37mm' },
        { label: 'Thickness', value: '2.0mm / 2.5mm / 3.0mm' },
        { label: 'Material', value: 'UPVC + Glass Fiber + ASA Coating' }
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
                title="3-Layer UPVC High-Rib Sheets in Navi Mumbai | Zinco"
                description="Anti-corrosive 3-layer UPVC roofing sheets for chemical factories in Taloja, Uran, and Panvel. Heat insulating and acid resistant."
                keywords="upvc roofing sheets, 3 layer upvc sheets, anti corrosion roofing, chemical factory roofing mumbai, upvc high rib"
                canonicalUrl="https://www.zincoroof.com/products/upvc-high-rib-sheets"
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
                            upvc high rib sheets in navi mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Elevate your industrial projects with reliable <strong>upvc high rib sheets in navi mumbai</strong> solutions.
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
                                <h2>Complete upvc high rib sheets in navi mumbai solutions</h2>
                                <p>
                                    At Zinco Roofing Solution, we provide the best <strong>upvc high rib sheets in navi mumbai</strong>. Our <strong>upvc high rib sheets in navi mumbai</strong> are designed for massive industrial roofs.
                                </p>
                                <p>
                                    Using <strong>upvc high rib sheets in navi mumbai</strong> ensures a green energy source for decades. Our <strong>upvc high rib sheets in navi mumbai</strong> are built for the heavy Mumbai monsoons.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Efficiency of upvc high rib sheets in navi mumbai</h3>
                                <p>
                                    A high-quality <strong>upvc high rib sheets in navi mumbai</strong> reduces industrial costs. Our <strong>upvc high rib sheets in navi mumbai</strong> are balanced for maximum output.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Why Zinco for upvc high rib sheets in navi mumbai?</h3>
                                <ul className={styles.styledList}>
                                    <li><strong>Sustainable:</strong> Every <strong>upvc high rib sheets in navi mumbai</strong> offers clean power.</li>
                                    <li><strong>Reliable:</strong> Our <strong>upvc high rib sheets in navi mumbai</strong> is securely mounted.</li>
                                    <li><strong>Quality:</strong> We ensure perfect installation of <strong>upvc high rib sheets in navi mumbai</strong>.</li>
                                    <li><strong>Value:</strong> Our <strong>upvc high rib sheets in navi mumbai</strong> is a smart industrial asset.</li>
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
                        <h2>Specifications of upvc high rib sheets in navi mumbai</h2>
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
                        <h2>Features of upvc high rib sheets in navi mumbai</h2>
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
                                <h2>Modern upvc high rib sheets in navi mumbai</h2>
                                <p>
                                    Our <strong>upvc high rib sheets in navi mumbai</strong> is ideal for large warehouses. Once installed, the <strong>upvc high rib sheets in navi mumbai</strong> provides a maintenance-free energy flow.
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
                        <h2>FAQs on upvc high rib sheets in navi mumbai</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>Is <strong>upvc high rib sheets in navi mumbai</strong> heat resistant?</h4>
                                <p>Yes, <strong>upvc high rib sheets in navi mumbai</strong> has built-in thermal guards.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Does <strong>upvc high rib sheets in navi mumbai</strong> corrode?</h4>
                                <p>No, <strong>upvc high rib sheets in navi mumbai</strong> is inorganic and rust-free.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Is <strong>upvc high rib sheets in navi mumbai</strong> recyclable?</h4>
                                <p>Yes, <strong>upvc high rib sheets in navi mumbai</strong> is eco-friendly.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Get Best Quote for upvc high rib sheets in navi mumbai</h3>
                            <p>Contact the leading manufacturer for <strong>upvc high rib sheets in navi mumbai</strong> today.</p>
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

export default UPVCHighRibSheets;
