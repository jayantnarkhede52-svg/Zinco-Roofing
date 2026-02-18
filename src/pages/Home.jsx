import Hero from '../components/home/Hero';
import ServicesShowcase from '../components/home/ServicesShowcase';
import TrustSection from '../components/home/TrustSection';
import MaterialComparison from '../components/home/MaterialComparison';
import InteractiveRoofFinder from '../components/home/InteractiveRoofFinder';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <Hero />
            <ServicesShowcase />
            <TrustSection />
            <MaterialComparison />
            <InteractiveRoofFinder />
        </div>
    );
};

export default Home;
