import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Card from '../shared/Card';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import styles from './ServicesShowcase.module.css';

const services = [
    {
        id: 'fabrication',
        title: 'Custom Fabrication',
        desc: 'Precision cutting and bending of roofing sheets to your exact specifications.',
        image: img1,
        color: '#3b82f6'
    },
    {
        id: 'installation',
        title: 'Professional Installation',
        desc: 'Expert on-site installation by our certified team ensuring leak-proof roofs.',
        image: img2,
        color: '#f59e0b'
    },
    {
        id: 'maintenance',
        title: 'Repair & Maintenance',
        desc: 'Annual maintenance contracts and quick repairs for existing industrial roofs.',
        image: img3,
        color: '#ef4444'
    },
    {
        id: 'consultation',
        title: 'Project Consultation',
        desc: 'Technical guidance on material selection and structural design optimization.',
        image: img4,
        color: '#10b981'
    }
];

const ServicesShowcase = () => {
    return (
        <section id="services-showcase" className={styles.servicesSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.span
                        className={styles.sublabel}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        WHAT WE DO
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Complete Roofing Solutions
                    </motion.h2>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card variant="glass" className={styles.serviceCard}>
                                <div className={styles.imageBox}>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className={styles.serviceImage}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                                <div className={styles.cardContent}>
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                    <div className={styles.learnMore}>
                                        <span>Learn more</span>
                                        <FaArrowRight size={12} />
                                    </div>
                                </div>
                                <Link to="/services" className={styles.cardLink} aria-label={`View ${service.title}`} />
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesShowcase;
