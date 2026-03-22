import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const SEO = ({ title: propTitle, description: propDesc, keywords: propKeywords, canonicalUrl, schema }) => {
    const [dynamicSeo, setDynamicSeo] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const fetchSeo = async () => {
            try {
                // Fetch SEO for the current route path
                const res = await fetch(`/api/seo${location.pathname}`);
                if (res.ok) {
                    const data = await res.json();
                    setDynamicSeo(data);
                }
            } catch (err) {
                // Silently fallback to props if fetching fails
            }
        };
        fetchSeo();
    }, [location.pathname]);

    const title = dynamicSeo?.title ? dynamicSeo.title : propTitle;
    const description = dynamicSeo?.description ? dynamicSeo.description : propDesc;
    const keywords = dynamicSeo?.keywords ? dynamicSeo.keywords : propKeywords;

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
        "image": "https://zincoroof.com/logo.webp",
        "@id": "https://zincoroof.com",
        "url": "https://zincoroof.com",
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

    // Generate BreadcrumbList Schema if we are not on the home page
    const getBreadcrumbSchema = () => {
        if (typeof window === 'undefined') return null;
        
        const pathnames = window.location.pathname.split('/').filter(x => x);
        if (pathnames.length === 0) return null;

        const items = [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://zincoroof.com"
            }
        ];

        pathnames.forEach((path, index) => {
            const url = `https://zincoroof.com/${pathnames.slice(0, index + 1).join('/')}`;
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
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string,
    canonicalUrl: PropTypes.string,
    schema: PropTypes.object
};

export default SEO;
