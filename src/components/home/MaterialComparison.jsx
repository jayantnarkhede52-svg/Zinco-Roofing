import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import styles from './MaterialComparison.module.css';

const MaterialComparison = () => {
    const [year, setYear] = useState(5);

    const years = [0, 5, 10, 15];

    const getMaterialState = (type, currentYear) => {
        if (type === 'standard') {
            if (currentYear === 0) return { opacity: 1, rust: 0, text: 'New Galvanized Steel' };
            if (currentYear === 5) return { opacity: 0.8, rust: 30, text: 'Initial signs of oxidation' };
            if (currentYear === 10) return { opacity: 0.6, rust: 70, text: 'Significant rust & structural weakening' };
            return { opacity: 0.4, rust: 100, text: 'Replacement required. Severe leakage.' };
        } else {
            if (currentYear === 0) return { opacity: 1, rust: 0, text: 'Zinco Premium Coated' };
            if (currentYear === 5) return { opacity: 1, rust: 0, text: 'Maintains original luster' };
            if (currentYear === 10) return { opacity: 0.95, rust: 5, text: 'Maximum protection active' };
            return { opacity: 0.9, rust: 10, text: 'Still structurally sound & leak-proof' };
        }
    };

    return (
        <section className={styles.comparisonSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.span
                        className={styles.sublabel}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        LONG-TERM DURABILITY
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        See the Zinco Difference Over Time
                    </motion.h2>
                    <p>Compare how our materials perform against standard industry exports.</p>
                </div>

                <div className={styles.interactiveWrapper}>
                    <div className={styles.timelineContainer}>
                        <div className={styles.timelineLine}>
                            <motion.div
                                className={styles.timelineProgress}
                                initial={{ width: 0 }}
                                animate={{ width: `${(years.indexOf(year) / (years.length - 1)) * 100}%` }}
                            />
                        </div>
                        <div className={styles.nodes}>
                            {years.map((y) => (
                                <button
                                    key={y}
                                    className={`${styles.node} ${year === y ? styles.active : ''}`}
                                    onClick={() => setYear(y)}
                                >
                                    <span className={styles.nodeLabel}>{y} Years</span>
                                    <div className={styles.nodeDot} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={styles.comparisonGrid}>
                        {/* Standard Material */}
                        <div className={styles.materialCard}>
                            <div className={styles.cardHeader}>
                                <FaTimesCircle className={styles.badIcon} />
                                <h3>Standard Steel</h3>
                            </div>
                            <div className={styles.visualContainer}>
                                <div className={styles.sheetBase} />
                                <motion.div
                                    className={styles.rustOverlay}
                                    initial={false}
                                    animate={{
                                        opacity: getMaterialState('standard', year).rust / 100,
                                        filter: `sepia(${getMaterialState('standard', year).rust}%) saturate(300%)`
                                    }}
                                />
                            </div>
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={year}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className={styles.statusText}
                                >
                                    {getMaterialState('standard', year).text}
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        {/* Zinco Material */}
                        <div className={styles.materialCard}>
                            <div className={styles.cardHeader}>
                                <FaCheckCircle className={styles.goodIcon} />
                                <h3>Zinco Advanced</h3>
                            </div>
                            <div className={styles.visualContainer}>
                                <div className={styles.sheetBase} style={{ background: 'var(--accent-500)' }} />
                                <motion.div
                                    className={styles.sheenOverlay}
                                    animate={{
                                        opacity: year === 0 ? 0.4 : 0.2,
                                        x: year === 0 ? [-200, 400] : 0
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.div
                                    className={styles.rustOverlay}
                                    initial={false}
                                    animate={{
                                        opacity: getMaterialState('zinco', year).rust / 100,
                                        filter: `sepia(${getMaterialState('zinco', year).rust}%) saturate(100%)`
                                    }}
                                />
                            </div>
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={year}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className={styles.statusText}
                                >
                                    {getMaterialState('zinco', year).text}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MaterialComparison;
