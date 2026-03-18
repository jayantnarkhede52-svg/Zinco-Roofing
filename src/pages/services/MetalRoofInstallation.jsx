import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaHardHat, FaLayerGroup, FaRulerCombined, FaCheckCircle, FaTools } from 'react-icons/fa';
import SEO from '../../components/shared/SEO';
import LocationMap from '../../components/shared/LocationMap';
import heroImage from '../../assets/locations/mumbai_hero.webp';
import installImage from '../../assets/Metal roofing images/Metal roofing images/coloured-roofing-sheet-500x500-1.webp';
import styles from '../locations/LocationStyles.module.css';

const MetalRoofInstallation = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="Metal Roof Installation & Sheet Fixing Services | Zinco Roofing"
                description="Expert metal roof installation services in Navi Mumbai. Top-quality sheet fixing, deck installation, and galvalume roofing for factories."
                keywords="metal roof installation, roofing sheet fixing, galvalume sheet installation, industrial roof installation, metal roofing contractor"
                canonicalUrl="https://zincoroof.com/services/metal-roof-installation"
            />

            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.heroOverlay} />
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1>Metal Roof Installation Services</h1>
                        <p>Precision <strong>metal roof installation</strong> and high-performance sheet fixing for durable industrial shelters.</p>
                        <div className={styles.heroButtons}>
                            <a href="/contact" className={styles.heroBtn}>Get Online Quote</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <main className={styles.mainContent}>
                <div className={styles.container}>
                    <section className={styles.introSection}>
                        <h2>Professional Sheet Fixing & Erection</h2>
                        <div className={styles.twoColumn}>
                            <div className={styles.textContent}>
                                <p>
                                    Our <strong>metal roof installation</strong> services are built on a foundation of safety and engineering precision. We specialize in the installation of Colour Coated, Galvalume, and Aluminium sheets.
                                </p>
                                <p>
                                    Successful <strong>metal roof installation</strong> relies on the correct fixing of J-bolts, self-drilling screws, and EPDM washers to prevent future leakages and wind damage.
                                </p>
                                <ul>
                                    <li><FaCheckCircle /> Industrial Decking Sheet Installation</li>
                                    <li><FaCheckCircle /> Standing Seam & Clip-lock Fixing</li>
                                    <li><FaCheckCircle /> Trims, Flashings & Ridges Installation</li>
                                    <li><FaCheckCircle /> Professional Purlin Alignment</li>
                                </ul>
                            </div>
                            <div className={styles.imageBlock}>
                                <img src={installImage} alt="Metal Roof Installation process showing Colour Coated sheets" />
                            </div>
                        </div>
                    </section>

                    <section className={styles.technicalSection}>
                        <h2>Installation Benchmarks</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.techTable}>
                                <thead>
                                    <tr>
                                        <th>Step</th>
                                        <th>Technique</th>
                                        <th>Why it Matters</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Alignment</td>
                                        <td>Laser-guided purlin check</td>
                                        <td>Prevents sheet buckling</td>
                                    </tr>
                                    <tr>
                                        <td>Fixing</td>
                                        <td>SDS with EPDM Washers</td>
                                        <td>Zero-leak penetration</td>
                                    </tr>
                                    <tr>
                                        <td>Overlaps</td>
                                        <td>150mm - 200mm Lap + Sealant</td>
                                        <td>Capillary action prevention</td>
                                    </tr>
                                    <tr>
                                        <td>Finish</td>
                                        <td>Edge-bending & Trimming</td>
                                        <td>Corrosion edge protection</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className={styles.benefitGrid}>
                        <div className={styles.benefitCard}>
                            <FaHardHat className={styles.icon} />
                            <h3>Safety First</h3>
                            <p>We follow strict height-safety protocols and use Fall Protection Systems.</p>
                        </div>
                        <div className={styles.benefitCard}>
                            <FaRulerCombined className={styles.icon} />
                            <h3>Zero Waste</h3>
                            <p>Accurate site measurements reduced material wastage by 15%.</p>
                        </div>
                        <div className={styles.benefitCard}>
                            <FaLayerGroup className={styles.icon} />
                            <h3>Versatile Systems</h3>
                            <p>Experience with over 20+ profile types from leading manufacturers.</p>
                        </div>
                    </section>
                </div>
            </main>

            <LocationMap title="Installation Experts" query="Navi Mumbai Maharashtra" />
            
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Build with Confidence</h2>
                        <p>Expert <strong>metal roof installation</strong> doesn't have to be expensive. Get a value-engineered quote today.</p>
                        <div className={styles.ctaButtons}>
                            <a href="tel:+919967203090" className={styles.primaryBtn}>Call +91 99672 03090</a>
                            <a href="/contact" className={styles.secondaryBtn}>Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MetalRoofInstallation;
