import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from '../common/banner';
import RiceRange from '../components/range/ricevariety';
import Footer from '../common/footer';

function Privatelabel() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <div>

            {/* 🔥 RANGE PAGE — FULL SEO OPTIMIZATION */}
            <Helmet>
                <title>Our Rice Range | 1121 Basmati, 1509, IR64 & Premium Rice Varieties – RSG Exports</title>

                <meta
                    name="description"
                    content="Explore the complete rice range offered by RSG Exports Pvt. Ltd., including 1121 Basmati, 1509 Basmati, Traditional Basmati, IR64, Sona Masoori, Steam, Sella and long-grain Non-Basmati varieties. Export-quality rice supplied to Saudi Arabia, UAE, Middle East, Africa and global markets."
                />

                <meta
                    name="keywords"
                    content="1121 basmati rice, 1509 rice, IR64 rice exporters, non basmati rice varieties, long grain rice India, basmati rice manufacturer Punjab, rice supplier for Middle East, Indian rice export range"
                />

                {/* Open Graph */}
                <meta property="og:title" content="RSG Exports | Complete Range of Basmati & Non-Basmati Rice" />
                <meta
                    property="og:description"
                    content="Discover RSG Exports’ full variety of premium Indian rice — from 1121 and 1509 Basmati to IR64 and Sona Masoori. Export-grade quality trusted worldwide."
                />
                <meta property="og:image" content="https://www.rsgexports.com/home3.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.rsgexports.com/range" />

                {/* Canonical */}
                <link rel="canonical" href="https://www.rsgexports.com/range" />

                {/* 🔥 Structured Data - Collection Page */}
                <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "CollectionPage",
      "@id": "https://www.rsgexports.com/range#collection",
      "url": "https://www.rsgexports.com/range",
      "name": "RSG Exports Rice Product Range",
      "description": "Complete export-quality rice range including 1121 Basmati, 1509 Basmati, IR64, Sona Masoori and Non-Basmati varieties.",
      "isPartOf": {
        "@id": "https://www.rsgexports.com/#website"
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [

          {
            "@type": "Product",
            "name": "1121 Basmati Rice",
            "brand": {
              "@type": "Brand",
              "name": "RSG Exports"
            }
          },
          {
            "@type": "Product",
            "name": "1509 Basmati Rice",
            "brand": {
              "@type": "Brand",
              "name": "RSG Exports"
            }
          },
          {
            "@type": "Product",
            "name": "Traditional Basmati Rice",
            "brand": {
              "@type": "Brand",
              "name": "RSG Exports"
            }
          },
          {
            "@type": "Product",
            "name": "IR64 Non-Basmati Rice",
            "brand": {
              "@type": "Brand",
              "name": "RSG Exports"
            }
          },
          {
            "@type": "Product",
            "name": "Sona Masoori Rice",
            "brand": {
              "@type": "Brand",
              "name": "RSG Exports"
            }
          }

        ]
      }
    },

    {
      "@type": "Organization",
      "@id": "https://www.rsgexports.com/#organization",
      "name": "RSG Exports Pvt. Ltd.",
      "url": "https://www.rsgexports.com/"
    }

  ]
}
`}
                </script>

            </Helmet>

            <Banner />
            <RiceRange />
            <Footer />

        </div>
    );
}

export default Privatelabel;
