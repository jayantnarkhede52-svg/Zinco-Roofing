import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaWarehouse, FaShieldAlt, FaTruckLoading, FaCheckCircle, FaFireExtinguisher } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import LocationMap from '../../components/shared/LocationMap';
import heroImage from '../../assets/img3.webp'; 
import warehouseImage from '../../assets/productshero/puf img.webp';
import styles from '../locations/LocationStyles.module.css';

const WarehouseRoofing = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Warehouse Roofing Solutions & Industrial Sheds | Zinco Roofing"
                description="Comprehensive warehouse roofing solutions in Navi Mumbai. Specialized in large-span sheds, insulation, and leak-proof roofing for logistics hubs."
                keywords="warehouse roofing solutions, industrial shed roofing, logistics park roofing, warehouse insulation, large span roofing"
                canonicalUrl="https://www.zincoroof.com/services/warehouse-roofing-solutions"
            />

            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.heroOverlay} />
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1>Warehouse Roofing Solutions</h1>
                        <p>Protecting your inventory with high-performance <strong>warehouse roofing solutions</strong> engineered for logistics excellence.</p>
                        <div className={styles.heroButtons}>
                            <a href="/contact" className={styles.heroBtn}>Consult Expert</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <main className={styles.mainContent}>
                <div className={styles.container}>
                    <section className={styles.introSection}>
                        <h2>Large-Scale Logistics Roofing</h2>
                        <div className={styles.twoColumn}>
                            <div className={styles.textContent}>
                                <p>
                                    At Zinco Roofing, we understand that <strong>warehouse roofing solutions</strong> require more than just sheets; they require integrated systems that manage heat, light, and ventilation.
                                </p>
                                <p>
                                    Our <strong>warehouse roofing solutions</strong> prioritize longevity and inventory safety, utilizing advanced materials like Standing Seam and PUF Panels to ensure a 100% leak-proof environment.
                                </p>
                                <ul>
                                    <li><FaCheckCircle /> FM-Approved Roofing Systems</li>
                                    <li><FaCheckCircle /> Thermal Insulation for Temperature Control</li>
                                    <li><FaCheckCircle /> Natural Lighting with Polycarbonate Integration</li>
                                    <li><FaCheckCircle /> High Wind-Resistive Framing</li>
                                </ul>
                            </div>
                            <div className={styles.imageBlock}>
                                <img src={warehouseImage} alt="Large Scale Warehouse Roofing Solution featuring PUF insulation" />
                            </div>
                        </div>
                    </section>

                    <section className={styles.technicalSection}>
                        <h2>Key Performance Indices</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.techTable}>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Specification</th>
                                        <th>Advantage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Thermal U-Value</td>
                                        <td>0.2~0.4 W/m²K</td>
                                        <td>Reduced HVAC operational costs</td>
                                    </tr>
                                    <tr>
                                        <td>Wind Load</td>
                                        <td>Up to 150 km/h</td>
                                        <td>Resilience during monsoons</td>
                                    </tr>
                                    <tr>
                                        <td>Fire Rating</td>
                                        <td>Class 1 / Class A</td>
                                        <td>Enhanced insurance safety</td>
                                    </tr>
                                    <tr>
                                        <td>Daylighting</td>
                                        <td>5-10% Roof Area</td>
                                        <td>Minimized daytime lighting costs</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className={styles.benefitGrid}>
                        <div className={styles.benefitCard}>
                            <FaTruckLoading className={styles.icon} />
                            <h3>Inventory Safety</h3>
                            <p>No leaks, no condensation—guaranteed protection for your stored goods.</p>
                        </div>
                        <div className={styles.benefitCard}>
                            <FaFireExtinguisher className={styles.icon} />
                            <h3>Compliance Ready</h3>
                            <p>Our systems meet international warehouse safety and fire norms.</p>
                        </div>
                        <div className={styles.benefitCard}>
                            <FaWarehouse className={styles.icon} />
                            <h3>Acoustic Comfort</h3>
                            <p>Noise reduction during heavy rain, improving working conditions.</p>
                        </div>
                    </section>
                </div>
            </main>

            <LocationMap title="Logistics Corridor Presence" query="JNPT Uran Panvel Road" />
            
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Scale Your Storage</h2>
                        <p>From 5,000 to 500,000 sq.ft, we provide the ultimate <strong>warehouse roofing solutions</strong>.</p>
                        <div className={styles.ctaButtons}>
                            <a href="/industrial-roofing-projects-navi-mumbai" className={styles.primaryBtn}>See Our Projects</a>
                            <a href="/contact" className={styles.secondaryBtn}>Get Expert Advice</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WarehouseRoofing;
