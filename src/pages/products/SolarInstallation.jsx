import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaSun, FaLightbulb, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/services-hero.png';
import styles from './ProductCategory.module.css';

const SolarInstallation = () => {
    const navigate = useNavigate();
    const features = [
        'Commercial Solar Mounting',
        'Industrial Roof Solar Panels',
        'Smart Energy Solutions',
        'Professional Fixing Systems',
        'Maintenance Services',
        'Energy Efficiency'
    ];

    const products = [
        { label: 'Solar Panel Mounting', desc: 'Secure mounting for industrial roofs' },
        { label: 'Energy Monitoring', desc: 'Smart systems to track energy usage' },
        { label: 'Maintenance & Cleaning', desc: 'Regular upkeep for maximum efficiency' },
        { label: 'Battery Storage', desc: 'Energy storage solutions for industrial use' },
        { label: 'Grid Tie-In', desc: 'Professional grid connection services' },
        { label: 'Roof Integration', desc: 'Seamless solar integration with existing roofs' }
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
                title="Solar Panel Installation Services Navi Mumbai"
                description="Expert solar panel installation and mounting services for industrial and commercial roofs in Navi Mumbai, Panvel, and Taloja."
                keywords="solar panel installation, commercial solar, industrial solar, energy efficiency, solar mounting"
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
                            < FaArrowLeft /> Back to Products
                        </button>
                        <motion.span className={styles.sublabel} variants={itemVariants}>
                            CLEAN ENERGY SOLUTIONS
                        </motion.span>
                        <motion.h1 variants={itemVariants}>
                            Solar Panel Installation
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Expert solar solutions for industrial and commercial roofs in Navi Mumbai.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <h2>Powering Industry with Sustainable Energy</h2>
                            <p>
                                With the rising costs of energy and the increasing focus on sustainability, transitioning to solar energy is a smart investment for any industrial facility. At Zinco Roofing Solution, we provide comprehensive **Solar Panel Installation** services, focusing on secure mounting and reliable performance on industrial and commercial roofs.
                            </p>
                            <p>
                                Our team understands the unique challenges of mounting solar panels on different roofing profiles, from trapezoidal metal sheets to insulated PUF panels. We use specialized fixing systems that ensure a leak-proof and secure installation, even in high-wind areas like **Panvel** and **Vashi**.
                            </p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Our Solar Solutions</h2>
                        <div className={styles.applicationsGrid}>
                            {products.map((prod, index) => (
                                <Card key={index} variant="solid" className={styles.appCard}>
                                    <h4>{prod.label}</h4>
                                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--gray-400)' }}>{prod.desc}</p>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Available Locations</h2>
                        <div className={styles.featuresGrid}>
                            {['Navi Mumbai', 'Panvel', 'Taloja MIDC', 'Vashi', 'Thane', 'Mumbai'].map((loc, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.featureItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <FaMapMarkerAlt className={styles.checkIcon} />
                                    <span>{loc}</span>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <h3>The Zinco Approach to Solar Mounting</h3>
                            <p>
                                We prioritize both energy efficiency and roof integrity. Our mounting systems are designed to distribute load evenly and avoid any damage to the underlying roofing material. We also provide professional maintenance and cleaning services to ensure your solar array continues to operate at peak performance for years to come.
                            </p>
                        </div>
                    </section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Switch to Solar with Confidence</h3>
                            <p>Contact us for a professional solar feasibility assessment of your industrial roof.</p>
                            <div className={styles.ctaButtons}>
                                <Button size="lg" href="/contact">Get Free Quote</Button>
                                <Button size="lg" variant="outline" href="tel:+919967203090">Call Expert</Button>
                            </div>
                        </Card>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default SolarInstallation;
