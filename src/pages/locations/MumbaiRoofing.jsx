import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaWater, FaHome, FaTools, FaBuilding } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/img1.png'; // Using a different image
import styles from './LocationStyles.module.css';

const MumbaiRoofing = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Expert Roofing Contractors in Mumbai | Zinco"
                description="Complete waterproofing and roofing solutions for Mumbai. Specializing in terrace roofing, residential repairs, and commercial retrofitting."
                keywords="roofing contractors mumbai, waterproofing mumbai, terrace roofing, roof repair service, commercial roofing mumbai"
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
                        <h1>Expert Roofing Contractors in Mumbai</h1>
                        <p>Complete Waterproofing & Roofing Solutions for Mumbai's Residential Towers and Commercial Hubs.</p>
                        <Button href="#contact" size="lg">Contact Our Experts</Button>
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
                            Protecting Mumbai Against the Monsoon
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Mumbai's skyline is iconic, but its weather is relentless. With space constraints and some of the heaviest monsoons in the world, roofing in Mumbai requires a strategic approach. <strong>Zinco Roofing Solution</strong> specializes in urban roofing challenges. Whether it's retrofitting a metal roof on a heritage building in South Mumbai or installing a modern canopy for a suburban commercial complex, we deliver leakage-free results.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            We address the unique needs of Mumbai's infrastructure: protection from saline sea freeze, noise reduction from urban chaos, and absolute waterproofing. Our team utilizes advanced PUF panels and multi-layer coating systems to extend the life of your building.
                        </motion.p>
                    </section>

                    <div className={styles.benefitGrid}>
                        <motion.div className={styles.benefitCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <FaWater size={40} color="#3b82f6" />
                            <h3>100% Waterproofing</h3>
                            <p>Our "Double-Lock" seam technology ensures that not a drop of Mumbai's intense rain enters your premises.</p>
                        </motion.div>
                        <motion.div className={styles.benefitCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <FaHome size={40} color="#f59e0b" />
                            <h3>Terrace Roofing</h3>
                            <p>Transform your building terrace into a usable space with our aesthetic lightweight roofing structures.</p>
                        </motion.div>
                        <motion.div className={styles.benefitCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <FaTools size={40} color="#10b981" />
                            <h3>Urban Retrofitting</h3>
                            <p>Specialized handling for replacing old asbestos or GI roofs in congested Mumbai neighborhoods safely.</p>
                        </motion.div>
                    </div>

                    <section className={styles.technicalSection}>
                        <div className={styles.container}>
                            <h2>Solutions for Mumbai's Space Constraints</h2>
                            <div className={styles.techGrid}>
                                <div className={styles.techItem}>
                                    <h4>Acoustic Insulation</h4>
                                    <p>Roofing layers designed to dampen the sound of rain and city traffic, essential for Mumbai offices.</p>
                                </div>
                                <div className={styles.techItem}>
                                    <h4>Anti-Saline Coatings</h4>
                                    <p>PVDF coatings that resist salt corrosion, perfect for sea-facing properties in Worli or Versova.</p>
                                </div>
                                <div className={styles.techItem}>
                                    <h4>Ventilation Solutions</h4>
                                    <p>Turbo ventilators to exhaust hot, humid air from manufacturing units in Andheri and Goregaon.</p>
                                </div>
                                <div className={styles.techItem}>
                                    <h4>Compact Design</h4>
                                    <p>Space-saving structural designs that maximize coverage without overwhelming the building footprint.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.faqSection}>
                        <h2>Roofing FAQs - Mumbai</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>Do you provide services in South Mumbai and Suburbs?</h4>
                                <p>Yes, Zinco covers the entire Greater Mumbai area, from Colaba to Dahisar and Mulund.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Can you replace an asbestos roof safely?</h4>
                                <p>Yes, we follow strict safety protocols for dismantling and disposing of hazardous asbestos sheets before installing modern metal roofing.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>What is the warranty on your waterproofing?</h4>
                                <p>Our comprehensive roofing and waterproofing systems come with a warranty ranging from 10 to 25 years depending on the material grade.</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default MumbaiRoofing;
