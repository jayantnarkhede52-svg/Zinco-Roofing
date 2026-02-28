import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaIndustry, FaLayerGroup, FaPaintRoller, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import styles from './LocationServiceCards.module.css';

const LocationServiceCards = ({ location }) => {
    const services = [
        {
            title: `Metal Roofing Solutions in ${location}`,
            category: 'Industrial Roofing',
            icon: <FaIndustry size={32} />,
            trend: 'High',
            color: '#3b82f6',
            path: '/products/roofing-metal-sheets'
        },
        {
            title: `PUF Panel Manufacturers in ${location}`,
            category: 'Insulation',
            icon: <FaLayerGroup size={32} />,
            trend: 'Top Searched',
            color: '#ef4444',
            path: '/products/insulated-sheets'
        },
        {
            title: `Industrial & Structural Painting in ${location}`,
            category: 'Maintenance',
            icon: <FaPaintRoller size={32} />,
            trend: 'Trending',
            color: '#f59e0b',
            path: '/products/structural-painting'
        },
        {
            title: `uPVC Roofing Sheets in ${location}`,
            category: 'Modern Materials',
            icon: <FaShieldAlt size={32} />,
            trend: 'Rising',
            color: '#10b981',
            path: '/products/upvc-sheets'
        }
    ];

    return (
        <section className={styles.keywordSection}>
            <div className={styles.keywordGrid}>
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className={styles.keywordCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
                    >
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrapper} style={{ backgroundColor: `${service.color}15`, color: service.color }}>
                                {service.icon}
                            </div>
                            <div className={styles.trendBadge}>
                                <FaChartLine size={12} style={{ marginRight: '4px' }} />
                                {service.trend}
                            </div>
                        </div>
                        <div className={styles.cardContent}>
                            <span className={styles.category}>{service.category}</span>
                            <h3>{service.title}</h3>
                            <Link to={service.path} className={styles.actionButton}>
                                View Details <span>&rarr;</span>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default LocationServiceCards;

