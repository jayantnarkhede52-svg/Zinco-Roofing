import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaIndustry, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/services-hero.webp';
import styles from './ProductCategory.module.css';

const PEBFabrication = () => {
    const navigate = useNavigate();
    const features = [
        'PEB structure fabrication Experts',
        'Top PEB structure fabrication',
        'Turnkey PEB structure fabrication',
        'Durable PEB structure fabrication',
        'Modern PEB structure fabrication',
        'Swift PEB structure fabrication'
    ];

    const specifications = [
        { label: 'Primary Members', value: 'Built-up Steel Sections' },
        { label: 'Secondary Members', value: 'Galvanized Purlins' },
        { label: 'Roofing', value: 'Color Coated / PUF Panels' },
        { label: 'Design Standards', value: 'IS 800 / MBMA' },
        { label: 'Location', value: 'Serving Panvel, Taloja, Mumbai' },
        { label: 'Warranty', value: 'Structure & Sheeting Warranty' }
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
                title="PEB Structure Fabrication in Navi Mumbai & Panvel"
                description="Turnkey Pre-Engineered Building (PEB) solutions, industrial sheds, and warehouse construction in Taloja, Bhiwandi, and Mumbai. Fast erection and cost-effective."
                keywords="peb structure fabrication, industrial shed contractor, pre engineered builders, warehouse construction mumbai"
                canonicalUrl="https://zincoroof.com/products/peb-fabrication"
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
                            peb structure fabrication
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Leading <strong>peb structure fabrication</strong> contractors and industrial shed fabricators in Taloja, Panvel, and Mumbai.
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
                                <h2>Complete peb structure fabrication solutions</h2>
                                <p>
                                    At Zinco Roofing Solution, we excel in <strong>peb structure fabrication</strong>. Our <strong>peb structure fabrication</strong> services are designed for rapid deployment in Navi Mumbai's industrial hubs.
                                </p>
                                <p>
                                    Choosing <strong>peb structure fabrication</strong> ensures a cost-effective and flexible alternative to civil building. Our <strong>peb structure fabrication</strong> expertise covers design and erection.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Efficiency of peb structure fabrication</h3>
                                <p>
                                    The precision of <strong>peb structure fabrication</strong> lies in built-up sections. Our <strong>peb structure fabrication</strong> methods reduce weight while increasing structural integrity.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Why choose our peb structure fabrication?</h3>
                                <ul className={styles.styledList}>
                                    <li><strong>Fast Delivery:</strong> Our <strong>peb structure fabrication</strong> process is highly streamlined.</li>
                                    <li><strong>Wind Resistance:</strong> Every <strong>peb structure fabrication</strong> project meets high wind loads.</li>
                                    <li><strong>Aesthetic Choice:</strong> <strong>peb structure fabrication</strong> offers various wall and roof options.</li>
                                    <li><strong>Low Maintenance:</strong> Bolted joints in <strong>peb structure fabrication</strong> ensure longevity.</li>
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
                        <h2>PEB structure fabrication Specifications</h2>
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
                        <h2>Benefits of peb structure fabrication</h2>
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
                                <h2>Safety in peb structure fabrication</h2>
                                <p>
                                    Every <strong>peb structure fabrication</strong> project follows strict Indian Standard codes. We ensure <strong>peb structure fabrication</strong> optimizes safety for every manufacturing unit.
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
                        <h2>FAQs on peb structure fabrication</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>How fast is <strong>peb structure fabrication</strong>?</h4>
                                <p>Standard <strong>peb structure fabrication</strong> erection takes 3 to 5 weeks once foundations are ready.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Can <strong>peb structure fabrication</strong> be expanded?</h4>
                                <p>Yes, <strong>peb structure fabrication</strong> is designed for future bays and height increases.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Is <strong>peb structure fabrication</strong> portable?</h4>
                                <p>Yes, the bolted members of <strong>peb structure fabrication</strong> allow for relocation if needed.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Get Quote for peb structure fabrication</h3>
                            <p>Contact the leading <strong>peb structure fabrication</strong> experts in Navi Mumbai today.</p>
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

export default PEBFabrication;
