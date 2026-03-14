import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCity, FaShieldAlt, FaTools, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import heroImage from '../../assets/locations/dombivli_hero.webp';
import domImg1 from '../../assets/Metal roofing images/Metal roofing images/1000014465.webp';
import domImg2 from '../../assets/Puf panel images/Puf panel images/1000014168.webp';
import domImg3 from '../../assets/projects/Regency.webp';
import domImg4 from '../../assets/Upvc images/Upvc images/1000014394.webp';
import styles from './LocationStyles.module.css';
import LocationServiceCards from '../../components/shared/LocationServiceCards';
import AreaLinks from '../../components/shared/AreaLinks';

const DombivliRoofing = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Roofing Contractor in Dombivli | Industrial Roofing Specialist"
                description="Expert roofing contractor in dombivli. High-performance metal roofing, PUF panels, and structural fabrication specialists for Dombivli MIDC."
                keywords="roofing contractor in dombivli, Roofing Sheets Dombivli, Industrial Roofing Dombivli"
                canonicalUrl="https://zincoroof.com/roofing-contractor-in-dombivli"
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
                        <h1>roofing contractor in dombivli</h1>
                        <p>Providing specialized structural solutions as the most trusted <strong>roofing contractor in dombivli</strong> for regional industrial landscapes.</p>
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
                            Expert roofing contractor in dombivli building envelopes
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Dombivli MIDC is one of Asia's largest industrial estates. As a premier <strong>roofing contractor in dombivli</strong>, Zinco Roofing Solution understands technical requirements for heavy-duty construction.
                        </motion.p>
                        <p>
                            Corporate plant managers look for a reliable <strong>roofing contractor in dombivli</strong> partner. By hiring an established <strong>roofing contractor in dombivli</strong>, you invest in high-micron materials. As a <strong>roofing contractor in dombivli</strong>, we ensure every project meets modern safety standards.
                        </p>
                        <p>
                            When searching for a quality <strong>roofing contractor in dombivli</strong>, durability is the cornerstone. We are dedicated to providing superior results as your <strong>roofing contractor in dombivli</strong>. Reach out to the top <strong>roofing contractor in dombivli</strong> today.
                        </p>
                    </motion.section>

                    <LocationServiceCards location="Dombivli" />

                    {/* Detailed Content Sections */}
                    <motion.section 
                        className={styles.twoColumn}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.textContent}>
                            <h2>Resilient services from a roofing contractor in dombivli</h2>
                            <p>
                                Working in chemical zones requires <strong>roofing contractor in dombivli</strong> expertise. As a dedicated <strong>roofing contractor in dombivli</strong>, we utilize Galvalume sheets. Every <strong>roofing contractor in dombivli</strong> knows the importance of precision.
                            </p>
                            <p>
                                Our reputation as a <strong>roofing contractor in dombivli</strong> is built on attention to detail. When you collaborate with a <strong>roofing contractor in dombivli</strong>, you benefit from customized designs.
                            </p>
                            <p>
                                We are the leaders in providing installations as a <strong>roofing contractor in dombivli</strong>. Choose our expert <strong>roofing contractor in dombivli</strong> services for your next unit.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={domImg1} alt="roofing contractor in dombivli construction" loading="lazy" />
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
                            <img src={domImg2} alt="roofing contractor in dombivli insulation" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Energy efficiency with roofing contractor in dombivli</h2>
                            <p>
                                Temperature regulation is essential. As a <strong>roofing contractor in dombivli</strong>, we deliver energy-efficient panels. When consulting with a <strong>roofing contractor in dombivli</strong>, we focus on thermal performance.
                            </p>
                            <p>
                                As a versatile <strong>roofing contractor in dombivli</strong> partner, we handle custom specifications for safe construction.
                            </p>
                            <p>
                                Trust our professional <strong>roofing contractor in dombivli</strong> site audits. We offer modular solutions as a reliable <strong>roofing contractor in dombivli</strong>.
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
                            <h2>Fabrication by roofing contractor in dombivli</h2>
                            <p>
                                From design to completion, we excel as a <strong>roofing contractor in dombivli</strong> specialist. Choosing an expert <strong>roofing contractor in dombivli</strong> ensures project speed and integrity.
                            </p>
                            <p>
                                Whether you need a workshop or plant, as a <strong>roofing contractor in dombivli</strong> partner, we prioritize longevity.
                            </p>
                            <p>
                                Contact us for premium <strong>roofing contractor in dombivli</strong> services. We are your partner for excellence in <strong>roofing contractor in dombivli</strong>.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={domImg3} alt="roofing contractor in dombivli fabrication" loading="lazy" />
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
                            <img src={domImg4} alt="roofing contractor in dombivli coating" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Protective coatings from roofing contractor in dombivli</h2>
                            <p>
                                Zinco provides specialized coating services as a <strong>roofing contractor in dombivli</strong>. Protecting assets from corrosion is vital for any <strong>roofing contractor in dombivli</strong>.
                            </p>
                            <p>
                                We offer finishes as a <strong>roofing contractor in dombivli</strong>, preventing rust. Rely on us for <strong>roofing contractor in dombivli</strong> maintenance solutions.
                            </p>
                            <p>
                                Our team ensures your facility remains in top condition. Get a quote today from a leading <strong>roofing contractor in dombivli</strong>.
                            </p>
                        </div>
                    </motion.section>

                    {/* Technical Specification Section */}
                    <section className={`${styles.technicalSection} ${styles.darkMode}`}>
                        <h2>Technical Standards for roofing contractor in dombivli</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.techTable}>
                                <thead>
                                    <tr>
                                        <th>Metric Category</th>
                                        <th>Standard Panels</th>
                                        <th>Industrial Grade</th>
                                        <th>MIDC Benefit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Application</td>
                                        <td>Chemical Resistance</td>
                                        <td>Pharma / Engineering</td>
                                        <td>Robust Design</td>
                                    </tr>
                                    <tr>
                                        <td>Corrosion Protection</td>
                                        <td>C5-M Rated Coatings</td>
                                        <td>Zinc-Aluminum Alloy</td>
                                        <td>Chemical Resistance</td>
                                    </tr>
                                    <tr>
                                        <td>Thermal R-Value</td>
                                        <td>High Density PUF</td>
                                        <td>Insulated Panels</td>
                                        <td>Energy Efficiency</td>
                                    </tr>
                                    <tr>
                                        <td>Wind Speed Rating</td>
                                        <td>IS:875 Compliant</td>
                                        <td>Heavy Duty Steel</td>
                                        <td>Structural Safety</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Maintenance Section */}
                    <section className={styles.maintenanceSection}>
                        <div className={styles.infoCard}>
                            <h3>Advice from a roofing contractor in dombivli</h3>
                            <p>
                                As a proactive <strong>roofing contractor in dombivli</strong>, we recommend regular site audits for your industrial assets.
                            </p>
                            <div className={styles.maintenanceGrid}>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Drainage Audits</strong>: Essential for high rainfall.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Sealant Checks</strong>: Handled by professional teams.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Rust Inspections</strong>: Vital for structures in MIDC.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className={styles.faqSection}>
                        <h2>FAQs for roofing contractor in dombivli</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>Why choose Zinco as your roofing contractor in dombivli?</h3>
                                <p>Our specialization in chemical-resistant building solutions makes us the leading regional partner.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Does a roofing contractor in dombivli handle PEB?</h3>
                                <p>Yes, we are the trusted experts for Pre-Engineered Building design and fabrication.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Can a roofing contractor in dombivli assist with restoration?</h3>
                                <p>Absolutely. As expert specialists, we handle major structural restoration for old plants.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Why hire an authorized roofing contractor in dombivli?</h3>
                                <p>Hiring authorized contractors like Zinco ensures quality safety and warranty.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Dombivli" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Best roofing contractor in dombivli</h2>
                            <p>Protect your investment with expert <strong>roofing contractor in dombivli</strong> engineering. Our team is ready for your site audit.</p>
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

export default DombivliRoofing;
