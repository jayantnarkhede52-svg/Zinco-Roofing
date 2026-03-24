import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaPaintRoller, FaShieldAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/services-hero.webp';
import styles from './ProductCategory.module.css';

const StructuralPainting = () => {
    const navigate = useNavigate();
    const features = [
        'Advanced structural painting in navi mumbai',
        'Top structural painting in navi mumbai',
        'Balanced structural painting in navi mumbai',
        'Expert structural painting in navi mumbai',
        'Quality structural painting in navi mumbai',
        'Best structural painting in navi mumbai'
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
                canonicalUrl="https://www.zincoroof.com/products/structural-painting"
            />
            <Helmet>
                <link rel="preload" as="image" href={heroImage} fetchpriority="high" />
            </Helmet>
            <div className={styles.hero} style={{ '--hero-image': `url(${heroImage})` }}>
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
                            structural painting in navi mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Premium protective coatings through professional <strong>structural painting in navi mumbai</strong> solutions.
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
                                <h2>Complete structural painting in navi mumbai solutions</h2>
                                <p>
                                    At Zinco Roofing Solution, we provide the best <strong>structural painting in navi mumbai</strong>. Our <strong>structural painting in navi mumbai</strong> are designed for massive industrial assets.
                                </p>
                                <p>
                                    Using <strong>structural painting in navi mumbai</strong> ensures a protective layer for decades. Our <strong>structural painting in navi mumbai</strong> are built for the heavy Mumbai monsoons.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Efficiency of structural painting in navi mumbai</h3>
                                <p>
                                    A high-quality <strong>structural painting in navi mumbai</strong> improves structural integrity. Our <strong>structural painting in navi mumbai</strong> are balanced for chemical resistance.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Why Zinco for structural painting in navi mumbai?</h3>
                                <ul className={styles.styledList}>
                                    <li><strong>Protective:</strong> Every <strong>structural painting in navi mumbai</strong> offers anti-rust defense.</li>
                                    <li><strong>Durable:</strong> Our <strong>structural painting in navi mumbai</strong> is epoxy-grade.</li>
                                    <li><strong>Quality:</strong> We ensure perfect installation of <strong>structural painting in navi mumbai</strong>.</li>
                                    <li><strong>Value:</strong> Our <strong>structural painting in navi mumbai</strong> is a vital industrial service.</li>
                                </ul>
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
                        <h2>Coating types for structural painting in navi mumbai</h2>
                        <div className={styles.applicationsGrid}>
                            {services.map((service, index) => (
                                <Card key={index} variant="solid" className={styles.appCard}>
                                    <h4>{service.label}</h4>
                                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--gray-400)' }}>{service.desc}</p>
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
                        <h2>Features of structural painting in navi mumbai</h2>
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
                                <h2>Modern structural painting in navi mumbai</h2>
                                <p>
                                    Our <strong>structural painting in navi mumbai</strong> is ideal for large factories. Once installed, the <strong>structural painting in navi mumbai</strong> provides a maintenance-free finish.
                                </p>
                            </Card>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Get Best Quote for structural painting in navi mumbai</h3>
                            <p>Contact the leading expert for <strong>structural painting in navi mumbai</strong> today.</p>
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

export default StructuralPainting;
