import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaStar, FaMapMarkerAlt, FaExpand } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import styles from './ProductCategory.module.css';

// Import local images
import tileImg1 from '../../assets/Upvc images/Upvc images/1000014156.webp';
import tileImg2 from '../../assets/Upvc images/Upvc images/1000014234.webp';
import tileImg3 from '../../assets/Upvc images/Upvc images/1000014255.webp';
import tileImg4 from '../../assets/Upvc images/Upvc images/1000014270.webp';
import tileImg5 from '../../assets/Upvc images/Upvc images/1000014273.webp';
import tileImg6 from '../../assets/Upvc images/Upvc images/1000014616.webp';

const PVCTileSheet = () => {
    const navigate = useNavigate();
    const galleryImages = [
        { src: tileImg1, title: 'PVC tile sheets in navi mumbai Profile' },
        { src: tileImg2, title: 'Bungalow PVC tile sheets in navi mumbai' },
        { src: tileImg3, title: 'Top PVC tile sheets in navi mumbai' },
        { src: tileImg4, title: 'Quality PVC tile sheets in navi mumbai' },
        { src: tileImg5, title: 'Best PVC tile sheets in navi mumbai' },
        { src: tileImg6, title: 'PVC tile sheets in navi mumbai Selection' }
    ];

    const features = [
        'Premium PVC tile sheets in navi mumbai',
        'Lightweight PVC tile sheets in navi mumbai',
        'Durable PVC tile sheets in navi mumbai',
        'Insulated PVC tile sheets in navi mumbai',
        'Balanced PVC tile sheets in navi mumbai',
        'Secure PVC tile sheets in navi mumbai'
    ];

    const specifications = [
        { label: 'Material', value: 'High-Grade PVC / ASA Coated' },
        { label: 'Thickness', value: '2.0mm - 3.0mm' },
        { label: 'Width', value: '1050mm (Overall)' },
        { label: 'Tile Length', value: '250mm - 300mm' },
        { label: 'Color', value: 'Brick Red / Grey / Blue' },
        { label: 'Service Life', value: '25+ Years' }
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
                title="PVC Tile Sheets in Navi Mumbai | Spanish Tile Roof"
                description="Traditional Spanish-style PVC roofing tiles for bungalows and resorts in Alibaug, Panvel, and Navi Mumbai. Lightweight, durable, and leak-proof."
                keywords="pvc tile sheets, spanish tile roofing, plastic roof tiles, resort roofing alibaug, bungalow roofing mumbai"
                canonicalUrl="https://www.zincoroof.com/products/pvc-tile-sheet"
            />
            <Helmet>
                <link rel="preload" as="image" href={tileImg1} fetchpriority="high" />
            </Helmet>
            <div className={styles.hero} style={{ '--hero-image': `url(${tileImg1})` }}>
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
                            pvc tile sheets in navi mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Achieve a traditional Mediterranean look with modern, lightweight <strong>pvc tile sheets in navi mumbai</strong> technology.
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
                                <h2>Complete pvc tile sheets in navi mumbai solutions</h2>
                                <p>
                                    At Zinco Roofing Solution, we provide the best <strong>pvc tile sheets in navi mumbai</strong>. Our <strong>pvc tile sheets in navi mumbai</strong> are perfect for residential bungalows and coastal resorts.
                                </p>
                                <p>
                                    Installing <strong>pvc tile sheets in navi mumbai</strong> ensures a maintenance-free Spanish look. Our <strong>pvc tile sheets in navi mumbai</strong> are balanced for long life in Mumbai.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Efficiency of pvc tile sheets in navi mumbai</h3>
                                <p>
                                    A high-quality <strong>pvc tile sheets in navi mumbai</strong> improves thermal insulation. Our <strong>pvc tile sheets in navi mumbai</strong> are balanced for UV resistance and sound dampening.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Why Zinco for pvc tile sheets in navi mumbai?</h3>
                                <ul className={styles.styledList}>
                                    <li><strong>Rust Proof:</strong> Our <strong>pvc tile sheets in navi mumbai</strong> is completely immune to marine corrosion.</li>
                                    <li><strong>Lightweight:</strong> Every <strong>pvc tile sheets in navi mumbai</strong> reduces structural load significantly.</li>
                                    <li><strong>Fast Setup:</strong> We ensure perfect installation of <strong>pvc tile sheets in navi mumbai</strong>.</li>
                                    <li><strong>Premium ASA:</strong> Our <strong>pvc tile sheets in navi mumbai</strong> features thick ASA coating.</li>
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
                        <h2>Specifications of pvc tile sheets in navi mumbai</h2>
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
                        <h2>Features of Zinco pvc tile sheets in navi mumbai</h2>
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
                                <h2>Modern pvc tile sheets in navi mumbai</h2>
                                <p>
                                    Our <strong>pvc tile sheets in navi mumbai</strong> is ideal for bungalows. Once installed, the <strong>pvc tile sheets in navi mumbai</strong> protects your home for decades.
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
                        <h2>FAQs on pvc tile sheets in navi mumbai</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>Do <strong>pvc tile sheets in navi mumbai</strong> fade?</h4>
                                <p>No, our <strong>pvc tile sheets in navi mumbai</strong> use ASA coating to prevent fading.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Is <strong>pvc tile sheets in navi mumbai</strong> fire safe?</h4>
                                <p>Yes, <strong>pvc tile sheets in navi mumbai</strong> is fire retardant and self-extinguishing.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>How long does <strong>pvc tile sheets in navi mumbai</strong> last?</h4>
                                <p>Our <strong>pvc tile sheets in navi mumbai</strong> has a service life of 25+ years.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.section}>
                        <h2>Gallery of pvc tile sheets in navi mumbai</h2>
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
                                    <img src={img.src} alt="pvc tile sheets in navi mumbai" className={styles.galleryImage} loading="lazy" decoding="async" />
                                    <div className={styles.galleryOverlay}>
                                        <span>{img.title}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Get Best Quote for pvc tile sheets in navi mumbai</h3>
                            <p>Contact the leading manufacturer for <strong>pvc tile sheets in navi mumbai</strong> today.</p>
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

export default PVCTileSheet;
