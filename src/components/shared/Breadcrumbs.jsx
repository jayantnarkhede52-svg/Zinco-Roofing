import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronRight, FaHome } from 'react-icons/fa';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    if (location.pathname === '/' || location.pathname === '/admin/login' || location.pathname === '/admin/dashboard') {
        return null;
    }

    const formatLabel = (string) => {
        return string
            .replace(/-/g, ' ')
            .replace(/in navi mumbai/gi, '')
            .replace(/contractors in/gi, '')
            .trim()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
            <div className={styles.container}>
                <ol className={styles.breadcrumbList}>
                    <li className={styles.breadcrumbItem}>
                        <Link to="/" className={styles.homeLink}>
                            <FaHome />
                            <span>Home</span>
                        </Link>
                    </li>
                    {pathnames.map((value, index) => {
                        const last = index === pathnames.length - 1;
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                        return (
                            <li key={to} className={styles.breadcrumbItem}>
                                <FaChevronRight className={styles.separator} />
                                {last ? (
                                    <span className={styles.currentPath}>{formatLabel(value)}</span>
                                ) : (
                                    <Link to={to} className={styles.breadcrumbLink}>
                                        {formatLabel(value)}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumbs;
