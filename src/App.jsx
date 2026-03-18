import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/shared/ScrollToTop';
import './styles/animations.css';

// Eagerly load all pages for pre-rendering stability (Helmet needs eager imports to inject page-specific meta tags)
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Product categories
import RoofingMetalSheets from './pages/products/RoofingMetalSheets';
import InsulatedSheets from './pages/products/InsulatedSheets';
import RoofingAccessories from './pages/products/RoofingAccessories';
import PVCUPVCSheets from './pages/products/PVCUPVCSheets';
import Purlins from './pages/products/Purlins';
import PolycarbonateSheets from './pages/products/PolycarbonateSheets';
import Ventilators from './pages/products/Ventilators';
import PEBFabrication from './pages/products/PEBFabrication';
import DeckingSheet from './pages/products/DeckingSheet';
import Shingles from './pages/products/Shingles';
import MetalTileSheet from './pages/products/MetalTileSheet';
import RockwoolGlasswool from './pages/products/RockwoolGlasswool';
import HighRoofSeam from './pages/products/HighRoofSeam';
import AerolamSheet from './pages/products/AerolamSheet';
import PVCTileSheet from './pages/products/PVCTileSheet';
import MultiwallSheets from './pages/products/MultiwallSheets';
import UPVCHighRibSheets from './pages/products/UPVCHighRibSheets';
import SyntheticRoof from './pages/products/SyntheticRoof';
import UPVCSheets from './pages/products/UPVCSheets';
import StructuralPainting from './pages/products/StructuralPainting';
import SolarInstallation from './pages/products/SolarInstallation';

// Location SEO Pages
import WaterproofingNaviMumbai from './pages/locations/WaterproofingNaviMumbai';
import MumbaiRoofing from './pages/locations/MumbaiRoofing';
import PanvelRoofing from './pages/locations/PanvelRoofing';
import ThaneRoofing from './pages/locations/ThaneRoofing';
import TalojaRoofing from './pages/locations/TalojaRoofing';
import AmbarnathRoofing from './pages/locations/AmbarnathRoofing';
import NaviMumbaiRoofing from './pages/locations/NaviMumbaiRoofing';
import DombivliRoofing from './pages/locations/DombivliRoofing';
import PUFPanelNaviMumbai from './pages/locations/PUFPanelNaviMumbai';
import LonavlaRoofing from './pages/locations/LonavlaRoofing';
import ChakanRoofing from './pages/locations/ChakanRoofing';
import ChakanPainting from './pages/locations/ChakanPainting';
import Areas from './pages/Areas';
import RoofingCostCalculator from './pages/RoofingCostCalculator';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';

// New Service Landing Pages
import RoofLeakRepairService from './pages/services/RoofLeakRepair';
import PEBFabricationService from './pages/services/PEBFabrication';
import WarehouseRoofingService from './pages/services/WarehouseRoofing';
import MetalRoofInstallationService from './pages/services/MetalRoofInstallation';

// Lazy-load Chatbot & WhatsApp (non-critical floating UI)
const Chatbot = lazy(() => import('./components/shared/Chatbot'));
const WhatsAppButton = lazy(() => import('./components/shared/WhatsAppButton'));
const BackButton = lazy(() => import('./components/shared/BackButton'));
const Breadcrumbs = lazy(() => import('./components/shared/Breadcrumbs'));

// Loading component
const PageLoader = () => (
  <div style={{
    height: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--accent-500)',
    fontSize: 'var(--text-xl)',
    fontWeight: '600'
  }}>
    <div className="loading-spinner">Loading...</div>
  </div>
);

// Deferred floating UI — loads 3s after mount so it doesn't compete with FCP/LCP
const DeferredFloatingUI = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <Suspense fallback={null}>
      <Chatbot />
      <WhatsAppButton />
    </Suspense>
  );
};

function App() {
  const location = useLocation();

  useEffect(() => {
    // Dispatch event for pre-renderer after a delay to ensure lazy components are ready
    const timer = setTimeout(() => {
      document.dispatchEvent(new Event('render-event'));
    }, 4000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Suspense fallback={null}>
          <BackButton />
        </Suspense>
        <main style={{ marginTop: '80px' }}>
          <Suspense fallback={null}>
            <Breadcrumbs />
          </Suspense>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/industrial-roofing-projects-navi-mumbai" element={<Projects />} />
              <Route path="/industrial-roofing-services-navi-mumbai" element={<Services />} />
              <Route path="/premium-roofing-sheets-navi-mumbai" element={<Products />} />

              {/* Detailed Product Routes */}
              <Route path="/products/roofing-metal-sheets" element={<RoofingMetalSheets />} />
              <Route path="/products/insulated-sheets" element={<InsulatedSheets />} />
              <Route path="/products/roofing-accessories" element={<RoofingAccessories />} />
              <Route path="/products/pvc-upvc-sheets" element={<PVCUPVCSheets />} />
              <Route path="/products/purlins" element={<Purlins />} />
              <Route path="/products/polycarbonate-sheets" element={<PolycarbonateSheets />} />
              <Route path="/products/ventilators" element={<Ventilators />} />
              <Route path="/products/peb-fabrication" element={<PEBFabrication />} />
              <Route path="/products/decking-sheet" element={<DeckingSheet />} />
              <Route path="/products/shingles" element={<Shingles />} />
              <Route path="/products/metal-tile-sheet" element={<MetalTileSheet />} />
              <Route path="/products/rockwool-glasswool" element={<RockwoolGlasswool />} />
              <Route path="/products/high-roof-seam" element={<HighRoofSeam />} />
              <Route path="/products/aerolam-sheet" element={<AerolamSheet />} />
              <Route path="/products/pvc-tile-sheet" element={<PVCTileSheet />} />
              <Route path="/products/multiwall-sheets" element={<MultiwallSheets />} />
              <Route path="/products/upvc-high-rib-sheets" element={<UPVCHighRibSheets />} />
              <Route path="/products/synthetic-roof" element={<SyntheticRoof />} />
              <Route path="/products/upvc-sheets" element={<UPVCSheets />} />
              <Route path="/products/structural-painting" element={<StructuralPainting />} />
              <Route path="/products/solar-installation" element={<SolarInstallation />} />

              {/* Location SEO Routes */}
              <Route path="/waterproofing-in-navi-mumbai" element={<WaterproofingNaviMumbai />} />
              <Route path="/industrial-roofing-contractors-in-mumbai" element={<MumbaiRoofing />} />
              <Route path="/industrial-roofing-contractors-in-panvel" element={<PanvelRoofing />} />
              <Route path="/industrial-roofing-contractors-in-thane" element={<ThaneRoofing />} />
              <Route path="/industrial-roofing-contractors-in-taloja" element={<TalojaRoofing />} />
              <Route path="/industrial-roofing-contractors-in-ambarnath" element={<AmbarnathRoofing />} />
              <Route path="/industrial-roofing-contractors-in-navi-mumbai" element={<NaviMumbaiRoofing />} />
              <Route path="/industrial-roofing-contractors-in-dombivli" element={<DombivliRoofing />} />
              <Route path="/puf-panel-manufacturer-navi-mumbai" element={<PUFPanelNaviMumbai />} />
              <Route path="/industrial-roofing-contractors-in-lonavla" element={<LonavlaRoofing />} />
              <Route path="/industrial-roofing-contractors-in-chakan-pune" element={<ChakanRoofing />} />
              <Route path="/industrial-painting-in-chakan" element={<ChakanPainting />} />
              <Route path="/industrial-roofing-cost-calculator" element={<RoofingCostCalculator />} />
              <Route path="/areas" element={<Areas />} />

              {/* New Service Landing Pages */}
              <Route path="/services/industrial-roof-leak-repair" element={<RoofLeakRepairService />} />
              <Route path="/services/peb-structure-fabrication" element={<PEBFabricationService />} />
              <Route path="/services/warehouse-roofing-solutions" element={<WarehouseRoofingService />} />
              <Route path="/services/metal-roof-installation" element={<MetalRoofInstallationService />} />

              {/* SEO Redirects for shortened URLs */}
              <Route path="/products" element={<Navigate to="/premium-roofing-sheets-navi-mumbai" replace />} />
              <Route path="/services" element={<Navigate to="/industrial-roofing-services-navi-mumbai" replace />} />
              <Route path="/projects" element={<Navigate to="/industrial-roofing-projects-navi-mumbai" replace />} />

              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <DeferredFloatingUI />
      </div>
    </>
  );
}

export default App;
