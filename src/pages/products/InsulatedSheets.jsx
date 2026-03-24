import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaThermometerHalf, FaBuilding, FaExpand, FaLayerGroup, FaShieldAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import styles from './ProductCategory.module.css';

// Import local images
import heroImg from '../../assets/productshero/puf-panel-hero.webp';
import pufImg1 from '../../assets/Puf panel images/Puf panel images/1000014168.webp';
import pufImg2 from '../../assets/Puf panel images/Puf panel images/1000014252.webp';
import pufImg4 from '../../assets/Puf panel images/Puf panel images/1000014626.webp';
import pufImg5 from '../../assets/Puf panel images/Puf panel images/1001155530.webp';
import pufImg6 from '../../assets/Puf panel images/Puf panel images/1001155531.webp';
import pufImg7 from '../../assets/Puf panel images/Puf panel images/1001155532.webp';

const InsulatedSheets = () => {
    const navigate = useNavigate();
    const galleryImages = [
        { src: pufImg1, title: 'puf insulated roofing sheets' },
        { src: pufImg2, title: 'puf panels navi mumbai' },
        { src: pufImg4, title: 'insulated roofing panels' },
        { src: pufImg5, title: 'sandwich panels mumbai' },
        { src: pufImg6, title: 'puf roofing installation' },
        { src: pufImg7, title: 'thermal puf panels' }
    ];

    const features = [
        'High Rib Profile for puf insulated sheets',
        'Superior Spanning Capabilities for Industrial Sheds',
        'Rigid Polyurethane Foam (RPUF) Insulation',
        'Excellent Thermal & Sound Insulation',
        'Watertight Side Lap Design',
        'PPGI/PPGL Exterior & Interior Skins'
    ];

    const specifications = [
        { label: 'Module', value: 'Panel Width 1023mm' },
        { label: 'Construction Width', value: '1000mm (Effective Cover)' },
        { label: 'Insulation Material', value: 'Rigid Polyurethane Foam (RPUF)' },
        { label: 'Density', value: '40Kg/m³ ± 2 Kg/m³' },
        { label: 'Skin Material', value: 'Pre-Painted Galvanized / Galvalume Steel' },
        { label: 'Skin Thickness', value: '0.45mm / 0.50mm / 0.60mm' }
    ];

    const techSpecs = [
        { label: 'Panel Thickness', value: '30mm, 50mm, 80mm, 100mm, 150mm' },
        { label: 'Density', value: '40 kg/m³' },
        { label: 'Lower Skin', value: '0.5mm / 0.6mm PPGI/PPGL' },
        { label: 'Upper Skin', value: '0.5mm / 0.6mm PPGI/PPGL' },
        { label: 'Insulation', value: 'Rigid Polyurethane Foam' },
        { label: 'Width', value: '1000mm Effective Cover' }
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
                title="PUF Insulated Roofing Sheets Manufacturer in Navi Mumbai"
                description="Premium PUF insulated roofing panels for cold storage and industrial sheds in Taloja, Mahape, and Navi Mumbai. Energy-efficient roofing solutions."
                keywords="puf insulated sheets, puf panels navi mumbai, cold storage panels, insulated roofing sheets"
                canonicalUrl="https://www.zincoroof.com/products/insulated-sheets"
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
                            puf insulated sheets
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            High-performance <strong>puf insulated sheets</strong> with 5-crest high-rib profile for extreme strength and thermal efficiency.
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
                                <h2>Premium puf insulated sheets for Thermal Efficiency</h2>
                                <p className={styles.leadText}>
                                    Zinco's <strong>puf insulated sheets</strong> provide a world-class solution for buildings requiring temperature control and extreme structural strength.
                                </p>
                            </Card>

                            <div className={styles.benefitsGrid}>
                                <Card variant="glass" className={styles.benefitCard}>
                                    <FaThermometerHalf className={styles.benefitIcon} />
                                    <h4>Insulation Layers</h4>
                                    <p>Our <strong>puf insulated sheets</strong> reduce HVAC energy consumption by up to 40% in industrial zones.</p>
                                </Card>
                                <Card variant="glass" className={styles.benefitCard}>
                                    <FaLayerGroup className={styles.benefitIcon} />
                                    <h4>Structural Integrity</h4>
                                    <p>Superior mechanical strength of <strong>puf insulated sheets</strong> allows for wider purlin spacing and savings.</p>
                                </Card>
                                <Card variant="glass" className={styles.benefitCard}>
                                    <FaShieldAlt className={styles.benefitIcon} />
                                    <h4>High Density Core</h4>
                                    <p>The core of our <strong>puf insulated sheets</strong> provides lifelong insulation that won't degrade over time.</p>
                                </Card>
                            </div>

                            <div className={styles.grid2Col}>
                                <Card variant="solid" className={styles.highlightCard}>
                                    <h3>Coastal Resilience</h3>
                                    <p>Modern <strong>puf insulated sheets</strong> offer superior protection against high humidity on the Maharashtra coastline.</p>
                                </Card>
                                <Card variant="solid" className={styles.highlightCard}>
                                    <h3>Airtight Joints</h3>
                                    <p>The tongue-and-groove system in our <strong>puf insulated sheets</strong> ensures a precision, weather-proof installation.</p>
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
                        <h2>Standard puf insulated sheets Specifications</h2>
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
                        <h2>Components of puf insulated sheets</h2>
                        <div className={styles.applicationsGrid}>
                            {techSpecs.slice(0, 4).map((tech, index) => (
                                <Card key={index} variant="solid" className={styles.appCard}>
                                    <FaBuilding style={{ color: 'var(--accent-500)', marginBottom: '0.5rem' }} />
                                    <h4>{tech.label}</h4>
                                    <p>{tech.value}</p>
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
                        <div className={styles.contentBlock}>
                            <Card variant="solid" className={styles.contentCard}>
                                <h2>Industrial Applications for puf insulated sheets</h2>
                                <p>
                                    Our <strong>puf insulated sheets</strong> are the preferred choice for mission-critical infrastructure in Cold Storage and Pharma. The hygienic surfaces of these <strong>puf insulated sheets</strong> make them ideal for food units.
                                </p>
                                <p>
                                    In warehouse hubs, <strong>puf insulated sheets</strong> help maintain comfortable working conditions, protecting sensitive inventory from the intense summer heat effectively.
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
                        <div className={styles.contentBlock}>
                            <Card variant="solid" className={styles.contentCard}>
                                <h2>Longevity of puf insulated sheets</h2>
                                <p>
                                    Zinco's <strong>puf insulated sheets</strong> are designed for "Life of Building" performance in high-stress industrial environments. These <strong>puf insulated sheets</strong> maintain insulation property for decades.
                                </p>
                            </Card>
                        </div>
                    </motion.section>

                    <motion.section
                        className={styles.section}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Gallery of puf insulated sheets Projects</h2>
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
                                    <img src={img.src} alt="puf insulated sheets" className={styles.galleryImage} loading="lazy" decoding="async" />
                                    <div className={styles.galleryOverlay}>
                                        <span>{img.title}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Get Quote for puf insulated sheets</h3>
                            <p>Get a technical consultation for premium <strong>puf insulated sheets</strong> installation today.</p>
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

export default InsulatedSheets;
