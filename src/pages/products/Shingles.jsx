import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImg from '../../assets/productshero/shingles-hero.png';
import styles from './ProductCategory.module.css';

const Shingles = () => {
    const navigate = useNavigate();
    const features = [
        'Premium Aesthetic Look for Villas',
        'Excellent Weather Resistance',
        'Impact & Fire Resistant',
        'Long Service Life (20+ Years)',
        'Low Maintenance Roofing Solution',
        'Versatile Design & Color Options'
    ];

    const specifications = [
        { label: 'Material', value: 'Fiberglass Asphalt Shingles' },
        { label: 'Style', value: '3-Tab / Architectural / Laminate' },
        { label: 'Weight', value: '10kg - 13kg per m²' },
        { label: 'Warranty', value: '20 - 50 Years' },
        { label: 'Installation', value: 'Self-Adhesive with Nails' },
        { label: 'Regions', value: 'Mumbai, Lonavala, Karjat' }
    ];

    const applications = [
        'Villas in Lonavala & Khandala',
        'Bungalows in Karjat & Alibaug',
        'Resorts in Navi Mumbai',
        'Sloped Roof Houses in Mumbai',
        'Farmhouses in Panvel',
        'Institutional Buildings'
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className={styles.productPage}>
            <div className={styles.hero} style={{ '--hero-image': `url(${heroImg})` }} fetchpriority="high">
                <div className={styles.heroOverlay} />
                <div className={styles.container}>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <button onClick={() => navigate(-1)} className={styles.backLink} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                            <FaArrowLeft /> Back to Products
                        </button>
                        <motion.span className={styles.sublabel} variants={itemVariants}>
                            PRECISION & DURABILITY
                        </motion.span>
                        <motion.h1 variants={itemVariants}>
                            Premium Roofing Shingles in Mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Elevate your property aesthetics with durable and climate-ready asphalt shingles.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <h2>Timeless Elegance & Industrial Protection: Premium Roofing Shingles</h2>
                            <p>
                                In the picturesque locations of **Lonavala, Karjat, Alibaug, and the premium outskirts of Navi Mumbai**, the roof is the crowning glory of any villa or resort. Zinco Roofing Solution's **Premium Asphalt Shingles** offer a unique combination of aesthetic sophistication and multi-layered weather protection. Unlike traditional clay tiles that can be heavy and prone to breakage, shingles provide a lightweight, high-performance solution that mimics the texture and beauty of natural materials while providing modern durability.
                            </p>
                            <p>
                                Our shingles are not just a single layer; they are a composite system designed for the extremes. At the core is a **high-strength fiberglass mat** that provides structural stability and fire resistance. This mat is saturated on both sides with **weathering-grade asphalt**, which acts as the primary waterproofing barrier. The final touch is a layer of **ceramic-coated mineral granules** that shield the asphalt from destructive UV radiation and provide the vibrant, fade-resistant colors that characterize a premium shingle roof.
                            </p>

                            <h3>The Science of Self-Sealing and Wind Resistance</h3>
                            <p>
                                One of the most technologically advanced features of our shingles is the **thermal-active self-sealing strip**. During installation in the sunny climate of **Maharashtra**, the heat of the sun activates a specialized adhesive on the underside of each shingle, bonding it permanently to the course below. This creates a continuous, unified waterproofing membrane that is virtually immune to wind uplift. Our architectural shingles are tested to withstand wind speeds of up to **130-150 kmph**, making them ideal for the gusty monsoon seasons in the Western Ghats.
                            </p>

                            <h3>Why Architects in Mumbai Prefer Shingles for Luxury Projects</h3>
                            <ul>
                                <li><strong>Unmatched Aesthetic Depth:</strong> The multi-layered "laminate" design of our architectural shingles creates a 3D effect with deep shadow lines, adding character and value to bungalows in **Khandala and Alibaug**.</li>
                                <li><strong>Superior Impact Resistance:</strong> Shingles are naturally resilient. Unlike rigid tiles, they can absorb the impact of falling branches or hailstones common in the Sahyadri ranges without cracking or shattering.</li>
                                <li><strong>Excellent Sound Insulation:</strong> The multi-layered asphalt and mineral composition acts as a natural sound dampener. During heavy Mumbai rain, a shingle roof is significantly quieter than metal or clay, provided a peaceful interior for resorts.</li>
                                <li><strong>Low Maintenance & Longevity:</strong> With warranties ranging from 20 to 50 years, shingles are truly a "fit and forget" solution. They are resistant to algae growth and do not require periodic painting or sealing.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Technical Specifications</h2>
                        <Card variant="glass">
                            <div className={styles.specsTable}>
                                {specifications.map((spec, index) => (
                                    <div key={index} className={styles.specRow}>
                                        <div className={styles.specLabel}>{spec.label}</div>
                                        <div className={styles.specValue}>{spec.value}</div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </section>

                    <section className={styles.section}>
                        <h2>Why Choose Zinco Shingles?</h2>
                        <div className={styles.featuresGrid}>
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.featureItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <FaCheckCircle className={styles.checkIcon} />
                                    <span>{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Key Service Areas</h2>
                        <div className={styles.applicationsGrid}>
                            {applications.map((app, index) => (
                                <Card key={index} variant="solid" className={styles.appCard}>
                                    <FaMapMarkerAlt style={{ color: 'var(--accent-500)', marginBottom: '0.5rem' }} />
                                    <h4>{app}</h4>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Installation and Substrate Integrity</h2>
                        <div className={styles.contentBlock}>
                            <p>
                                The performance of a shingle roof depends on the quality of the substrate. At Zinco, we recommend a solid deck of water-resistant plywood or cement board, covered by a high-quality **underlayment membrane**. This dual-layer system ensures that your villa in **Panvel or Navi Mumbai** remains 100% leak-proof even in the face of continuous torrential rainfall.
                            </p>
                        </div>
                    </section>

                    <motion.section
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Frequently Asked Questions</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>Can shingles be installed over an existing roof?</h4>
                                <p>While possible (roof-over), we generally recommend a complete tear-off of the old material to inspect the underlying deck. This ensures a perfectly flat and secure base for your new shingles.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Are shingles suitable for the high heat of Mumbai?</h4>
                                <p>Absolutely. Modern asphalt shingles are engineered to handle thermal expansion and contraction. The mineral granules reflect a significant portion of UV energy, preventing the asphalt from degrading even in intense summer heat.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Do shingles encourage the growth of moss or algae?</h4>
                                <p>Our premium shingles are treated with copper-infused granules during manufacturing. This creates an environment that inhibits the growth of "blue-green" algae, keeping your roof looking clean for years.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>What's the difference between 3-Tab and Architectural shingles?</h4>
                                <p>3-Tab shingles are flat and single-layered, offering a clean, traditional look. Architectural (or Laminate) shingles are thicker, multi-layered, and provide a more textured, premium 3D appearance with higher wind ratings.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Ready to Transform Your Roof?</h3>
                            <p>Get expert consultation and a free quote for shingle installation.</p>
                            <div className={styles.ctaButtons}>
                                <Button size="lg" href="/contact">Get Quote</Button>
                                <Button size="lg" variant="outline" href="tel:+919967203090">Call Now</Button>
                            </div>
                        </Card>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Shingles;
