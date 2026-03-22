import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { FaArrowLeft, FaIndustry, FaTemperatureHigh, FaLayerGroup, FaTools, FaSolarPanel, FaPaintRoller, FaShieldAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/shared/SEO';
import heroImage from '../assets/products-hero.webp';
import Card from '../components/shared/Card';
import styles from './Products.module.css';
import QuoteForm from '../components/home/QuoteForm';

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
        {
            title: 'Metal Sheet Solutions',
            icon: <FaIndustry />,
            image: metalFeatured,
            description: 'Premium colour coated, decking, and metal roofing profiles.',
            relatedService: { label: 'Fixed Price Metal Installation', path: '/services/metal-roof-installation' },
            items: [
                {
                    id: 'colour-coated-sheet',
                    title: 'Colour Coated Sheet',
                    description: 'Premium trapezoidal and corrugated profiles for aesthetic metal roofing installation and durability.',
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
                    description: 'High-end architectural shingles for superior aesthetics, weather protection, and shingle roof repair solutions.',
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
            relatedService: { label: 'Expert PEB & Panel Fabrication', path: '/services/peb-structure-fabrication' },
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
                    description: 'Innovative thermal insulation and waterproofing roof service sheets for moisture and heat control.',
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
            description: 'Professional industrial and structural painting services including terrace waterproofing for long-term protection.',
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
                    description: 'Complete pre-engineered building structures and designs by professional commercial roofing contractors.',
                    image: polyFeatured,
                    path: '/products/peb-fabrication'
                }
            ],
            relatedService: { label: 'Industrial Shed Solutions', path: '/services/warehouse-roofing-solutions' }
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

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Metal Roofing Sheets",
                "url": "https://zincoroof.com/products/roofing-metal-sheets"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "PUF Insulated Panels",
                "url": "https://zincoroof.com/products/insulated-sheets"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Polycarbonate Sheets",
                "url": "https://zincoroof.com/products/polycarbonate-sheets"
            }
        ]
    };

    return (
        <div className={styles.productsPage}>
            <SEO
                title="Premium Roofing Sheets in Navi Mumbai | Zinco Roofing Specialist"
                description="Explore top-quality Premium Roofing Sheets in Navi Mumbai. Zinco Roofing offers durable, weather-resistant Premium Roofing Sheets in Navi Mumbai for industries."
                keywords="Premium Roofing Sheets in Navi Mumbai, metal roofing sheets navi mumbai, premium roofing sheets in navi mumbai, roofing solutions navi mumbai"
                canonicalUrl="https://zincoroof.com/premium-roofing-sheets-navi-mumbai"
                schema={productSchema}
            />
            <Helmet>
                <link rel="preload" as="image" href={heroImage} fetchpriority="high" />
            </Helmet>

            {/* Hero Section */}
            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
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
                            Explore our comprehensive range of <strong>Premium Roofing Sheets in Navi Mumbai</strong>,
                            engineered for the most demanding industrial environments in the region.
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
                                                        alt={`${group.title} - ${group.description}`}
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
                                exit={{ opacity: 0, x: 20 }}
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
                                    {currentGroup.relatedService && (
                                        <Link to={currentGroup.relatedService.path} className={styles.relatedServiceBadge}>
                                            <FaShieldAlt /> {currentGroup.relatedService.label} Available →
                                        </Link>
                                    )}
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
                            <h2>Superior Premium Roofing Sheets in Navi Mumbai</h2>
                            <p className={styles.leadText}>
                                We specialize in <strong>Premium Roofing Sheets in Navi Mumbai</strong>, providing industrial solutions that last for decades.
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
                                <p>Advanced <strong>Premium Roofing Sheets in Navi Mumbai</strong> and insulated solutions designed to reduce energy costs by up to 40% in Navi Mumbai.</p>
                            </Card>
                            <Card variant="glass" className={styles.seoCard}>
                                <FaTools className={styles.benefitIcon} />
                                <h3>Custom Engineering</h3>
                                <p>We offer <strong>Premium Roofing Sheets in Navi Mumbai</strong> with factory-cranked profiles for large-scale warehouses in Taloja and Panvel.</p>
                            </Card>
                        </div>

                        <div className={styles.seoArticle}>
                            <div className={styles.highlightCardWrapper}>
                                <Card variant="solid" className={styles.highlightCard}>
                                    <h3>Regional Expertise in Premium Roofing Sheets in Navi Mumbai</h3>
                                    <p>
                                        Zinco Roofing has built a reputation for excellence by delivering <strong>Premium Roofing Sheets in Navi Mumbai</strong> for diverse projects, from large-scale industrial warehouses to modern commercial complexes. Our <strong>Premium Roofing Sheets in Navi Mumbai</strong> ensure structural integrity.
                                    </p>
                                    <div className={styles.keywordBadge}>Premium Roofing Sheets in Navi Mumbai - Trusted in Taloja, Panvel & Rabale</div>
                                </Card>
                            </div>
                            <p>
                                For those seeking the highest quality <strong>Premium Roofing Sheets in Navi Mumbai</strong>, our selection includes everything from metal to polycarbonate. Every <strong>Premium Roofing Sheets in Navi Mumbai</strong> we provide is tested for durability. Choosing the right <strong>Premium Roofing Sheets in Navi Mumbai</strong> is crucial for facility longevity.
                            </p>
                            <p>
                                Our team ensures that your <strong>Premium Roofing Sheets in Navi Mumbai</strong> are installed with precision. We are the leading <strong>Premium Roofing Sheets in Navi Mumbai</strong> experts, serving all major industrial zones. If you need <strong>Premium Roofing Sheets in Navi Mumbai</strong> for your next project, look no further than Zinco.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <QuoteForm />
        </div>
    );
};

export default Products;
