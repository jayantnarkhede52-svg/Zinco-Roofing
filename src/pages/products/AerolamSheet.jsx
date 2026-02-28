import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImg from '../../assets/productshero/aerolam-hero.webp';
import styles from './ProductCategory.module.css';

const AerolamSheet = () => {
    const navigate = useNavigate();
    const features = [
        '97% Radiant Heat Reflection',
        'Effective Moisture & Vapor Barrier',
        'Lightweight & Easy to Install',
        'Non-Toxic & Fiber-Free Material',
        'Prevents Condensation & Drip',
        'Cost-Effective Thermal Insulation'
    ];

    const specifications = [
        { label: 'Material', value: 'Cross-linked Polyethylene / Bubble Foil' },
        { label: 'Facing', value: 'Double / Single Sided Reinforced Foil' },
        { label: 'Thickness', value: '3mm / 4mm / 8mm / 10mm' },
        { label: 'Reflectivity', value: '96% - 97%' },
        { label: 'Roll Width', value: '1.2m / 1.35m' },
        { label: 'Application', value: 'Under-deck / Over-deck' }
    ];

    const applications = [
        'Industrial Sheds in Navi Mumbai',
        'Poultry & Dairy Farms',
        'Commercial Building Roofs',
        'Warehouse Cooling in Panvel',
        'Residential Attic Insulation',
        'Temporary Structures'
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
                title="Aerolam Thermal Insulation Sheets in Navi Mumbai | Zinco"
                description="Reflective radiant barrier insulation (Aerolam) for industrial sheds in Taloja, Panvel, and Mumbai. Reduces heat by up to 10°C. Energy efficient."
                keywords="aerolam insulation, bubble foil insulation, radiant barrier, thermal insulation sheet, roof insulation mumbai"
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
                            Aerolam Thermal Insulation Sheets
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Keep your buildings cool and energy-efficient with advanced radiant barrier insulation.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <h2>Cooling Your Industrial Environment: Advanced Radiant Barrier Insulation</h2>
                            <p>
                                In the intense summer heat of **Navi Mumbai, Panvel, and Taloja MIDC**, the temperature inside a metal building can often exceed the outside temperature by 10-15°C. This excessive heat not only affects worker productivity but also places an enormous load on cooling systems. Zinco Roofing Solution's **Aerolam and Bubble Foil Thermal Insulation Sheets** are designed to tackle this problem at its source: radiant heat. Unlike bulk insulation that only slows down heat transfer, our radiant barriers reflect it away from your building.
                            </p>
                            <p>
                                At the heart of our **Aerolam sheets** is a multi-layered composite consisting of air-filled polyethylene bubbles or cross-linked foam sandwiched between high-purity aluminum foils. This combination creates a dual-action thermal barrier. The aluminum surfaces reflect up to **97% of radiant heat energy**, while the internal air pockets or foam cells provide a resistive (R-value) barrier against conductive and convective heat transfer. This results in a cooler, more comfortable interior environment for your **factory in Taloja** or **warehouse in Panvel**, even during the peak of the Mumbai summer.
                            </p>

                            <h3>The Science of Emissivity and Reflection</h3>
                            <p>
                                Heat travels through the air primarily in the form of radiation. Standard roofing materials absorb this heat and then re-radiate it into the building. Our insulation sheets have an exceptionally low **"emissivity" (E-value)** rating, meaning they radiate very little of the heat they do absorb. By installing a radiant barrier under your roof, you effectively flip the thermodynamics of the building. In the winter or during cool Mumbai nights, the same barrier helps retain the internal heat, making it a year-round energy-saving solution.
                            </p>

                            <h3>Why Industrial Shed Owners in Mumbai Trust Aerolam</h3>
                            <ul>
                                <li><strong>97% Heat Reflection:</strong> Dramatically reduce the temperature of the air immediately below the roof, leading to a 5-10°C drop in floor-level temperatures.</li>
                                <li><strong>Effective Moisture & Vapor Barrier:</strong> One of the biggest challenges in Mumbai is condensation ("sweating") on the underside of metal roofs. Aerolam acts as a continuous vapor barrier, preventing moisture-laden air from reaching the cool metal and dripping onto your goods.</li>
                                <li><strong>Non-Toxic and Fiber-Free:</strong> Unlike some traditional glasswool insulation, Aerolam is non-carcinogenic, fiber-free, and safe for use in **food processing plants and pharmaceutical warehouses** in Navi Mumbai.</li>
                                <li><strong>Lightweight and Easy to Retrofit:</strong> Our sheets are incredibly thin and lightweight, making them easy to install on new structures or retrofit onto existing ones without adding significant weight to the roof.</li>
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
                        <h2>Key Benefits</h2>
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
                        <h2>Application Areas</h2>
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
                        <h2>Installation Quality and Overlap Sealing</h2>
                        <div className={styles.contentBlock}>
                            <p>
                                For a radiant barrier to work effectively, it must be installed with an air space between the barrier and the roof sheet. Our installation teams in **Navi Mumbai** use specialized spacers and aluminum tape to ensure that the overlaps are perfectly sealed. This "envelope" approach maximizes the thermal resistance and prevents air leakage, ensuring that your investment in insulation pays for itself in energy savings within just a few seasons.
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
                                <h4>How does Aerolam differ from standard glasswool?</h4>
                                <p>Glasswool is a "bulk" insulation that slows down heat transfer. Aerolam is a "radiant barrier" that reflects heat. In the hot Mumbai sun, reflecting heat is often more effective than simply slowing it down.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Can this insulation help with noise reduction?</h4>
                                <p>Yes! The multi-layered bubble or foam structure acts as a sound dampener, reducing the sound of heavy rain on a metal roof, making it quieter than an uninsulated shed.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Is Aerolam fire resistant?</h4>
                                <p>Our insulation sheets are manufactured from fire-retardant (FR grade) materials. They are designed not to support combustion and are safe for use in industrial settings across the Mumbai region.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>What is the lifespan of bubble foil insulation?</h4>
                                <p>Because the foil is reinforced and the polyethylene is chemically stable, Aerolam insulation can last for 15-20 years without any significant degradation in its thermal properties.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Cool Your Building, Save Energy</h3>
                            <p>Request a quote for Aerolam insulation installation in Navi Mumbai.</p>
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

export default AerolamSheet;
