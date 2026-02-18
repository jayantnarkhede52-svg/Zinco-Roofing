import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImg from '../../assets/productshero/highroof-hero.png';
import styles from './ProductCategory.module.css';

const HighRoofSeam = () => {
    const navigate = useNavigate();
    const features = [
        '100% Leak-Proof Standing Seam Design',
        'No Visible Fasteners or Hole Penetrations',
        'Extreme Resistance to High Wind Uplift',
        'Accommodates Thermal Expansion/Contraction',
        'Superior Aesthetics for Modern Buildings',
        'Available in Long Lengths without Laps'
    ];

    const specifications = [
        { label: 'System Type', value: 'Standing Seam Roofing' },
        { label: 'Fastening', value: 'Concealed Clips / Seaming' },
        { label: 'Material', value: 'Galvalume / Aluminum / Copper' },
        { label: 'Seam Height', value: '50mm - 65mm' },
        { label: 'Width', value: '300mm to 500mm' },
        { label: 'Finish', value: 'PVDF / SMP Color Coating' }
    ];

    const applications = [
        'Large Industrial Sheds in Navi Mumbai',
        'Modern Airports & Transit Hubs',
        'Premium Commercial Complexes',
        'Warehouses in Panvel MIDC',
        'Educational Institutions',
        'Luxury Residential Projects'
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
                            High Roof Seam Systems in Navi Mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Ultimate leak protection with advanced concealed-fastener standing seam technology.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <h2>Engineering Excellence: The High Roof Seam (Standing Seam) System</h2>
                            <p>
                                In the world of industrial roofing, the biggest challenge is not the material itself, but the joints. Traditional screw-down roofing depends thousands of fasteners penetrating the sheets, each a potential point of leakage. Zinco Roofing Solution's **High Roof Seam (Standing Seam)** system eliminates this vulnerability entirely. This advanced architectural solution is engineered for the high-performance requirements of **modern airports, massive logistics parks in Bhiwandi, and state-of-the-art factories in Taloja MIDC**.
                            </p>
                            <p>
                                The "Standing Seam" gets its name from the prominent vertical ribs that join the panels together. Our system uses a **concealed clip fastening** mechanism. These clips are fixed to the structure, and the roof panels are then "zipped" or mechanically seamed over them. Because the fasteners are hidden beneath the panels and there are no holes drilled through the primary water-shedding surface, the system is 100% leak-proof. This makes it the preferred choice for facilities housing high-value machinery, sensitive electronics, or perishable goods that cannot tolerate even a single drop of Mumbai's torrential monsoon rain.
                            </p>

                            <h3>The Science of Thermal Expansion & Contraction</h3>
                            <p>
                                Steel expands when hot and contracts when cold. In the intense sun of **Navi Mumbai and Panvel**, a long metal roof can move by several centimeters throughout the day. In a traditional screw-down roof, this constant movement causes the fastener holes to "elongate" over time, eventually leading to leaks and structural fatigue. Our High Roof Seam system solves this with its **"floating" design**. The concealed clips allow the panels to slide back and forth as they expand and contract, without placing any stress on the fasteners or the panels themselves. This flexibility ensures a lifespan that often exceeds **30 to 50 years** with minimal maintenance.
                            </p>

                            <h3>Why Industrial Architects in Mumbai Specify Standing Seam</h3>
                            <ul>
                                <li><strong>Zero Penetration Leak Protection:</strong> By eliminating external fasteners, we remove the most common cause of roof failure. Your facility remains dry even in the most extreme 300mm+ daily rainfall events.</li>
                                <li><strong>Extreme Wind Resistance:</strong> The mechanical seaming process binds the panels together and to the structure with incredible strength, comfortably handling the high-velocity winds common along the **Konkan coast**.</li>
                                <li><strong>Long Continuous Spans:</strong> Our on-site roll-forming capability allows us to produce single panels from the eave to the ridge, eliminating the need for horizontal overlaps (end laps) on roofs of 50 meters or more.</li>
                                <li><strong>Modern Architectural Aesthetic:</strong> The crisp, clean lines of the vertical seams provide a sophisticated, contemporary look that enhances the brand image of corporate and commercial headquarters.</li>
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
                        <h2>Where We Excel</h2>
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
                        <h2>Installation Precision and Technical Integrity</h2>
                        <div className={styles.contentBlock}>
                            <p>
                                The success of a standing seam roof lies in the precision of the mechanical seamer and the spacing of the concealed clips. At Zinco, we use state-of-the-art automatic seaming machines that ensure a consistent, airtight seal along the entire length of the roof. Whether it's a **multi-thousand square meter warehouse in Panvel** or a high-end commercial building in **Vashi**, our engineering team provides full design and installation support.
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
                                <h4>Can a standing seam roof be installed on a low-slope roof?</h4>
                                <p>Yes, standing seam is one of the only metal roofing systems that can be reliably installed on very low-pitch roofs (as low as 1 or 2 degrees) due to its superior water-shedding capabilities and high vertical ribs.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Is this system more expensive than traditional roofing?</h4>
                                <p>While the initial material and installation cost is higher, the "total cost of ownership" is significantly lower. The elimination of leak-related maintenance and the extended lifespan of 50+ years make it a much better long-term investment.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Does it require any specialized maintenance?</h4>
                                <p>Standing seam roofs are virtually maintenance-free. Because there are no exposed rubber washers that can degrade in the sun, you only need to ensure that gutters and downspouts remain clear of debris.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Is it possible to install solar panels on a standing seam roof?</h4>
                                <p>Absolutely! In fact, standing seam is the best platform for solar. We use specialized non-penetrating clamps that grip the seam, allowing solar installation without drilling a single hole in your roof.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Invest in Lifetime Protection</h3>
                            <p>Contact us for detailed High Roof Seam engineering and installation quotes.</p>
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

export default HighRoofSeam;
