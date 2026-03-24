import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaSun, FaLightbulb, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/services-hero.webp';
import styles from './ProductCategory.module.css';

const SolarInstallation = () => {
    const navigate = useNavigate();
    const features = [
        'Advanced solar panel installation in navi mumbai',
        'Top solar panel installation in navi mumbai',
        'Balanced solar panel installation in navi mumbai',
        'Expert solar panel installation in navi mumbai',
        'Quality solar panel installation in navi mumbai',
        'Best solar panel installation in navi mumbai'
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
                canonicalUrl="https://www.zincoroof.com/products/solar-panel-installation"
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
                            CLEAN ENERGY SOLUTIONS
                        </motion.span>
                        <motion.h1 variants={itemVariants}>
                            solar panel installation in navi mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Elevate your facility with efficient <strong>solar panel installation in navi mumbai</strong> solutions.
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
                                <h2>Complete solar panel installation in navi mumbai solutions</h2>
                                <p>
                                    At Zinco Roofing Solution, we provide the best <strong>solar panel installation in navi mumbai</strong>. Our <strong>solar panel installation in navi mumbai</strong> are designed for massive industrial roofs.
                                </p>
                                <p>
                                    Using <strong>solar panel installation in navi mumbai</strong> ensures a green energy source for decades. Our <strong>solar panel installation in navi mumbai</strong> are built for the heavy Mumbai monsoons.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Efficiency of solar panel installation in navi mumbai</h3>
                                <p>
                                    A high-quality <strong>solar panel installation in navi mumbai</strong> reduces industrial costs. Our <strong>solar panel installation in navi mumbai</strong> are balanced for maximum output.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Why Zinco for solar panel installation in navi mumbai?</h3>
                                <ul className={styles.styledList}>
                                    <li><strong>Sustainable:</strong> Every <strong>solar panel installation in navi mumbai</strong> offers clean power.</li>
                                    <li><strong>Reliable:</strong> Our <strong>solar panel installation in navi mumbai</strong> is securely mounted.</li>
                                    <li><strong>Quality:</strong> We ensure perfect installation of <strong>solar panel installation in navi mumbai</strong>.</li>
                                    <li><strong>Value:</strong> Our <strong>solar panel installation in navi mumbai</strong> is a smart industrial asset.</li>
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
                        <h2>Types of solar panel installation in navi mumbai</h2>
                        <div className={styles.applicationsGrid}>
                            {products.map((prod, index) => (
                                <Card key={index} variant="solid" className={styles.appCard}>
                                    <h4>{prod.label}</h4>
                                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--gray-400)' }}>{prod.desc}</p>
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
                        <h2>Features of solar panel installation in navi mumbai</h2>
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
                                <h2>Modern solar panel installation in navi mumbai</h2>
                                <p>
                                    Our <strong>solar panel installation in navi mumbai</strong> is ideal for large warehouses. Once installed, the <strong>solar panel installation in navi mumbai</strong> provides a maintenance-free energy flow.
                                </p>
                            </Card>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Get Best Quote for solar panel installation in navi mumbai</h3>
                            <p>Contact the leading expert for <strong>solar panel installation in navi mumbai</strong> today.</p>
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

export default SolarInstallation;
