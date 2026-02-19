import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from '../common/banner';
import WhiteLabelingPage from '../components/private/privatelabel';
import PartnerSection from '../components/private/partnerwithus';
import Footer from '../common/footer';

function Privatelabel() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <div>

            {/* 🔥 PRIVATE LABEL PAGE — FULL SEO OPTIMIZATION */}
            <Helmet>
                <title>Private Labelling | Custom Basmati & Non-Basmati Rice Packaging – RSG Exports</title>

                <meta
                    name="description"
                    content="RSG Exports Pvt. Ltd. offers world-class private labelling and OEM services for Basmati and Non-Basmati rice. Create your own rice brand with custom packaging from 1kg to 40kg bags with export-grade quality."
                />

                <meta
                    name="keywords"
                    content="private label rice India, OEM rice supplier, custom rice packaging India, 1121 basmati private label, IR64 white label supplier, rice exporters private labeling"
                />

                {/* Open Graph */}
                <meta property="og:title" content="Private Labelling | Create Your Own Premium Rice Brand with RSG Exports" />
                <meta
                    property="og:description"
                    content="Launch your own rice brand with RSG Exports’ private labelling service. Custom packaging, OEM printing, and export-ready Basmati & Non-Basmati rice."
                />
                <meta property="og:image" content="https://www.rsgexports.com/home3.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.rsgexports.com/private" />

                {/* Canonical */}
                <link rel="canonical" href="https://www.rsgexports.com/private" />

                {/* 🔥 Structured Data - Service Schema */}
                <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Service",
      "@id": "https://www.rsgexports.com/private#service",
      "name": "Private Labelling & OEM Rice Packaging",
      "description": "Custom private labelling and OEM rice packaging services for Basmati and Non-Basmati rice varieties including 1121, 1509 and IR64.",
      "provider": {
        "@id": "https://www.rsgexports.com/#organization"
      },
      "areaServed": [
        "Saudi Arabia",
        "UAE",
        "Middle East",
        "Africa",
        "Europe"
      ],
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ferozepur",
            "addressRegion": "Punjab",
            "addressCountry": "IN"
          }
        }
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
            <WhiteLabelingPage />
            <PartnerSection />
            <Footer />

        </div>
    );
}

export default Privatelabel;
