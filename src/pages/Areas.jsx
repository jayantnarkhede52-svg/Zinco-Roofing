import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCity, FaIndustry, FaWarehouse, FaUmbrella, FaLayerGroup } from 'react-icons/fa';
import SEO from '../components/shared/SEO';
import heroImage from '../assets/img4.webp'; // Using a generic image
import styles from './locations/LocationStyles.module.css';

const locations = [
    {
        id: 'mumbai',
        title: 'Mumbai',
        desc: <>Complete <strong>Waterproofing & Retrofitting</strong> solutions tailored for <strong>Residential Towers</strong> and <strong>Old Buildings</strong>.</>,
        icon: <FaCity size={32} color="#f59e0b" />,
        color: '#f59e0b',
        path: '/industrial-roofing-contractors-in-mumbai'
    },
    {
        id: 'navi-mumbai',
        title: 'Navi Mumbai',
        desc: <>Specialized <strong>Industrial & Commercial Roofing</strong> for <strong>MIDC, Taloja</strong>, and <strong>Airoli</strong> zones.</>,
        icon: <FaIndustry size={32} color="#3b82f6" />,
        color: '#3b82f6',
        path: '/industrial-roofing-contractors-in-navi-mumbai'
    },
    {
        id: 'panvel',
        title: 'Panvel',
        desc: <>Expert roofing for <strong>Large-scale Warehousing</strong> & <strong>Logistics Parks</strong> requiring rapid installation.</>,
        icon: <FaWarehouse size={32} color="#10b981" />,
        color: '#10b981',
        path: '/industrial-roofing-contractors-in-panvel'
    },
    {
        id: 'thane',
        title: 'Thane',
        desc: <>Advanced protection for <strong>Commercial Complexes</strong> & <strong>Wagle Estate</strong> against heavy rainfall.</>,
        icon: <FaUmbrella size={32} color="#6366f1" />,
        color: '#6366f1',
        path: '/industrial-roofing-contractors-in-thane'
    },
    {
        id: 'taloja',
        title: 'Taloja',
        desc: <>Heavy-duty <strong>Industrial Roofing</strong> and <strong>Shed Fabrication</strong> for the Taloja MIDC industrial belt.</>,
        icon: <FaIndustry size={32} color="#8b5cf6" />,
        color: '#8b5cf6',
        path: '/industrial-roofing-contractors-in-taloja'
    },
    {
        id: 'ambarnath',
        title: 'Ambarnath',
        desc: <>Robust <strong>Industrial Roofing</strong> services tailored for the demanding environments of <strong>Ambarnath MIDC</strong>.</>,
        icon: <FaIndustry size={32} color="#ec4899" />,
        color: '#ec4899',
        path: '/industrial-roofing-contractors-in-ambarnath'
    },
    {
        id: 'dombivli',
        title: 'Dombivli',
        desc: <>Expert roofing for <strong>Residential Towers</strong> and <strong>Industrial MIDC</strong> areas across Dombivli.</>,
        icon: <FaCity size={32} color="#06b6d4" />,
        color: '#06b6d4',
        path: '/industrial-roofing-contractors-in-dombivli'
    },
    {
        id: 'puf-navi-mumbai',
        title: 'PUF Panels (Navi Mumbai)',
        desc: <>Premier manufacturer of <strong>Insulated PUF Panels</strong> for superior <strong>Industrial & Commercial Insulation</strong>.</>,
        icon: <FaLayerGroup size={32} color="#ef4444" />,
        color: '#ef4444',
        path: '/puf-panel-manufacturer-navi-mumbai'
    }
];

const Areas = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Industrial Roofing Contractors in Mumbai, Navi Mumbai & Thane"
                description="Expert Industrial Roofing Contractors serving Mumbai, Navi Mumbai, Taloja MIDC, and Thane. Heavy-duty factory sheds, PUF panels, and structural fabrication."
                keywords="industrial roofing contractors, factory shed contractors navi mumbai, mumbai industrial roofing, taloja midc roofing, puf panel manufacturer"
            />
            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})`, height: '50vh' }}>
                <div className={styles.heroOverlay} />
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Our Service Areas</h1>
                        <p>Expert Roofing Solutions Across the Mumbai Metropolitan Region.</p>
                    </motion.div>
                </div>
            </section>

            <div className={styles.container}>
                <main className={styles.mainContent}>
                    <section className={styles.introSection} style={{ textAlign: 'center' }}>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            Where We Work
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ margin: '0 auto', maxWidth: '800px' }}
                        >
                            Zinco Roofing Solution provides specialized services tailored to the unique industrial, commercial, and residential needs of each city in the MMR region. Select your location to learn more about our specific offerings.
                        </motion.p>
                    </section>

                    <div className={styles.areasDispatcher}>
                        {locations.map((loc, index) => (
                            <Link to={loc.path} key={loc.id} style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: 'var(--spacing-xl)' }}>
                                <motion.div
                                    className={styles.areaRow}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 10 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--spacing-lg)',
                                        padding: 'var(--spacing-lg)',
                                        background: 'var(--white)',
                                        borderRadius: 'var(--radius-lg)',
                                        boxShadow: 'var(--shadow-sm)',
                                        borderLeft: `4px solid ${loc.color || 'var(--accent-500)'}`
                                    }}
                                >
                                    <div style={{ flexShrink: 0 }}>{loc.icon}</div>
                                    <div>
                                        <h3 style={{ marginBottom: '0.5rem', color: 'var(--gray-900)' }}>{loc.title}</h3>
                                        <p style={{ margin: 0, color: 'var(--gray-700)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                            {loc.desc}
                                        </p>
                                    </div>
                                    <div style={{ marginLeft: 'auto', color: 'var(--accent-500)', opacity: 0.6 }}>
                                        ➔
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Areas;
