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
        { src: pufImg1, title: 'Panel Profile' },
        { src: pufImg2, title: 'Prefab Structure' },
        { src: pufImg4, title: 'Stacked Panels' },
        { src: pufImg5, title: 'Close-up Detail' },
        { src: pufImg6, title: 'Modern Installation' },
        { src: pufImg7, title: 'Thermo Shield PUF' }
    ];

    const features = [
        'High Rib Profile (5 Main Crests & 3 Mini Ribs)',
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

    const applications = [
        'Cold Storage in Taloja MIDC',
        'Pharma Plants in Mahape',
        'Industrial Roof & Wall Cladding',
        'Clean Rooms in Mumbai',
        'Warehouse Energy Optimization',
        'Prefab Infrastructure Projects'
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
            />
            <Helmet>
                <link rel="preload" as="image" href={heroImg} />
            </Helmet>
            <div className={styles.hero} style={{ '--hero-image': `url(${heroImg})` }} fetchpriority="high">
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
                            PUF Roof & Wall Panels in Navi Mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            High-performance insulated sandwich panels with 5-crest high-rib profile for extreme strength and thermal efficiency.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <Card variant="solid" className={styles.contentCard}>
                                <h2>Gold Standard in Thermal Efficiency</h2>
                                <p className={styles.leadText}>
                                    Zinco's <strong>High-Rib PUF Panels</strong> provide a world-class solution for buildings requiring strict temperature control and extreme structural strength.
                                </p>
                            </Card>

                            <div className={styles.benefitsGrid}>
                                <Card variant="glass" className={styles.benefitCard}>
                                    <FaThermometerHalf className={styles.benefitIcon} />
                                    <h4>Thermal Barrier</h4>
                                    <p>Low U-values (as low as 0.20 W/m²K) reduce HVAC energy consumption by up to 40% in Mumbai's heat.</p>
                                </Card>
                                <Card variant="glass" className={styles.benefitCard}>
                                    <FaLayerGroup className={styles.benefitIcon} />
                                    <h4>5-Crest High-Rib</h4>
                                    <p>Superior mechanical strength allowing for wider purlin spacing and significant structural steel savings.</p>
                                </Card>
                                <Card variant="glass" className={styles.benefitCard}>
                                    <FaShieldAlt className={styles.benefitIcon} />
                                    <h4>High Density Core</h4>
                                    <p>40Kg/m³ Rigid Polyurethane Foam (RPUF) core provides lifelong insulation that won't degrade.</p>
                                </Card>
                            </div>

                            <div className={styles.grid2Col}>
                                <Card variant="solid" className={styles.highlightCard}>
                                    <h3>Coastal Durability</h3>
                                    <p>PPGI/PPGL skins offer superior protection against high humidity and corrosive salt-air on the Mumbai coastline.</p>
                                </Card>
                                <Card variant="solid" className={styles.highlightCard}>
                                    <h3>Rapid Installation</h3>
                                    <p>The tongue-and-groove interlocking system allows for fast, precision installation and airtight joints.</p>
                                </Card>
                            </div>
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
                        <h2>Panel Component Details</h2>
                        <div className={styles.applicationsGrid}>
                            {techSpecs.slice(0, 4).map((tech, index) => (
                                <Card key={index} variant="solid" className={styles.appCard}>
                                    <FaBuilding style={{ color: 'var(--accent-500)', marginBottom: '0.5rem' }} />
                                    <h4>{tech.label}</h4>
                                    <p>{tech.value}</p>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Industrial Efficiency</h2>
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
                        <div className={styles.contentBlock}>
                            <Card variant="solid" className={styles.contentCard}>
                                <h2>Versatile Industrial Applications</h2>
                                <p>
                                    From <strong>Cold Storage facilities in Panvel</strong> to <strong>high-precision Pharmaceutical Clean Rooms in Mahape</strong>, our PUF panels are the preferred choice for mission-critical infrastructure. The airtight joints and hygienic surfaces make them ideal for food processing units (HACCP compliant) and electronic manufacturing hubs where dust control and temperature stability are paramount.
                                </p>
                                <p>
                                    In warehouse hubs across <strong>Bhiwandi and NH4</strong>, our panels help maintain comfortable working conditions for employees, increasing productivity and protecting temperature-sensitive inventory from the intense Maharashtra summer heat.
                                </p>
                            </Card>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <Card variant="solid" className={styles.contentCard}>
                                <h2>Maintenance and Durability</h2>
                                <p>
                                    Zinco PUF panels are designed for "Life of Building" performance. The closed-cell structure of the foam core means it will not absorb water, even if the exterior skin is damaged. However, we recommend regular cleaning of the panel surfaces to prevent industrial dust and chemical buildup, which can potentially affect the exterior coating over decades. The interlocking joints should be inspected briefly once a year to ensure the butyl sealants remain intact for maximum weather-proofing.
                                </p>
                            </Card>
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
                                <h4>Can these panels be used for existing roof retrofitting?</h4>
                                <p>Yes! Our PUF panels are an excellent choice for retrofitting old industrial sheds. They can be installed directly over existing structures (depending on structural integrity) to provide instant thermal upgrades and stop persistent leaks.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>What thicknesses are available for cold storage?</h4>
                                <p>For standard temperature storage (0°C to 10°C), we recommend 50mm to 80mm panels. For deep-freeze applications (-18°C and below), we provide 100mm to 150mm panels to ensure maximum thermal containment and minimal compressor load.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Are the panels pest and rodent resistant?</h4>
                                <p>Absolutely. The steel-to-steel interlocking joints and the rigid nature of the foam core make it virtually impossible for rodents or pests to penetrate the insulation, ensuring a hygienic environment for your facility.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Do you offer different color options for the skins?</h4>
                                <p>Yes, we offer a wide variety of RAL shades. While Off-White (RAL 9002) is the standard for solar reflectivity, we can provide custom colors to match your corporate branding or local MIDC architectural guidelines.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Reduce Your Energy Costs Today</h3>
                            <p>Get a technical consultation for PUF panel installation in Navi Mumbai.</p>
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

export default InsulatedSheets;
