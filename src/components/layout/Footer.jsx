import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../utils/constants';
import logo from '../../assets/logo.png';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const serviceAreas = ['Navi Mumbai', 'Panvel', 'Taloja', 'Mumbai', 'Dombivli', 'Thane', 'Vashi'];

    const quickLinks = [
        { path: '/', label: 'Home' },
        { path: '/industrial-roofing-projects-navi-mumbai', label: 'Projects' },
        { path: '/industrial-roofing-services-navi-mumbai', label: 'Services' },
        { path: '/premium-roofing-sheets-navi-mumbai', label: 'Products' },
        { path: '/contact', label: 'Contact' },
    ];

    const services = [
        'Roof Installation',
        'Roof Repair',
        'Waterproofing',
        'Industrial Roofing',
        'PEB Fabrication',
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
                                <li key={service}>
                                    <span className={styles.link}>{service}</span>
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
                            <div className={styles.contactItem}>
                                <FaMapMarkerAlt />
                                <span>{CONTACT_INFO.address}</span>
                            </div>
                        </div>

                        <div className={styles.serviceAreas}>
                            <h5 className={styles.serviceAreasTitle}>Service Areas:</h5>
                            <div className={styles.badges}>
                                {serviceAreas.map((area) => (
                                    <span key={area} className={styles.badge}>
                                        {area}
                                    </span>
                                ))}
                            </div>
                            <div className={styles.areaLinks} style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                <Link to="/roofing-contractors-navi-mumbai" className={styles.bottomLink} style={{ fontSize: '0.85rem', color: '#9ca3af' }}>Navi Mumbai</Link>
                                <Link to="/roofing-contractors-mumbai" className={styles.bottomLink} style={{ fontSize: '0.85rem', color: '#9ca3af' }}>Mumbai</Link>
                                <Link to="/roofing-contractors-panvel" className={styles.bottomLink} style={{ fontSize: '0.85rem', color: '#9ca3af' }}>Panvel</Link>
                                <Link to="/roofing-contractors-thane" className={styles.bottomLink} style={{ fontSize: '0.85rem', color: '#9ca3af' }}>Thane</Link>
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
