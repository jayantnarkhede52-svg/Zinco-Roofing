import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCity, FaUmbrella, FaLeaf, FaBuilding } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/img3.png';
import styles from './LocationStyles.module.css';

const ThaneRoofing = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Top Roofing Company in Thane | Commercial & Industrial"
                description="Advanced roofing solutions for Thane's Wagle Estate, Ghodbunder Road, and residential complexes. Waterproofing and eco-friendly roofing."
                keywords="roofing company thane, wagle estate roofing, commercial roofing thane, waterproofing thane, residential roofing"
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
                        <h1>Top Roofing Company in Thane</h1>
                        <p>Advanced Roofing Solutions for Thane's Commercial Complexes, Wagle Estate & Ghodbunder Road.</p>
                        <Button href="#contact" size="lg">Get Free Consultation</Button>
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
                            Sustainable Roofing for the Lake City
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Thane has evolved from a satellite town into a bustling metropolis with premium residential townships and the busy manufacturing hub of Wagle Estate. Roofing in Thane demands a balance of aesthetic appeal and heavy-duty performance. <strong>Zinco Roofing Solution</strong> provides comprehensive roofing services that cater to Thane’s rapid urbanization.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            We are experts in upgrading aging industrial units in Wagle Estate to modern standards, as well as providing waterproofing solutions for new commercial towers on Ghodbunder Road. Our solutions are designed to handle Thane's heavy rainfall, ensuring dry, safe, and productive interiors year-round.
                        </motion.p>
                    </section>

                    <div className={styles.benefitGrid}>
                        <motion.div className={styles.benefitCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <FaCity size={40} color="#3b82f6" />
                            <h3>Wagle Estate Experts</h3>
                            <p>Specialized renovation packages for older industrial galas and factories in Thane’s Wagle Industrial Estate.</p>
                        </motion.div>
                        <motion.div className={styles.benefitCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <FaUmbrella size={40} color="#f59e0b" />
                            <h3>Heavy Monsoon Protection</h3>
                            <p>Thane receives significant rainfall. Our waterproofing guarantees 100% protection against leakage and seepage.</p>
                        </motion.div>
                        <motion.div className={styles.benefitCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <FaLeaf size={40} color="#10b981" />
                            <h3>Eco-Friendly Options</h3>
                            <p>Green roofing and solar-ready structures for the environmentally conscious townships of Thane.</p>
                        </motion.div>
                    </div>

                    <section className={styles.technicalSection}>
                        <div className={styles.container}>
                            <h2>Thane Service Highlights</h2>
                            <div className={styles.techGrid}>
                                <div className={styles.techItem}>
                                    <h4>Color Coated Sheets</h4>
                                    <p>Vibrant, long-lasting color roofs that enhance the visual appeal of commercial complexes.</p>
                                </div>
                                <div className={styles.techItem}>
                                    <h4>Self-Supporting Roofs</h4>
                                    <p>Truss-less roofing technology for sports complexes and auditoriums in Thane.</p>
                                </div>
                                <div className={styles.techItem}>
                                    <h4>Roof Ventilation</h4>
                                    <p>Automated vents and ridges to maintain air quality in manufacturing units.</p>
                                </div>
                                <div className={styles.techItem}>
                                    <h4>Safety Walkways</h4>
                                    <p>Installation of aluminum walkways for safe maintenance access on high-rise roofs.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.faqSection}>
                        <h2>Roofing FAQs - Thane</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>Do you undertake residential projects in Thane?</h4>
                                <p>Yes, we provide roofing solutions for bungalows, row houses, and terrace waterproofing for societies in Thane.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>How quickly can you attend to emergency leaks?</h4>
                                <p>We have a dedicated rapid response team in Thane that can attend to emergency leakage issues during monsoons.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Are your materials suitable for chemical factories in Wagle Estate?</h4>
                                <p>Yes, we use specific coating grades like SMP and PVDF that are resistant to mild chemical fumes found in industrial zones.</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default ThaneRoofing;
