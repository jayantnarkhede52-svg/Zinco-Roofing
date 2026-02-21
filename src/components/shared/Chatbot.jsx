import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './Chatbot.module.css';

// Reusing logic from InteractiveRoofFinder but adapted for chat
const recommendationLogic = {
    residential: {
        heat: 'puf-roof-panel',
        waterproof: 'metal-tile-sheet', // Backup for aesthetic/waterproof
        durability: 'metal-tile-sheet'
    },
    industrial: {
        heat: 'puf-roof-panel',
        durability: 'decking-sheet',
        standard: 'colour-coated-sheet'
    },
    commercial: {
        heat: 'polycarbonate-sheets',
        waterproof: 'high-roof-seam', // Default for commercial
        durability: 'high-roof-seam'
    }
};

const productsData = {
    // Metal Sheets
    'colour-coated-sheet': { name: 'Colour Coated Sheets', description: 'Premium trapezoidal and corrugated profiles.', link: '/products/roofing-metal-sheets' },
    'decking-sheet': { name: 'Super Deck Sheets', description: 'High structural stability for floor and roof deck applications.', link: '/products/decking-sheet' },
    'shingles': { name: 'Architectural Shingles', description: 'Superior aesthetics and weather protection.', link: '/products/shingles' },
    'metal-tile-sheet': { name: 'Metal Tile Sheets', description: 'Classic look with steel strength.', link: '/products/metal-tile-sheet' },
    'high-roof-seam': { name: 'High Roof Seam', description: 'Maximum leak protection Standing Seam system.', link: '/products/high-roof-seam' },

    // Insulation
    'puf-roof-panel': { name: 'PUF Insulated Panels', description: 'Pre-insulated sandwich panels for thermal efficiency.', link: '/products/insulated-sheets' },
    'rockwool-glasswool': { name: 'Rockwool & Glasswool', description: 'Fire-resistant and sound-absorbing insulation.', link: '/products/rockwool-glasswool' },
    'aerolam-sheet': { name: 'Aerolam Sheets', description: 'Advanced moisture and heat control sheets.', link: '/products/aerolam-sheet' },

    // UPVC/Poly
    'pvc-tile-sheet': { name: 'PVC Tile Sheets', description: 'Lightweight roofing with traditional tile look.', link: '/products/pvc-tile-sheet' },
    'polycarbonate-sheets': { name: 'Polycarbonate Sheets', description: 'High-impact transparent sheets for natural light.', link: '/products/polycarbonate-sheets' },
    'multiwall-sheets': { name: 'Multiwall Sheets', description: 'Multi-layered polycarbonate for superior insulation.', link: '/products/multiwall-sheets' },
    'upvc-high-rib-sheets': { name: 'UPVC High-Rib Sheets', description: 'Corrosion-resistant profile for industries.', link: '/products/upvc-high-rib-sheets' },
    'synthetic-roof': { name: 'Synthetic Roofing', description: 'Modern materials for long-term protection.', link: '/products/synthetic-roof' },
    'upvc-sheets': { name: 'Standard UPVC Sheets', description: 'Versatile weatherproof roofing solution.', link: '/products/upvc-sheets' },

    // Additional
    'ventilators': { name: 'Turbo Ventilators', description: 'Natural airflow and ventilation systems.', link: '/products/ventilators' },
    'peb-fabrication': { name: 'PEB Solutions', description: 'Pre-engineered industrial building structures.', link: '/products/peb-fabrication' },
    'roofing-accessories': { name: 'Roofing Accessories', description: 'Ridge caps, gutters, and structural parts.', link: '/products/roofing-accessories' }
};

const productCategories = [
    { label: "Metal Sheets", value: "cat_metal", items: ['colour-coated-sheet', 'decking-sheet', 'shingles', 'metal-tile-sheet', 'high-roof-seam'] },
    { label: "Insulation Panels", value: "cat_insulation", items: ['puf-roof-panel', 'rockwool-glasswool', 'aerolam-sheet'] },
    { label: "UPVC & Polycarbonate", value: "cat_upvc", items: ['pvc-tile-sheet', 'polycarbonate-sheets', 'multiwall-sheets', 'upvc-high-rib-sheets', 'synthetic-roof', 'upvc-sheets'] },
    { label: "Industrial Building & Ventilation", value: "cat_industrial", items: ['ventilators', 'peb-fabrication', 'roofing-accessories'] }
];

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [conversationState, setConversationState] = useState('start');
    const [userSelections, setUserSelections] = useState({});
    const messagesEndRef = useRef(null);
    const navigate = useNavigate();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            addBotMessage("Hi! I'm ZincoBot. How can I assist you today?", [
                { label: "Help me find a roof (Quiz)", value: "start_quiz" },
                { label: "Browse Product Categories", value: "browse_categories" },
                { label: "Talk to an Expert", value: "contact" }
            ]);
        }
    }, [isOpen]);

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const addBotMessage = (text, options = []) => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, { type: 'bot', text, options }]);
        }, 800);
    };

    const addUserMessage = (text) => {
        setMessages(prev => [...prev, { type: 'user', text }]);
    };

    const handleOptionClick = (option) => {
        addUserMessage(option.label);

        if (option.value === 'start_quiz') {
            setConversationState('building');
            addBotMessage("Great! What type of building are you working on?", [
                { label: "Home / Residential", value: "residential" },
                { label: "Factory / Industrial", value: "industrial" },
                { label: "Commercial / Office", value: "commercial" }
            ]);
        } else if (option.value === 'browse_categories') {
            addBotMessage("Select a category to see our specific roofing solutions:",
                productCategories.map(cat => ({ label: cat.label, value: cat.value }))
            );
        } else if (option.value.startsWith('cat_')) {
            const category = productCategories.find(c => c.value === option.value);
            addBotMessage(`Here are our products for ${category.label}:`,
                category.items.map(id => ({ label: productsData[id].name, value: `prod_${id}` }))
            );
        } else if (option.value.startsWith('prod_')) {
            const productId = option.value.replace('prod_', '');
            const product = productsData[productId];
            addBotMessage(`Excellent choice! Here is more about ${product.name}:`, []);
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    type: 'bot',
                    text: product.description,
                    product: product
                }]);
            }, 600);
        } else if (option.value === 'contact') {
            addBotMessage("You can reach our experts at +91 91375 79872 or visit our contact page.", [
                { label: "Go to Contact Page", value: "nav_contact" },
                { label: "Back to Main Menu", value: "restart" }
            ]);
        } else if (option.value === 'nav_contact') {
            handleProductView('/contact');
        } else if (['residential', 'industrial', 'commercial'].includes(option.value)) {
            setUserSelections(prev => ({ ...prev, building: option.value }));
            setConversationState('priority');
            addBotMessage("And what is your main priority for the roof?", [
                { label: "Heat Reduction", value: "heat" },
                { label: "Waterproofing", value: "waterproof" },
                { label: "Durability / Strength", value: "durability" }
            ]);
        } else if (['heat', 'waterproof', 'durability'].includes(option.value)) {
            const newSelections = { ...userSelections, priority: option.value };
            setUserSelections(newSelections);
            recommendProduct(newSelections);
        } else if (option.value === 'restart') {
            setMessages([]);
            setConversationState('start');
            setUserSelections({});
            setTimeout(() => {
                addBotMessage("How can I help you today?", [
                    { label: "Help me find a roof (Quiz)", value: "start_quiz" },
                    { label: "Browse Product Categories", value: "browse_categories" },
                    { label: "Talk to an Expert", value: "contact" }
                ]);
            }, 300);
        }
    };

    const recommendProduct = (selections) => {
        const { building, priority } = selections;
        let productId = 'colour-coated-sheet';

        if (recommendationLogic[building]) {
            productId = recommendationLogic[building][priority] || recommendationLogic[building].standard || recommendationLogic[building].durability;
        }

        const product = productsData[productId];

        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, {
                type: 'bot',
                text: `Based on your needs, I recommend:`,
                product: product
            }]);
        }, 1200);
    };

    const handleProductView = (link) => {
        setIsOpen(false);
        navigate(link);
    };

    return (
        <div className={styles.chatbotContainer}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.chatWindow}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className={styles.header}>
                            <h3>ZincoBot</h3>
                            <button onClick={() => setIsOpen(false)} className={styles.closeButton}>
                                <FaTimes />
                            </button>
                        </div>

                        <div className={styles.messagesContainer}>
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`${styles.message} ${msg.type === 'bot' ? styles.botMessage : styles.userMessage}`}>
                                    {msg.text}
                                    {msg.product && (
                                        <div className={styles.productCard}>
                                            <h4>{msg.product.name}</h4>
                                            <p>{msg.product.description}</p>
                                            <div className={styles.productActions}>
                                                <button onClick={() => handleProductView(msg.product.link)} className={`${styles.actionButton} ${styles.viewBtn}`}>
                                                    View Product
                                                </button>
                                                <button onClick={() => handleOptionClick({ value: 'restart' })} className={`${styles.actionButton} ${styles.restartBtn}`}>
                                                    Start Over
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    {msg.options && (
                                        <div className={styles.optionsContainer}>
                                            {msg.options.map((opt, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => handleOptionClick(opt)}
                                                    className={styles.optionButton}
                                                >
                                                    {opt.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            {isTyping && (
                                <div className={styles.typingIndicator}>
                                    <div className={styles.dot}></div>
                                    <div className={styles.dot}></div>
                                    <div className={styles.dot}></div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                className={styles.toggleButton}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Chatbot"
            >
                {isOpen ? <FaChevronDown /> : <FaRobot />}
            </button>
        </div>
    );
};

export default Chatbot;
