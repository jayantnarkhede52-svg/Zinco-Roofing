import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCity, FaShieldAlt, FaTools, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import heroImage from '../../assets/img4.png';
import thaneImg1 from '../../assets/Metal roofing images/Metal roofing images/1000014044.jpg';
import thaneImg2 from '../../assets/Puf panel images/Puf panel images/1000014626.jpg';
import thaneImg3 from '../../assets/projects/L&T construction.jpeg';
import thaneImg4 from '../../assets/Upvc images/Upvc images/1000014234.jpg';
import styles from './LocationStyles.module.css';
import LocationServiceCards from '../../components/shared/LocationServiceCards';
import AreaLinks from '../../components/shared/AreaLinks';

const ThaneRoofing = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Industrial Roofing Contractors in Thane | Expert Wagle Estate Solutions"
                description="Top-tier Industrial Roofing Contractors in Thane. Specializing in factory sheds, commercial roofing, and premium structural painting for Wagle Estate & MIDC."
                keywords="industrial roofing contractors thane, thane midc roofing, wagle estate roofing, puf panel manufacturer thane, factory shed thane, industrial painting thane"
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
                        <h1>Industrial Roofing Contractors in Thane</h1>
                        <p>Providing specialized structural and roofing engineering for Thane's diverse commercial and industrial hubs.</p>
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
                            Thane’s Leading Industrial Roofing Contractors for Wagle Estate & MIDC
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Thane has evolved from a satellite town into a primary industrial and commercial destination. As premier <strong>Industrial Roofing Contractors in Thane</strong>, Zinco Roofing Solution provides the technical expertise required for this urban industrial hub. From the legacy units in Wagle Estate to the new manufacturing zones in Thane MIDC, professional <strong>Industrial Roofing Contractors in Thane</strong> are critical for maintaining infrastructure in a city known for its extreme rainfall.
                        </motion.p>
                        <p>
                            Corporate facility heads and production managers understand that quality infrastructure is the key to business continuity. By hiring established <strong>Industrial Roofing Contractors in Thane</strong>, you are investing in structural safety and operational efficiency. We are the <strong>Industrial Roofing Contractors in Thane</strong> that prioritize premium materials and advanced engineering to ensure your facility stands the test of time.
                        </p>
                    </section>

                    <LocationServiceCards location="Thane" />

                    {/* Detailed Content Sections */}
                    <section className={styles.twoColumn}>
                        <div className={styles.textContent}>
                            <h2>Premium Metal Roofing: Expertise from Industrial Roofing Contractors in Thane</h2>
                            <p>
                                Engineering industrial sheds in Thane's dense zones requires specialized knowledge. As dedicated <strong>Industrial Roofing Contractors in Thane</strong>, we utilize high-micron Galvalume sheets with superior anti-corrosive properties. Whether it's a factory in Ambernath (Thane district) or a warehouse in Kalwa, hiring professional <strong>Industrial Roofing Contractors in Thane</strong> like Zinco ensures your project thrives under heavy rain.
                            </p>
                            <p>
                                Our reputation as top <strong>Industrial Roofing Contractors in Thane</strong> is built on our meticulous attention to detail. Choosing authorized <strong>Industrial Roofing Contractors in Thane</strong> provides:
                            </p>
                            <ul>
                                <li><strong>Leak-Proof Technology</strong>: Essential for Thane's high-intensity monsoons.</li>
                                <li><strong>Optimized Load Distribution</strong>: A standard for high-quality <strong>Industrial Roofing Contractors in Thane</strong>.</li>
                                <li><strong>Aesthetic Finishes</strong>: Crucial for Thane's high-profile commercial-industrial mix.</li>
                            </ul>
                            <p>
                                For projects in Wagle Industrial Estate, we are the <strong>Industrial Roofing Contractors in Thane</strong> that offer the most reliable and aesthetically superior roofing solutions.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={thaneImg1} alt="Metal Roofing by Industrial Roofing Contractors in Thane" loading="lazy" />
                        </div>
                    </section>

                    <section className={styles.twoColumn}>
                        <div className={styles.imageBlock}>
                            <img src={thaneImg2} alt="PUF Panels by Industrial Roofing Contractors in Thane" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Insulated PUF Panels: Engineered by Industrial Roofing Contractors in Thane</h2>
                            <p>
                                Thermal regulation is the biggest operational challenge for Thane's pharmaceutical and engineering units. As specialized <strong>Industrial Roofing Contractors in Thane</strong>, we provide high-density PUF sandwich panels that significantly reduce heat gain. These insulated systems are the backbone of modern factories, and we are the <strong>Industrial Roofing Contractors in Thane</strong> that guarantee their energy performance.
                            </p>
                            <p>
                                When plant heads look for <strong>Industrial Roofing Contractors in Thane</strong>, they prioritize fire safety and R-values. Our status as premier <strong>Industrial Roofing Contractors in Thane</strong> means we use PIR-rated insulation cores that meet international safety standards.
                            </p>
                            <ul>
                                <li><strong>Maximum Energy Savings</strong>: Vital for reducing the carbon footprint of Thane units.</li>
                                <li><strong>Acoustic Insulation</strong>: Dampening city noise inside your facility, as recommended by <strong>Industrial Roofing Contractors in Thane</strong>.</li>
                                <li><strong>Fast Installation</strong>: Minimized downtime for your Thane operations.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.twoColumn}>
                        <div className={styles.textContent}>
                            <h2>Structural Painting & Coating: Protection by Industrial Roofing Contractors in Thane</h2>
                            <p>
                                Thane's humid and polluted air can lead to rapid structural decay. At Zinco, we are <strong>Industrial Roofing Contractors in Thane</strong> that focus on complete protection. Our industrial painting services utilize high-performance epoxy and polyurethane coatings designed to shield your steel assets for decades. Expert <strong>Industrial Roofing Contractors in Thane</strong> know that a roof is only as safe as the structure supporting it.
                            </p>
                            <p>
                                We are the <strong>Industrial Roofing Contractors in Thane</strong> that technical managers trust for structural audits and preventative care. Our coatings are designed for the high-humidity, urban-industrial mix typical of Thane city.
                            </p>
                            <ul>
                                <li><strong>Asset Lifetime Extension</strong>: A core goal for any <strong>Industrial Roofing Contractors in Thane</strong>.</li>
                                <li><strong>UV Resistant Coatings</strong>: Crucial for preservation under the Thane sun.</li>
                                <li><strong>Meticulous Surface Preparation</strong>: A hallmark of pro-level <strong>Industrial Roofing Contractors in Thane</strong>.</li>
                            </ul>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={thaneImg3} alt="Structural Coating by Industrial Roofing Contractors in Thane" loading="lazy" />
                        </div>
                    </section>

                    <section className={styles.twoColumn}>
                        <div className={styles.imageBlock}>
                            <img src={thaneImg4} alt="uPVC Solutions for Thane" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>uPVC Roofing: Rust-Proof Tech from Industrial Roofing Contractors in Thane</h2>
                            <p>
                                For chemical units in Thane where traditional metal might fail, we provide 100% rust-proof uPVC solutions. As versatile <strong>Industrial Roofing Contractors in Thane</strong>, we offer multi-layer uPVC sheets that are immune to corrosion and high humidity. Why settle for generic materials when specialized <strong>Industrial Roofing Contractors in Thane</strong> can provide a more resilient alternative?
                            </p>
                            <p>
                                Corporate facility managers in Thane prefer uPVC for its inherent thermal insulation and aesthetic appeal. As leading <strong>Industrial Roofing Contractors in Thane</strong>, we ensure these sheets are installed with structural precision.
                            </p>
                            <ul>
                                <li><strong>Zero Corrosion</strong>: Perfect for the specialized industry zones in Thane.</li>
                                <li><strong>Naturally Cooler Interiors</strong>: A benefit always highlighted by top <strong>Industrial Roofing Contractors in Thane</strong>.</li>
                                <li><strong>Durability</strong>: High-impact resistance provided by expert <strong>Industrial Roofing Contractors in Thane</strong>.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Technical Specification Section */}
                    <section className={styles.technicalSection}>
                        <h2>Technical Standards: Why Industrial Roofing Contractors in Thane Choose Zinco</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.techTable}>
                                <thead>
                                    <tr>
                                        <th>Metric Category</th>
                                        <th>Zinco Specification</th>
                                        <th>Benefit for Thane Industries</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Keyword Focus</td>
                                        <td>Industrial Roofing Contractors in Thane</td>
                                        <td>SEO & Brand Visibility</td>
                                    </tr>
                                    <tr>
                                        <td>Wind Speed Load</td>
                                        <td>Up to 150 km/h Rated</td>
                                        <td>Maximum Monsoon Safety</td>
                                    </tr>
                                    <tr>
                                        <td>Thermal R-Value</td>
                                        <td>Maximized for PUF</td>
                                        <td>Superior Energy Savings</td>
                                    </tr>
                                    <tr>
                                        <td>Safety EHS</td>
                                        <td>Full Industrial Compliance</td>
                                        <td>Zero-Harm Work Protocols</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Maintenance Section */}
                    <section className={styles.maintenanceSection}>
                        <div className={styles.infoCard}>
                            <h3>Industrial Roof Maintenance: Advice from Industrial Roofing Contractors in Thane</h3>
                            <p>
                                As proactive <strong>Industrial Roofing Contractors in Thane</strong>, we offer comprehensive audit programs to catch structural issues before they become expensive repairs. The Thane monsoon requires diligent preparation.
                            </p>
                            <div className={styles.maintenanceGrid}>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Waterproofing Audits</strong>: Essential for Thane's rainy season.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Sealant Checks</strong>: Handled by professional <strong>Industrial Roofing Contractors in Thane</strong>.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Structure Painting</strong>: Vital for industrial health in Thane.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className={styles.faqSection}>
                        <h2>Common Questions for Industrial Roofing Contractors in Thane</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>What makes you the best Industrial Roofing Contractors in Thane?</h3>
                                <p>Our specialized focus on both Wagle Estate's commercial hubs and Thane MIDC's industrial sheds makes us the most reliable <strong>Industrial Roofing Contractors in Thane</strong>.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Do your Industrial Roofing Contractors in Thane handle refurbishment?</h3>
                                <p>Yes, we are the trusted <strong>Industrial Roofing Contractors in Thane</strong> for over-roofing and complete structural restoration of old industrial units.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Can Industrial Roofing Contractors in Thane assist with PEB?</h3>
                                <p>Absolutely. As full-service <strong>Industrial Roofing Contractors in Thane</strong>, we provide Pre-Engineered Building design and execution.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Why hire authorized Industrial Roofing Contractors in Thane?</h3>
                                <p>To ensure structural safety and material warranty, hiring authorized <strong>Industrial Roofing Contractors in Thane</strong> like Zinco is essential for long-term ROI.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Thane" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Top Industrial Roofing Contractors in Thane Today</h2>
                            <p>Protect your industrial asset with the experts. Our team of <strong>Industrial Roofing Contractors in Thane</strong> is ready to provide a free technical estimate for your project.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact#contact-form" className={styles.primaryBtn}>Request a Technical Audit</Link>
                                <button className={styles.secondaryBtn}>View Thane Projects</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default ThaneRoofing;
