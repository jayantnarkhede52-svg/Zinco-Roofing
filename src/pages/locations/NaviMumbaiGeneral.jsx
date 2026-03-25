import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaHome, FaRegBuilding, FaStar, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import LocationMap from '../../components/shared/LocationMap';
import heroImage from '../../assets/seo/navi-mumbai-general.png';
import styles from './LocationStyles.module.css';
import LocationServiceCards from '../../components/shared/LocationServiceCards';
import AreaLinks from '../../components/shared/AreaLinks';

const NaviMumbaiGeneral = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Best Roofing Contractors in Navi Mumbai | Vashi & Belapur"
                description="Zinco Roofing is the top-rated Roofing Contractor in Navi Mumbai. We provide premium metal roofing, terrace roofing, and commercial shed solutions in Vashi, Belapur, and Kharghar."
                keywords="roofing contractors navi mumbai, vashi roofing solutions, best roofing sheets navi mumbai, terrace roofing navi mumbai"
                canonicalUrl="https://www.zincoroof.com/services/roofing-contractors-navi-mumbai"
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
                        <h1>Best Roofing Contractors in Navi Mumbai</h1>
                        <p>Providing premium and durable roofing solutions for homes and businesses in <strong>Vashi, Kharghar, and Belapur</strong>.</p>
                        <Link to="/contact" className={styles.heroBtn}>Free Consultation</Link>
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
                        <h2>Your Local Navi Mumbai Roofing Experts</h2>
                        <p>
                            From stylish terrace roofing to heavy-duty commercial sheds, Zinco Roofing has been the trusted name in **Navi Mumbai** for over a decade. We combine aesthetic design with extreme durability to handle the coastal weather of Vashi and Nerul.
                        </p>
                        <div className={styles.statsGrid} style={{marginTop: '2rem'}}>
                            <div className={styles.statCard} style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '10px', textAlign: 'center'}}>
                                <FaHome size={30} color="var(--primary-color)" />
                                <h4>1000+</h4>
                                <p>Terrace Roofs</p>
                            </div>
                            <div className={styles.statCard} style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '10px', textAlign: 'center'}}>
                                <FaRegBuilding size={30} color="var(--primary-color)" />
                                <h4>500+</h4>
                                <p>Commercial Sheds</p>
                            </div>
                            <div className={styles.statCard} style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '10px', textAlign: 'center'}}>
                                <FaStar size={30} color="var(--primary-color)" />
                                <h4>4.9/5</h4>
                                <p>Customer Rating</p>
                            </div>
                        </div>
                    </motion.section>

                    <LocationServiceCards location="Navi Mumbai" />

                    <motion.section 
                        className={styles.twoColumn}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.imageBlock}>
                            <img src={heroImage} alt="Best Roofing in Vashi Navi Mumbai" style={{borderRadius: '12px'}} />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Superior Roofing Materials</h2>
                            <p>
                                We don't just build roofs; we build peace of mind. Our Navi Mumbai customers choose us for:
                            </p>
                            <ul className={styles.featureList}>
                                <li><FaCheckCircle color="green" /> Lightweight yet strong metal sheets</li>
                                <li><FaCheckCircle color="green" /> Translucent Polycarbonate for natural light</li>
                                <li><FaCheckCircle color="green" /> Specialized heat-reflective coatings</li>
                                <li><FaCheckCircle color="green" /> Professional, clean, and fast installation</li>
                            </ul>
                        </div>
                    </motion.section>

                    <AreaLinks currentLocation="Navi Mumbai" />

                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Upgrade Your Roof Today</h2>
                            <p>Join hundreds of satisfied residents and business owners in Navi Mumbai.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact" className={styles.primaryBtn}>Get a Free Quote</Link>
                                <Link to="/gallery" className={styles.secondaryBtn}>See Design Ideas</Link>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <LocationMap title="Zinco Roofing Navi Mumbai" query="Vashi, Navi Mumbai" />
        </div>
    );
};

export default NaviMumbaiGeneral;
