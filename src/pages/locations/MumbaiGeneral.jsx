import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaTools, FaBuilding, FaAward, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import LocationMap from '../../components/shared/LocationMap';
import heroImage from '../../assets/seo/mumbai-general.png';
import styles from './LocationStyles.module.css';
import LocationServiceCards from '../../components/shared/LocationServiceCards';
import AreaLinks from '../../components/shared/AreaLinks';
import RoofingCalculator from '../../components/shared/RoofingCalculator';

const MumbaiGeneral = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Roofing Solutions Mumbai | Best Roofing Contractors & Services"
                description="Zinco Roofing provides complete Roofing Solutions in Mumbai. Best roofing contractors for terrace roofing, metal sheds, and professional roof repairs in Mumbai suburbs."
                keywords="roofing solutions mumbai, best roofing contractors mumbai, mumbai roof repair, terrace roofing mumbai"
                canonicalUrl="https://www.zincoroof.com/services/roofing-solutions-mumbai"
            />
            <Helmet>
                <link rel="preload" as="image" href={heroImage} fetchpriority="high" />
            </Helmet>

            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.heroOverlay} />
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Comprehensive Roofing Solutions Mumbai</h1>
                        <p>Providing <strong>High-Performance Roofing</strong> and maintenance services across Mumbai's residential and commercial landscape.</p>
                        <Link to="/contact" className={styles.heroBtn}>Book a Site Visit</Link>
                    </motion.div>
                </div>
            </section>

            <div className={styles.container}>
                <main className={styles.mainContent}>
                    <motion.section 
                        className={styles.introSection}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Mumbai's Trusted Roofing Partner</h2>
                        <p>
                            Whether it's the intense heat or the heavy Mumbai rains, your roof needs to be resilient. As the top **Roofing Solutions provider in Mumbai**, Zinco Roofing offers a blend of quality materials and expert craftsmanship.
                        </p>
                        <p>
                            From **Thane to South Mumbai**, our teams are equipped to handle complex rooftop installations, terrace sheds, and leak-proof repairs. We prioritize durability and weather-resistance in every project.
                        </p>
                    </motion.section>

                    <div className={styles.featuresGrid} style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', margin: '3rem 0'}}>
                        <div className={styles.featureCard} style={{background: '#fff', border: '1px solid #eee', padding: '2rem', borderRadius: '12px'}}>
                            <FaAward size={40} color="var(--primary-color)" />
                            <h3>Premium Quality</h3>
                            <p>Using only Grade-A Galvalume, PUF, and Polycarbonate materials.</p>
                        </div>
                        <div className={styles.featureCard} style={{background: '#fff', border: '1px solid #eee', padding: '2rem', borderRadius: '12px'}}>
                            <FaBuilding size={40} color="var(--primary-color)" />
                            <h3>Commercial Expertise</h3>
                            <p>Trusted by malls, hotels, and office complexes across Mumbai.</p>
                        </div>
                        <div className={styles.featureCard} style={{background: '#fff', border: '1px solid #eee', padding: '2rem', borderRadius: '12px'}}>
                            <FaTools size={40} color="var(--primary-color)" />
                            <h3>Quick Repair</h3>
                            <p>Emergency roof repair and maintenance services for Mumbai's monsoons.</p>
                        </div>
                    </div>

                    <RoofingCalculator 
                        title="Mumbai Roofing Budget Estimator" 
                        subtitle="Get a quick estimate for your roofing project in Mumbai."
                    />

                    <LocationServiceCards location="Mumbai" />

                    <motion.section 
                        className={styles.twoColumn}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.imageBlock}>
                            <img src={heroImage} alt="Best Roofing Services Mumbai" style={{borderRadius: '12px'}} />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Why Mumbai Chooses Zinco?</h2>
                            <p>
                                We understand the local geography and building regulations. Our solutions are designed for:
                            </p>
                            <ul className={styles.featureList}>
                                <li><FaCheckCircle color="green" /> Space-saving Structural Designs</li>
                                <li><FaCheckCircle color="green" /> Aesthetic Terrace Rooftops</li>
                                <li><FaCheckCircle color="green" /> Long-lasting Rust-Proof Materials</li>
                                <li><FaCheckCircle color="green" /> Transparent Pricing & Documentation</li>
                            </ul>
                        </div>
                    </motion.section>

                    <AreaLinks currentLocation="Mumbai" />

                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Protect Your Property with the Best</h2>
                            <p>Get a durable, beautiful, and weather-proof roof from Mumbai's specialists.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact" className={styles.primaryBtn}>Request a Quote</Link>
                                <Link to="/services" className={styles.secondaryBtn}>Browse Our Services</Link>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <LocationMap title="Zinco Roofing Mumbai" query="Mumbai, Maharashtra" />
        </div>
    );
};

export default MumbaiGeneral;
