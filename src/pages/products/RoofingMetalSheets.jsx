import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaStar, FaMapMarkerAlt, FaExpand, FaShieldAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import styles from './ProductCategory.module.css';

// Import local images
import heroImg from '../../assets/productshero/colored-sheets-hero.webp';
import img1 from '../../assets/Metal roofing images/Metal roofing images/coloured-roofing-sheet-500x500-1.webp';
import img2 from '../../assets/Metal roofing images/Metal roofing images/1000014774.webp';
import img3 from '../../assets/Metal roofing images/Metal roofing images/1000014712.webp';
import img4 from '../../assets/Metal roofing images/Metal roofing images/1000014602.webp';
import img5 from '../../assets/Metal roofing images/Metal roofing images/1000014600.webp';
import img6 from '../../assets/Metal roofing images/Metal roofing images/1000014546.webp';
import img7 from '../../assets/Metal roofing images/Metal roofing images/1000014465.webp';
import img8 from '../../assets/Metal roofing images/Metal roofing images/1000014453.webp';
import img9 from '../../assets/Metal roofing images/Metal roofing images/1000014335.webp';
import img10 from '../../assets/Metal roofing images/Metal roofing images/1000014152.webp';
import img11 from '../../assets/Metal roofing images/Metal roofing images/1000014044.webp';
import img12 from '../../assets/Metal roofing images/Metal roofing images/1000014010.webp';

const RoofingMetalSheets = () => {
    const navigate = useNavigate();
    const galleryImages = [
        { src: img1, title: 'Coloured Roofing Sheet' },
        { src: img2, title: 'Profile View' },
        { src: img3, title: 'Industrial Installation' },
        { src: img4, title: 'Trapezoidal Profile' },
        { src: img5, title: 'Close-up Detail' },
        { src: img6, title: 'Warehouse project' },
        { src: img7, title: 'Roofing Installation' },
        { src: img8, title: 'Sheet Stacking' },
        { src: img9, title: 'Corner Detail' },
        { src: img10, title: 'Site Work' },
        { src: img11, title: 'Completed Project' },
        { src: img12, title: 'Quality Inspection' }
    ];

    const features = [
        'Anti-Capillary Groove for Weather Proofing',
        'Side Lap Design for Water Tightness',
        'Available in Factory Cranked & Curved Profiles',
        'High Strength Materials (PPGI & PPGL)',
        'Superior Water Egress Design',
        'Remarkable Recovery after Deformation'
    ];

    const specifications = [
        { label: 'Cover Width', value: '1000mm' },
        { label: 'Total Width', value: '1080mm' },
        { label: 'Crest Height', value: '35mm' },
        { label: 'Pitch', value: '250mm' },
        { label: 'Thickness Range', value: '0.47mm to 0.80mm' },
        { label: 'Materials', value: 'Pre-Painted Galvanized / Galvalume (Z120, Z180, AZ70, AZ150)' }
    ];

    const techSpecs = [
        { pitch: '250', thickness: '0.47', height: '35', area: '587.98', ixx: '72315.6', zxx: '2856.07' },
        { pitch: '250', thickness: '0.50', height: '35', area: '642.88', ixx: '80683.70', zxx: '3183.54' },
        { pitch: '250', thickness: '0.60', height: '35', area: '767.31', ixx: '103402', zxx: '4077.37' },
        { pitch: '250', thickness: '0.80', height: '35', area: '887.24', ixx: '135238', zxx: '5299.29' }
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
                title="Colour Coated Roofing Sheets Manufacturer in Navi Mumbai"
                description="High-quality color coated roofing sheets (PPGI/PPGL) for industrial sheds in Taloja, Panvel, and Mumbai. Anti-corrosion and durable."
                keywords="colour coated roofing sheets, ppgi sheets manufacturer, metal roofing sheets navi mumbai, industrial roofing sheets"
                canonicalUrl="https://www.zincoroof.com/products/roofing-metal-sheets"
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
                            colour coated roofing sheets
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Leading manufacturer and supplier of high-strength trapezoidal <strong>colour coated roofing sheets</strong> for industrial projects.
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
                                <h2>Premium Colour Coated Roofing Sheets for Industry</h2>
                                <p className={styles.leadText}>
                                    Zinco Roofing Solution provides high-performance <strong>colour coated roofing sheets</strong> tailored for the corrosive landscapes of Maharashtra. Our <strong>colour coated roofing sheets</strong> are designed for maximum longevity.
                                </p>
                            </Card>

                            <div className={styles.benefitsGrid}>
                                <Card variant="glass" className={styles.benefitCard}>
                                    <FaShieldAlt className={styles.benefitIcon} />
                                    <h4>High-Tensile Strength</h4>
                                    <p>Our <strong>colour coated roofing sheets</strong> are available in PPGI and PPGL variants for superior structural integrity.</p>
                                </Card>
                                <Card variant="glass" className={styles.benefitCard}>
                                    <FaCheckCircle className={styles.benefitIcon} />
                                    <h4>Weather Resilience</h4>
                                    <p>Premium coatings on <strong>colour coated roofing sheets</strong> offer 4x better resistance than standard materials.</p>
                                </Card>
                                <Card variant="glass" className={styles.benefitCard}>
                                    <FaExpand className={styles.benefitIcon} />
                                    <h4>Custom Thickness</h4>
                                    <p>Choose <strong>colour coated roofing sheets</strong> from 0.47mm to 0.80mm to match your specific wind load requirements.</p>
                                </Card>
                            </div>

                            <div className={styles.grid2Col}>
                                <Card variant="solid" className={styles.highlightCard}>
                                    <h3>Watertight Engineering</h3>
                                    <p>The anti-capillary technology in our <strong>colour coated roofing sheets</strong> ensures a perfect seal during monsoon cycles.</p>
                                </Card>
                                <Card variant="solid" className={styles.highlightCard}>
                                    <h3>Architectural Finish</h3>
                                    <p>Our <strong>colour coated roofing sheets</strong> come in diverse factory-cranked profiles for modern building designs.</p>
                                </Card>
                            </div>
                        </div>
                    </motion.section>

                    <motion.section
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card variant="solid" className={styles.contentCard}>
                            <h2>The Advantage of Colour Coated Roofing Sheets</h2>
                            <p>Investors choose our <strong>colour coated roofing sheets</strong> for several key reasons:</p>
                            <ul className={styles.styledList}>
                                <li>
                                    <strong>Corrosion Resistance:</strong> Long-term protection for your <strong>colour coated roofing sheets</strong> in acidic zones.
                                </li>
                                <li>
                                    <strong>Thermal Efficiency:</strong> These <strong>colour coated roofing sheets</strong> reflect solar radiation effectively.
                                </li>
                                <li>
                                    <strong>Structural Recovery:</strong> Our <strong>colour coated roofing sheets</strong> maintain shape under heavy vibrations.
                                </li>
                                <li>
                                    <strong>Sustainable Selection:</strong> Green-certified 100% recyclable <strong>colour coated roofing sheets</strong>.
                                </li>
                            </ul>
                        </Card>
                    </motion.section>

                    <motion.section
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2>Standard colour coated roofing sheets Dimensions</h2>
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
                        <h2>Technical Standards for colour coated roofing sheets</h2>
                        <Card variant="solid">
                            <div className={styles.tableWrapper}>
                                <table className={styles.customTable}>
                                    <thead>
                                        <tr>
                                            <th>PITCH (mm)</th>
                                            <th>THICKNESS (mm)</th>
                                            <th>HEIGHT (mm)</th>
                                            <th>AREA (mm2/m)</th>
                                            <th>Ixx (mm4/m)</th>
                                            <th>Zxx (mm3)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {techSpecs.map((row, idx) => (
                                            <tr key={idx}>
                                                <td>{row.pitch}</td>
                                                <td>{row.thickness}</td>
                                                <td>{row.height}</td>
                                                <td>{row.area}</td>
                                                <td>{row.ixx}</td>
                                                <td>{row.zxx}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </motion.section>

                    <section className={styles.section}>
                        <h2>Gallery of colour coated roofing sheets Installations</h2>
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
                                    <img src={img.src} alt="installation of colour coated roofing sheets" className={styles.galleryImage} loading="lazy" decoding="async" />
                                    <div className={styles.galleryOverlay}>
                                        <span>{img.title}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <motion.section
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Longevity of colour coated roofing sheets</h2>
                        <ul className={styles.styledList}>
                            <li>
                                <strong>Regular Cleaning:</strong> Essential for maintaining <strong>colour coated roofing sheets</strong> performance.
                            </li>
                            <li>
                                <strong>Fastener Inspections:</strong> Ensure your <strong>colour coated roofing sheets</strong> stay secure during storms.
                            </li>
                            <li>
                                <strong>Surface Checks:</strong> Monitor <strong>colour coated roofing sheets</strong> for any deep scratches or debris.
                            </li>
                        </ul>
                    </motion.section>

                    <motion.section
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>FAQs about colour coated roofing sheets</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>Are <strong>colour coated roofing sheets</strong> noisy?</h4>
                                <p>Modern <strong>colour coated roofing sheets</strong> combined with insulation are very quiet.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>How long do <strong>colour coated roofing sheets</strong> last?</h4>
                                <p>With proper care, premium <strong>colour coated roofing sheets</strong> can last over 25 years.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Can I customize <strong>colour coated roofing sheets</strong>?</h4>
                                <p>Yes, we provide <strong>colour coated roofing sheets</strong> in various colors and profile thicknesses.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Get Quote for colour coated roofing sheets</h3>
                            <p>Contact the leading manufacturer for custom <strong>colour coated roofing sheets</strong> solutions.</p>
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

export default RoofingMetalSheets;
