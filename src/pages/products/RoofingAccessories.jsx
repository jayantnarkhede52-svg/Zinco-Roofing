import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaWrench, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/services-hero.webp';
import styles from './ProductCategory.module.css';

const RoofingAccessories = () => {
    const navigate = useNavigate();
    const features = [
        'Roofing Accessories Shop Panvel',
        'Custom Gutters Navi Mumbai',
        'Color Coated Ridges Mumbai',
        'leak-proof Fasteners Taloja',
        'Polycarbonate Trims Vashi',
        'Anti-Corrosion Screws'
    ];

    const products = [
        { label: 'Ridge Caps', desc: 'Roof apex sealing for heavy Mumbai rains' },
        { label: 'Rainwater Gutters', desc: 'High capacity drainage for monsoons' },
        { label: 'Flashings', desc: 'Leak-proof joints for coastal winds' },
        { label: 'SD Screws', desc: 'Rust-proof fasteners for humid areas' },
        { label: 'Turbo Vents', desc: 'Industrial ventilation solutions' },
        { label: 'Sealants', desc: 'Silicone sealants for waterproofing' }
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
                title="Roofing Accessories Supplier in Navi Mumbai & Panvel"
                description="Complete range of roofing accessories: ridges, gutters, turbo ventilators, and fasteners available in Panvel, Taloja, and Vashi."
                keywords="roofing accessories, turbo ventilators, gutters, roofing screws, ridges"
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
                            Roofing Accessories Supplier Navi Mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Complete range of high-quality roofing components available in Panvel, Taloja, and Vashi.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <h2>The Essential Backbone: Why Roofing Accessories Matter</h2>
                            <p>
                                A common misconception in the construction industry is that the durability of a roof depends solely on the quality of the sheets. However, at Zinco Roofing Solution, we know that a roof is only as strong as its weakest joint. Our **Roofing Accessories**, available across **Panvel, Taloja, and Navi Mumbai**, are designed to provide the critical sealing and structural support that transforms a simple metal shed into a high-performance industrial asset.
                            </p>
                            <p>
                                Whether you're dealing with the heavy monsoons of the Mumbai coast or the intense heat of the Maharashtra interior, our accessories ensure that every ridge, valley, and edge is perfectly sealed. We manufacture our primary accessories from the same high-grade **PPGI (Pre-Painted Galvanized Iron)** and **PPGL (Pre-Painted Galvalume)** as our roofing sheets, ensuring a perfect color match and consistent thermal expansion properties throughout your building's envelope.
                            </p>

                            <h3>Ridge Caps & Valleys: Sealing the Peaks</h3>
                            <p>
                                The ridge is the most vulnerable part of any roof. Our **Plain and Formed Ridges** are precision-bent to match the exact profile of your roofing sheets, preventing wind-driven rain from entering the apex of the structure. In areas like **Taloja MIDC**, where industrial buildings often have complex geometries, we provide custom-tailored flashing solutions that bridge the gaps between different roof levels and chimney penetrations.
                            </p>

                            <h3>High-Capacity Rainwater Systems</h3>
                            <p>
                                Effective drainage is life or death for an industrial roof. Our **Rainwater Gutters** are designed with high-volume profiles to handle the sudden, intense downpours of the Western Ghats. We offer gutters in various materials, including color-coated metal and high-impact polymers, often accompanied by custom-fabricated downspouts and brackets designed to withstand high wind loads at height.
                            </p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Our Product Range</h2>
                        <div className={styles.applicationsGrid}>
                            {products.map((prod, index) => (
                                <Card key={index} variant="solid" className={styles.appCard}>
                                    <h4>{prod.label}</h4>
                                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--gray-400)' }}>{prod.desc}</p>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Available Locations</h2>
                        <div className={styles.featuresGrid}>
                            {['Panvel', 'Taloja MIDC', 'Navi Mumbai', 'Vashi', 'Belapur', 'Thane'].map((loc, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.featureItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <FaMapMarkerAlt className={styles.checkIcon} />
                                    <span>{loc}</span>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Fastening Systems and Sealing</h2>
                        <div className={styles.contentBlock}>
                            <p>
                                We use and supply only the highest grade of **Self-Drilling Screws (SDS)**, featuring specialized anti-corrosion coatings (Class 3 or Class 4) that outlast standard zinc-plated fasteners by decades. These screws are paired with EPDM (Ethylene Propylene Diene Monomer) washers, which provide a permanent, flexible seal that expands and contracts with the metal, preventing the "vibration leaks" common in cheaper installations.
                            </p>
                            <p>
                                For critical joints, we utilize high-performance **Neutral Cure Silicone Sealants**. Unlike standard acidic sealants, these do not cause corrosion in the metal sheets and maintain their bond even under the intense UV radiation experienced in open industrial hubs like **Panvel**.
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
                                <h4>Can I order custom-bent flashings for my project?</h4>
                                <p>Yes! We have advanced bending and folding machinery on-site and at our factory. We can create custom flashings, gutters, and trims based on your dimensions, ensuring a perfect fit for even the most unique architectural designs.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>How do I know which fasteners are right for my location?</h4>
                                <p>In coastal areas like **Navi Mumbai or Vashi**, we strictly recommend Class 3 or Class 4 galvanized fasteners with a minimum coating thickness of 25 microns to prevent premature rust. Our technical team can advise on the exact fastener density (screws per square meter) based on your local wind-speed profile.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Do your gutters come with a warranty?</h4>
                                <p>Our metal gutters carry the same coating warranty as our roofing sheets. When installed as a complete system by Zinco-approved professionals, we stand of the durability and leak-proof performance of our entire accessory range.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Are Turbo Ventilators compatible with all roof types?</h4>
                                <p>Yes, we provide specialized adaptor plates (base plates) that allow our high-performance industrial ventilators to be installed on any profile, including trapezoidal steel, UPVC, or even asbestos-replacement sheets.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Order Your Roofing Kit Today</h3>
                            <p>Complete range of Ridges, Gutters, and Screws available in Mumbai.</p>
                            <div className={styles.ctaButtons}>
                                <Button size="lg" href="/contact">Order Now</Button>
                                <Button size="lg" variant="outline" href="tel:+919967203090">Call Now</Button>
                            </div>
                        </Card>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default RoofingAccessories;
