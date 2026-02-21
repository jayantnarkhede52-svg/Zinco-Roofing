// Link import removed as it is unused
import SEO from '../components/shared/SEO';
import Hero from '../components/home/Hero';
import ServicesShowcase from '../components/home/ServicesShowcase';
import TrustSection from '../components/home/TrustSection';
import MaterialComparison from '../components/home/MaterialComparison';
import InteractiveRoofFinder from '../components/home/InteractiveRoofFinder';
import QuoteForm from '../components/home/QuoteForm';
import FAQ from '../components/home/FAQ';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <SEO
                title="Roofing Contractor in Navi Mumbai | Zinco Roofing Solutions"
                description="Looking for a trusted roofing contractor in Navi Mumbai? Zinco Roofing Solutions provides industrial roofing, roof ventilators, sheet installation & repair services with free site visit."
                keywords="roofing contractor in navi mumbai, industrial roofing navi mumbai, roofing sheets suppliers mumbai, zinco roofing"
            />
            <Hero />
            <ServicesShowcase />
            <TrustSection />
            <MaterialComparison />
            <InteractiveRoofFinder />
            <QuoteForm />
            <FAQ />
        </div>
    );
};

export default Home;
