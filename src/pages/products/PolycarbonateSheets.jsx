import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaSun, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import styles from './ProductCategory.module.css';

// Import local transparent polycarbonate images
import heroImg from '../../assets/productshero/polycarbonate-hero.png';
import polyImg1 from '../../assets/Transparent polycarbonate/Transparent polycarbonate/1000014018.jpg';
import polyImg2 from '../../assets/Transparent polycarbonate/Transparent polycarbonate/1000014352.jpg';
import polyImg3 from '../../assets/Transparent polycarbonate/Transparent polycarbonate/1000014425.jpg';
import polyImg4 from '../../assets/Transparent polycarbonate/Transparent polycarbonate/1000014445.png';

const PolycarbonateSheets = () => {
    const navigate = useNavigate();
    const galleryImages = [
        { src: polyImg1, title: 'Translucent Skylight' },
        { src: polyImg2, title: 'Daylighting Panel' },
        { src: polyImg3, title: 'Industrial Lighting' },
        { src: polyImg4, title: 'Structural Rib Profile' }
    ];
    const features = [
        'High Rib Profile (5 Main Crests & 3 Mini Ribs)',
        'Superior Spanning for Large Industrial Roofs',
        'High-Impact & Unbreakable Durability',
        'Co-extruded UV Protected Coating',
        'Available in Solid, Multiwall & Embossed',
        'Translucent Natural Lighting Solution'
    ];

    const specifications = [
        { label: 'Profile Type', value: 'High-Rib Trapezoidal' },
        { label: 'Crest Configuration', value: '5 Main Crests + 3 Mini Ribs' },
        { label: 'Transparency', value: '40% to 90% Light Transmission' },
        { label: 'Thickness', value: '2mm - 16mm available' },
        { label: 'Material Grade', value: 'Sabic / Bayer / Tuflite resins' },
        { label: 'UV Resistance', value: 'UV2 Double Side Protection' }
    ];

    const applications = [
        'Industrial Skylights in Taloja',
        'Long-Span Factory Roofing',
        'Infrastructure Projects Mumbai',
        'Commercial Walkways & Atriums',
        'Warehouse Natural Lighting',
        'Railway & Bus Terminals'
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
                title="High-Rib Polycarbonate Sheets in Navi Mumbai | Zinco"
                description="Unbreakable high-rib polycarbonate roofing sheets for industrial skylights in Taloja, Rabale, and Panvel. Superior light transmission and UV protection."
                keywords="polycarbonate sheets navi mumbai, high rib polycarbonate, industrial skylights, transparent roofing sheets"
            />
            <Helmet>
                <link rel="preload" as="image" href={heroImg} />
            </Helmet>
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
                            High-Rib Polycarbonate Sheets in Navi Mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Technically advanced high-rib polycarbonate profiles designed for superior structural strength and long-spanning capabilities.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <h2>Advanced High-Rib Polycarbonate: Revolutionizing Natural Lighting in Industrial Spaces</h2>
                            <p>
                                In the sprawling industrial sheds of **Taloja MIDC, Rabale, and Panvel**, energy costs for interior lighting can be a significant overhead. Zinco Roofing Solution's **High-Rib Polycarbonate Sheets** offer a sophisticated engineering solution that combines "unbreakable" structural strength with exceptional light transmission. Our sheets are designed to integrate seamlessly with standard metal roofing profiles, providing a durable skylight solution that transforms dark factory interiors into bright, productive work environments.
                            </p>
                            <p>
                                What sets our polycarbonate apart is the **5-crest high-rib profile**. Standard translucent sheets often struggle with spanning capabilities, requiring frequent purlin support to prevent sagging or wind damage. By adding 3 parallel mini ribs between the main 5 crests, we've created a sheet with superior rigidity. This structural reinforcement allows for wider spans and better load distribution, making them ideal for the heavy wind pressures and monsoon loads experienced in the **Navi Mumbai** region.
                            </p>

                            <h3>Material Science: UV Protection and Impact Resistance</h3>
                            <p>
                                Not all polycarbonate is created equal. Our sheets are manufactured using 100% virgin-grade resins from global leaders like **Sabic (Lexan) and Bayer (Makrolon)**. Each sheet features a co-extruded **UV-protected coating (UV2)** on both sides. This is a critical feature for the Indian climate—standard sheets without proper UV protection can become yellow and brittle in just a few years. Our UV-stabilized sheets maintain their clarity and high-impact strength for well over a decade, withstanding everything from intense solar radiation to falling debris or hailstorms.
                            </p>

                            <h3>Why Industrial Facilities Switch to High-Rib Polycarbonate</h3>
                            <ul>
                                <li><strong>90% Light Transmission:</strong> Maximize natural daylight while filtering out harmful UV rays, significantly reducing your electricity bills for daytime operations.</li>
                                <li><strong>Virtually Unbreakable:</strong> Polycarbonate is 250 times stronger than glass and 30 times stronger than acrylic, providing an "unbreakable" safety barrier for your facility.</li>
                                <li><strong>Thermal Stability:</strong> Despite being translucent, our sheets offer better thermal insulation than glass, helping maintain internal temperatures in climate-controlled warehouses.</li>
                                <li><strong>Weight Efficiency:</strong> Being lightweight despite its strength, polycarbonate is easy to install at height, reducing labor risks and structural load.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Product Showcase</h2>
                        <div className={styles.galleryGrid}>
                            {galleryImages.map((img, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.galleryItem}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <img src={img.src} alt={img.title} className={styles.galleryImage} loading="lazy" decoding="async" />
                                    <div className={styles.galleryOverlay}>
                                        <span>{img.title}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Technical Profile Specifications</h2>
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
                        <h2>Core Advantages</h2>
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
                        <h2>Common Infrastructure Uses</h2>
                        <div className={styles.applicationsGrid}>
                            {applications.map((app, index) => (
                                <Card key={index} variant="solid" className={styles.appCard}>
                                    <FaSun style={{ color: 'var(--accent-500)', marginBottom: '0.5rem' }} />
                                    <h4>{app}</h4>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Maintenance and Operational Clarity</h2>
                        <div className={styles.contentBlock}>
                            <p>
                                To maintain maximum light transmission, we recommend a simple annual cleaning with mild soapy water and a soft cloth. This removes the industrial soot and dust buildup common in areas like **Taloja MIDC**. The UV-protected surface is designed to be "slick," meaning dirt washes off easily during the monsoon, keeping your factory naturally bright with minimal effort.
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
                                <h4>Are polycarbonate sheets fire-safe?</h4>
                                <p>Yes, our polycarbonate sheets are self-extinguishing. They have a high ignition temperature and do not support the spread of flames, making them compliant with most industrial fire safety regulations in Maharashtra.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Can these sheets withstand heavy hailstorms?</h4>
                                <p>Absolutely. Polycarbonate is renowned for its impact resistance. It is often referred to as "unbreakable" in roofing applications and can easily withstand hailstones and other small falling objects without cracking.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>How do I prevent leaks at the joints with metal sheets?</h4>
                                <p>Our polycarbonate sheets are designed to mirror the exact profiles of our metal sheets. When installed with proper EPDM-backed washers and neutral-cure silicone sealants, they create a perfect, watertight seal at the overlaps.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>What is the expected lifespan of these sheets?</h4>
                                <p>When properly installed and maintained, our high-grade UV-coated polycarbonate sheets are designed to last 15-20 years. We use only premium resins to ensure that "yellowing" and brittleness are virtually eliminated over the product's life.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Need High-Strength Natural Lighting?</h3>
                            <p>Get best prices for High-Rib Polycarbonate Sheets in Navi Mumbai.</p>
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

export default PolycarbonateSheets;
