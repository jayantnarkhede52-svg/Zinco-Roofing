import { Link } from 'react-router-dom';
import SEO from '../components/shared/SEO';
import Hero from '../components/home/Hero';
import ProductsMarquee from '../components/home/ProductsMarquee';
import { lazy, Suspense } from 'react';
import styles from './Home.module.css';

// Lazy-load below-fold sections — they won't block FCP/LCP
const ServicesShowcase = lazy(() => import('../components/home/ServicesShowcase'));
const TrustSection = lazy(() => import('../components/home/TrustSection'));
const MaterialComparison = lazy(() => import('../components/home/MaterialComparison'));
const InteractiveRoofFinder = lazy(() => import('../components/home/InteractiveRoofFinder'));
const QuoteForm = lazy(() => import('../components/home/QuoteForm'));
const FAQ = lazy(() => import('../components/home/FAQ'));
const Testimonials = lazy(() => import('../components/home/Testimonials'));
const IndustrialInsights = lazy(() => import('../components/home/IndustrialInsights'));

const Home = () => {
    const homeSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Zinco Roofing Solution",
        "image": "https://www.zincoroof.com/logo.webp",
        "telePhone": "+919967203090",
        "url": "https://www.zincoroof.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop Number 22, Elite Complex Lodha Heaven, Kalyan - Shilphata Rd",
            "addressLocality": "Dombivli",
            "addressRegion": "Maharashtra",
            "postalCode": "421204",
            "addressCountry": "IN"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "158"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Roofing Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Industrial Roofing"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Roof Leak Repair"
                    }
                }
            ]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How long does a typical industrial roof installation take?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For a standard 10,000 sq. ft. industrial shed, installation typically takes 7-10 working days."
                }
            },
            {
                "@type": "Question",
                "name": "Are your roofing solutions 100% leak-proof?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we use professional-grade sealants and expert fabrication techniques to ensure every joint is perfectly waterproofed."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer roof leak repair and crack sealing services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in roof leak repair and can effectively repair roof cracks using advanced industrial sealants."
                }
            }
        ]
    };

    // Combine for SEO
    const combinedSchema = {
        "@context": "https://schema.org",
        "@graph": [homeSchema, faqSchema]
    };

    return (
        <div className={styles.home}>
            <SEO schema={combinedSchema} />
            <Hero />
            <ProductsMarquee />
            <Suspense fallback={null}>
                <div className={styles.belowFold}>
                    <ServicesShowcase />
                </div>
                
                <section className={styles.urgentServicesSection}>
                    <div className={styles.container}>
                        <div className={styles.urgentHeader}>
                            <span>EXPERT ROOFING SOLUTIONS</span>
                            <h2>Specialized Industrial Services</h2>
                        </div>
                        <div className={styles.urgentGrid}>
                            <Link to="/services/industrial-roof-leak-repair" className={styles.urgentCard}>
                                <h3>Roof Leak Repair</h3>
                                <p>Stop leaks and seal cracks instantly.</p>
                                <span className={styles.more}>Fixed Price Quote →</span>
                            </Link>
                            <Link to="/services/peb-structure-fabrication" className={styles.urgentCard}>
                                <h3>PEB Fabrication</h3>
                                <p>Modern pre-engineered steel buildings.</p>
                                <span className={styles.more}>View Expertise →</span>
                            </Link>
                            <Link to="/services/warehouse-roofing-solutions" className={styles.urgentCard}>
                                <h3>Warehouse Roofing</h3>
                                <p>Large span logistics roof specialists.</p>
                                <span className={styles.more}>Get Proposal →</span>
                            </Link>
                        </div>
                    </div>
                </section>
                <div className={styles.belowFold}>
                    <TrustSection />
                </div>
                <div className={styles.belowFold}>
                    <MaterialComparison />
                </div>
                <div className={styles.belowFold}>
                    <InteractiveRoofFinder />
                </div>
                <div className={styles.belowFold}>
                    <QuoteForm />
                </div>
                <div className={styles.belowFold}>
                    <FAQ />
                </div>
                <div className={styles.belowFold}>
                    <Testimonials />
                </div>
                <div className={styles.belowFold}>
                    <IndustrialInsights />
                </div>
                
                {/* Compact SEO Density Grid (Hits 1.5% naturally) */}
                <section className={styles.seoMinimal}>
                    <div className={styles.container}>
                        <div className={styles.seoGridMinimal}>
                            <div className={styles.seoItem}>
                                <h4>Expert Industrial Roofing</h4>
                                <p>As a leading <strong>Roofing Contractor in Navi Mumbai</strong>, we deliver precision industrial sheds, PEB fabrication, and rapid roof leak repairs.</p>
                            </div>
                            <div className={styles.seoItem}>
                                <h4>Certified Engineers</h4>
                                <p>Our structural engineers are recognized as top-tier consultants for reliable warehouse design, factory installations, and heavy load roofing.</p>
                            </div>
                            <div className={styles.seoItem}>
                                <h4>Comprehensive Services</h4>
                                <p>Choose our professional installation teams for long-lasting weather protection, thermal insulation systems, and industrial structural painting.</p>
                            </div>
                            <div className={styles.seoItem}>
                                <h4>Trusted Across Maharashtra</h4>
                                <p>We've spent 8+ years building steadfast trust as dedicated structural contractors across all major Mumbai, Panvel, and Thane industrial corridors.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Suspense>
        </div>
    );
};

export default Home;
