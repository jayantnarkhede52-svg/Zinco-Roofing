import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaWind, FaMapMarkerAlt } from 'react-icons/fa';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImg from '../../assets/productshero/ventilator-hero.png';
import styles from './ProductCategory.module.css';

const Ventilators = () => {
    const navigate = useNavigate();
    const features = [
        'Roof Ventilators Navi Mumbai',
        'Turbo Fans Panvel Suppliers',
        'No Power Cost Ventilation',
        'Industrial Air Vents Taloja',
        'Warehouse Cooling Mumbai',
        'Maintenance Free Installation'
    ];

    const specifications = [
        { label: 'Type', value: 'Wind Turbo Ventilator' },
        { label: 'Material', value: 'Aluminum / SS 304' },
        { label: 'Sizes', value: '21" & 24" readily available' },
        { label: 'Bearing', value: 'Double Ball Bearing (Sealed)' },
        { label: 'Warranty', value: '10 Years Performance' },
        { label: 'Base Plate', value: 'Polycarbonate / Metal' }
    ];

    const applications = [
        'Chemical Factories Taloja',
        'Warehouses in Bhiwandi',
        'Manufacturing Units Panvel',
        'Industrial Sheds Rabale',
        'Pharmaceutical Plants Mahape',
        'Textile Units Mumbai'
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
                            Turbo Ventilators Supplier in Navi Mumbai & Panvel
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Industrial wind-driven roof ventilators for factories and warehouses in Taloja, Panvel, and Mumbai.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <h2>Natural Ventilation Mastery: The Science of Turbo Ventilators</h2>
                            <p>
                                In the high-density industrial hubs of **Taloja MIDC, Panvel, and Rabale**, indoor air temperature and quality are constant challenges. Heat buildup from machinery, coupled with the humid Mumbai climate, can create oppressive working conditions. Zinco Roofing Solution's **Turbo Ventilators** offer an elegant, aerodynamic solution that requires zero electricity to exhaust hot air, smoke, and fumes from your facility 24 hours a day.
                            </p>
                            <p>
                                The principle behind our ventilators is a combination of natural convection and centrifugal force. As hot air rises, it creates a slight internal pressure that pushes against the precision-angled vanes of the turbine. This causes the ventilator to rotate even in the absence of external wind. As the turbine spins, it creates a low-pressure area (vacuum) that actively "pulls" stagnant air and industrial fumes out of the building. This constant air exchange ensures a cooler, healthier, and more productive environment for your workforce.
                            </p>

                            <h3>Material Excellence: Aluminum vs. Stainless Steel</h3>
                            <p>
                                To ensure long-term performance in the corrosive coastal air of **Navi Mumbai**, we offer ventilators in high-grade **Aluminum** and **SS 304 (Stainless Steel)**. Aluminum units are exceptionally lightweight and responsive to even the slightest breeze, while our SS 304 models provide maximum durability in chemical-heavy environments like Taloja's processing units. Each unit is equipped with **permanently lubricated, double-sealed ball bearings**, ensuring smooth, noise-free rotation for over a decade without the need for periodic oiling.
                            </p>

                            <h3>Why Industrialists in Panvel Choose Wind-Powered Vents</h3>
                            <ul>
                                <li><strong>Zero Operational Cost:</strong> Harness the power of the wind. Once installed, our ventilators provide 24/7 cooling without adding a single rupee to your electricity bill.</li>
                                <li><strong>Eco-Friendly Cooling:</strong> Reduce your carbon footprint and contribution to the urban heat island effect by using 100% renewable energy for ventilation.</li>
                                <li><strong>Extreme Weather Durability:</strong> Our ventilators are mathematically balanced to withstand high-velocity winds during the Mumbai monsoon without dislodging or "vobbling."</li>
                                <li><strong>Humidity and Fume Removal:</strong> Rapidly exhaust moisture-laden air to prevent condensation on sensitive machinery and remove hazardous VOCs (Volatile Organic Compounds) common in chemical manufacturing.</li>
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
                        <h2>Why Install Turbo Fans in Mumbai?</h2>
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
                        <h2>Our Installation Sites</h2>
                        <div className={styles.applicationsGrid}>
                            {applications.map((app, index) => (
                                <Card key={index} variant="solid" className={styles.appCard}>
                                    <FaWind style={{ color: 'var(--accent-500)', marginBottom: '0.5rem' }} />
                                    <h4>{app}</h4>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Installation and Base Plate Integration</h2>
                        <div className={styles.contentBlock}>
                            <p>
                                A common failure point in roof ventilation is the integration with the roofing sheets. At Zinco, we provide custom-molded **Polycarbonate or Metal Base Plates** designed to match your specific roof profile (trapezoidal, sinusoidal, etc.). This ensures a 100% leak-proof installation in the **Panvel and Bhiwandi** warehouse clusters, where roof integrity is paramount.
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
                                <h4>How many ventilators do I need for my factory?</h4>
                                <p>The number of ventilators depends on the volume of the building, the type of industrial activity (heat generation), and the desired air-change rate. Our technical team in **Navi Mumbai** can perform a rapid calculation to give you an optimized layout for maximum efficiency.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Are these ventilators noisy during high winds?</h4>
                                <p>No. Thanks to our high-precision double ball bearings and aerodynamic vane design, our ventilators operate almost silently, even during the gusty winds typical of the Mumbai coastline.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Can rain water enter through the rotating turbine?</h4>
                                <p>The centrifugal force generated by the spinning turbine actively repels rain-water. Even when the turbine is stationary, the precision-angled vanes are designed to shed water outwards, keeping your facility dry during heavy monsoons.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Do they require regular maintenance?</h4>
                                <p>Our turbo ventilators are virtually maintenance-free. The sealed bearings are lubricated for life. We only recommend an occasional visual inspection to ensure no debris (like plastic bags or birds' nests) is obstructing the turbine.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Remove Heat from your Factory</h3>
                            <p>Contact us for Turbo Vents installation in Panvel.</p>
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

export default Ventilators;
