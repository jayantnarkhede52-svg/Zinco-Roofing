import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaIndustry, FaLayerGroup, FaShieldAlt, FaTemperatureLow, FaWater } from 'react-icons/fa';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/img1.webp'; // Using a relevant hero image
import imgIntro from '../../assets/img 7.webp';
import imgWhatIs from '../../assets/img 6.webp';
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
                title="PUF panel manufacturer in navi mumbai"
                description="PUF panel manufacturer in Navi Mumbai delivering factory-direct insulated panels with free site visit, custom fabrication and quick installation."
                keywords="PUF panel manufacturer in Navi Mumbai, insulated roofing sheets, industrial puf panels, navi mumbai puf panel suppliers"
                canonicalUrl="https://zincoroofing.com/puf-panel-manufacturer-navi-mumbai"
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
                        <h1>Puf Panel Manufacturers in Navi Mumbai</h1>
                        <p>Leading Puf Panel Manufacturers in Navi Mumbai delivering Industrial & Commercial Insulation Solutions for the MMR Region.</p>
                        <div className={styles.heroButtons}>
                            <Button href="/products" size="lg" variant="secondary">View Our Products</Button>
                            <Button href="#contact" size="lg">Get a Quote</Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className={styles.container}>
                <main className={styles.mainContent}>
                    {/* Section 1: Introduction */}
                    <section className={styles.introSection}>
                        <div className={styles.twoColumn}>
                            <div className={styles.textBlock}>
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    Trusted PUF Panel Manufacturer in Navi Mumbai
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    Navi Mumbai has evolved into a powerhouse of industrial activity, encompassing chemical zones, pharmaceutical clusters, and massive logistics hubs. As the leading <strong>PUF panel manufacturer in Navi Mumbai</strong>, we provide specialized building solutions that are tailored to these specific sector needs. Our role as a <strong>PUF panel manufacturer in Navi Mumbai</strong> involves delivering quality products for every plant, ensuring that every facility is equipped with energy-efficient envelopes. We are the <strong>PUF panel manufacturer in Navi Mumbai</strong> that focuses on structural integrity and long-term sustainability. Every unit built by a <strong>PUF panel manufacturer in Navi Mumbai</strong> should be durable enough to withstand the local monsoon and extreme humidity. Choosing the right <strong>PUF panel manufacturer in Navi Mumbai</strong> is the most important decision for your shed. As a <strong>PUF panel manufacturer in Navi Mumbai</strong>, Zinco prioritizes engineering ethics and material science. We also provide additional support services for insulation maintenance and thermal auditing to ensure that your energy savings remain consistent over several decades of operation in this high-growth industrial corridor.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    When you work with a <strong>PUF panel manufacturer in Navi Mumbai</strong>, efficiency is guaranteed. As a top-tier <strong>PUF panel manufacturer in Navi Mumbai</strong>, we serve Taloja and Turbhe. Our reputation as a <strong>PUF panel manufacturer in Navi Mumbai</strong> is built on trust. No other <strong>PUF panel manufacturer in Navi Mumbai</strong> offers our expertise. Reach out to the best <strong>PUF panel manufacturer in Navi Mumbai</strong> today. We are the preferred <strong>PUF panel manufacturer in Navi Mumbai</strong> for all.
                                </motion.p>
                            </div>
                            <motion.div
                                className={styles.imageBlock}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <img src={imgIntro} alt="PUF Panel Manufacturer in Navi Mumbai" loading="lazy" decoding="async" />
                            </motion.div>
                        </div>
                    </section>

                    <section className={`${styles.technicalSection} ${styles.darkMode}`}>
                        <div className={styles.container}>
                            <div className={styles.twoColumn}>
                                <motion.div
                                    className={styles.imageBlock}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <img src={imgWhatIs} alt="Insulated Roofing Sheets Structure" loading="lazy" decoding="async" />
                                </motion.div>
                                <div className={styles.textBlock}>
                                    <h2>Superior Insulated Roofing Sheets: Maximum Protection</h2>
                                    <p>
                                        Our <strong>insulated roofing sheets</strong> provide world-class thermal barriers. By using <strong>insulated roofing sheets</strong>, you can maintain stable temperatures. These <strong>insulated roofing sheets</strong> are designed for durability. We offer the best <strong>insulated roofing sheets</strong> in the region. Choosing <strong>insulated roofing sheets</strong> ensures energy efficiency.
                                    </p>
                                    <p>
                                        Every project needs quality <strong>insulated roofing sheets</strong> for protection. Our <strong>insulated roofing sheets</strong> are tested for extreme heat. Invest in <strong>insulated roofing sheets</strong> for long-term ROI. We are your partner for <strong>insulated roofing sheets</strong> and installation. Get an <strong>insulated roofing sheets</strong> quote today. Rely on <strong>insulated roofing sheets</strong> for peace of mind.
                                    </p>
                                    <p>
                                        We lead the way in <strong>insulated roofing sheets</strong> technology. Our <strong>insulated roofing sheets</strong> provide high R-values. Choose <strong>insulated roofing sheets</strong> for industrial plants. Our <strong>insulated roofing sheets</strong> are fire-rated. Experience the best <strong>insulated roofing sheets</strong> with Zinco.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.introSection}>
                        <div className={styles.twoColumn}>
                            <div className={styles.textBlock}>
                                <h2>Heavy-Duty Industrial PUF Panels</h2>
                                <p>
                                    Temperature regulation is handled by high-quality <strong>industrial puf panels</strong>. As a provider of <strong>industrial puf panels</strong>, we deliver excellence. Every factory needs <strong>industrial puf panels</strong> to reduce energy costs. When installing <strong>industrial puf panels</strong>, experts focus on density. Our <strong>industrial puf panels</strong> meet all safety standards.
                                </p>
                                <p>
                                    We offer the most versatile <strong>industrial puf panels</strong> for pharma. Our solutions involving <strong>industrial puf panels</strong> are ideal for clinics. Trust <strong>industrial puf panels</strong> for modular construction. We are the experts in <strong>industrial puf panels</strong> across the belt. Every <strong>industrial puf panels</strong> unit is built for safety.
                                </p>
                                <p>
                                    Choose the best <strong>industrial puf panels</strong> for your next build. Our <strong>industrial puf panels</strong> provide acoustic insulation. Get an <strong>industrial puf panels</strong> estimate today. We are your one-stop shop for <strong>industrial puf panels</strong>. Rely on <strong>industrial puf panels</strong> for industrial safety.
                                </p>
                            </div>
                            <motion.div
                                className={styles.imageBlock}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <img src={imgTypes} alt="Industrial PUF Panels Fabrication" loading="lazy" decoding="async" />
                            </motion.div>
                        </div>
                    </section>

                    <section className={`${styles.technicalSection} ${styles.darkMode}`}>
                        <div className={styles.container}>
                            <h2>Reliable Navi Mumbai PUF Panel Suppliers</h2>
                            <p>
                                Looking for trusted <strong>navi mumbai puf panel suppliers</strong>? We are the leading <strong>navi mumbai puf panel suppliers</strong> for the region. As premier <strong>navi mumbai puf panel suppliers</strong>, we offer fast delivery. Our role as <strong>navi mumbai puf panel suppliers</strong> involves high-level audits. We are the <strong>navi mumbai puf panel suppliers</strong> you can trust.
                            </p>
                            <p>
                                Every project manager seeks <strong>navi mumbai puf panel suppliers</strong> with experience. By hiring established <strong>navi mumbai puf panel suppliers</strong>, you get quality. We are the <strong>navi mumbai puf panel suppliers</strong> that provide warranties. As for <strong>navi mumbai puf panel suppliers</strong>, we are the most responsive. Choose the top <strong>navi mumbai puf panel suppliers</strong> for ROI.
                            </p>
                            <p>
                                We lead the ranks of <strong>navi mumbai puf panel suppliers</strong> in India. Our support as <strong>navi mumbai puf panel suppliers</strong> is world-class. If you need <strong>navi mumbai puf panel suppliers</strong>, contact us. We are the specialized <strong>navi mumbai puf panel suppliers</strong> for cold rooms. Partner with the best <strong>navi mumbai puf panel suppliers</strong> today.
                            </p>
                        </div>
                    </section>

                    {/* Section 9: Recent Projects */}
                    <section className={styles.introSection}>
                        <div className={styles.twoColumn}>
                            <div className={styles.textBlock}>
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    Recent Projects by Puf panel manufacturers in Navi Mumbai
                                </motion.h2>
                                <p style={{ marginBottom: 'var(--spacing-xl)', fontSize: 'var(--text-lg)' }}>
                                    Our portfolio demonstrates our ability to deliver results across various sectors, solidifying our status as top <strong>Puf panel manufacturers in Navi Mumbai</strong>:
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
                                <img src={imgProjects} alt="Recent Projects Collage" loading="lazy" decoding="async" />
                            </motion.div>
                        </div>

                        <div className={styles.benefitGrid}>
                            {[
                                { title: 'Chemical Manufacturing Unit', loc: 'Taloja MIDC', desc: 'Corrosion-resistant roofing for a 20,000 sq. ft. engineering plant.' },
                                { title: 'Food Processing Cold Room', loc: 'Vashi APMC', desc: '120mm thick PUF panels for a temperature-controlled vegetable storage facility.' },
                                { title: 'Corporate Back-Office Facade', loc: 'Airoli Mindspace', desc: 'Aesthetic, sound-dampening wall cladding for a leading IT firm.' },
                                { title: 'Logistics Park', loc: 'Panvel', desc: 'Rapid-erection roofing for a large-scale e-commerce fulfillment center.' }
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
                    </section>

                    {/* Section 8: Cost of PUF Panels */}
                    <section className={`${styles.technicalSection} ${styles.darkMode}`}>
                        <div className={styles.container}>
                            <h2>Cost from Puf panel manufacturers in Navi Mumbai</h2>
                            <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--spacing-2xl)', opacity: 0.9 }}>
                                Pricing is influenced by steel grades, insulation thickness, and scale. As transparent <strong>Puf panel manufacturers in Navi Mumbai</strong>, we offer competitive rates based on global market standards. Our pricing model accounts for the rising costs of raw materials while ensuring that local factories get the best possible value for their investment.
                            </p>

                            <p style={{ textAlign: 'center', maxWidth: '800px', margin: 'var(--spacing-lg) auto', color: 'var(--gray-300)' }}>
                                It is important to consider the long-term operational savings when evaluating initial project costs. A higher-quality panel may have a greater upfront price but will reduce electricity bills for decades. We provide detailed cost-benefit analyses for all our industrial clients to help them make informed decisions about their building envelopes. Our team also assists with budget planning and project scheduling to ensure that financial targets are met without compromising on the quality of the final structure.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <h3 style={{ color: 'var(--accent-400)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Standard Roofing</h3>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1rem' }}>30mm - 40mm</div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>₹900 - ₹1,300</div>
                                    <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>per sq. meter</div>
                                </div>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <h3 style={{ color: 'var(--accent-400)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Premium Wall Panels</h3>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1rem' }}>Insulated</div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>₹119 - ₹149</div>
                                    <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>per sq. foot</div>
                                </div>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <h3 style={{ color: 'var(--accent-400)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Cold Storage Specs</h3>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1rem' }}>80mm - 100mm</div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>₹1,200 - ₹1,600</div>
                                    <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>per sq. meter</div>
                                </div>
                            </div>

                            <p style={{ textAlign: 'center', fontSize: '0.9rem', opacity: 0.7, fontStyle: 'italic' }}>
                                Note: Prices are subject to GST and raw material fluctuations. We offer competitive bulk pricing for large-scale warehouses and industrial sheds. Our logistical network ensures that deliveries are made on time across all industrial zones.
                            </p>
                        </div>
                    </section>

                    {/* Section 10: FAQs */}
                    <section className={styles.technicalSection} style={{ background: 'var(--white)', color: 'var(--text-primary)' }}>
                        <div className={styles.container}>
                            <h2 style={{ color: 'var(--gray-900)', textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                                FAQs – Puf panel manufacturers in Navi Mumbai
                            </h2>
                            <div className={styles.faqGrid}>
                                {[
                                    {
                                        q: 'Are PUF panels suitable for the heavy Navi Mumbai monsoons?',
                                        a: 'Yes. As experienced Puf panel manufacturers in Navi Mumbai, we design panels with factory-sealed joints and corrugated profiles that shed 3,000mm+ of rainfall efficiently.'
                                    },
                                    {
                                        q: 'Can these panels resist salt air corrosion near JNPT?',
                                        a: 'Absolutely. We use PVDF and specialized polyester coatings that are specifically designed to resist the electrochemical reactions caused by salt spray.'
                                    },
                                    {
                                        q: 'How long do these roofing systems last?',
                                        a: 'With professional installation, our PUF panels have a lifespan of 25 to 30 years with minimal maintenance, far exceeding the 10-15 year life of traditional metal sheets.'
                                    },
                                    {
                                        q: 'Do you provide on-site installation support?',
                                        a: 'Yes, typical of leading Puf panel manufacturers in Navi Mumbai, we provide full technical guidance and have expert teams for end-to-end installation.'
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

                </main>
            </div>
        </div>
    );
};

export default PUFPanelNaviMumbai;
