import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaStar, FaMapMarkerAlt, FaExpand } from 'react-icons/fa';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import styles from './ProductCategory.module.css';

// Import local images
import heroImg from '../../assets/productshero/colored-sheets-hero.png';
import img1 from '../../assets/Metal roofing images/Metal roofing images/coloured-roofing-sheet-500x500-1.jpg';
import img2 from '../../assets/Metal roofing images/Metal roofing images/1000014774.png';
import img3 from '../../assets/Metal roofing images/Metal roofing images/1000014712.png';
import img4 from '../../assets/Metal roofing images/Metal roofing images/1000014602.png';
import img5 from '../../assets/Metal roofing images/Metal roofing images/1000014600.png';
import img6 from '../../assets/Metal roofing images/Metal roofing images/1000014546.jpg';
import img7 from '../../assets/Metal roofing images/Metal roofing images/1000014465.jpg';
import img8 from '../../assets/Metal roofing images/Metal roofing images/1000014453.png';
import img9 from '../../assets/Metal roofing images/Metal roofing images/1000014335.jpg';
import img10 from '../../assets/Metal roofing images/Metal roofing images/1000014152.jpg';
import img11 from '../../assets/Metal roofing images/Metal roofing images/1000014044.jpg';
import img12 from '../../assets/Metal roofing images/Metal roofing images/1000014010.jpg';

const RoofingMetalSheets = () => {
    const navigate = useNavigate();
    const galleryImages = [
        { src: img1, title: 'Coloured Roofing Sheet' },
        { src: img2, title: 'Profile View' },
        { src: img3, title: 'Industrial Installation' },
        { src: img4, title: 'Trapezoidal Profile' },
        { src: img5, title: 'Close-up Detail' },
        { src: img6, title: 'Warehouse project' },
        { src: img7, title: 'Roofing Installation' },
        { src: img8, title: 'Sheet Stacking' },
        { src: img9, title: 'Corner Detail' },
        { src: img10, title: 'Site Work' },
        { src: img11, title: 'Completed Project' },
        { src: img12, title: 'Quality Inspection' }
    ];

    const features = [
        // ... rest of the component
        'Anti-Capillary Groove for Weather Proofing',
        'Side Lap Design for Water Tightness',
        'Available in Factory Cranked & Curved Profiles',
        'High Strength Materials (PPGI & PPGL)',
        'Superior Water Egress Design',
        'Remarkable Recovery after Deformation'
    ];

    const specifications = [
        { label: 'Cover Width', value: '1000mm' },
        { label: 'Total Width', value: '1080mm' },
        { label: 'Crest Height', value: '35mm' },
        { label: 'Pitch', value: '250mm' },
        { label: 'Thickness Range', value: '0.47mm to 0.80mm' },
        { label: 'Materials', value: 'Pre-Painted Galvanized / Galvalume (Z120, Z180, AZ70, AZ150)' }
    ];

    const techSpecs = [
        { pitch: '250', thickness: '0.47', height: '35', area: '587.98', ixx: '72315.6', zxx: '2856.07' },
        { pitch: '250', thickness: '0.50', height: '35', area: '642.88', ixx: '80683.70', zxx: '3183.54' },
        { pitch: '250', thickness: '0.60', height: '35', area: '767.31', ixx: '103402', zxx: '4077.37' },
        { pitch: '250', thickness: '0.80', height: '35', area: '887.24', ixx: '135238', zxx: '5299.29' }
    ];

    const applications = [
        'Industrial Sheds in Taloja MIDC',
        'Warehouses in NH4 Panvel',
        'Bull Nosed Architectural Roofs',
        'Residential Roofing in Kharghar',
        'Factory Sheds in Rabale MIDC',
        'Curved Roofing Projects'
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className={styles.productPage}>
            <div className={styles.hero} style={{ '--hero-image': `url(${heroImg})` }} fetchpriority="high">
                <div className={styles.heroOverlay} />
                <div className={styles.container}>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <button onClick={() => navigate(-1)} className={styles.backLink} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                            <FaArrowLeft /> Back to Products
                        </button>
                        <motion.span className={styles.sublabel} variants={itemVariants}>
                            PRECISION & DURABILITY
                        </motion.span>
                        <motion.h1 variants={itemVariants}>
                            Metal roofing Sheets
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Leading manufacturer and supplier of high-strength trapezoidal roofing sheets for Taloja, Panvel, and Mumbai regions.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <motion.section
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.contentBlock}>
                            <h2>Expertly Engineered Metal Roofing Sheets for Industrial Excellence</h2>
                            <p>
                                At Zinco Roofing Solution, we understand that an industrial roof is more than just a cover—it is a critical asset that protects your machinery, inventory, and workforce. Our premium range of **Metal Roofing Sheets** is engineered to meet the rigorous demands of the modern industrial landscape, particularly in highly corrosive environments like the **Taloja MIDC, Rabale, and Panvel** regions.
                            </p>
                            <p>
                                We specialize in high-tensile steel roofing solutions, offering a versatile selection of **Pre-Painted Galvanized (PPGI)**, **Pre-Painted Galvalume (PPGL)**, and **Bare Galvalume** sheets. These materials are chosen for their exceptional strength-to-weight ratio, allowing for larger spans and lighter structural support requirements without compromising on safety or durability. Our sheets typically range from **0.47mm to 0.80mm** in thickness, providing the structural integrity needed to withstand high wind loads and heavy monsoon cycles prevalent in the Mumbai metropolitan region.
                            </p>

                            <h3>The Science of Protection: Anti-Capillary Technology</h3>
                            <p>
                                One of the most significant challenges in metal roofing is water ingress at the side laps. Standard roofing sheets often suffer from siphoning effects where water is "pulled" between the overlapping sheets during heavy rain. Zinco's metal sheets feature a precision-engineered **Anti-Capillary Groove**. This unique channel acts as a break-point, disrupting the surface tension of water and ensuring a 100% watertight seal even under extreme weather conditions. Combined with our superior side-lap design, your industrial facility remains completely protected from leaks and moisture-related damage.
                            </p>

                            <h3>Customizable Profiles for Architectural Versatility</h3>
                            <p>
                                Industrial architecture is evolving, and so are our products. Beyond the standard trapezoidal profiles, we offer **Factory Cranked and Curved Profiles**. Whether you require a bull-nosed finish for a sleek aesthetic or a large-radius curve for a specialized warehouse design, our on-site and factory fabrication capabilities ensure a perfect fit. Our sheets are known for their **remarkable recovery after deformation**, meaning they can handle the slight shifts and vibrations of industrial operations without losing their protective properties or structural shape.
                            </p>

                            <h3>Why Choose Zinco Metal Roofing?</h3>
                            <ul>
                                <li><strong>Superior Corrosion Resistance:</strong> Our Galvalume sheets (AZ70/AZ150) offer up to four times the atmospheric corrosion resistance than standard galvanized steel.</li>
                                <li><strong>High Thermal Reflectivity:</strong> Bare Galvalume sheets reflect a high percentage of solar radiation, reducing the cooling load on your HVAC systems and saving energy costs.</li>
                                <li><strong>Lightweight but Tough:</strong> Easy to handle and install, yet providing high load-bearing capacity (tested at 245/345/550 Mpa).</li>
                                <li><strong>Eco-Friendly:</strong> Steel is 100% recyclable, making our roofing a sustainable choice for green building certifications.</li>
                            </ul>
                        </div>
                    </motion.section>

                    <motion.section
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2>Product Dimensions</h2>
                        <Card variant="glass">
                            <div className={styles.specsTable}>
                                {specifications.map((spec, index) => (
                                    <div key={index} className={styles.specRow}>
                                        <div className={styles.specLabel}>{spec.label}</div>
                                        <div className={styles.specValue}>{spec.value}</div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </motion.section>

                    <motion.section
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Technical Specifications (Load Tables)</h2>
                        <Card variant="solid">
                            <div className={styles.tableWrapper}>
                                <table className={styles.customTable}>
                                    <thead>
                                        <tr>
                                            <th>PITCH (mm)</th>
                                            <th>THICKNESS (mm)</th>
                                            <th>HEIGHT (mm)</th>
                                            <th>AREA (mm2/m)</th>
                                            <th>Ixx (mm4/m)</th>
                                            <th>Zxx (mm3)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {techSpecs.map((row, idx) => (
                                            <tr key={idx}>
                                                <td>{row.pitch}</td>
                                                <td>{row.thickness}</td>
                                                <td>{row.height}</td>
                                                <td>{row.area}</td>
                                                <td>{row.ixx}</td>
                                                <td>{row.zxx}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </motion.section>

                    <motion.section
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Material Grades & Availability</h2>
                        <div className={styles.grid2Col}>
                            <Card variant="glass">
                                <h3>Galvanized / PPGI</h3>
                                <p>Z 120 (245/345 Mpa)</p>
                                <p>Z 180 (245/345 Mpa)</p>
                                <p><strong>Thickness:</strong> 0.47 to 0.80 mm</p>
                            </Card>
                            <Card variant="glass">
                                <h3>Galvalume / PPGL</h3>
                                <p>AZ 70 (300/550 Mpa)</p>
                                <p>AZ 150 (300/550 Mpa)</p>
                                <p><strong>Thickness:</strong> 0.47 to 0.80 mm</p>
                            </Card>
                        </div>
                    </motion.section>

                    <section className={styles.section}>
                        <h2>Product Gallery</h2>
                        <div className={styles.galleryGrid}>
                            {galleryImages.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    className={styles.galleryItem}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                >
                                    <img src={img.src} alt={img.title} className={styles.galleryImage} />
                                    <div className={styles.galleryOverlay}>
                                        <span>{img.title}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <motion.section
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Maintenance and Longevity Tips</h2>
                        <div className={styles.contentBlock}>
                            <p>
                                While our metal roofing sheets are designed for extreme durability, regular maintenance can further extend their lifespan beyond 30+ years. We recommend a bi-annual inspection to clear debris from gutters and valleys. This prevents moisture buildup and ensure the anti-capillary grooves remain unobstructed.
                            </p>
                            <p>
                                In industrial zones like <strong>Kharghar or Navi Mumbai</strong>, salt and chemical deposits can settle on the surface. Rinsing your roof with clean water once a year will help preserve the vibrant finish of your PPGI/PPGL coatings. Our sheets are designed for "set and forget" peace of mind, but a little care ensures they look new for decades.
                            </p>
                        </div>
                    </motion.section>

                    <motion.section
                        className={styles.section}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Frequently Asked Questions</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h4>Are metal roofing sheets noisy during heavy rain?</h4>
                                <p>Modern installation techniques, including the use of high-quality insulation and proper fastening, significantly reduce noise. In most industrial applications with higher ceilings, the sound of rain is barely noticeable. For residential use, we recommend our insulated or puf panel solutions for maximum sound dampening.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>How do Galvalume sheets compare to Galvanized sheets?</h4>
                                <p>Galvanized sheets are coated with pure Zinc, while Galvalume is a patented alloy of Aluminum (55%) and Zinc (43.4%). Galvalume typically provides superior corrosion resistance in acidic or industrial environments, whereas Galvanized is excellent for alkaline environments (near concrete).</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Can these sheets be used for wall cladding?</h4>
                                <p>Absolutely! Many of our clients in the **Panvel warehouse hub** use our trapezoidal profile sheets for both roofing and wall cladding. It provides a cohesive, professional look while offering the same level of durability and weather-proofing for the entire structure.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Do you provide on-site fabrication for large projects?</h4>
                                <p>Yes, for large-scale projects in industrial zones, we can deploy on-site forming machines to create long-length sheets that eliminate the need for end laps, providing a virtually seamless roof and superior structural integrity.</p>
                            </div>
                        </div>
                    </motion.section>

                    <section className={styles.ctaSection}>
                        <Card variant="gradient" className={styles.ctaCard}>
                            <h3>Custom Profiles for your Project?</h3>
                            <p>We provide factory-curved and cranked sheets for unique designs in Mumbai.</p>
                            <div className={styles.ctaButtons}>
                                <Button size="lg" href="/contact">Get Quote</Button>
                                <Button size="lg" variant="outline" href="tel:+919967203090">Call Now</Button>
                            </div>
                        </Card>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default RoofingMetalSheets;
