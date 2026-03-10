import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaDraftingCompass, FaHandshake, FaPaintBrush, FaHardHat, FaCheckCircle, FaIndustry, FaTemperatureHigh, FaLayerGroup, FaTools, FaPaintRoller, FaSolarPanel, FaShieldAlt } from 'react-icons/fa';
import SEO from '../components/shared/SEO';
import heroImage from '../assets/services-hero.webp';
import planningImg from '../assets/img 5.webp';
import consultationImg from '../assets/img4.webp';
import designImg from '../assets/img 6.webp';
import executionImg from '../assets/img 7.webp';
import styles from './Services.module.css';

import Card from '../components/shared/Card';

const Services = () => {
    const navigate = useNavigate();

    const productCategories = [
        {
            title: 'Metal Sheet Solutions',
            icon: <FaIndustry />,
            description: 'Premium colour coated, decking, and metal roofing profiles.'
        },
        {
            title: 'Insulation Sheet Solutions',
            icon: <FaTemperatureHigh />,
            description: 'Advanced thermal and acoustic insulation panels for efficiency.'
        },
        {
            title: 'UPVC & Polycarbonate Solutions',
            icon: <FaLayerGroup />,
            description: 'Durable, transparent, and chemical-resistant roofing sheets.'
        },
        {
            title: 'Additional Building Solutions',
            icon: <FaTools />,
            description: 'Essential accessories, ventilation, and structural components.'
        },
        {
            title: 'Industrial / Structural Painting',
            icon: <FaPaintRoller />,
            description: 'Professional industrial and structural painting services.',
            directPath: '/products/structural-painting'
        },
        {
            title: 'Solar Panel Installation',
            icon: <FaSolarPanel />,
            description: 'Expert solar panel mounting and installation for industrial roofs.',
            directPath: '/products/solar-installation'
        }
    ];

    const handleCategoryClick = (category) => {
        if (category.directPath) {
            navigate(category.directPath);
        } else {
            navigate(`/premium-roofing-sheets-navi-mumbai?category=${encodeURIComponent(category.title)}`);
        }
    };
    const serviceSections = [
        {
            id: 'planning',
            title: 'Planning & Preconstruction Excellence',
            icon: <FaDraftingCompass />,
            content: `At Zinco Roofing Solution, we believe that a successful project is won in the planning phase. Our preconstruction service is not just about logistics; it's a collaborative journey where we align our technical expertise with your vision. We work persistently with customers and planning groups to investigate every nuance of your industrial project. This deep-dive analysis allows us to identify potential challenges before they arise, ensuring a workflow that provides immense value and significantly lowers overall costs. We pride ourselves on optimizing efficiency without ever compromising on the structural integrity or the aesthetic requirements of your design. Our goal is to provide a roadmap that is as precise as our engineering.`,
            features: ['In-depth Site Analysis', 'Cost Optimization Strategies', 'Technical Feasibility Studies', 'Timeline Forecasting'],
            image: planningImg,
            color: '#3b82f6'
        },
        {
            id: 'consultation',
            title: 'Professional Technical Consultation',
            icon: <FaHandshake />,
            content: `Navigating the complexities of industrial roofing requires more than just materials; it requires honest, expert guidance. Our consultation service is built on a foundation of transparency and technical mastery. Whether you are in the early stages of a new build or looking to retrofit an existing structure, our consultants provide flawless guidance on the 'What, How, When, and Which'. We help you select the exact sort of material that ought to be utilized for your specific environmental conditions—whether it's high-salinity coastal areas or heat-intensive industrial zones. Zinco has built its reputation by supplying only the best and most honest material recommendations, ensuring that our customers make informed decisions that stand the test of time.`,
            features: ['Material Compatibility Advice', 'Installation Methodology', 'Longevity Assessment', 'Safety Compliance Audit'],
            image: consultationImg,
            color: '#f59e0b'
        },
        {
            id: 'design',
            title: 'Creative & Structural Design',
            icon: <FaPaintBrush />,
            content: `Zinco Roofing Solution is a pioneer in integrating creative architectural vision with rigid structural requirements. We provide a composed basic arrangement that encompasses outlining, technical sketching, and structural collecting. In our ordinary activities, we utilize the latest advancements in CAD and structural modeling to ensure that every roof we design is a masterpiece of modern engineering. By contracting both design and construction aspects with a single firm like Zinco, you eliminate the friction between the drawing board and the job site. Our unique approach ensures that the creative aspects of your building's crown are perfectly balanced with the heavy-duty performance required of an industrial facility.`,
            features: ['Advanced 3D Modeling', 'Structural Integrity Design', 'Aesthetic Customization', 'Integrated Workflow'],
            image: designImg,
            color: '#ef4444'
        },
        {
            id: 'site-visit',
            title: 'On-Site Execution & Quality Control',
            icon: <FaHardHat />,
            content: `The true measure of a roofing solution is its performance on-site. Our execution team brings decades of collective experience to every installation, ensuring that the theoretical excellence of our planning is matched by practical mastery on the ground. We persistently coordinate with on-site teams and plan groups to investigate real-time variables that might affect the project's outcome. Our site visits are not mere check-ins; they are rigorous quality control sessions where we investigate every seam, every bolt, and every coat. This relentless attention to detail is why a Zinco roof is synonymous with reliability. We ensure that the project delivers maximum esteem to the owner, providing a lower lifetime cost through superior workmanship.`,
            features: ['Expert Installation Teams', 'Rigorous Quality Checks', 'On-Site Fabrication', 'Safety-First Protocols'],
            image: executionImg,
            color: '#10b981'
        }
    ];

    return (
        <div className={styles.services}>
            <SEO
                title="Industrial Roofing Services in Navi Mumbai | Zinco Roofing"
                description="Expert Industrial Roofing Services in Navi Mumbai. Zinco Roofing provides high-quality installation, waterproofing, and retrofitting for factories and warehouses."
                keywords="Industrial Roofing Services in Navi Mumbai, industrial roofing installation, roof waterproofing, structural roofing solutions, Navi Mumbai roofing"
            />
            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }} fetchpriority="high">
                <div className={styles.heroOverlay} />
                <div className={styles.container}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Industrial Roofing Services <br />In Navi Mumbai
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        From rapid consultation to precise execution, we provide end-to-end industrial roofing solutions across the Mumbai Metropolitan Region.
                    </motion.p>
                </div>
            </section>

            <div className={styles.sectionsContainer}>
                {serviceSections.map((section, index) => (
                    <section
                        key={section.id}
                        id={section.id}
                        className={`${styles.serviceSection} ${index % 2 === 1 ? styles.reverse : ''}`}
                    >
                        <div className={styles.container}>
                            <div className={styles.sectionWrapper}>
                                {/* Image / Visual Side */}
                                <motion.div
                                    className={styles.visualBlock}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className={styles.abstractVisual} style={{ borderLeft: `4px solid ${section.color}` }}>
                                        <img src={section.image}
                                            alt={section.title}
                                            className={styles.sectionImage}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <div className={styles.meshBackground} />
                                        <div className={styles.overlayText}>
                                            <span className={styles.number}>0{index + 1}</span>
                                            <span className={styles.label}>Phase</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Text Content Side */}
                                <motion.div
                                    className={styles.textBlock}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className={styles.iconCircle} style={{ color: section.color, backgroundColor: `${section.color}15` }}>
                                        {section.icon}
                                    </div>
                                    <h2>{section.title}</h2>
                                    <p className={styles.descriptionText}>{section.content}</p>

                                    <div className={styles.featureList}>
                                        {section.features.map((feature, fIndex) => (
                                            <div key={fIndex} className={styles.featureItem}>
                                                <FaCheckCircle className={styles.checkIcon} style={{ color: section.color }} />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            <section className={styles.categorySection}>
                <div className={styles.container}>
                    <div className={styles.categoryHeader}>
                        <span>OUR PRODUCT RANGE</span>
                        <h2>Explore Our Solutions</h2>
                        <div className={styles.headerUnderline} />
                    </div>

                    <div className={styles.categoryGrid}>
                        {productCategories.map((category, index) => (
                            <div
                                key={category.title}
                                className={styles.cardWrapper}
                                onClick={() => handleCategoryClick(category)}
                            >
                                <Card variant="glass" className={styles.categoryCard}>
                                    <div className={styles.cardIcon}>{category.icon}</div>
                                    <div className={styles.cardContent}>
                                        <h3>{category.title}</h3>
                                        <p>{category.description}</p>
                                    </div>
                                    <div className={styles.cardFooter}>
                                        <span>View Category</span>
                                        <span className={styles.arrow}>→</span>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className={styles.ctaSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.ctaBox}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Ready to start your project?</h2>
                        <p>Let's build a foundation of trust together. Our experts are ready to consult on your next industrial masterpiece.</p>
                        <button className={styles.ctaButton}>Get Expert Consultation</button>
                    </motion.div>
                </div>
            </div>

            <section className={styles.seoSection}>
                <div className={styles.container}>
                    <div className={styles.seoHeader}>
                        <h2>Industrial Roofing Services in Navi Mumbai: The Zinco Excellence</h2>
                        <div className={styles.headerLine} />
                    </div>

                    <div className={styles.seoContent}>
                        <p className={styles.leadPara}>
                            Protecting your industrial assets from the harsh coastal climate of <strong>Navi Mumbai</strong> requires precision, durability, and technical mastery. Zinco Roofing Solutions delivers comprehensive engineering excellence for every factory and warehouse.
                        </p>

                        <div className={styles.seoBenefitsGrid}>
                            <Card variant="surface" className={styles.seoBenefitCard}>
                                <div className={styles.benefitHeader}>
                                    <FaShieldAlt className={styles.benefitIcon} />
                                    <h3>Navi Mumbai Resilience</h3>
                                </div>
                                <ul className={styles.benefitPoints}>
                                    <li>Coastal-grade anti-corrosive materials</li>
                                    <li>Specialized coatings for high humidity</li>
                                    <li>High-performance weather shield</li>
                                    <li>Minimal operational downtime</li>
                                </ul>
                            </Card>

                            <Card variant="surface" className={styles.seoBenefitCard}>
                                <div className={styles.benefitHeader}>
                                    <FaDraftingCompass className={styles.benefitIcon} />
                                    <h3>Engineering Mastery</h3>
                                </div>
                                <ul className={styles.benefitPoints}>
                                    <li>Advanced CAD modeling & structural analysis</li>
                                    <li>Custom fabrication for industrial sheds</li>
                                    <li>Topography-optimized roof designs</li>
                                    <li>International engineering standards</li>
                                </ul>
                            </Card>

                            <Card variant="surface" className={styles.seoBenefitCard}>
                                <div className={styles.benefitHeader}>
                                    <FaCheckCircle className={styles.benefitIcon} />
                                    <h3>Full Lifecycle Support</h3>
                                </div>
                                <ul className={styles.benefitPoints}>
                                    <li>Expert technical consultation & planning</li>
                                    <li>Precise on-site execution & quality control</li>
                                    <li>Insulated panel & metal sheet expertise</li>
                                    <li>Scalable solutions for all sectors</li>
                                </ul>
                            </Card>

                            <Card variant="surface" className={styles.seoBenefitCard}>
                                <div className={styles.benefitHeader}>
                                    <FaTools className={styles.benefitIcon} />
                                    <h3>Restoration & Efficiency</h3>
                                </div>
                                <ul className={styles.benefitPoints}>
                                    <li>Professional retrofitting & waterproofing</li>
                                    <li>Cost-effective restoration roadmaps</li>
                                    <li>Enhanced thermal & energy performance</li>
                                    <li>Sustainable building practices</li>
                                </ul>
                            </Card>
                        </div>

                        <div className={styles.seoSummaryCard}>
                            <Card variant="gradient">
                                <h3>Partner with the Leaders in Industrial Roofing</h3>
                                <p>
                                    Zinco Roofing Solution is dedicated to providing technically sound material recommendations and flawless execution. Join the numerous satisfied industrial owners across Navi Mumbai who trust Zinco for their structural integrity.
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;

