import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaCheckCircle, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import heroImg from '../../assets/productshero/rockwool-hero.png';
import styles from './ProductCategory.module.css';

const RockwoolGlasswool = () => {
    const navigate = useNavigate();
    const features = [
        'High Rib Profile (5 Crests & 3 Mini-Ribs)',
        'Superior Fire Resistance (Up to 850°C)',
        'Excellent Sound Absorption Properties',
        'Customizable Thickness & Density',
        'Energy Efficient Thermal Insulation',
        'Long Span Capability for Industrial Roofs'
    ];

    const specifications = [
        { label: 'Profile Type', value: 'High Rib (5 Crests + 3 Mini Ribs)' },
        { label: 'Glasswool Density', value: '10 - 50 kg/m³' },
        { label: 'Rockwool Density', value: '50 - 200 kg/m³' },
        { label: 'Glasswool Thickness', value: '20mm - 200mm' },
        { label: 'Rockwool Thickness', value: '30mm - 100mm' },
        { label: 'Temperature Range', value: 'Glasswool: 230-260°C | Rockwool: 700-850°C' }
    ];

    const applications = [
        'Data Centers in Navi Mumbai',
        'Sound Studios in Mumbai',
        'Industrial Plants in Taloja',
        'Commercial Multiplexes',
        'Cold Storages in Panvel',
        'Boiler Room Enclosures'
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
                title="Rockwool & Glasswool Roof Panels in Navi Mumbai | Zinco"
                description="Fire-resistant Rockwool and Glasswool insulated roof panels for industrial sheds and sound studios in Taloja, Rabale, and Mumbai. High acoustic control."
                keywords="rockwool panels, glasswool insulation, fire resistant roofing, acoustic roof panels mumbai, industrial insulation"
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
                            Rockwool & Glasswool Roof Panels
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            High-performance insulated panels with superior fire safety and acoustic control.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <h2>Specialized Industrial Insulation: High-Rib Rockwool & Glasswool Panels</h2>
                            <p>
                                In the high-intensity manufacturing environments of **Taloja MIDC, Rabale, and Mahape**, specialized insulation is not just a luxury—it's a critical safety and operational requirement. Zinco Roofing Solution's **Rockwool and Glasswool Roof Panels** are engineered for facilities where thermal management, fire resistance, and acoustic control are paramount. Our panels feature a **High Rib Profile with 5 main crests and 3 parallel mini ribs**, providing the structural rigidity needed for long-span industrial roofs while housing a core of world-class insulation material.
                            </p>
                            <p>
                                The "High Rib" design is a game-changer for industrial sheds. By increasing the height and number of ribs, we've created a panel that can bridge larger gaps between purlins with minimal deflection. This is particularly important for the massive warehouses and processing plants in **Navi Mumbai**, where speed of construction and structural safety must go hand-in-hand. Inside these ribs sits high-density mineral wool or glass fibers, creating a thermal barrier that significantly reduces heat ingress and maintains a stable interior temperature.
                            </p>

                            <h3>Rockwool: The Ultimate Fire Barrier</h3>
                            <p>
                                For chemical factories, textile mills, and data centers in **Mumbai and Taloja**, fire safety is the top priority. Our **Rockwool panels** are manufactured from volcanic rock (basalt), which is naturally non-combustible. With a melting point exceeding **1000°C**, Rockwool acts as a superior fire barrier, preventing the spread of flames and protecting the building's structural steel frame during an emergency. It is the gold standard for facilities handling flammable materials or high-value equipment.
                            </p>

                            <h3>Glasswool: Precision Acoustic Control</h3>
                            <p>
                                In commercial spaces like multiplexes, recording studios, and large office complexes in **Vashi and Mahape**, sound control is essential. **Glasswool** is a lightweight, flexible insulation made from recycled glass. Its unique porous structure is exceptionally good at trapping sound waves, boasting a high **Noise Reduction Coefficient (NRC)**. Whether you want to keep the heavy drumming of Mumbai rain out or contain the noise within an industrial workshop, Glasswool panels provide the acoustic serenity required for modern work environments.
                            </p>

                            <h3>Why Industrialists Choose Zinco Insulation Panels</h3>
                            <ul>
                                <li><strong>Unmatched Fire Safety:</strong> Meet the most stringent industrial fire codes with panels that do not support combustion or emit toxic smoke during a fire.</li>
                                <li><strong>Energy Efficiency:</strong> Dramatically reduce your HVAC (air conditioning) costs by creating a high-resistance (High R-value) thermal envelope around your facility.</li>
                                <li><strong>Structural Integrity:</strong> The 5-crest high-rib profile ensures that your roof is as strong as it is insulated, capable of handling high wind and monsoon loads.</li>
                                <li><strong>Longevity & Durability:</strong> Both Rockwool and Glasswool are inorganic materials, meaning they won't rot, support mold growth, or attract pests over their multi-decade lifespan.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Comparison & Specifications</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.customTable}>
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Glasswool</th>
                                        <th>Rockwool</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Density (kg/m³)</strong></td>
                                        <td>10 - 50</td>
                                        <td>50 - 200</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Thickness (mm)</strong></td>
                                        <td>20 - 200</td>
                                        <td>30 - 100</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Temperature (°C)</strong></td>
                                        <td>230 - 260</td>
                                        <td>700 - 850</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Technical Profile Details</h2>
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
                        <h2>Performance Comparison</h2>
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
                        <h2>Major Installations</h2>
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
                        <h2>Installation and Technical Reliability</h2>
                        <div className={styles.contentBlock}>
                            <p>
                                Proper joint sealing is the key to maximizing the performance of insulated panels. Our installation teams in **Panvel and Navi Mumbai** use specialized tongue-and-groove joints or overlapping techniques that eliminate thermal bridging. This ensures that every square meter of your roof contributes to the thermal and acoustic efficiency of the building.
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
                                <h4>Which is better for soundproofing: Rockwool or Glasswool?</h4>
                                <p>While both are excellent, Rockwool's higher density makes it slightly better at blocking low-frequency noise (like heavy machinery), whereas Glasswool is highly effective for general mid-to-high frequency sound absorption.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Are these panels moisture-resistant?</h4>
                                <p>Our insulation materials are treated with water-repellent additives. However, the outer metal skin provides the primary protection against the heavy **Mumbai monsoons**, keeping the core dry and effective.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Can I install solar panels on top of these roofs?</h4>
                                <p>Yes! The 5-crest high-rib profile provides excellent structural strength for solar mounting brackets. We recommend consulting our technical team in **Taloja** for specific load-bearing calculations for your project.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>What is the expected lifespan of these insulated panels?</h4>
                                <p>Our panels are designed for a 20-30 year service life. Because the core materials are inorganic and the skins are pre-painted Galvalume, they require very little maintenance over their lifespan.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Prioritize Safety & Sound Control</h3>
                            <p>Get a customized quote for Rockwool/Glasswool panels today.</p>
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

export default RockwoolGlasswool;
