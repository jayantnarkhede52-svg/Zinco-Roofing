import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaIndustry, FaBuilding, FaSun, FaUmbrella, FaRupeeSign, FaArrowRight, FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Button from '../shared/Button';
import Card from '../shared/Card';
import styles from './InteractiveRoofFinder.module.css';

// Question Data
const questions = [
    {
        id: 'building',
        question: "What type of building are you roofing?",
        options: [
            { id: 'residential', label: 'Home / Villa', icon: <FaHome /> },
            { id: 'industrial', label: 'Factory / Warehouse', icon: <FaIndustry /> },
            { id: 'commercial', label: 'Office / Mall', icon: <FaBuilding /> }
        ]
    },
    {
        id: 'priority',
        question: "What is your main priority?",
        options: [
            { id: 'heat', label: 'Heat Reduction', icon: <FaSun /> },
            { id: 'waterproof', label: '100% Waterproofing', icon: <FaUmbrella /> },
            { id: 'durability', label: 'Long-term Durability', icon: <FaCheck /> }
        ]
    }
];

// Recommendation Logic
const getRecommendation = (answers) => {
    const { building, priority } = answers;

    if (building === 'residential') {
        if (priority === 'heat') return 'puf-roof-panel';
        if (priority === 'aesthetics') return 'shingles'; // Assuming an aesthetics option exists or defaults
        return 'metal-tile-sheet';
    }

    if (building === 'industrial') {
        if (priority === 'heat') return 'puf-roof-panel';
        if (priority === 'durability') return 'decking-sheet'; // Or High Rib UPVC
        return 'colour-coated-sheet';
    }

    // Commercial
    if (priority === 'heat') return 'polycarbonate-sheets'; // For atriums/light
    return 'high-roof-seam';
};

const productsData = {
    'puf-roof-panel': {
        name: 'PUF Insulated Panels',
        description: 'Best for heat reduction. Keeps interiors cool and reduces AC costs.',
        link: '/products/insulated-sheets'
    },
    'shingles': {
        name: 'Architectural Shingles',
        description: 'Premium aesthetic appeal perfect for villas and bungalows.',
        link: '/products/shingles'
    },
    'metal-tile-sheet': {
        name: 'Metal Tile Sheets',
        description: 'Classic tile look with the strength of steel. Durable and leakage-proof.',
        link: '/products/metal-tile-sheet'
    },
    'decking-sheet': {
        name: 'Super Deck Sheets',
        description: 'High structural stability for industrial flooring and roofing.',
        link: '/products/decking-sheet'
    },
    'colour-coated-sheet': {
        name: 'Colour Coated Sheets',
        description: 'The industrial standard. Economical, durable, and available in many colors.',
        link: '/products/roofing-metal-sheets'
    },
    'polycarbonate-sheets': {
        name: 'Polycarbonate Sheets',
        description: 'Perfect for natural lighting in commercial spaces and walkways.',
        link: '/products/polycarbonate-sheets'
    },
    'high-roof-seam': {
        name: 'High Roof Seam',
        description: 'Leak-proof standing seam system for large commercial roofs.',
        link: '/products/high-roof-seam'
    }
};

const InteractiveRoofFinder = () => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [recommendation, setRecommendation] = useState(null);
    const navigate = useNavigate();

    const handleAnswer = (optionId) => {
        const currentQuestion = questions[step];
        const newAnswers = { ...answers, [currentQuestion.id]: optionId };
        setAnswers(newAnswers);

        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            // Finished
            const recId = getRecommendation(newAnswers);
            setRecommendation(productsData[recId] || productsData['colour-coated-sheet']);
            setStep(step + 1);
        }
    };

    const resetQuiz = () => {
        setStep(0);
        setAnswers({});
        setRecommendation(null);
    };

    return (
        <section className={styles.finderSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Find Your Perfect Roof</h2>
                    <p>Answer 2 simple questions to get a personalized recommendation.</p>
                </div>

                <Card variant="glass" className={styles.quizCard}>
                    <AnimatePresence mode="wait">
                        {step < questions.length ? (
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className={styles.questionSlide}
                            >
                                <h3>{questions[step].question}</h3>
                                <div className={styles.optionsGrid}>
                                    {questions[step].options.map((option) => (
                                        <button
                                            key={option.id}
                                            type="button"
                                            onClick={() => handleAnswer(option.id)}
                                            className={styles.optionButton}
                                        >
                                            <div className={styles.iconWrapper}>{option.icon}</div>
                                            <span>{option.label}</span>
                                        </button>
                                    ))}
                                </div>
                                <div className={styles.progressDots}>
                                    {questions.map((_, idx) => (
                                        <span key={idx} className={`${styles.dot} ${idx === step ? styles.active : ''}`}></span>
                                    ))}
                                    <span className={styles.dot}></span>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className={styles.resultSlide}
                            >
                                <div className={styles.resultHeader}>
                                    <span className={styles.matchTag}>Your Best Match</span>
                                    <h3>{recommendation.name}</h3>
                                </div>
                                <p className={styles.resultDesc}>{recommendation.description}</p>
                                <div className={styles.actionButtons}>
                                    <Button onClick={() => navigate(recommendation.link)}>View Product</Button>
                                    <Button variant="outline" onClick={resetQuiz}>Start Over</Button>
                                    <Button variant="secondary" href="/contact">Get Quote Now</Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Card>
            </div>
        </section>
    );
};

export default InteractiveRoofFinder;
