import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from '../common/banner';
import Footer from '../common/footer';
import Expert from '../components/about/expert';
import InfrastructureShowcase from '../components/about/ourinfra';
import FoundersMess from '../components/about/foundermessage';
import KeyStatistics from '../components/about/keystat';

function About() {

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    // ✅ SAFE JSON-LD SCHEMA
    const aboutSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "AboutPage",
                "@id": "https://www.rsgexports.com/about",
                "url": "https://www.rsgexports.com/about",
                "name": "About RSG Exports Pvt. Ltd.",
                "isPartOf": {
                    "@id": "https://www.rsgexports.com/#website"
                },
                "about": {
                    "@id": "https://www.rsgexports.com/#organization"
                },
                "description": "RSG Exports Pvt. Ltd. is a leading rice manufacturer and exporter based in Ferozepur, Punjab, India specializing in premium Basmati and Non-Basmati rice."
            },
            {
                "@type": "Organization",
                "@id": "https://www.rsgexports.com/#organization",
                "name": "RSG Exports Pvt. Ltd.",
                "url": "https://www.rsgexports.com/",
                "foundingDate": "1999",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Ferozepur",
                    "addressRegion": "Punjab",
                    "addressCountry": "IN"
                },
                "areaServed": {
                    "@type": "Place",
                    "name": "Worldwide"
                }
            }
        ]
    };

    return (
        <div>

            {/* 🔥 ABOUT PAGE SEO */}
            <Helmet>
                <title>About RSG Exports | India’s Leading Basmati & Non-Basmati Rice Exporters</title>

                <meta
                    name="description"
                    content="RSG Exports Pvt. Ltd., based in Ferozepur, Punjab, is one of India's most trusted manufacturers and exporters of premium Basmati and Non-Basmati rice. Serving Saudi Arabia, UAE, the Middle East and global markets."
                />

                <meta
                    name="keywords"
                    content="About RSG Exports, basmati rice exporters India, non basmati rice export Punjab, 1121 steam rice exporter, 1509 sella rice, rice mill Ferozepur"
                />

                {/* Open Graph */}
                <meta property="og:title" content="About RSG Exports | Trusted Rice Exporters from India" />
                <meta
                    property="og:description"
                    content="Learn about RSG Exports — a leading rice exporter from Punjab specializing in 1121 Basmati, 1509 Basmati and IR64 rice."
                />
                <meta property="og:image" content="https://www.rsgexports.com/home3.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.rsgexports.com/about" />

                <link rel="canonical" href="https://www.rsgexports.com/about" />

                {/* ✅ SAFE STRUCTURED DATA */}
                <script type="application/ld+json">
                    {JSON.stringify(aboutSchema)}
                </script>
            </Helmet>

            {/* PAGE CONTENT */}
            <Banner />
            <Expert />
            <KeyStatistics />
            <InfrastructureShowcase />
            <FoundersMess />
            <Footer />

        </div>
    );
}

export default About;
