import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaDraftingCompass, FaHandshake, FaPaintBrush, FaHardHat, FaCheckCircle, FaIndustry, FaTemperatureHigh, FaLayerGroup, FaTools, FaPaintRoller, FaSolarPanel } from 'react-icons/fa';
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
                            Finding reliable <strong>Industrial Roofing Services in Navi Mumbai</strong> is the key to protecting your industrial assets from the harsh coastal climate of the Mumbai Metropolitan Region. Zinco Roofing Solutions offers a comprehensive suite of services designed specifically for factories, warehouses, and commercial infrastructures that demand precision, durability, and technical mastery. Our approach combines decades of field experience with modern engineering to deliver roofs that stand the test of time and environmental stress.
                        </p>

                        <div className={styles.seoGrid}>
                            <div className={styles.seoCard}>
                                <h3>Why Our Industrial Roofing Services in Navi Mumbai Stand Out?</h3>
                                <p>
                                    Navi Mumbai is a hub for industrial growth, but its proximity to the sea means structures are prone to corrosion and high humidity. Our <strong>Industrial Roofing Services in Navi Mumbai</strong> utilize advanced anti-corrosive materials and specialized coatings that ensure your roof remains structurally sound for decades. We don't just provide a roof; we provide a high-performance shield for your business operations, ensuring minimal downtime and maximum safety for your workforce and machinery.
                                </p>
                            </div>
                            <div className={styles.seoCard}>
                                <h3>Technical Excellence and Engineering</h3>
                                <p>
                                    What differentiates our <strong>Industrial Roofing Services in Navi Mumbai</strong> is our commitment to engineering excellence. We understand that a roof is a critical structural component that impacts the internal temperature, safety, and productivity of your facility. Our <strong>Industrial Roofing Services in Navi Mumbai</strong> include specialized structural collects, advanced CAD modeling, and custom fabrication. This level of detail ensures that your industrial shed or warehouse is optimized for the specific challenges of the local topography.
                                </p>
                            </div>
                        </div>

                        <div className={styles.seoTextBody}>
                            <h3>Comprehensive Industrial Roofing Services in Navi Mumbai for All Sectors</h3>
                            <p>
                                From initial technical consultation and planning to precise on-site execution, our <strong>Industrial Roofing Services in Navi Mumbai</strong> cover the entire lifecycle of your roofing project. We specialize in metal sheet installations, insulated sandwich panels, and professional waterproofing. Our team of experts conducts rigorous quality checks at every phase, ensuring that every bolt, seam, and joint meets international engineering standards. Whether it's a new construction or a complex expansion, we provide the scalability and technical depth required for success.
                            </p>

                            <h3>Waterproofing and Retrofitting: Specialized Industrial Roofing Services in Navi Mumbai</h3>
                            <p>
                                In addition to new installations, our <strong>Industrial Roofing Services in Navi Mumbai</strong> encompass high-end retrofitting and professional waterproofing. We investigate every nuance of leaky roofs or aging structures to provide a roadmap for restoration that saves you from costly total replacements. By utilizing our <strong>Industrial Roofing Services in Navi Mumbai</strong>, owners can extend the life of their existing assets while improving the overall thermal performance of the building. This proactive approach to maintenance is a hallmark of our service quality.
                            </p>

                            <h3>Customization and Sustainability</h3>
                            <p>
                                Modern industrial facilities require more than just protection; they require energy efficiency and aesthetic appeal. As part of our <strong>Industrial Roofing Services in Navi Mumbai</strong>, we offer integrated solutions like solar panel mounting, natural ventilation systems, and premium UPVC solutions. By choosing Zinco, you are opting for <strong>Industrial Roofing Services in Navi Mumbai</strong> that prioritize lower lifetime costs and sustainable building practices. We help you create an environment that is both eco-friendly and economically viable.
                            </p>

                            <div className={styles.seoFooter}>
                                <h3>Partner with the Leaders in Industrial Roofing Services in Navi Mumbai</h3>
                                <p>
                                    Zinco Roofing Solution is dedicated to providing the most honest and technically sound material recommendations in the industry. Our track record of successful projects across Navi Mumbai speaks for itself. If you are looking for <strong>Industrial Roofing Services in Navi Mumbai</strong> that combine creative architectural design with rigid structural integrity, contact us today. Let our experts provide the flawless guidance and execution your industrial project deserves. We are committed to building foundations of trust, one roof at a time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;

