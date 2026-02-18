import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaIndustry, FaCity, FaShieldAlt, FaTools, FaBuilding } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/services-hero.png'; // Using generic hero for now suitable for roofing
import styles from './LocationStyles.module.css';

const NaviMumbaiRoofing = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Roofing Contractors in Navi Mumbai | Industrial Experts"
                description="Premier industrial roofing contractors in Navi Mumbai serving Taloja, Rabale, and Mahape. Specialists in PEB roofing, PUF panels, and waterproofing."
                keywords="roofing contractors navi mumbai, industrial roofing navi mumbai, peb roofing taloja, roofing company rabale, mahape roofing services"
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
                        <h1>Premier Roofing Contractors in Navi Mumbai</h1>
                        <p>Specialized Industrial & Commercial Roofing Solutions for MIDC, Taloja, Rabale, and Mahape Zones.</p>
                        <Button href="#contact" size="lg">Get Industrial Quote</Button>
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
                            Engineering Excellence for Navi Mumbai's Infrastructure
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Navi Mumbai is the epicenter of planned industrial growth in Maharashtra. From the chemical factories of Taloja to the IT parks in Airoli, the roofing requirements here are diverse and demanding. <strong>Zinco Roofing Solution</strong> stands as the leading roofing contractor in Navi Mumbai, offering tailored solutions that withstand the region's specific environmental challenges—including heavy monsoon rains and industrial chemical exposure.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            We specialize in <strong>Pre-Engineered Building (PEB) roofing</strong>, PUF panel installation, and structural steel fabrication. Our team understands CIDCO regulations and industrial safety standards, ensuring that your project is not just durable but also compliant.
                        </motion.p>
                    </section>

                    <div className={styles.benefitGrid}>
                        <motion.div className={styles.benefitCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <FaIndustry size={40} color="#3b82f6" />
                            <h3>Industrial Specialist</h3>
                            <p>Proven track record in Taloja, Rabale, and Mahape MIDC zones. We understand industrial shutdowns and execute rapid deployments.</p>
                        </motion.div>
                        <motion.div className={styles.benefitCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <FaShieldAlt size={40} color="#f59e0b" />
                            <h3>Chemical Resistance</h3>
                            <p>For chemical industries in Navi Mumbai, we offer specialized anti-corrosive coating solutions and uPVC roofing options.</p>
                        </motion.div>
                        <motion.div className={styles.benefitCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <FaCity size={40} color="#10b981" />
                            <h3>Commercial Aesthetics</h3>
                            <p>Sleek, modern metal facades and roofing for commercial complexes and IT parks in Vashi and Belapur.</p>
                        </motion.div>
                    </div>

                    <section className={styles.technicalSection}>
                        <div className={styles.container}>
                            <h2>Our Navi Mumbai Service Portfolio</h2>
                            <div className={styles.techGrid}>
                                <div className={styles.techItem}>
                                    <h4>PUF Insulated Panels</h4>
                                    <p>Essential for reducing heat in Navi Mumbai's humid climate, lowering HVAC costs for factories.</p>
                                </div>
                                <div className={styles.techItem}>
                                    <h4>Structural Decking</h4>
                                    <p>High-load bearing decking sheets ideal for multi-story industrial units in dense zones.</p>
                                </div>
                                <div className={styles.techItem}>
                                    <h4>Gutter Systems</h4>
                                    <p>Oversized, custom-fabricated box gutters designed to handle Navi Mumbai's torrential downpours.</p>
                                </div>
                                <div className={styles.techItem}>
                                    <h4>Polycarbonate Skylights</h4>
                                    <p>Maximize natural light in warehouses while filtering out harmful UV radiation.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.faqSection}>
                        <h2>Roofing FAQs - Navi Mumbai</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>Do you work in all MIDC zones of Navi Mumbai?</h4>
                                <p>Yes, we have completed projects in Rabale, Mahape, Pawne, Turbhe, and Taloja MIDC areas.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>What is the best material for coastal areas like Vashi?</h4>
                                <p>For coastal belts, we recommend Galvalume (Al-Zinc alloy) or uPVC sheets which offer superior corrosion resistance compared to standard GI sheets.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Can you repair existing roofs without shutting down operations?</h4>
                                <p>Absolutely. We specialize in minimally invasive retrofitting and 'roof-over-roof' solutions that let your business continue uninterrupted.</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default NaviMumbaiRoofing;
