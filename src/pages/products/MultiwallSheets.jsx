import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaLightbulb, FaMapMarkerAlt, FaExpand } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import styles from './ProductCategory.module.css';

// Import local images
import mwImg1 from '../../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014216.jpg';
import mwImg2 from '../../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014298.jpg';
import mwImg3 from '../../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014339.jpg';
import mwImg4 from '../../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014422.jpg';
import mwImg5 from '../../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014502.png';
import mwImg6 from '../../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014533.jpg';
import mwImg7 from '../../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014579.jpg';
import mwImg8 from '../../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014583.png';
import mwImg9 from '../../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014721.png';

const MultiwallSheets = () => {
    const navigate = useNavigate();
    const galleryImages = [
        { src: mwImg1, title: 'Panel Detail' },
        { src: mwImg2, title: 'Multi-Colour Selection' },
        { src: mwImg3, title: 'High-Rib Profile' },
        { src: mwImg4, title: 'Stacked Sheets' },
        { src: mwImg5, title: 'Thickness Layers' },
        { src: mwImg6, title: 'Colour Samples' },
        { src: mwImg7, title: 'Technical Spec' },
        { src: mwImg8, title: 'Rib Structure' },
        { src: mwImg9, title: 'Site Installation' }
    ];

    const features = [
        'Advanced High Rib Profile (5 Crests & 3 Mini Ribs)',
        'Superior Spanning Strength for Large Areas',
        'Multi-Layered Thermal Insulation Core',
        'Impact Resistant & UV Protected Surfaces',
        'Suitable for both Roofing & Walling',
        'Diffused Soft Natural Lighting'
    ];

    const specifications = [
        { label: 'Profile Design', value: 'High-Rib Trapezoidal' },
        { label: 'Configuration', value: '5 Main Crests + 3 Mini Ribs' },
        { label: 'Core Material', value: 'Multi-layer Polycarbonate Resins' },
        { label: 'Standard Width', value: '1000mm - 1130mm' },
        { label: 'Thermal U-Value', value: 'Optimized for energy saving' },
        { label: 'Surface Coating', value: 'ASA Weather Protection available' }
    ];

    const applications = [
        'Industrial Skylights in Taloja',
        'Walling for Large Warehouses',
        'Infrastructure & Public Projects',
        'Agricultural & Greenhouses',
        'Railway Platforms & Terminals',
        'Factories across Navi Mumbai'
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
                title="High-Rib Multiwall Sheets in Navi Mumbai | Zinco"
                description="High-rib multiwall polycarbonate sheets for industrial skylights and daylighting in Taloja, Bhiwandi, and Navi Mumbai. UV protected and energy efficient."
                keywords="multiwall polycarbonate sheets, high rib polycarbonate, industrial daylighting, skylight sheets mumbai, polycarbonate roofing"
            />
            <Helmet>
                <link rel="preload" as="image" href={mwImg1} />
            </Helmet>
            <div className={styles.hero} style={{ '--hero-image': `url(${mwImg1})` }} fetchpriority="high">
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
                            High-Rib Multiwall Sheets in Navi Mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            High-strength multi-layered polycarbonate profiles with a reinforced high-rib design for superior industrial performance.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <h2>Engineering Natural Light: The High-Rib Multiwall Advantage</h2>
                            <p>
                                In the massive industrial clusters of **Taloja MIDC, Bhiwandi, and Navi Mumbai**, creating a bright, energy-efficient workspace is a top priority for facility managers. Zinco Roofing Solution's **High-Rib Multiwall Polycarbonate Sheets** represent the pinnacle of daylighting technology. Unlike standard flat polycarbonate or multiwall sheets, our profile features a **5 main crest and 3 parallel mini rib design**. This trapezoidal engineering adds immense structural rigidity, allowing these sheets to be used across large roof spans without the risk of sagging or wind-uplift damage.
                            </p>
                            <p>
                                The "Multiwall" designation refers to the internal honeycomb or hollow-chamber structure within the polycarbonate resin. These air-filled vertical walls provide a dual benefit: they act as a high-performance thermal insulator (significantly lowering the building's **U-value**) and they diffuse incoming sunlight. For factories and warehouses in **Panvel**, this means a reduction in heat ingress and the elimination of "hot spots" and harsh glares, creating a uniformly lit interior that reduces the need for artificial lighting during the day.
                            </p>

                            <h3>The Science of UV Protection and Durability</h3>
                            <p>
                                Polycarbonate is naturally prone to yellowing and becoming brittle when exposed to the intense tropical sun of the **Mumbai Metropolitan Region**. To combat this, our High-Rib Multiwall sheets are co-extruded with a high-density UV protection layer on the outer surface. This barrier blocks harmful ultraviolet rays, ensuring that the sheet maintains its high light transmission and impact strength for over a decade. Whether it's the salt-laden air of **Vashi** or the industrial pollutants in **Taloja**, our sheets are built to withstand the harshest environmental conditions.
                            </p>

                            <h3>Why Industrial Architects Specify Zinco Multiwall Profiles</h3>
                            <ul>
                                <li><strong>Superior Spanning Strength:</strong> The 5-crest high-rib design allows for wider purlin spacing compared to standard sheets, reducing the overall weight and cost of the primary steel structure.</li>
                                <li><strong>Advanced Thermal Comfort:</strong> By trapping air within its hollow chambers, multiwall polycarbonate provides energy savings on HVAC (cooling) systems, keeping your **factory in Navi Mumbai** cooler than single-skin alternatives.</li>
                                <li><strong>Shatterproof Security:</strong> Polycarbonate is virtually unbreakable, with 250 times the impact resistance of glass. This makes it an ideal safety choice for high-traffic infrastructure projects like metro stations and skywalks.</li>
                                <li><strong>Soft, Diffused Lighting:</strong> Prevent worker eye strain and machinery glare with lighting that is distributed evenly across the floor.</li>
                            </ul>
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
                        <h2>Industrial Advantages</h2>
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
                        <h2>Installation Precision and Thermal Expansion</h2>
                        <div className={styles.contentBlock}>
                            <p>
                                Polycarbonate has a high coefficient of thermal expansion, meaning it moves significantly more than metal as it heats up. Our installation teams in **Panvel and Navi Mumbai** use specialized wide-diameter EPDM washers and oversized mounting holes to allow the sheet to "breathe" without cracking. This technical attention to detail ensures a leak-proof, long-lasting daylighting solution.
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
                                <h4>Can these sheets be used for both roofs and walls?</h4>
                                <p>Yes! The high-rib profile is exceptionally rigid, making it ideal for vertical wall cladding (facades) as well as primary skylighting on roofs in industrial sheds.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Do these sheets turn yellow over time?</h4>
                                <p>No. Our premium multiwall sheets are co-extruded with a specialized UV-resistant layer that protects the polycarbonate core from yellowing and degradation for over 10-15 years.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>How do they handle heavy Mumbai rain?</h4>
                                <p>The high-rib trapezoidal profile is designed for rapid water shedding. When installed with the correct pitch and laps, they are 100% leak-proof even in torrential Konkan monsoons.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Are multiwall sheets fire-rated?</h4>
                                <p>Zinco's polycarbonate sheets are classified as self-extinguishing and do not support the spread of flames, making them safe for large-scale public and industrial applications.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.section}>
                        <h2>Infrastructure Applications</h2>
                        <div className={styles.applicationsGrid}>
                            {applications.map((app, index) => (
                                <Card key={index} variant="solid" className={styles.appCard}>
                                    <FaLightbulb style={{ color: 'var(--accent-500)', marginBottom: '0.5rem' }} />
                                    <h4>{app}</h4>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Product Gallery</h2>
                        <div className={styles.galleryGrid}>
                            {galleryImages.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    className={styles.galleryItem}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.title}
                                        className={styles.galleryImage}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className={styles.galleryOverlay}>
                                        <span>{img.title}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Optimize Your Project Lighting</h3>
                            <p>Get a competitive quote for High-Rib Multiwall installation across Mumbai.</p>
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

export default MultiwallSheets;
