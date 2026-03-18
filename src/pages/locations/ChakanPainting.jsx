import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaPaintRoller, FaIndustry, FaShieldAlt, FaCheckCircle, FaFlask } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import LocationMap from '../../components/shared/LocationMap';
import heroImage from '../../assets/locations/chakan_hero.webp';
import cpImg1 from '../../assets/chakan/chakan-painting-setup.png';
import cpImg2 from '../../assets/chakan/chakan-industrial-coating.png';
import cpImg3 from '../../assets/chakan/chakan-structural-painting.png';
import cpImg4 from '../../assets/chakan/chakan-epoxy-flooring.png';
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
                        <p>Delivering high-performance protective coating solutions as the leading <strong>industrial experts</strong> for automobile hubs.</p>
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
                            Advanced Surface Protection for Industrial Assets
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Chakan MIDC requires specialized corrosion control. As the premier <strong>industrial painting services in chakan</strong>, Zinco Roofing Solution provides industrial-grade epoxy and PU coatings.
                        </motion.p>
                        <p>
                            Plant managers and maintenance engineers look for a reliable <strong>surface specialist</strong> who prioritizes durability. By hiring an established <strong>coating partner</strong>, you ensure long-term integrity.
                        </p>
                        <p>
                            When protecting steel structures, every <strong>building expert</strong> knows that micron-thickness is critical. We are dedicated to providing excellence as your trusted <strong>protection team</strong>. Reach out to the leading <strong>industrial specialists</strong> today.
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
                            <h2>Strategic Coating Solutions</h2>
                            <p>
                                Surface integrity in the MIDC belt requires <strong>local technical</strong> knowledge. As dedicated specialists for <strong>large-scale facilities</strong>, we utilize high-pressure equipment.
                            </p>
                            <p>
                                Our reputation for quality <strong>painting systems</strong> is built on technical scale. When you collaborate with a <strong>structural specialist</strong>, you benefit from epoxy systems.
                            </p>
                            <p>
                                We are the leaders in providing finishes as a <strong>factory contractor</strong> without sacrificing safety. Choose our expert <strong>coating services</strong> for your next project.
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
                            <h2>Corrosion Resistance with specialty coatings</h2>
                            <p>
                                Maintaining structural integrity is critical. High-quality systems from a <strong>specialized provider</strong> deliver superior chemical resistance. When consulting with a <strong>technical team</strong>, we focus on durability.
                            </p>
                            <p>
                                As a versatile <strong>service provider</strong>, we handle custom specifications for industrial modules.
                            </p>
                            <p>
                                Trust our professional <strong>surface</strong> audits. We offer modular solutions that prioritize massive lifespan extensions as a reliable <strong>protection team</strong>.
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
                            <h2>Structural Painting Expertise</h2>
                            <p>
                                We excel at maintaining steel as a <strong>coating specialist</strong>. Choosing expert <strong>industrial painting services</strong> ensures project speed and integrity. Our rigorous multi-stage process begins with hyper-detailed surface preparation.
                            </p>
                            <p>
                                Surface treatment includes thorough degreasing and grit blasting to achieve the required profile for optimal adhesion. We utilize technical measuring devices to verify profile depth before applying the primer coat.
                            </p>
                            <p>
                                Whether you need a plant refreshed, as a <strong>painting partner</strong>, we prioritize operational safety. Our teams are trained in working at heights and confined spaces, utilizing advanced scaffolding and boom lifts.
                            </p>
                            <p>
                                Contact us for premium <strong>industrial coating solutions</strong>. We are your partner for excellence in <strong>surface protection</strong> across the Pune corridor. We provide comprehensive documentation for every micron applied.
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
                            <h2>Expert Industrial Coating Application</h2>
                            <p>
                                Zinco provides specialized <strong>industrial painting services</strong>. Protecting assets is vital as a <strong>coating provider</strong> in aggressive environments.
                            </p>
                            <p>
                                We offer protective finishes for plants as a <strong>painting specialist</strong>. Rely on us for <strong>maintenance solutions</strong>.
                            </p>
                            <p>
                                Our team for <strong>industrial painting</strong> ensures your facility remains in top condition. Get a quote today for <strong>investment protection</strong>.
                            </p>
                        </div>
                    </motion.section>

                    {/* Technical Specification Section */}
                    <section className={`${styles.technicalSection} ${styles.darkMode}`}>
                        <h2>Technical Standards for Industrial Coatings</h2>
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
                            <h3>Advice from Coating Experts</h3>
                            <p>
                                As proactive <strong>industrial painting service providers</strong>, we recommend regular site audits for your automotive facility.
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
                        <h2>FAQs for Industrial Painting</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>Why choose Zinco for Chakan project?</h3>
                                <p>Our massive execution capability in epoxy and heat-resistant coatings makes us the top choice for OEMs.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Do you offer floor coating?</h3>
                                <p>Yes, we specialize in high-traffic industrial floor epoxy that resists chemical spills.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Can you assist with structural painting?</h3>
                                <p>Absolutely. As experts, we handle phased painting with zero plant downtime.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Why is a PU coating preferred?</h3>
                                <p>UV resistance and color retention. PU coatings allow longer lasting protection for external structures.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Chakan Pune" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Best Regional Experts</h2>
                            <p>Protect your factory with expert <strong>protection</strong> support. Our team is ready for your site audit.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact#contact-form" className={styles.primaryBtn}>Request a Technical Audit</Link>
                                <button className={styles.secondaryBtn}>View Our Projects</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <LocationMap title="Chakan Industrial Area" query="Chakan, Pune" />
        </div>
    );
};

export default ChakanPainting;
