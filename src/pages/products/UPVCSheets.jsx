import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaShieldAlt, FaMapMarkerAlt, FaExpand, FaPuzzlePiece } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import styles from './ProductCategory.module.css';

// Import local images
import heroImg from '../../assets/productshero/upvc-hero.png';
import upvcImg1 from '../../assets/Upvc images/Upvc images/1000014026.jpg';
import upvcImg2 from '../../assets/Upvc images/Upvc images/1000014135.jpg';
import upvcImg3 from '../../assets/Upvc images/Upvc images/1000014390.jpg';
import upvcImg4 from '../../assets/Upvc images/Upvc images/1000014394.jpg';
import upvcImg5 from '../../assets/Upvc images/Upvc images/1000014497.jpg';
import upvcImg6 from '../../assets/Upvc images/Upvc images/1000014665.jpg';

const UPVCSheets = () => {
    const navigate = useNavigate();
    const galleryImages = [
        { src: upvcImg1, title: 'Industrial Installation' },
        { src: upvcImg2, title: 'Multi-Layer Profile' },
        { src: upvcImg3, title: 'Stacked UPVC Sheets' },
        { src: upvcImg4, title: 'Large Scale Warehouse' },
        { src: upvcImg5, title: 'Anti-Corrosive Layering' },
        { src: upvcImg6, title: 'Structural View' }
    ];

    const features = [
        'Multi-Layer Protection (ASA Coated)',
        'Superior Corrosion Resistance',
        'Strong Heat Insulation Properties',
        'Impact Resistant & Durable',
        'Chemical & Weather Resistance',
        'Cost-Effective Roofing Solution'
    ];

    const specifications = [
        { label: 'Material', value: 'High Performance UPVC Resin' },
        { label: 'Layers', value: '3 or 4 Layer Co-extrusion' },
        { label: 'Thickness', value: '1.5mm / 2.0mm / 2.5mm / 3.0mm' },
        { label: 'Width', value: '1130mm (Overall)' },
        { label: 'UV Coating', value: 'High-quality ASA Surface' },
        { label: 'Regions', value: 'Taloja, Panvel, JNPT Uran' }
    ];

    const applications = [
        'Chemical Factories in Taloja MIDC',
        'Warehouses near JNPT Port',
        'Animal Sheds & Poultry Farms',
        'Industrial workshops in Mumbai',
        'Residential Covered Areas',
        'Logistics Parks in Panvel'
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
                title="UPVC Roofing Sheets in Navi Mumbai & Panvel | Zinco"
                description="Durable UPVC roofing sheets for industrial and warehousing projects in Taloja, Panvel, and JNPT. Corrosion-free and heat reducing."
                keywords="upvc sheets navi mumbai, plastic roofing sheets, industrial roofing sheets, upvc roof panels, heat resistant roofing"
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
                            UPVC Roofing Sheets in Navi Mumbai & Panvel
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            The ultimate anti-corrosive roofing solution for factories and coastal environments.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <h2>Advanced Industrial Protection: Premium UPVC Roofing Technology</h2>
                            <p>
                                In the industrial heartlands of **Taloja MIDC, Rabale, and Mahape**, and along the high-corrosion coastal belts near **JNPT Uran**, selecting the right roofing material is a decision that impacts the long-term viability of your infrastructure. Zinco Roofing Solution's **UPVC (Unplasticized Polyvinyl Chloride) Roofing Sheets** are engineered to provide a superior alternative to traditional metal roofing. By utilizing high-performance resins and advanced multi-layer co-extrusion, we've created a roofing solution that is 100% immune to rust, rot, and chemical corrosion.
                            </p>
                            <p>
                                UPVC is fundamentally different from standard PVC. The "unplasticized" nature of the resin makes it much more rigid and thermally stable. Our sheets feature a **3 or 4-layer co-extrusion structure**. The top layer is a high-grade **ASA (Acrylonitrile Styrene Acrylate)** coating that provides exceptional UV stability and color retention. Below this, core layers are infused with impact modifiers and thermal stabilizers, creating a product that can withstand the intense tropical sun of **Navi Mumbai** and the heavy impacts of monsoon debris without cracking or degrading.
                            </p>

                            <h3>The Science of Thermal Comfort and Energy Savings</h3>
                            <p>
                                Metal sheets are notorious for conducting heat, turning industrial sheds into "ovens" during the Mumbai summer. UPVC, however, is a natural insulator. It has a significantly lower thermal conductivity than steel or aluminum. When you choose Zinco UPVC sheets for your **factory in Taloja** or **warehouse in Panvel**, you are essentially adding a built-in thermal shield to your building. This results in indoor temperatures that are naturally 4-6°C lower than buildings with metal roofs, leading to massive savings on air conditioning and mechanical ventilation costs.
                            </p>

                            <h3>Why Modern Industrialists Choose Zinco UPVC Sheets</h3>
                            <ul>
                                <li><strong>Ultimate Corrosion Resistance:</strong> UPVC is chemically inert, making it the perfect choice for **chemical factories, fertilizer plants, and electroplating units** where acidic or alkaline fumes would destroy metal sheets in a matter of years.</li>
                                <li><strong>Exceptional Sound Insulation:</strong> The multi-layered structure and the inherent damping properties of UPVC dramatically reduce the noise of heavy rain, providing a quieter work environment during the Konkan monsoons.</li>
                                <li><strong>Lightweight Structural Efficiency:</strong> UPVC sheets are lighter than traditional AC sheets or heavy-gauge metal, reducing the load on your building's primary steel frame and simplifying the installation process.</li>
                                <li><strong>Environmentally Responsive:</strong> Our UPVC sheets are 100% lead-free and fully recyclable, aligning with modern green building standards for industrial parks in **Navi Mumbai**.</li>
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
                        <h2>Accessories List</h2>
                        <div className={styles.accessoriesGrid}>
                            {[
                                { name: '4-way Ridge' },
                                { name: 'Wall Flashing' },
                                { name: 'Top Ridge Cover' },
                                { name: 'Top Ridge' },
                                { name: 'Three Way Ridge' },
                                { name: 'Inside Corner Deflector' },
                                { name: 'Synthetic Resin Tile' },
                                { name: 'Side Cover' },
                                { name: 'Diagonal Ridge' },
                                { name: 'End of Ridge' },
                                { name: 'Sealing Eaves Tile' },
                                { name: 'Upvc Screw with Cap' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.accessoryCard}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <div className={styles.accessoryIcon}>
                                        <FaPuzzlePiece />
                                    </div>
                                    <h4>{item.name}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Key Features</h2>
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
                        <h2>Ideal For</h2>
                        <div className={styles.applicationsGrid}>
                            {applications.map((app, index) => (
                                <Card key={index} variant="solid" className={styles.appCard}>
                                    <FaShieldAlt style={{ color: 'var(--accent-500)', marginBottom: '0.5rem' }} />
                                    <h4>{app}</h4>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Installation Precision and Long-Term Value</h2>
                        <div className={styles.contentBlock}>
                            <p>
                                To maximize the lifespan of a UPVC roof, precision installation is key. At Zinco, our teams in **Navi Mumbai** use specialized EPDM-backed fasteners and allow for appropriate thermal expansion gaps. This technical attention to detail ensures that your roof remains perfectly watertight and structurally sound for its entire **20 to 30-year service life**.
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
                                <h4>Are UPVC sheets as strong as metal roofing?</h4>
                                <p>While metal has higher tensile strength, our high-rib UPVC profiles are engineered with internal reinforcement to handle standard industrial wind and snow loads. They are also much more impact-resistant against hail or falling debris.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>How do they handle the high temperatures of Mumbai?</h4>
                                <p>Our UPVC sheets are manufactured with specialized thermal stabilizers and a UV-resistant ASA top layer. They can withstand constant exposure to intense sunlight without warping or losing their structural properties.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Can I use these for a coastal property in Alibaug?</h4>
                                <p>Absolutely. UPVC is the ideal material for coastal areas as it is completely unaffected by saltwater spray and high humidity, which would cause rapid oxidation in metal sheets.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Is it a fire-safe roofing material?</h4>
                                <p>Yes, our UPVC sheets are classified as fire-retardant. They have a high ignition point and do not support the spread of flames, making them suitable for industrial and commercial projects.</p>
                            </div>
                        </div>
                    </motion.section>

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
                                    <img src={img.src} alt={img.title} className={styles.galleryImage} />
                                    <div className={styles.galleryOverlay}>
                                        <span>{img.title}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Stop Corrosion, Save Costs</h3>
                            <p>Get the best rates for UPVC roofing sheets in the Navi Mumbai region.</p>
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

export default UPVCSheets;
