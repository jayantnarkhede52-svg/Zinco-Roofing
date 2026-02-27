import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaIndustry, FaLayerGroup, FaShieldAlt, FaTemperatureLow, FaWater } from 'react-icons/fa';
import Button from '../../components/shared/Button';
import heroImage from '../../assets/img1.png'; // Using a relevant hero image
import imgIntro from '../../assets/img 7.png';
import imgWhatIs from '../../assets/img 6.png';
import imgTypes from '../../assets/productshero/types-puf.png';
import imgApplications from '../../assets/Puf panel images/Puf panel images/1001155530.jpg';
import imgInstall from '../../assets/productshero/puf img.png';
import imgProjects from '../../assets/Puf panel images/Puf panel images/1001155532.jpg';
import SEO from '../../components/shared/SEO';
import styles from './LocationStyles.module.css';

const PUFPanelNaviMumbai = () => {
    return (
        <div className={styles.locationPage}>
            <SEO
                title="PUF panel manufacturer in navi mumbai"
                description="PUF panel manufacturer in Navi Mumbai delivering factory-direct insulated panels with free site visit, custom fabrication and quick installation."
                keywords="PUF panel manufacturer in Navi Mumbai, insulated roofing sheets, industrial puf panels, navi mumbai puf panel suppliers"
            />
            <Helmet>
                <link rel="preload" as="image" href={heroImage} />
            </Helmet>
            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.heroOverlay} />
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Puf Panel Manufacturers in Navi Mumbai</h1>
                        <p>Leading Puf Panel Manufacturers in Navi Mumbai delivering Industrial & Commercial Insulation Solutions for the MMR Region.</p>
                        <Button href="#contact" size="lg">Get a Quote</Button>
                    </motion.div>
                </div>
            </section>

            <div className={styles.container}>
                <main className={styles.mainContent}>
                    {/* Section 1: Introduction */}
                    <section className={styles.introSection}>
                        <div className={styles.twoColumn}>
                            <div className={styles.textBlock}>
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    Trusted Puf Panel Manufacturers in Navi Mumbai
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    Navi Mumbai has evolved into a powerhouse of industrial activity, bridging the gap between global logistics hubs and high-tech manufacturing corridors. As one of the premier <strong>Puf panel manufacturers in Navi Mumbai</strong>, we provide specialized building envelope solutions for the region’s most demanding environments. Our operations are strategically centered to serve the TTC Industrial Area, the chemical and engineering clusters of Taloja MIDC, and the technology hubs in Rabale and Airoli.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    Building in the Mumbai Metropolitan Region (MMR) requires more than just standard materials; it demands structures that can withstand 3,000mm of annual rainfall and the corrosive salt air of the Konkan coast. We deliver high-performance insulated sandwich panels that ensure structural integrity and thermal comfort, helping local businesses reduce their operational costs and carbon footprints. Choosing the right <strong>Puf panel manufacturers in Navi Mumbai</strong> ensures you get distinct quality advantages.
                                </motion.p>
                            </div>
                            <motion.div
                                className={styles.imageBlock}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <img src={imgIntro} alt="Industrial Skyline of Navi Mumbai" loading="lazy" decoding="async" />
                            </motion.div>
                        </div>
                    </section>

                    {/* Section 2: What are PUF Panels? */}
                    <section className={styles.technicalSection} style={{ background: 'var(--white)', color: 'var(--text-primary)', padding: 'var(--spacing-2xl) 0' }}>
                        <div className={styles.container}>
                            <div className={styles.twoColumn}>
                                <motion.div
                                    className={styles.imageBlock}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <img src={imgWhatIs} alt="PUF Panel Structure" loading="lazy" decoding="async" />
                                </motion.div>
                                <div className={styles.textBlock}>
                                    <h2 style={{ color: 'var(--gray-900)', textAlign: 'left', marginBottom: 'var(--spacing-xl)' }}>What Are PUF Panels?</h2>
                                    <p style={{ marginBottom: 'var(--spacing-xl)', fontSize: 'var(--text-lg)' }}>
                                        Polyurethane Foam (PUF) panels are advanced composite "sandwich" structures designed for superior insulation and structural strength. Unlike traditional single-skin metal sheets that trap heat and allow moisture seepage, these panels consist of three distinct layers. Leading <strong>Puf panel manufacturers in Navi Mumbai</strong> engineer these for maximum thermal efficiency:
                                    </p>
                                </div>
                            </div>

                            <div className={styles.benefitGrid}>
                                <motion.div className={styles.benefitCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <FaTemperatureLow size={32} color="#3b82f6" style={{ marginBottom: '1rem' }} />
                                    <h3>The Core</h3>
                                    <p>A high-density rigid Polyurethane Foam core that acts as a world-class thermal barrier, maintaining stable internal temperatures.</p>
                                </motion.div>

                                <motion.div className={styles.benefitCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <FaLayerGroup size={32} color="#f59e0b" style={{ marginBottom: '1rem' }} />
                                    <h3>The Skins</h3>
                                    <p>Two outer layers typically made from Pre-Painted Galvanized Iron (PPGI), Galvalume (PPGL), or Stainless Steel (SS) for maximum durability.</p>
                                </motion.div>

                                <motion.div className={styles.benefitCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <FaShieldAlt size={32} color="#10b981" style={{ marginBottom: '1rem' }} />
                                    <h3>The Bond</h3>
                                    <p>A high-pressure bonding process ensures the core and skins function as a single structural unit, offering a high strength-to-weight ratio.</p>
                                </motion.div>
                            </div>

                            <p style={{ marginTop: 'var(--spacing-lg)', fontStyle: 'italic', color: 'var(--gray-600)' }}>
                                These panels are the backbone of modern Pre-Engineered Buildings (PEB) because they provide insulation, weatherproofing, and structural support in one rapid-install package.
                            </p>
                        </div>
                    </section>

                    {/* Section 3: Types of PUF Panels */}
                    <section className={styles.introSection}>
                        <div className={styles.twoColumn}>
                            <div className={styles.textBlock}>
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    Types of PUF Panels We Manufacture
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    style={{ marginBottom: 'var(--spacing-2xl)' }}
                                >
                                    As specialized <strong>Puf panel manufacturers in Navi Mumbai</strong>, we offer a diverse range of panels tailored to specific industrial requirements in the Navi Mumbai micro-markets:
                                </motion.p>
                                <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                                    <Button href="/products" size="lg">View All Products</Button>
                                </div>
                            </div>
                            <motion.div
                                className={styles.imageBlock}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <img src={imgTypes} alt="Various Types of PUF Panels" loading="lazy" decoding="async" />
                            </motion.div>
                        </div>

                        <div className={styles.techGrid} style={{ gridTemplateColumns: '1fr' }}>
                            {[
                                { title: 'Roof PUF Panels', desc: 'Designed with a corrugated profile to facilitate rapid water shedding during intense monsoons. Top Puf panel manufacturers in Navi Mumbai recommend these for heavy rainfall areas.' },
                                { title: 'Wall PUF Panels', desc: 'Used for internal partitions and external cladding. Available in ribbed, micro-ribbed, or plain finishes, these panels provide excellent aesthetic appeal for commercial facades in areas like Vashi or CBD Belapur.' },
                                { title: 'Cold Storage PUF Panels', desc: 'Specially engineered for the APMC market and food processing units. With thicknesses up to 150mm, these panels maintain temperatures from -60°C to +80°C, ensuring the integrity of perishable goods.' },
                                { title: 'Insulated Sandwich Panels', desc: 'Versatile panels for modular construction, including site offices, security cabins, and worker housing. These are ideal for the rapid infrastructure expansion currently seen near the Navi Mumbai International Airport.' },
                                { title: 'Industrial Shed PUF Panels', desc: 'Heavy-duty solutions for the large-scale warehouses in Panvel, Bhiwandi, and Uran. These are optimized for long spans (up to 12 meters) to reduce the need for secondary steel support.' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    style={{
                                        padding: 'var(--spacing-lg) 0',
                                        borderBottom: '1px solid var(--gray-200)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 'var(--spacing-xs)'
                                    }}
                                >
                                    <h3 style={{ color: 'var(--accent-600)', fontSize: '1.2rem', margin: 0 }}>
                                        <FaIndustry style={{ marginRight: '0.5rem', verticalAlign: 'middle', fontSize: '1rem', color: 'var(--accent-400)' }} />
                                        {item.title}
                                    </h3>
                                    <p style={{ margin: 0, color: 'var(--gray-700)', paddingLeft: '1.8rem' }}>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Section 4: Technical Specifications */}
                    <section className={styles.technicalSection}>
                        <div className={styles.container}>
                            <h2>Technical Specifications - Puf panel manufacturers in Navi Mumbai</h2>
                            <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--spacing-2xl)', opacity: 0.9 }}>
                                Google and structural engineers alike value precise technical data. Our panels are manufactured to meet International and Indian Standards (IS), setting us apart from other <strong>Puf panel manufacturers in Navi Mumbai</strong>:
                            </p>

                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--white)', fontSize: '0.95rem' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '1px solid var(--gray-700)' }}>
                                            <th style={{ padding: '1rem', textAlign: 'left', width: '30%' }}>Property</th>
                                            <th style={{ padding: '1rem', textAlign: 'left' }}>Specification / Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { prop: 'Available Thickness', val: '30mm, 40mm, 50mm, 60mm, 80mm, 100mm, 150mm' },
                                            { prop: 'Core Density', val: '40 (±2) kg/m³' },
                                            { prop: 'Thermal Conductivity', val: '0.019 – 0.023 W/mK' },
                                            { prop: 'Temperature Range', val: '-90°C to +110°C' },
                                            { prop: 'Sound Insulation', val: '25 – 30 dB' },
                                            { prop: 'Fire Resistance', val: 'B3 / Class 1 (Fire retardant variants available)' },
                                            { prop: 'Water Absorption', val: 'Less than 1.0% by volume after 24 hours' },
                                            { prop: 'Closed Cell Content', val: '> 93%' },
                                        ].map((item, index) => (
                                            <tr key={index} style={{ borderBottom: '1px solid var(--gray-800)', background: index % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                                                <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--accent-400)' }}>{item.prop}</td>
                                                <td style={{ padding: '1rem' }}>{item.val}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Applications */}
                    <section className={styles.introSection}>
                        <div className={styles.twoColumn}>
                            <div className={styles.textBlock}>
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    Applications by Puf panel manufacturers in Navi Mumbai
                                </motion.h2>
                                <p style={{ marginBottom: 'var(--spacing-xl)', fontSize: 'var(--text-lg)' }}>
                                    Our roofing and wall solutions are optimized for the specific industrial nodes of the region, making us the preferred <strong>Puf panel manufacturers in Navi Mumbai</strong>:
                                </p>
                            </div>
                            <motion.div
                                className={styles.imageBlock}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <img src={imgApplications} alt="Industrial Applications" loading="lazy" decoding="async" />
                            </motion.div>
                        </div>

                        <div className={styles.techGrid} style={{ gridTemplateColumns: '1fr' }}>
                            {[
                                { title: 'Taloja MIDC & Turbhe', desc: 'Specialized coatings like PVDF/PVF2 are applied to panels to resist the industrial pollutants and chemical outgassing prevalent in these heavy engineering zones.' },
                                { title: 'Rabale & Mahape', desc: 'Cleanroom-grade panels are provided for pharmaceutical and biotech firms, ensuring dust-free, hygienic environments that meet GMP standards.' },
                                { title: 'Vashi APMC & JNPT', desc: 'High-thickness panels for cold storage and logistics hubs that require consistent temperature management for the food and export sectors.' },
                                { title: 'Airoli & Ghansoli', desc: 'Sound-insulated panels for IT parks and commercial offices, reducing the acoustic impact of heavy rain and traffic.' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    style={{
                                        padding: 'var(--spacing-lg) 0',
                                        borderBottom: '1px solid var(--gray-200)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 'var(--spacing-xs)'
                                    }}
                                >
                                    <h3 style={{ color: 'var(--accent-600)', fontSize: '1.2rem', margin: 0 }}>
                                        <FaIndustry style={{ marginRight: '0.5rem', verticalAlign: 'middle', fontSize: '1rem', color: 'var(--accent-400)' }} />
                                        {item.title}
                                    </h3>
                                    <p style={{ margin: 0, color: 'var(--gray-700)', paddingLeft: '1.8rem' }}>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Section 6: Why Choose Us */}
                    <section className={styles.technicalSection} style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
                        <div className={styles.container}>
                            <h2 style={{ color: 'var(--gray-900)' }}>Why Choose Us as Your Puf panel manufacturers in Navi Mumbai?</h2>
                            <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--spacing-2xl)', color: 'var(--gray-700)' }}>
                                Selecting the right partner is critical for the long-term performance of your structure. Among all <strong>Puf panel manufacturers in Navi Mumbai</strong>, we offer:
                            </p>

                            <div className={styles.benefitGrid}>
                                <motion.div className={styles.benefitCard}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    style={{ borderLeft: '4px solid var(--accent-500)' }}
                                >
                                    <h3>Coastal-Ready Engineering</h3>
                                    <p>Our panels feature specialized corrosion-resistant coatings (like high-micron PPGL) specifically tested for the 80%+ humidity levels of the Konkan belt.</p>
                                </motion.div>

                                <motion.div className={styles.benefitCard}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    style={{ borderLeft: '4px solid var(--accent-500)' }}
                                >
                                    <h3>Custom Fabrication</h3>
                                    <p>We manufacture panels to exact lengths (up to 12m), which minimizes on-site cutting, reduces waste, and lowers overall project costs.</p>
                                </motion.div>

                                <motion.div className={styles.benefitCard}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    style={{ borderLeft: '4px solid var(--accent-500)' }}
                                >
                                    <h3>Sustainable Performance</h3>
                                    <p>Our panels align with the Maharashtra ECBC 2025 codes, helping buildings reduce HVAC energy loads by up to 60%.</p>
                                </motion.div>

                                <motion.div className={styles.benefitCard}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    style={{ borderLeft: '4px solid var(--accent-500)' }}
                                >
                                    <h3>Regulatory Support</h3>
                                    <p>We help developers qualify for green building incentives from the IGBC and PMC/PMRDA, including FSI incentives and tax concessions.</p>
                                </motion.div>
                            </div>

                            <div style={{ textAlign: 'center', marginTop: 'var(--spacing-3xl)' }}>
                                <Button href="#contact" size="lg">Get Your Custom Quote Now</Button>
                            </div>
                        </div>
                    </section>

                    {/* Section 7: Installation Services */}
                    <section className={styles.introSection}>
                        <div className={styles.twoColumn}>
                            <div className={styles.textBlock}>
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    Installation Services by Puf panel manufacturers in Navi Mumbai
                                </motion.h2>
                                <p style={{ marginBottom: 'var(--spacing-xl)', fontSize: 'var(--text-lg)' }}>
                                    Effective roofing depends entirely on precision installation. As expert <strong>Puf panel manufacturers in Navi Mumbai</strong>, our team follows a rigorous 5-step process:
                                </p>
                                <div className={styles.faqGrid} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)' }}>
                                    {[
                                        { title: 'Site Inspection', desc: 'We evaluate local wind loads and chemical exposure risks in areas like the Sion-Panvel corridor.' },
                                        { title: 'Structural Readiness', desc: 'Ensuring the MS tubular or PEB frame is perfectly aligned to receive the panels.' },
                                        { title: 'Sealed Jointing', desc: 'Utilizing specialized interlocking systems and moisture-lock vapor barriers to prevent the common Navi Mumbai pain point of joint leakage.' },
                                        { title: 'Logistical Precision', desc: 'We manage the strict traffic restrictions for heavy vehicles in Mumbai, timing deliveries during the permitted "noon window" (11 AM to 3 PM) or night shifts (10 PM to 6 AM) to ensure your project stays on schedule.' },
                                        { title: 'Quality Testing', desc: 'Final testing for water-tightness and thermal efficiency.' }
                                    ].map((step, index) => (
                                        <motion.div
                                            className={styles.faqItem}
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <h4 style={{ color: 'var(--accent-600)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <span style={{ background: 'var(--accent-100)', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>{index + 1}</span>
                                                {step.title}
                                            </h4>
                                            <p style={{ margin: 0 }}>{step.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            <motion.div
                                className={styles.imageBlock}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                style={{ height: 'auto', minHeight: 'auto', maxHeight: '500px', alignSelf: 'center' }}
                            >
                                <img src={imgInstall} alt="Professional Installation Team" loading="lazy" decoding="async" />
                            </motion.div>
                        </div>
                    </section>

                    {/* Section 8: Cost of PUF Panels */}
                    <section className={styles.technicalSection}>
                        <div className={styles.container}>
                            <h2>Cost from Puf panel manufacturers in Navi Mumbai</h2>
                            <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--spacing-2xl)', opacity: 0.9 }}>
                                Pricing is influenced by steel grades, insulation thickness, and scale. As transparent <strong>Puf panel manufacturers in Navi Mumbai</strong>, we offer competitive rates:
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <h3 style={{ color: 'var(--accent-400)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Standard Roofing</h3>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1rem' }}>30mm - 40mm</div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>₹900 - ₹1,300</div>
                                    <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>per sq. meter</div>
                                </div>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <h3 style={{ color: 'var(--accent-400)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Premium Wall Panels</h3>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1rem' }}>Insulated</div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>₹119 - ₹149</div>
                                    <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>per sq. foot</div>
                                </div>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <h3 style={{ color: 'var(--accent-400)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Cold Storage Specs</h3>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1rem' }}>80mm - 100mm</div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>₹1,200 - ₹1,600</div>
                                    <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>per sq. meter</div>
                                </div>
                            </div>

                            <p style={{ textAlign: 'center', fontSize: '0.9rem', opacity: 0.7, fontStyle: 'italic' }}>
                                Note: Prices are subject to GST and raw material fluctuations. We offer competitive bulk pricing for large-scale warehouses and industrial sheds.
                            </p>
                        </div>
                    </section>

                    {/* Section 9: Recent Projects */}
                    <section className={styles.introSection}>
                        <div className={styles.twoColumn}>
                            <div className={styles.textBlock}>
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    Recent Projects by Puf panel manufacturers in Navi Mumbai
                                </motion.h2>
                                <p style={{ marginBottom: 'var(--spacing-xl)', fontSize: 'var(--text-lg)' }}>
                                    Our portfolio demonstrates our ability to deliver results across various sectors, solidifying our status as top <strong>Puf panel manufacturers in Navi Mumbai</strong>:
                                </p>
                                <div style={{ marginTop: 'var(--spacing-lg)' }}>
                                    <Button href="/projects" size="lg">View Our Work</Button>
                                </div>
                            </div>
                            <motion.div
                                className={styles.imageBlock}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <img src={imgProjects} alt="Recent Projects Collage" loading="lazy" decoding="async" />
                            </motion.div>
                        </div>

                        <div className={styles.benefitGrid}>
                            {[
                                { title: 'Chemical Manufacturing Unit', loc: 'Taloja MIDC', desc: 'Corrosion-resistant roofing for a 20,000 sq. ft. engineering plant.' },
                                { title: 'Food Processing Cold Room', loc: 'Vashi APMC', desc: '120mm thick PUF panels for a temperature-controlled vegetable storage facility.' },
                                { title: 'Corporate Back-Office Facade', loc: 'Airoli Mindspace', desc: 'Aesthetic, sound-dampening wall cladding for a leading IT firm.' },
                                { title: 'Logistics Park', loc: 'Panvel', desc: 'Rapid-erection roofing for a large-scale e-commerce fulfillment center.' }
                            ].map((proj, index) => (
                                <motion.div className={styles.benefitCard}
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-600)', marginBottom: '0.5rem', fontWeight: '600' }}>{proj.loc}</div>
                                    <h3>{proj.title}</h3>
                                    <p>{proj.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Section 10: FAQs */}
                    <section className={styles.technicalSection} style={{ background: 'var(--white)', color: 'var(--text-primary)' }}>
                        <div className={styles.container}>
                            <h2 style={{ color: 'var(--gray-900)', textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                                FAQs – Puf panel manufacturers in Navi Mumbai
                            </h2>
                            <div className={styles.faqGrid}>
                                {[
                                    {
                                        q: 'Are PUF panels suitable for the heavy Navi Mumbai monsoons?',
                                        a: 'Yes. As experienced Puf panel manufacturers in Navi Mumbai, we design panels with factory-sealed joints and corrugated profiles that shed 3,000mm+ of rainfall efficiently.'
                                    },
                                    {
                                        q: 'Can these panels resist salt air corrosion near JNPT?',
                                        a: 'Absolutely. We use PVDF and specialized polyester coatings that are specifically designed to resist the electrochemical reactions caused by salt spray.'
                                    },
                                    {
                                        q: 'How long do these roofing systems last?',
                                        a: 'With professional installation, our PUF panels have a lifespan of 25 to 30 years with minimal maintenance, far exceeding the 10-15 year life of traditional metal sheets.'
                                    },
                                    {
                                        q: 'Do you provide on-site installation support?',
                                        a: 'Yes, typical of leading Puf panel manufacturers in Navi Mumbai, we provide full technical guidance and have expert teams for end-to-end installation.'
                                    }
                                ].map((item, index) => (
                                    <div key={index} className={styles.faqItem} style={{ background: 'var(--bg-light)', border: '1px solid var(--gray-200)' }}>
                                        <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-600)', marginBottom: '0.5rem' }}>{item.q}</h3>
                                        <p style={{ color: 'var(--gray-700)' }}>{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
};

export default PUFPanelNaviMumbai;
