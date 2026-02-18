import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaStar, FaMapMarkerAlt, FaExpand } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import styles from './ProductCategory.module.css';

// Import local images
import tileImg1 from '../../assets/Upvc images/Upvc images/1000014156.jpg';
import tileImg2 from '../../assets/Upvc images/Upvc images/1000014234.jpg';
import tileImg3 from '../../assets/Upvc images/Upvc images/1000014255.jpg';
import tileImg4 from '../../assets/Upvc images/Upvc images/1000014270.jpg';
import tileImg5 from '../../assets/Upvc images/Upvc images/1000014273.jpg';
import tileImg6 from '../../assets/Upvc images/Upvc images/1000014616.jpg';

const PVCTileSheet = () => {
    const navigate = useNavigate();
    const galleryImages = [
        { src: tileImg1, title: 'Spanish Tile Profile' },
        { src: tileImg2, title: 'Bungalow Installation' },
        { src: tileImg3, title: 'Aesthetic Ridge View' },
        { src: tileImg4, title: 'Corner Detail' },
        { src: tileImg5, title: 'Standard Profile' },
        { src: tileImg6, title: 'Red Tile Selection' }
    ];

    const features = [
        'Classic Spanish Tile Aesthetic',
        'Lightweight & Easy to Handle',
        'Corrosion & UV Resistant',
        'Excellent Thermal Insulation',
        'Sound Dampening Properties',
        'Fire Retardant Material'
    ];

    const specifications = [
        { label: 'Material', value: 'High-Grade PVC / ASA Coated' },
        { label: 'Thickness', value: '2.0mm - 3.0mm' },
        { label: 'Width', value: '1050mm (Overall)' },
        { label: 'Tile Length', value: '250mm - 300mm' },
        { label: 'Color', value: 'Brick Red / Grey / Blue' },
        { label: 'Service Life', value: '25+ Years' }
    ];

    const applications = [
        'Residential Bungalows in Navi Mumbai',
        'Holiday Homes in Alibaug',
        'Garden Gazebos & Porches',
        'School Buildings in Panvel',
        'Clubhouse & Resort Roofing',
        'Residential Extensions'
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
            />
            <Helmet>
                <link rel="preload" as="image" href={tileImg1} />
            </Helmet>
            <div className={styles.hero} style={{ '--hero-image': `url(${tileImg1})` }} fetchpriority="high">
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
                            PVC Tile Sheets in Navi Mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Achieve a traditional Mediterranean look with modern, lightweight PVC technology.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <h2>Spanish Elegance Meets Modern Thermoplastic Science</h2>
                            <p>
                                In the upscale residential developments and recreational resorts of **Navi Mumbai, Alibaug, and Panvel**, the roof is more than just a functional necessity—it is a vital part of the architectural identity. Zinco Roofing Solution's **PVC Tile Sheets** offer a sophisticated alternative to traditional clay tiles, combining the deep, undulating curves of Spanish or Mediterranean "S-tile" designs with the extreme durability of high-grade synthetic resins. These sheets are ideal for homeowners and developers who desire a classic, high-end look without the weight, fragility, and maintenance headaches of real terracotta.
                            </p>
                            <p>
                                What sets our PVC tiles apart is the use of **ASA (Acrylonitrile Styrene Acrylate)** co-extrusion technology. The top layer of each sheet is a thick, weather-resistant ASA coating that acts as a powerful shield against UV radiation and chemical pollutants. This is particularly important in the salt-laden coastal air of **Mumbai and Alibaug**, where traditional clay can become porous and deteriorate. The ASA coating ensures that the deep brick reds, slate greys, and vibrant blues of your roof remain consistent and fade-resistant for more than **25 years**.
                            </p>

                            <h3>The Advantage of Multi-Layered Protection</h3>
                            <p>
                                Our PVC tile sheets are engineered with a multi-layered structure for maximum performance. While the top ASA layer handles UV protection, the core layers are designed for structural rigidity and thermal insulation. This "thermo-reflective" property is a major benefit in the hot climate of **Panvel and Navi Mumbai**. PVC is a natural insulator compared to metal; it does not conduct heat as rapidly, helping to keep your home's attic or upper floors significantly cooler during the intense Mumbai summer.
                            </p>

                            <h3>Why Bungalow Owners in Mumbai Prefer Zinco PVC Tiles</h3>
                            <ul>
                                <li><strong>Unmatched Corrosion Resistance:</strong> Being 100% thermoplastic, these tiles are completely immune to rust, rot, and marine corrosion. They are the ultimate solution for beachfront properties in **Alibaug**.</li>
                                <li><strong>Lightweight Structural Savings:</strong> At only 5-6 kg per square meter, our PVC tiles are a fraction of the weight of clay tiles (45 kg/sqm). This allows for lighter roof framing, reducing construction costs for bungalows in **Kharghar and Nerul**.</li>
                                <li><strong>Superior Sound Insulation:</strong> The "S" profile and the acoustic properties of PVC work together to dampen the sound of heavy monsoon rain, providing a peaceful environment for your family.</li>
                                <li><strong>Impact and Hail Resistance:</strong> Unlike clay tiles that can crack under the weight of a person or the impact of falling debris, our PVC tiles are remarkably resilient and flexible, making them "walkable" for maintenance.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Technical Specifications</h2>
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
                    </section>

                    <section className={styles.section}>
                        <h2>Features & Benefits</h2>
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
                    </section>

                    <section className={styles.section}>
                        <h2>Key Service Areas</h2>
                        <div className={styles.applicationsGrid}>
                            {applications.map((app, index) => (
                                <Card key={index} variant="solid" className={styles.appCard}>
                                    <FaMapMarkerAlt style={{ color: 'var(--accent-500)', marginBottom: '0.5rem' }} />
                                    <h4>{app}</h4>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Installation Integrity and Regional Reach</h2>
                        <div className={styles.contentBlock}>
                            <p>
                                Precision installation is key to the long-term performance of PVC tiles. Our teams in **Navi Mumbai** use specialized wide-diameter EPDM-backed fasteners that accommodate the thermal expansion of PVC. We ensure that every ridge cap and valley is perfectly sealed, making your roof 100% watertight even in the heaviest **Konkan monsoons**.
                            </p>
                        </div>
                    </section>

                    <motion.section
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Frequently Asked Questions</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>Do PVC tiles fade in the intense Mumbai sun?</h4>
                                <p>Our tiles are co-extruded with a thick layer of ASA resin, which is specifically designed for high UV resistance. This technology ensures that the color remains vibrant and does not peel or fade for over 20-25 years.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Are PVC tiles fire-safe?</h4>
                                <p>Yes, the material used in our tiles is inherently fire-retardant and has a high ignition temperature. It does not support combustion and is self-extinguishing once the flame source is removed.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Can they handle the heavy winds of Alibaug?</h4>
                                <p>Absolutely. When installed with the correct fastener spacing and wind-resistant ridge caps, our PVC tile sheets can withstand wind speeds exceeding 150 kmph, common for coastal Mumbai region.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>How long do these tiles typically last?</h4>
                                <p>With the ASA top-layer and high-grade PVC core, these tiles have a service life of 25 to 35 years with virtually zero maintenance required.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.section}>
                        <h2>Product Gallery</h2>
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
                                    <img src={img.src} alt={img.title} className={styles.galleryImage} />
                                    <div className={styles.galleryOverlay}>
                                        <span>{img.title}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Ready to Upgrade Your Roof?</h3>
                            <p>Get a customized quote for PVC Tile Sheet installation today.</p>
                            <div className={styles.ctaButtons}>
                                <Button size="lg" href="/contact">Get Quote</Button>
                                <Button size="lg" variant="outline" href="tel:+919967203090">Call Now</Button>
                            </div>
                        </Card>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PVCTileSheet;
