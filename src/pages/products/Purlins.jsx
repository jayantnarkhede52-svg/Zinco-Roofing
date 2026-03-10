import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaProjectDiagram, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/services-hero.webp';
import styles from './ProductCategory.module.css';

const Purlins = () => {
    const navigate = useNavigate();
    const features = [
        'Purlin Manufacturer Navi Mumbai',
        'C & Z Purlins Panvel',
        'Galvanized Purlins Taloja',
        'Pre-Punched Steel Channels',
        'Structural Steel Mumbai',
        'Quick Delivery to MIDC Areas'
    ];

    const specifications = [
        { label: 'Material', value: 'High Tensile Galvanized Steel' },
        { label: 'Yield Strength', value: '345 MPa / 450 MPa / 550 MPa' },
        { label: 'Thickness', value: '1.5mm - 3.0mm' },
        { label: 'Web Height', value: '80mm - 300mm' },
        { label: 'Lengths', value: 'Custom cut as per order' },
        { label: 'Zinc Coating', value: '120gsm / 275gsm' }
    ];

    const applications = [
        'PEB Structures in Panvel',
        'Industrial Sheds Taloja',
        'Solar Mounting Mumbai',
        'Mezzanine Floors Vashi',
        'Factory Framing Bhiwandi',
        'Metro Stations Mumbai'
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
            />
            <Helmet>
                <link rel="preload" as="image" href={heroImage} />
            </Helmet>
            <div className={styles.hero} style={{ '--hero-image': `url(${heroImage})` }} fetchpriority="high">
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
                            C & Z Purlins Manufacturer in Navi Mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            High-strength Galvanized C and Z Purlins for structural support in Panvel, Taloja, and Mumbai construction projects.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <Card variant="solid" className={styles.contentCard}>
                                <h2>Precision-Engineered C & Z Purlins: The Backbone of Modern PEB Structures</h2>
                                <p>
                                    In the rapidly expanding industrial corridors of <strong>Navi Mumbai, Panvel, and Taloja MIDC</strong>, the efficiency of warehouse and factory construction depends heavily on the quality of structural framing. Zinco Roofing Solution's <strong>C and Z Purlins</strong> are engineered to provide maximum structural support with minimum weight, making them the preferred choice for Pre-Engineered Buildings (PEB) and large-scale industrial sheds.
                                </p>
                                <p>
                                    Unlike traditional hot-rolled angles and channels, our cold-formed purlins offer a significantly higher strength-to-weight ratio. This allows for longer spans between rafters, reducing the overall steel requirement for your project by up to 25-30%. Manufactured from high-tensile galvanized steel (standard yield strengths of <strong>345 MPa to 550 MPa</strong>), these purlins provide the rigid framework necessary to support modern roofing and wall cladding systems against high wind pressures and seismic loads.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>C-Purlins vs. Z-Purlins: When to Use Which?</h3>
                                <p>
                                    Understanding the mechanical differences between C and Z profiles is crucial for structural integrity. Our <strong>C-Purlins</strong> are primarily used for simple span applications and are ideal for door frames, window trimmers, and smaller warehouse structures in <strong>Panvel</strong>. They are valued for their perpendicular stability and ease of bolting.
                                </p>
                                <p>
                                    For larger, multi-span industrial projects in <strong>Taloja MIDC</strong>, our <strong>Z-Purlins</strong> are the standard. Z-profiles feature one flange wider than the other, allowing them to be "lapped" or nested together at the support points. This nesting creates a continuous structural member across multiple spans, significantly increasing the load-bearing capacity and rigidity of the entire roof.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Why Industrialists in Mumbai Choose Zinco Purlins</h3>
                                <ul className={styles.styledList}>
                                    <li><strong>Automated Precision:</strong> Our fully automated roll-forming lines ensure that every purlin is straight and dimensionally accurate to the millimeter.</li>
                                    <li><strong>Pre-Punched Efficiency:</strong> We provide purlins with pre-punched holes based on your structural drawings, eliminating on-site drilling, reducing labor time, and ensuring perfect alignment during assembly.</li>
                                    <li><strong>Superior Corrosion Protection:</strong> With galvanized coatings ranging from <strong>120 GSM to 275 GSM</strong>, our purlins are protected against the hidden corrosion that can weaken a building's frame from the inside out, especially in coastal zones like <strong>Navi Mumbai</strong>.</li>
                                    <li><strong>Zero Wastage:</strong> Every purlin is custom-cut to your specified length (up to 12 meters), ensuring you only pay for what you use and simplifying on-site logistics.</li>
                                </ul>
                            </Card>
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
                        <h2>Why Choose Our Purlins?</h2>
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
                        <h2>Major Supply Areas</h2>
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
                        <div className={styles.contentBlock}>
                            <Card variant="solid" className={styles.contentCard}>
                                <h2>Installation and Structural Value</h2>
                                <p>
                                    Proper purlin installation is the key to a leak-proof roof. Our technical team ensures that purlin spacing and fastening methods are optimized for the specific roofing sheets you've chosen. For heavy-duty industrial applications in the <strong>warehouse hubs of Bhiwandi and NH4</strong>, we recommend Z-lapping to maximize the structural lifespan of the facility.
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
                                <h4>Can I order purlins in custom thicknesses?</h4>
                                <p>Yes! We can roll-form purlins from galvanized coils with thicknesses ranging from 1.5mm to 3.0mm, allowing you to match the structural requirements exactly as specified by your engineer.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>What's the advantage of pre-punched purlins?</h4>
                                <p>Pre-punched holes (round or elongated) ensure that the bolting at the laps and cleats is perfectly aligned. This significantly speeds up the erection process and ensures that the structure is squared and leveled correctly.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Do you provide Z-Purlins for solar mounting structures?</h4>
                                <p>Absolutely. Many solar projects in and around **Karjat and Panvel** use our high-tensile Z-purlins because they offer the durability and precision needed for large-scale solar arrays.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>How long does it take for custom orders?</h4>
                                <p>For standard profiles, we typically maintain a fast turnaround time for the **MIDC industrial areas**. Custom punching and lengths can usually be processed and delivered within 3-5 working days depending on quantity.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Order Structural Steel in Navi Mumbai</h3>
                            <p>Get best rates for C & Z Purlins in Panvel.</p>
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

export default Purlins;
