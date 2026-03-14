import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaLightbulb, FaMapMarkerAlt, FaExpand } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import styles from './ProductCategory.module.css';

// Import local images
import mwImg1 from '../../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014216.webp';
import mwImg2 from '../../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014298.webp';
import mwImg3 from '../../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014339.webp';
import mwImg4 from '../../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014422.webp';
import mwImg5 from '../../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014502.webp';
import mwImg6 from '../../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014533.webp';
import mwImg7 from '../../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014579.webp';
import mwImg8 from '../../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014583.webp';
import mwImg9 from '../../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014721.webp';

const MultiwallSheets = () => {
    const navigate = useNavigate();
    const galleryImages = [
        { src: mwImg1, title: 'Multiwall polycarbonate sheets in navi mumbai Detail' },
        { src: mwImg2, title: 'Best Multiwall polycarbonate sheets in navi mumbai' },
        { src: mwImg3, title: 'Top Multiwall polycarbonate sheets in navi mumbai' },
        { src: mwImg4, title: 'Quality Multiwall polycarbonate sheets in navi mumbai' },
        { src: mwImg5, title: 'Expert Multiwall polycarbonate sheets in navi mumbai' },
        { src: mwImg6, title: 'Modern Multiwall polycarbonate sheets in navi mumbai' },
        { src: mwImg7, title: 'Multiwall polycarbonate sheets in navi mumbai Spec' },
        { src: mwImg8, title: 'Durable Multiwall polycarbonate sheets in navi mumbai' },
        { src: mwImg9, title: 'Multiwall polycarbonate sheets in navi mumbai Site' }
    ];

    const features = [
        'Advanced Multiwall polycarbonate sheets in navi mumbai',
        'Top Multiwall polycarbonate sheets in navi mumbai',
        'Balanced Multiwall polycarbonate sheets in navi mumbai',
        'Impact Multiwall polycarbonate sheets in navi mumbai',
        'Quality Multiwall polycarbonate sheets in navi mumbai',
        'Light Multiwall polycarbonate sheets in navi mumbai'
    ];

    const specifications = [
        { label: 'Profile Design', value: 'High-Rib Trapezoidal' },
        { label: 'Configuration', value: '5 Main Crests + 3 Mini Ribs' },
        { label: 'Core Material', value: 'Multi-layer Polycarbonate Resins' },
        { label: 'Standard Width', value: '1000mm - 1130mm' },
        { label: 'Thermal U-Value', value: 'Optimized for energy saving' },
        { label: 'Surface Coating', value: 'ASA Weather Protection available' }
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
                title="High-Rib Multiwall Sheets in Navi Mumbai | Zinco"
                description="High-rib multiwall polycarbonate sheets for industrial skylights and daylighting in Taloja, Bhiwandi, and Navi Mumbai. UV protected and energy efficient."
                keywords="multiwall polycarbonate sheets, high rib polycarbonate, industrial daylighting, skylight sheets mumbai, polycarbonate roofing"
                canonicalUrl="https://zincoroof.com/products/multiwall-sheets"
            />
            <Helmet>
                <link rel="preload" as="image" href={mwImg1} fetchpriority="high" />
            </Helmet>
            <div className={styles.hero} style={{ '--hero-image': `url(${mwImg1})` }}>
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
                            multiwall polycarbonate sheets in navi mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            High-strength multi-layered <strong>multiwall polycarbonate sheets in navi mumbai</strong> with a reinforced high-rib design for superior industrial performance.
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
                                <h2>Complete multiwall polycarbonate sheets in navi mumbai solutions</h2>
                                <p>
                                    At Zinco Roofing Solution, we provide the best <strong>multiwall polycarbonate sheets in navi mumbai</strong>. Our <strong>multiwall polycarbonate sheets in navi mumbai</strong> are designed for massive industrial daylighting.
                                </p>
                                <p>
                                    Using <strong>multiwall polycarbonate sheets in navi mumbai</strong> ensures a brighter factory floor. Our <strong>multiwall polycarbonate sheets in navi mumbai</strong> are built for the Mumbai climate.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Efficiency of multiwall polycarbonate sheets in navi mumbai</h3>
                                <p>
                                    A high-quality <strong>multiwall polycarbonate sheets in navi mumbai</strong> improves energy savings. Our <strong>multiwall polycarbonate sheets in navi mumbai</strong> are balanced for UV protection.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Why Zinco for multiwall polycarbonate sheets in navi mumbai?</h3>
                                <ul className={styles.styledList}>
                                    <li><strong>Durable:</strong> Every <strong>multiwall polycarbonate sheets in navi mumbai</strong> is high-impact resistant.</li>
                                    <li><strong>Clarity:</strong> Our <strong>multiwall polycarbonate sheets in navi mumbai</strong> offers superior light.</li>
                                    <li><strong>Support:</strong> We ensure perfect installation of <strong>multiwall polycarbonate sheets in navi mumbai</strong>.</li>
                                    <li><strong>Value:</strong> Our <strong>multiwall polycarbonate sheets in navi mumbai</strong> is cost-effective.</li>
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
                        <h2>Specifications of multiwall polycarbonate sheets in navi mumbai</h2>
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
                        <h2>Features of multiwall polycarbonate sheets in navi mumbai</h2>
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
                                <h2>Modern multiwall polycarbonate sheets in navi mumbai</h2>
                                <p>
                                    Our <strong>multiwall polycarbonate sheets in navi mumbai</strong> is ideal for skylights. Once installed, the <strong>multiwall polycarbonate sheets in navi mumbai</strong> provides natural light.
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
                        <h2>FAQs on multiwall polycarbonate sheets in navi mumbai</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>Are <strong>multiwall polycarbonate sheets in navi mumbai</strong> durable?</h4>
                                <p>Yes, <strong>multiwall polycarbonate sheets in navi mumbai</strong> are 250 times stronger than glass.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Do <strong>multiwall polycarbonate sheets in navi mumbai</strong> block heat?</h4>
                                <p>Yes, <strong>multiwall polycarbonate sheets in navi mumbai</strong> have excellent thermal insulation.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Will the <strong>multiwall polycarbonate sheets in navi mumbai</strong> turn yellow?</h4>
                                <p>No, our <strong>multiwall polycarbonate sheets in navi mumbai</strong> feature high-density UV layers.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.section}>
                        <h2>Gallery of multiwall polycarbonate sheets in navi mumbai</h2>
                        <div className={styles.galleryGrid}>
                            {galleryImages.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    className={styles.galleryItem}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                >
                                    <img src={img.src}
                                        alt="multiwall polycarbonate sheets in navi mumbai"
                                        className={styles.galleryImage}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className={styles.galleryOverlay}>
                                        <span>{img.title}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Get Best Quote for multiwall polycarbonate sheets in navi mumbai</h3>
                            <p>Contact the leading manufacturer for <strong>multiwall polycarbonate sheets in navi mumbai</strong> today.</p>
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

export default MultiwallSheets;
