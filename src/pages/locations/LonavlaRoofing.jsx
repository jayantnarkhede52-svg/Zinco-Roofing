import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaIndustry, FaShieldAlt, FaTools, FaCheckCircle, FaFlask } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import LocationMap from '../../components/shared/LocationMap';
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
                canonicalUrl="https://www.zincoroof.com/roofing-contractor-in-lonavla"
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
                        <p>Delivering resilient and weatherproof structural systems as the premier <strong>structural partner</strong> for hill-station properties.</p>
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
                            Professional Industrial Coating in Chakan Belt
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Industrial assets in Chakan MIDC face heavy corrosion. As the premier provider of <strong>industrial painting services in chakan</strong>, Zinco Roofing Solution delivers high-performance protective coatings.
                        </motion.p>
                        <p>
                            Plant managers require a reliable <strong>coating specialist</strong> who understands chemical resistance. By hiring an established <strong>painting team</strong>, you ensure long-term surface integrity.
                        </p>
                        <p>
                            When protecting massive factory structures, every <strong>maintenance expert</strong> knows that surface preparation is key. We are dedicated to providing excellence as your trusted <strong>protection partner</strong>. Reach out today.
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
                            <h2>Strategic Coating Solutions</h2>
                            <p>
                                Infrastructure in the industrial belt requires <strong>expert painting</strong> knowledge. As dedicated specialists for <strong>large-scale facilities</strong>, we utilize high-pressure equipment.
                            </p>
                            <p>
                                Our reputation for quality <strong>surface protection</strong> is built on technical scale. When you collaborate with a <strong>technical specialist</strong>, you benefit from epoxy systems.
                            </p>
                            <p>
                                We are the leaders in providing finishes as a <strong>factory contractor</strong> without sacrificing quality. Choose our expert <strong>coating services</strong> for your next project.
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
                            <h2>Corrosion Resistance with Specialty Paints</h2>
                            <p>
                                Maintaining structural integrity is critical. High-quality coatings from a <strong>specialized provider</strong> deliver superior chemical resistance. When consulting with a <strong>technical team</strong>, we focus on micron-thickness.
                            </p>
                            <p>
                                As a versatile <strong>coating expert</strong>, we handle custom specifications for heavy industrial modules.
                            </p>
                            <p>
                                Trust our professional <strong>surface</strong> audits. We offer protective solutions that prioritize massive lifespan extensions as a reliable <strong>painting team</strong>.
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
                            <h2>Reliable Surface Engineering</h2>
                            <p>
                                From blast cleaning to final finish, we excel as a <strong>heavy-duty</strong> specialist. Choosing an expert <strong>industrial partner</strong> ensures immense project speed.
                            </p>
                            <p>
                                Whether you need floor coating or plant painting, as a <strong>project management</strong> partner, we prioritize operational safety.
                            </p>
                            <p>
                                Contact us for premium <strong>protection</strong> services. We are your partner for structural coating in <strong>industrial areas</strong>.
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
                            <h2>Maintenance by structural experts</h2>
                            <p>
                                Zinco provides specialized services as a <strong>technical partner</strong>. Protecting structures is vital as an <strong>industrial</strong> specialist for maintaining integrity.
                            </p>
                            <p>
                                We offer galvalume solutions as a <strong>specialized</strong> provider, preventing degradation. Rely on us for <strong>long-duration</strong> maintenance options.
                            </p>
                            <p>
                                Get a massive estimate today and cover your facility expanse with the help of a professional <strong>installation team</strong>.
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
                            <h3>Advice from industrial specialists</h3>
                            <p>
                                As a proactive <strong>service provider</strong>, we recommend regular pre-monsoon checks to prevent water damage.
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
                        <h2>FAQs for Monsoon-Proof Infrastructure</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>Why choose Zinco for your Lonavla project?</h3>
                                <p>Our massive execution capability in leak-proof engineering makes us the top choice for high-rainfall zones.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Do you offer structural audits?</h3>
                                <p>Yes, we specialize in monsoon-readiness audits for industrial and commercial sheds.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Can you assist with reroofing?</h3>
                                <p>Absolutely. As experts, we handle component replacements with specialized weather-sealing.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Why is a PEB solution preferred?</h3>
                                <p>Speed and accuracy. PEB structures allow faster setup before the monsoon season peaks.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Lonavla" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Best Protection Experts</h2>
                            <p>Protect your factory with expert <strong>coating</strong> support. Our team is ready for your site audit.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact#contact-form" className={styles.primaryBtn}>Request a Monsoon Audit</Link>
                                <button className={styles.secondaryBtn}>View Case Studies</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <LocationMap title="Lonavla" query="Lonavla, Maharashtra" />
        </div>
    );
};

export default LonavlaRoofing;
