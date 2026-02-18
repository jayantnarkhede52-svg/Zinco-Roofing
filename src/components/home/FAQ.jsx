import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import styles from './FAQ.module.css';

const faqs = [
    {
        question: "How long does a typical industrial roof installation take?",
        answer: "For a standard 10,000 sq. ft. industrial shed, installation typically takes 7-10 working days, depending on the material choice and site conditions. We prioritize speed to minimize operational downtime."
    },
    {
        question: "Do you provide warranties on individual roofing sheets?",
        answer: "Yes, we provide manufacturer warranties ranging from 10 to 25 years depending on the material (Metal, UPVC, or PUF Panels) and the environmental conditions of the site."
    },
    {
        question: "Can you install turbo ventilators on old roofs?",
        answer: "Absolutely. We specialize in retrofitting wind-driven ventilators on existing industrial structures without needing to replace the entire roof."
    },
    {
        question: "Are your roofing solutions 100% leak-proof?",
        answer: "We use professional-grade sealants and expert fabrication techniques on-site to ensure every joint and fixing point is perfectly waterproofed, backed by our leakage-free commitment."
    }
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.faqItem} onClick={() => setIsOpen(!isOpen)}>
            <div className={styles.faqHeader}>
                <h3>{question}</h3>
                <span className={styles.icon}>
                    {isOpen ? <FaMinus /> : <FaPlus />}
                </span>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={styles.faqBody}
                    >
                        <p>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.sublabel}>ANSWERS TO COMMON QUESTIONS</span>
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
