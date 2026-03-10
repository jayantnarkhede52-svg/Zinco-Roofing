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
        { src: deckImg1, title: 'Commercial Site Slab' },
        { src: deckImg2, title: 'Steel Deck Flooring' },
        { src: deckImg3, title: 'Structural Ribs' },
        { src: deckImg4, title: 'Decking Profile' },
        { src: deckImg5, title: 'Large Span Decking' },
        { src: deckImg6, title: 'Industrial Installation' },
        { src: deckImg7, title: 'Steel Reinforcement' },
        { src: deckImg8, title: 'Composite Slab Foundation' }
    ];
    const features = [
        'Composite Metal Deck Flooring System',
        'Special Built-in Shear Connectors',
        'Enhanced Bonding with Concrete',
        'High Strength Profiles (Super Deck)',
        'Faster Slab Casting & Reduced Shuttering',
        'High Tensile Structural Stability'
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

    const applications = [
        'IT Parks in Navi Mumbai',
        'Industrial Mezzanines Taloja',
        'Multi-story Commercial Buildings',
        'Multi-story Car Parks Mumbai',
        'Office Complexes Vashi',
        'Data Centers Rabale MIDC'
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
                            Super Deck - Composite Flooring Sheets in Mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            High-strength composite metal deck flooring system with special built-in shear connectors for superior bonding.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <Card variant="solid" className={styles.contentCard}>
                                <h2>Revolutionizing Slab Construction</h2>
                                <p className={styles.leadText}>
                                    Zinco's <strong>Super Deck Composite Metal Decking</strong> is a high-performance structural solution that replaces traditional wooden shuttering with permanent steel formwork.
                                </p>
                            </Card>

                            <div className={styles.benefitsGrid}>
                                <Card variant="glass" className={styles.benefitCard}>
                                    <FaLayerGroup className={styles.benefitIcon} />
                                    <h4>Composite Action</h4>
                                    <p>Embossed patterns act as mechanical shear connectors, creating a multi-directional bond between steel and concrete.</p>
                                </Card>
                                <Card variant="glass" className={styles.benefitCard}>
                                    <FaTools className={styles.benefitIcon} />
                                    <h4>Rapid ROI</h4>
                                    <p>Cast multiple floors simultaneously and begin interior work immediately, saving massive time in Taloja MIDC projects.</p>
                                </Card>
                                <Card variant="glass" className={styles.benefitCard}>
                                    <FaCheckCircle className={styles.benefitIcon} />
                                    <h4>High Tensile</h4>
                                    <p>Available in 345/550 MPa steel with Z275 GSM coatings for lifetime corrosion protection.</p>
                                </Card>
                            </div>

                            <div className={styles.grid2Col}>
                                <Card variant="solid" className={styles.highlightCard}>
                                    <h3>Advanced Shuttering</h3>
                                    <p>Eliminate the need for 21-day timber curing. Our decking provide immediate support for wet concrete and construction loads.</p>
                                </Card>
                                <Card variant="solid" className={styles.highlightCard}>
                                    <h3>Reduced Slab Weight</h3>
                                    <p>Achieve thinner slabs without sacrificing load capacity, reducing the overall dead load on foundations in Navi Mumbai.</p>
                                </Card>
                            </div>
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
                        <h2>Design Data & Load Table</h2>
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
                        <div className={styles.contentBlock}>
                            <Card variant="solid" className={styles.contentCard}>
                                <h2>Installation Efficiency and Loading Data</h2>
                                <p>
                                    Successful decking installation requires precision in the placement of shear studs and edge trims. Our technical team provides detailed shop drawings for projects in <strong>Bhiwandi and Navi Mumbai</strong>, ensuring that the decking spans are optimized for the steel frame. The high section modulus of the <strong>Super Deck</strong> profile ensures minimal deflection during the concrete pour, resulting in a perfectly level and industrially sound floor.
                                </p>
                            </Card>
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
                                <h4>Does composite decking require bottom rebar?</h4>
                                <p>In most residential and commercial applications, the decking sheet itself replaces the bottom tension reinforcement. However, temperature and shrinkage reinforcement (top mesh) is still required as per structural design codes.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Can decking be used with both steel and RC frames?</h4>
                                <p>Yes! While it is most efficiently used with steel-framed buildings (bolted or welded to beams), it can also be used in RC (Reinforced Concrete) frames by using specialized connectors or fasteners.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>How do I handle openings for pipes and ducts?</h4>
                                <p>Openings for MEP (Mechanical, Electrical, and Plumbing) services can be easily cut into the decking. Large openings should be reinforced with additional headers or edges as per the structural engineer's advice.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>What is the maximum span between supports?</h4>
                                <p>This depends on the thickness of the sheet and the depth of the concrete. Typically, spans of 2.5m to 4.5m are possible without temporary propping during the pour, significantly freeing up space on the floor below.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Optimize Your Slab Construction</h3>
                            <p>Get technical support and best rates for Super Deck sheets in Mumbai region.</p>
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

export default DeckingSheet;
