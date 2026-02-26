import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { CONTACT_INFO } from '../utils/constants';
import SEO from '../components/shared/SEO';
import heroImage from '../assets/productshero/Contact-hero.png';
import Card from '../components/shared/Card';
import styles from './Contact.module.css';

const Contact = () => {

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

                    <div className={styles.formSection}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className={styles.formHeader}>
                                <h2>Send us a Message</h2>
                                <p>Fill out the form below and our team will get back to you within 24 hours.</p>
                            </div>
                            <div className={styles.formWrapper}>
                                <iframe
                                    src="https://app.formbricks.com/s/cmlwc1cpkstiwu401uisuaoys"
                                    frameBorder="0"
                                    className={styles.fbIframe}
                                    title="Formbricks Contact Form"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>

                    <div className={styles.mapSectionFull}>
                        <motion.div
                            className={styles.mapWrapper}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2>Our Location</h2>
                            <p>Visit our office for detailed project discussions</p>
                            <iframe
                                title="Zinco Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.8864753303683!2d73.07575677520738!3d19.156424782065096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf2e99b0e901%3A0xfcf0b3a9d2fd20cd!2sLodha%20Elite%20CHS%20Ltd%20I%20Wing!5e0!3m2!1sen!2sin!4v1740579998818!5m2!1sen!2sin"
                                width="100%"
                                height="450px"
                                style={{ border: 0, borderRadius: 'var(--radius-lg)', marginTop: '2rem' }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
