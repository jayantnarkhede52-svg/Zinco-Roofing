import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCity, FaShieldAlt, FaTools, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import LocationMap from '../../components/shared/LocationMap';
import heroImage from '../../assets/locations/dombivli_hero.webp';
import domImg1 from '../../assets/Metal roofing images/Metal roofing images/1000014465.webp';
import domImg2 from '../../assets/Puf panel images/Puf panel images/1000014168.webp';
import domImg3 from '../../assets/projects/Regency.webp';
import domImg4 from '../../assets/Upvc images/Upvc images/1000014394.webp';
import styles from './LocationStyles.module.css';
import LocationServiceCards from '../../components/shared/LocationServiceCards';
import AreaLinks from '../../components/shared/AreaLinks';

const DombivliRoofing = () => {
    const mobileHighlights = [
        {
            title: "MIDC Specialist",
            desc: "Expert structural engineering for Dombivli's vast industrial zones.",
            icon: <FaCity />
        },
        {
            title: "Rapid Assembly",
            desc: "High-speed installation for factory sheds and warehouses.",
            icon: <FaTools />
        },
        {
            title: "Extreme Durability",
            desc: "Corrosion-resistant metal panels for chemical industrial belts.",
            icon: <FaShieldAlt />
        }
    ];

    return (
        <div className={styles.locationPage}>
            <SEO
                title="Industrial Roofing Specialist in Dombivli | MIDC Partner"
                description="Expert structural fabrication and industrial roofing service in Dombivli. Specializing in high-span factory sheds, PUF panels, and chemical-resistant roofing."
                keywords="industrial roofing specialist dombivli, dombivli midc roofing, factory shed contractors"
                canonicalUrl="https://www.zincoroof.com/roofing-contractor-in-dombivli"
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
                        <h1>Reliable roofing contractor in dombivli</h1>
                        <p>Providing specialized structural solutions and high-performance metal panels as the leading <strong>roofing contractor in dombivli</strong> for regional infrastructure.</p>
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
                            Specialized roofing contractor in dombivli
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Dombivli MIDC is one of Asia's largest industrial estates. As a premier <strong>industrial specialist</strong>, Zinco Roofing Solution understands technical requirements for heavy-duty construction.
                        </motion.p>
                        <p>
                            Corporate plant managers look for a reliable <strong>Structural Partner</strong>. By hiring an established <strong>engineering team</strong>, you invest in high-micron materials. As a leading vendor, we ensure every project meets modern safety standards.
                        </p>
                        <p>
                            When searching for a quality <strong>building skin</strong>, durability is the cornerstone. We are dedicated to providing superior results as your <strong>Industrial Specialist</strong>. Reach out to our team today for a site audit.
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
                            <h2>Resilient Structural Services</h2>
                            <p>
                                Working in chemical zones requires <strong>specialized expertise</strong>. As a dedicated <strong>Partner</strong>, we utilize Galvalume sheets. Every infrastructure project knows the importance of precision.
                            </p>
                            <p>
                                Our reputation for quality is built on attention to detail. When you collaborate with a professional <strong>expert firm</strong>, you benefit from customized designs.
                            </p>
                            <p>
                                We are the leaders in providing installations as a <strong>structural specialist</strong> for factory sheds. Choose our expert services for your next unit.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={domImg1} alt="roofing contractor in dombivli" loading="lazy" />
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
                            <img src={domImg2} alt="roofing contractor in dombivli thermal" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Energy Efficiency with PUF Panels</h2>
                            <p>
                                Temperature regulation is essential. As a trusted <strong>Building Partner</strong>, we deliver energy-efficient panels. When consulting with our specialists, we focus on thermal performance.
                            </p>
                            <p>
                                As a versatile <strong>Partner</strong>, we handle custom specifications for safe construction as a top-tier <strong>structural expert</strong>.
                            </p>
                            <p>
                                Trust our professional site audits. We offer modular solutions as a reliable <strong>MIDC specialist</strong>.
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
                            <h2>Industrial Shed Fabrication</h2>
                            <p>
                                From design to completion, we excel as a <strong>roofing contractor in dombivli</strong> specialist. Choosing an expert team ensures project speed and integrity.
                            </p>
                            <p>
                                Whether you need a workshop or plant, as a dedicated <strong>Partner</strong>, we prioritize longevity in all our developments.
                            </p>
                            <p>
                                Contact us for premium structural services. We are your partner for excellence as a top-tier <strong>industrial expert</strong>.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={domImg3} alt="roofing contractor in dombivli fabrication" loading="lazy" />
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
                            <img src={domImg4} alt="roofing contractor in dombivli coating" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Protective Engineering Coatings</h2>
                            <p>
                                Zinco provides specialized coating services for industrial assets. Protecting assets from corrosion is vital for any <strong>roofing contractor in dombivli</strong>.
                            </p>
                            <p>
                                We offer finishes that prevent rust, ensuring your facility remains in top condition. Rely on our <strong>roofing contractor in dombivli</strong> team for maintenance.
                            </p>
                            <p>
                                Our team ensures your facility remains durable. Get a quote today from a leading <strong>roofing contractor in dombivli</strong>.
                            </p>
                        </div>
                    </motion.section>

                    {/* Technical Specification Section */}
                    <section className={`${styles.technicalSection} ${styles.darkMode} ${styles.desktopOnly}`}>
                        <h2>Technical Standards for Industrial Excellence</h2>
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
                            <h3>Advice from a Technical Expert</h3>
                            <p>
                                As a proactive <strong>roofing contractor in dombivli</strong>, we recommend regular site audits for your industrial assets.
                            </p>
                            <div className={styles.maintenanceGrid}>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Drainage Audits</strong>: Essential for high rainfall regions.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Sealant Checks</strong>: Handled by professional teams.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Rust Inspections</strong>: Vital for structures in MIDC clusters.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className={styles.faqSection}>
                        <h2>Common Technical Queries</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>Why choose Zinco as your roofing contractor in dombivli?</h3>
                                <p>Our specialization in chemical-resistant building solutions makes us the leading specialist.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Do you handle PEB structures?</h3>
                                <p>Yes, we are the trusted experts for Pre-Engineered Building design and fabrication as a premier <strong>roofing contractor in dombivli</strong>.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Dombivli" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Best Industrial Experts</h2>
                            <p>Protect your investment with expert <strong>roofing contractor in dombivli</strong> engineering. Our team is ready for your site audit.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact#contact-form" className={styles.primaryBtn}>Request a Technical Audit</Link>
                                <button className={styles.secondaryBtn}>View Our Projects</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <LocationMap title="Dombivli" query="Dombivli, Maharashtra" />
        </div>
    );
};


export default DombivliRoofing;
