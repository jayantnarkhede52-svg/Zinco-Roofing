import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ children, variant = 'surface', className = '', hover = true }) => {
    const cardVariants = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut'
            }
        },
        hover: hover ? {
            y: -8,
            boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.5)',
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20
            }
        } : {}
    };

    return (
        <motion.div
            className={`${styles.card} ${styles[variant]} ${className}`}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
        >
            {children}
        </motion.div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['glass', 'solid', 'gradient', 'surface']),
    className: PropTypes.string,
    hover: PropTypes.bool,
};

export default Card;
