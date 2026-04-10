import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/shared/ScrollToTop';
import { HeroSkeleton } from './components/shared/Skeleton';
import './styles/animations.css';

// Eagerly load all pages for pre-rendering stability
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Services = lazy(() => import('./pages/Services'));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));
const Gallery = lazy(() => import('./pages/Gallery'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

// Product categories
const RoofingMetalSheets = lazy(() => import('./pages/products/RoofingMetalSheets'));
const InsulatedSheets = lazy(() => import('./pages/products/InsulatedSheets'));
const RoofingAccessories = lazy(() => import('./pages/products/RoofingAccessories'));
const PVCUPVCSheets = lazy(() => import('./pages/products/PVCUPVCSheets'));
const Purlins = lazy(() => import('./pages/products/Purlins'));
const PolycarbonateSheets = lazy(() => import('./pages/products/PolycarbonateSheets'));
const Ventilators = lazy(() => import('./pages/products/Ventilators'));
const PEBFabrication = lazy(() => import('./pages/products/PEBFabrication'));
const DeckingSheet = lazy(() => import('./pages/products/DeckingSheet'));
const Shingles = lazy(() => import('./pages/products/Shingles'));
const MetalTileSheet = lazy(() => import('./pages/products/MetalTileSheet'));
const RockwoolGlasswool = lazy(() => import('./pages/products/RockwoolGlasswool'));
const HighRoofSeam = lazy(() => import('./pages/products/HighRoofSeam'));
const AerolamSheet = lazy(() => import('./pages/products/AerolamSheet'));
const PVCTileSheet = lazy(() => import('./pages/products/PVCTileSheet'));
const MultiwallSheets = lazy(() => import('./pages/products/MultiwallSheets'));
const UPVCHighRibSheets = lazy(() => import('./pages/products/UPVCHighRibSheets'));
const SyntheticRoof = lazy(() => import('./pages/products/SyntheticRoof'));
const UPVCSheets = lazy(() => import('./pages/products/UPVCSheets'));
const StructuralPainting = lazy(() => import('./pages/products/StructuralPainting'));
const SolarInstallation = lazy(() => import('./pages/products/SolarInstallation'));

// Location SEO Pages
const WaterproofingNaviMumbai = lazy(() => import('./pages/locations/WaterproofingNaviMumbai'));
const MumbaiRoofing = lazy(() => import('./pages/locations/MumbaiRoofing'));
const PanvelRoofing = lazy(() => import('./pages/locations/PanvelRoofing'));
const ThaneRoofing = lazy(() => import('./pages/locations/ThaneRoofing'));
const TalojaRoofing = lazy(() => import('./pages/locations/TalojaRoofing'));
const AmbarnathRoofing = lazy(() => import('./pages/locations/AmbarnathRoofing'));
const NaviMumbaiRoofing = lazy(() => import('./pages/locations/NaviMumbaiRoofing'));
const DombivliRoofing = lazy(() => import('./pages/locations/DombivliRoofing'));
const PUFPanelNaviMumbai = lazy(() => import('./pages/locations/PUFPanelNaviMumbai'));
const LonavlaRoofing = lazy(() => import('./pages/locations/LonavlaRoofing'));
const ChakanRoofing = lazy(() => import('./pages/locations/ChakanRoofing'));
const ChakanPainting = lazy(() => import('./pages/locations/ChakanPainting'));
const NaviMumbaiIndustrial = lazy(() => import('./pages/locations/NaviMumbaiIndustrial'));
const NaviMumbaiGeneral = lazy(() => import('./pages/locations/NaviMumbaiGeneral'));
const MumbaiIndustrial = lazy(() => import('./pages/locations/MumbaiIndustrial'));
const MumbaiGeneral = lazy(() => import('./pages/locations/MumbaiGeneral'));
const Areas = lazy(() => import('./pages/Areas'));
const RoofingCostCalculator = lazy(() => import('./pages/RoofingCostCalculator'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));

// New Service Landing Pages
const RoofLeakRepairService = lazy(() => import('./pages/services/RoofLeakRepair'));
const PEBFabricationService = lazy(() => import('./pages/services/PEBFabrication'));
const WarehouseRoofingService = lazy(() => import('./pages/services/WarehouseRoofing'));
const MetalRoofInstallationService = lazy(() => import('./pages/services/MetalRoofInstallation'));

// Lazy-load Chatbot & WhatsApp (non-critical floating UI)
const Chatbot = lazy(() => import('./components/shared/Chatbot'));
const WhatsAppButton = lazy(() => import('./components/shared/WhatsAppButton'));
const BackButton = lazy(() => import('./components/shared/BackButton'));
const Breadcrumbs = lazy(() => import('./components/shared/Breadcrumbs'));

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
    // Dispatch event for pre-renderer after a delay
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
          <Suspense fallback={<HeroSkeleton />}>
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
              <Route path="/services/industrial-roofing-navi-mumbai" element={<NaviMumbaiIndustrial />} />
              <Route path="/services/roofing-contractors-navi-mumbai" element={<NaviMumbaiGeneral />} />
              <Route path="/services/industrial-sheds-mumbai" element={<MumbaiIndustrial />} />
              <Route path="/services/roofing-solutions-mumbai" element={<MumbaiGeneral />} />
              <Route path="/industrial-roofing-cost-calculator" element={<RoofingCostCalculator />} />
              <Route path="/areas" element={<Areas />} />

              {/* New Service Landing Pages */}
              <Route path="/services/industrial-roof-leak-repair" element={<RoofLeakRepairService />} />
              <Route path="/services/peb-structure-fabrication" element={<PEBFabricationService />} />
              <Route path="/services/warehouse-roofing-solutions" element={<WarehouseRoofingService />} />
              <Route path="/services/metal-roof-installation" element={<MetalRoofInstallationService />} />

              {/* SEO Redirects */}
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
