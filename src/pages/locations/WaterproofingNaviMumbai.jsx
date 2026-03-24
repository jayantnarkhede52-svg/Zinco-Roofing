import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaShieldAlt, FaUmbrella, FaWater, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import LocationMap from '../../components/shared/LocationMap';
import heroImage from '../../assets/locations/waterproofing_hero.png';
import thumbImage from '../../assets/locations/waterproofing_thumb.png';
import panvelImg1 from '../../assets/Metal roofing images/Metal roofing images/1000014010.webp';
import panvelImg2 from '../../assets/Upvc images/Upvc images/1000014135.webp';
import styles from './LocationStyles.module.css';
import LocationServiceCards from '../../components/shared/LocationServiceCards';
import AreaLinks from '../../components/shared/AreaLinks';

const WaterproofingNaviMumbai = () => {
    const mobileHighlights = [
        {
            title: "Leak Prevention",
            desc: "Advanced liquid membranes blocking 100% of moisture ingress.",
            icon: <FaUmbrella />
        },
        {
            title: "Industrial Grade",
            desc: "Heavy-duty protective coatings for massive warehouse roofs.",
            icon: <FaShieldAlt />
        },
        {
            title: "Rapid Execution",
            desc: "Professional site audits and flawless surface application.",
            icon: <FaWater />
        }
    ];

    return (
        <div className={styles.locationPage}>
            <SEO
                title="Industrial roof waterproofing in navi mumbai | Zinco Roofing"
                description="Expert roof waterproofing in navi mumbai. We provide advanced liquid membranes and leak prevention for factory sheds and commercial roofs."
                keywords="roof waterproofing in navi mumbai, industrial waterproofing, leak prevention navi mumbai, roof coating experts"
                canonicalUrl="https://www.zincoroof.com/waterproofing-in-navi-mumbai"
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
                        <h1>Expert roof waterproofing in navi mumbai</h1>
                        <p>Delivering high-performance, long-lasting moisture barriers and structural protection for massive industrial projects using advanced techniques.</p>
                        <div className={styles.heroButtons}>
                            <Link to="/products/pvc-upvc-sheets" className={styles.heroBtn}>Explore Waterproof Sheets</Link>
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
                        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            Advanced Solutions for Leak Prevention
                        </motion.h2>
                        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            Monsoon rains demand resilient infrastructure. The ultimate defense against water damage is professional moisture control. Industrial zones and logistics parks often utilize large-scale metal structures that require meticulous protection. By applying state-of-the-art liquid membranes, our quality sealants ensure assets remain dry and structurally sound for years.
                        </motion.p>
                        <p>
                            Facility managers prioritize dry interiors to prevent equipment corrosion and inventory loss. Engaging top-tier services for commercial roofing eliminates costly moisture issues. From factory floors to expansive warehousing operations, our specialized coating systems provide unparalleled structural safety. Partnering with Zinco Roofing means your facility benefits from proven leak prevention methods and field-tested industrial coatings.
                        </p>
                        <p>
                            Our service extends across the entire MMR region, covering major industrial hubs from Rabale to Taloja and beyond. We provide high-durability solutions that specifically address the unique humidity challenges faced by coastal facilities in Maharashtra. Each project undergoes a rigorous multi-point inspection to ensure that every edge, fastener, and ridge is perfectly secondary-sealed for maximum operational uptime.
                        </p>
                    </motion.section>

                    <LocationServiceCards location="Navi Mumbai" />

                    <motion.section 
                        className={styles.twoColumn}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.textContent}>
                            <h2>Strategic Waterproofing Excellence</h2>
                            <p>
                                Heavy rainfall creates unique challenges for commercial roofs. As dedicated providers of moisture protection, we utilize specialized coatings for better stability.
                            </p>
                            <p>
                                Our reputation for quality is built on technical precision. When you invest in advanced **roof waterproofing in navi mumbai**, you benefit from systems rigorously tested for extreme weather.
                            </p>
                            <p>
                                Discover high-performance materials optimized for superior durability. Check out our <Link style={{color: 'var(--accent-color)', fontWeight: 'bold'}} to="/products/synthetic-roof">Synthetic Roofs</Link> for top moisture resistance.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={thumbImage} alt="waterproofing in navi mumbai" loading="lazy" />
                        </div>
                    </motion.section>

                    <motion.section 
                        className={styles.twoColumn}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.imageBlock}>
                            <img src={panvelImg2} alt="waterproofing in navi mumbai" loading="lazy" />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Reliable Liquid Membrane Applications</h2>
                            <p>
                                Temperature fluctuations can compromise standard seals. Our energy-efficient panels paired with robust protective barriers reduce structural fatigue over time.
                            </p>
                            <p>
                                Trust our professional site audits. We prioritize durability and safety across every project involving advanced coatings. Check out <Link style={{color: 'var(--accent-color)', fontWeight: 'bold'}} to="/products">all our products</Link> to see how they integrate.
                            </p>
                        </div>
                    </motion.section>

                    {/* Technical Specification Section */}
                    <section className={`${styles.technicalSection} ${styles.darkMode} ${styles.desktopOnly}`}>
                        <h2>Technical Standards for Waterproofing Mastery</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.techTable}>
                                <thead>
                                    <tr>
                                        <th>Application Category</th>
                                        <th>Material Grade</th>
                                        <th>Resistance</th>
                                        <th>Industrial Benefit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Liquid Membranes</td>
                                        <td>Polyurethane Hybrid</td>
                                        <td>UV & Water</td>
                                        <td>Seamless finish</td>
                                    </tr>
                                    <tr>
                                        <td>UPVC Layering</td>
                                        <td>Multi-Layer Co-extruded</td>
                                        <td>Chemical Corrosives</td>
                                        <td>Will not rust</td>
                                    </tr>
                                    <tr>
                                        <td>Fastener Shielding</td>
                                        <td>EPDM Rubber Washers</td>
                                        <td>Thermal Expansion</td>
                                        <td>Prevents micro-leaks</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Maintenance Section */}
                    <section className={styles.maintenanceSection}>
                        <div className={styles.infoCard}>
                            <h3>Proactive Maintenance Advice</h3>
                            <p>
                                As experts in industrial protection, we highly recommend annual evaluations to spot emerging cracks or seal degradation before monsoons arrive.
                            </p>
                            <div className={styles.maintenanceGrid}>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Gutter Clearance</strong>: Vital for proper drainage.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Flashing Check</strong>: The most common leak origin.</span>
                                </div>
                                <div className={styles.mItem}>
                                    <FaCheckCircle className={styles.icon} />
                                    <span><strong>Membrane Health</strong>: Ensure no UV blistering.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <AreaLinks currentLocation="Navi Mumbai" />

                    {/* Final CTA */}
                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h2>Partner with the Best in Industrial Sealing</h2>
                            <p>Secure your logistics assets with expert engineering and zero leaks. Our team is ready for your site audit for professional results.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact#contact-form" className={styles.primaryBtn}>Request a Technical Audit</Link>
                                <button className={styles.secondaryBtn}>View Our Projects</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <LocationMap title="Navi Mumbai Waterproofing" query="Navi Mumbai, Maharashtra" />
        </div>
    );
};

export default WaterproofingNaviMumbai;
