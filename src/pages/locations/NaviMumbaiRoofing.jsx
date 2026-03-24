import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCity, FaShieldAlt, FaTools, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import LocationMap from '../../components/shared/LocationMap';
import heroImage from '../../assets/img2.webp';
import nmImg1 from '../../assets/Navi mumbai/navimumbai1.webp';
import nmImg2 from '../../assets/Navi mumbai/navimumbai2.webp';
import nmImg3 from '../../assets/projects/Cyberteck.webp';
import nmImg4 from '../../assets/Navi mumbai/navimumbai4.webp';
import styles from './LocationStyles.module.css';
import LocationServiceCards from '../../components/shared/LocationServiceCards';
import AreaLinks from '../../components/shared/AreaLinks';
import RoofingCalculator from '../../components/shared/RoofingCalculator';

const NaviMumbaiRoofing = () => {
    const mobileHighlights = [
        {
            title: "MIDC Specialists",
            desc: "Dedicated structural engineering for hubs like Taloja and Rabale.",
            icon: <FaCity />
        },
        {
            title: "Industrial Panels",
            desc: "High-grade metal sheets and PUF insulation for factory roofs.",
            icon: <FaShieldAlt />
        },
        {
            title: "Rapid Assembly",
            desc: "Safety-compliant installation with expert local knowledge.",
            icon: <FaTools />
        }
    ];

    return (
        <div className={styles.locationPage}>
            <SEO
                title="Industrial Roofing Specialist in Navi Mumbai | Premium Solutions"
                description="Expert structural fabrication and industrial roofing service in Navi Mumbai. High-performance metal roofing, PUF panels, and durable shed construction."
                keywords="industrial roofing specialist navi mumbai, structural fabrication navi mumbai, roofing sheets navi mumbai, factory shed contractors"
                canonicalUrl="https://www.zincoroof.com/industrial-roofing-contractors-in-navi-mumbai"
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
                        <h1>Industrial Roofing Specialist in Navi Mumbai</h1>
                        <p>Delivering high-performance structural systems as the leading <strong>Industrial Fabricator</strong> for core hubs like Taloja.</p>
                            <Link to="/products" className={styles.heroBtn}>Explore Our Products</Link>
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
                            Complete Structural Engineering Solutions
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Navi Mumbai is the logistical heart of the MMR. As a premier <strong>Industrial Roofing Specialist</strong>, Zinco Roofing Solution provides the technical foundation for the city's growth. Our engineering structures are designed for high-wind resistance.
                        </motion.p>
                        <p>
                            Every plant owner looks for reliable partners. By hiring an expert <strong>Structural Vendor</strong>, you invest in high-tensile steel and advanced finishes for your facility.
                        </p>
                        <p>
                            When searching for local experts, durability is the cornerstone. We provide superior results as your <strong>Navi Mumbai Roofing Partner</strong>. Our team offers expert consulting as a top-tier structural engineer.
                        </p>
                    </motion.section>

                    <RoofingCalculator 
                        title="Roofing Cost Navi Mumbai Estimator" 
                        subtitle="Calculate the estimated cost for your industrial shed. Choose material and area for an instant budget baseline."
                    />

                    <motion.section 
                        className={`${styles.introSection} ${styles.desktopOnly}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Accurate industrial roofing quotes in Navi Mumbai</h2>
                        <p>
                            Navigating the industrial market requires a deep understanding of local demands and material specifications. For businesses in Taloja MIDC or Rabale, the total price is often influenced by the choice between standard PPGL sheets and high-performance PUF insulated panels.
                        </p>
                        <p>
                            Several factors dictate the final budget, including the shed's total square footage, the structural height, and the complexity of the fabrication components involved. At Zinco Roofing Solution, we believe in complete transparency, providing detailed line-item breakdowns.
                        </p>
                    </motion.section>

                    <LocationServiceCards location="Navi Mumbai" />

                    {/* Detailed Content Sections */}
                    <motion.section 
                        className={styles.twoColumn}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.textContent}>
                            <h2>Strategic Industrial Fabrication Services</h2>
                            <p>
                                Engineering large-span sheds requires specialized <strong>Technical Knowledge</strong>. As a dedicated provider, we utilize high-tensile Galvalume for maximum load stability.
                            </p>
                            <p>
                                When you collaborate with a professional team like Zinco, you benefit from designs tested for extreme weather. Every structural project is engineered for maximum ROI.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={nmImg1} alt="Industrial Fabrication Navi Mumbai" />
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
                            <img src={nmImg2} alt="Thermal Insulation Solutions" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Energy savings with Advanced Insulation</h2>
                            <p>
                                Temperature regulation is essential. We deliver panels that reduce cooling costs. When consulting with our engineers, we focus on thermal quality.
                            </p>
                            <p>
                                Trust our professional site audits. We offer solutions that prioritize energy savings as a reliable <strong>Industrial Fabricator</strong>.
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
                                We excel at structural shed fabrication. Choosing an expert <strong>Engineering Team</strong> ensures project speed and safety compliance across MIDC zones.
                            </p>
                            <p>
                                Whether you need a workshop or a logistics park, we prioritize longevity and corrosion resistance in every build.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={nmImg3} alt="Industrial Shed Construction" loading="lazy" />
                        </div>
                    </motion.section>

                    {/* Technical Specification Section */}
                    <section className={`${styles.technicalSection} ${styles.darkMode} ${styles.desktopOnly}`}>
                        <h2>Technical Standards for Industrial Mastery</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.techTable}>
                                <thead>
                                    <tr>
                                        <th>Specification Category</th>
                                        <th>Zinco Standard</th>
                                        <th>Operational Benefit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Product Range</td>
                                        <td>Grade-A Materials</td>
                                        <td>High Durability</td>
                                    </tr>
                                    <tr>
                                        <td>Structural Calculation</td>
                                        <td>IS:875 / IS:800 Compliant</td>
                                        <td>Maximum Resistance</td>
                                    </tr>
                                    <tr>
                                        <td>Insulation Grade</td>
                                        <td>Class-1 Fire Rated PUF</td>
                                        <td>Safety & Efficiency</td>
                                    </tr>
                                    <tr>
                                        <td>Material Certifications</td>
                                        <td>ASTM / IS Verified Sheets</td>
                                        <td>Industrial Asset Security</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Maintenance Section */}
                    <section className={styles.maintenanceSection}>
                        <div className={styles.infoCard}>
                            <h3>Advice from a Roofing Specialist</h3>
                            <p>
                                To maintain your asset, we provide comprehensive annual maintenance contracts for all industrial clients.
                            </p>
                            <div className={styles.maintenanceGrid}>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Drainage Clearance</strong>: Vital for building health.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Sealant Audits</strong>: Provided for all projects.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Structure Painting</strong>: Best for longevity.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className={styles.faqSection}>
                        <h2>Common Industry Questions</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>Why choose Zinco for Navi Mumbai projects?</h3>
                                <p>Our specialized teams and reliable execution deliver unmatched ROI for factory and warehouse builds.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Do you cover Taloja and Rabale?</h3>
                                <p>Yes, we specialize in industrial solutions for businesses across Taloja, Rabale, and Mahape MIDC.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Can you assist with PEB design?</h3>
                                <p>Absolutely. We handle Pre-Engineered Building (PEB) design and rapid execution.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Navi Mumbai" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Best Industrial Fabricators</h2>
                            <p>Protect your investment with top-tier engineering services. Our team is ready for your estimate.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact#contact-form" className={styles.primaryBtn}>Request a Technical Audit</Link>
                                <Link to="/industrial-roofing-projects-navi-mumbai" className={styles.secondaryBtn}>View Our Projects</Link>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <LocationMap title="Navi Mumbai" query="Navi Mumbai, Maharashtra" />
        </div>
    );
};

export default NaviMumbaiRoofing;
