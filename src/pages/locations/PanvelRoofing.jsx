import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaWarehouse, FaShieldAlt, FaTools, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import heroImage from '../../assets/img3.webp';
import panvelImg1 from '../../assets/Metal roofing images/Metal roofing images/1000014010.webp';
import panvelImg2 from '../../assets/Puf panel images/Puf panel images/1000014252.webp';
import panvelImg3 from '../../assets/projects/Godreh-ambarnath.webp';
import panvelImg4 from '../../assets/Upvc images/Upvc images/1000014135.webp';
import panvelImg5 from '../../assets/MUMBAI/MUMBAI 3.webp';
import styles from './LocationStyles.module.css';
import LocationServiceCards from '../../components/shared/LocationServiceCards';
import AreaLinks from '../../components/shared/AreaLinks';

const PanvelRoofing = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Roofing Contractor in Panvel | Industrial Roofing Panvel Specialist"
                description="Expert roofing contractor in panvel solutions. Specializing in high-span warehouse roofing, factory sheds, and PUF panels for Panvel's logistics hubs."
                keywords="roofing contractor in panvel, industrial roofing panvel, roofing sheets panvel"
                canonicalUrl="https://zincoroof.com/roofing-contractor-in-panvel"
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
                        <h1>roofing contractor in panvel</h1>
                        <p>Providing specialized structural solutions and high-performance metal panels as the premier <strong>roofing contractor in panvel</strong> for massive infrastructure.</p>
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
                            Professional roofing contractor in panvel
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Panvel requires a specialized <strong>roofing contractor in panvel</strong> for its massive warehousing and industrial hubs. As a reliable <strong>roofing contractor in panvel</strong>, Zinco Roofing Solution understands high-span structures.
                        </motion.p>
                        <p>
                            Logistics facility managers look for a reliable <strong>roofing contractor in panvel</strong>. By hiring an established <strong>roofing contractor in panvel</strong>, you invest in quality. As a <strong>roofing contractor in panvel</strong>, we deliver engineering excellence across the city.
                        </p>
                        <p>
                            When searching for quality, every <strong>roofing contractor in panvel</strong> knows that strength is the cornerstone. We are dedicated to providing superior results as the top <strong>roofing contractor in panvel</strong>. Reach out for site audits as a leading <strong>roofing contractor in panvel</strong>.
                        </p>
                    </motion.section>

                    <LocationServiceCards location="Panvel" />

                    {/* Detailed Content Sections */}
                    <motion.section 
                        className={styles.twoColumn}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.textContent}>
                            <h2>Strategic roofing contractor in panvel Excellence</h2>
                            <p>
                                <strong>Roofing contractor in panvel</strong> services face unique challenges like high wind speeds. As dedicated providers from a <strong>roofing contractor in panvel</strong> perspective, we utilize specialized fasteners.
                            </p>
                            <p>
                                Our reputation for quality <strong>roofing contractor in panvel</strong> is built on structural speed. When you collaborate with a <strong>roofing contractor in panvel</strong>, you benefit from designs tested for extreme rainfall.
                            </p>
                            <p>
                                We are the leaders in providing installations as a <strong>roofing contractor in panvel</strong> without sacrificing quality. Choose our expert <strong>roofing contractor in panvel</strong> services for your next unit.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={panvelImg1} alt="roofing contractor in panvel warehouse construction" loading="lazy" />
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
                            <img src={panvelImg2} alt="roofing contractor in panvel insulation" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Energy efficiency from roofing contractor in panvel</h2>
                            <p>
                                Temperature regulation is essential. We deliver energy-efficient panels from a <strong>roofing contractor in panvel</strong> that reduce operational costs. When consulting with a <strong>roofing contractor in panvel</strong>, we focus on insulation quality.
                            </p>
                            <p>
                                As a versatile <strong>roofing contractor in panvel</strong> partner, we handle custom specifications for safer long-term use.
                            </p>
                            <p>
                                Trust our professional <strong>roofing contractor in panvel</strong> site audits. We offer modular solutions that prioritize durability as a reliable <strong>roofing contractor in panvel</strong>.
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
                            <h2>Reliable roofing contractor in panvel</h2>
                            <p>
                                From design to completion, we excel as a <strong>roofing contractor in panvel</strong> specialist. Choosing an expert <strong>roofing contractor in panvel</strong> ensures project speed and integrity.
                            </p>
                            <p>
                                Whether you need a workshop or a plant, as a <strong>roofing contractor in panvel</strong> partner, we prioritize longevity.
                            </p>
                            <p>
                                Contact us for premium <strong>roofing contractor in panvel</strong> services. We are your partner for structural excellence in <strong>roofing contractor in panvel</strong>.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={panvelImg3} alt="roofing contractor in panvel fabrication" loading="lazy" />
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
                            <img src={panvelImg4} alt="roofing contractor in panvel logistics" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Logistics solutions by roofing contractor in panvel</h2>
                            <p>
                                Temperature-controlled logistics require <strong>roofing contractor in panvel</strong> expertise. Our systems provide maximum protection as a <strong>roofing contractor in panvel</strong> specialist.
                            </p>
                            <p>
                                We offer structural fabrication using insulated panels as a <strong>roofing contractor in panvel</strong>. Experience the most reliable results with a top <strong>roofing contractor in panvel</strong>.
                            </p>
                            <p>
                                Logistics hubs depend on a specialized <strong>roofing contractor in panvel</strong>. As a provider from a <strong>roofing contractor in panvel</strong> background, we deliver safety. Choose our expert <strong>roofing contractor in panvel</strong> services today.
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
                            <h2>Maintenance by roofing contractor in panvel</h2>
                            <p>
                                Zinco provides specialized services as a <strong>roofing contractor in panvel</strong>. Protecting property is vital as a <strong>roofing contractor in panvel</strong> specialist for maintaining value.
                            </p>
                            <p>
                                We offer protective finishes as a <strong>roofing contractor in panvel</strong>, preventing corrosion. Rely on us for <strong>roofing contractor in panvel</strong> maintenance solutions that are long-lasting.
                            </p>
                            <p>
                                Get a professional quote today and protect your investment with a leading <strong>roofing contractor in panvel</strong>.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={panvelImg5} alt="roofing contractor in panvel facility maintenance" loading="lazy" />
                        </div>
                    </motion.section>

                    {/* Technical Specification Section */}
                    <section className={`${styles.technicalSection} ${styles.darkMode}`}>
                        <h2>Technical Standards for roofing contractor in panvel</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.techTable}>
                                <thead>
                                    <tr>
                                        <th>Metric Category</th>
                                        <th>Standard Panels</th>
                                        <th>Heavy Duty</th>
                                        <th>Logistics Benefit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Application</td>
                                        <td>High-Span Units</td>
                                        <td>Warehouses / Sheds</td>
                                        <td>Efficient Design</td>
                                    </tr>
                                    <tr>
                                        <td>Span Capacity</td>
                                        <td>30 Meters Clear</td>
                                        <td>High Tensile Steel</td>
                                        <td>Optimized Space</td>
                                    </tr>
                                    <tr>
                                        <td>Fire Rating</td>
                                        <td>A2-Class Rated</td>
                                        <td>Industrial Grade</td>
                                        <td>Safety Compliance</td>
                                    </tr>
                                    <tr>
                                        <td>Installation Rate</td>
                                        <td>1000sqm / Week</td>
                                        <td>Fastest in Region</td>
                                        <td>Rapid Infrastructure</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Maintenance Section */}
                    <section className={styles.maintenanceSection}>
                        <div className={styles.infoCard}>
                            <h3>Advice from a roofing contractor in panvel</h3>
                            <p>
                                As a proactive <strong>roofing contractor in panvel</strong>, we recommend regular site audits to prevent water damage to your industrial assets.
                            </p>
                            <div className={styles.maintenanceGrid}>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Gutter Audits</strong>: Essential for high rain volume.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Fastener Checks</strong>: Handled by professional teams.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Structural Integrity</strong>: Ensured by the best experts.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className={styles.faqSection}>
                        <h2>FAQs for roofing contractor in panvel</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>Why choose Zinco as your roofing contractor in panvel?</h3>
                                <p>Our specialization in high-span warehousing and industrial sheds makes us the preferred regional partner.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Does a roofing contractor in panvel handle logistics parks?</h3>
                                <p>Yes, we are the trusted experts for massive warehousing projects in the area.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Can a roofing contractor in panvel assist with retrofitting?</h3>
                                <p>Absolutely. As experts specialists, we handle structural replacement for old sheds.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Benefit of a premium roofing contractor in panvel?</h3>
                                <p>Hiring authorized contractors like Zinco ensures structural safety and insurance.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Panvel" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Best roofing contractor in panvel</h2>
                            <p>Secure your logistics asset with expert <strong>roofing contractor in panvel</strong> engineering. Our team is ready for your site audit.</p>
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

export default PanvelRoofing;
