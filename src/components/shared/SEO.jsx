import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ title, description, keywords, canonicalUrl }) => {
    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title} | Zinco Roofing</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="Zinco Roofing" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {/* Schema Markup */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Zinco Roofing Solution",
                    "image": "https://zincoroofing.com/logo.png",
                    "@id": "https://zincoroofing.com",
                    "url": "https://zincoroofing.com",
                    "telephone": "+919967203090",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Industrial Hub",
                        "addressLocality": "Navi Mumbai",
                        "addressRegion": "Maharashtra",
                        "postalCode": "410208",
                        "addressCountry": "IN"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 19.166111,
                        "longitude": 73.073611
                    },
                    "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday"
                        ],
                        "opens": "09:00",
                        "closes": "19:00"
                    }
                })}
            </script>
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string,
    canonicalUrl: PropTypes.string
};

export default SEO;
