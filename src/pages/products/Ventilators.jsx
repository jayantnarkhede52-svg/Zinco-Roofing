import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaWind, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
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
            <SEO
                title="Roof Ventilator Manufacturer in Navi Mumbai | Free Site Visit"
                description="Get high-quality roof ventilator in Navi Mumbai from an experienced manufacturer. Free site visit, fast delivery and expert installation available."
                keywords="Roof Ventilator in Navi Mumbai, turbo ventilators navi mumbai, roof ventilators in Navi Mumbai, Industrial ventilation system, Roof Ventilator Price in Navi Mumbai"
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
                            Roof Ventilator in Navi Mumbai & Turbo Ventilators Supplier
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
                                In the high-density industrial hubs of **Taloja MIDC, Panvel, and Rabale**, indoor air temperature and quality are constant challenges. Heat buildup from machinery, coupled with the humid Mumbai climate, can create oppressive working conditions. Zinco Roofing Solution's **Turbo Ventilators** offer an elegant, aerodynamic **Industrial ventilation system** that requires zero electricity to exhaust hot air, smoke, and fumes from your facility 24 hours a day.
                            </p>
                            <p>
                                As a leading provider of **Roof Ventilator in Navi Mumbai**, we understand the local climate challenges. The principle behind our ventilators is a combination of natural convection and centrifugal force. As hot air rises, it creates a slight internal pressure that pushes against the precision-angled vanes of the turbine. This causes the **turbo ventilators navi mumbai** businesses rely on to rotate even in the absence of external wind. As the turbine spins, it creates a low-pressure area (vacuum) that actively "pulls" stagnant air and industrial fumes out of the building. This constant air exchange ensures a cooler, healthier, and more productive environment for your workforce, making it an essential **Industrial ventilation system**.
                            </p>

                            <h3>Material Excellence: Aluminum vs. Stainless Steel</h3>
                            <p>
                                To ensure long-term performance in the corrosive coastal air of **Navi Mumbai**, we offer **roof ventilators in Navi Mumbai** forged from high-grade **Aluminum** and **SS 304 (Stainless Steel)**. Aluminum units are exceptionally lightweight and responsive to even the slightest breeze, while our SS 304 models provide maximum durability in chemical-heavy environments like Taloja's processing units. Each unit is equipped with **permanently lubricated, double-sealed ball bearings**, ensuring smooth, noise-free rotation for over a decade without the need for periodic oiling. We provide the most durable **Roof Ventilator in Navi Mumbai**.
                            </p>

                            <h3>Why Industrialists in Panvel Choose Wind-Powered Vents</h3>
                            <ul>
                                <li><strong>Zero Operational Cost:</strong> Harness the power of the wind with our **Industrial ventilation system**. Once installed, our **roof ventilators in Navi Mumbai** provide 24/7 cooling without adding a single rupee to your electricity bill.</li>
                                <li><strong>Eco-Friendly Cooling:</strong> Reduce your carbon footprint and contribution to the urban heat island effect by using 100% renewable energy for ventilation. Zinco is the top choice for **turbo ventilators navi mumbai**.</li>
                                <li><strong>Extreme Weather Durability:</strong> Our ventilators are mathematically balanced to withstand high-velocity winds during the Mumbai monsoon without dislodging or "vobbling." This reliability makes us the preferred source for **Roof Ventilator in Navi Mumbai**.</li>
                                <li><strong>Humidity and Fume Removal:</strong> Rapidly exhaust moisture-laden air to prevent condensation on sensitive machinery and remove hazardous VOCs (Volatile Organic Compounds) common in chemical manufacturing. An effective **Industrial ventilation system** is crucial for safety.</li>
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
                        <h2>Cost-Effective Ventilation Solutions</h2>
                        <div className={styles.contentBlock}>
                            <p>
                                When considering a new **Industrial ventilation system**, cost is always a factor. We offer the most competitive **Roof Ventilator Price in Navi Mumbai**. Unlike powered exhaust fans that incur ongoing electricity costs and maintenance expenses, our wind-driven ventilators are a one-time investment.
                            </p>
                            <p>
                                Many factory owners ask about the **Roof Ventilator Price in Navi Mumbai**. While prices vary based on material (Aluminum vs. SS 304) and throat size (21" vs 24"), Zinco guarantees transparency and value. We provide a detailed quote that includes installation, ensuring no hidden costs. Investing in high-quality **turbo ventilators navi mumbai** pays for itself within months through energy savings.
                            </p>
                            <p>
                                For the best **Roof Ventilator Price in Navi Mumbai**, contact our sales team today. We offer volume discounts for large warehouses and industrial parks in Taloja and Panvel. Don't compromise on quality; choose the trusted name for **Roof Ventilator in Navi Mumbai**.
                            </p>
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
                                A common failure point in roof ventilation is the integration with the roofing sheets. At Zinco, we provide custom-molded **Polycarbonate or Metal Base Plates** designed to match your specific roof profile (trapezoidal, sinusoidal, etc.). This ensures a 100% leak-proof installation in the **Panvel and Bhiwandi** warehouse clusters, where roof integrity is paramount. Trust Zinco for your next **Industrial ventilation system** project.
                            </p>
                            <p>
                                Proper installation is key to the performance of any **Roof Ventilator in Navi Mumbai**. Our certified teams ensure that every unit is perfectly leveled and sealed, preventing leakage even in heavy rains. We are the experts in **turbo ventilators navi mumbai** installation.
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
                                <p>The number of ventilators depends on the volume of the building, the type of industrial activity (heat generation), and the desired air-change rate. As a premier provider of **roof ventilators in Navi Mumbai**, our technical team can perform a rapid calculation to give you an optimized layout for maximum efficiency.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Are these ventilators noisy during high winds?</h4>
                                <p>No. Thanks to our high-precision double ball bearings and aerodynamic vane design, our **turbo ventilators navi mumbai** operate almost silently, even during the gusty winds typical of the Mumbai coastline.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>What is the typical Roof Ventilator Price in Navi Mumbai?</h4>
                                <p> The **Roof Ventilator Price in Navi Mumbai** depends on the specification. Stainless steel models cost slightly more than aluminum ones but offer superior corrosion resistance. Contact us for a precise quote tailored to your needs.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Can rain water enter through the rotating turbine?</h4>
                                <p>The centrifugal force generated by the spinning turbine actively repels rain-water. Even when the turbine is stationary, the precision-angled vanes of our **Roof Ventilator in Navi Mumbai** are designed to shed water outwards, keeping your facility dry.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Do they require regular maintenance?</h4>
                                <p>Our turbo ventilators are virtually maintenance-free. The sealed bearings are lubricated for life, making them a hassle-free **Industrial ventilation system**. We only recommend an occasional visual inspection.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Remove Heat from your Factory</h3>
                            <p>Contact us for the best **Roof Ventilator Price in Navi Mumbai**.</p>
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
