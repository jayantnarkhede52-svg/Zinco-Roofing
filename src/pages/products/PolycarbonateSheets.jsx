import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaSun, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import styles from './ProductCategory.module.css';

// Import local transparent polycarbonate images
import heroImg from '../../assets/productshero/polycarbonate-hero.webp';
import polyImg1 from '../../assets/Transparent polycarbonate/Transparent polycarbonate/1000014018.webp';
import polyImg2 from '../../assets/Transparent polycarbonate/Transparent polycarbonate/1000014352.webp';
import polyImg3 from '../../assets/Transparent polycarbonate/Transparent polycarbonate/1000014425.webp';
import polyImg4 from '../../assets/Transparent polycarbonate/Transparent polycarbonate/1000014445.webp';

const PolycarbonateSheets = () => {
    const navigate = useNavigate();
    const galleryImages = [
        { src: polyImg1, title: 'Polycarbonate roofing sheets Skylight' },
        { src: polyImg2, title: 'Polycarbonate roofing sheets Panel' },
        { src: polyImg3, title: 'Polycarbonate roofing sheets Lighting' },
        { src: polyImg4, title: 'Polycarbonate roofing sheets Profile' }
    ];
    const features = [
        'High Rib polycarbonate roofing sheets',
        'Strong polycarbonate roofing sheets',
        'UV Protected polycarbonate roofing sheets',
        'Durable polycarbonate roofing sheets',
        'Translucent polycarbonate roofing sheets',
        'Insulated polycarbonate roofing sheets'
    ];

    const specifications = [
        { label: 'Profile Type', value: 'High-Rib Trapezoidal' },
        { label: 'Crest Configuration', value: '5 Main Crests + 3 Mini Ribs' },
        { label: 'Transparency', value: '40% to 90% Light Transmission' },
        { label: 'Thickness', value: '2mm - 16mm available' },
        { label: 'Material Grade', value: 'Sabic / Bayer / Tuflite resins' },
        { label: 'UV Resistance', value: 'UV2 Double Side Protection' }
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
                title="High-Rib Polycarbonate Sheets in Navi Mumbai | Zinco"
                description="Unbreakable high-rib polycarbonate roofing sheets for industrial skylights in Taloja, Rabale, and Panvel. Superior light transmission and UV protection."
                keywords="polycarbonate sheets navi mumbai, high rib polycarbonate, industrial skylights, transparent roofing sheets"
                canonicalUrl="https://zincoroof.com/products/polycarbonate-sheets"
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
                            polycarbonate roofing sheets
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Technically advanced <strong>polycarbonate roofing sheets</strong> designed for superior structural strength and light transmission.
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
                                <h2>Advanced natural lighting with polycarbonate roofing sheets</h2>
                                <p>
                                    At Zinco Roofing Solution, our <strong>polycarbonate roofing sheets</strong> offer a sophisticated solution for industrial sheds. These <strong>polycarbonate roofing sheets</strong> combine structural strength with exceptional transmission.
                                </p>
                                <p>
                                    The 5-crest high-rib profile of our <strong>polycarbonate roofing sheets</strong> ensures maximum rigidity. These <strong>polycarbonate roofing sheets</strong> are designed to handle heavy monsoon loads and wind pressures effortlessly.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>UV Protection in polycarbonate roofing sheets</h3>
                                <p>
                                    Our <strong>polycarbonate roofing sheets</strong> feature a co-extruded UV-protected coating. This prevents yellowing of the <strong>polycarbonate roofing sheets</strong>, ensuring long-term clarity and durability in Mumbai's climate.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Why Choose Zinco polycarbonate roofing sheets?</h3>
                                <ul className={styles.styledList}>
                                    <li><strong>Light Transmission:</strong> Our <strong>polycarbonate roofing sheets</strong> filter harmful rays while letting in daylight.</li>
                                    <li><strong>Unbreakable Strength:</strong> These <strong>polycarbonate roofing sheets</strong> are 250 times stronger than glass.</li>
                                    <li><strong>Thermal Stability:</strong> Use <strong>polycarbonate roofing sheets</strong> to maintain internal warehouse temperatures.</li>
                                    <li><strong>Weight Efficient:</strong> Lightweight <strong>polycarbonate roofing sheets</strong> are easy to install at high heights.</li>
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
                        <h2>polycarbonate roofing sheets Showcase</h2>
                        <div className={styles.galleryGrid}>
                            {galleryImages.map((img, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.galleryItem}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <img src={img.src} alt="polycarbonate roofing sheets industrial installation" className={styles.galleryImage} loading="lazy" decoding="async" />
                                    <div className={styles.galleryOverlay}>
                                        <span>{img.title}</span>
                                    </div>
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
                        <h2>Specifications of polycarbonate roofing sheets</h2>
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
                        <h2>Benefits of polycarbonate roofing sheets</h2>
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
                                <h2>Maintenance of polycarbonate roofing sheets</h2>
                                <p>
                                    To keep your <strong>polycarbonate roofing sheets</strong> clear, a simple annual cleaning is recommended. This keeps <strong>polycarbonate roofing sheets</strong> naturally bright with minimal effort from you.
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
                        <h2>FAQs on polycarbonate roofing sheets</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>Are <strong>polycarbonate roofing sheets</strong> fire-safe?</h4>
                                <p>Yes, our <strong>polycarbonate roofing sheets</strong> are self-extinguishing and meet safety standards.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Can <strong>polycarbonate roofing sheets</strong> withstand hail?</h4>
                                <p>Absolutely, <strong>polycarbonate roofing sheets</strong> are virtually unbreakable and hail-resistant.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Do <strong>polycarbonate roofing sheets</strong> prevent leaks?</h4>
                                <p>Yes, when installed correctly, <strong>polycarbonate roofing sheets</strong> create a watertight seal with metal.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Get Best Quote for polycarbonate roofing sheets</h3>
                            <p>Contact the experts for premium <strong>polycarbonate roofing sheets</strong> in Navi Mumbai today.</p>
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

export default PolycarbonateSheets;
