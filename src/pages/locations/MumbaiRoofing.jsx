import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCity, FaShieldAlt, FaTools, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import heroImage from '../../assets/locations/mumbai_hero.webp';
import mumbaiImg1 from '../../assets/MUMBAI/MUMBAI 1.webp';
import mumbaiImg2 from '../../assets/MUMBAI/MUMBAI 2.webp';
import mumbaiImg3 from '../../assets/MUMBAI/MUMBAI 3.webp';
import mumbaiImg4 from '../../assets/MUMBAI/MUMBAI 4.webp';
import styles from './LocationStyles.module.css';
import LocationServiceCards from '../../components/shared/LocationServiceCards';
import AreaLinks from '../../components/shared/AreaLinks';

const MumbaiRoofing = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Roofing Contractor in Mumbai | Industrial Roofing Mumbai Specialist"
                description="Expert roofing contractor in mumbai. High-performance metal roofing, PUF panels, and structural fabrication for Mumbai's industrial hubs."
                keywords="roofing contractor in mumbai, industrial roofing mumbai, roofing sheets mumbai"
                canonicalUrl="https://zincoroof.com/roofing-contractor-in-mumbai"
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
                        <h1>roofing contractor in mumbai</h1>
                        <p>Specialized structural solutions and high-performance metal panels from the leading <strong>roofing contractor in mumbai</strong>.</p>
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
                            Professional roofing contractor in mumbai
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Mumbai's industrial landscape requires a specialized <strong>roofing contractor in mumbai</strong> for its dense urban environments. As a premier <strong>roofing contractor in mumbai</strong>, Zinco Roofing Solution provides the technical foundation for heavy industry.
                        </motion.p>
                        <p>
                            Industrial facility managers look for a reliable <strong>roofing contractor in mumbai</strong> for their construction needs. By hiring an established <strong>roofing contractor in mumbai</strong>, you ensure your asset is protected. As a <strong>roofing contractor in mumbai</strong>, we handle complex spans effortlessly.
                        </p>
                        <p>
                            When searching for quality products, every <strong>roofing contractor in mumbai</strong> knows that durability is key. We are dedicated to providing superior results as the top <strong>roofing contractor in mumbai</strong>. Our team provides site audits as a leading <strong>roofing contractor in mumbai</strong>.
                        </p>
                    </motion.section>

                    <LocationServiceCards location="Mumbai" />

                    {/* Detailed Content Sections */}
                    <motion.section 
                        className={styles.fullWidthSection}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.textContent}>
                            <h2>Strategic roofing contractor in mumbai Excellence</h2>
                            <p>
                                <strong>Roofing contractor in mumbai</strong> services remain the backbone of the city's infrastructure. However, standard systems often fail. As a <strong>roofing contractor in mumbai</strong> provider, we use anti-corrosive coatings to ensure a leak-proof structure.
                            </p>
                            <p>
                                Structural projects face challenges that only an expert <strong>roofing contractor in mumbai</strong> can solve. Our production standards as a <strong>roofing contractor in mumbai</strong> require precision. Hiring professional teams from a <strong>roofing contractor in mumbai</strong> ensures a durable finish.
                            </p>
                            <p>
                                We are the leaders in providing the fastest ROI through specialized <strong>roofing contractor in mumbai</strong> systems. Choose our expert <strong>roofing contractor in mumbai</strong> services for your next build.
                            </p>
                        </div>
                        <div className={styles.fullWidthImageBlock}>
                            <img src={mumbaiImg1} alt="roofing contractor in mumbai construction" loading="lazy" />
                        </div>
                    </motion.section>

                    <motion.section 
                        className={styles.fullWidthSection}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.textContent}>
                            <h2>Thermal efficiency from roofing contractor in mumbai</h2>
                            <p>
                                Temperature regulation is essential. We deliver energy-efficient panels as a <strong>roofing contractor in mumbai</strong> that reduce costs. When consulting with a <strong>roofing contractor in mumbai</strong>, we focus on thermal quality.
                            </p>
                            <p>
                                Mumbai's high temperatures demand high-performance barriers from a <strong>roofing contractor in mumbai</strong>. As a versatile <strong>roofing contractor in mumbai</strong> partner, we handle custom specifications for safer results.
                            </p>
                            <p>
                                Trust our professional <strong>roofing contractor in mumbai</strong> site audits. We offer solutions that prioritize energy savings as a reliable <strong>roofing contractor in mumbai</strong>.
                            </p>
                        </div>
                        <div className={styles.fullWidthImageBlock}>
                            <img src={mumbaiImg2} alt="roofing contractor in mumbai panels" loading="lazy" />
                        </div>
                    </motion.section>

                    <motion.section 
                        className={styles.fullWidthSection}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.textContent}>
                            <h2>Protective solutions by roofing contractor in mumbai</h2>
                            <p>
                                Zinco provides specialized coating services as a <strong>roofing contractor in mumbai</strong>. Rust prevention is vital, making <strong>roofing contractor in mumbai</strong> expertise essential. Our reputation comes from thorough surface preparation from a <strong>roofing contractor in mumbai</strong> specialist.
                            </p>
                            <p>
                                We offer protective finishes as a <strong>roofing contractor in mumbai</strong>, preventing degradation. Rely on us for <strong>roofing contractor in mumbai</strong> maintenance solutions that are cost-effective.
                            </p>
                            <p>
                                Our highly trained team ensures your facility remains in top condition as a <strong>roofing contractor in mumbai</strong>. Get a quote from a <strong>roofing contractor in mumbai</strong> today.
                            </p>
                        </div>
                        <div className={styles.fullWidthImageBlock}>
                            <img src={mumbaiImg3} alt="roofing contractor in mumbai maintenance" loading="lazy" />
                        </div>
                    </motion.section>

                    <motion.section 
                        className={styles.fullWidthSection}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.textContent}>
                            <h2>Composite options from roofing contractor in mumbai</h2>
                            <p>
                                For chemical zones, composite panels from a <strong>roofing contractor in mumbai</strong> are perfect. We offer multi-layer products as a <strong>roofing contractor in mumbai</strong>. Investing in panels from a <strong>roofing contractor in mumbai</strong> means zero maintenance.
                            </p>
                            <p>
                                These materials are immune to fumes, making them ideal for facilities needing a <strong>roofing contractor in mumbai</strong>. We provide lightweight solutions as a <strong>roofing contractor in mumbai</strong>.
                            </p>
                            <p>
                                Use advanced materials for your next project from a <strong>roofing contractor in mumbai</strong>. We have completed many installations as a <strong>roofing contractor in mumbai</strong>.
                            </p>
                        </div>
                        <div className={styles.fullWidthImageBlock}>
                            <img src={mumbaiImg4} alt="roofing contractor in mumbai sheets" loading="lazy" />
                        </div>
                    </motion.section>

                    <motion.section 
                        className={styles.fullWidthSection}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.textContent}>
                            <h2>Shed fabrication from roofing contractor in mumbai</h2>
                            <p>
                                From design to completion, we excel at shed fabrication as a <strong>roofing contractor in mumbai</strong>. Choosing an expert <strong>roofing contractor in mumbai</strong> ensures project speed and integrity.
                            </p>
                            <p>
                                Our techniques utilize advanced technology as a <strong>roofing contractor in mumbai</strong> for modular units. Whether you need a workshop or a logistics park, we prioritize component longevity as your <strong>roofing contractor in mumbai</strong>.
                            </p>
                            <p>
                                Contact us for premium <strong>roofing contractor in mumbai</strong> services. We are your partner for excellence as a leading <strong>roofing contractor in mumbai</strong>.
                            </p>
                        </div>
                    </motion.section>

                    {/* Technical Specification Section */}
                    <section className={`${styles.technicalSection} ${styles.darkMode}`}>
                        <h2>Technical Standards for roofing contractor in mumbai</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.techTable}>
                                <thead>
                                    <tr>
                                        <th>Metric Category</th>
                                        <th>Standard Panels</th>
                                        <th>Heavy Duty</th>
                                        <th>Composite Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Application</td>
                                        <td>Large Spans</td>
                                        <td>Factories / Sheds</td>
                                        <td>Chemical Units</td>
                                    </tr>
                                    <tr>
                                        <td>Heat Insulation</td>
                                        <td>High Performance</td>
                                        <td>Highest Rank</td>
                                        <td>Exceptional</td>
                                    </tr>
                                    <tr>
                                        <td>Rain Impact Noise</td>
                                        <td>Low Impact</td>
                                        <td>Extremely Low</td>
                                        <td>Very Low</td>
                                    </tr>
                                    <tr>
                                        <td>Installation Speed</td>
                                        <td>Fastest in Region</td>
                                        <td>Moderate</td>
                                        <td>Moderate</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Maintenance Section */}
                    <section className={styles.maintenanceSection}>
                        <div className={styles.infoCard}>
                            <h3>Advice from a roofing contractor in mumbai</h3>
                            <p>
                                To maintain your asset, we recommend a regular audit by a <strong>roofing contractor in mumbai</strong>. Our <strong>roofing contractor in mumbai</strong> team provides health checks.
                            </p>
                            <div className={styles.maintenanceGrid}>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Gutter Audit</strong>: Essential during monsoons.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Coating Patching</strong>: Key for stable trusses.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Fastener Replacement</strong>: Vital for longevity.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className={styles.faqSection}>
                        <h2>FAQs for roofing contractor in mumbai</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>Why choose Zinco as your roofing contractor in mumbai?</h3>
                                <p>Our specialized teams and reliable services deliver unmatched ROI for coastal units.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Does a roofing contractor in mumbai handle shed construction?</h3>
                                <p>Yes, we are full-service experts providing everything from design to final site installation.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Can a roofing contractor in mumbai assist with old factory sheds?</h3>
                                <p>Absolutely. We specialize in replacing outdated materials and restoring industrial units.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>What is the benefit of a premium roofing contractor in mumbai?</h3>
                                <p>Investing in authorized products ensures safety and longevity for your projects.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Mumbai" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Best roofing contractor in mumbai</h2>
                            <p>Secure your asset with expert engineering. Our <strong>roofing contractor in mumbai</strong> team is ready for your estimate.</p>
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

export default MumbaiRoofing;
