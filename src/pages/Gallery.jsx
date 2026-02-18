import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExpandAlt, FaTimes } from 'react-icons/fa';
import styles from './Gallery.module.css';

// Import project images
import heroImg from '../assets/projects-hero.png';

// Dect Sheet images
import dect1 from '../assets/Dect sheet/Dect sheet/1000014048.jpg';
import dect2 from '../assets/Dect sheet/Dect sheet/1000014053.jpg';
import dect3 from '../assets/Dect sheet/Dect sheet/1000014070.png';
import dect4 from '../assets/Dect sheet/Dect sheet/1000014504.png';
import dect5 from '../assets/Dect sheet/Dect sheet/1000014515.jpg';
import dect6 from '../assets/Dect sheet/Dect sheet/1000014558.jpg';
import dect7 from '../assets/Dect sheet/Dect sheet/1000014661.jpg';
import dect8 from '../assets/Dect sheet/Dect sheet/1000014745.jpg';

// PUF Panel images
import puf1 from '../assets/Puf panel images/Puf panel images/1000014168.jpg';
import puf2 from '../assets/Puf panel images/Puf panel images/1000014252.jpg';
import puf3 from '../assets/Puf panel images/Puf panel images/1000014626.jpg';
import puf4 from '../assets/Puf panel images/Puf panel images/1001155530.jpg';
import puf5 from '../assets/Puf panel images/Puf panel images/1001155531.jpg';
import puf6 from '../assets/Puf panel images/Puf panel images/1001155532.jpg';

// Metal Roofing images
import metal1 from '../assets/Metal roofing images/Metal roofing images/1000014010.jpg';
import metal2 from '../assets/Metal roofing images/Metal roofing images/1000014044.jpg';
import metal3 from '../assets/Metal roofing images/Metal roofing images/1000014152.jpg';
import metal4 from '../assets/Metal roofing images/Metal roofing images/1000014335.jpg';
import metal5 from '../assets/Metal roofing images/Metal roofing images/1000014453.png';
import metal6 from '../assets/Metal roofing images/Metal roofing images/1000014465.jpg';
import metal7 from '../assets/Metal roofing images/Metal roofing images/1000014546.jpg';
import metal8 from '../assets/Metal roofing images/Metal roofing images/1000014600.png';
import metal9 from '../assets/Metal roofing images/Metal roofing images/1000014602.png';
import metal10 from '../assets/Metal roofing images/Metal roofing images/1000014712.png';
import metal11 from '../assets/Metal roofing images/Metal roofing images/1000014774.png';
import metal12 from '../assets/Metal roofing images/Metal roofing images/coloured-roofing-sheet-500x500-1.jpg';

// UPVC images
import upvc1 from '../assets/Upvc images/Upvc images/1000014026.jpg';
import upvc2 from '../assets/Upvc images/Upvc images/1000014135.jpg';
import upvc3 from '../assets/Upvc images/Upvc images/1000014156.jpg';
import upvc4 from '../assets/Upvc images/Upvc images/1000014234.jpg';
import upvc5 from '../assets/Upvc images/Upvc images/1000014255.jpg';
import upvc6 from '../assets/Upvc images/Upvc images/1000014270.jpg';
import upvc7 from '../assets/Upvc images/Upvc images/1000014273.jpg';
import upvc8 from '../assets/Upvc images/Upvc images/1000014390.jpg';
import upvc9 from '../assets/Upvc images/Upvc images/1000014394.jpg';
import upvc10 from '../assets/Upvc images/Upvc images/1000014497.jpg';
import upvc11 from '../assets/Upvc images/Upvc images/1000014616.jpg';
import upvc12 from '../assets/Upvc images/Upvc images/1000014665.jpg';

// Polycarbonate images
import poly1 from '../assets/Transparent polycarbonate/Transparent polycarbonate/1000014018.jpg';
import poly2 from '../assets/Transparent polycarbonate/Transparent polycarbonate/1000014352.jpg';
import poly3 from '../assets/Transparent polycarbonate/Transparent polycarbonate/1000014425.jpg';
import poly4 from '../assets/Transparent polycarbonate/Transparent polycarbonate/1000014445.png';

// Multiwall Polycarbonate images
import multi1 from '../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014216.jpg';
import multi2 from '../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014298.jpg';
import multi3 from '../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014339.jpg';
import multi4 from '../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014422.jpg';
import multi5 from '../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014502.png';
import multi6 from '../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014533.jpg';
import multi7 from '../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014579.jpg';
import multi8 from '../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014583.png';
import multi9 from '../assets/Multiwall polycarbonate images/Multiwall polycarbonate images/1000014721.png';

const galleryImages = [
    { id: 1, src: puf1, category: 'PUF Panels', title: 'PUF Panel Installation' },
    { id: 2, src: puf2, category: 'PUF Panels', title: 'Industrial Cold Storage' },
    { id: 3, src: puf3, category: 'PUF Panels', title: 'Roof Insulation System' },
    { id: 4, src: puf4, category: 'PUF Panels', title: 'Insulated Wall Cladding' },
    { id: 5, src: puf5, category: 'PUF Panels', title: 'Factory Roofing' },
    { id: 6, src: puf6, category: 'PUF Panels', title: 'Premium PUF Sheets' },

    { id: 7, src: metal1, category: 'Metal Roofing', title: 'Colored Metal Roof' },
    { id: 8, src: metal2, category: 'Metal Roofing', title: 'Industrial Shed Project' },
    { id: 9, src: metal3, category: 'Metal Roofing', title: 'Corporate Roofing' },
    { id: 10, src: metal4, category: 'Metal Roofing', title: 'Precision Corrugation' },
    { id: 11, src: metal5, category: 'Metal Roofing', title: 'Durable Roofing Solution' },
    { id: 12, src: metal6, category: 'Metal Roofing', title: 'Modern Factory Roof' },
    { id: 13, src: metal7, category: 'Metal Roofing', title: 'Zinc-Coated Sheets' },
    { id: 14, src: metal8, category: 'Metal Roofing', title: 'Commercial Project' },
    { id: 15, src: metal9, category: 'Metal Roofing', title: 'High-Strength Metal' },
    { id: 16, src: metal10, category: 'Metal Roofing', title: 'Custom Roofing Design' },
    { id: 17, src: metal11, category: 'Metal Roofing', title: 'Industrial Installation' },
    { id: 18, src: metal12, category: 'Metal Roofing', title: 'Colored Profile Sheets' },

    { id: 19, src: upvc1, category: 'UPVC Sheets', title: 'UPVC Roofing Project' },
    { id: 20, src: upvc2, category: 'UPVC Sheets', title: 'Anti-Corrosive UPVC' },
    { id: 21, src: upvc3, category: 'UPVC Sheets', title: 'Residential UPVC' },
    { id: 22, src: upvc4, category: 'UPVC Sheets', title: 'UPVC Wall Cladding' },
    { id: 23, src: upvc5, category: 'UPVC Sheets', title: 'Weatherproof Sheets' },
    { id: 24, src: upvc6, category: 'UPVC Sheets', title: 'Insulated UPVC' },
    { id: 25, src: upvc7, category: 'UPVC Sheets', title: 'Premium UPVC Finish' },
    { id: 26, src: upvc8, category: 'UPVC Sheets', title: 'Durable UPVC Roof' },
    { id: 27, src: upvc9, category: 'UPVC Sheets', title: 'Thermal Resistant UPVC' },
    { id: 28, src: upvc10, category: 'UPVC Sheets', title: 'Commercial UPVC' },
    { id: 29, src: upvc11, category: 'UPVC Sheets', title: 'Flexible UPVC Sheets' },
    { id: 30, src: upvc12, category: 'UPVC Sheets', title: 'UPVC Installation' },

    { id: 31, src: dect1, category: 'Decking Sheets', title: 'Structural Decking' },
    { id: 32, src: dect2, category: 'Decking Sheets', title: 'High-Strength Deck' },
    { id: 33, src: dect3, category: 'Decking Sheets', title: 'Decking Sheet Design' },
    { id: 34, src: dect4, category: 'Decking Sheets', title: 'Modern Deck System' },
    { id: 35, src: dect5, category: 'Decking Sheets', title: 'Decking Installation' },
    { id: 36, src: dect6, category: 'Decking Sheets', title: 'Floor Decking' },
    { id: 37, src: dect7, category: 'Decking Sheets', title: 'Corrugated Deck' },
    { id: 38, src: dect8, category: 'Decking Sheets', title: 'Reinforced Decking' },

    { id: 39, src: poly1, category: 'Polycarbonate', title: 'Transparent Roof' },
    { id: 40, src: poly2, category: 'Polycarbonate', title: 'Skyline Panel' },
    { id: 41, src: poly3, category: 'Polycarbonate', title: 'UV Resistant Poly' },
    { id: 42, src: poly4, category: 'Polycarbonate', title: 'Modern Polycarbonate' },

    { id: 43, src: multi1, category: 'Polycarbonate', title: 'Multiwall Skylight' },
    { id: 44, src: multi2, category: 'Polycarbonate', title: 'Insulated Polycarbonate' },
    { id: 45, src: multi3, category: 'Polycarbonate', title: 'Daylighting System' },
    { id: 46, src: multi4, category: 'Polycarbonate', title: 'Industrial Poly Roof' },
    { id: 47, src: multi5, category: 'Polycarbonate', title: 'High-Impact Multiwall' },
    { id: 48, src: multi6, category: 'Polycarbonate', title: 'Factory Sky Panel' },
    { id: 49, src: multi7, category: 'Polycarbonate', title: 'Thermal Poly Sheets' },
    { id: 50, src: multi8, category: 'Polycarbonate', title: 'Multiwall Installation' },
    { id: 51, src: multi9, category: 'Polycarbonate', title: 'Premium Multiwall' }
];

const categories = ['All', 'PUF Panels', 'Metal Roofing', 'UPVC Sheets', 'Decking Sheets', 'Polycarbonate'];

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredImages = selectedCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    return (
        <div className={styles.galleryPage}>
            {/* Hero Section */}
            <section className={styles.hero} style={{ '--hero-image': `url(${heroImg})` }}>
                <div className={styles.heroOverlay} />
                <div className={styles.container}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className={styles.heroContent}
                    >
                        <span className={styles.sublabel}>OUR PORTFOLIO</span>
                        <h1>Project Gallery</h1>
                        <p className={styles.heroDesc}>
                            Explore our extensive portfolio of industrial and commercial projects across India.
                            From premium PUF panels to durable metal roofing.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className={styles.container}>
                {/* Filter Controls */}
                <div className={styles.filters}>
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`${styles.filterBtn} ${selectedCategory === category ? styles.active : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <motion.div layout className={styles.galleryGrid}>
                    <AnimatePresence mode='popLayout'>
                        {filteredImages.map((image) => (
                            <motion.div
                                key={image.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                className={styles.galleryItem}
                                onClick={() => setSelectedImage(image)}
                            >
                                <img src={image.src} alt={image.title} loading="lazy" />
                                <div className={styles.overlay}>
                                    <FaExpandAlt className={styles.expandIcon} />
                                    <h3>{image.title}</h3>
                                    <span>{image.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.modal}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className={styles.modalContent}
                            onClick={e => e.stopPropagation()}
                        >
                            <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
                                <FaTimes />
                            </button>
                            <img src={selectedImage.src} alt={selectedImage.title} />
                            <div className={styles.modalMeta}>
                                <h2>{selectedImage.title}</h2>
                                <p>{selectedImage.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
