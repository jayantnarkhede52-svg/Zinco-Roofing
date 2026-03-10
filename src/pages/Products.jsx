import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { FaArrowLeft, FaIndustry, FaTemperatureHigh, FaLayerGroup, FaTools, FaSolarPanel, FaPaintRoller, FaShieldAlt } from 'react-icons/fa';
import SEO from '../components/shared/SEO';
import heroImage from '../assets/products-hero.webp';
import Card from '../components/shared/Card';
import styles from './Products.module.css';

// Import featured images for category cards
import metalFeatured from '../assets/Metal roofing images/Metal roofing images/coloured-roofing-sheet-500x500-1.webp';
import pufFeatured from '../assets/Puf panel images/Puf panel images/1001155532.webp';
import polyFeatured from '../assets/Transparent polycarbonate/Transparent polycarbonate/1000014018.webp';
import deckFeatured from '../assets/Dect sheet/Dect sheet/1000014053.webp';

const Products = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const activeCategory = searchParams.get('category');

    // Helper to set category (preserves history stack behavior options if needed, but default push is fine)
    const handleCategorySelect = (group) => {
        if (group.directPath) {
            navigate(group.directPath);
        } else {
            setSearchParams({ category: group.title });
        }
    };

    const handleBackToCategories = () => {
        setSearchParams({});
    };

    const productGroups = [
        // ...
        {
            title: 'Metal Sheet Solutions',
            icon: <FaIndustry />,
            image: metalFeatured,
            description: 'Premium colour coated, decking, and metal roofing profiles.',
            items: [
                // ...
                {
                    id: 'colour-coated-sheet',
                    title: 'Colour Coated Sheet',
                    description: 'Premium trapezoidal and corrugated profiles for aesthetic and durable roofing.',
                    icon: '🏠',
                    path: '/products/roofing-metal-sheets'
                },
                {
                    id: 'decking-sheet',
                    title: 'Decking Sheet',
                    description: 'Structural metal decking sheets for floor and roof deck applications.',
                    icon: '📐',
                    image: deckFeatured,
                    path: '/products/decking-sheet'
                },
                {
                    id: 'shingles',
                    title: 'Shingles',
                    description: 'High-end architectural shingles for superior aesthetics and weather protection.',
                    icon: '🧱',
                    path: '/products/shingles'
                },
                {
                    id: 'metal-tile-sheet',
                    title: 'Metal Tile Sheet',
                    description: 'Lightweight and durable metal roofing with the classic look of clay tiles.',
                    icon: '🏘️',
                    path: '/products/metal-tile-sheet'
                },
                {
                    id: 'high-roof-seam',
                    title: 'High Roof Seam',
                    description: 'Standing seam roofing systems for maximum leak protection and durability.',
                    icon: '🛡️',
                    path: '/products/high-roof-seam'
                }
            ]
        },
        {
            title: 'Insulation Sheet Solutions',
            icon: <FaTemperatureHigh />,
            image: pufFeatured,
            description: 'Advanced thermal and acoustic insulation panels for efficiency.',
            items: [
                {
                    id: 'puf-roof-panel',
                    title: 'PUF Roof Panel',
                    description: 'Pre-insulated sandwich panels with high-density PUF core for thermal efficiency.',
                    icon: '🏗️',
                    path: '/products/insulated-sheets'
                },
                {
                    id: 'rockwool-glasswool',
                    title: 'Rockwool & Glasswool Roof Panel',
                    description: 'Fire-resistant and sound-absorbing panels with mineral wool insulation.',
                    icon: '🔥',
                    path: '/products/rockwool-glasswool'
                },
                {
                    id: 'aerolam-sheet',
                    title: 'Aerolam Sheet',
                    description: 'Innovative thermal insulation sheets for moisture and heat control.',
                    icon: '✨',
                    path: '/products/aerolam-sheet'
                }
            ]
        },
        {
            title: 'UPVC & Polycarbonate Solutions',
            icon: <FaLayerGroup />,
            image: polyFeatured,
            description: 'Durable, transparent, and chemical-resistant roofing sheets.',
            items: [
                {
                    id: 'pvc-tile-sheet',
                    title: 'PVC Tile Sheet',
                    description: 'Elegant and lightweight roofing with the look of traditional tiles and PVC durability.',
                    icon: '🏮',
                    path: '/products/pvc-tile-sheet'
                },
                {
                    id: 'polycarbonate-sheets',
                    title: 'Polycarbonate Sheets',
                    description: 'High-impact resistant and transparent sheets for natural lighting solutions.',
                    icon: '💎',
                    image: polyFeatured,
                    path: '/products/polycarbonate-sheets'
                },
                {
                    id: 'multiwall-sheets',
                    title: 'Multiwall Sheets',
                    description: 'Advanced multi-layered polycarbonate for superior thermal insulation and strength.',
                    icon: '🔋',
                    path: '/products/multiwall-sheets'
                },
                {
                    id: 'upvc-high-rib-sheets',
                    title: 'UPVC High-Rib Sheets',
                    description: 'Tough and corrosion-resistant high-profile sheets for industrial applications.',
                    icon: '📈',
                    path: '/products/upvc-high-rib-sheets'
                },
                {
                    id: 'synthetic-roof',
                    title: 'Synthetic Roof',
                    description: 'Modern synthetic materials providing natural aesthetic and long-term protection.',
                    icon: '🌴',
                    path: '/products/synthetic-roof'
                },
                {
                    id: 'upvc-sheets',
                    title: 'UPVC Sheets',
                    description: 'Versatile, chemical-resistant, and weatherproof roofing for diverse projects.',
                    icon: '🛡️',
                    path: '/products/upvc-sheets'
                }
            ]
        },
        {
            title: 'Industrial / Structural Painting',
            icon: <FaPaintRoller />,
            description: 'Professional industrial and structural painting services for protection.',
            directPath: '/products/structural-painting'
        },
        {
            title: 'Solar Panel Installation',
            icon: <FaSolarPanel />,
            description: 'Expert solar panel mounting and installation for industrial roofs.',
            directPath: '/products/solar-installation'
        },
        {
            title: 'Additional Building Solutions',
            icon: <FaTools />,
            description: 'Essential accessories, ventilation, and structural components.',
            items: [
                {
                    id: 'roofing-accessories',
                    title: 'Roofing Accessories',
                    description: 'Ridge caps, gutters, fasteners, and more complete roofing parts.',
                    icon: '🔧',
                    path: '/products/roofing-accessories'
                },
                {
                    id: 'purlins',
                    title: 'Purlins',
                    description: 'Structural support components for buildings and sheds.',
                    icon: '⚙️',
                    path: '/products/purlins'
                },
                {
                    id: 'ventilators',
                    title: 'Ventilators',
                    description: 'Turbo and ridge ventilators for natural airflow.',
                    icon: '💨',
                    path: '/products/ventilators'
                },
                {
                    id: 'peb-fabrication',
                    title: 'PEB Solutions',
                    description: 'Complete pre-engineered building structures and designs.',
                    icon: '🏭',
                    path: '/products/peb-fabrication'
                }
            ]
        }
    ];

    const currentGroup = productGroups.find(g => g.title === activeCategory);

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
        <div className={styles.productsPage}>
            <SEO
                title="Premium Roofing Sheets in Navi Mumbai | Zinco Roofing"
                description="Discover high-quality Premium Roofing Sheets in Navi Mumbai. Zinco Roofing Solutions offers durable, weather-resistant metal, UPVC, and polycarbonate sheets."
                keywords="Premium Roofing Sheets in Navi Mumbai, metal roofing sheets, UPVC roofing, polycarbonate sheets, industrial roofing solutions"
            />

            {/* Hero Section */}
            <section className={styles.hero} style={{ '--hero-image': `url(${heroImage})` }} fetchpriority="high">
                <div className={styles.heroOverlay} />
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <motion.span className={styles.sublabel} variants={itemVariants}>
                            PRECISION & DURABILITY
                        </motion.span>
                        <motion.h1 variants={itemVariants}>
                            Premium Roofing Sheets in Navi Mumbai
                        </motion.h1>
                        <motion.p className={styles.heroDesc} variants={itemVariants}>
                            Explore our comprehensive range of roofing and building solutions,
                            engineered for the most demanding industrial environments.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            <div className={styles.container}>
                <div className={styles.content}>
                    <AnimatePresence mode="wait">
                        {!activeCategory ? (
                            <motion.div
                                key="categories"
                                className={styles.categorySelectionGrid}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {productGroups.map((group, index) => (
                                    <div
                                        key={group.title}
                                        onClick={() => handleCategorySelect(group)}
                                        className={styles.categorySelectionCardWrapper}
                                    >
                                        <Card variant="glass" className={`${styles.categorySelectionCard} ${group.image ? styles.hasImage : ''}`}>
                                            {group.image && (
                                                <div className={styles.cardImageContainer}>
                                                    <img src={group.image}
                                                        alt={group.title}
                                                        className={styles.cardImage}
                                                        loading="lazy"
                                                        decoding="async"
                                                    />
                                                </div>
                                            )}
                                            <div className={styles.cardContent}>
                                                <div className={styles.selectionIcon}>{group.icon}</div>
                                                <h2 className={styles.selectionTitle}>{group.title}</h2>
                                                <p className={styles.selectionDesc}>{group.description}</p>
                                                <div className={styles.exploreLink}>
                                                    Explore Category <span>→</span>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="products"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }} // Changed exit to slide out same way
                                transition={{ duration: 0.3 }}
                            >
                                <div className={styles.activeHeader}>
                                    <button
                                        onClick={handleBackToCategories}
                                        className={styles.backButton}
                                    >
                                        <FaArrowLeft /> Back to Categories
                                    </button>
                                    <h2>{currentGroup.title}</h2>
                                </div>
                                <div className={styles.categoriesGrid}>
                                    {currentGroup.items.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                        >
                                            <Link to={item.path} className={styles.categoryLink}>
                                                <Card variant="glass" className={styles.categoryCard}>
                                                    <div className={styles.categoryIcon}>{item.icon}</div>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.description}</p>
                                                    <div className={styles.viewMore}>
                                                        View Details <span>→</span>
                                                    </div>
                                                </Card>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <section className={styles.seoSection}>
                        <div className={styles.seoHeader}>
                            <h2>The Zinco Advantage in Navi Mumbai</h2>
                            <p className={styles.leadText}>
                                Engineering high-performance roofing solutions tailored for Mumbai's demanding industrial corridors.
                            </p>
                        </div>

                        <div className={styles.seoGrid}>
                            <Card variant="glass" className={styles.seoCard}>
                                <FaShieldAlt className={styles.benefitIcon} />
                                <h3>Coastal Resilience</h3>
                                <p>Our <strong>Premium Roofing Sheets in Navi Mumbai</strong> are specifically engineered to resist high humidity and salt-air corrosion typical of the coastline.</p>
                            </Card>
                            <Card variant="glass" className={styles.seoCard}>
                                <FaTemperatureHigh className={styles.benefitIcon} />
                                <h3>Thermal Efficiency</h3>
                                <p>Advanced PUF and insulated solutions designed to reduce energy costs by up to 40% in extreme Maharashtra summers.</p>
                            </Card>
                            <Card variant="glass" className={styles.seoCard}>
                                <FaTools className={styles.benefitIcon} />
                                <h3>Custom Engineering</h3>
                                <p>From factory-cranked profiles to on-site fabrication for large-scale warehouses in Taloja and Panvel.</p>
                            </Card>
                        </div>

                        <div className={styles.seoArticle}>
                            <div className={styles.highlightCardWrapper}>
                                <Card variant="solid" className={styles.highlightCard}>
                                    <h3>Regional Expertise</h3>
                                    <p>
                                        Zinco Roofing has built a reputation for excellence by delivering <strong>Premium Roofing Sheets in Navi Mumbai</strong> for diverse projects, from large-scale industrial warehouses to modern commercial complexes.
                                    </p>
                                    <div className={styles.keywordBadge}>Trusted in Taloja, Panvel & Rabale</div>
                                </Card>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div >
    );
};

export default Products;
