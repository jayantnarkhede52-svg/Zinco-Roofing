import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaBuilding, FaIndustry, FaPlaceOfWorship } from 'react-icons/fa';
import SEO from '../components/shared/SEO';
import heroImage from '../assets/projects-hero.png';
import metalFeatured from '../assets/Metal roofing images/Metal roofing images/coloured-roofing-sheet-500x500-1.jpg';
import pufFeatured from '../assets/Puf panel images/Puf panel images/1001155532.jpg';
import polyFeatured from '../assets/Transparent polycarbonate/Transparent polycarbonate/1000014018.jpg';
import deckFeatured from '../assets/Dect sheet/Dect sheet/1000014053.jpg';
import warehouseShot from '../assets/Upvc images/Upvc images/1000014135.jpg';
import industrialShot from '../assets/Upvc images/Upvc images/1000014394.jpg';
import vortexImage from '../assets/projects/vortex-badlapur.jpeg';
import godrejImage from '../assets/projects/Godreh-ambarnath.jpeg';
import valvolineImage from '../assets/projects/Valvoline-ambarnath.jpeg';
import ltImage from '../assets/projects/L&T construction.jpeg';
import regencyImage from '../assets/projects/Regency.jpeg';
import amarStudioImage from '../assets/projects/amar studio.jpeg';
import cyberteckImage from '../assets/projects/Cyberteck.jpeg';
import parasnathImage from '../assets/projects/Parasnath temple.jpeg';
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
    { name: 'Newreka Chemical Pvt Ltd', location: 'Dombivali - MIDC', category: 'Chemical', icon: FaIndustry },
    { name: 'Vedant Dye & Intermediate', location: 'Taloja', category: 'Industrial', icon: FaIndustry },
    { name: 'Iskcon Temple', location: 'Palghar', category: 'Religious', icon: FaPlaceOfWorship },
    { name: 'Snowman Logistics', location: 'Taloja', category: 'Logistics', icon: FaIndustry },
    { name: 'Paragaon Centre', location: 'Worli', category: 'Commercial', icon: FaBuilding },
    { name: 'Bajaj Electricals', location: 'Chakkan', category: 'Industrial', icon: FaIndustry },
    { name: 'Nd Studio', location: 'Karjat', category: 'Commercial', icon: FaBuilding },
    { name: 'Palms & Water Resort', location: 'Kalyan', category: 'Hospitality', icon: FaBuilding },
    { name: 'Multiwall Sheet Installation', location: 'Palava City', category: 'Residential', icon: FaBuilding },
    { name: 'Alvi Tech Pvt. Ltd.', location: 'Dombivli', category: 'Industrial', icon: FaIndustry },
    { name: 'Mahesh Fashion', location: 'Bhiwandi', category: 'Textile', icon: FaIndustry },
    { name: 'Himalaya Society', location: 'Lodha', category: 'Residential', icon: FaBuilding },
    { name: 'Balaji Builder', location: 'Kalyan', category: 'Construction', icon: FaBuilding },
    { name: 'Adient India Pvt Ltd', location: 'Pune', category: 'Automotive', icon: FaIndustry }
];

const Projects = () => {
    return (
        <div className={styles.projects}>
            <SEO
                title="Industrial & Commercial Roofing Projects"
                description="Explore our portfolio of industrial roofing projects in Taloja, Panvel, and Mumbai. See our work with PUF panels, PEB structures, and waterproofing."
                keywords="roofing projects gallery, industrial roofing portfolio, done site photos"
            />
            <div className={styles.hero} style={{ '--hero-image': `url(${heroImage})` }}>
                <div className={styles.container}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Projects & Legacy
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Transforming the industrial skyline of Maharashtra through precision-engineered roofing solutions.
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
                        At Zinco Roofing Solution, every project we undertake is more than just a contract; it is a commitment to
                        structural integrity and an investment in the future of Indian industry. From the bustling industrial corridors
                        of Taloja and Ambernath to the serene spiritual centers in Palghar, our roofs stand as silent guardians
                        over the visions of our clients. We combine decades of technical mastery with a deeply human approach
                        to construction, ensuring that every sheet, screw, and seal contributes to a legacy of excellence.
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
                                        <img src={project.image} alt={project.name} className={styles.projectImage} />
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
                        <h2>The Zinco Philosophy: Engineering Trust in Every Layer</h2>
                        <p>
                            In the competitive world of industrial roofing, many focus solely on the speed of installation.
                            However, at Zinco, we have always believed that a roof is only as strong as the philosophy behind it.
                            Our journey began with a simple observation: the most successful industrial ventures are built on
                            solid foundations, but they are protected by superior overhead systems. This realization drove us to
                            move beyond the standard "vendor" role and evolve into a strategic implementation partner for
                            some of Maharashtra's most respected names.
                        </p>
                        <p>
                            Our project portfolio, which spans across Pune, Thane, Kalyan, and beyond, is a testament to our
                            versatility. Whether we are installing <strong>PUF insulated panels</strong> for a temperature-sensitive
                            logistics hub for Snowman Logistics or providing <strong>multiwall sheet solutions</strong> for the
                            expansive Palava City residential projects, our approach remains rooted in empathy. We listen to
                            the unique challenges each site presents—be it the heavy monsoon winds of the Konkan coast or
                            the intense thermal loads of an inland industrial estate.
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
                            <h3>A Culture of Uncompromising Precision</h3>
                            <p>
                                Every roof we build starts long before our team sets foot on site. It begins in the design and
                                fabrication phase, where we apply rigorous <strong>Value Engineering</strong>. We don't just follow
                                blueprints blindly; we interrogate them. Can a different corrugated profile provide better
                                structural rigidity with less weight? Is there a more efficient way to manage rainwater runoff
                                to prevent future maintenance headaches?
                            </p>
                            <p>
                                By asking these questions, we provide our clients with more than just a roof—we provide a
                                performance-driven asset. Our custom fabrication services ensure that every piece of material
                                is cut and bent with surgical precision, reducing on-site waste and ensuring a seamless,
                                leak-proof fit. This attention to detail is why companies like Bajaj Electricals and Adient
                                India have trusted us with their high-value infrastructure.
                            </p>
                            <div className={styles.inlineImageWrapper}>
                                <img src={industrialShot} alt="Industrial Roofing Installation" className={styles.inlineImage} loading="lazy" decoding="async" />
                            </div>
                        </motion.div>

                        <motion.div
                            className={styles.contentBlock}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3>Empowering the Industrial Heartland</h3>
                            <p>
                                Our presence in the MIDC corridors of Taloja, Ambernath, and Badlapur has given us a deep
                                understanding of the heartbeat of Indian industry. We know that when a roof fails, production
                                stops, and revenue is lost. That is why our project management teams are trained to operate
                                within tight windows, often working around active industrial operations to minimize any
                                disruption to our clients' work.
                            </p>
                            <p>
                                We pride ourselves on our robust supply chain management. By maintaining direct relationships
                                with India's premier raw material manufacturers, we ensure that our projects are never held
                                hostage by logistical delays. This operational resilience allows us to deliver large-scale
                                projects, like those for Cybertech Pvt Ltd or Newreka Chemical, with a level of predictability
                                that is rare in the construction sector. When Zinco commits to a deadline, we meet it.
                            </p>
                            <div className={styles.inlineImageWrapper}>
                                <img src={warehouseShot} alt="Large Scale Warehouse Roofing" className={styles.inlineImage} loading="lazy" decoding="async" />
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className={styles.narrativeBlock}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Sustainability and the Future of Roofing</h3>
                        <p>
                            As we look toward the next decade, Zinco is increasingly focused on the intersection of industrial
                            construction and environmental sustainability. Modern roofing is no longer just about protection;
                            it is about energy efficiency. Our insulated roofing systems and advanced polycarbonate skylights
                            are designed to reduce carbon footprints by lowering cooling costs and maximizing natural
                            illumination.
                        </p>
                        <p>
                            We are also deeply committed to the human element of our trade. Every project we complete
                            supports the livelihoods of our skilled technicians, many of whom have been with the Zinco
                            family since its inception. We invest in their safety, their training, and their welfare,
                            knowing that their pride in their work is what ultimately ensures the quality of the roofs
                            overhead.
                        </p>
                        <p>
                            In conclusion, our project gallery is not just a list of names and locations. It is a roadmap of
                            hard work, engineered excellence, and lasting partnerships. Whether you are building a new
                            industrial empire or repairing a legacy structure, Zinco Roofing Solution is here to ensure
                            that your vision has the world-class protection it deserves.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
