// Link import removed as it is unused
import SEO from '../components/shared/SEO';
import Hero from '../components/home/Hero';
import ServicesShowcase from '../components/home/ServicesShowcase';
import TrustSection from '../components/home/TrustSection';
import MaterialComparison from '../components/home/MaterialComparison';
import InteractiveRoofFinder from '../components/home/InteractiveRoofFinder';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <SEO
                title="Roofing Contractors in Navi Mumbai & Mumbai"
                description="Leading roofing contractors in Navi Mumbai providing industrial roofing, PUF panels, and waterproofing solutions. Quality service with 10+ years experience."
                keywords="roofing contractors navi mumbai, industrial roofing mumbai, roofing sheets suppliers, zinco roofing"
            />
            <Hero />
            <ServicesShowcase />
            <TrustSection />
            <MaterialComparison />
            <InteractiveRoofFinder />
        </div>
    );
};

export default Home;
