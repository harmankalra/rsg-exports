import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from '../common/banner';
import RSGFoodsGrid from '../components/home/ambition';
import TimelineCarousel from '../components/home/journey';
import FrontlineRice from '../components/home/frontline';
import ProductShowcase from '../components/home/frontproduct';
import RSGExports from '../components/home/whychoseus';
import TeamShowcase from '../components/home/ourteam';
import RicePackaging from '../components/home/whitelabel';
import TestimonialSlider from '../components/home/testimonial';
import Footer from '../common/footer';

function Home() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div>

            {/* 🔥 HOME PAGE — FULL SEO OPTIMIZATION */}
            <Helmet>
                <title>RSG Exports | Premium Basmati & Non-Basmati Rice Exporters from India</title>

                <meta
                    name="description"
                    content="RSG Exports Pvt. Ltd., Ferozepur Punjab, is a leading manufacturer and exporter of premium 1121 Basmati, 1509 Basmati, IR64 and long-grain Non-Basmati rice. Supplying top-quality rice to Saudi Arabia, UAE, the Middle East and global markets with modern milling, hygienic packaging and export-grade consistency."
                />

                <meta
                    name="keywords"
                    content="RSG Exports, basmati rice exporters India, 1121 basmati rice manufacturer, 1509 sella rice exporters, IR64 rice suppliers, rice mill Ferozepur Punjab, rice exporters to Saudi Arabia, UAE rice importers, long grain rice export India"
                />

                {/* Social Sharing Meta */}
                <meta property="og:title" content="RSG Exports | India’s Trusted Basmati & Non-Basmati Rice Exporter" />
                <meta
                    property="og:description"
                    content="Explore premium-quality 1121 Basmati, 1509 Basmati, IR64 and Non-Basmati rice manufactured and exported by RSG Exports, Punjab. Export-grade quality, modern milling and reliable global shipments."
                />
            <meta property="og:image" content="https://www.rsgexports.com/home3.jpg" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.rsgexports.com/" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.rsgexports.com/" />
                {/* Structured Data - Homepage */}
<script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Organization",
      "@id": "https://www.rsgexports.com/#organization",
      "name": "RSG Exports Pvt. Ltd.",
      "url": "https://www.rsgexports.com/",
      "logo": "https://www.rsgexports.com/logo192.png",
      "foundingDate": "1999",
      "description": "Leading manufacturer and exporter of premium 1121 Basmati, 1509 Basmati, IR64 and Non-Basmati rice from Punjab, India.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9056022232",
        "contactType": "Sales",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://www.facebook.com/p/RSG-Exports-100091896397617/",
        "https://www.instagram.com/rsgexports/"
      ]
    },

    {
      "@type": "LocalBusiness",
      "name": "RSG Exports Pvt. Ltd.",
      "image": "https://www.rsgexports.com/home3.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ferozepur",
        "addressRegion": "Punjab",
        "addressCountry": "IN"
      },
      "telephone": "+91-9056022232",
      "email": "rsgexportsfzr@gmail.com",
      "areaServed": [
        "Saudi Arabia",
        "UAE",
        "Middle East",
        "Europe",
        "Asia"
      ]
    },

    {
      "@type": "WebSite",
      "url": "https://www.rsgexports.com/",
      "name": "RSG Exports",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.rsgexports.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }

  ]
}
`}
</script>

            </Helmet>

            {/* PAGE CONTENT */}
            <Banner />
            <RSGFoodsGrid />
            <TimelineCarousel />
            <FrontlineRice />
            <ProductShowcase />
            <RSGExports />
            <RicePackaging />
            <TeamShowcase />
            <TestimonialSlider />
            <Footer />
        </div>
    );
}

export default Home;
