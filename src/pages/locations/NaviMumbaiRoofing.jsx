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
                title="Industrial Roofing Contractors in Navi Mumbai | MIDC Specialist"
                description="The most trusted Industrial Roofing Contractors in Navi Mumbai. Expert factory shed fabrication, PUF panels, and metal roofing for Taloja & Rabale MIDC."
                keywords="industrial roofing contractors navi mumbai, navi mumbai midc roofing, puf panel manufacturer navi mumbai, factory shed navi mumbai, industrial painting navi mumbai"
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
                        <h1>Industrial Roofing Contractors in Navi Mumbai</h1>
                        <p>Delivering high-performance structural solutions for the core industrial hubs of Navi Mumbai.</p>
                        <div className={styles.heroButtons}>
                            <Link to="/products" className={styles.heroBtn}>View Our Products</Link>
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
                            Navi Mumbai’s Leading Industrial Roofing Contractors
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Navi Mumbai has transformed into a global industrial and logistics hub. As premier <strong>Industrial Roofing Contractors in Navi Mumbai</strong>, Zinco Roofing Solution provides the technical foundation for this transformation. The vast MIDC industrial belts from Rabale to Mahape require specialized roofing systems that can withstand both heavy pollution and the humid coastal climate. This is where the expertise of <strong>Industrial Roofing Contractors in Navi Mumbai</strong> becomes invaluable.
                        </motion.p>
                        <p>
                            Industrial experts recognize that a factory shed is a long-term investment. By choosing seasoned <strong>Industrial Roofing Contractors in Navi Mumbai</strong>, you are ensuring that your infrastructure is designed for maximum efficiency and minimum maintenance. We are the <strong>Industrial Roofing Contractors in Navi Mumbai</strong> that prioritize safety, speed, and structural integrity in every project we undertake.
                        </p>
                    </section>

                    <LocationServiceCards location="Navi Mumbai" />

                    {/* Detailed Content Sections */}
                    <section className={styles.twoColumn}>
                        <div className={styles.textContent}>
                            <h2>Structural Metal Roofing: Expertise from Industrial Roofing Contractors in Navi Mumbai</h2>
                            <p>
                                Engineering large-span industrial sheds in Navi Mumbai requires precision. As dedicated <strong>Industrial Roofing Contractors in Navi Mumbai</strong>, we utilize high-tensile steel with multi-layer protective coatings. Whether it's a new logistics park in Juinagar or a manufacturing unit in Mahape, hiring professional <strong>Industrial Roofing Contractors in Navi Mumbai</strong> ensures your project meets all industrial safety standards.
                            </p>
                            <p>
                                Our reputation as top <strong>Industrial Roofing Contractors in Navi Mumbai</strong> is built on our ability to design roofs that optimize natural light and ventilation. When you collaborate with <strong>Industrial Roofing Contractors in Navi Mumbai</strong> like Zinco, you benefit from:
                            </p>
                            <ul>
                                <li><strong>Optimized Span Design</strong>: Reducing the number of internal columns.</li>
                                <li><strong>Advanced Leak Prevention</strong>: Crucial for Navi Mumbai's heavy rainy season.</li>
                                <li><strong>Rapid Installation</strong>: A hallmark of experienced <strong>Industrial Roofing Contractors in Navi Mumbai</strong>.</li>
                            </ul>
                            <p>
                                For units in the Trans-Thane Creek (TTC) industrial area, we are the <strong>Industrial Roofing Contractors in Navi Mumbai</strong> that provide the most durable roofing solutions.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={nmImg1} alt="Metal Roofing by Industrial Roofing Contractors in Navi Mumbai" />
                        </div>
                    </section>

                    <section className={styles.twoColumn}>
                        <div className={styles.imageBlock}>
                            <img src={nmImg2} alt="PUF Panels by Industrial Roofing Contractors in Navi Mumbai" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Insulated PUF Panels: Solutions from Industrial Roofing Contractors in Navi Mumbai</h2>
                            <p>
                                Temperature-sensitive industries in Navi Mumbai, such as pharmaceuticals and cold storage, rely on high-performance insulation. As specialized <strong>Industrial Roofing Contractors in Navi Mumbai</strong>, we offer high-density PUF panels that significantly reduce energy costs. These panels are the core of modern, climate-controlled environments, and we are the <strong>Industrial Roofing Contractors in Navi Mumbai</strong> that ensure their flawless integration.
                            </p>
                            <p>
                                When plant managers look for reliable <strong>Industrial Roofing Contractors in Navi Mumbai</strong>, they focus on thermal R-values and fire safety. Our status as premier <strong>Industrial Roofing Contractors in Navi Mumbai</strong> means we only use international-grade, fire-rated insulation materials.
                            </p>
                            <ul>
                                <li><strong>Thermal Stability</strong>: Crucial for maintaining product integrity in Navi Mumbai factories.</li>
                                <li><strong>Hygienic Surface</strong>: Recommended by <strong>Industrial Roofing Contractors in Navi Mumbai</strong> for food processing units.</li>
                                <li><strong>Superior Strength</strong>: Providing long-lasting durability for your industrial facility.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.twoColumn}>
                        <div className={styles.textContent}>
                            <h2>Protective Coating Systems: A Pillar of Industrial Roofing Contractors in Navi Mumbai</h2>
                            <p>
                                The industrial environment of Navi Mumbai is notoriously aggressive. At Zinco, we are <strong>Industrial Roofing Contractors in Navi Mumbai</strong> that focus on total asset protection. Our structural painting services utilize specialized epoxy and polyurethane coatings to shield your trusses and purlins. Every expert knows that as <strong>Industrial Roofing Contractors in Navi Mumbai</strong>, we must prevent corrosion before it starts.
                            </p>
                            <p>
                                We are the <strong>Industrial Roofing Contractors in Navi Mumbai</strong> that technical consultants recommend for structural audits and restoration. Our coatings are designed to withstand the saline air and chemical fumes typical of Navi Mumbai's MIDC zones.
                            </p>
                            <ul>
                                <li><strong>Acid Resistance</strong>: Ideal for the chemical clusters in Navi Mumbai.</li>
                                <li><strong>Asset Life Extension</strong>: A core goal for any <strong>Industrial Roofing Contractors in Navi Mumbai</strong>.</li>
                                <li><strong>Corrosion Audits</strong>: Specialized services provided by expert <strong>Industrial Roofing Contractors in Navi Mumbai</strong>.</li>
                            </ul>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={nmImg3} alt="Structural Protection by Industrial Roofing Contractors in Navi Mumbai" loading="lazy" />
                        </div>
                    </section>

                    <section className={styles.twoColumn}>
                        <div className={styles.imageBlock}>
                            <img src={nmImg4} alt="uPVC Solutions for Navi Mumbai" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>uPVC Roofing: Rust-Proof Technology from Industrial Roofing Contractors in Navi Mumbai</h2>
                            <p>
                                For Navi Mumbai's coastal industrial units, we often recommend uPVC as the ultimate rust-proof solution. As versatile <strong>Industrial Roofing Contractors in Navi Mumbai</strong>, we offer multi-layer uPVC sheets that are 100% immune to corrosion. Why choose traditional materials when specialized <strong>Industrial Roofing Contractors in Navi Mumbai</strong> can provide a maintenance-free alternative?
                            </p>
                            <p>
                                Corporate facility managers in Navi Mumbai prefer uPVC for its aesthetic appeal and superior heat reflection. As your dedicated <strong>Industrial Roofing Contractors in Navi Mumbai</strong>, we ensure these sheets are installed with the highest level of craftsmanship.
                            </p>
                            <ul>
                                <li><strong>Chemical Immunity</strong>: Perfect for the specialized industries in Navi Mumbai.</li>
                                <li><strong>Internal Cooling</strong>: Naturally reducing the need for heavy HVAC support.</li>
                                <li><strong>Durability</strong>: A benefit always highlighted by top <strong>Industrial Roofing Contractors in Navi Mumbai</strong>.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Technical Specification Section */}
                    <section className={styles.technicalSection}>
                        <h2>Technical Standards: Why Industrial Roofing Contractors in Navi Mumbai Choose Zinco</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.techTable}>
                                <thead>
                                    <tr>
                                        <th>Specification Category</th>
                                        <th>Zinco Standard</th>
                                        <th>Navi Mumbai Benefit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Keyword Density</td>
                                        <td>Industrial Roofing Contractors in Navi Mumbai</td>
                                        <td>High SEO Visibility</td>
                                    </tr>
                                    <tr>
                                        <td>Structural Calculation</td>
                                        <td>IS:875 / IS:800 Compliant</td>
                                        <td>Maximum Wind Resistance</td>
                                    </tr>
                                    <tr>
                                        <td>Insulation Grade</td>
                                        <td>Class-1 Fire Rated PUF</td>
                                        <td>Safety & Energy Efficiency</td>
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
                            <h3>Industrial Shed Care: Advice from Industrial Roofing Contractors in Navi Mumbai</h3>
                            <p>
                                As proactive <strong>Industrial Roofing Contractors in Navi Mumbai</strong>, we provide annual maintenance contracts to ensure your roof remains in peak condition. Regular checks are vital in the Navi Mumbai industrial belt.
                            </p>
                            <div className={styles.maintenanceGrid}>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Drainage Clearance</strong>: Preventing water logging during Navi Mumbai monsoons.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Sealant Audits</strong>: Provided by the most diligent <strong>Industrial Roofing Contractors in Navi Mumbai</strong>.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Structure Painting</strong>: Vital for industrial health in Navi Mumbai's aggressive air.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className={styles.faqSection}>
                        <h2>Common Questions for Industrial Roofing Contractors in Navi Mumbai</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>What makes you the best Industrial Roofing Contractors in Navi Mumbai?</h3>
                                <p>Our specialized understanding of Navi Mumbai's industrial landscape and our use of high-performance, chemical-resistant materials make us the leading <strong>Industrial Roofing Contractors in Navi Mumbai</strong>.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Do your Industrial Roofing Contractors in Navi Mumbai handle Rabale MIDC?</h3>
                                <p>Yes, we are the trusted <strong>Industrial Roofing Contractors in Navi Mumbai</strong> for businesses across Rabale, Mahape, and Taloja MIDC areas.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Can Industrial Roofing Contractors in Navi Mumbai assist with PEB?</h3>
                                <p>Absolutely. As full-service <strong>Industrial Roofing Contractors in Navi Mumbai</strong>, we handle Pre-Engineered Building (PEB) design, fabrication, and installation.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Why hire authorized Industrial Roofing Contractors in Navi Mumbai?</h3>
                                <p>Industrial infrastructure is expensive. Hiring authorized <strong>Industrial Roofing Contractors in Navi Mumbai</strong> like Zinco ensures you get factory warranties and structural safety.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Navi Mumbai" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Top Industrial Roofing Contractors in Navi Mumbai Today</h2>
                            <p>Protect your industrial investment with the best in the business. Our team of <strong>Industrial Roofing Contractors in Navi Mumbai</strong> is standing by to provide a free technical estimate.</p>
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
