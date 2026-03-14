import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaIndustry, FaShieldAlt, FaTools, FaCheckCircle, FaFlask } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import heroImage from '../../assets/locations/taloja_hero.webp';
import talojaImg1 from '../../assets/Metal roofing images/Metal roofing images/1000014152.webp';
import talojaImg2 from '../../assets/Puf panel images/Puf panel images/1001155530.webp';
import talojaImg3 from '../../assets/projects/amar studio.webp';
import talojaImg4 from '../../assets/Upvc images/Upvc images/1000014255.webp';
import styles from './LocationStyles.module.css';
import LocationServiceCards from '../../components/shared/LocationServiceCards';
import AreaLinks from '../../components/shared/AreaLinks';

const TalojaRoofing = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Roofing Contractor in Taloja | Industrial Roofing Specialists"
                description="Expert roofing contractor in taloja. Specializing in chemical-resistant roofing, PUF panels, and metal roofing for Taloja MIDC factories."
                keywords="roofing contractor in taloja, taloja midc roofing, industrial roofing taloja"
                canonicalUrl="https://zincoroof.com/roofing-contractor-in-taloja"
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
                        <h1>roofing contractor in taloja</h1>
                        <p>Delivering high-performance structural systems as the leading <strong>roofing contractor in taloja</strong> for core industrial hubs.</p>
                        <div className={styles.heroButtons}>
                            <Link to="/products" className={styles.heroBtn}>Explore Our Products</Link>
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
                            Complete roofing contractor in taloja solutions
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Taloja MIDC is the logistical heart of the MMR. As a premier <strong>roofing contractor in taloja</strong>, Zinco Roofing Solution provides the technical foundation for the city's growth. Our engineering structures are designed for high-wind resistance.
                        </motion.p>
                        <p>
                            Every <strong>roofing contractor in taloja</strong> knows that industrial plant owners look for reliable partners. By hiring an expert <strong>roofing contractor in taloja</strong>, you invest in high-tensile steel and advanced finishes.
                        </p>
                        <p>
                            When searching for a <strong>roofing contractor in taloja</strong>, durability is the cornerstone. We provide superior results as your local <strong>roofing contractor in taloja</strong>. Our team offers expert consulting as a top-tier <strong>roofing contractor in taloja</strong>.
                        </p>
                    </motion.section>

                    <LocationServiceCards location="Taloja" />

                    {/* Detailed Content Sections */}
                    <motion.section 
                        className={styles.twoColumn}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.textContent}>
                            <h2>Strategic roofing contractor in taloja Services</h2>
                            <p>
                                Engineering large-span sheds requires <strong>roofing contractor in taloja</strong> knowledge. As a dedicated <strong>roofing contractor in taloja</strong>, we utilize high-tensile Galvalume.
                            </p>
                            <p>
                                When you collaborate with a professional <strong>roofing contractor in taloja</strong> like Zinco, you benefit from designs tested for extreme weather. Every <strong>roofing contractor in taloja</strong> project is engineered for maximum ROI.
                            </p>
                            <p>
                                We are the leading <strong>roofing contractor in taloja</strong> for massive logistics platforms. Choose our expert <strong>roofing contractor in taloja</strong> services today.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={talojaImg1} alt="roofing contractor in taloja" />
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
                            <img src={talojaImg2} alt="roofing contractor in taloja thermal" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Energy savings with roofing contractor in taloja</h2>
                            <p>
                                Temperature regulation is essential. We deliver panels as a <strong>roofing contractor in taloja</strong> that reduce costs. When consulting with a <strong>roofing contractor in taloja</strong>, we focus on thermal quality.
                            </p>
                            <p>
                                As a versatile <strong>roofing contractor in taloja</strong>, we handle custom specifications for fire-rated construction.
                            </p>
                            <p>
                                Trust our professional <strong>roofing contractor in taloja</strong> site audits. We offer solutions that prioritize energy savings as a reliable <strong>roofing contractor in taloja</strong>.
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
                            <h2>Reliable roofing contractor in taloja</h2>
                            <p>
                                We excel at shed fabrication as a <strong>roofing contractor in taloja</strong>. Choosing an expert <strong>roofing contractor in taloja</strong> ensures project speed.
                            </p>
                            <p>
                                Whether you need a workshop or a park, as a <strong>roofing contractor in taloja</strong>, we prioritize longevity.
                            </p>
                            <p>
                                Contact us for premium <strong>roofing contractor in taloja</strong> services. We are your partner as a safety-first <strong>roofing contractor in taloja</strong>.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={talojaImg3} alt="roofing contractor in taloja fabrication" loading="lazy" />
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
                            <img src={talojaImg4} alt="roofing contractor in taloja coating" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Maintenance by roofing contractor in taloja</h2>
                            <p>
                                Zinco provides specialized services as a <strong>roofing contractor in taloja</strong>. professional rust prevention is vital as a <strong>roofing contractor in taloja</strong> for maintaining integrity.
                            </p>
                            <p>
                                We offer protective finishes as a <strong>roofing contractor in taloja</strong> for all industrial plants. Rely on us as a <strong>roofing contractor in taloja</strong> for maintenance solutions.
                            </p>
                            <p>
                                Our team as a <strong>roofing contractor in taloja</strong> ensures that your facility remains in top condition. Get a quote from a <strong>roofing contractor in taloja</strong> today.
                            </p>
                        </div>
                    </motion.section>

                    {/* Technical Specification Table */}
                    <section className={`${styles.technicalSection} ${styles.darkMode}`}>
                        <h2>Technical Standards for roofing contractor in taloja</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.techTable}>
                                <thead>
                                    <tr>
                                        <th>Metric Category</th>
                                        <th>Standard Specification</th>
                                        <th>Material Grade</th>
                                        <th>Operational Benefit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Application</td>
                                        <td>Chemical Resistance</td>
                                        <td>Manufacturing Units</td>
                                        <td>Zero Leakage Guarantee</td>
                                    </tr>
                                    <tr>
                                        <td>Corrosion Protection</td>
                                        <td>C5-M Rated Coatings</td>
                                        <td>Acid Resistant</td>
                                        <td>Chemical Zone Compliance</td>
                                    </tr>
                                    <tr>
                                        <td>Thermal R-Value</td>
                                        <td>High Density PUF</td>
                                        <td>Insulated Panels</td>
                                        <td>Energy Efficiency</td>
                                    </tr>
                                    <tr>
                                        <td>Safety Compliance</td>
                                        <td>Full Industrial EHS</td>
                                        <td>Shed Fabrication</td>
                                        <td>MIDC Risk Management</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Maintenance Section */}
                    <section className={styles.maintenanceSection}>
                        <div className={styles.infoCard}>
                            <h3>Advice from a roofing contractor in taloja</h3>
                            <p>
                                To maintain your asset, as a <strong>roofing contractor in taloja</strong>, we provide annual maintenance contracts.
                            </p>
                            <div className={styles.maintenanceGrid}>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Gutter Audits</strong>: Essential for handling large monsoon volume.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Sealant Inspections</strong>: Provided by our diligence.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Cleaning</strong>: Removing chemical dust accumulation on surfaces.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className={styles.faqSection}>
                        <h2>FAQs for roofing contractor in taloja</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>Why choose Zinco as your roofing contractor in taloja?</h3>
                                <p>Our specialized teams and reliable execution deliver unmatched ROI for your project.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Is there a roofing contractor in taloja for Taloja?</h3>
                                <p>Yes, we specialize in industrial solutions for businesses across Taloja and Rabale.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Can a roofing contractor in taloja assist with PEB?</h3>
                                <p>Absolutely. We handle Pre-Engineered Building (PEB) design and execution.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Why invest in a professional roofing contractor in taloja?</h3>
                                <p>Investing in authorized providers like Zinco ensures factory warranties and operational safety.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Taloja MIDC" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Best roofing contractor in taloja</h2>
                            <p>Protect your investment with top-tier <strong>roofing contractor in taloja</strong> services. Our team is ready for your estimate.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact#contact-form" className={styles.primaryBtn}>Request a Technical Audit</Link>
                                <button className={styles.secondaryBtn}>View Case Studies</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default TalojaRoofing;
