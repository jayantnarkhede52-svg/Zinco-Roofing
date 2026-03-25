import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCity, FaShieldAlt, FaTools, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import LocationMap from '../../components/shared/LocationMap';
import heroImage from '../../assets/seo/navi-mumbai-industrial.png';
import styles from './LocationStyles.module.css';
import LocationServiceCards from '../../components/shared/LocationServiceCards';
import AreaLinks from '../../components/shared/AreaLinks';
import RoofingCalculator from '../../components/shared/RoofingCalculator';

const NaviMumbaiIndustrial = () => {
    const highlights = [
        {
            title: "Taloja MIDC Experts",
            desc: "Specially engineered roofing for the industrial heart of Navi Mumbai.",
            icon: <FaCity />
        },
        {
            title: "Heavy-Duty Fabrication",
            desc: "Custom structural steel and high-tensile roofing for large-scale factories.",
            icon: <FaShieldAlt />
        },
        {
            title: "Safety First",
            desc: "100% safety compliant installation with local Navi Mumbai building permits.",
            icon: <FaTools />
        }
    ];

    return (
        <div className={styles.locationPage}>
            <SEO
                title="Industrial Roofing Contractors in Navi Mumbai | Taloja & Rabale"
                description="Zinco Roofing is the leading Industrial Roofing Contractor in Navi Mumbai. Specializing in factory sheds, warehouse construction, and structural fabrication in Taloja MIDC."
                keywords="industrial roofing contractors navi mumbai, taloja midc roofing, factory shed fabrication navi mumbai, industrial fabricators navi mumbai"
                canonicalUrl="https://www.zincoroof.com/services/industrial-roofing-navi-mumbai"
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
                        <h1>Industrial Roofing Contractors in Navi Mumbai</h1>
                        <p>Dominating the industrial skyline of <strong>Taloja, Rabale, and Mahape</strong> with premium structural fabrication.</p>
                        <Link to="/contact#quote-form" className={styles.heroBtn}>Get Industrial Quote</Link>
                    </motion.div>
                </div>
            </section>

            <div className={styles.container}>
                <main className={styles.mainContent}>
                    <section className={styles.mobileOnly}>
                        <div className={styles.mobileHighlightsGrid}>
                            {highlights.map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    className={styles.mobileHighlightCard}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <h3>{item.icon} {item.title}</h3>
                                    <p>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <motion.section 
                        className={styles.introSection}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Specialized Industrial Roofing in Navi Mumbai</h2>
                        <p>
                            Navi Mumbai's industrial zones demand roofing that can withstand heavy monsoons and high saline air. As the premier <strong>Industrial Roofing Contractor in Navi Mumbai</strong>, Zinco Roofing provides specialized solutions for the Taloja MIDC and beyond.
                        </p>
                        <p>
                            Our engineering team focuses on **High-Tensile Galvalume** and **PUF Insulation** to ensure your factory remains cool and leak-proof. We understand the technical requirements of large-span industrial sheds and logistics hubs.
                        </p>
                    </motion.section>

                    <RoofingCalculator 
                        title="Industrial Cost Estimator" 
                        subtitle="Calculate the cost for your factory or warehouse in Navi Mumbai."
                    />

                    <LocationServiceCards location="Navi Mumbai" />

                    <motion.section 
                        className={styles.twoColumn}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.textContent}>
                            <h2>Why Choose Us in Taloja MIDC?</h2>
                            <p>
                                Location matters. Our proximity to the Navi Mumbai industrial corridor allows us to provide **Rapid Execution** and **Zero-Maintenance** structural builds.
                            </p>
                            <ul>
                                <li>Custom Design for High-Wind Zones</li>
                                <li>Corrosion-Resistant Metal Coatings</li>
                                <li>Expert Structural Fabrication Team</li>
                                <li>Timely Completion & Safety Audits</li>
                            </ul>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={heroImage} alt="Industrial Roofing Taloja Navi Mumbai" style={{borderRadius: '12px'}} />
                        </div>
                    </motion.section>

                    <AreaLinks currentLocation="Navi Mumbai" />

                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Ready to Build Your Industrial Asset?</h2>
                            <p>Get a free technical site audit and quote from our Navi Mumbai specialists.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact" className={styles.primaryBtn}>Contact Us Now</Link>
                                <Link to="/projects" className={styles.secondaryBtn}>View Recent Sheds</Link>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <LocationMap title="Navi Mumbai Industrial Hub" query="Taloja MIDC, Navi Mumbai" />
        </div>
    );
};

export default NaviMumbaiIndustrial;
