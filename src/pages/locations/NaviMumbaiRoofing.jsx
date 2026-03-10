import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCity, FaShieldAlt, FaTools, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import heroImage from '../../assets/img2.webp';
import nmImg1 from '../../assets/Navi mumbai/navimumbai1.webp';
import nmImg2 from '../../assets/Navi mumbai/navimumbai2.webp';
import nmImg3 from '../../assets/projects/Cyberteck.webp';
import nmImg4 from '../../assets/Navi mumbai/navimumbai4.webp';
import styles from './LocationStyles.module.css';
import LocationServiceCards from '../../components/shared/LocationServiceCards';
import AreaLinks from '../../components/shared/AreaLinks';

const NaviMumbaiRoofing = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Roofing Sheets Navi Mumbai | Industrial Roofing Navi Mumbai Specialist"
                description="Expert Roofing Sheets Navi Mumbai and Industrial Roofing Navi Mumbai. Factory shed fabrication, PUF panels, and metal roofing for Taloja & Rabale MIDC."
                keywords="Roofing Sheets Navi Mumbai, Industrial Roofing Navi Mumbai"
                canonicalUrl="https://zincoroofing.com/roofing-sheets-navi-mumbai"
            />
            <Helmet>
                <link rel="preload" as="image" href={heroImage} />
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
                        <h1>Roofing Sheets Navi Mumbai & Industrial Roofing</h1>
                        <p>Delivering high-performance <strong>Roofing Sheets Navi Mumbai</strong> and <strong>Industrial Roofing Navi Mumbai</strong> solutions for core industrial hubs.</p>
                        <div className={styles.heroButtons}>
                            <Link to="/products" className={styles.heroBtn}>Explore Roofing Sheets Navi Mumbai</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className={styles.container}>
                <main className={styles.mainContent}>
                    <section className={styles.introSection}>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            High-Quality Roofing Sheets Navi Mumbai
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Navi Mumbai is the logistical heart of the MMR. As premier suppliers of <strong>Roofing Sheets Navi Mumbai</strong>, Zinco Roofing Solution provides the technical foundation for the city's growth. Our <strong>Industrial Roofing Navi Mumbai</strong> structures are engineered for high-wind resistance and thermal performance. We deliver the engineering needed for <strong>Roofing Sheets Navi Mumbai</strong>, ensuring every facility is built for safety. Our <strong>Industrial Roofing Navi Mumbai</strong> expertise is unmatched in the region.
                        </motion.p>
                        <p>
                            Industrial plant owners look for reliable <strong>Roofing Sheets Navi Mumbai</strong> partners. By hiring established <strong>Industrial Roofing Navi Mumbai</strong> experts, you invest in high-tensile steel and advanced finishes. We ensure every <strong>Roofing Sheets Navi Mumbai</strong> project meets all modern safety standards, providing assets for <strong>Industrial Roofing Navi Mumbai</strong> across Rabale and Taloja.
                        </p>
                        <p>
                            When searching for <strong>Roofing Sheets Navi Mumbai</strong>, quality is the cornerstone. We provide superior <strong>Industrial Roofing Navi Mumbai</strong> results that never compromise on safety. Our team offers <strong>Roofing Sheets Navi Mumbai</strong> consulting, helping you build a resilient foundation for your industrial growth through expert <strong>Industrial Roofing Navi Mumbai</strong>.
                        </p>
                    </section>

                    <LocationServiceCards location="Navi Mumbai" />

                    {/* Detailed Content Sections */}
                    <section className={styles.twoColumn}>
                        <div className={styles.textContent}>
                            <h2>Strategic Industrial Roofing Navi Mumbai Solutions</h2>
                            <p>
                                Engineering large-span sheds requires specialized <strong>Industrial Roofing Navi Mumbai</strong> knowledge. As dedicated providers of <strong>Roofing Sheets Navi Mumbai</strong>, we utilize high-tensile Galvalume sheets to ensure long-term protection. Our <strong>Industrial Roofing Navi Mumbai</strong> standards require high-speed installation without sacrificing safety.
                            </p>
                            <p>
                                Our reputation for <strong>Roofing Sheets Navi Mumbai</strong> is built on attention to detail. When you collaborate with Zinco for <strong>Industrial Roofing Navi Mumbai</strong>, you benefit from designs tested for extreme weather. Each <strong>Roofing Sheets Navi Mumbai</strong> project is engineered for maximum ROI, ensuring lasting peace of mind.
                            </p>
                            <p>
                                We are the leaders in <strong>Roofing Sheets Navi Mumbai</strong> for massive logistics platforms. Choose our expert <strong>Industrial Roofing Navi Mumbai</strong> services for your next build and experience the best structural protection.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={nmImg1} alt="Industrial Roofing Navi Mumbai Solutions" />
                        </div>
                    </section>

                    <section className={styles.twoColumn}>
                        <div className={styles.imageBlock}>
                            <img src={nmImg2} alt="Roofing Sheets Navi Mumbai PUF Panels" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Energy-Efficient Roofing Sheets Navi Mumbai and Insulation</h2>
                            <p>
                                Temperature regulation is essential for <strong>Industrial Roofing Navi Mumbai</strong>. We deliver energy-efficient <strong>Roofing Sheets Navi Mumbai</strong> and insulated panels that reduce operational costs. When consulting for <strong>Industrial Roofing Navi Mumbai</strong>, we focus on thermal quality.
                            </p>
                            <p>
                                Navi Mumbai's high temperatures demand high-performance <strong>Roofing Sheets Navi Mumbai</strong> barriers. As a versatile <strong>Industrial Roofing Navi Mumbai</strong> partner, we handle custom specifications for fire-rated construction.
                            </p>
                            <p>
                                Trust our professional <strong>Industrial Roofing Navi Mumbai</strong> site audits. We offer <strong>Roofing Sheets Navi Mumbai</strong> that prioritize energy savings and structural durability.
                            </p>
                        </div>
                    </section>

                    <section className={styles.twoColumn}>
                        <div className={styles.textContent}>
                            <h2>Heavy-Duty Industrial Roofing Navi Mumbai & Fabrication</h2>
                            <p>
                                From design to completion, we excel at <strong>Industrial Roofing Navi Mumbai</strong> and shed fabrication. Choosing expert <strong>Roofing Sheets Navi Mumbai</strong> ensures project speed and integrity. We deliver <strong>Industrial Roofing Navi Mumbai</strong> assets that meet all safety codes.
                            </p>
                            <p>
                                Our techniques utilize the latest technology for <strong>Roofing Sheets Navi Mumbai</strong> units. Whether you need <strong>Industrial Roofing Navi Mumbai</strong> for a workshop or a large park, we prioritize safety.
                            </p>
                            <p>
                                Contact us for premium <strong>Roofing Sheets Navi Mumbai</strong> services. We are your partner for <strong>Industrial Roofing Navi Mumbai</strong> excellence, offering safety-first construction.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={nmImg3} alt="Roofing Sheets Navi Mumbai Fabrication" loading="lazy" />
                        </div>
                    </section>

                    <section className={styles.twoColumn}>
                        <div className={styles.imageBlock}>
                            <img src={nmImg4} alt="Industrial Painting Navi Mumbai" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Expert Industrial Protective Coatings</h2>
                            <p>
                                Zinco provides specialized coating services that utilize high-end epoxy systems for maximum protection. Metal oxidation is a significant challenge in aggressive industrial environments, making professional rust prevention vital for maintaining structural integrity. Our reputation comes from thorough surface preparation and the use of premium industrial-grade materials that can withstand corrosive fumes.
                            </p>
                            <p>
                                We offer protective finishes for all types of industrial plants and warehouses, preventing humidity-related damage and extending the life of your structure. Rely on us for maintenance solutions that are cost-effective and durable, helping you avoid expensive structural repairs in the future.
                            </p>
                            <p>
                                Our highly trained team uses high-performance materials to ensure that your facility remains in top condition for years to come. Get a quote for your maintenance and painting needs today and protect your industrial investment.
                            </p>
                        </div>
                    </section>

                    {/* Technical Specification Section */}
                    <section className={`${styles.technicalSection} ${styles.darkMode}`}>
                        <h2>Technical Standards for Industrial Roofing Navi Mumbai</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.techTable}>
                                <thead>
                                    <tr>
                                        <th>Specification Category</th>
                                        <th>Zinco Standard</th>
                                        <th>Industrial Roofing Navi Mumbai Benefit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Product Range</td>
                                        <td><strong>Roofing Sheets Navi Mumbai</strong></td>
                                        <td>High SEO Visibility</td>
                                    </tr>
                                    <tr>
                                        <td>Structural Calculation</td>
                                        <td>IS:875 / IS:800 Compliant</td>
                                        <td>Maximum <strong>Industrial Roofing Navi Mumbai</strong> Resistance</td>
                                    </tr>
                                    <tr>
                                        <td>Insulation Grade</td>
                                        <td>Class-1 Fire Rated PUF</td>
                                        <td>Safety & <strong>Roofing Sheets Navi Mumbai</strong> Efficiency</td>
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
                            <h3>Expert Advice for Industrial Roofing Navi Mumbai</h3>
                            <p>
                                To maintain your <strong>Roofing Sheets Navi Mumbai</strong>, we provide annual maintenance contracts. Regular checks are vital for any <strong>Industrial Roofing Navi Mumbai</strong> project.
                            </p>
                            <div className={styles.maintenanceGrid}>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Drainage Clearance</strong>: Vital for <strong>Roofing Sheets Navi Mumbai</strong>.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Sealant Audits</strong>: Provided for all <strong>Industrial Roofing Navi Mumbai</strong> projects.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Structure Painting</strong>: Best for <strong>Roofing Sheets Navi Mumbai</strong> longevity.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className={styles.faqSection}>
                        <h2>FAQs about Roofing Sheets Navi Mumbai & Industrial Roofing Navi Mumbai</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>Why choose Zinco for Roofing Sheets Navi Mumbai?</h3>
                                <p>Our specialized <strong>Roofing Sheets Navi Mumbai</strong> and reliable <strong>Industrial Roofing Navi Mumbai</strong> teams deliver unmatched ROI.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Do you handle Industrial Roofing Navi Mumbai for Taloja?</h3>
                                <p>Yes, we specialze in <strong>Roofing Sheets Navi Mumbai</strong> for businesses across Taloja and Rabale MIDC.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Can you assist with PEB Roofing Sheets Navi Mumbai?</h3>
                                <p>Absolutely. We handle Pre-Engineered Building (PEB) design and <strong>Industrial Roofing Navi Mumbai</strong> execution.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Why invest in premium Industrial Roofing Navi Mumbai?</h3>
                                <p>Investing in authorized <strong>Roofing Sheets Navi Mumbai</strong> like Zinco ensures factory warranties and <strong>Industrial Roofing Navi Mumbai</strong> safety.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Navi Mumbai" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Best in Industrial Roofing Navi Mumbai</h2>
                            <p>Protect your investment with top-tier <strong>Roofing Sheets Navi Mumbai</strong>. Our <strong>Industrial Roofing Navi Mumbai</strong> team is ready for your estimate.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact#contact-form" className={styles.primaryBtn}>Request a Technical Audit</Link>
                                <button className={styles.secondaryBtn}>View Navi Mumbai Projects</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default NaviMumbaiRoofing;
