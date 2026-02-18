import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { CONTACT_INFO } from '../../utils/constants';
import logo from '../../assets/logo.png';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const serviceAreas = ['Navi Mumbai', 'Panvel', 'Taloja', 'Mumbai', 'Dombivli', 'Thane', 'Vashi'];

    const quickLinks = [
        { path: '/', label: 'Home' },
        { path: '/projects', label: 'Projects' },
        { path: '/services', label: 'Services' },
        { path: '/products', label: 'Products' },
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
                            <img src={logo} alt="Zinco Roofing Logo" className={styles.footerLogo} />
                            <h3 className={styles.brand}>
                                <span>ZINCO</span>
                                <span className={styles.brandAccent}>ROOFING</span>
                            </h3>
                        </Link>
                        <p className={styles.description}>
                            Premium roofing solutions for residential, commercial, and industrial properties across Mumbai and Navi Mumbai.
                        </p>
                        <div className={styles.social}>
                            <a href="#" className={styles.socialLink} aria-label="Facebook">
                                <FaFacebook />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
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
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} Zinco Roofing Solution. All rights reserved. GSTIN: {CONTACT_INFO.gstin}
                    </p>
                    <div className={styles.bottomLinks}>
                        <a href="#" className={styles.bottomLink}>Privacy Policy</a>
                        <span className={styles.separator}>•</span>
                        <a href="#" className={styles.bottomLink}>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
