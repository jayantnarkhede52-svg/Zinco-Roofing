import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCity, FaShieldAlt, FaTools, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import LocationMap from '../../components/shared/LocationMap';
import heroImage from '../../assets/locations/mumbai_hero.webp';
import mumbaiImg1 from '../../assets/MUMBAI/MUMBAI 1.webp';
import mumbaiImg2 from '../../assets/MUMBAI/MUMBAI 2.webp';
import mumbaiImg3 from '../../assets/MUMBAI/MUMBAI 3.webp';
import mumbaiImg4 from '../../assets/MUMBAI/MUMBAI 4.webp';
import styles from './LocationStyles.module.css';
import LocationServiceCards from '../../components/shared/LocationServiceCards';
import AreaLinks from '../../components/shared/AreaLinks';

const MumbaiRoofing = () => {
    const mobileHighlights = [
        {
            title: "Industrial Mastery",
            desc: "Leading structural specialists for Mumbai's complex factory environments.",
            icon: <FaCity />
        },
        {
            title: "Premium Panels",
            desc: "High-durability metal roofing and PUF panels for superior longevity.",
            icon: <FaShieldAlt />
        },
        {
            title: "Expert Execution",
            desc: "Rapid on-site installation with precision engineering and safety compliance.",
            icon: <FaTools />
        }
    ];

    return (
        <div className={styles.locationPage}>
            <SEO
                title="Industrial Roofing Specialist in Mumbai | Premium Structural Solutions"
                description="Expert structural fabrication and industrial roofing service in Mumbai. High-performance metal roofing, PUF panels, and durable shed construction."
                keywords="industrial roofing specialist mumbai, structural fabrication mumbai, roofing sheets mumbai, factory shed contractors"
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
                        <h1>Industrial Roofing Specialist in Mumbai</h1>
                        <p>Specialized structural solutions and high-performance metal panels from Mumbai's trusted engineering partner.</p>
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
                            Professional Structural Solutions in Mumbai
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Mumbai's industrial landscape requires specialized engineering for its dense urban environments. As a premier <strong>roofing contractor in mumbai</strong>, Zinco Roofing Solution provides the technical foundation for heavy industry.
                        </motion.p>
                        <p>
                            Industrial facility managers seek reliable construction partners for their infrastructure needs. By hiring an established structural specialist, you ensure your asset is protected. Our Mumbai teams handle complex spans effortlessly.
                        </p>
                        <p>
                            When searching for quality products, every site manager knows that durability is key. We are dedicated to providing superior results in the MMR region. Our engineering team provides precision site audits for all industrial builds.
                        </p>
                    </motion.section>

                    <LocationServiceCards location="Mumbai" />

                    {/* Detailed Content Sections - Desktop Only for deep reading */}
                    <div className={styles.desktopOnly}>
                        <motion.section 
                            className={styles.fullWidthSection}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className={styles.textContent}>
                                <h2>Strategic Engineering Excellence</h2>
                                <p>
                                    Technical roofing services remain the backbone of the city's infrastructure. However, standard systems often fail. As a leading service provider, we use anti-corrosive coatings to ensure a leak-proof structure.
                                </p>
                                <p>
                                    Structural projects face challenges that only an expert Mumbai team can solve. Our production standards require absolute precision. Hiring professional teams ensures a durable and long-lasting finish.
                                </p>
                                <p>
                                    We are the leaders in providing the fastest ROI through specialized industrial systems. Choose our expert fabrication services for your next build.
                                </p>
                            </div>
                            <div className={styles.fullWidthImageBlock}>
                                <img src={mumbaiImg1} alt="industrial construction in mumbai" loading="lazy" />
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
                                <h2>Thermal efficiency for Industrial Units</h2>
                                <p>
                                    Temperature regulation is essential for factory productivity. We deliver energy-efficient panels that significantly reduce operational costs. We focus on thermal quality for every installation.
                                </p>
                                <p>
                                    Mumbai's coastal temperatures demand high-performance barriers. As a versatile structural partner, we handle custom specifications for safer and more comfortable environments.
                                </p>
                                <p>
                                    Trust our professional site audits. We offer solutions that prioritize energy savings for all our corporate clients in Mumbai.
                                </p>
                            </div>
                            <div className={styles.fullWidthImageBlock}>
                                <img src={mumbaiImg2} alt="thermal efficient panels mumbai" loading="lazy" />
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
                                <h2>Protective Coating Solutions</h2>
                                <p>
                                    Zinco provides specialized coating services for industrial sheds. Rust prevention is vital in humid coastal zones. Our reputation comes from thorough surface preparation and expert finish.
                                </p>
                                <p>
                                    We offer protective finishes that prevent structural degradation. Rely on us for maintenance solutions that are both effective and cost-efficient.
                                </p>
                                <p>
                                    Our highly trained team ensures your facility remains in top condition for decades. Get a technical quote today.
                                </p>
                            </div>
                            <div className={styles.fullWidthImageBlock}>
                                <img src={mumbaiImg3} alt="Industrial protective coating for metal roofs in Mumbai" loading="lazy" />
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
                                <h2>Advanced Composite Materials</h2>
                                <p>
                                    For chemical zones and harsh environments, composite panels are perfect. We offer high-quality multi-layer products. Investing in premium panels means zero maintenance for years to come.
                                </p>
                                <p>
                                    These materials are immune to corrosive fumes, making them ideal for specialized facilities. We provide lightweight solutions that don't compromise on strength.
                                </p>
                                <p>
                                    Use advanced materials for your next project. We have completed many complex installations across the city.
                                </p>
                            </div>
                            <div className={styles.fullWidthImageBlock}>
                                <img src={mumbaiImg4} alt="Premium composite roofing materials for Mumbai factories" loading="lazy" />
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
                                <h2>Shed fabrication and PEB Services</h2>
                                <p>
                                    From design to completion, we excel at industrial shed fabrication. Choosing an expert engineering partner ensures project speed and structural integrity.
                                </p>
                                <p>
                                    Our techniques utilize advanced technology for modular units and PEB structures. Whether you need a workshop or a logistics park, we prioritize component longevity.
                                </p>
                                <p>
                                    Contact us for premium fabrication services. We are your partner for excellence in structural engineering.
                                </p>
                            </div>
                        </motion.section>
                    </div>

                    {/* Technical Specification Section - Simplified for both, Detailed for Desktop */}
                    <section className={`${styles.technicalSection} ${styles.darkMode}`}>
                        <div className={styles.container}>
                            <h2>Technical Standards for Industrial Builds</h2>
                            <div className={`${styles.tableWrapper} ${styles.desktopOnly}`}>
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
                            <div className={styles.mobileOnly} style={{ textAlign: 'center' }}>
                                <p>High-performance standards meeting all Mumbai industrial safety and structural codes.</p>
                            </div>
                        </div>
                    </section>

                    {/* Maintenance Section */}
                    <section className={styles.maintenanceSection}>
                        <div className={styles.infoCard}>
                            <h3>Structural Maintenance Advice</h3>
                            <p className={styles.desktopOnly}>
                                To maintain your asset, we recommend a regular audit by an authorized professional. Our team provides comprehensive health checks for all structural components.
                            </p>
                            <div className={styles.maintenanceGrid}>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Gutter Audit</strong>: Essential during monsoons to prevent leaks.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Coating Patching</strong>: Key for maintaining stable trusses.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Fastener Replacement</strong>: Vital for long-term structural integrity.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className={styles.faqSection}>
                        <h2>FAQs for Industrial Projects</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>Why choose Zinco for your Mumbai project?</h3>
                                <p>Our specialized teams and reliable services deliver unmatched ROI for coastal industrial units.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Do you handle end-to-end shed construction?</h3>
                                <p>Yes, we are full-service experts providing everything from design to final site installation.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Do you assist with old factory shed restoration?</h3>
                                <p>Absolutely. We specialize in replacing outdated materials and restoring industrial units to modern standards.</p>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Mumbai" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Best in Mumbai</h2>
                            <p>Secure your industrial asset with expert engineering. Our team is ready for your technical estimate.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact#contact-form" className={styles.primaryBtn}>Request a Technical Audit</Link>
                                <Link to="/projects" className={styles.secondaryBtn}>View Our Projects</Link>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <LocationMap title="Mumbai" query="Mumbai, Maharashtra" />
        </div>
    );
};

export default MumbaiRoofing;
