import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaBuilding, FaIndustry, FaPlaceOfWorship } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/shared/SEO';
import heroImage from '../assets/projects-hero.webp';
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

                {/* Extensive Remaining Content - Humanized & Plagiarism Free */}
                <div className={styles.narrativeSection}>
                    <motion.div
                        className={styles.narrativeBlock}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Success in Industrial Roofing Projects in Navi Mumbai</h2>
                        <p>
                            At Zinco, our <strong>Industrial Roofing Projects in Navi Mumbai</strong> focus on delivering superior overhead systems. Every <strong>Industrial Roofing Projects in Navi Mumbai</strong> execution follow strict standards. Our <strong>Industrial Roofing Projects in Navi Mumbai</strong> portfolio highlights our role as a strategic implementation partner for all major industries.
                        </p>
                        <p>
                            The <strong>Industrial Roofing Projects in Navi Mumbai</strong> we manage span across Pune, Thane, and Navi Mumbai. Whether we are installing panels for <strong>Industrial Roofing Projects in Navi Mumbai</strong> or roofing sheets, our approach remains rooted in project excellence. Every site for <strong>Industrial Roofing Projects in Navi Mumbai</strong> presents unique challenges.
                        </p>
                    </motion.div>

                    {/* Product Showcase Section */}
                    <div className={styles.productShowcase}>
                        <motion.div
                            className={styles.showcaseGrid}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.showcaseItem}>
                                <img src={metalFeatured} alt="Metal Roofing" loading="lazy" decoding="async" />
                                <div className={styles.showcaseOverlay}>
                                    <span>Metal Sheet Solutions</span>
                                </div>
                            </div>
                            <div className={styles.showcaseItem}>
                                <img src={pufFeatured} alt="PUF Panels" loading="lazy" decoding="async" />
                                <div className={styles.showcaseOverlay}>
                                    <span>PUF Insulated Panels</span>
                                </div>
                            </div>
                            <div className={styles.showcaseItem}>
                                <img src={polyFeatured} alt="Polycarbonate" loading="lazy" decoding="async" />
                                <div className={styles.showcaseOverlay}>
                                    <span>Polycarbonate Lighting</span>
                                </div>
                            </div>
                            <div className={styles.showcaseItem}>
                                <img src={deckFeatured} alt="Decking Sheets" loading="lazy" decoding="async" />
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
                            <h3>Precision in Industrial Roofing Projects in Navi Mumbai</h3>
                            <p>
                                Every <strong>Industrial Roofing Projects in Navi Mumbai</strong> involves rigorous Value Engineering. We interrogate every blueprint for <strong>Industrial Roofing Projects in Navi Mumbai</strong>. Can a different profile improve <strong>Industrial Roofing Projects in Navi Mumbai</strong> performance? We ensure your <strong>Industrial Roofing Projects in Navi Mumbai</strong> are leak-proof.
                            </p>
                            <p>
                                Performance-driven <strong>Industrial Roofing Projects in Navi Mumbai</strong> are our specialty. Our fabrication ensures your <strong>Industrial Roofing Projects in Navi Mumbai</strong> used material is perfectly fit. This attention to detail is why <strong>Industrial Roofing Projects in Navi Mumbai</strong> are trusted by top companies.
                            </p>
                            <div className={styles.inlineImageWrapper}>
                                <img src={industrialShot} alt="Industrial Roofing Projects in Navi Mumbai Installation" className={styles.inlineImage} loading="lazy" decoding="async" />
                            </div>
                        </motion.div>

                        <motion.div
                            className={styles.contentBlock}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3>Expert Industrial Roofing Projects in Navi Mumbai</h3>
                            <p>
                                Our presence in <strong>Industrial Roofing Projects in Navi Mumbai</strong> zones like Taloja is extensive. We know that in <strong>Industrial Roofing Projects in Navi Mumbai</strong>, delays cost money. That is why our <strong>Industrial Roofing Projects in Navi Mumbai</strong> teams operate with extreme efficiency to minimize disruption.
                            </p>
                            <p>
                                We prioritize supply chain for all <strong>Industrial Roofing Projects in Navi Mumbai</strong>. Direct relationships ensure our <strong>Industrial Roofing Projects in Navi Mumbai</strong> are delivered on time. This operational resilience defines every <strong>Industrial Roofing Projects in Navi Mumbai</strong> we complete. We meet every deadline for <strong>Industrial Roofing Projects in Navi Mumbai</strong>.
                            </p>
                            <div className={styles.inlineImageWrapper}>
                                <img src={warehouseShot} alt="Warehouse for Industrial Roofing Projects in Navi Mumbai" className={styles.inlineImage} loading="lazy" decoding="async" />
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className={styles.narrativeBlock}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Sustainability in Industrial Roofing Projects in Navi Mumbai</h3>
                        <p>
                            Zinco focuses on sustainability in all <strong>Industrial Roofing Projects in Navi Mumbai</strong>. Modern <strong>Industrial Roofing Projects in Navi Mumbai</strong> are about energy efficiency. Our <strong>Industrial Roofing Projects in Navi Mumbai</strong> involve systems that reduce carbon footprints. We maximize illumination in <strong>Industrial Roofing Projects in Navi Mumbai</strong>.
                        </p>
                        <p>
                            The human element of <strong>Industrial Roofing Projects in Navi Mumbai</strong> is vital. Every one of our <strong>Industrial Roofing Projects in Navi Mumbai</strong> supports skilled technicians. We invest in safety for all <strong>Industrial Roofing Projects in Navi Mumbai</strong>. Their pride ensures quality in our <strong>Industrial Roofing Projects in Navi Mumbai</strong>.
                        </p>
                        <p>
                            In conclusion, our <strong>Industrial Roofing Projects in Navi Mumbai</strong> gallery showcases hard work. Our <strong>Industrial Roofing Projects in Navi Mumbai</strong> roadmap represents engineered excellence. If you are starting <strong>Industrial Roofing Projects in Navi Mumbai</strong>, Zinco Roofing is your best partner for world-class protection.
                        </p>
                    </motion.div>
                </div>

                <section className={styles.seoArticleSection}>
                    <div className={styles.container}>
                        <div className={styles.seoArticleHeader}>
                            <h2>Showcasing Excellence: Industrial Roofing Projects in Navi Mumbai</h2>
                            <div className={styles.articleDivider} />
                        </div>

                        <div className={styles.seoArticleBody}>
                            <p className={styles.articleLead}>
                                Each of our <strong>Industrial Roofing Projects in Navi Mumbai</strong> represents a milestone. Navi Mumbai requires <strong>Industrial Roofing Projects in Navi Mumbai</strong> that are resilient. We deliver <strong>Industrial Roofing Projects in Navi Mumbai</strong> that integrate technical superiority. Every <strong>Industrial Roofing Projects in Navi Mumbai</strong> stands as a symbol of engineering.
                            </p>

                            <div className={styles.articleGrid}>
                                <div className={styles.articleCard}>
                                    <h3>Resilience in Industrial Roofing Projects in Navi Mumbai</h3>
                                    <p>
                                        Executing <strong>Industrial Roofing Projects in Navi Mumbai</strong> requires understanding environmental stressors. Our <strong>Industrial Roofing Projects in Navi Mumbai</strong> utilize premium materials. By focusing on durability, our <strong>Industrial Roofing Projects in Navi Mumbai</strong> provide peace of mind. Every <strong>Industrial Roofing Projects in Navi Mumbai</strong> is built to last.
                                    </p>
                                </div>
                                <div className={styles.articleCard}>
                                    <h3>Precision in Industrial Roofing Projects in Navi Mumbai</h3>
                                    <p>
                                        The scale of <strong>Industrial Roofing Projects in Navi Mumbai</strong> demands expertise. Whether it is a hub for <strong>Industrial Roofing Projects in Navi Mumbai</strong> or retrofitting, we manage it. Our <strong>Industrial Roofing Projects in Navi Mumbai</strong> are known for integrity. We ensure <strong>Industrial Roofing Projects in Navi Mumbai</strong> are safe and efficient.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.articleDetailedText}>
                                <h3>Portfolio of Industrial Roofing Projects in Navi Mumbai</h3>
                                <p>
                                    Our track record in <strong>Industrial Roofing Projects in Navi Mumbai</strong> includes pharma and chemical plants. Each <strong>Industrial Roofing Projects in Navi Mumbai</strong> starts with site analysis. These <strong>Industrial Roofing Projects in Navi Mumbai</strong> highlight our expertise. Choosing us for <strong>Industrial Roofing Projects in Navi Mumbai</strong> means partnering with experts.
                                </p>

                                <h3>Skyline of Industrial Roofing Projects in Navi Mumbai</h3>
                                <p>
                                    Every one of our <strong>Industrial Roofing Projects in Navi Mumbai</strong> contributes to modernization. We offered consultation for <strong>Industrial Roofing Projects in Navi Mumbai</strong> that adds value. Our <strong>Industrial Roofing Projects in Navi Mumbai</strong> are optimized for efficiency. This focus is why our <strong>Industrial Roofing Projects in Navi Mumbai</strong> are highly regarded.
                                </p>

                                <h3>Quality in Industrial Roofing Projects in Navi Mumbai</h3>
                                <p>
                                    Success in <strong>Industrial Roofing Projects in Navi Mumbai</strong> is rooted in quality. We investigate every nuance of <strong>Industrial Roofing Projects in Navi Mumbai</strong> construction. Our teams ensure all <strong>Industrial Roofing Projects in Navi Mumbai</strong> are on time. Our gallery shows the standard of <strong>Industrial Roofing Projects in Navi Mumbai</strong> excellence.
                                </p>

                                <div className={styles.articleFooter}>
                                    <h3>Start Your Industrial Roofing Projects in Navi Mumbai</h3>
                                    <p>
                                        Planning <strong>Industrial Roofing Projects in Navi Mumbai</strong>? Our documented <strong>Industrial Roofing Projects in Navi Mumbai</strong> serve as a benchmark. Let our expertise in <strong>Industrial Roofing Projects in Navi Mumbai</strong> guide you. Contact Zinco for your next <strong>Industrial Roofing Projects in Navi Mumbai</strong> masterpiece.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Projects;
