import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../shared/Card';
import styles from './QuoteForm.module.css';

const QuoteForm = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '', serviceType: 'Industrial Roofing' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    source: 'Quote Form'
                })
            });

            if (res.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', phone: '', email: '', message: '', serviceType: 'Industrial Roofing' });
            } else {
                setSubmitStatus('error');
            }
        } catch (err) {
            setSubmitStatus('error');
        }
        setIsSubmitting(false);
    };

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
                        {submitStatus === 'success' ? (
                            <div className={styles.successMessage}>
                                <h3>Thank you for reaching out!</h3>
                                <p>We've received your request. Our team will contact you shortly with a personalized quote.</p>
                                <button onClick={() => setSubmitStatus(null)} className="btn-primary" style={{ marginTop: '1rem' }}>
                                    Request Another Quote
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.quoteForm}>
                                <div className={styles.formGrid}>
                                    <div className={styles.inputGroup}>
                                        <label>Full Name</label>
                                        <input 
                                            type="text" 
                                            placeholder="Your Name" 
                                            required 
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Phone Number</label>
                                        <input 
                                            type="tel" 
                                            placeholder="Your Phone" 
                                            required 
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        />
                                    </div>
                                    <div className={styles.inputGroupFull}>
                                        <label>Email Address</label>
                                        <input 
                                            type="email" 
                                            placeholder="Your Email" 
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        />
                                    </div>
                                    <div className={styles.inputGroupFull}>
                                        <label>Service Type</label>
                                        <select 
                                            value={formData.serviceType}
                                            onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                                            required
                                        >
                                            <option value="Industrial Roofing">Industrial Roofing</option>
                                            <option value="PEB Fabrication">PEB Structure Fabrication</option>
                                            <option value="Roof Leak Repair">Roof Leak Repair</option>
                                            <option value="Polycarbonate Roofing">Polycarbonate Roofing</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className={styles.inputGroupFull}>
                                        <label>Project Details</label>
                                        <textarea 
                                            rows="4" 
                                            placeholder="Tell us about the area, requirements, or any specific challenges..." 
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        ></textarea>
                                    </div>
                                </div>
                                
                                {submitStatus === 'error' && (
                                    <p className={styles.errorMessage}>Oops! Something went wrong. Please try again.</p>
                                )}

                                <button 
                                    type="submit" 
                                    className={`btn-primary ${styles.submitBtn}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting Request...' : 'Get My Free Quote'}
                                </button>
                            </form>
                        )}
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default QuoteForm;
