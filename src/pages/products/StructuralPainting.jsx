import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaPaintRoller, FaShieldAlt, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/services-hero.webp';
import styles from './ProductCategory.module.css';

const StructuralPainting = () => {
    const navigate = useNavigate();
    const features = [
        'Industrial Grade Epoxies',
        'Anti-Corrosive Coatings',
        'Structural Steel Painting',
        'Roof Maintenance Coatings',
        'Weather Resistant Finishes',
        'Durable Protection'
    ];

    const services = [
        { label: 'Epoxy Coating', desc: 'High-performance floor and wall protection' },
        { label: 'Self-Cleaning Paint', desc: 'Advanced nano-tech for low maintenance' },
        { label: 'Thermal Insulation Paint', desc: 'Heat-reflective coatings for roofs' },
        { label: 'Anti-Rust Primers', desc: 'Superior protection for steel structures' },
        { label: 'Chemical Resistant', desc: 'Ideal for industrial environments' },
        { label: 'UV Protective', desc: 'Prevents fading and sun damage' }
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
                title="Industrial & Structural Painting Services Navi Mumbai"
                description="Professional industrial and structural painting services in Navi Mumbai, Panvel, and Taloja. High-quality anti-corrosive and epoxy coatings."
                keywords="industrial painting, structural painting, epoxy coating, anti-corrosive paint, roof painting"
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
                            PROTECTION & AESTHETICS
                        </motion.span>
                        <motion.h1 variants={itemVariants}>
                            Industrial & Structural Painting
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Premium protective coatings for industrial environments in Navi Mumbai and beyond.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <h2>Long-Lasting Protection for Industrial Assets</h2>
                            <p>
                                Industrial structures are constantly exposed to harsh environmental factors, including extreme heat, coastal humidity, and chemical pollutants. At Zinco Roofing Solution, we provide specialized **Industrial and Structural Painting** services designed to extend the lifespan of your infrastructure. Our coatings are not just about aesthetics; they are a critical layer of defense against corrosion and structural decay.
                            </p>
                            <p>
                                We utilize high-performance materials from leading manufacturers, ensuring that every square foot of your facility is protected. From high-bay steel structures in **Taloja MIDC** to coastal facilities in **Vashi**, our team delivers professional results that stand the test of time.
                            </p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Our Coating Solutions</h2>
                        <div className={styles.applicationsGrid}>
                            {services.map((service, index) => (
                                <Card key={index} variant="solid" className={styles.appCard}>
                                    <h4>{service.label}</h4>
                                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--gray-400)' }}>{service.desc}</p>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Service Locations</h2>
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
                            <h3>The Zinco Advantage in Industrial Painting</h3>
                            <p>
                                Our process begins with thorough surface preparation, which is the most critical step for coating longevity. We employ various methods, including sandblasting and high-pressure washing, to ensure a perfect bond. Our experienced painters are trained in applying multi-coat systems, including primers, intermediate coats, and UV-resistant topcoats.
                            </p>
                        </div>
                    </section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Get a Professional Painting Estimate</h3>
                            <p>Protect your investment with our industrial-grade coating solutions.</p>
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

export default StructuralPainting;
