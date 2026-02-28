import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './AreaLinks.module.css';

const locations = [
    { name: 'Mumbai', path: '/roofing-contractors-mumbai' },
    { name: 'Navi Mumbai', path: '/roofing-contractors-navi-mumbai' },
    { name: 'Panvel', path: '/roofing-contractors-panvel' },
    { name: 'Taloja', path: '/roofing-contractors-taloja' },
    { name: 'Dombivli', path: '/roofing-contractors-dombivli' },
    { name: 'Thane', path: '/roofing-contractors-thane' },
    { name: 'Ambarnath', path: '/roofing-contractors-ambarnath' },
    { name: 'PUF Panel Navi Mumbai', path: '/puf-panel-manufacturer-in-navi-mumbai' }
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
