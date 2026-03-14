import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaLayerGroup, FaMapMarkerAlt, FaExpand, FaTools } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import styles from './ProductCategory.module.css';

// Import local deck sheet images
import heroImg from '../../assets/productshero/deck-hero.webp';
import deckImg1 from '../../assets/Dect sheet/Dect sheet/1000014048.webp';
import deckImg2 from '../../assets/Dect sheet/Dect sheet/1000014053.webp';
import deckImg3 from '../../assets/Dect sheet/Dect sheet/1000014070.webp';
import deckImg4 from '../../assets/Dect sheet/Dect sheet/1000014504.webp';
import deckImg5 from '../../assets/Dect sheet/Dect sheet/1000014515.webp';
import deckImg6 from '../../assets/Dect sheet/Dect sheet/1000014558.webp';
import deckImg7 from '../../assets/Dect sheet/Dect sheet/1000014661.webp';
import deckImg8 from '../../assets/Dect sheet/Dect sheet/1000014745.webp';

const DeckingSheet = () => {
    const navigate = useNavigate();
    const galleryImages = [
        { src: deckImg1, title: 'Composite flooring sheets in mumbai Site' },
        { src: deckImg2, title: 'Top Composite flooring sheets in mumbai' },
        { src: deckImg3, title: 'Durable Composite flooring sheets in mumbai' },
        { src: deckImg4, title: 'Quality Composite flooring sheets in mumbai' },
        { src: deckImg5, title: 'Expert Composite flooring sheets in mumbai' },
        { src: deckImg6, title: 'Modern Composite flooring sheets in mumbai' },
        { src: deckImg7, title: 'Best Composite flooring sheets in mumbai' },
        { src: deckImg8, title: 'Composite flooring sheets in mumbai Supply' }
    ];
    const features = [
        'Premium Composite flooring sheets in mumbai',
        'Special Composite flooring sheets in mumbai',
        'Balanced Composite flooring sheets in mumbai',
        'High-strength Composite flooring sheets in mumbai',
        'Swift Composite flooring sheets in mumbai',
        'Structural Composite flooring sheets in mumbai'
    ];

    const specifications = [
        { label: 'Branding', value: 'Super Deck - Composite Metal Deck' },
        { label: 'Core Material', value: 'High Tensile Galvanized Steel' },
        { label: 'Tensile Strength', value: '345 / 550 MPa' },
        { label: 'Thickness Range', value: '0.8mm to 1.5mm' },
        { label: 'Galvanization', value: 'Z120 / Z275 GSM Coating' },
        { label: 'Availability', value: 'Immediate Stock in Mumbai & Taloja' }
    ];

    const techSpecs = [
        { sn: '1', thickness: '0.8', weight: '7.85', inertia: '83.71', modulus: '28.14' },
        { sn: '2', thickness: '0.9', weight: '8.83', inertia: '94.06', modulus: '31.63' },
        { sn: '3', thickness: '1', weight: '9.81', inertia: '104.38', modulus: '35.11' },
        { sn: '4', thickness: '1.2', weight: '11.78', inertia: '124.91', modulus: '42.05' },
        { sn: '5', thickness: '1.35', weight: '13.25', inertia: '140.23', modulus: '47.23' },
        { sn: '6', thickness: '1.5', weight: '14.72', inertia: '155.46', modulus: '52.39' }
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
                title="Super Deck - Composite Flooring Sheets in Mumbai"
                description="High-strength composite metal deck flooring sheets for multi-story buildings and industrial mezzanines in Navi Mumbai and Panvel. Faster slab casting."
                keywords="metal decking sheets, composite flooring sheets, decking profile, floor decking mumbai"
                canonicalUrl="https://zincoroof.com/products/decking-sheet"
            />
            <Helmet>
                <link rel="preload" as="image" href={heroImg} fetchpriority="high" />
            </Helmet>
            <div className={styles.hero} style={{ '--hero-image': `url(${heroImg})` }}>
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
                            composite flooring sheets in mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            High-strength <strong>composite flooring sheets in mumbai</strong> with special built-in shear connectors for superior bonding.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <motion.section 
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.contentBlock}>
                            <Card variant="solid" className={styles.contentCard}>
                                <h2>Complete composite flooring sheets in mumbai solutions</h2>
                                <p>
                                    At Zinco Roofing Solution, we provide the best <strong>composite flooring sheets in mumbai</strong>. Our <strong>composite flooring sheets in mumbai</strong> systems are designed for modern sky-scrapers.
                                </p>
                                <p>
                                    This <strong>composite flooring sheets in mumbai</strong> replaces conventional shuttering. Installing <strong>composite flooring sheets in mumbai</strong> ensures rapid project completion.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Efficiency of composite flooring sheets in mumbai</h3>
                                <p>
                                    A high-quality <strong>composite flooring sheets in mumbai</strong> improves structural stability. Our <strong>composite flooring sheets in mumbai</strong> are balanced for heavy concrete loads in Mumbai.
                                </p>
                            </Card>

                            <Card variant="solid" className={styles.contentCard}>
                                <h3>Why Zinco for composite flooring sheets in mumbai?</h3>
                                <ul className={styles.styledList}>
                                    <li><strong>Cost Effective:</strong> Our <strong>composite flooring sheets in mumbai</strong> reduces overall material cost.</li>
                                    <li><strong>Durable:</strong> Every <strong>composite flooring sheets in mumbai</strong> is highly galvanized.</li>
                                    <li><strong>Precision:</strong> We ensure perfect fit for every <strong>composite flooring sheets in mumbai</strong>.</li>
                                    <li><strong>Value:</strong> Our <strong>composite flooring sheets in mumbai</strong> offers superior bonding.</li>
                                </ul>
                            </Card>
                        </div>
                    </motion.section>

                    <section className={styles.section}>
                        <h2>Gallery of composite flooring sheets in mumbai</h2>
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
                                    <img src={img.src} alt="composite flooring sheets in mumbai" className={styles.galleryImage} loading="lazy" decoding="async" />
                                    <div className={styles.galleryOverlay}>
                                        <span>{img.title}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <motion.section 
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Specifications of our composite flooring sheets in mumbai</h2>
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
                    </motion.section>

                    <section className={styles.section}>
                        <h2>Data for composite flooring sheets in mumbai</h2>
                        <Card variant="solid">
                            <div className={styles.tableWrapper}>
                                <table className={styles.customTable}>
                                    <thead>
                                        <tr>
                                            <th>Sr. No.</th>
                                            <th>THICKNESS (mm)</th>
                                            <th>UNIT WEIGHT (Kg/m²)</th>
                                            <th>MOMENT OF INERTIA (cm⁴)</th>
                                            <th>SECTION MODULUS (cm³)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {techSpecs.map((row) => (
                                            <tr key={row.sn}>
                                                <td>{row.sn}</td>
                                                <td>{row.thickness}</td>
                                                <td>{row.weight}</td>
                                                <td>{row.inertia}</td>
                                                <td>{row.modulus}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </section>

                    <motion.section 
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Features of Zinco composite flooring sheets in mumbai</h2>
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
                    </motion.section>

                    <motion.section 
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.contentBlock}>
                            <Card variant="solid" className={styles.contentCard}>
                                <h2>High-strength composite flooring sheets in mumbai</h2>
                                <p>
                                    Our <strong>composite flooring sheets in mumbai</strong> is built for endurance. Once installed, the <strong>composite flooring sheets in mumbai</strong> provides a permanent formwork for slabs.
                                </p>
                            </Card>
                        </div>
                    </motion.section>

                    <motion.section
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>FAQs on composite flooring sheets in mumbai</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>Does <strong>composite flooring sheets in mumbai</strong> need rebar?</h4>
                                <p>In most cases, <strong>composite flooring sheets in mumbai</strong> replaces bottom tension reinforcement.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Can <strong>composite flooring sheets in mumbai</strong> be used in car parks?</h4>
                                <p>Yes, <strong>composite flooring sheets in mumbai</strong> is ideal for car parks and multi-story zones.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>What is the span of <strong>composite flooring sheets in mumbai</strong>?</h4>
                                <p>Our <strong>composite flooring sheets in mumbai</strong> can span up to 4.5m between supports.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Get Best Quote for composite flooring sheets in mumbai</h3>
                            <p>Contact the leading manufacturer for <strong>composite flooring sheets in mumbai</strong> today.</p>
                            <div className={styles.ctaButtons}>
                                <Button size="lg" href="/contact">Get Estimate</Button>
                                <Button size="lg" variant="outline" href="tel:+919967203090">Call Expert</Button>
                            </div>
                        </Card>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default DeckingSheet;
