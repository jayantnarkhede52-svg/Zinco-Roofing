import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
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

    const handleSubmit = async (e) => {
        e.preventDefault();
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
            <SEO
                title="Contact Best Roofing Contractors in Navi Mumbai"
                description="Get a free quote for your roofing project. Contact Zinco Roofing in Navi Mumbai for expert consultation and site inspection. Call now!"
                keywords="contact roofing contractors, get roofing quote, roofing consultants navi mumbai"
            />
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

                    {/* Contact Info Grid */}
                    <div className={styles.infoGrid}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
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
                            transition={{ delay: 0.3 }}
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
                            transition={{ delay: 0.4 }}
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

                    <div className={styles.formSection} id="contact-form">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className={styles.formCard}
                        >
                            <div className={styles.formHeader}>
                                <h2>Send us a Message</h2>
                                <p>Fill out the form below and our team will get back to you within 24 hours.</p>
                            </div>
                            
                            {submitStatus === 'success' ? (
                                <div className={styles.successMessage}>
                                    <h3>Message Sent Successfully!</h3>
                                    <p>Thank you for reaching out. Our team will contact you shortly.</p>
                                    <button onClick={() => setSubmitStatus(null)} className="btn-primary">Send Another Message</button>
                                </div>
                            ) : (
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
                                                placeholder="Your Phone" 
                                                required 
                                                value={formData.phone}
                                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            />
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
                                        {isSubmitting ? 'Sending Message...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
