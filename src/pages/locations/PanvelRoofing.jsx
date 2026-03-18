import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaWarehouse, FaShieldAlt, FaTools, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import LocationMap from '../../components/shared/LocationMap';
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
    const mobileHighlights = [
        {
            title: "Logistics Specialist",
            desc: "Expert structural solutions for Panvel's massive warehousing hubs.",
            icon: <FaWarehouse />
        },
        {
            title: "Industrial Panels",
            desc: "High-span metal roofing and PUF panels for logistics parks.",
            icon: <FaShieldAlt />
        },
        {
            title: "Expert Assembly",
            desc: "Rapid on-site installation with precision engineering and safety.",
            icon: <FaTools />
        }
    ];

    return (
        <div className={styles.locationPage}>
            <SEO
                title="Industrial Roofing Specialist in Panvel | Logistics Infrastructure"
                description="Expert structural fabrication and industrial roofing service in Panvel. Specializing in high-span warehouse roofing, factory sheds, and PUF panels."
                keywords="industrial roofing specialist panvel, logistics infrastructure mumbai, roofing sheets panvel, factory shed contractors"
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
                        <h1>Industrial Roofing Specialist in Panvel</h1>
                        <p>Providing specialized structural solutions and high-performance metal panels as the premier <strong>Industrial Roofing Specialist in Panvel</strong> for massive projects.</p>
                        <div className={styles.heroButtons}>
                            <Link to="/products" className={styles.heroBtn}>Explore Our Products</Link>
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
                            Professional Structural Engineering in Panvel
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Panvel requires a specialized <strong>Industrial Roofing Specialist in Panvel</strong> for its massive warehousing and industrial hubs. As a reliable engineering team, Zinco Roofing Solution understands high-span structures.
                        </motion.p>
                        <p>
                            Logistics facility managers look for reliable partners. By hiring an established <strong>Industrial Roofing Specialist in Panvel</strong>, you invest in quality. As a dedicated provider, we deliver engineering excellence across the city.
                        </p>
                        <p>
                            When searching for quality, every expert knows that strength is the cornerstone. We are dedicated to providing superior results as the top <strong>Industrial Roofing Specialist in Panvel</strong>. Reach out for site audits today.
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
                            <h2>Strategic Industrial Roofing Specialist in Panvel</h2>
                            <p>
                                <strong>Industrial Roofing Specialist in Panvel</strong> services face unique challenges like high wind speeds. As dedicated providers, we utilize specialized fasteners for better stability.
                            </p>
                            <p>
                                Our reputation for quality is built on structural speed. When you collaborate with <strong>our team</strong>, you benefit from designs tested for extreme rainfall.
                            </p>
                            <p>
                                We are the leaders in providing installations without sacrificing quality. Choose our expert <strong>Industrial Roofing Specialist in Panvel</strong> for your next unit.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={panvelImg1} alt="Industrial Warehouse Construction Panvel" loading="lazy" />
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
                            <img src={panvelImg2} alt="Thermal Insulation Solutions" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Energy efficiency from an Industrial Roofing Specialist in Panvel</h2>
                            <p>
                                Temperature regulation is essential. We deliver energy-efficient panels that reduce operational costs. When consulting with an <strong>Industrial Roofing Specialist in Panvel</strong>, we focus on insulation quality.
                            </p>
                            <p>
                                As a versatile structural partner, we handle custom specifications for safer long-term use.
                            </p>
                            <p>
                                Trust our professional site audits. We offer modular solutions that prioritize durability as a reliable <strong>Industrial Roofing Specialist in Panvel</strong>.
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
                            <h2>Reliable Shed Engineering</h2>
                            <p>
                                From design to completion, we excel as a <strong>Structural Specialist</strong>. Choosing an <strong>Industrial Roofing Specialist in Panvel</strong> ensures project speed and integrity.
                            </p>
                            <p>
                                Whether you need a workshop or a plant, as a <strong>dedicated partner</strong>, we prioritize longevity in all our developments.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={panvelImg3} alt="Industrial Shed Fabrication" loading="lazy" />
                        </div>
                    </motion.section>

                    {/* Technical Specification Section */}
                    <section className={`${styles.technicalSection} ${styles.darkMode} ${styles.desktopOnly}`}>
                        <h2>Technical Standards for Logistics Mastery</h2>
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
                            <h3>Advice from an Industrial Roofing Specialist in Panvel</h3>
                            <p>
                                As a proactive <strong>Industrial Roofing Specialist in Panvel</strong>, we recommend regular site audits to prevent water damage to your industrial assets.
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
                        <h2>FAQs for an Industrial Roofing Specialist in Panvel</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>Why choose Zinco for Panvel projects?</h3>
                                <p>Our specialization in high-span warehousing and industrial sheds makes us the preferred regional partner.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Do you handle logistics parks?</h3>
                                <p>Yes, we are the trusted experts for massive warehousing projects in the Panvel area.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Can you assist with retrofitting?</h3>
                                <p>Absolutely. As experts specialists, we handle structural replacement and modernization for old sheds.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Panvel" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Best Industrial Roofing Specialist in Panvel</h2>
                            <p>Secure your logistics asset with expert engineering. Our team is ready for your site audit.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact#contact-form" className={styles.primaryBtn}>Request a Technical Audit</Link>
                                <button className={styles.secondaryBtn}>View Our Projects</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <LocationMap title="Panvel" query="Panvel, Navi Mumbai" />
        </div>
    );
};

export default PanvelRoofing;
