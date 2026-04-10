import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { CONTACT_INFO } from '../utils/constants';
import SEO from '../components/shared/SEO';
import heroImage from '../assets/productshero/Contact-hero.webp';
import Card from '../components/shared/Card';
import styles from './Contact.module.css';

import { supabase } from '../lib/supabase';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'
    const [phoneError, setPhoneError] = useState('');

    const validatePhone = (num) => {
        const regex = /^[6-9]\d{9}$/;
        if (!num) return 'Phone number is required';
        if (!regex.test(num)) return 'Please enter a valid 10-digit phone number';
        return '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const error = validatePhone(formData.phone);
        if (error) {
            setPhoneError(error);
            return;
        }
        setPhoneError('');

        setIsSubmitting(true);
        try {
            const { error: insertError } = await supabase
                .from('leads')
                .insert([{
                    ...formData,
                    source: 'Contact Page',
                    created_at: new Date().toISOString()
                }]);

            if (insertError) throw insertError;

            setSubmitStatus('success');
            setFormData({ name: '', phone: '', email: '', message: '' });
        } catch (err) {
            console.error('Submission error:', err);
            setSubmitStatus('error');
        }
        setIsSubmitting(false);
    };

    return (
        <div className={styles.contactPage}>
            <SEO />
            {/* Hero Section */}
            <section className={styles.hero} style={{ '--hero-image': `url(${heroImage})` }}>
                <div className={styles.container}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Get a free consultation and quote for your roofing project
                    </motion.p>
                </div>
            </section>

            <div className={styles.container}>
                <div className={styles.content}>

                    <div className={styles.formSection} id="contact-form" style={{ marginTop: 0, marginBottom: 'var(--spacing-3xl)' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className={styles.formCard}
                        >
                            <AnimatePresence mode="wait">
                                {submitStatus === 'success' ? (
                                    <motion.div 
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className={styles.successMessage}
                                    >
                                        <FaCheckCircle className={styles.successIcon} />
                                        <h3>Message Sent Successfully!</h3>
                                        <p>Thank you for reaching out. Our technical team will get back to you within 24 hours.</p>
                                        <button onClick={() => setSubmitStatus(null)} className="btn-primary">Send Another Message</button>
                                    </motion.div>
                                ) : (
                                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        <div className={styles.formHeader}>
                                            <h2>Request a Site Visit</h2>
                                            <p>Fill out the details below for a professional inspection and fixed-price quote.</p>
                                        </div>
                                        
                                        <form onSubmit={handleSubmit} className={styles.contactForm}>
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
                                                        placeholder="Your Phone (10 digits)" 
                                                        required 
                                                        className={phoneError ? styles.inputError : ''}
                                                        value={formData.phone}
                                                        onChange={(e) => {
                                                            const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                                                            setFormData({...formData, phone: val});
                                                            if (phoneError) setPhoneError('');
                                                        }}
                                                    />
                                                    {phoneError && <span className={styles.errorText}><FaExclamationCircle /> {phoneError}</span>}
                                                </div>
                                                <div className={styles.inputGroup}>
                                                    <label>Email Address (Optional)</label>
                                                    <input 
                                                        type="email" 
                                                        placeholder="Your Email" 
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                    />
                                                </div>
                                                <div className={styles.inputGroupFull}>
                                                    <label>How can we help you?</label>
                                                    <textarea 
                                                        rows="4" 
                                                        placeholder="Enter your project details or requirements..." 
                                                        required
                                                        value={formData.message}
                                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                                    ></textarea>
                                                </div>
                                            </div>
                                            
                                            {submitStatus === 'error' && (
                                                <p className={styles.errorMessage}>Oops! Something went wrong. Please try again or call us directly.</p>
                                            )}

                                            <button 
                                                type="submit" 
                                                className="btn-primary" 
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? 'Processing Submission...' : 'Get My Free Quote →'}
                                            </button>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                    {/* Contact Info Grid */}
                    <div className={styles.infoGrid}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <Card className={styles.infoCard}>
                                <div className={styles.iconWrapper}>
                                    <FaPhone className={styles.icon} />
                                </div>
                                <h3>Call Us</h3>
                                <p>Mon-Sat: 9am - 7pm</p>
                                <div className={styles.links}>
                                    {CONTACT_INFO.phones.map(phone => (
                                        <a key={phone} href={`tel:${phone}`}>+91 {phone}</a>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Card className={styles.infoCard}>
                                <div className={styles.iconWrapper}>
                                    <FaEnvelope className={styles.icon} />
                                </div>
                                <h3>Email Us</h3>
                                <p>Send us your requirements</p>
                                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <Card className={styles.infoCard}>
                                <div className={styles.iconWrapper}>
                                    <FaMapMarkerAlt className={styles.icon} />
                                </div>
                                <h3>Visit Us</h3>
                                <p className={styles.address}>{CONTACT_INFO.address}</p>
                                <a href={CONTACT_INFO.mapLink} target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
                                    View on Google Maps
                                </a>
                            </Card>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
