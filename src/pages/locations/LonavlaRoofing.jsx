import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaIndustry, FaShieldAlt, FaTools, FaCheckCircle, FaFlask } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import heroImage from '../../assets/locations/lonavla_hero.webp';
import lonavlaImg1 from '../../assets/lonavla/lonavla-weather-roofing.png';
import lonavlaImg2 from '../../assets/lonavla/lonavla-puf-panels.png';
import lonavlaImg3 from '../../assets/lonavla/lonavla-factory-shed.png';
import lonavlaImg4 from '../../assets/lonavla/lonavla-roofing-sheets.png';
import styles from './LocationStyles.module.css';
import LocationServiceCards from '../../components/shared/LocationServiceCards';
import AreaLinks from '../../components/shared/AreaLinks';

const LonavlaRoofing = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Roofing Contractor in Lonavla | Heavy Rainfall Roofing Solutions"
                description="Expert roofing contractor in lonavla. Specializing in leak-proof, weather-resistant roofing and PUF panels for Lonavla industrial sheds."
                keywords="roofing contractor in lonavla, lonavla roofing contractors, factory shed roofing lonavla"
                canonicalUrl="https://zincoroof.com/roofing-contractor-in-lonavla"
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
                        <h1>roofing contractor in lonavla</h1>
                        <p>Providing specialized weather-resistant systems as the leading <strong>roofing contractor in lonavla</strong> for unique high-rainfall environments.</p>
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
                            Professional roofing contractor in lonavla weather-proofing
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Lonavla experiences intense monsoons. As a premier <strong>roofing contractor in lonavla</strong>, Zinco Roofing Solution provides advanced structural safety and leak-proof engineering.
                        </motion.p>
                        <p>
                            Business owners look for a reliable <strong>roofing contractor in lonavla</strong> who prioritizes excellence. By hiring an established <strong>roofing contractor in lonavla</strong>, you ensure your unit is built to scale. As a <strong>roofing contractor in lonavla</strong>, we deliver resilient results.
                        </p>
                        <p>
                            When searching for excellence, every <strong>roofing contractor in lonavla</strong> knows that quality is key. We are dedicated to providing superior results as your <strong>roofing contractor in lonavla</strong>. Reach out to the leading <strong>roofing contractor in lonavla</strong> today.
                        </p>
                    </motion.section>

                    <LocationServiceCards location="Lonavla" />

                    {/* Detailed Content Sections */}
                    <motion.section 
                        className={styles.twoColumn}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.textContent}>
                            <h2>Strategic roofing contractor in lonavla Services</h2>
                            <p>
                                Infrastructure in hill stations needs <strong>roofing contractor in lonavla</strong> expertise. As dedicated specialists for <strong>roofing contractor in lonavla</strong>, we utilize waterproofing techniques.
                            </p>
                            <p>
                                Our reputation for quality <strong>roofing contractor in lonavla</strong> is built on technical excellence. When you collaborate with a <strong>roofing contractor in lonavla</strong>, you benefit from customized solutions.
                            </p>
                            <p>
                                We are the leaders in providing installations as a <strong>roofing contractor in lonavla</strong> without sacrificing quality. Choose our expert <strong>roofing contractor in lonavla</strong> services for your next facility.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={lonavlaImg1} alt="roofing contractor in lonavla weather resistance" loading="lazy" />
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
                            <img src={lonavlaImg2} alt="roofing contractor in lonavla insulation" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Energy efficiency with roofing contractor in lonavla</h2>
                            <p>
                                Temperature regulation is crucial. High-quality systems from a <strong>roofing contractor in lonavla</strong> deliver superior energy efficiency. When consulting with a <strong>roofing contractor in lonavla</strong>, we focus on thermal performance.
                            </p>
                            <p>
                                As a versatile <strong>roofing contractor in lonavla</strong>, we handle custom specifications for safer long-term use.
                            </p>
                            <p>
                                Trust our professional <strong>roofing contractor in lonavla</strong> site audits. We offer modular solutions that prioritize energy savings as a reliable <strong>roofing contractor in lonavla</strong>.
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
                            <h2>Reliable roofing contractor in lonavla</h2>
                            <p>
                                From design to completion, we excel as a <strong>roofing contractor in lonavla</strong> specialist. Choosing an expert <strong>roofing contractor in lonavla</strong> ensures project speed and integrity.
                            </p>
                            <p>
                                Whether you need a workshop or a resort, as a <strong>roofing contractor in lonavla</strong> partner, we prioritize longevity.
                            </p>
                            <p>
                                Contact us for premium <strong>roofing contractor in lonavla</strong> services. We are your partner for structural excellence in <strong>roofing contractor in lonavla</strong>.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={lonavlaImg3} alt="roofing contractor in lonavla fabrication" loading="lazy" />
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
                            <img src={lonavlaImg4} alt="roofing contractor in lonavla sheets" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Maintenance by roofing contractor in lonavla</h2>
                            <p>
                                Zinco provides specialized services as a <strong>roofing contractor in lonavla</strong>. Protecting property is vital as a <strong>roofing contractor in lonavla</strong> specialist for maintaining value.
                            </p>
                            <p>
                                We offer protective finishes as a <strong>roofing contractor in lonavla</strong>, preventing rust. Rely on us for <strong>roofing contractor in lonavla</strong> maintenance solutions that span decades.
                            </p>
                            <p>
                                Get a professional quote today and protect your investment with a leading <strong>roofing contractor in lonavla</strong>.
                            </p>
                        </div>
                    </motion.section>

                    {/* Technical Specification Table */}
                    <section className={`${styles.technicalSection} ${styles.darkMode}`}>
                        <h2>Technical Standards for roofing contractor in lonavla</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.techTable}>
                                <thead>
                                    <tr>
                                        <th>Metric Category</th>
                                        <th>Standard Specification</th>
                                        <th>Material Grade</th>
                                        <th>Weather Benefit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Application</td>
                                        <td>Weather Resistance</td>
                                        <td>Warehouses & Plants</td>
                                        <td>Maximum Durability</td>
                                    </tr>
                                    <tr>
                                        <td>Water Protection</td>
                                        <td>100% Leak-Proof Joints</td>
                                        <td>Rainwater Harvesting Ready</td>
                                        <td>Monsoon Safety</td>
                                    </tr>
                                    <tr>
                                        <td>Thermal Quality</td>
                                        <td>PUF Insulation Options</td>
                                        <td>Temperature Control</td>
                                        <td>Energy Efficiency</td>
                                    </tr>
                                    <tr>
                                        <td>Wind Resistance</td>
                                        <td>High-Tensile Fastening</td>
                                        <td>Structural Rigidity</td>
                                        <td>Storm Protection</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Maintenance Section */}
                    <section className={styles.maintenanceSection}>
                        <div className={styles.infoCard}>
                            <h3>Advice from a roofing contractor in lonavla</h3>
                            <p>
                                As a proactive <strong>roofing contractor in lonavla</strong>, we recommend regular pre-monsoon checks to prevent water damage.
                            </p>
                            <div className={styles.maintenanceGrid}>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Gutter Audits</strong>: Essential before monsoons for efficient drainage.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Fastener Inspections</strong>: Provided by our expert technical teams.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Rust Checks</strong>: Identifying moisture impacts early to prevent fatigue.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className={styles.faqSection}>
                        <h2>FAQs for roofing contractor in lonavla</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>Why choose Zinco as your roofing contractor in lonavla?</h3>
                                <p>Our specialization in leak-proof engineering and heavy-duty materials makes us the preferred partner for high-rainfall zones.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Does a roofing contractor in lonavla handle warehouses?</h3>
                                <p>Yes, we are full-service specialists offering end-to-end fabrication for large industrial setups.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Can a roofing contractor in lonavla assist with waterproofing?</h3>
                                <p>Absolutely. As experts, we handle total surface waterproofing and sealant application.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Why is an audit from a roofing contractor in lonavla important?</h3>
                                <p>Monsoons cause structural stress. Regular audits by a leading <strong>roofing contractor in lonavla</strong> prevent ingress.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Lonavla" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Best roofing contractor in lonavla</h2>
                            <p>Protect your investment with expert <strong>roofing contractor in lonavla</strong> engineering. Our team is ready for your site audit.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact#contact-form" className={styles.primaryBtn}>Request a Monsoon Audit</Link>
                                <button className={styles.secondaryBtn}>View Case Studies</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default LonavlaRoofing;
