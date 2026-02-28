import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../utils/constants';
import logo from '../../assets/logo.png';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const serviceAreas = [
        { name: 'Mumbai', path: '/roofing-contractors-mumbai' },
        { name: 'Navi Mumbai', path: '/roofing-contractors-navi-mumbai' },
        { name: 'Panvel', path: '/roofing-contractors-panvel' },
        { name: 'Taloja', path: '/roofing-contractors-taloja' },
        { name: 'Dombivli', path: '/roofing-contractors-dombivli' },
        { name: 'Thane', path: '/roofing-contractors-thane' },
        { name: 'Ambarnath', path: '/roofing-contractors-ambarnath' },
    ];

    const quickLinks = [
        { path: '/', label: 'Home' },
        { path: '/industrial-roofing-projects-navi-mumbai', label: 'Projects' },
        { path: '/industrial-roofing-services-navi-mumbai', label: 'Services' },
        { path: '/premium-roofing-sheets-navi-mumbai', label: 'Products' },
        { path: '/contact', label: 'Contact' },
    ];

    const services = [
        { label: 'Roof Installation', path: '/industrial-roofing-services-navi-mumbai' },
        { label: 'Roof Repair', path: '/industrial-roofing-services-navi-mumbai' },
        { label: 'Waterproofing', path: '/industrial-roofing-services-navi-mumbai' },
        { label: 'Industrial Roofing', path: '/industrial-roofing-services-navi-mumbai' },
        { label: 'PEB Fabrication', path: '/industrial-roofing-services-navi-mumbai' },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Company Info */}
                    <div className={styles.section}>
                        <Link to="/" className={styles.brandContainer}>
                            <img src={logo} alt="Zinco Roofing Logo" className={styles.footerLogo} decoding="async" />
                            <h3 className={styles.brand}>
                                <span>ZINCO</span>
                                <span className={styles.brandAccent}>ROOFING</span>
                            </h3>
                        </Link>
                        <p className={styles.description}>
                            Premium roofing solutions for residential, commercial, and industrial properties across Mumbai and Navi Mumbai.
                        </p>
                        <div className={styles.social}>
                            {SOCIAL_LINKS.facebook && (
                                <a href={SOCIAL_LINKS.facebook} className={styles.socialLink} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook />
                                </a>
                            )}
                            {SOCIAL_LINKS.instagram && (
                                <a href={SOCIAL_LINKS.instagram} className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                            )}
                            {SOCIAL_LINKS.twitter && (
                                <a href={SOCIAL_LINKS.twitter} className={styles.socialLink} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter />
                                </a>
                            )}
                            {SOCIAL_LINKS.linkedin && (
                                <a href={SOCIAL_LINKS.linkedin} className={styles.socialLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                            )}
                            {SOCIAL_LINKS.youtube && (
                                <a href={SOCIAL_LINKS.youtube} className={styles.socialLink} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                                    <FaYoutube />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Quick Links</h4>
                        <ul className={styles.linkList}>
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className={styles.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Our Services</h4>
                        <ul className={styles.linkList}>
                            {services.map((service) => (
                                <li key={service.label}>
                                    <Link to={service.path} className={styles.link}>{service.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Contact Us</h4>
                        <div className={styles.contactInfo}>
                            <a href={`tel:${CONTACT_INFO.phones[0]}`} className={styles.contactItem}>
                                <FaPhone />
                                <span>{CONTACT_INFO.phones.join(' / ')}</span>
                            </a>
                            <a href={`mailto:${CONTACT_INFO.email}`} className={styles.contactItem}>
                                <FaEnvelope />
                                <span>{CONTACT_INFO.email}</span>
                            </a>
                        </div>

                        <div className={styles.serviceAreas}>
                            <h5 className={styles.serviceAreasTitle}>Service Areas:</h5>
                            <div className={styles.areaLinks} style={{ marginTop: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                {serviceAreas.map((area) => (
                                    <Link
                                        key={area.path}
                                        to={area.path}
                                        className={styles.bottomLink}
                                        style={{ fontSize: '0.85rem', color: '#9ca3af' }}
                                    >
                                        {area.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} Zinco Roofing Solution. All rights reserved. GSTIN: {CONTACT_INFO.gstin}
                    </p>
                    <div className={styles.bottomLinks}>
                        <Link to="/privacy-policy" className={styles.bottomLink}>Privacy Policy</Link>
                        <span className={styles.separator}>•</span>
                        <Link to="/terms-of-service" className={styles.bottomLink}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
