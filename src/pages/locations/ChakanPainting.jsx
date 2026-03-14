import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaPaintRoller, FaIndustry, FaShieldAlt, FaCheckCircle, FaFlask } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import heroImage from '../../assets/locations/chakan_hero.webp';
import cpImg1 from '../../assets/projects/Bajaj electrical.webp';
import cpImg2 from '../../assets/projects/Cyberteck.webp';
import cpImg3 from '../../assets/Metal roofing images/Metal roofing images/1000014465.webp';
import cpImg4 from '../../assets/Puf panel images/Puf panel images/1000014168.webp';
import styles from './LocationStyles.module.css';
import AreaLinks from '../../components/shared/AreaLinks';

const ChakanPainting = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Industrial Painting Services in Chakan | Epoxy Coatings Chakan"
                description="Expert industrial painting services in chakan. Specialized epoxy floor coating, structural protection, and anti-corrosive painting for Chakan & Talegaon MIDC."
                keywords="industrial painting services in chakan, Epoxy Coating Chakan, Structural Painting"
                canonicalUrl="https://zincoroof.com/industrial-painting-services-in-chakan"
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
                        <h1>industrial painting services in chakan</h1>
                        <p>Providing advanced surface protection and high-durability <strong>industrial painting services in chakan</strong> for the Pune industrial corridor.</p>
                        <div className={styles.heroButtons}>
                            <Link to="/products" className={styles.heroBtn}>Explore Coating Solutions</Link>
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
                            Professional industrial painting services in chakan
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Chakan is the automobile hub of India, where high-standard manufacturing requires persistent maintenance. As leading providers of <strong>industrial painting services in chakan</strong>, Zinco Roofing Solution delivers the protective layer that your facility needs.
                        </motion.p>
                        <p>
                            Corporate plant managers look for reliable partners for <strong>industrial painting services in chakan</strong>. By hiring an established expert in <strong>industrial painting services in chakan</strong>, you invest in high-performance coatings.
                        </p>
                        <p>
                            When searching for quality <strong>industrial painting services in chakan</strong>, durability is the primary goal. We are dedicated to providing superior <strong>industrial painting services in chakan</strong> results. Our team provides professional <strong>industrial painting services in chakan</strong> to help you build a resilient foundation.
                        </p>
                    </motion.section>

                    {/* Detailed Content Sections */}
                    <motion.section 
                        className={styles.twoColumn}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.textContent}>
                            <h2>Strategic industrial painting services in chakan</h2>
                            <p>
                                Applying finishes in high-precision zones requires <strong>industrial painting services in chakan</strong> knowledge. As dedicated specialists for <strong>industrial painting services in chakan</strong>, we utilize high-micron epoxy.
                            </p>
                            <p>
                                Our reputation for quality <strong>industrial painting services in chakan</strong> is built on attention to detail. When you collaborate with us for <strong>industrial painting services in chakan</strong>, you benefit from customized specifications.
                            </p>
                            <p>
                                We are the leaders in providing the most durable <strong>industrial painting services in chakan</strong>. Choose our expert <strong>industrial painting services in chakan</strong> for your next facility.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={cpImg1} alt="industrial painting services in chakan" loading="lazy" />
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
                            <img src={cpImg2} alt="industrial painting services in chakan protection" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Chemical protection with industrial painting services in chakan</h2>
                            <p>
                                Surface protection is essential. We deliver <strong>industrial painting services in chakan</strong> that reduce maintenance costs. When consulting for <strong>industrial painting services in chakan</strong>, we focus on material quality.
                            </p>
                            <p>
                                As a versatile provider of <strong>industrial painting services in chakan</strong>, we handle custom specifications for safe construction.
                            </p>
                            <p>
                                Trust our professional <strong>industrial painting services in chakan</strong> site audits. We offer modular solutions that prioritize durability for your <strong>industrial painting services in chakan</strong>.
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
                            <h2>Structural industrial painting services in chakan</h2>
                            <p>
                                We excel at maintaining steel as a <strong>industrial painting services in chakan</strong> specialist. Choosing expert <strong>industrial painting services in chakan</strong> ensures project speed and integrity.
                            </p>
                            <p>
                                Whether you need a plant refreshed, as a <strong>industrial painting services in chakan</strong> partner, we prioritize safety and longevity.
                            </p>
                            <p>
                                Contact us for premium <strong>industrial painting services in chakan</strong>. We are your partner for excellence in <strong>industrial painting services in chakan</strong> across the Pune corridor.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={cpImg3} alt="industrial painting services in chakan steel" loading="lazy" />
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
                            <img src={cpImg4} alt="industrial painting services in chakan refurbishment" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Expert industrial painting services in chakan</h2>
                            <p>
                                Zinco provides specialized <strong>industrial painting services in chakan</strong>. Protecting assets is vital as a <strong>industrial painting services in chakan</strong> provider in aggressive environments.
                            </p>
                            <p>
                                We offer protective finishes for plants as a <strong>industrial painting services in chakan</strong> specialist. Rely on us for <strong>industrial painting services in chakan</strong> maintenance solutions.
                            </p>
                            <p>
                                Our team for <strong>industrial painting services in chakan</strong> ensures your facility remains in top condition. Get a quote today for <strong>industrial painting services in chakan</strong> investment protection.
                            </p>
                        </div>
                    </motion.section>

                    {/* Technical Specification Section */}
                    <section className={`${styles.technicalSection} ${styles.darkMode}`}>
                        <h2>Technical Standards for industrial painting services in chakan</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.techTable}>
                                <thead>
                                    <tr>
                                        <th>Coating Category</th>
                                        <th>Standard Specification</th>
                                        <th>Durability Rating</th>
                                        <th>Operational Benefit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Epoxy Flooring</td>
                                        <td>Self-Leveling 2-3mm</td>
                                        <td>High Impact</td>
                                        <td>Dust-Free Workspace</td>
                                    </tr>
                                    <tr>
                                        <td>Anti-Corrosive</td>
                                        <td>Zinc-Rich Primer</td>
                                        <td>C4-H Rated</td>
                                        <td>Rust Prevention</td>
                                    </tr>
                                    <tr>
                                        <td>PU Finishes</td>
                                        <td>UV Resistant Gloss</td>
                                        <td>Weatherproof</td>
                                        <td>Aesthetic Longevity</td>
                                    </tr>
                                    <tr>
                                        <td>Fire Retardant</td>
                                        <td>Intumescent Systems</td>
                                        <td>BS-476 Tested</td>
                                        <td>Structural Safety</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Maintenance Section */}
                    <section className={styles.maintenanceSection}>
                        <div className={styles.infoCard}>
                            <h3>Advice from industrial painting services in chakan</h3>
                            <p>
                                As proactive <strong>industrial painting services in chakan</strong> providers, we recommend regular site audits for your automotive facility.
                            </p>
                            <div className={styles.maintenanceGrid}>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Visual Inspections</strong>: Essential for early rust detection.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Cleaning Audits</strong>: Handled by professional teams.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Sealant Checks</strong>: Vital for industrial structures.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className={styles.faqSection}>
                        <h2>FAQs for industrial painting services in chakan</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>Why choose Zinco for industrial painting services in chakan?</h3>
                                <p>Our specialization in high-performance building solutions makes us the leading regional partner.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Do you offer industrial painting services in chakan for floors?</h3>
                                <p>Yes, we are the trusted experts for heavy-duty epoxy and PU floor systems.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Is there a specialist for industrial painting services in chakan restoration?</h3>
                                <p>Absolutely. As expert specialists, we handle major maintenance for old manufacturing plants.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Why hire professionals for industrial painting services in chakan?</h3>
                                <p>Hiring authorized contractors like Zinco ensures quality safety and official warranty.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Chakan Pune" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Best industrial painting services in chakan</h2>
                            <p>Protect your industrial investment with expert <strong>industrial painting services in chakan</strong>. Our team is ready for your site audit.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact#contact-form" className={styles.primaryBtn}>Request a Technical Audit</Link>
                                <button className={styles.secondaryBtn}>View Our Projects</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default ChakanPainting;
