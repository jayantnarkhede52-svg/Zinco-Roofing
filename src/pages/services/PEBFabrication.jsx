import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaBuilding, FaCogs, FaDraftingCompass, FaCheckCircle, FaIndustry } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import LocationMap from '../../components/shared/LocationMap';
import heroImage from '../../assets/img3.webp'; // Industrial hero
import pebImage from '../../assets/Dect sheet/Dect sheet/1000014053.webp';
import styles from '../locations/LocationStyles.module.css';

const PEBFabrication = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="PEB Structure Fabrication & Industrial Sheds | Zinco Roofing"
                description="Top-tier PEB structure fabrication in Navi Mumbai. Specialized in pre-engineered buildings, industrial sheds, and heavy structural steel work."
                keywords="peb structure fabrication, pre-engineered buildings, industrial shed design, structural steel contractors, peb building manufacturer"
                canonicalUrl="https://zincoroof.com/services/peb-structure-fabrication"
            />

            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.heroOverlay} />
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1>PEB Structure Fabrication Services</h1>
                        <p>Innovating <strong>PEB structure fabrication</strong> for high-performance industrial and commercial spaces.</p>
                        <div className={styles.heroButtons}>
                            <a href="/contact" className={styles.heroBtn}>Discuss Your Project</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <main className={styles.mainContent}>
                <div className={styles.container}>
                    <section className={styles.introSection}>
                        <h2>Modern PEB Building Solutions</h2>
                        <div className={styles.twoColumn}>
                            <div className={styles.textContent}>
                                <p>
                                    As experts in <strong>PEB structure fabrication</strong>, Zinco Roofing provides end-to-end solutions for pre-engineered buildings that are cost-effective, durable, and quick to assemble.
                                </p>
                                <p>
                                    Our <strong>PEB structure fabrication</strong> process involves precision engineering of primary and secondary members to ensure maximum clear span and structural integrity for large warehouses and factories.
                                </p>
                                <ul>
                                    <li><FaCheckCircle /> High-Tensile Steel Fabrication</li>
                                    <li><FaCheckCircle /> Clear Span Designs up to 60m</li>
                                    <li><FaCheckCircle /> Turnkey Industrial Shed Solutions</li>
                                    <li><FaCheckCircle /> Earthquake-Resistant Structures</li>
                                </ul>
                            </div>
                            <div className={styles.imageBlock}>
                                <img src={pebImage} alt="PEB Structure Fabrication and Pre-Engineered Building Design" />
                            </div>
                        </div>
                    </section>

                    <section className={styles.technicalSection}>
                        <h2>Technical Specifications</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.techTable}>
                                <thead>
                                    <tr>
                                        <th>Component</th>
                                        <th>Material/Spec</th>
                                        <th>Benefit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Primary Frame</td>
                                        <td>ASTM A572 Grade 50 Steel</td>
                                        <td>Superior structural strength</td>
                                    </tr>
                                    <tr>
                                        <td>Secondary Members</td>
                                        <td>Z & C Purlins (G90 Galvanized)</td>
                                        <td>Corrosion resistance</td>
                                    </tr>
                                    <tr>
                                        <td>Roofing</td>
                                        <td>AZ150 Galvalume Sheets</td>
                                        <td>Thermal reflection & longevity</td>
                                    </tr>
                                    <tr>
                                        <td>Connections</td>
                                        <td>High-strength Grade 8.8 Bolts</td>
                                        <td>Fast & secure assembly</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className={styles.benefitGrid}>
                        <div className={styles.benefitCard}>
                            <FaCogs className={styles.icon} />
                            <h3>Precision Engineering</h3>
                            <p>Every bolt hole and cut is CNC-machined for perfect alignment on-site.</p>
                        </div>
                        <div className={styles.benefitCard}>
                            <FaClock className={styles.icon} />
                            <h3>Speed of Erection</h3>
                            <p>PEB systems are 40% faster to build than conventional civil structures.</p>
                        </div>
                        <div className={styles.benefitCard}>
                            <FaIndustry className={styles.icon} />
                            <h3>Custom Heights</h3>
                            <p>Optimized for mezzanine floors and overhead EOT crane systems.</p>
                        </div>
                    </section>
                </div>
            </main>

            <LocationMap title="Our Fabrication Hub" query="Taloja MIDC Phase 1" />
            
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Ready to Build?</h2>
                        <p>Get a customized <strong>PEB structure fabrication</strong> quote based on your specific layout and span requirements.</p>
                        <div className={styles.ctaButtons}>
                            <a href="/industrial-roofing-cost-calculator" className={styles.primaryBtn}>Calculate Cost</a>
                            <a href="/contact" className={styles.secondaryBtn}>Request Proposal</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PEBFabrication;
