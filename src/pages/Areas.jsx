import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCity, FaIndustry, FaWarehouse, FaUmbrella, FaLayerGroup } from 'react-icons/fa';
import SEO from '../components/shared/SEO';
import heroImage from '../assets/img4.webp'; // Using a generic image
import styles from './locations/LocationStyles.module.css';
import QuoteForm from '../components/home/QuoteForm';
import mumbaiThumb from '../assets/locations/mumbai_thumb.png';
import naviMumbaiThumb from '../assets/locations/navi_mumbai_thumb.png';
import panvelThumb from '../assets/locations/panvel_thumb.png';
import thaneThumb from '../assets/locations/thane_thumb.png';
import chakanRoofingThumb from '../assets/locations/chakan_roofing_thumb.png';
import chakanPaintingThumb from '../assets/locations/chakan_painting_thumb.png';
import lonavlaThumb from '../assets/locations/lonavla_hero.png';
import genericIndustrialThumb from '../assets/img1.webp';
import waterproofingThumb from '../assets/locations/waterproofing_thumb.png';
import dombivliThumb from '../assets/locations/dombivli_hero.webp';

const locations = [
    {
        id: 'mumbai',
        title: 'Mumbai',
        desc: <>Premier <strong>Structural Engineering</strong> and metal roofing solutions for Mumbai's dense industrial skyline.</>,
        icon: <FaCity size={24} />,
        color: '#f59e0b',
        path: '/industrial-roofing-contractors-in-mumbai',
        image: mumbaiThumb
    },
    {
        id: 'navi-mumbai',
        title: 'Navi Mumbai',
        desc: <>Premier <strong>Industrial Roofing Contractors Navi Mumbai</strong> for <strong>Roofing Sheets Navi Mumbai</strong> in MIDC zones.</>,
        icon: <FaIndustry size={24} />,
        color: '#3b82f6',
        path: '/industrial-roofing-contractors-in-navi-mumbai',
        image: naviMumbaiThumb
    },
    {
        id: 'panvel',
        title: 'Panvel',
        desc: <>Professional <strong>Industrial Roofing Contractors Panvel</strong> for <strong>Roofing Sheets Panvel</strong> and logistics parks.</>,
        icon: <FaWarehouse size={24} />,
        color: '#10b981',
        path: '/industrial-roofing-contractors-in-panvel',
        image: panvelThumb
    },
    {
        id: 'thane',
        title: 'Thane',
        desc: <>Trusted <strong>Industrial Roofing Contractors Thane</strong> offering <strong>Roofing Sheets Thane</strong> against heavy rainfall.</>,
        icon: <FaUmbrella size={24} />,
        color: '#6366f1',
        path: '/industrial-roofing-contractors-in-thane',
        image: thaneThumb
    },
    {
        id: 'taloja',
        title: 'Taloja',
        desc: <>Massive scale <strong>Industrial Roofing Contractors Taloja</strong> for <strong>Roofing Sheets Taloja</strong> in the MIDC belt.</>,
        icon: <FaIndustry size={24} />,
        color: '#8b5cf6',
        path: '/industrial-roofing-contractors-in-taloja',
        image: genericIndustrialThumb
    },
    {
        id: 'ambarnath',
        title: 'Ambarnath',
        desc: <>Heavy-duty <strong>Industrial Roofing Contractors Ambarnath</strong> for <strong>Roofing Sheets Ambarnath</strong> in demanding zones.</>,
        icon: <FaIndustry size={24} />,
        color: '#ec4899',
        path: '/industrial-roofing-contractors-in-ambarnath',
        image: genericIndustrialThumb
    },
    {
        id: 'dombivli',
        title: 'Dombivli',
        desc: <>Experienced <strong>Industrial Roofing Contractors Dombivli</strong> for <strong>Roofing Sheets Dombivli</strong> across MIDC areas.</>,
        icon: <FaCity size={24} />,
        color: '#06b6d4',
        path: '/industrial-roofing-contractors-in-dombivli',
        image: dombivliThumb
    },
    {
        id: 'puf-navi-mumbai',
        title: 'PUF Panels (Navi Mumbai)',
        desc: <>Top <strong>PUF Panel Manufacturer Navi Mumbai</strong> and <strong>Industrial Roofing Contractors</strong> for insulated solutions.</>,
        icon: <FaLayerGroup size={24} />,
        color: '#ef4444',
        path: '/puf-panel-manufacturer-navi-mumbai',
        image: naviMumbaiThumb
    },
    {
        id: 'lonavla',
        title: 'Lonavla',
        desc: <>Specialized <strong>Industrial Roofing Contractors Lonavla</strong> for <strong>Roofing Sheets Lonavla</strong> in heavy rainfall zones.</>,
        icon: <FaUmbrella size={24} />,
        color: '#14b8a6',
        path: '/industrial-roofing-contractors-in-lonavla',
        image: lonavlaThumb
    },
    {
        id: 'chakan-pune',
        title: 'Chakan Pune',
        desc: <>Large-scale <strong>Industrial Roofing Contractors Chakan Pune</strong> for heavy-duty PEB <strong>Roofing Sheets Chakan Pune</strong>.</>,
        icon: <FaIndustry size={24} />,
        color: '#f97316',
        path: '/industrial-roofing-contractors-in-chakan-pune',
        image: chakanRoofingThumb
    },
    {
        id: 'chakan-painting',
        title: 'Chakan Painting',
        desc: <>Expert <strong>Industrial Painting in Chakan</strong> and <strong>Structural Painting Chakan</strong> services.</>,
        icon: <FaLayerGroup size={24} />,
        color: '#8b5cf6',
        path: '/industrial-painting-in-chakan',
        image: chakanPaintingThumb
    },
    {
        id: 'waterproofing',
        title: 'Waterproofing',
        desc: <>Expert solutions for <strong>waterproofing in navi mumbai</strong>, ensuring leak-free facilities.</>,
        icon: <FaUmbrella size={24} />,
        color: '#0ea5e9',
        path: '/waterproofing-in-navi-mumbai',
        image: waterproofingThumb
    }
];

const Areas = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Industrial Roofing Contractors in Mumbai, Navi Mumbai & Thane"
                description="Expert Industrial Roofing Contractors serving Mumbai, Navi Mumbai, Taloja MIDC, and Thane. Heavy-duty factory sheds, PUF panels, and structural fabrication."
                keywords="industrial roofing contractors, factory shed contractors navi mumbai, mumbai industrial roofing, taloja midc roofing, puf panel manufacturer"
                canonicalUrl="https://www.zincoroof.com/areas"
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
                        <h1>Industrial Roofing Contractors in MMR Region</h1>
                        <p>Providing Premier Industrial Roofing Contractors services across Maharashtra's industrial belts.</p>
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
                            Specialized Infrastructure Solutions
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ margin: '0 auto', maxWidth: '800px' }}
                        >
                            Zinco Roofing Solution is recognized as the leading <strong>Industrial Roofing Contractors</strong> provider in the Mumbai Metropolitan Region. We deliver specialized engineering tailored to the unique industrial, commercial, and residential needs of each city. Our team of <strong>Industrial Roofing Contractors</strong> experts ensures that every project meets high structural standards.
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
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-600)', marginBottom: '1rem' }}>{loc.desc}</div>
                                        <div className={styles.areaLink}>
                                            Explore Solutions ➔
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                    
                    <section style={{ marginTop: '4rem', textAlign: 'center' }}>
                        <p>Looking for reliable <strong>Industrial Roofing Contractors</strong>? We provide end-to-end fabrication and installation services across all major industrial locations.</p>
                    </section>
                </main>
            </div>
            <QuoteForm />
        </div>
    );
};

export default Areas;
