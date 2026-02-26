import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/shared/ScrollToTop';
import Chatbot from './components/shared/Chatbot';
import './styles/animations.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Services = lazy(() => import('./pages/Services'));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));
const Gallery = lazy(() => import('./pages/Gallery'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
import WhatsAppButton from './components/shared/WhatsAppButton';

// Lazy load product categories
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
const NaviMumbaiRoofing = lazy(() => import('./pages/locations/NaviMumbaiRoofing'));
const MumbaiRoofing = lazy(() => import('./pages/locations/MumbaiRoofing'));
const PanvelRoofing = lazy(() => import('./pages/locations/PanvelRoofing'));
const ThaneRoofing = lazy(() => import('./pages/locations/ThaneRoofing'));
const PUFPanelNaviMumbai = lazy(() => import('./pages/locations/PUFPanelNaviMumbai'));
const Areas = lazy(() => import('./pages/Areas'));

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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main style={{ marginTop: '80px' }}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />

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
              <Route path="/roofing-contractors-navi-mumbai" element={<NaviMumbaiRoofing />} />
              <Route path="/roofing-contractors-mumbai" element={<MumbaiRoofing />} />
              <Route path="/roofing-contractors-panvel" element={<PanvelRoofing />} />
              <Route path="/roofing-contractors-thane" element={<ThaneRoofing />} />
              <Route path="/puf-panel-manufacturer-navi-mumbai" element={<PUFPanelNaviMumbai />} />
              <Route path="/areas" element={<Areas />} />

              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Chatbot />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
