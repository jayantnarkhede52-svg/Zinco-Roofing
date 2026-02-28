import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/services-hero.webp';
import styles from './ProductCategory.module.css';

const MetalTileSheet = () => {
    const navigate = useNavigate();
    const features = [
        'Mangalore Tile Aesthetic with Steel Strength',
        'Lightweight - Reduces Structural Load',
        '100% Water Tight & Leak Proof',
        'UV Resistant High-Quality Paint',
        'Eco-friendly & Fully Recyclable',
        'Fast & Easy Installation'
    ];

    const specifications = [
        { label: 'Material', value: 'Pre-painted Galvalume / Galvanized' },
        { label: 'Width', value: '1100mm (Overall) / 1000mm (Effective)' },
        { label: 'Thickness', value: '0.40mm - 0.60mm' },
        { label: 'Coating', value: 'Al-Zn Alloy / Zinc Coating' },
        { label: 'Tile Step', value: '250mm - 300mm' },
        { label: 'Finishes', value: 'Glossy / Matte / Texture' }
    ];

    const applications = [
        'Resorts in Alibaug & Konkan',
        'School & College Buildings',
        'Traditional Style Villas',
        'Residential Extensions',
        'Public Pavilions & Parks',
        'Farmhouses in Panvel'
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
                title="Metal Tile Sheets in Navi Mumbai | Zinco"
                description="Aesthetic metal tile roofing sheets for resorts and bungalows in Alibaug, Panvel, and Konkan. Lightweight, leak-proof, and durable tile profile."
                keywords="metal tile sheets, mangalore tile profile, metal roofing tiles, resort roofing alibaug"
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
                            Metal Tile Sheets in Navi Mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            The classic beauty of clay tiles with the modern durability of steel.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <h2>Heritage Style Meets Modern Strength: The Metal Tile Revolution</h2>
                            <p>
                                In the coastal beauty of **Alibaug, the Konkan region, and the residential pockets of Panvel**, architectural heritage is often defined by the classic Mangalore tile roof. However, traditional clay tiles come with challenges—they are heavy, fragile, and often require expensive structural reinforcement. Zinco Roofing Solution's **Metal Tile Sheets** provide the perfect harmony between classic aesthetics and high-performance steel technology. Our sheets capture the undulating charm of traditional tiles while delivering the 100% leak-proof security of a modern metal roof.
                            </p>
                            <p>
                                Manufactured from premium **Pre-painted Galvalume or Galvanized steel**, our metal tiles are engineered to survive the most punishing tropical weather. The multi-layered coating system, featuring an **Aluminum-Zinc alloy**, provides up to four times the corrosion resistance of standard galvanized steel. This is a critical advantage for resorts and bungalows located near the salt-laden air of the Arabian Sea. The high-quality top coat is UV-stabilized, ensuring that the vibrant reds, oranges, and earthy tones of your roof won't fade or peel under the intense Indian sun.
                            </p>

                            <h3>Structural Efficiency and Rapid Installation</h3>
                            <p>
                                One of the most compelling reasons to switch to metal tiles is weight reduction. A traditional clay tile roof can weigh between 40-50 kg per square meter, placing immense stress on the supporting structure. In contrast, our **metal tile sheets in Navi Mumbai** weigh only about 5-7 kg per square meter. This staggering 85% reduction in weight allows architects to design lighter, more cost-effective wooden or steel frames for their projects.
                            </p>
                            <p>
                                Every sheet is custom-pressed to create a series of "tile steps" that provide both aesthetic depth and structural rigidity. The large format of the sheets (1100mm width) means that a single panel covers the area of dozens of individual clay tiles, significantly reducing the number of joints and the time required for on-site installation.
                            </p>

                            <h3>Why Contemporary Resorts Choose Zinco Metal Tiles</h3>
                            <ul>
                                <li><strong>100% Leak Proof:</strong> Unlike individual tiles that can shift and leak during heavy Mumbai monsoons, our metal sheets provide a continuous, overlapping barrier that is virtually watertight.</li>
                                <li><strong>Low Maintenance:</strong> No more broken tiles after a storm. Our metal tiles are impact-resistant and do not require the frequent repairs or replacements common with clay.</li>
                                <li><strong>Environmentally Conscious:</strong> Steel is 100% recyclable. Choosing metal tiles reduces the demand for the topsoil excavation required for clay tile production.</li>
                                <li><strong>Versatile Color Palette:</strong> Whether you want a traditional "terracotta" look for a villa in **Kharghar** or a sleek "matte black" for a modern farmhouse in **Panvel**, we offer a wide range of colors and finishes.</li>
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
                        <h2>Features & Benefits</h2>
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
                        <h2>Best For</h2>
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
                        <h2>Installation and Aesthetic Integrity</h2>
                        <div className={styles.contentBlock}>
                            <p>
                                Precision installation is the hallmark of a Zinco roof. We use high-quality EPDM-backed fasteners that are color-matched to your sheets, ensuring that the attachment points are invisible and watertight. For the sloped roofs of **resorts in the Konkan**, we recommend specific overlap patterns that maximize water shed and enhance the visual "step" effect of the tiles.
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
                                <h4>Do metal tile roofs make a lot of noise during rain?</h4>
                                <p>While metal is naturally more resonant than clay, the "stepped" profile of the tiles actually helps break up the impact of raindrops. When installed with proper insulation or underlayment, the noise levels in your **Panvel** farmhouse will be minimal and comfortable.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Can I walk on a metal tile roof for maintenance?</h4>
                                <p>Yes, you can walk on the roof, but it is important to step in the "valleys" of the tile profile where the sheet is supported by the purlins. Our sheets are made of high-tensile steel and can easily support a person's weight if handled correctly.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Will the color peel or chip off over time?</h4>
                                <p>No. Our sheets are "pre-painted," meaning the color is applied and baked in a controlled factory environment using a multi-stage process. This bond is far superior to any on-site painting and is designed not to peel or chip for decades.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Are metal tiles hotter than clay tiles?</h4>
                                <p>Metal tiles reflect a large portion of solar radiation. When combined with a standard radiant barrier or a thin layer of insulation, a metal tile roof can actually keep your building cooler than traditional clay tiles by reducing heat absorption.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Get the Traditional Tile Look Today!</h3>
                            <p>Contact us for the best rates on metal tile sheets in Navi Mumbai.</p>
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

export default MetalTileSheet;
