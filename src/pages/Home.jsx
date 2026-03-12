// Link import removed as it is unused
import SEO from '../components/shared/SEO';
import Hero from '../components/home/Hero';
import { lazy, Suspense } from 'react';
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
                description="Looking for a trusted roofing contractor in Navi Mumbai? Zinco Roofing Solutions provides industrial roofing, roof ventilators, sheet installation & repair services with free site visit."
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
            </Suspense>
        </div>
    );
};

export default Home;
