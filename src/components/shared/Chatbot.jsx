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
    'puf-roof-panel': {
        name: 'PUF Insulated Panels',
        description: 'Best for heat reduction. Keeps interiors cool.',
        link: '/products/insulated-sheets'
    },
    'shingles': {
        name: 'Architectural Shingles',
        description: 'Premium aesthetic appeal for homes.',
        link: '/products/shingles'
    },
    'metal-tile-sheet': {
        name: 'Metal Tile Sheets',
        description: 'Classic tile look with steel strength.',
        link: '/products/metal-tile-sheet'
    },
    'decking-sheet': {
        name: 'Super Deck Sheets',
        description: 'High structural stability for floors/roofs.',
        link: '/products/decking-sheet'
    },
    'colour-coated-sheet': {
        name: 'Colour Coated Sheets',
        description: 'Economical and durable industrial standard.',
        link: '/products/roofing-metal-sheets'
    },
    'polycarbonate-sheets': {
        name: 'Polycarbonate Sheets',
        description: 'Natural lighting for commercial spaces.',
        link: '/products/polycarbonate-sheets'
    },
    'high-roof-seam': {
        name: 'High Roof Seam',
        description: 'Leak-proof system for large roofs.',
        link: '/products/high-roof-seam'
    }
};

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [conversationState, setConversationState] = useState('start'); // start, building, priority, result
    const [userSelections, setUserSelections] = useState({});
    const messagesEndRef = useRef(null);
    const navigate = useNavigate();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            addBotMessage("Hi there! I'm ZincoBot. I can help you find the perfect roofing solution. Want to get started?", [
                { label: "Yes, help me find a roof", value: "start_quiz" },
                { label: "Just browsing", value: "browsing" }
            ]);
        }
        scrollToBottom();
    }, [isOpen, messages]);

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const addBotMessage = (text, options = []) => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, { type: 'bot', text, options }]);
        }, 1000);
    };

    const addUserMessage = (text) => {
        setMessages(prev => [...prev, { type: 'user', text }]);
    };

    const handleOptionClick = (option) => {
        addUserMessage(option.label);

        if (option.value === 'start_quiz') {
            setConversationState('building');
            addBotMessage("Great! First, what type of building are you working on?", [
                { label: "Home / Residential", value: "residential" },
                { label: "Factory / Industrial", value: "industrial" },
                { label: "Commercial / Office", value: "commercial" }
            ]);
        } else if (option.value === 'browsing') {
            addBotMessage("No problem! Feel free to ask if you change your mind.");
        } else if (['residential', 'industrial', 'commercial'].includes(option.value)) {
            setUserSelections(prev => ({ ...prev, building: option.value }));
            setConversationState('priority');
            addBotMessage("Got it. What is your main priority for the roof?", [
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
                addBotMessage("Let's start over. What type of building is it?", [
                    { label: "Home / Residential", value: "residential" },
                    { label: "Factory / Industrial", value: "industrial" },
                    { label: "Commercial / Office", value: "commercial" }
                ]);
            }, 500);
        }
    };

    const recommendProduct = (selections) => {
        const { building, priority } = selections;
        let productId = 'colour-coated-sheet'; // Default

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
        }, 1500);
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
