import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaIndustry, FaLayerGroup, FaShieldAlt, FaTemperatureLow, FaWater } from 'react-icons/fa';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/locations/navi_mumbai_thumb.webp';
import imgIntro from '../../assets/projects/L&T construction.webp';
import imgWhatIs from '../../assets/projects/Cyberteck.webp';
import imgTypes from '../../assets/productshero/types-puf.webp';
import imgApplications from '../../assets/Puf panel images/Puf panel images/1001155530.webp';
import imgInstall from '../../assets/productshero/puf img.webp';
import imgProjects from '../../assets/Puf panel images/Puf panel images/1001155532.webp';
import SEO from '../../components/shared/SEO';
import LocationMap from '../../components/shared/LocationMap';
import styles from './LocationStyles.module.css';
import AreaLinks from '../../components/shared/AreaLinks';

const PUFPanelNaviMumbai = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="PUF Panel in Navi Mumbai | Insulated Roofing Sheets Specialist"
                description="Expert puf panel in navi mumbai solutions. Delivering high-quality Insulated Roofing Sheets and cold storage panels for Navi Mumbai's industrial hubs."
                keywords="puf panel in navi mumbai, puf panel manufacturer navi mumbai, insulated roofing sheets navi mumbai"
                canonicalUrl="https://zincoroof.com/puf-panel-in-navi-mumbai"
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
                        <h1>Leading puf panel in navi mumbai solutions</h1>
                        <p>Providing cutting-edge <strong>thermal systems</strong> for temperature-controlled industrial environments.</p>
                        <div className={styles.heroButtons}>
                            <Button href="/products" size="lg" variant="secondary">Explore Thermal Solutions</Button>
                            <Button href="#contact" size="lg">Get a Quote</Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className={styles.container}>
                <main className={styles.mainContent}>
                    {/* Section 1: Introduction */}
                    <motion.section 
                        className={styles.introSection}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.twoColumn}>
                            <div className={styles.textBlock}>
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    Specialized insulated panels for industrial use
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    Navi Mumbai requires a reliable <strong>industrial</strong> partner for its evolving industry. As the leading provider of <strong>Insulated Roofing Sheets</strong>, Zinco delivers specialized thermal enclosure systems. Our expertise with <strong>modular panels</strong> involves delivering high-quality results.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    Choosing the right <strong>insulated solution</strong> is the most important decision for your shed. Our <strong>thermal units</strong> prioritize engineering ethics and thermal efficiency. We serve every industrial corridor with premium <strong>sandwich panel</strong> materials.
                                </motion.p>
                            </div>
                            <motion.div
                                className={styles.imageBlock}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <img src={imgIntro} alt="insulated industrial application" loading="lazy" decoding="async" />
                            </motion.div>
                        </div>
                    </motion.section>

                    <motion.section 
                        className={`${styles.technicalSection} ${styles.darkMode}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.container}>
                            <div className={styles.twoColumn}>
                                <motion.div
                                    className={styles.imageBlock}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <img src={imgWhatIs} alt="insulated panel enclosures" loading="lazy" decoding="async" />
                                </motion.div>
                                <div className={styles.textBlock}>
                                    <h2>Premium Industrial Enclosures</h2>
                                    <p>
                                        Our <strong>insulated</strong> systems provide world-class barriers. By using specialized <strong>polyurethane</strong> materials, you can maintain stable temperatures. These <strong>units</strong> are designed for long-term performance across heavy industrial zones.
                                    </p>
                                    <p>
                                        Every project needs quality environmental protection from a <strong>structural</strong> specialist. Our panels are tested for monsoon resilience as a reliable <strong>cold storage</strong> provider.
                                    </p>
                                    <p>
                                        We lead the way in sustainable architecture with <strong>thermal sheets</strong>. Our <strong>engineering teams</strong> meet all modern safety standards for your factory or warehouse.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    <motion.section 
                        className={styles.introSection}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.twoColumn}>
                            <div className={styles.textBlock}>
                                <h2>High-efficiency Insulated Solutions</h2>
                                <p>
                                    Temperature regulation is handled by high-quality <strong>thermal units</strong>. We deliver excellence as a <strong>structural partner</strong> for all facilities. Every unit needs <strong>thermal insulation</strong> to reduce operational costs.
                                </p>
                                <p>
                                    We offer versatile <strong>solutions</strong> for pharmaceutical plants. Trust our <strong>modular systems</strong> for construction that prioritizes safety. We are the <strong>engineering experts</strong> across the corridor.
                                </p>
                                <p>
                                    Choose the best <strong>insulated panels</strong> for your next project. Experience the best results with our <strong>industrial specialized</strong> services.
                                </p>
                            </div>
                            <motion.div
                                className={styles.imageBlock}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <img src={imgTypes} alt="insulated panel types" loading="lazy" decoding="async" />
                            </motion.div>
                        </div>
                    </motion.section>

                    <motion.section 
                        className={`${styles.technicalSection} ${styles.darkMode}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.container}>
                            <h2>Expertise in thermal insulated solutions</h2>
                            <p>
                                Looking for trusted <strong>industrial</strong> expertise? We are leading providers for <strong>enclosure</strong> facility systems. Our role as a <strong>technical specialist</strong> involves performing detailed audits.
                            </p>
                            <p>
                                Every manager seeks a <strong>building</strong> partner with proven experience. By hiring established <strong>structural specialists</strong>, you get quality. We are the most responsive <strong>engineering team</strong>.
                            </p>
                            <p>
                                We lead the ranks in providing <strong>thermal systems</strong> for cold storage. If you need professional <strong>technical guidance</strong>, contact us today.
                            </p>
                        </div>
                    </motion.section>

                    {/* Section 9: Recent Projects */}
                    <motion.section 
                        className={styles.introSection}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.twoColumn}>
                            <div className={styles.textBlock}>
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    Success with modular construction projects
                                </motion.h2>
                                <p style={{ marginBottom: 'var(--spacing-xl)', fontSize: 'var(--text-lg)' }}>
                                    Zinco provides high-performance enclosure systems for complex infrastructure. Our technical expertise ensures that your facility maintains optimal thermal gradients regardless of external conditions.
                                </p>
                                <p style={{ marginBottom: 'var(--spacing-xl)', opacity: 0.8 }}>
                                    Navi Mumbai's industrial landscape, ranging from Taloja to JNPT, demands materials that can withstand high humidity and saline air. Our sandwich panels are engineered with high-density polyurethane cores and protective outer skins that resist corrosion and structural fatigue.
                                </p>
                                <p style={{ marginBottom: 'var(--spacing-xl)', opacity: 0.8 }}>
                                    Beyond simple insulation, we focus on the structural integrity of the entire building envelope. This includes specialized flashing, precision-engineered joinery, and airtight seals that prevent energy leakage. Our solutions are ideal for pharmaceutical plants, food processing units, and logistics hubs where environment control is non-negotiable.
                                </p>
                                <p style={{ marginBottom: 'var(--spacing-xl)', fontSize: 'var(--text-lg)' }}>
                                    Our portfolio demonstrates our status as a premier <strong>puf panel in navi mumbai</strong> engineering partner:
                                </p>
                                <div style={{ marginTop: 'var(--spacing-lg)' }}>
                                    <Button href="/industrial-roofing-projects-navi-mumbai" size="lg">View Our Work</Button>
                                </div>
                            </div>
                            <motion.div
                                className={styles.imageBlock}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <img src={imgProjects} alt="puf panel projects" loading="lazy" decoding="async" />
                            </motion.div>
                        </div>

                        <div className={styles.benefitGrid}>
                            {[
                                { title: 'Chemical Manufacturing Unit', loc: 'Taloja MIDC', desc: 'insulated walls for a pharmaceutical plant.' },
                                { title: 'Cold Storage Warehouse', loc: 'Vashi Turbhe', desc: 'High-performance thermal solutions for perishable goods.' },
                                { title: 'Corporate Back-Office Facade', loc: 'Airoli Mindspace', desc: 'Aesthetic architectural cladding.' },
                                { title: 'Logistics Park', loc: 'Panvel', desc: 'thermal sheets for a major fulfillment center.' }
                            ].map((proj, index) => (
                                <motion.div className={styles.benefitCard}
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-600)', marginBottom: '0.5rem', fontWeight: '600' }}>{proj.loc}</div>
                                    <h3>{proj.title}</h3>
                                    <p>{proj.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Section 8: Performance Standards */}
                    <section className={`${styles.technicalSection} ${styles.darkMode}`}>
                        <div className={styles.container}>
                            <h2>Strategic Industrial Standards</h2>
                            <p>
                                Infrastructure in the MMR belt requires <strong>high-efficiency</strong> materials. As authorized providers of <strong>technical solutions</strong>, we utilize advanced equipment.
                            </p>
                            <p>
                                High-quality <strong>thermal sheets</strong> will reduce operational expenses for decades. We provide detailed analyses for your <strong>energy-saving</strong> investment.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
                                <div className={styles.mItem}>
                                    <FaIndustry />
                                    <h3 style={{ color: 'var(--accent-400)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Structural Integrity</h3>
                                    <p>Superior surface finish ensures longevity.</p>
                                </div>
                                <div className={styles.mItem}>
                                    <FaIndustry />
                                    <h3 style={{ color: 'var(--accent-400)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Precision Engineering</h3>
                                    <p>Exact specs for your facility needs.</p>
                                </div>
                                <div className={styles.mItem}>
                                    <FaTools />
                                    <h3 style={{ color: 'var(--accent-400)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Performance Spec</h3>
                                    <p>Certified for extreme industrial environments.</p>
                                </div>
                            </div>
                            <p style={{ marginBottom: 'var(--spacing-lg)', opacity: 0.8 }}>
                                Our installation process is governed by strict quality control protocols. Before any project begins, our engineers conduct a comprehensive site survey to assess structural readiness and environmental factors. This proactive approach allows us to customize the panel specifications for maximum efficiency.
                            </p>
                            <p style={{ marginBottom: 'var(--spacing-lg)', opacity: 0.8 }}>
                                During execution, we utilize specialized lifting equipment and precision alignment tools to ensure that every interlocking joint is perfectly sealed. This meticulous attention to detail prevents thermal bridging and ensures that your facility remains airtight, significantly reducing long-term HVAC operational costs.
                            </p>
                            <p>
                                Reach out to our <strong>technical support</strong> team for precise project quotes. Our <strong>logistics</strong> network ensures on-time delivery.
                            </p>
                        </div>
                    </section>

                    {/* Section 10: FAQs */}
                    <section className={styles.technicalSection} style={{ background: 'var(--white)', color: 'var(--text-primary)' }}>
                        <div className={styles.container}>
                            <h2 style={{ color: 'var(--gray-900)', textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                                Frequently Asked Questions
                            </h2>
                            <div className={styles.faqGrid}>
                                {[
                                    {
                                        q: 'Is this solution suitable for coastal monsoons?',
                                        a: 'Yes, our materials are highly moisture resistant and provide extreme weather protection.'
                                    },
                                    {
                                        q: 'Can it resist salt air corrosion?',
                                        a: 'The pre-coated finishes are specifically designed for coastal and industrial environments.'
                                    },
                                    {
                                        q: 'How long does an installation last?',
                                        a: 'With proper installation, these panels provide thermal efficiency for over 25 years.'
                                    },
                                    {
                                        q: 'Do you provide on-site support?',
                                        a: 'Zinco provides comprehensive site audits and installation guidance across Navi Mumbai.'
                                    }
                                ].map((item, index) => (
                                    <div key={index} className={styles.faqItem} style={{ background: 'var(--bg-light)', border: '1px solid var(--gray-200)' }}>
                                        <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-600)', marginBottom: '0.5rem' }}>{item.q}</h3>
                                        <p style={{ color: 'var(--gray-700)' }}>{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Navi Mumbai" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the best regional experts</h2>
                            <p style={{ marginBottom: '2rem' }}>Secure your facility with expert <strong>insulated</strong> engineering. Our team is ready for your site audit.</p>
                            <div className={styles.ctaButtons}>
                                <Button href="/contact#contact-form" size="lg" variant="primary">Schedule a Technical Audit</Button>
                                <Button href="/products" size="lg" variant="secondary">View Our Products</Button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <LocationMap title="Navi Mumbai Industrial Zones" query="Navi Mumbai Industrial Area" />
        </div>
    );
};

export default PUFPanelNaviMumbai;
