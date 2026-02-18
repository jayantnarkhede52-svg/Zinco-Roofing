import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaIndustry, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/services-hero.png';
import styles from './ProductCategory.module.css';

const PVCUPVCSheets = () => {
    const navigate = useNavigate();
    const features = [
        'Chemical Resistant Roofing Mumbai',
        'Anti-Corrosion Sheets Panvel',
        'Heat Insulation UPVC Sheets',
        'Long-Lasting in Coastal Air',
        'Sound Proofing for Factories',
        'Available in Taloja MIDC'
    ];

    const specifications = [
        { label: 'Material', value: 'UPVC / PVC Resin (ASA Coated)' },
        { label: 'Thickness', value: '1.5mm - 3.0mm' },
        { label: 'Suitability', value: 'Chemical & Coastal Zones' },
        { label: 'Width', value: '1130mm (Effective 1050mm)' },
        { label: 'Color', value: 'White / Blue / Terracotta' },
        { label: 'Warranty', value: '10-20 Years' }
    ];

    const applications = [
        'Chemical Factories in Taloja',
        'Fertilizer Plants in Rasayani',
        'Coastal Warehouses inside JNPT',
        'Electroplating Units Mumbai',
        'Ceramic Industries',
        'Animal Farms in Panvel'
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
            <SEO
                title="PVC & UPVC Roofing Sheets in Mumbai & Panvel"
                description="Corrosion-proof UPVC roofing sheets for chemical industries in Taloja, Rasayani, and coastal areas. Heat-resistant and durable."
                keywords="upvc roofing sheets, pvc roofing, chemical resistant roofing, plastic roofing sheets mumbai"
            />
            <Helmet>
                <link rel="preload" as="image" href={heroImage} />
            </Helmet>
            <div className={styles.hero} style={{ '--hero-image': `url(${heroImage})` }} fetchpriority="high">
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
                            PVC & UPVC Roofing Sheets in Mumbai & Panvel
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Specialized corrosion-free plastic roofing sheets for chemical industries and coastal areas in Navi Mumbai.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <h2>Superior Anti-Corrosion Solutions: UPVC Roofing Sheets in Mumbai's Industrial Belt</h2>
                            <p>
                                In the intense industrial environments of **Taloja MIDC, Panvel, and Rasayani**, standard metal roofing often faces a short lifespan. The combination of industrial chemical fumes and the salt-laden air from the Arabian Sea creates a highly corrosive atmosphere that can eat through traditional steel sheets in just a few seasons. Zinco Roofing Solution's **PVC and UPVC Roofing Sheets** are the ultimate answer to these challenges, providing a 100% rust-proof alternative that delivers decades of service.
                            </p>
                            <p>
                                UPVC (Unplasticized Polyvinyl Chloride) is not just "plastic." High-performance UPVC is a complex, multi-layered material engineered for structural integrity. Our **UPVC sheets in Mumbai** are manufactured using a co-extrusion process that bonds multiple layers together, with the top layer being treated with **ASA (Acrylonitrile Styrene Acrylate)**. This high-standard resin coating provides extreme UV resistance, ensuring the sheets don't become brittle or lose their color even under the relentless Mumbai sun.
                            </p>

                            <h3>The Science of ASA Coating and Heat Insulation</h3>
                            <p>
                                One of the primary advantages of UPVC over metal is its natural thermal insulation. Metal sheets act as conductors, radiating heat directly into the facility below. In contrast, our UPVC sheets have a low thermal conductivity, significantly reducing the temperature inside warehouses in **Panvel and JNPT** by up to 5-8°C during peak summer months. This thermal stability not only improves worker productivity but also protects temperature-sensitive chemicals and inventories.
                            </p>

                            <h3>Why Industrialists Prefer UPVC in Navi Mumbai</h3>
                            <ul>
                                <li><strong>100% Corrosion Proof:</strong> Unlike metal, UPVC is completely unaffected by acid rain, industrial vapors, and coastal salt air. It is the gold standard for chemical storage and fertilizer plants.</li>
                                <li><strong>Superior Sound Insulation:</strong> UPVC has excellent acoustic dampening properties. During heavy Mumbai rain, the "drumming" sound typical of metal roofs is virtually eliminated, creating a quieter, more focused work environment.</li>
                                <li><strong>Lightweight & Safety:</strong> Being significantly lighter than metal, these sheets place less stress on the structural frame. They are also non-conductive, providing an extra layer of electrical safety for industrial facilities.</li>
                                <li><strong>Self-Cleaning Properties:</strong> The high-gloss ASA finish allows smooth water flow and prevents dust buildup, meaning a simple rain shower often performs most of the cleaning for you.</li>
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
                        <h2>Why Use UPVC in Mumbai's Coastal Climate?</h2>
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
                        <h2>Ideal Applications</h2>
                        <div className={styles.applicationsGrid}>
                            {applications.map((app, index) => (
                                <Card key={index} variant="solid" className={styles.appCard}>
                                    <FaIndustry style={{ color: 'var(--accent-500)', marginBottom: '0.5rem' }} />
                                    <h4>{app}</h4>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Installation and Long-Term Value</h2>
                        <div className={styles.contentBlock}>
                            <p>
                                While the initial cost of premium UPVC might be slightly higher than entry-level metal sheets, the long-term ROI is undeniable. In corrosive chemical zones, metal roofs may require replacement every 5-7 years, whereas our **UPVC sheets in Panvel** are designed for a 15-25 year lifespan. The elimination of maintenance painting and the reduction in cooling costs make UPVC the most cost-effective choice for long-term industrial assets.
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
                                <h4>Are UPVC sheets strong enough for industrial spans?</h4>
                                <p>Yes! Our UPVC sheets are designed with specialized rib heights and material density to provide high structural strength. While purlin spacing requirements differ slightly from metal, they are fully capable of handling standard wind loads in the Mumbai metropolitan region.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Do the sheets change color or fade over time?</h4>
                                <p>Thanks to the high-grade ASA top layer, our sheets are color-stable. While any material exposed to extreme sun for 20 years may see very slight tonal shifts, there is no significant fading, "chalking," or loss of aesthetic appeal.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Can UPVC be used for animal farms or hatcheries?</h4>
                                <p>Absolutely. UPVC is widely used in Panvel and rural outskirts for livestock farming because it doesn't corrode from ammonia vapors (common in animal waste) and keeps the animals cooler and more comfortable.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>What is the fire rating of your UPVC sheets?</h4>
                                <p>Our UPVC sheets are formulated with fire-retardant additives. They are self-extinguishing and do not support combustion, meeting the standard B1 fire safety requirements for many industrial facilities.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Corrosion Problems? Switch to UPVC.</h3>
                            <p>Get expert advice for your factory roofing in Mumbai.</p>
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

export default PVCUPVCSheets;
