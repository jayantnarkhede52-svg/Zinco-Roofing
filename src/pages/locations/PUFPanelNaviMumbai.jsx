import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaIndustry, FaLayerGroup, FaShieldAlt, FaTemperatureLow, FaWater } from 'react-icons/fa';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/locations/navi_mumbai_hero.webp';
import imgIntro from '../../assets/projects/L&T construction.webp';
import imgWhatIs from '../../assets/projects/Cyberteck.webp';
import imgTypes from '../../assets/productshero/types-puf.webp';
import imgApplications from '../../assets/Puf panel images/Puf panel images/1001155530.webp';
import imgInstall from '../../assets/productshero/puf img.webp';
import imgProjects from '../../assets/Puf panel images/Puf panel images/1001155532.webp';
import SEO from '../../components/shared/SEO';
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
                        <h1>puf panel in navi mumbai</h1>
                        <p>Providing cutting-edge <strong>puf panel in navi mumbai</strong> solutions for temperature-controlled industrial environments.</p>
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
                                    Specialized puf panel in navi mumbai
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    Navi Mumbai requires a reliable <strong>puf panel in navi mumbai</strong> partner for its evolving industry. As the leading provider of <strong>puf panel in navi mumbai</strong>, Zinco delivers specialized thermal enclosure systems. Our expertise with <strong>puf panel in navi mumbai</strong> involves delivering high-quality modular results.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    Choosing the right <strong>puf panel in navi mumbai</strong> is the most important decision for your shed. Our <strong>puf panel in navi mumbai</strong> prioritize engineering ethics and thermal efficiency. We serve every industrial corridor with premium <strong>puf panel in navi mumbai</strong> materials.
                                </motion.p>
                            </div>
                            <motion.div
                                className={styles.imageBlock}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <img src={imgIntro} alt="puf panel in navi mumbai industrial application" loading="lazy" decoding="async" />
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
                                    <img src={imgWhatIs} alt="puf panel in navi mumbai enclosures" loading="lazy" decoding="async" />
                                </motion.div>
                                <div className={styles.textBlock}>
                                    <h2>Premium puf panel in navi mumbai Systems</h2>
                                    <p>
                                        Our <strong>puf panel in navi mumbai</strong> systems provide world-class barriers. By using specialized <strong>puf panel in navi mumbai</strong> materials, you can maintain stable temperatures. These <strong>puf panel in navi mumbai</strong> units are designed for long-term performance across heavy industrial zones.
                                    </p>
                                    <p>
                                        Every project needs quality environmental protection from a <strong>puf panel in navi mumbai</strong> specialist. Our panels are tested for monsoon resilience as a reliable <strong>puf panel in navi mumbai</strong> provider.
                                    </p>
                                    <p>
                                        We lead the way in sustainable architecture with <strong>puf panel in navi mumbai</strong>. Our <strong>puf panel in navi mumbai</strong> meet all modern safety standards for your factory or warehouse.
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
                                <h2>High-efficiency puf panel in navi mumbai</h2>
                                <p>
                                    Temperature regulation is handled by high-quality <strong>puf panel in navi mumbai</strong>. We deliver excellence as a <strong>puf panel in navi mumbai</strong> partner for all facilities. Every unit needs <strong>puf panel in navi mumbai</strong> to reduce operational costs.
                                </p>
                                <p>
                                    We offer versatile <strong>puf panel in navi mumbai</strong> for pharmaceutical plants. Trust our <strong>puf panel in navi mumbai</strong> for modular construction that prioritizes safety. We are the <strong>puf panel in navi mumbai</strong> experts across the corridor.
                                </p>
                                <p>
                                    Choose the best <strong>puf panel in navi mumbai</strong> for your next project. Experience the best results with our <strong>puf panel in navi mumbai</strong> services.
                                </p>
                            </div>
                            <motion.div
                                className={styles.imageBlock}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <img src={imgTypes} alt="puf panel in navi mumbai types" loading="lazy" decoding="async" />
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
                            <h2>Expertise in puf panel in navi mumbai</h2>
                            <p>
                                Looking for trusted <strong>puf panel in navi mumbai</strong> expertise? We are leading providers for <strong>puf panel in navi mumbai</strong> facility enclosures. Our role as a <strong>puf panel in navi mumbai</strong> specialist involves performing detailed technical audits.
                            </p>
                            <p>
                                Every manager seeks a <strong>puf panel in navi mumbai</strong> partner with proven experience. By hiring established <strong>puf panel in navi mumbai</strong> specialists, you get quality. We are the most responsive <strong>puf panel in navi mumbai</strong> team.
                            </p>
                            <p>
                                We lead the ranks in providing <strong>puf panel in navi mumbai</strong> for cold storage. If you need professional <strong>puf panel in navi mumbai</strong> guidance, contact us today.
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
                                    Success with puf panel in navi mumbai
                                </motion.h2>
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
                                <img src={imgProjects} alt="puf panel in navi mumbai projects" loading="lazy" decoding="async" />
                            </motion.div>
                        </div>

                        <div className={styles.benefitGrid}>
                            {[
                                { title: 'Chemical Manufacturing Unit', loc: 'Taloja MIDC', desc: 'puf panel in navi mumbai for a pharmaceutical plant.' },
                                { title: 'Food Processing Cold Room', loc: 'Vashi APMC', desc: 'puf panel in navi mumbai for temperature-controlled storage.' },
                                { title: 'Corporate Back-Office Facade', loc: 'Airoli Mindspace', desc: 'Aesthetic puf panel in navi mumbai architectural cladding.' },
                                { title: 'Logistics Park', loc: 'Panvel', desc: 'puf panel in navi mumbai for a major fulfillment center.' }
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
                            <h2>Strategic puf panel in navi mumbai Standards</h2>
                            <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--spacing-2xl)', opacity: 0.9 }}>
                                As an authorized provider of <strong>puf panel in navi mumbai</strong>, we offer competitive rates based on manufacturing volume. Our <strong>puf panel in navi mumbai</strong> model ensures you get the best performance value.
                            </p>

                            <p style={{ textAlign: 'center', maxWidth: '800px', margin: 'var(--spacing-lg) auto', color: 'var(--gray-300)' }}>
                                High-quality <strong>puf panel in navi mumbai</strong> will reduce operational expenses for decades. We provide detailed analyses for your <strong>puf panel in navi mumbai</strong> investment.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <h3 style={{ color: 'var(--accent-400)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>puf panel in navi mumbai Integrity</h3>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1rem' }}>30mm - 40mm</div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: '700' }}>Standard Industrial Grades</div>
                                    <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Optimized Pricing</div>
                                </div>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <h3 style={{ color: 'var(--accent-400)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>puf panel in navi mumbai Engineering</h3>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1rem' }}>Premium Fabrication</div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: '700' }}>High-Micron Protection</div>
                                    <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Verified Durability</div>
                                </div>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <h3 style={{ color: 'var(--accent-400)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>puf panel in navi mumbai spec</h3>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1rem' }}>80mm - 120mm</div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: '700' }}>Thermal Efficiency</div>
                                    <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Optimized Seals</div>
                                </div>
                            </div>

                            <p style={{ textAlign: 'center', fontSize: '0.9rem', opacity: 0.7, fontStyle: 'italic' }}>
                                Reach out to our <strong>puf panel in navi mumbai</strong> support team for precise project quotes. Our <strong>puf panel in navi mumbai</strong> logistics network ensures on-time delivery.
                            </p>
                        </div>
                    </section>

                    {/* Section 10: FAQs */}
                    <section className={styles.technicalSection} style={{ background: 'var(--white)', color: 'var(--text-primary)' }}>
                        <div className={styles.container}>
                            <h2 style={{ color: 'var(--gray-900)', textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                                puf panel in navi mumbai FAQ
                            </h2>
                            <div className={styles.faqGrid}>
                                {[
                                    {
                                        q: 'Is puf panel in navi mumbai suitable for coastal monsoons?',
                                        a: 'Yes. As a leading manufacturer of puf panel in navi mumbai, we design building skins that shed rainfall efficiently.'
                                    },
                                    {
                                        q: 'Can puf panel in navi mumbai resist salt air corrosion?',
                                        a: 'Absolutely. Our puf panel in navi mumbai use specialized protective layers to resist salt spray near JNPT.'
                                    },
                                    {
                                        q: 'How long does a puf panel in navi mumbai last?',
                                        a: 'With professional installation, our puf panel in navi mumbai units have a lifespan of 25 to 30 years.'
                                    },
                                    {
                                        q: 'Do you provide puf panel in navi mumbai support?',
                                        a: 'Yes, we provide full technical guidance and site audits for all puf panel in navi mumbai projects.'
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
                            <h2>Partner with the best puf panel in navi mumbai experts</h2>
                            <p style={{ marginBottom: '2rem' }}>Secure your facility with expert <strong>puf panel in navi mumbai</strong> engineering. Our team is ready for your site audit.</p>
                            <div className={styles.ctaButtons}>
                                <Button href="/contact#contact-form" size="lg" variant="primary">Schedule a Technical Audit</Button>
                                <Button href="/products" size="lg" variant="secondary">View Our Products</Button>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
};

export default PUFPanelNaviMumbai;
