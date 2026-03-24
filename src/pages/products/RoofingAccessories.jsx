import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaWrench, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/services-hero.webp';
import styles from './ProductCategory.module.css';

const RoofingAccessories = () => {
    const navigate = useNavigate();
    const features = [
        'Roofing Accessories Shop Panvel',
        'Custom Gutters Navi Mumbai',
        'Color Coated Ridges Mumbai',
        'leak-proof Fasteners Taloja',
        'Polycarbonate Trims Vashi',
        'Anti-Corrosion Screws'
    ];

    const products = [
        { label: 'Ridge Caps', desc: 'Apex sealing for roof accessories' },
        { label: 'Rainwater Gutters', desc: 'Drainage systems for roofing accessories' },
        { label: 'Flashings', desc: 'Joint protection in roofing accessories' },
        { label: 'SD Screws', desc: 'Fasteners for roofing accessories' },
        { label: 'Turbo Vents', desc: 'Ventilation in roofing accessories' },
        { label: 'Sealants', desc: 'Silicone for roofing accessories' }
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
                title="Roofing Accessories Supplier in Navi Mumbai & Panvel"
                description="Complete range of roofing accessories: ridges, gutters, turbo ventilators, and fasteners available in Panvel, Taloja, and Vashi."
                keywords="roofing accessories, turbo ventilators, gutters, roofing screws, ridges"
                canonicalUrl="https://www.zincoroof.com/products/roofing-accessories"
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
                            roofing accessories
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Complete range of high-quality <strong>roofing accessories</strong> available for industrial and residential projects.
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
                                <h2>The Essential Backbone: Why roofing accessories Matter</h2>
                                <p>
                                    At Zinco Roofing Solution, we believe that a roof is only as strong as its weakest joint. Our <strong>roofing accessories</strong> provide the critical sealing and structural support needed for a durable structure.
                                </p>
                                <p>
                                    Whether you need ridges or gutters, our <strong>roofing accessories</strong> ensure that every edge is perfectly sealed. We manufacture our <strong>roofing accessories</strong> from high-grade materials for maximum longevity.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Sealing the Peaks with roofing accessories</h3>
                                <p>
                                    The ridge is the most vulnerable part of any roof, making <strong>roofing accessories</strong> like ridge caps essential. Our <strong>roofing accessories</strong> are precision-bent to match your exact profile.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Drainage Solutions in roofing accessories</h3>
                                <p>
                                    Effective drainage is critical, and our <strong>roofing accessories</strong> collection includes high-volume gutters. These <strong>roofing accessories</strong> are designed to handle intense Mumbai monsoons effortlessly.
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
                        <h2>Our roofing accessories Range</h2>
                        <div className={styles.applicationsGrid}>
                            {products.map((prod, index) => (
                                <Card key={index} variant="solid" className={styles.appCard}>
                                    <h4>{prod.label}</h4>
                                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--gray-400)' }}>{prod.desc}</p>
                                </Card>
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
                        <h2>Locations for roofing accessories</h2>
                        <div className={styles.featuresGrid}>
                            {['Panvel', 'Taloja MIDC', 'Navi Mumbai', 'Vashi', 'Belapur', 'Thane'].map((loc, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.featureItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <FaMapMarkerAlt className={styles.checkIcon} />
                                    <span>{loc}</span>
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
                                <h2>Fastening Systems in roofing accessories</h2>
                                <p>
                                    We supply only the highest grade of screws as part of our <strong>roofing accessories</strong> lineup. These <strong>roofing accessories</strong> feature anti-corrosion coatings that last for decades.
                                </p>
                                <p>
                                    For critical joints, our <strong>roofing accessories</strong> use high-performance silicone sealants. These <strong>roofing accessories</strong> maintain their bond even under intense UV radiation.
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
                        <h2>FAQs about roofing accessories</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>Can I order custom <strong>roofing accessories</strong>?</h4>
                                <p>Yes! We can create custom components as part of our <strong>roofing accessories</strong> service.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Are <strong>roofing accessories</strong> essential for sheds?</h4>
                                <p>Absolutely, high-quality <strong>roofing accessories</strong> ensure your shed is leak-proof and durable.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Do you provide <strong>roofing accessories</strong> in Panvel?</h4>
                                <p>Yes, we are the leading supplier of <strong>roofing accessories</strong> in the Panvel and Taloja regions.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Get Best Quote for roofing accessories</h3>
                            <p>Complete range of <strong>roofing accessories</strong> available for your next project.</p>
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

export default RoofingAccessories;
