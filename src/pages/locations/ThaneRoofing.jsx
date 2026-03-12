import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCity, FaShieldAlt, FaTools, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
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
                title="Industrial Roofing Contractors in Thane | Expert Wagle Estate Solutions"
                description="Top-tier Industrial Roofing Contractors in Thane. Specializing in factory sheds, commercial roofing, and premium structural painting for Wagle Estate & MIDC."
                keywords="industrial roofing contractors thane, thane midc roofing"
                canonicalUrl="https://zincoroof.com/industrial-roofing-contractors-in-thane"
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
                            Specialized Industrial Roofing Contractors Thane
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Thane's industrial belt is evolving from traditional manufacturing to high-tech logistics and corporate infrastructure. As premier <strong>Industrial Roofing Contractors Thane</strong>, Zinco Roofing Solution provides the structural foundation for this growth. The diverse local climate requires engineered solutions that can design for both heavy rain and intense heat. Choosing experienced professionals is vital for long-term ROI and facility safety. We are the most trusted partners in the city, delivering quality results for every industrial client.
                        </motion.p>
                        <p>
                            Corporate facility heads look for reliable partners who can deliver durability and structural integrity. By hiring established <strong>Industrial Roofing Contractors Thane</strong>, you are investing in safety and long-term peace of mind. We prioritize premium materials and high-performance engineering in every project. Our team ensures your facility stands the test of time, meeting all modern industrial standards.
                        </p>
                        <p>
                            When searching for excellence in structural fabrication, quality and commitment are the cornerstones of success. We are dedicated to providing superior results that never compromise on safety or compliance. Our team provides detailed structural audits and responsive consulting for factory owners across the industrial belt. Reach out to the best in the business today for a comprehensive technical audit.
                        </p>
                    </section>

                    <LocationServiceCards location="Thane" />

                    {/* Detailed Content Sections */}
                    <section className={styles.twoColumn}>
                        <div className={styles.textContent}>
                            <h2>Superior Thane MIDC Roofing: Engineered for Durability</h2>
                            <p>
                                <strong>Thane MIDC roofing</strong> in dense industrial zones requires specialized knowledge and high-micron Galvalume sheets. High-span architectures often demand precise engineering to ensure structural stability and monsoon resilience. Hiring professional teams ensures precision and long-term infrastructure health for your factory or warehouse.
                            </p>
                            <p>
                                Our reputation for <strong>Thane MIDC roofing</strong> is built on attention to detail and a commitment to ROI. When you collaborate with Zinco, you benefit from customized solutions that prioritizing safety. Each project is tested for extreme weather, ensuring lasting peace of mind for business owners in the MIDC belt.
                            </p>
                            <p>
                                We are the leaders in providing the fastest installation without sacrificing quality. Choose our expert services for your next factory unit or commercial shed. Get a quote today and experience the best structural solutions in Thane.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={thaneImg1} alt="Thane MIDC Roofing Solutions" loading="lazy" />
                        </div>
                    </section>

                    <section className={styles.twoColumn}>
                        <div className={styles.imageBlock}>
                            <img src={thaneImg2} alt="Wagle Estate Roofing Specialist" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>High-Performance Structural Solutions in Wagle Estate</h2>
                            <p>
                                For projects in the commercial heart of Thane, structural solutions demand both high aesthetics and engineering excellence. We offer modern profiles that balance style and safety for corporate offices and commercial hubs. Our designs are tailored to urban environments where space and durability are both critical factors.
                            </p>
                            <p>
                                <strong>Thane MIDC roofing</strong> and commercial infrastructure in Wagle Estate require specialized engineering for high-span units. Our projects prioritize structural safety and energy efficiency, ensuring that your commercial asset remains protected from the elements while looking premium.
                            </p>
                            <p>
                                Our systems are designed for long-term performance in dense urban settings. We are the leading contractors in Thane for high-end fabrication, delivering results that are both aesthetically pleasing and structurally sound.
                            </p>
                        </div>
                    </section>

                    <section className={styles.twoColumn}>
                        <div className={styles.textContent}>
                            <h2>Energy-Efficient PUF Panels and Insulation</h2>
                            <p>
                                Temperature regulation is essential for modern industrial processes. We deliver energy-efficient PUF panels that reduce heat and operational costs for factories and cold storage units. When consulting with our experts, we focus on R-value and thermal stability to ensure your facility remains cooled and insulated.
                            </p>
                            <p>
                                Our insulation solutions meet the highest safety standards and are ideal for pharmaceutical and food processing plants. As a versatile partner, we handle custom specifications to provide modular construction that is both safe and durable.
                            </p>
                            <p>
                                Trust our professional site audits to determine the best insulation strategy for your project. We offer modular solutions that prioritize insulation quality, providing you with a reliable environmental control system.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={thaneImg3} alt="PUF Panel Manufacturer Thane" loading="lazy" />
                        </div>
                    </section>

                    <section className={styles.twoColumn}>
                        <div className={styles.imageBlock}>
                            <img src={thaneImg4} alt="Factory Shed Thane Fabrication" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Heavy-Duty Factory Shed Fabrication and Design</h2>
                            <p>
                                From initial design to completion, we excel at industrial shed fabrication. Our team ensures high-performance structures that are scalable and meet all local safety codes. Choosing expert fabrication ensures project speed and structural integrity for all manufacturing sectors.
                            </p>
                            <p>
                                Our techniques utilize advanced steel to create factory units that are built for longevity and operational efficiency. Whether you need a small workshop or a large logistics park, we provide designs that prioritize your specific needs.
                            </p>
                            <p>
                                Contact us for premium services that speak for themselves. We are your partner for structural excellence in Thane, offering safety-first construction that delivers results for every industrial client.
                            </p>
                        </div>
                    </section>

                    <section className={styles.twoColumn}>
                        <div className={styles.textContent}>
                            <h2>Professional Industrial Protective Coatings</h2>
                            <p>
                                Zinco provides specialized coating services that utilize high-end epoxy and PU systems. Protecting your structural assets from corrosion is vital for maintaining value and ensuring long-term safety. Our reputation comes from thorough surface preparation and the use of premium industrial-grade materials.
                            </p>
                            <p>
                                We offer protective finishes for all types of industrial plants, preventing rust and chemical degradation. Rely on us for maintenance solutions that are cost-effective and long-lasting, helping you avoid expensive structural repairs in the future.
                            </p>
                            <p>
                                Our highly trained team uses high-performance materials to ensure that your facility remains in top condition for years to come. Get a quote for your maintenance and painting needs today.
                            </p>
                        </div>
                    </section>

                    {/* Technical Specification Section */}
                    <section className={`${styles.technicalSection} ${styles.darkMode}`}>
                        <h2>Technical Standards for Industrial Roofing Thane</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.techTable}>
                                <thead>
                                    <tr>
                                        <th>Metric Category</th>
                                        <th>Zinco Specification</th>
                                        <th>Benefit for Industrial Roofing Thane</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Product Range</td>
                                        <td><strong>Roofing Sheets Thane</strong></td>
                                        <td>Local Supply & Expert Support</td>
                                    </tr>
                                    <tr>
                                        <td>Wind Speed Load</td>
                                        <td>Up to 150 km/h Rated</td>
                                        <td>Maximum <strong>Industrial Roofing Thane</strong> Safety</td>
                                    </tr>
                                    <tr>
                                        <td>Thermal R-Value</td>
                                        <td>Maximized for <strong>Roofing Sheets Thane</strong></td>
                                        <td>Superior Energy Savings</td>
                                    </tr>
                                    <tr>
                                        <td>Safety Compliance</td>
                                        <td>Full <strong>Industrial Roofing Thane</strong> Standards</td>
                                        <td>Zero-Harm Work Protocols</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Maintenance Section */}
                    <section className={styles.maintenanceSection}>
                        <div className={styles.infoCard}>
                            <h3>Expert Advice for Industrial Roofing Thane</h3>
                            <p>
                                To maintain your <strong>Roofing Sheets Thane</strong>, we offer audit programs to catch issues early. The <strong>Industrial Roofing Thane</strong> monsoon prep is critical.
                            </p>
                            <div className={styles.maintenanceGrid}>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Waterproofing Audits</strong>: Essential for <strong>Roofing Sheets Thane</strong>.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Sealant Checks</strong>: Key for stable <strong>Industrial Roofing Thane</strong>.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Structure Painting</strong>: Best for <strong>Roofing Sheets Thane</strong>.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className={styles.faqSection}>
                        <h2>FAQs about Roofing Sheets Thane & Industrial Roofing Thane</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>Why choose Zinco for Roofing Sheets Thane?</h3>
                                <p>Our specialized <strong>Roofing Sheets Thane</strong> and reliable <strong>Industrial Roofing Thane</strong> teams deliver unmatched ROI.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Do you provide Industrial Roofing Thane for old sheds?</h3>
                                <p>Yes, we specialze in replacing old <strong>Roofing Sheets Thane</strong> and structural restoration of <strong>Industrial Roofing Thane</strong> projects.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Can you handle PEB Industrial Roofing Thane?</h3>
                                <p>Absolutely. We provide full Pre-Engineered Building design and <strong>Roofing Sheets Thane</strong> execution.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>What is the benefit of premium Roofing Sheets Thane?</h3>
                                <p>Investing in authorized <strong>Roofing Sheets Thane</strong> ensures safety and longevity for your <strong>Industrial Roofing Thane</strong> projects.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Thane" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Best in Industrial Roofing Thane</h2>
                            <p>Protect your asset with expert <strong>Roofing Sheets Thane</strong>. Our <strong>Industrial Roofing Thane</strong> team is ready for your estimate.</p>
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
