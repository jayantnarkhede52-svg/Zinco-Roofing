import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { siteData } from '../../data/siteData';

const SEO = ({ title: propTitle, description: propDesc, keywords: propKeywords, canonicalUrl, schema }) => {
    const location = useLocation();
    
    // Look up page data from central siteData based on current path
    const pageData = siteData.pages[location.pathname] || {};

    // Prioritize props, fallback to central siteData, then final defaults
    const title = propTitle || pageData.title || 'Zinco Roofing Solutions';
    const description = propDesc || pageData.description || 'Professional industrial roofing solutions in Navi Mumbai and Maharashtra.';
    const keywords = propKeywords || pageData.keywords || 'industrial roofing, roofing contractors, navi mumbai';

    const resolveCanonical = () => {
        if (canonicalUrl) return canonicalUrl;
        const domain = 'https://www.zincoroof.com';
        return `${domain}${location.pathname === '/' ? '' : location.pathname}`;
    };

    const finalCanonical = resolveCanonical();

    const address = {
        "@type": "PostalAddress",
        "streetAddress": "Shop Number 22, Elite Complex Lodha Heaven, Kalyan - Shilphata Rd",
        "addressLocality": "Dombivli",
        "addressRegion": "Maharashtra",
        "postalCode": "421204",
        "addressCountry": "IN"
    };

    const defaultSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Zinco Roofing Solution",
        "image": "https://www.zincoroof.com/logo.webp",
        "@id": "https://www.zincoroof.com",
        "url": "https://www.zincoroof.com",
        "telephone": "+919967203090",
        "priceRange": "₹₹₹",
        "address": address,
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
    };

    // Generate BreadcrumbList Schema
    const getBreadcrumbSchema = () => {
        const pathnames = location.pathname.split('/').filter(x => x);
        if (pathnames.length === 0) return null;

        const items = [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.zincoroof.com"
            }
        ];

        pathnames.forEach((path, index) => {
            const url = `https://www.zincoroof.com/${pathnames.slice(0, index + 1).join('/')}`;
            items.push({
                "@type": "ListItem",
                "position": index + 2,
                "name": path.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                "item": url
            });
        });

        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items
        };
    };

    const breadcrumbSchema = getBreadcrumbSchema();

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {finalCanonical && <link rel="canonical" href={finalCanonical} />}

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
                {JSON.stringify(schema || defaultSchema)}
            </script>
            {breadcrumbSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            )}
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    canonicalUrl: PropTypes.string,
    schema: PropTypes.object
};

export default SEO;
