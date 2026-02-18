import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/shared/SEO';

const TermsOfService = () => {
    return (
        <div style={{ padding: '120px 20px 60px', maxWidth: '800px', margin: '0 auto' }}>
            <SEO title="Terms of Service" description="Terms and conditions for using Zinco Roofing services." />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 style={{ marginBottom: '2rem' }}>Terms of Service</h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Last Updated: February 19, 2026</p>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>1. Acceptance of Terms</h2>
                    <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        By accessing this website, you agree to be bound by these terms and conditions. If you do not agree
                        with any of these terms, you are prohibited from using this site.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>2. Service Consultation</h2>
                    <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        Quotes provided via the website are estimates based on initial data. Final pricing is subject to
                        on-site measurement and material selection.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>3. Intellectual Property</h2>
                    <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        The content on this website, including logo, text, and project images, is owned by Zinco Roofing Solution.
                        Unauthorized use is strictly prohibited.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>4. Limitation of Liability</h2>
                    <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        Zinco Roofing Solution shall not be liable for any damages that arise out of the use or inability
                        to use the materials on our website.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>5. Governing Law</h2>
                    <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        Any claim relating to Zinco Roofing Solution's website shall be governed by the laws of
                        Maharashtra, India.
                    </p>
                </section>
            </motion.div>
        </div>
    );
};

export default TermsOfService;
