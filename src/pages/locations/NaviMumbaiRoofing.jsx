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
import RoofingCalculator from '../../components/shared/RoofingCalculator';

const NaviMumbaiRoofing = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Roofing Cost Navi Mumbai | Industrial Roofing Estimator"
                description="Check the roofing cost navi mumbai for your industrial project. Get instant estimates for metal sheets, UPVC, and PUF panels in Taloja & Rabale MIDC."
                keywords="roofing cost navi mumbai, roofing contractor in navi mumbai, roofing sheets navi mumbai, industrial roofing navi mumbai"
                canonicalUrl="https://zincoroof.com/industrial-roofing-contractors-in-navi-mumbai"
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
                        <h1>roofing contractor in navi mumbai</h1>
                        <p>Delivering high-performance structural systems as the leading <strong>roofing contractor in navi mumbai</strong> for core industrial hubs.</p>
                            <Link to="/products" className={styles.heroBtn}>Explore Our Products</Link>
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
                            Complete roofing contractor in navi mumbai solutions
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Navi Mumbai is the logistical heart of the MMR. As a premier <strong>roofing contractor in navi mumbai</strong>, Zinco Roofing Solution provides the technical foundation for the city's growth. Our engineering structures are designed for high-wind resistance.
                        </motion.p>
                        <p>
                            Every <strong>roofing contractor in navi mumbai</strong> knows that industrial plant owners look for reliable partners. By hiring an expert <strong>roofing contractor in navi mumbai</strong>, you invest in high-tensile steel and advanced finishes.
                        </p>
                        <p>
                            When searching for a <strong>roofing contractor in navi mumbai</strong>, durability is the cornerstone. We provide superior results as your local <strong>roofing contractor in navi mumbai</strong>. Our team offers expert consulting as a top-tier <strong>roofing contractor in navi mumbai</strong>.
                        </p>
                    </motion.section>

                    <RoofingCalculator 
                        title="Roofing Cost Navi Mumbai Estimator" 
                        subtitle="Calculate the estimated roofing cost navi mumbai for your industrial shed. Choose your material and area for an instant budget baseline."
                    />

                    <motion.section 
                        className={styles.introSection}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Accurate industrial roofing quotes in Navi Mumbai</h2>
                        <p>
                            Navigating the <strong>roofing cost navi mumbai</strong> market requires a deep understanding of local industrial demands and material specifications. For businesses in Taloja MIDC or Rabale, the total price is often influenced by the choice between standard PPGL sheets and high-performance PUF insulated panels. While the initial investment might vary, calculating a comprehensive budget helps facility managers plan for long-term operational efficiency and superior thermal performance across the facility.
                        </p>
                        <p>
                            Several factors dictate the final <strong>roofing cost navi mumbai</strong>, including the shed's total square footage, the structural height, and the complexity of the fabrication components involved. At Zinco Roofing Solution, we believe in complete transparency, providing detailed line-item breakdowns so you can optimize your expenses without compromising on structural integrity or safety. Our engineering team analyzes specific wind load requirements and local environmental factors to ensure that every rupee spent translates into decades of reliability for your factory, workshop, or warehouse unit.
                        </p>
                        <p>
                            Beyond materials, labor expertise and on-site logistics significantly impact the <strong>roofing cost navi mumbai</strong>. Hiring specialized contractors ensures that every installation follows IS standards, preventing future leaks and costly maintenance expenses that could disrupt your daily production schedules. When you evaluate the quotes, always consider the added value of safety certifications and genuine factory warranties that come with professional execution.
                        </p>
                        <p>
                            Ultimately, a well-planned <strong>roofing cost navi mumbai</strong> strategy incorporates both upfront fabrication and periodic maintenance audits to preserve the asset's value. By choosing the right engineering partners, you can manage your project effectively while securing a high-quality industrial asset that supports your core business growth for years to come. Our interactive calculator above provides a baseline, but a technical site audit is always recommended for precise engineering estimates.
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
                            <h2>Strategic roofing contractor in navi mumbai Services</h2>
                            <p>
                                Engineering large-span sheds requires <strong>roofing contractor in navi mumbai</strong> knowledge. As a dedicated <strong>roofing contractor in navi mumbai</strong>, we utilize high-tensile Galvalume.
                            </p>
                            <p>
                                When you collaborate with a professional <strong>roofing contractor in navi mumbai</strong> like Zinco, you benefit from designs tested for extreme weather. Every <strong>roofing contractor in navi mumbai</strong> project is engineered for maximum ROI.
                            </p>
                            <p>
                                We are the leading <strong>roofing contractor in navi mumbai</strong> for massive logistics platforms. Choose our expert <strong>roofing contractor in navi mumbai</strong> services today.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={nmImg1} alt="roofing contractor in navi mumbai" />
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
                            <img src={nmImg2} alt="roofing contractor in navi mumbai thermal" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Energy savings with roofing contractor in navi mumbai</h2>
                            <p>
                                Temperature regulation is essential. We deliver panels as a <strong>roofing contractor in navi mumbai</strong> that reduce costs. When consulting with a <strong>roofing contractor in navi mumbai</strong>, we focus on thermal quality.
                            </p>
                            <p>
                                As a versatile <strong>roofing contractor in navi mumbai</strong>, we handle custom specifications for fire-rated construction.
                            </p>
                            <p>
                                Trust our professional <strong>roofing contractor in navi mumbai</strong> site audits. We offer solutions that prioritize energy savings as a reliable <strong>roofing contractor in navi mumbai</strong>.
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
                            <h2>Reliable roofing contractor in navi mumbai</h2>
                            <p>
                                We excel at shed fabrication as a <strong>roofing contractor in navi mumbai</strong>. Choosing an expert <strong>roofing contractor in navi mumbai</strong> ensures project speed.
                            </p>
                            <p>
                                Whether you need a workshop or a park, as a <strong>roofing contractor in navi mumbai</strong>, we prioritize longevity.
                            </p>
                            <p>
                                Contact us for premium <strong>roofing contractor in navi mumbai</strong> services. We are your partner as a safety-first <strong>roofing contractor in navi mumbai</strong>.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={nmImg3} alt="roofing contractor in navi mumbai fabrication" loading="lazy" />
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
                            <img src={nmImg4} alt="roofing contractor in navi mumbai coating" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Maintenance by roofing contractor in navi mumbai</h2>
                            <p>
                                Zinco provides specialized services as a <strong>roofing contractor in navi mumbai</strong>. professional rust prevention is vital as a <strong>roofing contractor in navi mumbai</strong> for maintaining integrity.
                            </p>
                            <p>
                                We offer protective finishes as a <strong>roofing contractor in navi mumbai</strong> for all industrial plants. Rely on us as a <strong>roofing contractor in navi mumbai</strong> for maintenance solutions.
                            </p>
                            <p>
                                Our team as a <strong>roofing contractor in navi mumbai</strong> ensures that your facility remains in top condition. Get a quote from a <strong>roofing contractor in navi mumbai</strong> today.
                            </p>
                        </div>
                    </motion.section>

                    {/* Technical Specification Section */}
                    <section className={`${styles.technicalSection} ${styles.darkMode}`}>
                        <h2>Technical Standards for roofing contractor in navi mumbai</h2>
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
                            <h3>Advice from a roofing contractor in navi mumbai</h3>
                            <p>
                                To maintain your asset, as a <strong>roofing contractor in navi mumbai</strong>, we provide annual maintenance contracts.
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
                        <h2>FAQs for roofing contractor in navi mumbai</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>Why choose Zinco as your roofing contractor in navi mumbai?</h3>
                                <p>Our specialized teams and reliable execution deliver unmatched ROI for your project.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Is there a roofing contractor in navi mumbai for Taloja?</h3>
                                <p>Yes, we specialize in industrial solutions for businesses across Taloja and Rabale.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Can a roofing contractor in navi mumbai assist with PEB?</h3>
                                <p>Absolutely. We handle Pre-Engineered Building (PEB) design and execution.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Why invest in a professional roofing contractor in navi mumbai?</h3>
                                <p>Investing in authorized providers like Zinco ensures factory warranties and operational safety.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Navi Mumbai" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Best roofing contractor in navi mumbai</h2>
                            <p>Protect your investment with top-tier <strong>roofing contractor in navi mumbai</strong> services. Our team is ready for your estimate.</p>
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

export default NaviMumbaiRoofing;
