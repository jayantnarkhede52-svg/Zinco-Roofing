import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaThermometerHalf, FaBuilding, FaExpand } from 'react-icons/fa';
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
                            <h2>Advanced High-Rib PUF Insulation Panels: The Gold Standard in Thermal Efficiency</h2>
                            <p>
                                In the demanding industrial landscape of the **Taloja MIDC, Mahape, and Navi Mumbai** regions, thermal management is not just a comfort—it's a critical operational requirement. Zinco Roofing Solution's **High-Rib PUF (Polyurethane Foam) Panels** provide a world-class solution for buildings that require strict temperature control, energy efficiency, and superior structural strength.
                            </p>
                            <p>
                                Our panels are designed with a unique **5-crest high-rib profile**. Unlike standard 3-rib panels found in the market, our 5-rib design offers exceptional mechanical properties, significantly increasing the load-bearing capacity and allowing for wider purlin spacing. This translates directly into structural steel savings for your project without sacrificing safety or durability. The core of our panels consists of high-density **Rigid Polyurethane Foam (RPUF)**, CFC-free and moisture-resistant, ensuring a long-lasting thermal barrier that doesn't degrade over time.
                            </p>

                            <h3>Material Science: The PUF Advantage</h3>
                            <p>
                                The "sandwich" construction of our panels—featuring two high-strength steel skins bonded to a rigid foam core—creates a composite structure of remarkable strength. With a standard density of **40Kg/m³ (± 2 Kg/m³)**, our PUF panels provide the lowest thermal conductivity of any commercially available insulation material. This high-performance core is coupled with **Pre-Painted Galvanized (PPGI)** or **Galvalume (PPGL)** skins, offering superior protection against the high humidity and corrosive salt-air characteristic of the Mumbai coastline.
                            </p>

                            <h3>Why Invest in Insulated Roofing?</h3>
                            <ul>
                                <li><strong>Unmatched Energy Savings:</strong> Reduce your HVAC energy consumption by up to 40% through superior thermal resistance (U-values as low as 0.20 W/m²K depending on thickness).</li>
                                <li><strong>Rapid Installation:</strong> The tongue-and-groove interlocking system allows for fast, precision installation, reducing on-site labor costs and getting your facility operational faster.</li>
                                <li><strong>Acoustic Comfort:</strong> The dense foam core acts as an excellent sound dampener, significantly reducing noise from heavy rainfall and industrial machinery.</li>
                                <li><strong>Fire Safety:</strong> Our PUF cores can be formulated with fire-retardant properties to meet stringent industrial safety standards.</li>
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
                        <h2>Versatile Industrial Applications</h2>
                        <div className={styles.contentBlock}>
                            <p>
                                From **Cold Storage facilities in Panvel** to **high-precision Pharmaceutical Clean Rooms in Mahape**, our PUF panels are the preferred choice for mission-critical infrastructure. The airtight joints and hygienic surfaces make them ideal for food processing units (HACCP compliant) and electronic manufacturing hubs where dust control and temperature stability are paramount.
                            </p>
                            <p>
                                In warehouse hubs across **Bhiwandi and NH4**, our panels help maintain comfortable working conditions for employees, increasing productivity and protecting temperature-sensitive inventory from the intense Maharashtra summer heat.
                            </p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Maintenance and Durability</h2>
                        <div className={styles.contentBlock}>
                            <p>
                                Zinco PUF panels are designed for "Life of Building" performance. The closed-cell structure of the foam core means it will not absorb water, even if the exterior skin is damaged. However, we recommend regular cleaning of the panel surfaces to prevent industrial dust and chemical buildup, which can potentially affect the exterior coating over decades. The interlocking joints should be inspected briefly once a year to ensure the butyl sealants remain intact for maximum weather-proofing.
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
