import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './AreaLinks.module.css';

const locations = [
    { name: 'Mumbai', path: '/industrial-roofing-contractors-in-mumbai' },
    { name: 'Navi Mumbai', path: '/industrial-roofing-contractors-in-navi-mumbai' },
    { name: 'Panvel', path: '/industrial-roofing-contractors-in-panvel' },
    { name: 'Taloja', path: '/industrial-roofing-contractors-in-taloja' },
    { name: 'Dombivli', path: '/industrial-roofing-contractors-in-dombivli' },
    { name: 'Thane', path: '/industrial-roofing-contractors-in-thane' },
    { name: 'Ambarnath', path: '/industrial-roofing-contractors-in-ambarnath' },
    { name: 'PUF Panel Navi Mumbai', path: '/puf-panel-manufacturer-navi-mumbai' }
];

const AreaLinks = ({ currentLocation }) => {
    return (
        <section className={styles.areaLinksSection}>
            <div className={styles.container}>
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Other Industrial Locations We Serve
                </motion.h3>
                <div className={styles.grid}>
                    {locations.map((loc) => (
                        <Link
                            key={loc.path}
                            to={loc.path}
                            className={`${styles.linkCard} ${currentLocation === loc.name ? styles.active : ''}`}
                        >
                            <span>{loc.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AreaLinks;
