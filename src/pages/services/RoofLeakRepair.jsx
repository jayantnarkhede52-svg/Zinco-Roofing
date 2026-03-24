import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaToolbox, FaShieldAlt, FaClock, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import LocationMap from '../../components/shared/LocationMap';
import heroImage from '../../assets/services-hero.webp'; 
import repairImage from '../../assets/Metal roofing images/Metal roofing images/1000014010.webp';
import styles from '../locations/LocationStyles.module.css';

const RoofLeakRepair = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Industrial Roof Leak Repair & Crack Sealing | Zinco Roofing"
                description="Professional industrial roof leak repair and roof crack repair services in Navi Mumbai. 24/7 emergency support for factory and warehouse roofs."
                keywords="roof leak repair, repair roof cracks, roof crack repair, industrial roof maintenance, warehouse leak sealing"
                canonicalUrl="https://www.zincoroof.com/services/industrial-roof-leak-repair"
            />

            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.heroOverlay} />
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1>Industrial Roof Leak Repair Services</h1>
                        <p>Immediate <strong>roof leak repair</strong> and professional <strong>roof crack repair</strong> solutions for industrial sheds and warehouses.</p>
                        <div className={styles.heroButtons}>
                            <a href="/contact" className={styles.heroBtn}>Book Free Inspection</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <main className={styles.mainContent}>
                <div className={styles.container}>
                    <section className={styles.introSection}>
                        <h2>Expert Roof Crack Repair & Sealing</h2>
                        <div className={styles.twoColumn}>
                            <div className={styles.textContent}>
                                <p>
                                    A minor leak can lead to major industrial downtime. Our team specializes in critical <strong>roof leak repair</strong> and long-term <strong>roof crack repair</strong> using high-grade industrial sealants and bituminous membranes.
                                </p>
                                <p>
                                    We don't just patch; we provide a systematic approach to <strong>repair roof cracks</strong> by identifying the root cause, whether it's thermal expansion, rusted fixings, or structural settling.
                                </p>
                                <ul>
                                    <li><FaCheckCircle /> Emergency Leak Detection & Sealing</li>
                                    <li><FaCheckCircle /> Industrial Gutter Cleaning & Repair</li>
                                    <li><FaCheckCircle /> Polyurethane (PU) Coating for Cracks</li>
                                    <li><FaCheckCircle /> Rust Treatment & Sheet Replacement</li>
                                </ul>
                            </div>
                            <div className={styles.imageBlock}>
                                <img src={repairImage} alt="Industrial Roof Leak Repair and Crack Sealing being performed by Zinco" />
                            </div>
                        </div>
                    </section>

                    <section className={styles.technicalSection}>
                        <h2>Our Repair Process</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.techTable}>
                                <thead>
                                    <tr>
                                        <th>Step</th>
                                        <th>Action Taken</th>
                                        <th>Outcome</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Assessment</td>
                                        <td>Thermal imaging & pressure testing</td>
                                        <td>Identify hidden <strong>roof cracks</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Preparation</td>
                                        <td>Surface grinding & rust removal</td>
                                        <td>Optimal sealant adhesion</td>
                                    </tr>
                                    <tr>
                                        <td>Application</td>
                                        <td>Multi-layer liquid membrane coating</td>
                                        <td>100% <strong>roof leak repair</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Validation</td>
                                        <td>Post-repair water ponding test</td>
                                        <td>Leak-free certification</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className={styles.faqSection}>
                        <h2>Roof Repair FAQs</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>Can you repair roof cracks without replacing sheets?</h3>
                                <p>Yes, in most cases, we can <strong>repair roof cracks</strong> using high-tensile liquid membranes that breathe with the roof's thermal cycles, avoiding costly replacements.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>How fast can you respond to a roof leak?</h3>
                                <p>We offer 24-48 hour response times for industrial clients in Navi Mumbai and Mumbai to prevent inventory damage from roof leaks.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <LocationMap title="Emergency Repair Service" query="Navi Mumbai Industrial Area" />
            
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Stop the Leak Today!</h2>
                        <p>Don't wait for the next monsoon to <strong>repair roof cracks</strong>. Get a professional <strong>roof leak repair</strong> assessment now.</p>
                        <div className={styles.ctaButtons}>
                            <a href="tel:+919967203090" className={styles.primaryBtn}>Call +91 99672 03090</a>
                            <a href="/contact" className={styles.secondaryBtn}>Get Online Quote</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RoofLeakRepair;
