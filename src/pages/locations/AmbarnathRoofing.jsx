import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaIndustry, FaShieldAlt, FaTools, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import LocationMap from '../../components/shared/LocationMap';
import heroImage from '../../assets/locations/ambarnath_hero.webp';
import ambImg1 from '../../assets/Metal roofing images/Metal roofing images/1000014335.webp';
import ambImg2 from '../../assets/Puf panel images/Puf panel images/1001155532.webp';
import ambImg3 from '../../assets/projects/Valvoline-ambarnath.webp';
import ambImg4 from '../../assets/Upvc images/Upvc images/1000014390.webp';
import styles from './LocationStyles.module.css';
import LocationServiceCards from '../../components/shared/LocationServiceCards';
import AreaLinks from '../../components/shared/AreaLinks';

const AmbarnathRoofing = () => {
    const mobileHighlights = [
        {
            title: "MIDC Specialist",
            desc: "Dedicated structural engineering for Ambarnath industrial units.",
            icon: <FaIndustry />
        },
        {
            title: "High-Span Sheds",
            desc: "Engineering heavy-duty warehouses with zero internal columns.",
            icon: <FaShieldAlt />
        },
        {
            title: "Quick Deployment",
            desc: "Rapid on-site assembly ensuring minimal operational lag.",
            icon: <FaTools />
        }
    ];

    return (
        <div className={styles.locationPage}>
            <SEO
                title="Roofing Contractor in Ambarnath | Industrial Roofing Specialists"
                description="Expert roofing contractor in ambarnath. We provide expert metal roofing, PUF panels, and structural fabrication for Ambarnath MIDC factory sheds."
                keywords="roofing contractor in ambarnath, ambarnath midc roofing, industrial roofing ambarnath"
                canonicalUrl="https://www.zincoroof.com/roofing-contractor-in-ambarnath"
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
                        <h1>Reliable roofing contractor in ambarnath</h1>
                        <p>Delivering high-performance structural systems as the leading <strong>roofing contractor in ambarnath</strong> for core industrial hubs.</p>
                        <div className={styles.heroButtons}>
                            <Link to="/products" className={styles.heroBtn}>View Our Products</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className={styles.container}>
                <main className={styles.mainContent}>
                    {/* Mobile Only Highlights */}
                    <section className={styles.mobileOnly}>
                        <div className={styles.mobileHighlightsGrid}>
                            {mobileHighlights.map((item, idx) => (
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
                        className={`${styles.introSection} ${styles.desktopOnly}`}
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
                            Ambarnath MIDC is a critical hub for Mumbai's industrial growth. As a premier <strong>roofing contractor in ambarnath</strong>, Zinco Roofing Solution provides technical foundations for heavy manufacturing. Our engineering as a <strong>structural specialist</strong> supports massive factory layouts.
                        </motion.p>
                        <p>
                            Every plant manager knows that industrial owners look for reliable partners. By hiring an expert <strong>industrial vendor</strong>, you ensure that your facility remains safe and operational under a <strong>durable roof</strong>.
                        </p>
                        <p>
                            When searching for a <strong>structural partner</strong>, quality and commitment are key. We are dedicated to providing excellence as your trusted <strong>expert engineering team</strong>. 
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
                            <h2>Strategic Industrial Services</h2>
                            <p>
                                Infrastructure in industrial zones requires <strong>specialized knowledge</strong>. Hiring a professional <strong>expert engineering team</strong> ensures that your building remains leak-proof and durable.
                            </p>
                            <p>
                                When you collaborate with a <strong>PEB Specialist</strong> like Zinco, you benefit from customized solutions. Every structural project is tested for extreme weather as a <strong>quality engineering</strong> project.
                            </p>
                            <p>
                                We are the leading choice for factory units or regional warehouses. Choose our expert <strong>Industrial engineering</strong> services today.
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
                            <img src={ambImg2} alt="roofing contractor in ambarnath" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Energy Savings per PUF Panels</h2>
                            <p>
                                Temperature regulation is essential for a <strong>structural partner</strong>. We deliver panels as an <strong>Industrial Expert</strong> that reduce costs significantly. When consulting with our <strong>technical team</strong>, we focus on thermal stability.
                            </p>
                            <p>
                                As a versatile <strong>Structural Partner</strong>, we handle custom specifications for safe modular construction.
                            </p>
                            <p>
                                Trust our professional site audits. We offer modular solutions that prioritize quality as a reliable <strong>expert vendor</strong>.
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
                            <h2>Reliable Shed Fabrication</h2>
                            <p>
                                We excel at shed fabrication as a <strong>structural vendor</strong>. Choosing an expert <strong>engineering company</strong> ensures project speed and structural integrity.
                            </p>
                            <p>
                                Whether you need a warehouse or a unit, as a <strong>Partner</strong>, we prioritize longevity and workflow for every <strong>industrial hub</strong> client.
                            </p>
                            <p>
                                Contact us for premium industrial services. We are your partner as a safety-first <strong>expert engineering team</strong>.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={ambImg3} alt="roofing contractor in ambarnath" loading="lazy" />
                        </div>
                    </motion.section>

                    <motion.section 
                        className={`${styles.twoColumn} ${styles.desktopOnly}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.imageBlock}>
                            <img src={ambImg4} alt="roofing contractor in ambarnath" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Maintenance by Professional Teams</h2>
                            <p>
                                Zinco provides specialized services as an <strong>Industrial Consultant</strong>. Professional rust prevention is vital for maintaining integrity.
                            </p>
                            <p>
                                We offer protective finishes as a <strong>structural expert</strong> for all industrial plants. Rely on our <strong>maintenance team</strong> for structural solutions.
                            </p>
                            <p>
                                Our team ensures that your facility remains in top condition. Get a quote from a reliable <strong>roofing contractor in ambarnath</strong> today.
                            </p>
                        </div>
                    </motion.section>

                    {/* Technical Specification Section */}
                    <section className={`${styles.technicalSection} ${styles.darkMode} ${styles.desktopOnly}`}>
                        <h2>Technical Standards for Industrial Hubs</h2>
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
                            <h3>Advice from a Technical Expert</h3>
                            <p>
                                To maintain your asset, as an established <strong>roofing contractor in ambarnath</strong>, we provide annual maintenance contracts.
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
                        <h2>Common Setup Queries</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>Why choose Zinco as your roofing contractor in ambarnath?</h3>
                                <p>Our specialized teams and reliable execution deliver unmatched ROI and safety.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Do you assist with PEB design?</h3>
                                <p>Yes, we provide specialized solutions for all Pre-Engineered Building (PEB) designs as an expert <strong>industrial vendor</strong>.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Can you repair old sheds?</h3>
                                <p>Absolutely. Our technical team specializes in restoring and replacing old roofing sheets for any <strong>structural</strong> client.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>What is the cost of industrial projects?</h3>
                                <p>Pricing depends on specifications. Contact us for the best industrial project quote as a leading <strong>roofing contractor in ambarnath</strong>.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Ambarnath" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Best Industrial Experts</h2>
                            <p>Protect your investment with top-tier <strong>roofing contractor in ambarnath</strong> services. Our team is ready for your project.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact#contact-form" className={styles.primaryBtn}>Request a Technical Audit</Link>
                                <button className={styles.secondaryBtn}>View Projects</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <LocationMap title="Ambarnath" query="Ambarnath, Maharashtra" />
        </div>
    );
};

export default AmbarnathRoofing;
