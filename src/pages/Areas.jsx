import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCity, FaIndustry, FaWarehouse, FaUmbrella, FaLayerGroup } from 'react-icons/fa';
import SEO from '../components/shared/SEO';
import heroImage from '../assets/img4.webp'; // Using a generic image
import styles from './locations/LocationStyles.module.css';
import mumbaiThumb from '../assets/locations/mumbai_thumb.png';
import naviMumbaiThumb from '../assets/locations/navi_mumbai_thumb.png';
import panvelThumb from '../assets/locations/panvel_thumb.png';
import thaneThumb from '../assets/locations/thane_thumb.png';
import chakanRoofingThumb from '../assets/locations/chakan_roofing_thumb.png';
import chakanPaintingThumb from '../assets/locations/chakan_painting_thumb.png';
import lonavlaThumb from '../assets/locations/lonavla_hero.png';
import genericIndustrialThumb from '../assets/img1.webp';

const locations = [
    {
        id: 'mumbai',
        title: 'Mumbai',
        desc: <>Premium <strong>Roofing Sheets Mumbai</strong> and <strong>Industrial Roofing Mumbai</strong> for towers and plants.</>,
        icon: <FaCity size={24} />,
        color: '#f59e0b',
        path: '/industrial-roofing-contractors-in-mumbai',
        image: mumbaiThumb
    },
    {
        id: 'navi-mumbai',
        title: 'Navi Mumbai',
        desc: <>Specialized <strong>Roofing Sheets Navi Mumbai</strong> and <strong>Industrial Roofing Navi Mumbai</strong> for MIDC zones.</>,
        icon: <FaIndustry size={24} />,
        color: '#3b82f6',
        path: '/industrial-roofing-contractors-in-navi-mumbai',
        image: naviMumbaiThumb
    },
    {
        id: 'panvel',
        title: 'Panvel',
        desc: <>Expert <strong>Roofing Sheets Panvel</strong> and <strong>Industrial Roofing Panvel</strong> for logistics parks.</>,
        icon: <FaWarehouse size={24} />,
        color: '#10b981',
        path: '/industrial-roofing-contractors-in-panvel',
        image: panvelThumb
    },
    {
        id: 'thane',
        title: 'Thane',
        desc: <>Advanced <strong>Roofing Sheets Thane</strong> and <strong>Industrial Roofing Thane</strong> against heavy rainfall.</>,
        icon: <FaUmbrella size={24} />,
        color: '#6366f1',
        path: '/industrial-roofing-contractors-in-thane',
        image: thaneThumb
    },
    {
        id: 'taloja',
        title: 'Taloja',
        desc: <>Heavy-duty <strong>Roofing Sheets Taloja</strong> and <strong>Industrial Roofing Taloja</strong> for the MIDC belt.</>,
        icon: <FaIndustry size={24} />,
        color: '#8b5cf6',
        path: '/industrial-roofing-contractors-in-taloja',
        image: genericIndustrialThumb
    },
    {
        id: 'ambarnath',
        title: 'Ambarnath',
        desc: <>Robust <strong>Roofing Sheets Ambarnath</strong> and <strong>Industrial Roofing Ambarnath</strong> for demanding environments.</>,
        icon: <FaIndustry size={24} />,
        color: '#ec4899',
        path: '/industrial-roofing-contractors-in-ambarnath',
        image: genericIndustrialThumb
    },
    {
        id: 'dombivli',
        title: 'Dombivli',
        desc: <>Expert <strong>Roofing Sheets Dombivli</strong> and <strong>Industrial Roofing Dombivli</strong> across MIDC areas.</>,
        icon: <FaCity size={24} />,
        color: '#06b6d4',
        path: '/industrial-roofing-contractors-in-dombivli',
        image: genericIndustrialThumb
    },
    {
        id: 'puf-navi-mumbai',
        title: 'PUF Panels (Navi Mumbai)',
        desc: <>Premier <strong>PUF Panel Manufacturer Navi Mumbai</strong> for <strong>Insulated Roofing Sheets Navi Mumbai</strong>.</>,
        icon: <FaLayerGroup size={24} />,
        color: '#ef4444',
        path: '/puf-panel-manufacturer-navi-mumbai',
        image: naviMumbaiThumb
    },
    {
        id: 'lonavla',
        title: 'Lonavla',
        desc: <>Weather-resistant <strong>Roofing Sheets Lonavla</strong> and <strong>Industrial Roofing Lonavla</strong> for heavy rainfall zones.</>,
        icon: <FaUmbrella size={24} />,
        color: '#14b8a6',
        path: '/industrial-roofing-contractors-in-lonavla',
        image: lonavlaThumb
    },
    {
        id: 'chakan-pune',
        title: 'Chakan Pune',
        desc: <>Heavy-duty PEB <strong>Roofing Sheets Chakan Pune</strong> and <strong>Industrial Roofing Chakan Pune</strong>.</>,
        icon: <FaIndustry size={24} />,
        color: '#f97316',
        path: '/industrial-roofing-contractors-in-chakan-pune',
        image: chakanRoofingThumb
    },
    {
        id: 'chakan-painting',
        title: 'Chakan Painting',
        desc: <>Specialized <strong>Industrial Painting in Chakan</strong> and <strong>Structural Painting Chakan</strong>.</>,
        icon: <FaLayerGroup size={24} />,
        color: '#8b5cf6',
        path: '/industrial-painting-in-chakan',
        image: chakanPaintingThumb
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

                    <div className={styles.areasGrid}>
                        {locations.map((loc, index) => (
                            <Link to={loc.path} key={loc.id} style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className={styles.areaCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className={styles.areaThumbnail}>
                                        <img src={loc.image} alt={loc.title} loading="lazy" />
                                        <div className={styles.areaIconBadge} style={{ background: loc.color }}>
                                            {loc.icon}
                                        </div>
                                    </div>
                                    <div className={styles.areaInfo}>
                                        <h3>{loc.title}</h3>
                                        <p>{loc.desc}</p>
                                        <div className={styles.areaLink}>
                                            Explore Location ➔
                                        </div>
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
