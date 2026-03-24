import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaIndustry, FaShieldAlt, FaTools, FaCheckCircle, FaFlask } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import LocationMap from '../../components/shared/LocationMap';
import heroImage from '../../assets/locations/taloja_hero.webp';
import talojaImg1 from '../../assets/Metal roofing images/Metal roofing images/1000014152.webp';
import talojaImg2 from '../../assets/Puf panel images/Puf panel images/1001155530.webp';
import talojaImg3 from '../../assets/projects/amar studio.webp';
import talojaImg4 from '../../assets/Upvc images/Upvc images/1000014255.webp';
import styles from './LocationStyles.module.css';
import LocationServiceCards from '../../components/shared/LocationServiceCards';
import AreaLinks from '../../components/shared/AreaLinks';

const TalojaRoofing = () => {
    const mobileHighlights = [
        {
            title: "Heavy Industry Focus",
            desc: "Expert structural fabrication for massive logistics parks.",
            icon: <FaIndustry />
        },
        {
            title: "Corrosion Control",
            desc: "Acid and chemical resistant panels for Taloja MIDC.",
            icon: <FaFlask />
        },
        {
            title: "Rapid Execution",
            desc: "High-speed engineering ensuring minimal downtime.",
            icon: <FaTools />
        }
    ];

    return (
        <div className={styles.locationPage}>
            <SEO
                title="Industrial Roofing Specialist in Taloja | Structural Engineering"
                description="Expert structural engineering and industrial roofing service in Taloja. Specializing in high-span factory sheds, PUF panels, and chemical-resistant roofing."
                keywords="industrial roofing specialist taloja, taloja midc vendors, factory shed contractors"
                canonicalUrl="https://www.zincoroof.com/roofing-contractor-in-taloja"
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
                        <h1>Reliable roofing contractor in taloja</h1>
                        <p>Delivering high-performance structural systems as the premier <strong>roofing contractor in taloja</strong> for core manufacturing hubs.</p>
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
                            Complete roofing contractor in taloja engineering
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Taloja MIDC is the logistical heart of the MMR. As a premier <strong>roofing contractor in taloja</strong>, Zinco Roofing Solution provides the technical foundation for the city's growth. Our engineering structures as a <strong>structural specialist</strong> are designed for high-wind resistance.
                        </motion.p>
                        <p>
                            Every plant manager knows that industrial owners look for reliable partners. By hiring an expert <strong>industrial vendor</strong>, you invest in high-tensile steel and advanced finishes that only a <strong>structural group</strong> can deliver.
                        </p>
                        <p>
                            When searching for a <strong>roofing contractor in taloja</strong>, durability is the cornerstone. We provide superior results as your local <strong>structural partner</strong>. Our team offers expert consulting as a top-tier structural partner and professional <strong>engineering team</strong>.
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
                                Engineering large-span sheds requires <strong>specialized expertise</strong>. As a dedicated <strong>Taloja Vendor</strong>, we utilize high-tensile Galvalume.
                            </p>
                            <p>
                                When you collaborate with a professional <strong>roofing contractor in taloja</strong> like Zinco, you benefit from designs tested for extreme weather. Every structural project managed by a <strong>PEB Specialist</strong> is engineered for maximum ROI.
                            </p>
                            <p>
                                We are the leading choice for massive logistics platforms. Choose our expert <strong>Industrial engineering</strong> services today.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={talojaImg1} alt="Industrial roofing project in Taloja MIDC" loading="lazy" />
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
                            <img src={talojaImg2} alt="Warehouse shed construction in Taloja Navi Mumbai" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Energy Savings per PUF Panels</h2>
                            <p>
                                Temperature regulation is essential. We deliver panels as an <strong>Industrial Consultant</strong> that reduce costs. when consulting with a <strong>Technical Team</strong>, we focus on thermal quality.
                            </p>
                            <p>
                                As a versatile <strong>Structural Partner</strong>, we handle custom specifications for fire-rated construction in manufacturing units.
                            </p>
                            <p>
                                Trust our professional site audits. We offer solutions that prioritize energy savings as a reliable <strong>roofing contractor in taloja</strong>.
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
                                We excel at structural fabrication as a <strong>structural vendor</strong>. choosing an expert engineering team ensures project speed and diligence.
                            </p>
                            <p>
                                Whether you need a workshop or a park, as a dedicated <strong>Industrial Partner</strong>, we prioritize structural longevity.
                            </p>
                            <p>
                                Contact us for premium industrial services. We are your partner as a safety-first <strong>roofing contractor in taloja</strong>.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={talojaImg3} alt="Metal roofing sheet installation at Taloja factory" loading="lazy" />
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
                            <img src={talojaImg4} alt="Industrial waterproofing and roof repair in Taloja" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Maintenance by Professional Teams</h2>
                            <p>
                                Zinco provides specialized coating services as an <strong>Industrial Expert</strong>. Professional rust prevention is vital for maintaining integrity in chemical zones.
                            </p>
                            <p>
                                We offer protective finishes for all industrial plants as a <strong>structural analyst</strong>. Rely on our designated maintenance solutions.
                            </p>
                            <p>
                                Our team ensures that your facility remains in top condition. Get a quote from a leading <strong>roofing contractor in taloja</strong> today.
                            </p>
                        </div>
                    </motion.section>

                    {/* Technical Specification Table */}
                    <section className={`${styles.technicalSection} ${styles.darkMode} ${styles.desktopOnly}`}>
                        <h2>Technical Shed Fabrication Standards</h2>
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
                                        <td>Industrial Manufacturing</td>
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
                            <h3>Advice from a Structural Expert</h3>
                            <p>
                                To maintain your asset, as an established <strong>Industrial Specialist</strong>, we provide annual maintenance contracts.
                            </p>
                            <div className={styles.maintenanceGrid}>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Gutter Audits</strong>: Essential for handling large monsoon volumes.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Sealant Inspections</strong>: Provided by our dedicated diligence team.</span>
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
                        <h2>Common Setup Queries</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>Why choose Zinco for Taloja projects?</h3>
                                <p>Our specialized teams and reliable execution deliver unmatched ROI for your project.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Do you serve Rabale as well?</h3>
                                <p>Yes, we specialize in Industrial solutions for businesses across Taloja and Rabale.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Do you assist with PEB design?</h3>
                                <p>Absolutely. We handle Pre-Engineered Building (PEB) design, procurement, and execution as an expert <strong>industrial vendor</strong>.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Taloja MIDC" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Best roofing contractor in taloja</h2>
                            <p>Protect your investment with top-tier <strong>roofing contractor in taloja</strong> engineering services. Our team is ready for your estimate.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact#contact-form" className={styles.primaryBtn}>Request a Technical Audit</Link>
                                <button className={styles.secondaryBtn}>View Case Studies</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <LocationMap title="Taloja" query="Taloja MIDC, Navi Mumbai" />
        </div>
    );
};

export default TalojaRoofing;
