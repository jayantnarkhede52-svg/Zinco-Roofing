import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaTools, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/services-hero.webp';
import styles from './ProductCategory.module.css';

const UPVCHighRibSheets = () => {
    const navigate = useNavigate();
    const features = [
        '3-Layer UPVC with Anti-UV Technology',
        'ASA Coating for Weather Resistance',
        'Superior Heat & Sound Insulation',
        'Acid & Alkali Resistant (Anti-Corrosion)',
        'Eco-Friendly & Recyclable Material',
        'Fire Retardant (B1 Class)'
    ];

    const specifications = [
        { label: 'Total Width', value: '1070mm' },
        { label: 'Effective Width', value: '1000mm' },
        { label: 'Profile Pitch', value: '250mm' },
        { label: 'Rib Height', value: '37mm' },
        { label: 'Thickness', value: '2.0mm / 2.5mm / 3.0mm' },
        { label: 'Material', value: 'UPVC + Glass Fiber + ASA Coating' }
    ];

    const techHighlights = [
        { title: 'Top Layer', desc: 'Weather resistant resin (ASA) to block UV radiation & reduce heat conductivity.' },
        { title: 'Middle Layer', desc: 'Special foam structure for superior heat and sound insulation.' },
        { title: 'Bottom Layer', desc: 'Modified PVC material for optimum strength and rigidity.' }
    ];

    const applications = [
        'Chemical Factories in Taloja',
        'Coastal Warehouses in Uran',
        'Ceramic Plants in Gujarat',
        'Food Processing Units',
        'Fertilizer Plants',
        'Electroplating Factories'
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
                title="3-Layer UPVC High-Rib Sheets in Navi Mumbai | Zinco"
                description="Anti-corrosive 3-layer UPVC roofing sheets for chemical factories in Taloja, Uran, and Panvel. Heat insulating and acid resistant."
                keywords="upvc roofing sheets, 3 layer upvc sheets, anti corrosion roofing, chemical factory roofing mumbai, upvc high rib"
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
                            3-Layer UPVC High-Rib Sheets in Navi Mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Advanced 3-layer UPVC roofing with ASA coating for extreme corrosion resistance and thermal insulation.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <h2>Chemical-Proof Industrial Solutions: The UPVC High-Rib Advantage</h2>
                            <p>
                                In the specialized industrial zones of **Taloja MIDC and the coastal regions of Uran and Panvel**, standard metal roofing sheets often fall short. Excessive humidity, salt-laden air, and chemical fumes from factories can cause traditional Galvalume or GI sheets to corrode within just a few years. Zinco Roofing Solution's **3-Layer UPVC High-Rib Sheets** are engineered specifically to thrive where metal fails. Utilizing advanced European co-extrusion technology, these sheets provide a 100% rust-proof, acid-resistant, and alkali-resistant roofing solution.
                            </p>
                            <p>
                                What makes our UPVC High-Rib sheets unique is their **trapezoidal 3-layer construction**. Unlike single-skin plastic sheets, our panels feature a middle layer with a specialized micro-foam structure. This core acts as a powerful thermal and acoustic insulator, significantly reducing the transmission of heat and the loud drumming sound of rain during the **Mumbai monsoon**. The high-rib profile adds the necessary structural strength to spanning industrial purlins, ensuring the roof remains rigid and safe even under high wind loads.
                            </p>

                            <h3>The Science of ASA Co-Extrusion Technology</h3>
                            <p>
                                The top layer of each sheet is coated with **ASA (Acrylonitrile Styrene Acrylate)**, a high-performance weatherable resin. ASA is renowned for its exceptional UV resistance and color stability. In the intense sun of **Navi Mumbai**, traditional plastics can become brittle and fade; however, the ASA coating ensures that our UPVC sheets maintain their structural integrity and vibrant appearance for over **20-25 years**. This top layer also serves as a primary heat-reflective surface, keeping the interior of the factory or warehouse significantly cooler.
                            </p>

                            <h3>Why Chemical & Coastal Industries Choose Zinco UPVC</h3>
                            <ul>
                                <li><strong>100% Corrosion Resistance:</strong> Ideally suited for chemical factories, electroplating units, and fertilizer plants in **Taloja** where acidic fumes are present.</li>
                                <li><strong>Superior Heat Insulation:</strong> The multi-layer technology provides a thermal conductivity that is much lower than metal, reducing the temperature inside the shed by 3-5°C naturally.</li>
                                <li><strong>Excellent Sound Absorption:</strong> The specialized foam core dampens noise by up to 30dB, creating a quieter and more productive work environment for your staff.</li>
                                <li><strong>Eco-Friendly & Safe:</strong> Our UPVC sheets are asbestos-free and recyclable, making them a sustainable choice for modern industrial infrastructure across the Mumbai region.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Profile Dimensions</h2>
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
                        <h2>Layer Technology</h2>
                        <div className={styles.applicationsGrid}>
                            {techHighlights.map((tech, index) => (
                                <Card key={index} variant="solid" className={styles.appCard}>
                                    <FaTools style={{ color: 'var(--accent-500)', marginBottom: '0.5rem' }} />
                                    <h4>{tech.title}</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--gray-300)' }}>{tech.desc}</p>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Key Performance Features</h2>
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
                        <h2>Technical Integrity and Installation</h2>
                        <div className={styles.contentBlock}>
                            <p>
                                Because UPVC moves more than steel due to temperature changes, precision installation is critical. Our specialized teams in **Navi Mumbai** use EPDM-backed wide-diameter fixings to ensure that the roof remains watertight while allowing for the natural thermal expansion of the sheets. This engineering approach eliminates the risk of cracking or fastener failure over the decades.
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
                                <h4>Can these sheets withstand the acidic environment of chemical plants?</h4>
                                <p>Yes! Our 3-layer UPVC is specifically designed to be chemically inert. It can withstand direct exposure to most industrial acids, alkalis, and salt spray without any degradation or rust.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Do they require regular painting or maintenance?</h4>
                                <p>No. The ASA top-layer is colored throughout and UV-stabilized. It does not require painting, and the smooth surface naturally washes clean during the rains.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Are UPVC sheets walkable for maintenance?</h4>
                                <p>While UPVC is strong, we always recommend using crawling boards or ladders for roof maintenance to ensure safety and evenly distribute weight.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>What is the lifespan of these industrial sheets?</h4>
                                <p>Under industrial conditions in the **Mumbai region**, our UPVC High-Rib sheets typically have a service life of 20 to 30 years, far exceeding traditional metal in corrosive settings.</p>
                            </div>
                        </div>
                    </motion.section>

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

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Solve Industrial Corrosion Today</h3>
                            <p>Request a sample or a technical quote for High-Rib UPVC roofing.</p>
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

export default UPVCHighRibSheets;
