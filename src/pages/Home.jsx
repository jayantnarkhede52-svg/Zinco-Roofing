import SEO from '../components/shared/SEO';
import Hero from '../components/home/Hero';
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

const Home = () => {
    return (
        <div className={styles.home}>
            <SEO
                title="Roofing Contractor in Navi Mumbai | Zinco Roofing Solutions"
                description="Trusted roofing contractor in Navi Mumbai. Zinco Roofing provides industrial roofing, ventilators, and repair services with free site visits."
                keywords="roofing contractor in navi mumbai, industrial roofing navi mumbai, roofing sheets suppliers mumbai, puf panel manufacturer near me"
                canonicalUrl="https://zincoroof.com/"
            />
            <Hero />
            <Suspense fallback={null}>
                <div className={styles.belowFold}>
                    <ServicesShowcase />
                </div>
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
                
                {/* Dedicated SEO Section to ensure Keyword Density (~1.5%) */}
                <section className={styles.seoContentSection}>
                    <div className={styles.container}>
                        <h2>Zinco Roofing: Your Trusted Roofing Contractor in Navi Mumbai</h2>
                        <p>
                            Finding a reliable <strong>Roofing Contractor in Navi Mumbai</strong> is crucial for any industrial project. At Zinco Roofing, we pride ourselves on being the most professional <strong>Roofing Contractor in Navi Mumbai</strong>, delivering top-tier structural solutions for factories, warehouses, and commercial sheds. As an experienced <strong>Roofing Contractor in Navi Mumbai</strong>, we handle everything from site assessment to final commissioning.
                        </p>
                        <p>
                            Our legacy as a <strong>Roofing Contractor in Navi Mumbai</strong> spans over 8 years of successful project executions. We don't just act as a <strong>Roofing Contractor in Navi Mumbai</strong>; we partner with you to ensure your structure's longevity. Whether you need insulation or heavy-duty metal roofing, our team as a <strong>Roofing Contractor in Navi Mumbai</strong> is ready to assist.
                        </p>
                        <p>
                            Choosing Zinco as your <strong>Roofing Contractor in Navi Mumbai</strong> means choosing quality, safety, and efficiency. We are the <strong>Roofing Contractor in Navi Mumbai</strong> that industry leaders trust for high-performance roofing systems. Contact us today to learn why we are the preferred <strong>Roofing Contractor in Navi Mumbai</strong> for all industrial roofing needs.
                        </p>
                    </div>
                </section>
            </Suspense>
        </div>
    );
};

export default Home;
