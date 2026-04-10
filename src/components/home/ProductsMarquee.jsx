import React from 'react';
import styles from './ProductsMarquee.module.css';
import { FaIndustry, FaShieldAlt, FaWarehouse, FaSnowflake, FaFan } from 'react-icons/fa';

const ProductsMarquee = () => {
    // Duplicate the array to create a seamless infinite loop
    const products = [
        { name: "Industrial Roofing Sheds", icon: <FaIndustry /> },
        { name: "Premium PUF Panels", icon: <FaSnowflake /> },
        { name: "Color Coated Sheets", icon: <FaShieldAlt /> },
        { name: "Structural Fabrication", icon: <FaWarehouse /> },
        { name: "Turbo Ventilators", icon: <FaFan /> },
        { name: "Polycarbonate Sheets", icon: <FaShieldAlt /> },
        { name: "FRP Sheets", icon: <FaIndustry /> },
    ];

    const extendedProducts = [...products, ...products, ...products];

    return (
        <section className={styles.marqueeSection}>
            <div className={styles.marqueeContainer}>
                <div className={styles.marqueeContent}>
                    {extendedProducts.map((product, index) => (
                        <div key={index} className={styles.marqueeItem}>
                            <span className={styles.icon}>{product.icon}</span>
                            <span className={styles.text}>{product.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default React.memo(ProductsMarquee);
