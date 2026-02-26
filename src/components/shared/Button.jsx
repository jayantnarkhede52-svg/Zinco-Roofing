import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  ...props
}) => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const baseClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

    if (isExternal) {
      return (
        <motion.a
          href={href}
          className={baseClass}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          {...props}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <Link to={href} className={styles.linkWrapper}>
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className={baseClass}
          {...props}
        >
          {children}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      className={baseClass}
      onClick={onClick}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {children}
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
  href: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
