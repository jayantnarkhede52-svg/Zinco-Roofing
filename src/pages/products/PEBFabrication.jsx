import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaIndustry, FaMapMarkerAlt } from 'react-icons/fa';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/services-hero.png';
import styles from './ProductCategory.module.css';

const PEBFabrication = () => {
    const navigate = useNavigate();
    const features = [
        'PEB Fabricators in Navi Mumbai',
        'Industrial Shed Contractors Panvel',
        'Steel Building Construction Taloja',
        'Pre-Engineered Godowns Bhiwandi',
        'Turnkey Shed Solutions Mumbai',
        'Fastest PEB Erection'
    ];

    const specifications = [
        { label: 'Primary Members', value: 'Built-up Steel Sections' },
        { label: 'Secondary Members', value: 'Galvanized Purlins' },
        { label: 'Roofing', value: 'Color Coated / PUF Panels' },
        { label: 'Design Standards', value: 'IS 800 / MBMA' },
        { label: 'Location', value: 'Serving Panvel, Taloja, Mumbai' },
        { label: 'Warranty', value: 'Structure & Sheeting Warranty' }
    ];

    const applications = [
        'Warehouses on Old Mumbai-Pune Highway',
        'Factories in Taloja MIDC',
        'Logistics Parks in Bhiwandi',
        'Cold Storage in Panvel',
        'Showrooms in Navi Mumbai',
        'Industrial Parks in Khopoli'
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
                            PEB Structure Fabrication in Navi Mumbai & Panvel
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Leading Pre-Engineered Building (PEB) contractors and industrial shed fabricators in Taloja, Panvel, and Mumbai.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <h2>Turnkey PEB Solutions: The Future of Industrial Construction in Navi Mumbai</h2>
                            <p>
                                In the fast-paced industrial landscape of **Navi Mumbai, Taloja MIDC, and Panvel**, the speed of infrastructure deployment can be the difference between meeting market demand and missing out. Pre-Engineered Buildings (PEB) have revolutionized the construction industry, offering a faster, more cost-effective, and highly flexible alternative to traditional civil construction. At Zinco Roofing Solution, we specialize in provide complete **Turnkey PEB Shed Solutions**, from the initial architectural design to the final on-site erection.
                            </p>
                            <p>
                                A PEB is not just a steel shed; it is a meticulously engineered system of structural components that work in harmony. Our buildings are optimized using advanced design software like **MBS and STAAD Pro**, ensuring that every gram of steel is placed where it is needed most. This "intelligent design" approach allows us to create large, clear-span structures (up to 60 meters or more without internal columns) that are ideal for the modern logistics requirements of **Bhiwandi and Panvel**'s massive warehouses.
                            </p>

                            <h3>PEB vs. Conventional Steel: Why the Shift?</h3>
                            <p>
                                The primary advantage of PEB over conventional steel-fabricated sheds lies in weight and precision. In a conventional structure, uniform hot-rolled sections are used throughout, leading to excess weight in areas with lower stress. Our PEB members are **"built-up" sections**—tapered I-beams where the depth of the section is increased in areas of higher bending moment. This can reduce the total weight of the structure by 20-30%, significantly lowering material costs while maintaining or even increasing overall structural integrity.
                            </p>

                            <h3>Why Industrial Shed Owners in Mumbai Trust Zinco</h3>
                            <ul>
                                <li><strong>Rapid Project Delivery:</strong> Because 90% of the fabrication happens in a controlled factory environment in Navi Mumbai, on-site erection is extremely fast. A high-quality PEB warehouse can be ready for use in weeks, not months.</li>
                                <li><strong>Seismic and Wind Resistance:</strong> Our structures are designed to comfortably exceed the **Zone III seismic requirements** and the high wind loads (up to 150 kmph) common in the Mumbai coastal region.</li>
                                <li><strong>Aesthetic Flexibility:</strong> We offer a variety of wall and roof cladding options, including **PUF panels for cold storage** or high-rib color-coated sheets, allowing you to match the aesthetic and functional needs of your facility.</li>
                                <li><strong>Low Maintenance:</strong> High-quality factory-applied coatings and precision-bolted joints mean that our buildings require minimal maintenance compared to conventional welded structures.</li>
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
                        <h2>Why Choose us for PEB in Mumbai?</h2>
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
                        <h2>Key Projects Locations</h2>
                        <div className={styles.applicationsGrid}>
                            {applications.map((app, index) => (
                                <Card key={index} variant="solid" className={styles.appCard}>
                                    <FaIndustry style={{ color: 'var(--accent-500)', marginBottom: '0.5rem' }} />
                                    <h4>{app}</h4>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Design Standards and Engineering Quality</h2>
                        <div className={styles.contentBlock}>
                            <p>
                                Every structure we build complies with the latest **IS 800 (Indian Standard code for general steel construction)** and **MBMA (Metal Building Manufacturers Association)** guidelines. Whether you are building a small manufacturing unit in **Rabale** or a multi-thousand-square-foot logistics park in **Bhiwandi**, our engineering team ensures that every bolted connection and structural member is optimized for safety and efficiency.
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
                                <h4>How long does it take to erect a 10,000 sq ft PEB shed?</h4>
                                <p>Once the foundation is ready and the fabrication is complete, the on-site erection for a standard 10,000 sq ft shed in areas like **Panvel** usually takes between 3 to 5 weeks, depending on the complexity and weather conditions.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Can a PEB structure be expanded in the future?</h4>
                                <p>Yes, one of the greatest advantages of PEB is that it is designed with future expansion in mind. We can easily add additional bays or even increase the height of the building with minimal disruption to your ongoing operations.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Is it possible to dismantle and move a PEB building?</h4>
                                <p>Absolutely. Because our PEBs are primarily bolted structures, they can be dismantled and re-erected at a different location with nearly 90% material recovery. This makes them a highly versatile asset for expanding businesses.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>What kind of lifespan can I expect from a PEB structure?</h4>
                                <p>With proper design and high-quality coatings, a PEB structure is designed for a service life of 30 to 50 years. Regular inspections and minor maintenance of the roofing sheets can further extend this lifespan.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Planning a Warehouse in Panvel?</h3>
                            <p>Get the best PEB structural quote today!</p>
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

export default PEBFabrication;
