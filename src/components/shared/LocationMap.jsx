import React from 'react';
import styles from './LocationMap.module.css';

const LocationMap = ({ query, title }) => {
    // Exact official address pinpoint as requested by user
    const officialAddress = "Zinco Roofing Solution, Shop Number 22, Elite Complex Lodha Heaven, Kalyan - Shilphata Rd, Dombivli, Maharashtra 421204";
    const encodedQuery = encodeURIComponent(officialAddress);
    
    return (
        <section className={styles.mapSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.sublabel}>VISIT OUR OFFICE</span>
                    <h2><strong>Zinco Roofing</strong> Headquarters</h2>
                    <p>Visit our official location for consultations and material samples. We serve all areas including {title}.</p>
                </div>
                <div className={styles.mapWrapper}>
                    <iframe
                        title={`Map of ${title}`}
                        width="100%"
                        height="450"
                        style={{ border: 0, borderRadius: '12px' }}
                        src={`https://maps.google.com/maps?q=${encodedQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default LocationMap;
