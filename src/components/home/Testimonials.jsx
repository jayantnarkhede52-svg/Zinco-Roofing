import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaUserCircle } from 'react-icons/fa';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        id: 1,
        name: "Rajesh Kumar",
        company: "Industrial Estate Manager",
        text: "Zinco Roofing solved our persistent warehouse leakage issue in Taloja. Their team was professional and completed the metal roof installation ahead of schedule.",
        rating: 5
    },
    {
        id: 2,
        name: "Amit Shah",
        company: "Manufacturing Unit Owner",
        text: "Best roofing contractor in Navi Mumbai. The PEB structure fabrication they provided for our new shed is top-notch. Highly durable and cost-effective.",
        rating: 5
    },
    {
        id: 3,
        name: "Suresh Patil",
        company: "Logistics Manager",
        text: "Very satisfied with their roof crack repair service. They used high-quality sealants and the results are excellent. No more leaks during heavy monsoon.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>CLIENT TESTIMONIALS</span>
                    <h2>Trust from Industrial Leaders</h2>
                    <p>Don't just take our word for it—see what our regular industrial clients have to say about our roofing expertise.</p>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((item, index) => (
                        <motion.div 
                            key={item.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <FaQuoteLeft className={styles.quoteIcon} />
                            <div className={styles.stars}>
                                {[...Array(item.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p className={styles.text}>"{item.text}"</p>
                            <div className={styles.author}>
                                <FaUserCircle className={styles.avatar} />
                                <div className={styles.authorInfo}>
                                    <h4>{item.name}</h4>
                                    <span>{item.company}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.summary}>
                    <div className={styles.ratingInfo}>
                        <strong>4.9/5</strong>
                        <div className={styles.stars}>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <span>Based on 150+ Industrial Projects</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
