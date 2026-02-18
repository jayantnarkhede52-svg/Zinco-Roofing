import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaLeaf, FaMapMarkerAlt } from 'react-icons/fa';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/services-hero.png';
import styles from './ProductCategory.module.css';

const SyntheticRoof = () => {
    const navigate = useNavigate();
    const features = [
        'Natural Thatch/Shingle Aesthetic',
        'Fire Retardant & Safe Material',
        '100% Recyclable Synthetic Resins',
        'Zero Maintenance & Long Life',
        'Resistant to Rot, Mold, & Pests',
        'Easy to Install on Sloped Roofs'
    ];

    const specifications = [
        { label: 'Material', value: 'Synthetic Synthetic Resins (UV Stable)' },
        { label: 'Aesthetic', value: 'Natural Thatch / Straw / Wood' },
        { label: 'Service Life', value: '20 - 30 Years' },
        { label: 'Maintenance', value: 'Zero (No replacement needed)' },
        { label: 'Weight', value: 'Lightweight & Flexible' },
        { label: 'Region', value: 'Resorts & Farmhouses' }
    ];

    const applications = [
        'Luxury Resorts in Alibaug',
        'Gazebos in Lonavala & Karjat',
        'Theme Parks & Water Parks',
        'Poolside Cabanas in Mumbai',
        'Eco-Tourism Cottages',
        'Farmhouse Porches in Panvel'
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
                            Synthetic Thatch & Shingle Roofing in Mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            The exotic charm of natural thatch with the ultimate durability of modern synthetic materials.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <h2>Tropical Opulence with Modern Durability: Synthetic Thatch & Shingles</h2>
                            <p>
                                In the picturesque holiday destinations of **Alibaug, Lonavala, Karjat, and the luxury farmhouse pockets of Panvel**, architectural aesthetics often lean towards the natural, tropical charm of traditional thatch and wooden shingles. However, natural organic roofing materials face significant challenges in the humid, monsoon-prone climate of the **Konkan region**, requiring frequent replacement and posing a serious fire risk. Zinco Roofing Solution's **Synthetic Roofing** offers a groundbreaking alternative: the breathtaking beauty of natural straw and wood with the lifetime durability of advanced synthetic polymers.
                            </p>
                            <p>
                                Our synthetic thatch and shingle systems are engineered to mimic the exact texture, coloring, and "layered" look of natural materials like Bali-style thatch or Cape Reed. Manufactured from **100% recyclable synthetic resins**, these products are built to last. Unlike natural thatch that becomes a breeding ground for insects and mold in the damp Mumbai air, our synthetic fibers are completely inorganic. They do not rot, they do not attract pests, and they maintain their vibrant "golden-straw" or "aged-wood" appearance for more than **20 to 30 years**.
                            </p>

                            <h3>The Engineering of Fire Safety and UV Resistance</h3>
                            <p>
                                For resorts, theme parks, and poolside cabanas in **Mumbai and Navi Mumbai**, fire safety is a non-negotiable requirement. Natural thatch is highly flammable, making it a liability for public spaces. Zinco’s synthetic roofing is manufactured with built-in **Class-A fire-retardant additives**, ensuring that your tropical paradise remains safe for guests. Additionally, each strand is infused with high-density UV stabilizers that block the intense bleaching effects of the sun, preventing the material from becoming brittle or losing its aesthetic appeal even after decades of exposure.
                            </p>

                            <h3>Why Resort Developers in the Mumbai Region Prefer Zinco</h3>
                            <ul>
                                <li><strong>Zero Maintenance Luxury:</strong> Forget about the annual "re-thatching" costs. Our synthetic roofs require no specialized cleaning or pesticide treatments, saving you significant operational costs over time.</li>
                                <li><strong>100% Waterproof and Weather-Tight:</strong> When installed as part of a complete system, our synthetic roofs provide an effective barrier against the heaviest **Mumbai monsoon rain**, protecting your interior decor and furnishings.</li>
                                <li><strong>Eco-Friendly & Sustainable:</strong> Made from high-quality polymers, our roofing is 100% recyclable at the end of its long service life, making it a responsible choice for eco-tourism projects in **Matheran and Karjat**.</li>
                                <li><strong>Easy Installation on Any Structure:</strong> Whether you're building a simple garden gazebo or a complex resort roof, our lightweight synthetic panels can be easily fastened to various roof frames, including wood, steel, or concrete.</li>
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
                        <h2>Why Synthetic?</h2>
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
                        <h2>Common Applications</h2>
                        <div className={styles.applicationsGrid}>
                            {applications.map((app, index) => (
                                <Card key={index} variant="solid" className={styles.appCard}>
                                    <FaLeaf style={{ color: 'var(--accent-500)', marginBottom: '0.5rem' }} />
                                    <h4>{app}</h4>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Installation Excellence and Customization</h2>
                        <div className={styles.contentBlock}>
                            <p>
                                Creating an authentic natural look requires a specialized installation technique. Our teams in **Navi Mumbai** are trained in the art of layering synthetic thatch to create a thick, plush appearance that is indistinguishable from the real thing. We provide various colors and textures, from the wild, shaggy look of African thatch to the neat, uniform lines of Western cedar shingles, ensuring your roof perfectly complements your project's architectural theme.
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
                                <h4>Does synthetic thatch really look like natural straw?</h4>
                                <p>Yes! Our premium synthetic thatch is molded from real natural fibers to capture the exact organic texture, and we use multi-tonal coloring to mimic the natural variations found in real thatch.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Is it safe to use around swimming pools?</h4>
                                <p>Absolutely. Our materials are highly resistant to chlorine and saltwater spray, making them the perfect choice for poolside cabanas and beachfront bars in **Alibaug**.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Will the wind blow away the individual "leaves" or "shingles"?</h4>
                                <p>Our products are tested for high wind uplift. The individual strands are securely bound into panels that are mechanically fastened to the roof structure, capable of withstanding the gusty winds of **Lonavala**.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>How does it compare in cost to natural thatch?</h4>
                                <p>While the initial cost of synthetic is higher, you save the cost of replacement every 2-3 years (which natural thatch requires). Within 5-6 years, synthetic roofing becomes significantly more economical.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Create Your Tropical Oasis</h3>
                            <p>Contact us for expert synthetic thatch roofing installation in the Mumbai region.</p>
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

export default SyntheticRoof;
