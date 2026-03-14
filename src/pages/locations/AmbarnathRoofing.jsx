import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaIndustry, FaShieldAlt, FaTools, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import heroImage from '../../assets/locations/ambarnath_hero.webp';
import ambImg1 from '../../assets/Metal roofing images/Metal roofing images/1000014335.webp';
import ambImg2 from '../../assets/Puf panel images/Puf panel images/1001155532.webp';
import ambImg3 from '../../assets/projects/Valvoline-ambarnath.webp';
import ambImg4 from '../../assets/Upvc images/Upvc images/1000014390.webp';
import styles from './LocationStyles.module.css';
import LocationServiceCards from '../../components/shared/LocationServiceCards';
import AreaLinks from '../../components/shared/AreaLinks';

const AmbarnathRoofing = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Roofing Contractor in Ambarnath | Industrial Roofing Specialists"
                description="Expert roofing contractor in ambarnath. We provide expert metal roofing, PUF panels, and structural fabrication for Ambarnath MIDC factory sheds."
                keywords="roofing contractor in ambarnath, ambarnath midc roofing, industrial roofing ambarnath"
                canonicalUrl="https://zincoroof.com/roofing-contractor-in-ambarnath"
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
                        <h1>roofing contractor in ambarnath</h1>
                        <p>Delivering high-performance structural systems as the leading <strong>roofing contractor in ambarnath</strong> for core industrial hubs.</p>
                        <div className={styles.heroButtons}>
                            <Link to="/products" className={styles.heroBtn}>View Our Products</Link>
                        </div>
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
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            Complete roofing contractor in ambarnath solutions
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Ambarnath MIDC is a critical hub for Mumbai's industrial growth. As a premier <strong>roofing contractor in ambarnath</strong>, Zinco Roofing Solution provides technical foundations for heavy manufacturing.
                        </motion.p>
                        <p>
                            Every <strong>roofing contractor in ambarnath</strong> knows that industrial plant managers look for reliable partners. By hiring an expert <strong>roofing contractor in ambarnath</strong>, you ensure that your facility remains safe and operational.
                        </p>
                        <p>
                            When searching for a <strong>roofing contractor in ambarnath</strong>, quality and commitment are key. We are dedicated to providing excellence as your trusted <strong>roofing contractor in ambarnath</strong>. Our team acts as a professional <strong>roofing contractor in ambarnath</strong>.
                        </p>
                    </motion.section>

                    <LocationServiceCards location="Ambarnath" />

                    {/* Detailed Content Sections */}
                    <motion.section 
                        className={styles.twoColumn}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.textContent}>
                            <h2>Strategic roofing contractor in ambarnath Services</h2>
                            <p>
                                Infrastructure in industrial zones requires <strong>roofing contractor in ambarnath</strong> knowledge. Hiring a professional <strong>roofing contractor in ambarnath</strong> ensures that your building remains leak-proof and durable.
                            </p>
                            <p>
                                When you collaborate with a <strong>roofing contractor in ambarnath</strong> like Zinco, you benefit from customized solutions. Every <strong>roofing contractor in ambarnath</strong> project is tested for extreme weather.
                            </p>
                            <p>
                                We are the leading <strong>roofing contractor in ambarnath</strong> for factory units or regional warehouses. Choose our expert <strong>roofing contractor in ambarnath</strong> services today.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={ambImg1} alt="roofing contractor in ambarnath" loading="lazy" />
                        </div>
                    </motion.section>

                    <motion.section 
                        className={styles.twoColumn}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.imageBlock}>
                            <img src={ambImg2} alt="roofing contractor in ambarnath thermal" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Energy savings with roofing contractor in ambarnath</h2>
                            <p>
                                Temperature regulation is essential. We deliver panels as a <strong>roofing contractor in ambarnath</strong> that reduce costs significantly. When consulting with a <strong>roofing contractor in ambarnath</strong>, we focus on thermal stability.
                            </p>
                            <p>
                                As a versatile <strong>roofing contractor in ambarnath</strong>, we handle custom specifications for safe modular construction.
                            </p>
                            <p>
                                Trust our professional <strong>roofing contractor in ambarnath</strong> site audits. We offer modular solutions that prioritize quality as a reliable <strong>roofing contractor in ambarnath</strong>.
                            </p>
                        </div>
                    </motion.section>

                    <motion.section 
                        className={styles.twoColumn}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.textContent}>
                            <h2>Reliable roofing contractor in ambarnath</h2>
                            <p>
                                We excel at shed fabrication as a <strong>roofing contractor in ambarnath</strong>. Choosing an expert <strong>roofing contractor in ambarnath</strong> ensures project speed and structural integrity.
                            </p>
                            <p>
                                Whether you need a warehouse or a unit, as a <strong>roofing contractor in ambarnath</strong>, we prioritize longevity and workflow.
                            </p>
                            <p>
                                Contact us for premium <strong>roofing contractor in ambarnath</strong> services. We are your partner as a safety-first <strong>roofing contractor in ambarnath</strong>.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={ambImg3} alt="roofing contractor in ambarnath fabrication" loading="lazy" />
                        </div>
                    </motion.section>

                    <motion.section 
                        className={styles.twoColumn}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.imageBlock}>
                            <img src={ambImg4} alt="roofing contractor in ambarnath coating" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Maintenance by roofing contractor in ambarnath</h2>
                            <p>
                                Zinco provides specialized services as a <strong>roofing contractor in ambarnath</strong>. professional rust prevention is vital as a <strong>roofing contractor in ambarnath</strong> for maintaining integrity.
                            </p>
                            <p>
                                We offer protective finishes as a <strong>roofing contractor in ambarnath</strong> for all industrial plants. Rely on us as a <strong>roofing contractor in ambarnath</strong> for maintenance solutions.
                            </p>
                            <p>
                                Our team as a <strong>roofing contractor in ambarnath</strong> ensures that your facility remains in top condition. Get a quote from a <strong>roofing contractor in ambarnath</strong> today.
                            </p>
                        </div>
                    </motion.section>

                    {/* Technical Specification Section */}
                    <section className={`${styles.technicalSection} ${styles.darkMode}`}>
                        <h2>Technical Standards for roofing contractor in ambarnath</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.techTable}>
                                <thead>
                                    <tr>
                                        <th>Metric Name</th>
                                        <th>Zinco Standard</th>
                                        <th>Industrial Benefit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Product Range</td>
                                        <td>High-Grade Sheets</td>
                                        <td>Local Availability & Support</td>
                                    </tr>
                                    <tr>
                                        <td>Wind Speed Load</td>
                                        <td>Up to 150 km/h Rated</td>
                                        <td>Maximum Structural Security</td>
                                    </tr>
                                    <tr>
                                        <td>Fire Rating</td>
                                        <td>Class-1 Safety Rated</td>
                                        <td>Industrial Safety Compliance</td>
                                    </tr>
                                    <tr>
                                        <td>Span Capacity</td>
                                        <td>Optimized for High Spans</td>
                                        <td>Maximum Warehouse Volume</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Maintenance Section */}
                    <section className={styles.maintenanceSection}>
                        <div className={styles.infoCard}>
                            <h3>Advice from a roofing contractor in ambarnath</h3>
                            <p>
                                To maintain your asset, as a <strong>roofing contractor in ambarnath</strong>, we provide annual maintenance contracts.
                            </p>
                            <div className={styles.maintenanceGrid}>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Drainage Audits</strong>: Essential for handling heavy rainfall.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Fastener Checks</strong>: Key for stable industrial roofing.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Coating Integrity</strong>: Best for surface longevity.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className={styles.faqSection}>
                        <h2>FAQs for roofing contractor in ambarnath</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>Why choose Zinco as your roofing contractor in ambarnath?</h3>
                                <p>Our specialized teams and reliable execution deliver unmatched ROI and safety for industrial clients.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Is there a roofing contractor in ambarnath for PEBs?</h3>
                                <p>Yes, we provide specialized solutions for all Pre-Engineered Building (PEB) designs and regional factory projects.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Can a roofing contractor in ambarnath repair old sheds?</h3>
                                <p>Absolutely. Our technical team specializes in restoring and replacing old roofing sheets and structural components.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>What is the cost of hiring a roofing contractor in ambarnath?</h3>
                                <p>Pricing depends on specifications. Contact us for the best industrial project quote across the MIDC belt.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Ambarnath" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Best roofing contractor in ambarnath</h2>
                            <p>Protect your investment with top-tier <strong>roofing contractor in ambarnath</strong> services. Our team is ready for your project.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact#contact-form" className={styles.primaryBtn}>Request a Technical Audit</Link>
                                <button className={styles.secondaryBtn}>View Projects</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default AmbarnathRoofing;
