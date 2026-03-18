import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaTools, FaLightbulb, FaChevronRight } from 'react-icons/fa';
import styles from './IndustrialInsights.module.css';

const insights = [
    {
        id: 1,
        title: "Industrial Roof Maintenance Checklist",
        tag: "MAINTENANCE",
        description: "Essential steps to prepare your factory roof for the Mumbai monsoon and prevent costly leakages.",
        icon: <FaTools />,
        link: "/industrial-roof-maintenance-guide"
    },
    {
        id: 2,
        title: "Metal vs. PVC: Choosing Your Sheet",
        tag: "MATERIAL GUIDE",
        description: "A comprehensive comparison of durability, cost, and thermal insulation for industrial roofing.",
        icon: <FaLightbulb />,
        link: "/roofing-material-comparison-guide"
    },
    {
        id: 3,
        title: "Modern PEB Space Optimization",
        tag: "ENGINEERING",
        description: "How pre-engineered buildings can maximize your floor area and clear span requirements.",
        icon: <FaBookOpen />,
        link: "/peb-space-optimization"
    }
];

const IndustrialInsights = () => {
    return (
        <section className={styles.insightsSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Industrial Roofing Insights</h2>
                    <p>Expert knowledge to help you make informed decisions about your industrial infrastructure.</p>
                </div>

                <div className={styles.grid}>
                    {insights.map((item, index) => (
                        <motion.div 
                            key={item.id}
                            className={styles.card}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.iconWrapper}>{item.icon}</div>
                            <div className={styles.content}>
                                <span className={styles.tag}>{item.tag}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <a href={item.link} className={styles.learnMore}>
                                    Read Guide <FaChevronRight />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrialInsights;
