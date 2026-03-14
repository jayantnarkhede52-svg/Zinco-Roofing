import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaIndustry, FaShieldAlt, FaTools, FaCheckCircle, FaFlask } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import heroImage from '../../assets/locations/chakan_hero.webp';
import chakanImg1 from '../../assets/Metal roofing images/Metal roofing images/1000014152.webp';
import chakanImg2 from '../../assets/Puf panel images/Puf panel images/1001155530.webp';
import chakanImg3 from '../../assets/projects/amar studio.webp';
import chakanImg4 from '../../assets/Upvc images/Upvc images/1000014255.webp';
import styles from './LocationStyles.module.css';
import LocationServiceCards from '../../components/shared/LocationServiceCards';
import AreaLinks from '../../components/shared/AreaLinks';

const ChakanRoofing = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Roofing Contractor in Chakan | Industrial Roofing Specialists"
                description="Expert roofing contractor in chakan. Specializing in heavy-duty factory sheds, PEB, and PUF panels for Chakan automobile hubs."
                keywords="roofing contractor in chakan, chakan midc roofing, factory shed contractors chakan"
                canonicalUrl="https://zincoroof.com/roofing-contractor-in-chakan"
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
                        <h1>roofing contractor in chakan</h1>
                        <p>Providing specialized heavy-duty structural systems as the leading <strong>roofing contractor in chakan</strong> for core industrial hubs.</p>
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
                            Professional roofing contractor in chakan infrastructure
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Chakan MIDC is a global automobile and manufacturing hub. As a premier <strong>roofing contractor in chakan</strong>, Zinco Roofing Solution provides advanced structural fabrication and PEB installations.
                        </motion.p>
                        <p>
                            Plant managers and project consultants look for a reliable <strong>roofing contractor in chakan</strong> who prioritizes precision. By hiring an established <strong>roofing contractor in chakan</strong>, you ensure your massive facility is built with exact tolerances.
                        </p>
                        <p>
                            When expanding in the industrial belt, every <strong>roofing contractor in chakan</strong> knows that speed and quality are non-negotiable. We are dedicated to providing excellence as your trusted <strong>roofing contractor in chakan</strong>. Reach out to the leading <strong>roofing contractor in chakan</strong> today.
                        </p>
                    </motion.section>

                    <LocationServiceCards location="Chakan" />

                    {/* Detailed Content Sections */}
                    <motion.section 
                        className={styles.twoColumn}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.textContent}>
                            <h2>Strategic roofing contractor in chakan Services</h2>
                            <p>
                                Infrastructure in the MIDC belt requires <strong>roofing contractor in chakan</strong> knowledge. As dedicated large-scale specialists for <strong>roofing contractor in chakan</strong>, we utilize advanced equipment.
                            </p>
                            <p>
                                Our reputation for quality <strong>roofing contractor in chakan</strong> is built on technical scale. When you collaborate with a <strong>roofing contractor in chakan</strong>, you benefit from PEB solutions.
                            </p>
                            <p>
                                We are the leaders in providing installations as a <strong>roofing contractor in chakan</strong> without sacrificing safety. Choose our expert <strong>roofing contractor in chakan</strong> services for your next facility.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={chakanImg1} alt="roofing contractor in chakan" loading="lazy" />
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
                            <img src={chakanImg2} alt="roofing contractor in chakan insulation" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Energy efficiency with roofing contractor in chakan</h2>
                            <p>
                                Maintaining ambient temperatures is critical. High-quality systems from a <strong>roofing contractor in chakan</strong> deliver superior energy efficiency. When consulting with a <strong>roofing contractor in chakan</strong>, we focus on optimal R-values.
                            </p>
                            <p>
                                As a versatile <strong>roofing contractor in chakan</strong>, we handle custom specifications for industrial modules.
                            </p>
                            <p>
                                Trust our professional <strong>roofing contractor in chakan</strong> structural audits. We offer modular solutions that prioritize massive energy cost reductions as a reliable <strong>roofing contractor in chakan</strong>.
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
                            <h2>Reliable roofing contractor in chakan</h2>
                            <p>
                                From CAD design to structural handover, we excel as a <strong>roofing contractor in chakan</strong> specialist. Choosing an expert <strong>roofing contractor in chakan</strong> ensures immense project speed.
                            </p>
                            <p>
                                Whether you need a workshop or a plant, as a <strong>roofing contractor in chakan</strong> partner, we prioritize operational workflow on the floor.
                            </p>
                            <p>
                                Contact us for premium <strong>roofing contractor in chakan</strong> services. We are your partner for structural excellence in <strong>roofing contractor in chakan</strong>.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={chakanImg3} alt="roofing contractor in chakan fabrication" loading="lazy" />
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
                            <img src={chakanImg4} alt="roofing contractor in chakan materials" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Maintenance by roofing contractor in chakan</h2>
                            <p>
                                Zinco provides specialized services as a <strong>roofing contractor in chakan</strong>. Protecting structures is vital as a <strong>roofing contractor in chakan</strong> specialist for maintaining integrity.
                            </p>
                            <p>
                                We offer galvalume solutions as a <strong>roofing contractor in chakan</strong>, preventing degradation. Rely on us for <strong>roofing contractor in chakan</strong> maintenance options that span decades.
                            </p>
                            <p>
                                Get a massive estimate today and cover your industrial expanse with the help of a professional <strong>roofing contractor in chakan</strong>.
                            </p>
                        </div>
                    </motion.section>

                    {/* Technical Specification Table */}
                    <section className={`${styles.technicalSection} ${styles.darkMode}`}>
                        <h2>Technical Standards for roofing contractor in chakan</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.techTable}>
                                <thead>
                                    <tr>
                                        <th>Metric Category</th>
                                        <th>Material Specification</th>
                                        <th>Structural Grade</th>
                                        <th>Operational Benefit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Application</td>
                                        <td>High-Volume Plants</td>
                                        <td>Automobile Factories</td>
                                        <td>Maximum Span Area</td>
                                    </tr>
                                    <tr>
                                        <td>Structural Support</td>
                                        <td>Clear Span PEB</td>
                                        <td>Heavy Crane Support</td>
                                        <td>Unobstructed Workflow</td>
                                    </tr>
                                    <tr>
                                        <td>Material Strength</td>
                                        <td>550 MPa Galvalume</td>
                                        <td>High-Tensile Framing</td>
                                        <td>Long-term Durability</td>
                                    </tr>
                                    <tr>
                                        <td>Installation Speed</td>
                                        <td>Pre-Fabricated Modules</td>
                                        <td>Rapid Erection</td>
                                        <td>Faster ROI</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Maintenance Section */}
                    <section className={styles.maintenanceSection}>
                        <div className={styles.infoCard}>
                            <h3>Advice from a roofing contractor in chakan</h3>
                            <p>
                                As a large-scale <strong>roofing contractor in chakan</strong>, we manage annual maintenance contracts for major plants.
                            </p>
                            <div className={styles.maintenanceGrid}>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Skylight Cleaning</strong>: Maximizing natural light on vast industrial roofs.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Structural Audits</strong>: Torque-checking joints by technical engineers.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Valley Gutter Clearing</strong>: Preventing water pooling on large surfaces.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className={styles.faqSection}>
                        <h2>FAQs for roofing contractor in chakan</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>Why choose Zinco as your roofing contractor in chakan?</h3>
                                <p>Our massive execution capability in PEB and heavy-duty materials makes us the top choice for OEMs.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Do you offer roofing contractor in chakan services for clear-span?</h3>
                                <p>Yes, we specialize in wide-span PEB structures offering total coverage without middle pillars.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Can a roofing contractor in chakan assist with reroofing?</h3>
                                <p>Absolutely. As experts, we handle phased component replacements with zero plant downtime.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Why is a PEB roofing contractor in chakan preferred?</h3>
                                <p>Speed and accuracy. PEB structures allow faster building setup than conventional fabrication methods.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Chakan Pune" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Best roofing contractor in chakan</h2>
                            <p>Build your factory with expert <strong>roofing contractor in chakan</strong> support. Our team is ready to review your blueprints.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact#contact-form" className={styles.primaryBtn}>Request a PEB Consultation</Link>
                                <button className={styles.secondaryBtn}>View Case Studies</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default ChakanRoofing;
