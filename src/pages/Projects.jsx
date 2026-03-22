import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaBuilding, FaIndustry, FaPlaceOfWorship } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/shared/SEO';
import heroImage from '../assets/projects-hero.webp';
import QuoteForm from '../components/home/QuoteForm';
import metalFeatured from '../assets/Metal roofing images/Metal roofing images/coloured-roofing-sheet-500x500-1.webp';
import pufFeatured from '../assets/Puf panel images/Puf panel images/1001155532.webp';
import polyFeatured from '../assets/Transparent polycarbonate/Transparent polycarbonate/1000014018.webp';
import deckFeatured from '../assets/Dect sheet/Dect sheet/1000014053.webp';
import warehouseShot from '../assets/Upvc images/Upvc images/1000014135.webp';
import industrialShot from '../assets/Upvc images/Upvc images/1000014394.webp';
import vortexImage from '../assets/projects/vortex-badlapur.webp';
import godrejImage from '../assets/projects/Godreh-ambarnath.webp';
import valvolineImage from '../assets/projects/Valvoline-ambarnath.webp';
import ltImage from '../assets/projects/L&T construction.webp';
import regencyImage from '../assets/projects/Regency.webp';
import amarStudioImage from '../assets/projects/amar studio.webp';
import cyberteckImage from '../assets/projects/Cyberteck.webp';
import parasnathImage from '../assets/projects/Parasnath temple.webp';
import bajajImage from '../assets/projects/Bajaj electrical.webp';
import iskconImage from '../assets/projects/Iskcon temple.webp';
import karjatImage from '../assets/projects/Karjat farmhouse.webp';
import lodhaImage from '../assets/projects/lodha ganesh ghar.webp';
import maheshImage from '../assets/projects/Mahesh fashion.webp';
import ndImage from '../assets/projects/Nd Studio.webp';
import newrekaImage from '../assets/projects/newreka chemical.webp';
import palmsImage from '../assets/projects/palms & water resort.webp';
import paragonImage from '../assets/projects/Paragon.webp';
import vedantImage from '../assets/projects/vedant dyes.webp';
import styles from './Projects.module.css';

const projects = [
    { name: 'Knott Vortex', location: 'Badlapur', category: 'Industrial', icon: FaIndustry, image: vortexImage },
    { name: 'Godrej Industry Ltd', location: 'Ambernath', category: 'Industrial', icon: FaIndustry, image: godrejImage },
    { name: 'Valvoline Cummins Ltd', location: 'Ambernath', category: 'Industrial', icon: FaIndustry, image: valvolineImage },
    { name: 'L & T Construction', location: 'Navi Mumbai', category: 'Construction', icon: FaBuilding, image: ltImage },
    { name: 'Regency Sales Office', location: 'Kalyan', category: 'Commercial', icon: FaBuilding, image: regencyImage },
    { name: 'Amar Studio', location: 'Malad', category: 'Commercial', icon: FaBuilding, image: amarStudioImage },
    { name: 'Cyberteck Pvt Ltd', location: 'Thane', category: 'Industrial', icon: FaIndustry, image: cyberteckImage },
    { name: 'Parasnath Temple', location: 'Jharkhand', category: 'Religious', icon: FaPlaceOfWorship, image: parasnathImage },
    { name: 'Newreka Chemical Pvt Ltd', location: 'Dombivali - MIDC', category: 'Chemical', icon: FaIndustry, image: newrekaImage },
    { name: 'Vedant Dye & Intermediate', location: 'Taloja', category: 'Industrial', icon: FaIndustry, image: vedantImage },
    { name: 'Iskcon Temple', location: 'Palghar', category: 'Religious', icon: FaPlaceOfWorship, image: iskconImage },
    { name: 'Paragaon Centre', location: 'Worli', category: 'Commercial', icon: FaBuilding, image: paragonImage },
    { name: 'Bajaj Electricals', location: 'Chakkan', category: 'Industrial', icon: FaIndustry, image: bajajImage },
    { name: 'Nd Studio', location: 'Karjat', category: 'Commercial', icon: FaBuilding, image: ndImage },
    { name: 'Palms & Water Resort', location: 'Kalyan', category: 'Hospitality', icon: FaBuilding, image: palmsImage },
    { name: 'Karjat Farmhouse', location: 'Karjat', category: 'Residential', icon: FaBuilding, image: karjatImage },
    { name: 'Lodha Ganesh Ghar', location: 'Dombivli', category: 'Religious', icon: FaPlaceOfWorship, image: lodhaImage },
    { name: 'Mahesh Fashion', location: 'Bhiwandi', category: 'Textile', icon: FaIndustry, image: maheshImage },
    { name: 'Snowman Logistics', location: 'Taloja', category: 'Logistics', icon: FaIndustry },
    { name: 'Multiwall Sheet Installation', location: 'Palava City', category: 'Residential', icon: FaBuilding },
    { name: 'Alvi Tech Pvt. Ltd.', location: 'Dombivli', category: 'Industrial', icon: FaIndustry },
    { name: 'Himalaya Society', location: 'Lodha', category: 'Residential', icon: FaBuilding },
    { name: 'Balaji Builder', location: 'Kalyan', category: 'Construction', icon: FaBuilding },
    { name: 'Adient India Pvt Ltd', location: 'Pune', category: 'Automotive', icon: FaIndustry }
];

const Projects = () => {
    return (
        <div className={styles.projects}>
            <SEO
                title="Industrial Roofing Projects in Navi Mumbai | Zinco Portfolio"
                description="Explore our Industrial Roofing Projects in Navi Mumbai portfolio. Zinco Roofing showcases Industrial Roofing Projects in Navi Mumbai for factories."
                keywords="Industrial Roofing Projects in Navi Mumbai, industrial roofing projects in navi mumbai, warehouse roofing gallery, industrial roofing projects in navi mumbai projects"
                canonicalUrl="https://zincoroof.com/industrial-roofing-projects-navi-mumbai"
            />
            <Helmet>
                <link rel="preload" as="image" href={heroImage} fetchpriority="high" />
            </Helmet>
            <div className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.container}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Industrial Roofing Projects In Navi Mumbai
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Showcasing our <strong>Industrial Roofing Projects in Navi Mumbai</strong> across Maharashtra with precision-engineered solutions.
                    </motion.p>
                </div>
            </div>

            <div className={styles.container}>
                {/* Short Intro Paragraph */}
                <motion.div
                    className={styles.introSection}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className={styles.introText}>
                        Our <strong>Industrial Roofing Projects in Navi Mumbai</strong> are more than contracts; they are commitments to excellence. Every one of our <strong>Industrial Roofing Projects in Navi Mumbai</strong> ensures structural integrity. We take pride in <strong>Industrial Roofing Projects in Navi Mumbai</strong> that stand as a testament to our quality.
                    </p>
                </motion.div>

                {/* Our Esteemed Clientele Section - Moved Up */}
                <div className={styles.clienteleSection}>
                    <h2 className={styles.sectionTitle}>Our Esteemed Clientele</h2>
                    <div className={styles.projectsGrid}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className={styles.projectCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                {project.image && (
                                    <div className={styles.projectImageWrapper}>
                                        <img src={project.image} alt={project.name} className={styles.projectImage} loading="lazy" decoding="async" />
                                    </div>
                                )}
                                <div className={styles.projectContent}>
                                    <div className={styles.headerRow}>
                                        <project.icon className={styles.typeIcon} />
                                        <span className={styles.categoryName}>{project.category}</span>
                                    </div>
                                    <h3 className={styles.projectTitle}>{project.name}</h3>
                                    <div className={styles.infoFooter}>
                                        <div className={styles.projectLoc}>
                                            <FaMapMarkerAlt />
                                            <span>{project.location}</span>
                                        </div>
                                        <div className={styles.statusBadge}>Project Completed</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Interactive Highlights - Visible only on Mobile */}
                <section className={styles.mobileOnly}>
                    <div className={styles.mobileHighlightsGrid}>
                        <motion.div 
                            className={styles.mobileHighlightCard}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h3>🏗️ Industrial Excellence</h3>
                            <p>Specializing in factory sheds, warehouses, and heavy industrial roofing since 2016.</p>
                        </motion.div>
                        <motion.div 
                            className={styles.mobileHighlightCard}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h3>💎 Premium Quality</h3>
                            <p>Using only certified metal sheets, PUF panels, and high-durability accessories.</p>
                        </motion.div>
                        <motion.div 
                            className={styles.mobileHighlightCard}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3>⏱️ Fast Execution</h3>
                            <p>Optimized supply chain to ensure your project stays on schedule and on budget.</p>
                        </motion.div>
                    </div>
                </section>

                {/* Extensive Content - Hidden on Mobile, Optimized for Desktop SEO */}
                <div className={`${styles.narrativeSection} ${styles.desktopOnly}`}>
                    <motion.div
                        className={styles.narrativeBlock}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Excellence in Structural Implementations</h2>
                        <p>
                            At Zinco, our <strong>Industrial Roofing Projects in Navi Mumbai</strong> focus on delivering superior overhead systems. Every site execution follows strict international standards. Our structural portfolio highlights our role as a strategic implementation partner for all major industries across Maharashtra.
                        </p>
                        <p>
                            The projects we manage span across Pune, Thane, and the surrounding regions. Whether we are installing insulated panels or high-grade roofing sheets, our approach remains rooted in project excellence. Every industrial site presents unique architectural challenges.
                        </p>
                    </motion.div>

                    <div className={styles.productShowcase}>
                        <motion.div
                            className={styles.showcaseGrid}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.showcaseItem}>
                                <img src={metalFeatured} alt="Industrial Metal Roofing Project by Zinco" loading="lazy" decoding="async" />
                                <div className={styles.showcaseOverlay}>
                                    <span>Metal Sheet Solutions</span>
                                </div>
                            </div>
                            <div className={styles.showcaseItem}>
                                <img src={pufFeatured} alt="PUF Panel Roof Installation Navi Mumbai" loading="lazy" decoding="async" />
                                <div className={styles.showcaseOverlay}>
                                    <span>PUF Insulated Panels</span>
                                </div>
                            </div>
                            <div className={styles.showcaseItem}>
                                <img src={polyFeatured} alt="Polycarbonate Sheet Daylighting System" loading="lazy" decoding="async" />
                                <div className={styles.showcaseOverlay}>
                                    <span>Polycarbonate Lighting</span>
                                </div>
                            </div>
                            <div className={styles.showcaseItem}>
                                <img src={deckFeatured} alt="Steel Decking Sheet for Composite Flooring" loading="lazy" decoding="async" />
                                <div className={styles.showcaseOverlay}>
                                    <span>Structural Decking</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className={styles.detailedContentGrid}>
                        <motion.div
                            className={styles.contentBlock}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3>Precision Engineering & Design</h3>
                            <p>
                                Every technical venture involves rigorous Value Engineering to ensure cost-effectiveness. We interrogate every blueprint to improve structural performance and ensure your factory remains leak-proof for decades.
                            </p>
                            <p>
                                Performance-driven solutions are our specialty. Our fabrication expertise ensure the used material is perfectly fit for your specific shed requirements. This attention to detail is why we are trusted by top companies.
                            </p>
                            <div className={styles.inlineImageWrapper}>
                                <img src={industrialShot} alt="Industrial Installation" className={styles.inlineImage} loading="lazy" decoding="async" />
                            </div>
                        </motion.div>

                        <motion.div
                            className={styles.contentBlock}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3>Expert Operational Logistics</h3>
                            <p>
                                Our presence in industrial zones like Taloja is extensive. We know that in <strong>Industrial Roofing Projects in Navi Mumbai</strong>, delays cost money. That is why our technical teams operate with extreme efficiency to minimize disruption.
                            </p>
                            <p>
                                We prioritize supply chain for all structural ventures. Direct relationships ensure our components are delivered on time. This operational resilience defines every infrastructure project we complete.
                            </p>
                            <div className={styles.inlineImageWrapper}>
                                <img src={warehouseShot} alt="Warehouse Roofing" className={styles.inlineImage} loading="lazy" decoding="async" />
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className={styles.narrativeBlock}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Sustainability & Modern Infrastructure</h3>
                        <p>
                            Zinco focuses on sustainability in all major implementations. Modern roofing is about energy efficiency. Our systems involve profiles that reduce carbon footprints by maximizing natural illumination inside the working area.
                        </p>
                        <p>
                            The human element of these projects is vital. Every implementation supports skilled technicians. We invest in safety for all on-site activities. Their pride ensures quality in our world-class protection systems.
                        </p>
                        <p>
                            In conclusion, our industrial gallery showcases hard work and engineered excellence. If you are starting a new infrastructure project, Zinco Roofing is your best partner for professional and reliable structural solutions.
                        </p>
                    </motion.div>
                </div>

                <section className={`${styles.seoArticleSection} ${styles.desktopOnly}`}>
                    <div className={styles.container}>
                        <div className={styles.seoArticleHeader}>
                            <h2>Showcasing Engineering Mastery</h2>
                            <div className={styles.articleDivider} />
                        </div>

                        <div className={styles.seoArticleBody}>
                            <p className={styles.articleLead}>
                                Each of our <strong>Industrial Roofing Projects in Navi Mumbai</strong> represents a milestone in technical mastery. Industrial zones require resilient solutions that integrate technical superiority with aesthetic appeal.
                            </p>

                            <div className={styles.articleGrid}>
                                <div className={styles.articleCard}>
                                    <h3>Durability & Resilience</h3>
                                    <p>
                                        Executing large-scale works requires understanding environmental stressors. Our implementations utilize premium materials to provide peace of mind and long-term durability.
                                    </p>
                                </div>
                                <div className={styles.articleCard}>
                                    <h3>Technical Precision</h3>
                                    <p>
                                        The scale of industrial shed construction demands expertise. Whether it is a new hub or retrofitting, we manage it with integrity and a focus on efficiency.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <QuoteForm />
        </div>
    );
};

export default Projects;
