import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/shared/SEO';

const PrivacyPolicy = () => {
    return (
        <div style={{ padding: '120px 20px 60px', maxWidth: '800px', margin: '0 auto' }}>
            <SEO title="Privacy Policy" description="Privacy policy details for Zinco Roofing Solution." />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 style={{ marginBottom: '2rem' }}>Privacy Policy</h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Last Updated: February 19, 2026</p>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>1. Introduction</h2>
                    <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        At Zinco Roofing Solution, we respect your privacy and are committed to protecting any personal information
                        you share with us. This policy describes how we collect, use, and safeguard your data when you visit
                        our website or use our services.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>2. Information We Collect</h2>
                    <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        We collect information you provide directly through our contact forms, WhatsApp integration, or email.
                        This may include your name, phone number, email address, and project details.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>3. How We Use Your Information</h2>
                    <ul style={{ lineHeight: '2', color: 'var(--text-secondary)', paddingLeft: '1.5rem' }}>
                        <li>To provide price quotes and expert consultations</li>
                        <li>To schedule site inspections</li>
                        <li>To improve our roofing services and website updates</li>
                        <li>To comply with legal obligations (GST billing, etc.)</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>4. Data Security</h2>
                    <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        We implement standard security measures to protect your info from unauthorized access. However,
                        no method of transmission over the internet is 100% secure.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>5. Contact Us</h2>
                    <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        If you have questions about this Privacy Policy, please contact us at info.zincoroof@gmail.com.
                    </p>
                </section>
            </motion.div>
        </div>
    );
};

export default PrivacyPolicy;
