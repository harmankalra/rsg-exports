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

    return (
        <div>

            {/* 🔥 ABOUT PAGE — FULL SEO OPTIMIZATION */}
            <Helmet>
                <title>About RSG Exports | India’s Leading Basmati & Non-Basmati Rice Exporters</title>

                <meta
                    name="description"
                    content="RSG Exports Pvt. Ltd., based in Ferozepur, Punjab, is one of India's most trusted manufacturers and exporters of premium Basmati and Non-Basmati rice. With modern milling technology, strict quality control, and exports to Saudi Arabia, UAE, and the Middle East, RSG delivers long-grain excellence worldwide."
                />

                <meta
                    name="keywords"
                    content="About RSG Exports, RSG Exports Pvt Ltd, basmati rice exporters India, non basmati rice export Punjab, 1121 steam rice exporter, 1509 sella rice, rice mill Ferozepur, rice supplier to Saudi Arabia, Indian rice exporters"
                />

                {/* 🔥 Open Graph */}
                <meta property="og:title" content="About RSG Exports | Trusted Basmati & Non-Basmati Rice Exporters from India" />
                <meta
                    property="og:description"
                    content="Learn about RSG Exports — a leading rice exporter from Ferozepur, Punjab specializing in 1121 Basmati, 1509 Basmati, IR64 and long-grain Non-Basmati rice for global markets including Saudi Arabia, UAE and the Middle East."
                />
                <meta property="og:image" content="https://www.rsgexports.com/home3.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.rsgexports.com/about" />

                {/* Canonical */}
                <link rel="canonical" href="https://www.rsgexports.com/about" />

                {/* 🔥 Structured Data - About Page */}
                <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "AboutPage",
      "@id": "https://www.rsgexports.com/about#aboutpage",
      "url": "https://www.rsgexports.com/about",
      "name": "About RSG Exports Pvt. Ltd.",
      "description": "Learn about RSG Exports Pvt. Ltd., a leading manufacturer and exporter of premium Basmati and Non-Basmati rice from Punjab, India.",
      "isPartOf": {
        "@id": "https://www.rsgexports.com/#website"
      },
      "about": {
        "@id": "https://www.rsgexports.com/#organization"
      }
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
      "areaServed": [
        "Saudi Arabia",
        "UAE",
        "Middle East",
        "Europe",
        "Asia"
      ]
    }

  ]
}
`}
                </script>

            </Helmet>

            {/* 🔥 PAGE CONTENT */}
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
