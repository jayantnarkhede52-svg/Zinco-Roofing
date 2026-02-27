import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CONTACT_INFO } from '../../utils/constants';
import logo from '../../assets/logo.png';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/industrial-roofing-projects-navi-mumbai', label: 'Projects' },
        { path: '/areas', label: 'Areas' },
        { path: '/industrial-roofing-services-navi-mumbai', label: 'Services' },
        { path: '/premium-roofing-sheets-navi-mumbai', label: 'Products' },
        { path: '/gallery', label: 'Gallery' },
        { path: '/contact', label: 'Contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <motion.nav
            className={styles.navbar}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
        >
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <div className={styles.logoWrapper}>
                        <img src={logo} alt="Zinco Roofing Solution" className={styles.logoImage} decoding="async" />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <ul className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`${styles.navLink} ${isActive(link.path) ? styles.active : ''}`}
                            >
                                {link.label}
                                {isActive(link.path) && (
                                    <motion.div
                                        className={styles.activeIndicator}
                                        layoutId="activeIndicator"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                <a href={`tel:${CONTACT_INFO.phones[0]}`} className={styles.ctaButton}>
                    Call: {CONTACT_INFO.phones[0]}
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    className={styles.menuToggle}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className={styles.mobileNavLinks}>
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`${styles.mobileNavLink} ${isActive(link.path) ? styles.active : ''}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.1 }}
                            >
                                <a
                                    href={`tel:${CONTACT_INFO.phones[0]}`}
                                    className={styles.mobileCta}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Call Now
                                </a>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
