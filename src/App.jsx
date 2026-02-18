import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

// Product Category Pages
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

import ScrollToTop from './components/shared/ScrollToTop';
import Chatbot from './components/shared/Chatbot';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main style={{ marginTop: '80px' }}>
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

            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
