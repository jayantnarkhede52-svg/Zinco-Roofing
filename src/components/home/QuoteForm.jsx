import { motion } from 'framer-motion';
import Card from '../shared/Card';
import styles from './QuoteForm.module.css';

const QuoteForm = () => {
    return (
        <section className={styles.quoteSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.span
                        className={styles.sublabel}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        GET STARTED
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Request a Free Quote
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Tell us about your project requirements and our experts will provide a customized solution and competitive pricing within 24 hours.
                    </motion.p>
                </div>

                <motion.div
                    className={styles.formWrapper}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <Card variant="glass" className={styles.formCard}>
                        <div className={styles.iframeContainer}>
                            <iframe
                                src="https://app.formbricks.com/s/cmlwc1cpkstiwu401uisuaoys"
                                frameBorder="0"
                                className={styles.fbIframe}
                                title="Formbricks Request Quote Form"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default QuoteForm;
