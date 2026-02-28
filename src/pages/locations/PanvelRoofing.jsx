import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaWarehouse, FaShieldAlt, FaTools, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import heroImage from '../../assets/img3.png';
import panvelImg1 from '../../assets/Metal roofing images/Metal roofing images/1000014010.jpg';
import panvelImg2 from '../../assets/Puf panel images/Puf panel images/1000014252.jpg';
import panvelImg3 from '../../assets/projects/Godreh-ambarnath.jpeg';
import panvelImg4 from '../../assets/Upvc images/Upvc images/1000014135.jpg';
import styles from './LocationStyles.module.css';
import LocationServiceCards from '../../components/shared/LocationServiceCards';

const PanvelRoofing = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Industrial Roofing Contractors in Panvel | Warehouse & Shed Specialist"
                description="Expert Industrial Roofing Contractors in Panvel. Specializing in high-span warehouse roofing, factory sheds, and PUF panels for Panvel's logistics hubs."
                keywords="industrial roofing contractors panvel, panvel warehouse roofing, puf panel manufacturer panvel, factory shed panvel, cold storage panvel, structural painting panvel"
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
                        <h1>Industrial Roofing Contractors in Panvel</h1>
                        <p>Providing high-speed, durable structural solutions for Panvel's massive warehousing and logistics infrastructure.</p>
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
                            Panvel’s Trusted Industrial Roofing Contractors for Logistics & Warehousing
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Panvel has emerged as the logistics gateway to the Mumbai Metropolitan Region. As the most reliable <strong>Industrial Roofing Contractors in Panvel</strong>, Zinco Roofing Solution understands the unique demands of high-span warehousing. Large-scale logistics parks require <strong>Industrial Roofing Contractors in Panvel</strong> who can deliver rapid installation without compromising on long-term weatherproofing.
                        </motion.p>
                        <p>
                            From the massive industrial sheds in Taloja MIDC (Panvel side) to the new logistics clusters along the Mumbai-Pune Expressway, industrial experts look for <strong>Industrial Roofing Contractors in Panvel</strong> who prioritize structural speed. We are the <strong>Industrial Roofing Contractors in Panvel</strong> that use engineered fabrication to ensure that your warehouse is operational in record time, protected against the heavy winds and rain of the Panvel belt.
                        </p>
                    </section>

                    <LocationServiceCards location="Panvel" />

                    {/* Detailed Content Sections */}
                    <section className={styles.twoColumn}>
                        <div className={styles.textContent}>
                            <h2>High-Span Metal Roofing: Specialized Work by Industrial Roofing Contractors in Panvel</h2>
                            <p>
                                Engineering warehouses with minimal internal columns is a specialty of top <strong>Industrial Roofing Contractors in Panvel</strong>. We utilize high-strength Galvalume and innovative truss designs to provide the maximum storage volume. When you hire experienced <strong>Industrial Roofing Contractors in Panvel</strong>, you ensure that every square foot of your logistics facility is usable and safe.
                            </p>
                            <p>
                                Our reputation as premier <strong>Industrial Roofing Contractors in Panvel</strong> comes from our focus on ROI. Choosing specialized <strong>Industrial Roofing Contractors in Panvel</strong> like Zinco provides:
                            </p>
                            <ul>
                                <li><strong>Maximum Structural Span</strong>: Essential for modern racking systems.</li>
                                <li><strong>Engineered Drainage</strong>: Handling Panvel's heavy monsoon runoff.</li>
                                <li><strong>Industrial Grade Fasteners</strong>: A standard practice for high-quality <strong>Industrial Roofing Contractors in Panvel</strong>.</li>
                            </ul>
                            <p>
                                For units near the Navi Mumbai International Airport zone, we are the <strong>Industrial Roofing Contractors in Panvel</strong> that deliver projects on time and within budget.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={panvelImg1} alt="Metal Roofing by Industrial Roofing Contractors in Panvel" loading="lazy" />
                        </div>
                    </section>

                    <section className={styles.twoColumn}>
                        <div className={styles.imageBlock}>
                            <img src={panvelImg2} alt="PUF Panels by Industrial Roofing Contractors in Panvel" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Insulated PUF Panels: Expertise from Industrial Roofing Contractors in Panvel</h2>
                            <p>
                                Cold storage and climate-controlled warehousing are critical to Panvel's logistics sector. As specialized <strong>Industrial Roofing Contractors in Panvel</strong>, we provide high-performance PUF sandwich panels that offer the highest thermal efficiency. These panels are the industry standard for food and pharmaceutical warehouses, and we are the <strong>Industrial Roofing Contractors in Panvel</strong> that guarantee their quality.
                            </p>
                            <p>
                                When technical consultants look for <strong>Industrial Roofing Contractors in Panvel</strong>, insulation R-values are a top priority. Our status as leading <strong>Industrial Roofing Contractors in Panvel</strong> means we only provide fire-rated, high-density insulation solutions.
                            </p>
                            <ul>
                                <li><strong>Thermal Efficiency</strong>: Reducing cooling costs for Panvel cold storages.</li>
                                <li><strong>Structural Strength</strong>: PUF panels provide load-bearing capacity as well as insulation, as recommended by <strong>Industrial Roofing Contractors in Panvel</strong>.</li>
                                <li><strong>Hygienic Finish</strong>: Ideal for pharma units in the Panvel industrial cluster.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.twoColumn}>
                        <div className={styles.textContent}>
                            <h2>Structural Painting: Protection by Industrial Roofing Contractors in Panvel</h2>
                            <p>
                                Rust is a constant threat in the humid, industry-heavy air of Panvel. At Zinco, we are <strong>Industrial Roofing Contractors in Panvel</strong> that focus on the complete lifespan of your building. Our structural painting and specialized coatings create an impermeable barrier against corrosion. Professional <strong>Industrial Roofing Contractors in Panvel</strong> know that a roof is only as good as the structure supporting it.
                            </p>
                            <p>
                                We are the <strong>Industrial Roofing Contractors in Panvel</strong> that project managers trust for structural audits and preventative maintenance. Our coatings are designed for the high-humidity environment of the Panvel-Navi Mumbai belt.
                            </p>
                            <ul>
                                <li><strong>Epoxy Industrial Systems</strong>: Durable protection for Taloja-Panvel factory units.</li>
                                <li><strong>UV Resistant Finishes</strong>: Provided by the most diligent <strong>Industrial Roofing Contractors in Panvel</strong>.</li>
                                <li><strong>Professional Site Prep</strong>: A core service of expert <strong>Industrial Roofing Contractors in Panvel</strong>.</li>
                            </ul>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={panvelImg3} alt="Structural Coating by Industrial Roofing Contractors in Panvel" loading="lazy" />
                        </div>
                    </section>

                    <section className={styles.twoColumn}>
                        <div className={styles.imageBlock}>
                            <img src={panvelImg4} alt="uPVC Solutions for Panvel" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>uPVC Roofing: Rust-Proof Tech from Industrial Roofing Contractors in Panvel</h2>
                            <p>
                                For Panvel industries handling chemicals or those near the creek, we often recommend uPVC as the ultimate rust-proof solution. As versatile <strong>Industrial Roofing Contractors in Panvel</strong>, we offer multi-layer uPVC sheets that are 100% immune to salt and acid. Why settle for traditional metal when specialized <strong>Industrial Roofing Contractors in Panvel</strong> can provide a more durable material?
                            </p>
                            <p>
                                Logistics managers in Panvel prefer uPVC for its noise insulation and heat reflection. As your leading <strong>Industrial Roofing Contractors in Panvel</strong>, we ensure these sheets are installed with structural precision.
                            </p>
                            <ul>
                                <li><strong>Chemical Resistance</strong>: Perfect for the aggressive industrial zones of Panvel.</li>
                                <li><strong>Workplace Comfort</strong>: Naturally cooler interiors, a benefit highlighted by <strong>Industrial Roofing Contractors in Panvel</strong>.</li>
                                <li><strong>Zero Maintenance</strong>: The ultimate ROI provided by top <strong>Industrial Roofing Contractors in Panvel</strong>.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Technical Specification Section */}
                    <section className={styles.technicalSection}>
                        <h2>Technical Standards: Why Industrial Roofing Contractors in Panvel Choose Zinco</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.techTable}>
                                <thead>
                                    <tr>
                                        <th>Metric Name</th>
                                        <th>Zinco Standard</th>
                                        <th>Panvel Logistics Benefit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Keyword Density</td>
                                        <td>Industrial Roofing Contractors in Panvel</td>
                                        <td>Maximum SEO Authority</td>
                                    </tr>
                                    <tr>
                                        <td>Span Capacity</td>
                                        <td>Up to 30 Meters Clear</td>
                                        <td>Optimized Warehouse Space</td>
                                    </tr>
                                    <tr>
                                        <td>Fire Rating</td>
                                        <td>A2-Class Rated</td>
                                        <td>Industrial Safety Compliance</td>
                                    </tr>
                                    <tr>
                                        <td>Installation Rate</td>
                                        <td>Up to 1000sqm / Week</td>
                                        <td>High-Speed Infrastructure</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Maintenance Section */}
                    <section className={styles.maintenanceSection}>
                        <div className={styles.infoCard}>
                            <h3>Warehouse Roof Care: Tips from Industrial Roofing Contractors in Panvel</h3>
                            <p>
                                As proactive <strong>Industrial Roofing Contractors in Panvel</strong>, we recommend regular gutter cleaning and structural audits to prevent downtime. The Panvel monsoon can be brutal on industrial assets.
                            </p>
                            <div className={styles.maintenanceGrid}>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Gutter Audits</strong>: Essential for high-volume rain in Panvel.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Fastener Checks</strong>: Handled by professional <strong>Industrial Roofing Contractors in Panvel</strong>.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Structural Integrity</strong>: Ensured by the best <strong>Industrial Roofing Contractors in Panvel</strong>.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className={styles.faqSection}>
                        <h2>Common Questions for Industrial Roofing Contractors in Panvel</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>What makes you the best Industrial Roofing Contractors in Panvel?</h3>
                                <p>Our specialization in high-span warehousing and our record of high-speed installations make us the preferred <strong>Industrial Roofing Contractors in Panvel</strong> for the logistics sector.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Do your Industrial Roofing Contractors in Panvel handle logistics parks?</h3>
                                <p>Yes, we are the trusted <strong>Industrial Roofing Contractors in Panvel</strong> for massive warehousing and logistics projects across the region.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Can Industrial Roofing Contractors in Panvel assist with retrofitting?</h3>
                                <p>Absolutely. As expert <strong>Industrial Roofing Contractors in Panvel</strong>, we specialize in roof replacement and structural strengthening for old industrial sheds.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Why hire authorized Industrial Roofing Contractors in Panvel?</h3>
                                <p>For high-value warehousing, hiring authorized <strong>Industrial Roofing Contractors in Panvel</strong> like Zinco ensures structural insurance and material longevity.</p>
                            </div>
                        </div>
                    </section>

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Top Industrial Roofing Contractors in Panvel Today</h2>
                            <p>Secure your logistics asset with the most trusted name in the industry. Our team of <strong>Industrial Roofing Contractors in Panvel</strong> is ready to provide a free site audit.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact#contact-form" className={styles.primaryBtn}>Request a Technical Audit</Link>
                                <button className={styles.secondaryBtn}>View Panvel Projects</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default PanvelRoofing;
