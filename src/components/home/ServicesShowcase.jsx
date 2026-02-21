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
        id: 'metal-roofing',
        title: 'Roofing Metal Sheets',
        desc: 'Premium colour coated, decking, and metal roofing profiles for durable industrial sheds.',
        image: img1,
        path: '/products/roofing-metal-sheets'
    },
    {
        id: 'puf-panels',
        title: 'PUF Sandwich Panels',
        desc: 'Advanced thermal insulation panels for cold storage and energy-efficient industrial buildings.',
        image: img2,
        path: '/products/insulated-sheets'
    },
    {
        id: 'polycarbonate',
        title: 'Polycarbonate Sheets',
        desc: 'High-impact transparent roofing solutions for natural lighting and skylights.',
        image: img3,
        path: '/products/polycarbonate-sheets'
    },
    {
        id: 'decking-sheets',
        title: 'Decking Sheets',
        desc: 'High-strength structural floor decking sheets for modern infrastructure projects.',
        image: img4,
        path: '/products/decking-sheet'
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
                        OUR CATEGORIES
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Precision Roofing & Building Solutions
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
                                        <span>Explore Category</span>
                                        <FaArrowRight size={12} />
                                    </div>
                                </div>
                                <Link to={service.path} className={styles.cardLink} aria-label={`View ${service.title}`} />
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesShowcase;
