import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCity, FaShieldAlt, FaTools, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import LocationMap from '../../components/shared/LocationMap';
import heroImage from '../../assets/img4.webp';
import thaneImg1 from '../../assets/Metal roofing images/Metal roofing images/1000014044.webp';
import thaneImg2 from '../../assets/Puf panel images/Puf panel images/1000014626.webp';
import thaneImg3 from '../../assets/projects/L&T construction.webp';
import thaneImg4 from '../../assets/Upvc images/Upvc images/1000014234.webp';
import styles from './LocationStyles.module.css';
import LocationServiceCards from '../../components/shared/LocationServiceCards';
import AreaLinks from '../../components/shared/AreaLinks';

const ThaneRoofing = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Industrial Roofing Contractor in Navi Mumbai | Thane Specialist"
                description="Top industrial roofing contractor in navi mumbai experts serving Thane and Wagle Estate. Specializing in factory sheds, commercial roofing, and premium structural painting."
                keywords="industrial roofing contractor in navi mumbai, roofing contractor in thane, industrial roofing thane, thane midc roofing"
                canonicalUrl="https://www.zincoroof.com/roofing-contractor-in-thane"
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
                        <h1>industrial roofing contractor in navi mumbai</h1>
                        <p>Providing specialized structural and roofing engineering as a premier <strong>industrial specialist</strong> for diverse hubs across the region.</p>
                            <Link to="/products" className={styles.heroBtn}>View Our Products</Link>
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
                            Specialized structural support for Thane Industrial Belt
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Thane's industrial belt is evolving, and as the top <strong>industrial roofing contractor in navi mumbai</strong>, Zinco Roofing Solution provides the structural foundation. A reliable <strong>structural engineer</strong> understands local climate challenges. Choosing an experienced <strong>roofing partner</strong> is vital for long-term safety.
                        </motion.p>
                        <p>
                            Thane's industrial zones, including Wagle Estate and the Kolshet corridor, are witnessing a shift towards modern, energy-efficient infrastructure. As a dedicated <strong>industrial roofing contractor in navi mumbai</strong>, Zinco Roofing Solution brings high-standard engineering to these local projects. Our structures are built to withstand the unique architectural demands of a rapidly urbanizing industrial hub.
                        </p>
                        <p>
                            Corporate facility heads look for a <strong>structural specialist</strong> who delivers integrity. By hiring an established <strong>industrial expert</strong>, you investment in safety. As a leading <strong>engineering team</strong>, we prioritize performance. Our process involves rigorous site assessment and material testing to ensure that every roof survives the heavy monsoons typical of the Konkan belt.
                        </p>
                        <p>
                            When searching for excellence, every <strong>building expert</strong> knows that commitment is the cornerstone of success. We are dedicated as the best <strong>contracting partner</strong>. Reach out to a professional <strong>technical team</strong> today for a technical audit. We provide detailed reports that cover structural health, thermal efficiency, and potential for solar integration.
                        </p>
                    </motion.section>

                    <LocationServiceCards location="Thane" />

                    {/* Detailed Content Sections */}
                    <motion.section 
                        className={styles.twoColumn}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.textContent}>
                            <h2>Strategic Industrial Excellence</h2>
                            <p>
                                Infrastructure requires a <strong>technical partner</strong> with specialized knowledge of Galvalume. Hiring a <strong>factory contractor</strong> ensures precision and building health.
                            </p>
                            <p>
                                Our reputation as a <strong>structural specialist</strong> is built on attention to detail. When you collaborate with a <strong>proven team</strong> like Zinco, you benefit from safety.
                            </p>
                            <p>
                                We are the leaders as a <strong>fabrication provider</strong> providing fast installations. Choose our expert <strong>commercial roofing</strong> services for your next factory unit. Get a quote from a top <strong>industrial vendor</strong>.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={thaneImg1} alt="roofing contractor in thane industrial building" loading="lazy" />
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
                            <img src={thaneImg2} alt="roofing contractor in thane hub" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Reliable Industrial Service Hub</h2>
                            <p>
                                Commercial projects demand a <strong>technical consultant</strong> with engineering excellence. We offer profiles that balance style as a <strong>structural partner</strong>.
                            </p>
                            <p>
                                Commercial infrastructure requires specialized <strong>building engineering</strong>. Our <strong>fabrication</strong> projects prioritize structural safety.
                            </p>
                            <p>
                                We are the leading <strong>roofing specialists</strong>, delivering results that are aesthetically sound for any business.
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
                            <h2>Energy efficiency from a Technical Partner</h2>
                            <p>
                                Temperature regulation is essential. We deliver panels as a <strong>structural specialist</strong> that reduce operational costs. When consulting with a <strong>cladding expert</strong>, we focus on thermal stability.
                            </p>
                            <p>
                                Our insulation as a <strong>facade partner</strong> meets the highest safety standards. As a versatile <strong>service provider</strong>, we handle custom specifications.
                            </p>
                            <p>
                                Trust our professional <strong>engineering</strong> site audits for the best strategy for your industrial facility.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={thaneImg3} alt="roofing contractor in thane puf panel" loading="lazy" />
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
                            <img src={thaneImg4} alt="roofing contractor in thane shed construction" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Factory solutions by Zinco Engineering</h2>
                            <p>
                                We excel as a <strong>fabrication specialist</strong> for industrial shed fabrication. Choosing a <strong>structural partner</strong> ensuring project speed and structural integrity.
                            </p>
                            <p>
                                Whether you need a workshop or a logistics park, as a <strong>technical</strong> partner, we provide tailored designs.
                            </p>
                            <p>
                                Contact us for premium <strong>industrial construction</strong> services. We are your partner for excellence in <strong>shed fabrication</strong>.
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
                            <h2>Protective coating by coating specialists</h2>
                            <p>
                                Zinco provides specialized services as a <strong>surface provider</strong>. Protecting property is vital as a <strong>maintenance</strong> specialist.
                            </p>
                            <p>
                                Rely on us for <strong>structural</strong> maintenance solutions that are long-lasting. Our reputation as a <strong>technical group</strong> comes from thorough preparation.
                            </p>
                            <p>
                                Get a professional quote today from a leading <strong>industrial vendor</strong> and protect your assets from corrosion.
                            </p>
                        </div>
                    </motion.section>

                    {/* Technical Specification Section */}
                    <section className={`${styles.technicalSection} ${styles.darkMode}`}>
                        <h2>Technical Standards for Industrial sheds</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.techTable}>
                                <thead>
                                    <tr>
                                        <th>Metric Category</th>
                                        <th>Zinco Specification</th>
                                        <th>Industrial Benefit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Product Range</td>
                                        <td>Premium Grade Sheets</td>
                                        <td>Local Supply & Support</td>
                                    </tr>
                                    <tr>
                                        <td>Wind Speed Load</td>
                                        <td>Up to 150 km/h Rated</td>
                                        <td>Maximum Structural Safety</td>
                                    </tr>
                                    <tr>
                                        <td>Thermal R-Value</td>
                                        <td>High Performance</td>
                                        <td>Superior Energy Savings</td>
                                    </tr>
                                    <tr>
                                        <td>Safety Compliance</td>
                                        <td>Full Industrial Standards</td>
                                        <td>Zero-Harm Work Protocols</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Maintenance Section */}
                    <section className={styles.maintenanceSection}>
                        <div className={styles.infoCard}>
                             <h3>Advice from an Industrial Specialist</h3>
                            <p>
                                To maintain assets, we offer audit programs as a <strong>structural partner</strong> to catch issues early and prevent leaks.
                            </p>
                            <div className={styles.maintenanceGrid}>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Waterproofing Audits</strong>: Essential for surface longevity.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Sealant Checks</strong>: Key for stable industrial settings.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Structure Painting</strong>: Best for anti-corrosive protection.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                     <section className={styles.faqSection}>
                        <h2>Common Industry FAQs</h2>
                        <div className={styles.faqGrid}>
                             <div className={styles.faqItem}>
                                <h3>Why choose Zinco for Thane project?</h3>
                                <p>Our specialized materials and reliable engineering teams deliver unmatched ROI for every client.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Do you handle old factory sheds?</h3>
                                <p>Yes, we specialize in replacing old roofing components and structural restoration of factory projects.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Can you handle PEB sheds?</h3>
                                <p>Absolutely. We provide full Pre-Engineered Building design and execution across the city.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Benefit of a top Industrial Vendor?</h3>
                                <p>Investing in authorized materials ensures safety and longevity for your industrial projects.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Thane" />

                    {/* Final CTA */}
                     <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Best Industrial Experts</h2>
                            <p>Protect your asset with expert <strong>structural</strong> technical support. Our team is ready for your estimate.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact#contact-form" className={styles.primaryBtn}>Request a Technical Audit</Link>
                                <button className={styles.secondaryBtn}>View Case Studies</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <LocationMap title="Thane" query="Thane, Maharashtra" />
        </div>
    );
};

export default ThaneRoofing;
