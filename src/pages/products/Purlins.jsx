import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaProjectDiagram, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/services-hero.webp';
import purlinImg1 from '../../assets/projects/Godreh-ambarnath.webp';
import purlinImg2 from '../../assets/projects/Bajaj electrical.webp';
import purlinImg3 from '../../assets/projects/L&T construction.webp';
import purlinImg4 from '../../assets/projects/amar studio.webp';
import styles from './ProductCategory.module.css';

const Purlins = () => {
    const navigate = useNavigate();
    const features = [
        'C Purlins Manufacturer Panvel',
        'Galvanized C Purlins Taloja',
        'C Purlins Supplier Navi Mumbai',
        'Pre-Punched C Purlins',
        'Structural C Purlins Mumbai',
        'Quick Delivery for C Purlins'
    ];
    const galleryImages = [
        { src: purlinImg1, title: 'C Purlins for Industrial Sheds' },
        { src: purlinImg2, title: 'C Purlins Installation' },
        { src: purlinImg3, title: 'Warehouse Framing with C Purlins' },
        { src: purlinImg4, title: 'Lapping with C Purlins' }
    ];

    const specifications = [
        { label: 'Material', value: 'High Tensile Galvanized Steel' },
        { label: 'Yield Strength', value: '345 MPa / 450 MPa / 550 MPa' },
        { label: 'Thickness', value: '1.5mm - 3.0mm' },
        { label: 'Web Height', value: '80mm - 300mm' },
        { label: 'Lengths', value: 'Custom cut as per order' },
        { label: 'Zinc Coating', value: '120gsm / 275gsm' }
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
                title="C & Z Purlins Manufacturer in Navi Mumbai"
                description="High-strength Galvanized C & Z Purlins for PEB structures in Panvel, Taloja, and Bhiwandi. Custom sizes and quick delivery."
                keywords="c purlins, z purlins, galvanized purlins, structural steel navi mumbai, peb structural members"
                canonicalUrl="https://www.zincoroof.com/products/purlins"
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
                            c purlins
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            High-strength Galvanized <strong>c purlins</strong> for structural support in Panvel, Taloja, and Mumbai construction projects.
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
                                <h2>Precision-Engineered c purlins: Backbone of Modern PEB Structures</h2>
                                <p>
                                    At Zinco Roofing Solution, our <strong>c purlins</strong> are engineered to provide maximum structural support with minimum weight. These <strong>c purlins</strong> are the preferred choice for Pre-Engineered Buildings.
                                </p>
                                <p>
                                    Unlike traditional channels, our cold-formed <strong>c purlins</strong> offer a significantly higher strength-to-weight ratio. Manufactured from high-tensile galvanized steel, these <strong>c purlins</strong> provide the rigid framework necessary for modern sheds.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Why Choose c purlins for Your Industrial Project?</h3>
                                <p>
                                    Our <strong>c purlins</strong> are primarily used for simple span applications. These <strong>c purlins</strong> are ideal for door frames, window trimmers, and smaller warehouse structures in Navi Mumbai.
                                </p>
                                <p>
                                    For larger projects, we offer <strong>c purlins</strong> along with Z-profiles. Using <strong>c purlins</strong> ensures ease of bolting and perpendicular stability for the entire roof structure.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Why Industrialists in Mumbai Choose Zinco c purlins</h3>
                                <ul className={styles.styledList}>
                                    <li><strong>Precision Roll-Forming:</strong> Our <strong>c purlins</strong> are dimensionally accurate to the millimeter.</li>
                                    <li><strong>Pre-Punched Efficiency:</strong> We provide <strong>c purlins</strong> with pre-punched holes to reduce labor time.</li>
                                    <li><strong>Superior Protection:</strong> Our <strong>c purlins</strong> feature galvanized coatings for maximum rust protection.</li>
                                    <li><strong>Custom Lengths:</strong> Every <strong>c purlins</strong> order is custom-cut to ensure zero wastage on site.</li>
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
                        <h2>Technical Specifications of c purlins</h2>
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
                        <h2>Benefits of Using c purlins</h2>
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
                        <h2>c purlins Gallery</h2>
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
                                    <img src={img.src} alt="c purlins building project" className={styles.galleryImage} loading="lazy" decoding="async" />
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
                        <h2>Installation Support for c purlins</h2>
                        <p>
                            Proper installation of <strong>c purlins</strong> is key to a leak-proof roof. Our team ensures that <strong>c purlins</strong> spacing and fastening methods are optimized for longevity.
                        </p>
                    </motion.section>

                    <motion.section
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Frequently Asked Questions on c purlins</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>Can I order <strong>c purlins</strong> in custom thicknesses?</h4>
                                <p>Yes! We can roll-form <strong>c purlins</strong> from galvanized coils in various thicknesses.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>What's the advantage of pre-punched <strong>c purlins</strong>?</h4>
                                <p>Pre-punched holes in <strong>c purlins</strong> ensure that the bolting is perfectly aligned for faster assembly.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Are <strong>c purlins</strong> suitable for solar structures?</h4>
                                <p>Absolutely, many solar projects use our high-tensile <strong>c purlins</strong> for their durability.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Get Best Quote for c purlins</h3>
                            <p>Contact the leading manufacturer of <strong>c purlins</strong> in Navi Mumbai today.</p>
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

export default Purlins;
