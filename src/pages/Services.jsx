import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaDraftingCompass, FaHandshake, FaPaintBrush, FaHardHat, FaCheckCircle, FaIndustry, FaTemperatureHigh, FaLayerGroup, FaTools, FaPaintRoller, FaSolarPanel, FaShieldAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/shared/SEO';
import heroImage from '../assets/services-hero.webp';
import planningImg from '../assets/img 5.webp';
import consultationImg from '../assets/img4.webp';
import designImg from '../assets/img 6.webp';
import executionImg from '../assets/img 7.webp';
import styles from './Services.module.css';

import Card from '../components/shared/Card';
import QuoteForm from '../components/home/QuoteForm';

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

    const specializedServices = [
        {
            title: 'Roof Leak Repair',
            desc: 'Immediate crack sealing and leak prevention for industrial sheds.',
            path: '/services/industrial-roof-leak-repair',
            icon: <FaShieldAlt />
        },
        {
            title: 'PEB Fabrication',
            desc: 'Precision engineering for pre-engineered industrial buildings.',
            path: '/services/peb-structure-fabrication',
            icon: <FaIndustry />
        },
        {
            title: 'Warehouse Roofing',
            desc: 'Large-scale roofing solutions for logistics and storage hubs.',
            path: '/services/warehouse-roofing-solutions',
            icon: <FaLayerGroup />
        },
        {
            title: 'Metal Installation',
            desc: 'Expert sheet fixing and structural roof erection services.',
            path: '/services/metal-roof-installation',
            icon: <FaTools />
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
            content: `At Zinco Roofing Solution, we believe that a successful project for industrial roofing services in navi mumbai is won in the planning phase. Our preconstruction service for industrial roofing services in navi mumbai is not just about logistics; it's a collaborative journey. We work with groups to investigate every nuance of industrial roofing services in navi mumbai projects. This deep-dive analysis of industrial roofing services in navi mumbai allow us to identify challenges, ensuring industrial roofing services in navi mumbai provide immense value. We pride ourselves on optimizing industrial roofing services in navi mumbai efficiency without ever compromising on integrity. Our industrial roofing services in navi mumbai roadmap is precise.`,
            features: ['In-depth Site Analysis', 'Cost Optimization Strategies', 'Technical Feasibility Studies', 'Timeline Forecasting'],
            image: planningImg,
            color: '#3b82f6'
        },
        {
            id: 'consultation',
            title: 'Professional Technical Consultation',
            icon: <FaHandshake />,
            content: `Navigating the complexities of industrial roofing services in navi mumbai requires more than just materials. Our consultation for industrial roofing services in navi mumbai is built on a foundation of transparency. Whether you are looking for industrial roofing services in navi mumbai build or retrofitting, our consultants provide flawless guidance. We help you select the exact material for industrial roofing services in navi mumbai specific environmental conditions. Zinco has built its reputation by supplying the best industrial roofing services in navi mumbai material recommendations, ensuring that industrial roofing services in navi mumbai stand the test of time.`,
            features: ['Material Compatibility Advice', 'Installation Methodology', 'Longevity Assessment', 'Safety Compliance Audit'],
            image: consultationImg,
            color: '#f59e0b'
        },
        {
            id: 'design',
            title: 'Creative & Structural Design',
            icon: <FaPaintBrush />,
            content: `Zinco Roofing Solution is a pioneer in industrial roofing services in navi mumbai, integrating creative architectural vision with requirements. We provide a composed arrangement for industrial roofing services in navi mumbai outlining and structural collecting. In our ordinary activity for industrial roofing services in navi mumbai, we utilize the latest advancements to ensure that every roof we design for industrial roofing services in navi mumbai is a masterpiece. By contracting industrial roofing services in navi mumbai with a single firm like Zinco, you eliminate friction. Our unique approach to industrial roofing services in navi mumbai ensures that creative aspects are perfectly balanced with performance.`,
            features: ['Advanced 3D Modeling', 'Structural Integrity Design', 'Aesthetic Customization', 'Integrated Workflow'],
            image: designImg,
            color: '#ef4444'
        },
        {
            id: 'site-visit',
            title: 'On-Site Execution & Quality Control',
            icon: <FaHardHat />,
            content: `The true measure of industrial roofing services in navi mumbai is its performance on-site. Our execution team for industrial roofing services in navi mumbai brings decades of experience to every installation. We persistently coordinate to investigate variables that might affect industrial roofing services in navi mumbai outcomes. Our site visits for industrial roofing services in navi mumbai are rigorous quality control sessions where we investigate every seam for industrial roofing services in navi mumbai. This relentless attention to industrial roofing services in navi mumbai detail is why Zinco is synonymous with reliability. We ensure that industrial roofing services in navi mumbai delivers maximum esteem.`,
            features: ['Expert Installation Teams', 'Rigorous Quality Checks', 'On-Site Fabrication', 'Safety-First Protocols'],
            image: executionImg,
            color: '#10b981'
        }
    ];

    return (
        <div className={styles.services}>
            <SEO
                title="Industrial Roofing Services in Navi Mumbai | Zinco Roofing Specialist"
                description="Expert Industrial Roofing Services in Navi Mumbai. Zinco Roofing provides high-quality industrial roofing services in navi mumbai for factories and warehouses."
                keywords="Industrial Roofing Services in Navi Mumbai, industrial roofing installation, roof waterproofing, structural roofing solutions, industrial roofing services in navi mumbai"
                canonicalUrl="https://www.zincoroof.com/industrial-roofing-services-navi-mumbai"
            />
            <Helmet>
                <link rel="preload" as="image" href={heroImage} fetchpriority="high" />
            </Helmet>
            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.heroOverlay} />
                <div className={styles.container}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Industrial Roofing Services In Navi Mumbai
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        From rapid consultation to precise execution, we provide end-to-end <strong>industrial roofing services in navi mumbai</strong> across the region.
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
                                            alt={`${section.title} - Industrial Roofing Services in Navi Mumbai`}
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

            <section className={styles.specializedGridSection}>
                <div className={styles.container}>
                    <div className={styles.categoryHeader}>
                        <span>HIGH-INTENT SOLUTIONS</span>
                        <h2>Specialized Industrial Roofing Services</h2>
                        <div className={styles.headerUnderline} />
                    </div>
                    <div className={styles.categoryGrid}>
                        {specializedServices.map((service, index) => (
                            <div
                                key={service.title}
                                className={styles.cardWrapper}
                                onClick={() => navigate(service.path)}
                            >
                                <Card variant="glass" className={styles.categoryCard}>
                                    <div className={styles.cardIcon}>{service.icon}</div>
                                    <div className={styles.cardContent}>
                                        <h3>{service.title}</h3>
                                        <p>{service.desc}</p>
                                    </div>
                                    <div className={styles.cardFooter}>
                                        <span>View Case Studies</span>
                                        <span className={styles.arrow}>→</span>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.categorySection}>
                <div className={styles.container}>
                    <div className={styles.categoryHeader}>
                        <span>OUR PRODUCT RANGE</span>
                        <h2>Explore Our Industrial Solutions</h2>
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

            <QuoteForm />
            <div className={styles.ctaSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.ctaBox}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Ready to start your industrial project?</h2>
                        <p>Let's build a foundation of trust together with our expert <strong>industrial roofing services in navi mumbai</strong>.</p>
                        <button className={styles.ctaButton}>Get Expert Consultation</button>
                    </motion.div>
                </div>
            </div>

            <section className={styles.seoSection}>
                <div className={styles.container}>
                    <div className={styles.seoHeader}>
                        <h2>Industrial Roofing Services in Navi Mumbai Excellence</h2>
                        <div className={styles.headerLine} />
                    </div>

                    <div className={styles.seoContent}>
                        <p className={styles.leadPara}>
                            Protecting your industrial assets with professional <strong>industrial roofing services in navi mumbai</strong> requires precision and technical mastery. Zinco Roofing Solution delivers <strong>industrial roofing services in navi mumbai</strong> for every project.
                        </p>

                        <div className={styles.seoBenefitsGrid}>
                            <Card variant="surface" className={styles.seoBenefitCard}>
                                <div className={styles.benefitHeader}>
                                    <FaShieldAlt className={styles.benefitIcon} />
                                    <h3>Navi Mumbai Resilience</h3>
                                </div>
                                <ul className={styles.benefitPoints}>
                                    <li>Coastal industrial roofing services in navi mumbai</li>
                                    <li>humidity-resistant industrial roofing services in navi mumbai</li>
                                    <li>High-performance industrial roofing services in navi mumbai</li>
                                    <li>Minimal downtime industrial roofing services in navi mumbai</li>
                                </ul>
                            </Card>

                            <Card variant="surface" className={styles.seoBenefitCard}>
                                <div className={styles.benefitHeader}>
                                    <FaDraftingCompass className={styles.benefitIcon} />
                                    <h3>Engineering Mastery</h3>
                                </div>
                                <ul className={styles.benefitPoints}>
                                    <li>industrial roofing services in navi mumbai CAD modeling</li>
                                    <li>industrial roofing services in navi mumbai fabrication</li>
                                    <li>industrial roofing services in navi mumbai roof designs</li>
                                    <li>industrial roofing services in navi mumbai standards</li>
                                </ul>
                            </Card>

                            <Card variant="surface" className={styles.seoBenefitCard}>
                                <div className={styles.benefitHeader}>
                                    <FaCheckCircle className={styles.benefitIcon} />
                                    <h3>Full Lifecycle Support</h3>
                                </div>
                                <ul className={styles.benefitPoints}>
                                    <li>industrial roofing services in navi mumbai planning</li>
                                    <li>industrial roofing services in navi mumbai execution</li>
                                    <li>industrial roofing services in navi mumbai expertise</li>
                                    <li>industrial roofing services in navi mumbai solutions</li>
                                </ul>
                            </Card>

                            <Card variant="surface" className={styles.seoBenefitCard}>
                                <div className={styles.benefitHeader}>
                                    <FaTools className={styles.benefitIcon} />
                                    <h3>Restoration & Efficiency</h3>
                                </div>
                                <ul className={styles.benefitPoints}>
                                    <li>industrial roofing services in navi mumbai retrofitting</li>
                                    <li>industrial roofing services in navi mumbai roadmaps</li>
                                    <li>industrial roofing services in navi mumbai performance</li>
                                    <li>industrial roofing services in navi mumbai practices</li>
                                </ul>
                            </Card>
                        </div>

                        <div className={styles.seoSummaryCard}>
                            <Card variant="gradient">
                                <h3>Partner with the Leaders in industrial roofing services in navi mumbai</h3>
                                <p>
                                    Zinco is dedicated to providing industrial roofing services in navi mumbai. Join the numerous satisfied owners who trust our <strong>industrial roofing services in navi mumbai</strong>.
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

