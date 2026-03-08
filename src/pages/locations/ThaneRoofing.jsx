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
                keywords="industrial roofing contractors thane, thane midc roofing, wagle estate roofing, puf panel manufacturer thane, factory shed thane, industrial painting thane"
                canonicalUrl="https://zincoroofing.com/industrial-roofing-contractors-in-thane"
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
                            Thane's industrial belt is evolving from traditional manufacturing to high-tech logistics. As premier <strong>Industrial Roofing Contractors Thane</strong>, Zinco Roofing Solution provides the structural foundation for this growth. The diverse climate requires <strong>Industrial Roofing Contractors Thane</strong> who can design for both heavy rain and intense heat. Choosing experienced <strong>Industrial Roofing Contractors Thane</strong> is vital for long-term ROI. We are the most trusted <strong>Industrial Roofing Contractors Thane</strong> in the city. Rely on our <strong>Industrial Roofing Contractors Thane</strong> team.
                        </motion.p>
                        <p>
                            Corporate facility heads look for <strong>Industrial Roofing Contractors Thane</strong> who can deliver durability. By hiring established <strong>Industrial Roofing Contractors Thane</strong>, you are investing in safety. We are the <strong>Industrial Roofing Contractors Thane</strong> that prioritize premium materials. As <strong>Industrial Roofing Contractors Thane</strong>, we ensure your facility stands the test of time. Every project handled by our <strong>Industrial Roofing Contractors Thane</strong> is world-class.
                        </p>
                        <p>
                            When searching for <strong>Industrial Roofing Contractors Thane</strong>, quality is key. We are the <strong>Industrial Roofing Contractors Thane</strong> that never compromise. Our <strong>Industrial Roofing Contractors Thane</strong> provide detailed structural audits. Reach out to the best <strong>Industrial Roofing Contractors Thane</strong> today. We are the top <strong>Industrial Roofing Contractors Thane</strong> in the industrial belt. Rely on <strong>Industrial Roofing Contractors Thane</strong> for excellence.
                        </p>
                    </section>

                    <LocationServiceCards location="Thane" />

                    {/* Detailed Content Sections */}
                    <section className={styles.twoColumn}>
                        <div className={styles.textContent}>
                            <h2>Superior Thane MIDC Roofing: Engineered for Durability</h2>
                            <p>
                                <strong>Thane MIDC roofing</strong> in dense zones requires specialized knowledge. As dedicated providers of <strong>Thane MIDC roofing</strong>, we utilize high-micron Galvalume sheets. <strong>Thane MIDC roofing</strong> requirements often involve high-span architectures. Hiring professional <strong>Thane MIDC roofing</strong> teams ensures precision. We lead the way in <strong>Thane MIDC roofing</strong> projects.
                            </p>
                            <p>
                                Our reputation for <strong>Thane MIDC roofing</strong> is built on attention to detail. When you collaborate for <strong>Thane MIDC roofing</strong> with Zinco, you benefit from ROI. We offer the most durable <strong>Thane MIDC roofing</strong> in the industrial zone. Each <strong>Thane MIDC roofing</strong> project is customized for safety. Trust our <strong>Thane MIDC roofing</strong> for quality.
                            </p>
                            <p>
                                We are the leaders in <strong>Thane MIDC roofing</strong> for the region. Our <strong>Thane MIDC roofing</strong> provides the fastest installation. Choose <strong>Thane MIDC roofing</strong> for lasting peace of mind. Our <strong>Thane MIDC roofing</strong> is tested for extreme weather. Get a <strong>Thane MIDC roofing</strong> quote today. We are your one-stop shop for <strong>Thane MIDC roofing</strong>.
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
                            <h2>Premier Wagle Estate Roofing Solutions</h2>
                            <p>
                                For projects in the commercial heart, <strong>Wagle Estate roofing</strong> demands high aesthetics. As specialists in <strong>Wagle Estate roofing</strong>, we offer modern profiles. Every corporate office needs <strong>Wagle Estate roofing</strong> that balances style and safety. When consulting for <strong>Wagle Estate roofing</strong>, experts prefer Zinco. 
                            </p>
                            <p>
                                <strong>Thane MIDC roofing</strong> in Wagle Estate and Manpada requires specialized engineering. As dedicated <strong>Thane MIDC roofing</strong> providers, we handle high-span units. <strong>Wagle estate roofing</strong> is one of our key specialties in the city. Our projects for <strong>wagle estate roofing</strong> prioritize structural safety. For <strong>wagle estate roofing</strong>, trust the best team. We lead in <strong>wagle estate roofing</strong> solutions. Experience the best <strong>wagle estate roofing</strong> now. Our <strong>wagle estate roofing</strong> results are premium. Zinco defines <strong>wagle estate roofing</strong> excellence.
                            </p>
                            <p>
                                Our <strong>Wagle Estate roofing</strong> systems are designed for urban environments. No other <strong>Wagle Estate roofing</strong> service delivers this level of finish. Choose <strong>Wagle Estate roofing</strong> for premium results. We are the leading <strong>Wagle Estate roofing</strong> contractors in Thane. Experience excellence with <strong>Wagle Estate roofing</strong>.
                            </p>
                        </div>
                    </section>

                    <section className={styles.twoColumn}>
                        <div className={styles.textContent}>
                            <h2>Leading PUF Panel Manufacturer Thane</h2>
                            <p>
                                Temperature regulation is handled by a top <strong>PUF panel manufacturer Thane</strong>. As an established <strong>PUF panel manufacturer Thane</strong>, we deliver energy efficiency. Every modern factory needs a <strong>PUF panel manufacturer Thane</strong> to reduce heat. When consulting with a <strong>PUF panel manufacturer Thane</strong>, experts focus on R-value. We are the leaders as a <strong>PUF panel manufacturer Thane</strong>. Rely on our <strong>PUF panel manufacturer Thane</strong> services. Trust the best <strong>PUF panel manufacturer Thane</strong>.
                            </p>
                            <p>
                                We are the <strong>PUF panel manufacturer Thane</strong> that meets safety standards. Our solutions from a top <strong>PUF panel manufacturer Thane</strong> are ideal for pharma. As a versatile <strong>PUF panel manufacturer Thane</strong>, we handle custom specs. Trust a professional <strong>PUF panel manufacturer Thane</strong> for cold storage.
                            </p>
                            <p>
                                We are the <strong>PUF panel manufacturer Thane</strong> that offers modular construction. No other <strong>PUF panel manufacturer Thane</strong> delivers this safety. Our <strong>PUF panel manufacturer Thane</strong> services include code audits. Choose the best <strong>PUF panel manufacturer Thane</strong> for your project. We are the <strong>PUF panel manufacturer Thane</strong> you can rely on.
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
                            <h2>Heavy-Duty Factory Shed Thane Construction</h2>
                            <p>
                                From initial design to completion, we excel at <strong>factory shed Thane</strong> fabrication. Our <strong>factory shed Thane</strong> team ensures high-performance structures. We provide <strong>factory shed Thane</strong> solutions for all sectors. Choosing expert <strong>factory shed Thane</strong> fabrication ensures project speed. We are the leaders in <strong>factory shed Thane</strong>. Rely on our <strong>factory shed Thane</strong> solutions.
                            </p>
                            <p>
                                Our techniques for <strong>factory shed Thane</strong> utilize advanced steel. We are the experts in <strong>factory shed Thane</strong> across the city. For <strong>factory shed Thane</strong> that meets safety codes, trust Zinco. We offer <strong>factory shed Thane</strong> that is scalable. Get a <strong>factory shed Thane</strong> estimate today.
                            </p>
                            <p>
                                Contact us for premium <strong>factory shed Thane</strong> services today. Our <strong>factory shed Thane</strong> results speak for themselves. We are your partner for <strong>factory shed Thane</strong> and roofing. Experience the best <strong>factory shed Thane</strong> with our team. Every <strong>factory shed Thane</strong> is built for safety.
                            </p>
                        </div>
                    </section>

                    <section className={styles.twoColumn}>
                        <div className={styles.textContent}>
                            <h2>Expert Industrial Painting Thane Services</h2>
                            <p>
                                At Zinco, we provide high-end <strong>industrial painting Thane</strong> services. Our <strong>industrial painting Thane</strong> solutions utilize epoxy systems. Every professional knows that <strong>industrial painting Thane</strong> is vital. Our reputation for <strong>industrial painting Thane</strong> comes from prep. We are the <strong>industrial painting Thane</strong> experts. Call our top <strong>industrial painting Thane</strong> team.
                            </p>
                            <p>
                                We offer <strong>industrial painting Thane</strong> for all plants. Our <strong>industrial painting Thane</strong> services prevent rust. Rely on us for world-class <strong>industrial painting Thane</strong>. Choose <strong>industrial painting Thane</strong> for maintenance. We are the preferred <strong>industrial painting Thane</strong> partners.
                            </p>
                            <p>
                                Our <strong>industrial painting Thane</strong> provides chemical resistance. For superior <strong>industrial painting Thane</strong>, contact us. We use premium materials for <strong>industrial painting Thane</strong>. Our <strong>industrial painting Thane</strong> team is highly trained. Get an <strong>industrial painting Thane</strong> quote today.
                            </p>
                        </div>
                    </section>

                    {/* Technical Specification Section */}
                    <section className={`${styles.technicalSection} ${styles.darkMode}`}>
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
