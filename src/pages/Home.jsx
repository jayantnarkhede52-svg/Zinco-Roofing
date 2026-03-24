import { Link } from 'react-router-dom';
import SEO from '../components/shared/SEO';
import Hero from '../components/home/Hero';
import ProductsMarquee from '../components/home/ProductsMarquee';
import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
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

    // FAQ Schema as a separate object to pass to SEO or merge
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
            <SEO
                title="Roofing Contractor in Navi Mumbai | Zinco Roofing Solutions"
                description="Trusted roofing contractor in Navi Mumbai. Zinco Roofing provides industrial roofing, roof leak repair, and structural services with free site visits."
                keywords="roofing contractor in navi mumbai, roof leak repair, repair roof cracks, roof crack repair, industrial roofing navi mumbai, roofing sheets suppliers mumbai"
                canonicalUrl="https://www.zincoroof.com/"
                schema={combinedSchema}
            />
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
                            <h2>Specialized industrial Services</h2>
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
                
                {/* Dedicated SEO Section to ensure Keyword Density (~1.5%) */}
                <section className={styles.seoContentSection}>
                    <div className={styles.container}>
                        <h2>Zinco Roofing: Your Trusted Roofing Contractor in Navi Mumbai</h2>
                        <p>
                            Finding a reliable <strong>Roofing Contractor in Navi Mumbai</strong> is crucial for any industrial project. At Zinco Roofing, we pride ourselves on being the most professional <strong>Roofing Contractor in Navi Mumbai</strong>, delivering top-tier structural solutions for factories, warehouses, and commercial sheds. As an experienced <strong>Roofing Contractor in Navi Mumbai</strong>, we handle everything from site assessment to final commissioning.
                        </p>
                        <p>
                            Our legacy as a <strong>Roofing Contractor in Navi Mumbai</strong> spans over 8 years of successful project executions. We don't just act as a <strong>Roofing Contractor in Navi Mumbai</strong>; we partner with you to ensure your structure's longevity. Whether you need insulation, <strong>roof leak repair</strong>, or heavy-duty metal roofing, our team as a <strong>Roofing Contractor in Navi Mumbai</strong> is ready to assist. If you need to <strong>repair roof cracks</strong> or require professional <strong>roof crack repair</strong>, Zinco is your first choice.
                        </p>
                        <p>
                            Choosing Zinco as your <strong>Roofing Contractor in Navi Mumbai</strong> means choosing quality, safety, and efficiency. We are the <strong>Roofing Contractor in Navi Mumbai</strong> that industry leaders trust for high-performance roofing systems and expert <strong>roof leak repair</strong> services. Contact us today to learn why we are the preferred <strong>Roofing Contractor in Navi Mumbai</strong> for all industrial roofing needs.
                        </p>
                    </div>
                </section>
            </Suspense>
        </div>
    );
};

export default Home;
