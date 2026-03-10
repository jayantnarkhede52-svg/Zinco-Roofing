import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCity, FaShieldAlt, FaTools, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import heroImage from '../../assets/img1.webp';
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
                title="Roofing Sheets Mumbai | Industrial Roofing Mumbai Specialist"
                description="Expert Roofing Sheets Mumbai and Industrial Roofing Mumbai. High-performance metal roofing, PUF panels, and structural fabrication for Mumbai's industrial hubs."
                keywords="Roofing Sheets Mumbai, Industrial Roofing Mumbai"
                canonicalUrl="https://zincoroofing.com/roofing-sheets-mumbai"
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
                        <h1>Roofing Sheets Mumbai & Industrial Roofing</h1>
                        <p>Specialized <strong>Roofing Sheets Mumbai</strong> and <strong>Industrial Roofing Mumbai</strong> solutions for demanding infrastructure.</p>
                        <div className={styles.heroButtons}>
                            <Link to="/products" className={styles.heroBtn}>Explore Roofing Sheets Mumbai</Link>
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
                            High-Quality Roofing Sheets Mumbai
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Mumbai's industrial landscape is a tapestry of scale, requiring specialized <strong>Roofing Sheets Mumbai</strong> for its dense urban environments. As premier providers of <strong>Industrial Roofing Mumbai</strong>, Zinco Roofing Solution provides the technical foundation for heavy industry. The persistent humidity requires <strong>Roofing Sheets Mumbai</strong> that specialize in maritime-grade treatments. Choosing experienced professionals for <strong>Industrial Roofing Mumbai</strong> is vital for the health of your facility. We are the most trusted partners for <strong>Roofing Sheets Mumbai</strong>, providing reliable <strong>Industrial Roofing Mumbai</strong> engineering.
                        </motion.p>
                        <p>
                            Industrial facility managers look for reliable <strong>Roofing Sheets Mumbai</strong> partners. By hiring established <strong>Industrial Roofing Mumbai</strong> experts, you ensure your asset is protected from the elements. We handle complex <strong>Roofing Sheets Mumbai</strong> spans and provide designs that meet all modern <strong>Industrial Roofing Mumbai</strong> safety standards, delivering results that are aesthetically pleasing.
                        </p>
                        <p>
                            When searching for <strong>Roofing Sheets Mumbai</strong>, quality and commitment are the cornerstones. We are dedicated to providing superior <strong>Industrial Roofing Mumbai</strong> results that never compromise on safety. Our team provides <strong>Roofing Sheets Mumbai</strong> audits and responsive <strong>Industrial Roofing Mumbai</strong> consulting, helping you build a resilient foundation for your industrial growth.
                        </p>
                    </section>

                    <LocationServiceCards location="Mumbai" />

                    {/* Detailed Content Sections */}
                    <section className={styles.fullWidthSection}>
                        <div className={styles.textContent}>
                            <h2>Advanced Roofing Sheets Mumbai: Engineered for Excellence</h2>
                            <p>
                                <strong>Roofing Sheets Mumbai</strong> remain the backbone of the city's infrastructure. However, standard <strong>Industrial Roofing Mumbai</strong> systems often fail due to salt spray. As providers of high-performance <strong>Roofing Sheets Mumbai</strong>, we use anti-corrosive coatings to ensure a leak-proof <strong>Industrial Roofing Mumbai</strong> structure for decades.
                            </p>
                            <p>
                                <strong>Industrial Roofing Mumbai</strong> projects face challenges like high wind loads and humidity. Our <strong>Roofing Sheets Mumbai</strong> standards require precision to prevent water ingress. Hiring professional teams for <strong>Industrial Roofing Mumbai</strong> ensures a durable finish that is tested for extreme weather, providing you with a safe <strong>Roofing Sheets Mumbai</strong> environment.
                            </p>
                            <p>
                                We are the leaders in providing the fastest ROI through <strong>Roofing Sheets Mumbai</strong> systems. Choose our expert <strong>Industrial Roofing Mumbai</strong> services for your next build and experience the best structural protection.
                            </p>
                        </div>
                        <div className={styles.fullWidthImageBlock}>
                            <img src={mumbaiImg1} alt="Roofing Sheets Mumbai for Factories" loading="lazy" />
                        </div>
                    </section>

                    <section className={styles.fullWidthSection}>
                        <div className={styles.textContent}>
                            <h2>Energy-Efficient Roofing Sheets Mumbai Insulation</h2>
                            <p>
                                Temperature regulation is essential for <strong>Industrial Roofing Mumbai</strong>. We deliver energy-efficient <strong>Roofing Sheets Mumbai</strong> and insulated panels that reduce operational costs. When consulting for <strong>Industrial Roofing Mumbai</strong>, we focus on thermal quality to ensure your <strong>Roofing Sheets Mumbai</strong> facility remains cooled.
                            </p>
                            <p>
                                Mumbai's high temperatures demand high-performance <strong>Industrial Roofing Mumbai</strong> barriers. As a versatile <strong>Roofing Sheets Mumbai</strong> partner, we handle custom specifications to provide <strong>Industrial Roofing Mumbai</strong> that is safe and durable.
                            </p>
                            <p>
                                Trust our professional <strong>Roofing Sheets Mumbai</strong> site audits. We offer <strong>Industrial Roofing Mumbai</strong> solutions that prioritize energy savings, providing you with a reliable <strong>Roofing Sheets Mumbai</strong> system.
                            </p>
                        </div>
                        <div className={styles.fullWidthImageBlock}>
                            <img src={mumbaiImg2} alt="Roofing Sheets Mumbai PUF Panels" loading="lazy" />
                        </div>
                    </section>

                    <section className={styles.fullWidthSection}>
                        <div className={styles.textContent}>
                            <h2>Professional Industrial Roofing Mumbai Coatings</h2>
                            <p>
                                Zinco provides specialized <strong>Roofing Sheets Mumbai</strong> coating services for maximum protection. Metal oxidation is a significant challenge for <strong>Industrial Roofing Mumbai</strong>, making professional rust prevention vital. Our <strong>Roofing Sheets Mumbai</strong> reputation comes from thorough surface preparation and the use of premium <strong>Industrial Roofing Mumbai</strong> grade materials.
                            </p>
                            <p>
                                We offer protective finishes for all types of <strong>Industrial Roofing Mumbai</strong>, preventing degradation and ensuring <strong>Roofing Sheets Mumbai</strong> safety. Rely on us for <strong>Industrial Roofing Mumbai</strong> maintenance solutions that are cost-effective, helping you avoid expensive <strong>Roofing Sheets Mumbai</strong> repairs.
                            </p>
                            <p>
                                Our highly trained <strong>Industrial Roofing Mumbai</strong> team uses high-performance materials to ensure your <strong>Roofing Sheets Mumbai</strong> facility remains in top condition. Get a quote for <strong>Industrial Roofing Mumbai</strong> painting today and protect your <strong>Roofing Sheets Mumbai</strong> investment.
                            </p>
                        </div>
                        <div className={styles.fullWidthImageBlock}>
                            <img src={mumbaiImg3} alt="Industrial Roofing Mumbai Painting" loading="lazy" />
                        </div>
                    </section>

                    <section className={styles.fullWidthSection}>
                        <div className={styles.textContent}>
                            <h2>High-Performance uPVC Roofing Sheets Mumbai</h2>
                            <p>
                                For <strong>Industrial Roofing Mumbai</strong> in chemical zones, modern composite <strong>Roofing Sheets Mumbai</strong> are the perfect alternative. We offer multi-layer <strong>Roofing Sheets Mumbai</strong> that provide exceptional thermal insulation for <strong>Industrial Roofing Mumbai</strong> structures. Investing in high-quality <strong>Roofing Sheets Mumbai</strong> means zero maintenance and long-term <strong>Industrial Roofing Mumbai</strong> protection.
                            </p>
                            <p>
                                These <strong>Roofing Sheets Mumbai</strong> are immune to fumes, making them an ideal choice for <strong>Industrial Roofing Mumbai</strong> in Kurla. We provide lightweight <strong>Roofing Sheets Mumbai</strong> solutions that offer all-weather <strong>Industrial Roofing Mumbai</strong> protection for decades.
                            </p>
                            <p>
                                Use advanced <strong>Roofing Sheets Mumbai</strong> for your next <strong>Industrial Roofing Mumbai</strong> project. We have completed many successful <strong>Roofing Sheets Mumbai</strong> installations, providing a resilient <strong>Industrial Roofing Mumbai</strong> building envelope.
                            </p>
                        </div>
                        <div className={styles.fullWidthImageBlock}>
                            <img src={mumbaiImg4} alt="uPVC Roofing Sheets Mumbai" loading="lazy" />
                        </div>
                    </section>

                    <section className={styles.fullWidthSection}>
                        <div className={styles.textContent}>
                            <h2>Specialized Industrial Roofing Mumbai Fabrication</h2>
                            <p>
                                From design to completion, we excel at <strong>Industrial Roofing Mumbai</strong> and shed fabrication. Choosing expert <strong>Roofing Sheets Mumbai</strong> ensures project speed and integrity, delivering world-class <strong>Industrial Roofing Mumbai</strong> assets for every sector.
                            </p>
                            <p>
                                Our techniques utilize advanced technology for <strong>Roofing Sheets Mumbai</strong> units that are scalable. Whether you need <strong>Industrial Roofing Mumbai</strong> for a workshop or a logistics park, we prioritize <strong>Roofing Sheets Mumbai</strong> longevity.
                            </p>
                            <p>
                                Contact us for premium <strong>Roofing Sheets Mumbai</strong> fabrication services. We are your partner for <strong>Industrial Roofing Mumbai</strong> excellence, offering safety-first <strong>Roofing Sheets Mumbai</strong> construction.
                            </p>
                        </div>
                    </section>

                    {/* Technical Specification Section */}
                    <section className={`${styles.technicalSection} ${styles.darkMode}`}>
                        <h2>Technical Specifications for Industrial Roofing Mumbai</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.techTable}>
                                <thead>
                                    <tr>
                                        <th>Metric Category</th>
                                        <th><strong>Roofing Sheets Mumbai</strong></th>
                                        <th><strong>Industrial Roofing Mumbai</strong></th>
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
                                        <td>Fastest in Mumbai</td>
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
                            <h3>Expert Advice for Industrial Roofing Mumbai</h3>
                            <p>
                                To maintain your <strong>Roofing Sheets Mumbai</strong>, we recommend a regular audit. Our team provides health checks for all <strong>Industrial Roofing Mumbai</strong> assets across the city.
                            </p>
                            <div className={styles.maintenanceGrid}>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Gutter Audit</strong>: Essential for <strong>Roofing Sheets Mumbai</strong> during monsoons.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Coating Patching</strong>: Key for stable <strong>Industrial Roofing Mumbai</strong> trusses.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Fastener Replacement</strong>: Vital for premium <strong>Roofing Sheets Mumbai</strong> longevity.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className={styles.faqSection}>
                        <h2>FAQs about Roofing Sheets Mumbai & Industrial Roofing Mumbai</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>Why choose Zinco for Roofing Sheets Mumbai?</h3>
                                <p>Our specialized <strong>Roofing Sheets Mumbai</strong> and reliable <strong>Industrial Roofing Mumbai</strong> teams deliver unmatched ROI for coastal units.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Do you handle Industrial Roofing Mumbai for warehouses?</h3>
                                <p>Yes, we are full-service <strong>Industrial Roofing Mumbai</strong> experts providing everything from design to final <strong>Roofing Sheets Mumbai</strong> installation.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Can you assist with old Industrial Roofing Mumbai sheds?</h3>
                                <p>Absolutely. We specialize in replacing old <strong>Roofing Sheets Mumbai</strong> and restoring <strong>Industrial Roofing Mumbai</strong> units in Kurla and Mulund.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>What is the benefit of premium Roofing Sheets Mumbai?</h3>
                                <p>Investing in authorized <strong>Roofing Sheets Mumbai</strong> ensures safety and longevity for your <strong>Industrial Roofing Mumbai</strong> projects.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Mumbai" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Best in Industrial Roofing Mumbai</h2>
                            <p>Secure your asset with expert <strong>Roofing Sheets Mumbai</strong>. Our <strong>Industrial Roofing Mumbai</strong> team is ready for your estimate.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact#contact-form" className={styles.primaryBtn}>Request a Technical Audit</Link>
                                <button className={styles.secondaryBtn}>View Mumbai Projects</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default MumbaiRoofing;
