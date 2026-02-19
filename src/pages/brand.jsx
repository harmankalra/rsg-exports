import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from '../common/banner';
import Items from '../components/product/item'
import Footer from '../common/footer';

function Product() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <div>
            {/* 🔥 SEO for Brand Page */}
            <Helmet>
                <title>Our Brand | Frontline Premium Basmati & Non-Basmati Rice by RSG Exports</title>

                <meta
                    name="description"
                    content="Explore Frontline — the flagship rice brand of RSG Exports, offering premium 1121 Basmati, 1509 Basmati, Steam, Sella and IR64 varieties. Export-grade packaging and long-grain excellence trusted across Middle East markets."
                />

                <meta
                    name="keywords"
                    content="Frontline rice brand, RSG Exports brand, premium basmati rice brand India, 1121 basmati export brand, 1509 rice packaging brand, IR64 rice brand, rice export brands India"
                />

                {/* Open Graph */}
                <meta property="og:title" content="Frontline – Premium Rice Brand by RSG Exports" />
                <meta
                    property="og:description"
                    content="Discover Frontline, the premium rice brand by RSG Exports featuring 1121 Basmati, 1509 Basmati and IR64 rice for international markets."
                />
                <meta property="og:image" content="https://www.rsgexports.com/home3.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.rsgexports.com/brand" />

                {/* Canonical */}
                <link rel="canonical" href="https://www.rsgexports.com/brand" />

                {/* 🔥 Structured Data - Brand Page */}
                <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Brand",
      "@id": "https://www.rsgexports.com/brand#brand",
      "name": "Frontline",
      "description": "Frontline is the flagship premium rice brand by RSG Exports offering export-quality Basmati and Non-Basmati rice varieties.",
      "url": "https://www.rsgexports.com/brand",
      "logo": "https://www.rsgexports.com/logo192.png",
      "isPartOf": {
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
      }
    }

  ]
}
`}
                </script>

            </Helmet>

            <Banner />
            <Items />
            <Footer />
        </div>
    );
}

export default Product;
