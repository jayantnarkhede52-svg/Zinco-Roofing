import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaWarehouse, FaCogs, FaHardHat, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import LocationMap from '../../components/shared/LocationMap';
import heroImage from '../../assets/seo/mumbai-industrial.png';
import styles from './LocationStyles.module.css';
import LocationServiceCards from '../../components/shared/LocationServiceCards';
import AreaLinks from '../../components/shared/AreaLinks';

const MumbaiIndustrial = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Industrial Shed Fabrication Mumbai | Bhiwandi & Thane"
                description="Expert Industrial Shed Fabrication in Mumbai. Providing heavy-duty PEB structures, factory sheds, and warehouse roofing solutions in Bhiwandi, Thane, and Kalwa."
                keywords="industrial shed fabrication mumbai, bhiwandi roofing contractors, warehouse construction mumbai, factory shed fabricators mumbai"
                canonicalUrl="https://www.zincoroof.com/services/industrial-sheds-mumbai"
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
                        <h1>Industrial Shed Fabrication Mumbai</h1>
                        <p>Specializing in <strong>Large-Span Warehouses</strong> and heavy structural fabrication in Bhiwandi and Thane industrial zones.</p>
                        <Link to="/contact" className={styles.heroBtn}>Discuss Your Project</Link>
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
                        <h2>Heavy-Duty Industrial Solutions in Mumbai</h2>
                        <p>
                            Mumbai's industrial landscape, especially in areas like **Bhiwandi**, requires robust and scalable roofing solutions. At Zinco Roofing, we specialize in Pre-Engineered Buildings (PEB) and high-load structural sheds that optimize space and safety.
                        </p>
                        <p>
                            Our fabrication process uses **IS 2062 Grade Steel** and precision welding to ensure your industrial asset lasts for decades. Whether it's a cold storage facility or a massive logistics park, we are the trusted **Industrial Fabricators in Mumbai**.
                        </p>
                    </motion.section>

                    <div className={styles.featuresGrid} style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', margin: '3rem 0'}}>
                        <div className={styles.featureCard} style={{background: '#fff', border: '1px solid #eee', padding: '2rem', borderRadius: '12px'}}>
                            <FaWarehouse size={40} color="var(--primary-color)" />
                            <h3>Modern Warehousing</h3>
                            <p>Optimized roof heights and ventilation systems for modern logistics in Bhiwandi.</p>
                        </div>
                        <div className={styles.featureCard} style={{background: '#fff', border: '1px solid #eee', padding: '2rem', borderRadius: '12px'}}>
                            <FaCogs size={40} color="var(--primary-color)" />
                            <h3>PEB Fabrication</h3>
                            <p>Rapid assembly and cost-effective Pre-Engineered Building solutions for factory expansions.</p>
                        </div>
                        <div className={styles.featureCard} style={{background: '#fff', border: '1px solid #eee', padding: '2rem', borderRadius: '12px'}}>
                            <FaHardHat size={40} color="var(--primary-color)" />
                            <h3>Expert Safety</h3>
                            <p>Full compliance with industrial safety norms and structural stability certificates.</p>
                        </div>
                    </div>

                    <LocationServiceCards location="Mumbai" />

                    <motion.section 
                        className={styles.twoColumn}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.textContent}>
                            <h2>Bhiwandi's Logistics Roofing Partner</h2>
                            <p>
                                Bhiwandi is one of Asia's largest warehousing hubs. We provide specialized **Logistics Roofing** that includes:
                            </p>
                            <ul className={styles.featureList}>
                                <li><FaCheckCircle color="green" /> High-span Truss Designs</li>
                                <li><FaCheckCircle color="green" /> Polycarbonate Skylights for 100% Daylighting</li>
                                <li><FaCheckCircle color="green" /> Turbine Ventilators for Air Circulation</li>
                                <li><FaCheckCircle color="green" /> Water-tight Seaming Technology</li>
                            </ul>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={heroImage} alt="Industrial Shed Hub Bhiwandi Mumbai" style={{borderRadius: '12px'}} />
                        </div>
                    </motion.section>

                    <AreaLinks currentLocation="Mumbai" />

                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Scale Your Business with Zinco</h2>
                            <p>We provide the structural foundation for Mumbai's industrial giants.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact" className={styles.primaryBtn}>Get a Technical Consultation</Link>
                                <Link to="/services/industrial-roof-leak-repair" className={styles.secondaryBtn}>Maintenance Services</Link>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <LocationMap title="Mumbai Industrial Zone" query="Bhiwandi, Maharashtra" />
        </div>
    );
};

export default MumbaiIndustrial;
