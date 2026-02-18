import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';
import SEO from '../components/shared/SEO';
import Button from '../components/shared/Button';

const NotFound = () => {
    return (
        <div style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center'
        }}>
            <SEO
                title="Page Not Found"
                description="The page you are looking for doesn't exist. Return to Zinco Roofing home."
            />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <FaExclamationTriangle style={{ fontSize: '4rem', color: 'var(--accent-500)', marginBottom: '1.5rem' }} />
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Oops! Page Not Found</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '500px', marginInline: 'auto' }}>
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link to="/">
                    <Button size="lg">
                        <FaHome style={{ marginRight: '0.8rem' }} /> Back to Home
                    </Button>
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;
