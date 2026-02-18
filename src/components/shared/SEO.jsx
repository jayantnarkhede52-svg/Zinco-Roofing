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
