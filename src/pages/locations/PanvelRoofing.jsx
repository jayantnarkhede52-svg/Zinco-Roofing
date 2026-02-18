import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaTruck, FaWarehouse, FaExpandArrowsAlt, FaHelicopter } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/img2.png';
import styles from './LocationStyles.module.css';

const PanvelRoofing = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Industrial Roofing Specialists in Panvel | Warehousing"
                description="Industrial roofing experts for logistics parks and warehouses in Panvel, Taloja, and Uran. Large span structures and standing seam systems."
                keywords="industrial roofing panvel, warehouse roofing panvel, logistics park roofing, standing seam roof, heavy duty roofing"
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
                        <h1>Industrial Roofing Specialists in Panvel</h1>
                        <p>Serving the Logistics & Warehousing Hub of the Future - New Panvel, Taloja & Uran.</p>
                        <Button href="#contact" size="lg">Get Warehouse Quote</Button>
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
                            Roofing for Panvel's Logistics Revolution
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            With the upcoming Navi Mumbai International Airport and the expansion of JNPT commitments, Panvel is transforming into India's logistics capital. Large-scale warehousing requires roofing that offers expansive clear spans and zero leakage. <strong>Zinco Roofing Solution</strong> delivers industrial-grade roofing for the massive logistics parks and cold storage units rising in Panvel and Uran.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            We understand that in logistics, "downtime" is not an option. Our rapid-installation techniques using standing seam profiles ensuring that your warehouse is operational faster. We also specialize in implementing daylight harvesting systems that reduce electricity costs for large floor-plate facilities.
                        </motion.p>
                    </section>

                    <div className={styles.benefitGrid}>
                        <motion.div className={styles.benefitCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <FaWarehouse size={40} color="#3b82f6" />
                            <h3>Large Span Structures</h3>
                            <p>Expert installation of trussless and large-span roofing that maximizes internal volume for vertical racking systems.</p>
                        </motion.div>
                        <motion.div className={styles.benefitCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <FaTruck size={40} color="#f59e0b" />
                            <h3>Logistics Parks</h3>
                            <p>Durability tested for high-traffic zones. We service the major logistics hubs along the Mumbai-Pune Expressway.</p>
                        </motion.div>
                        <motion.div className={styles.benefitCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <FaExpandArrowsAlt size={40} color="#10b981" />
                            <h3>Future Expansion</h3>
                            <p>Scalable roofing designs that allow for easy expansion as your Panvel facility grows.</p>
                        </motion.div>
                    </div>

                    <section className={styles.technicalSection}>
                        <div className={styles.container}>
                            <h2>Technical Solutions for Warehousing</h2>
                            <div className={styles.techGrid}>
                                <div className={styles.techItem}>
                                    <h4>Standing Seam</h4>
                                    <p>Screw-less roofing systems that are 100% leakproof, perfect for protecting valuable cargo.</p>
                                </div>
                                <div className={styles.techItem}>
                                    <h4>Temperature Control</h4>
                                    <p>High-density PUF panels to maintain stable internal temperatures for pharmaceutical and cold chain storage.</p>
                                </div>
                                <div className={styles.techItem}>
                                    <h4>Wind Load Resistance</h4>
                                    <p>Engineered to withstand high wind speeds common in the open terrains near Panvel and Uran.</p>
                                </div>
                                <div className={styles.techItem}>
                                    <h4>Skylight Integration</h4>
                                    <p>Automated manufacturing of polycarbonate strips that integrate seamlessly with metal profiles.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.faqSection}>
                        <h2>Roofing FAQs - Panvel</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>Can you handle projects for large warehouses (1 lakh+ sq. ft.)?</h4>
                                <p>Yes, Zinco has the workforce and equipment to execute mega-projects efficiently within tight timelines.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Do you offer maintenance for logistics parks?</h4>
                                <p>We offer Annual Maintenance Contracts (AMC) specifically tailored for logistics parks to ensure gutters and sheets are clean and functional.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>How do you handle wind uplift in open areas like Panvel?</h4>
                                <p>We use specialized clips and high-grade fasteners calculated specifically based on the wind zone data of the Panvel region.</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default PanvelRoofing;
