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

    // ✅ SAFE JSON-LD SCHEMA
    const homeSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.rsgexports.com/",
                "url": "https://www.rsgexports.com/",
                "name": "RSG Exports | Premium Basmati & Non-Basmati Rice Exporters from India",
                "isPartOf": {
                    "@id": "https://www.rsgexports.com/#website"
                },
                "about": {
                    "@id": "https://www.rsgexports.com/#organization"
                },
                "description": "Leading exporter of premium 1121 Basmati, 1509 Basmati, IR64 and long-grain Non-Basmati rice from Punjab, India."
            },
            {
                "@type": "Service",
                "name": "Bulk Rice Export & Private Label Manufacturing",
                "provider": {
                    "@id": "https://www.rsgexports.com/#organization"
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

            {/* 🔥 HOME PAGE SEO */}
            <Helmet>
                <title>RSG Exports | Premium Basmati & Non-Basmati Rice Exporters from India</title>

                <meta
                    name="description"
                    content="RSG Exports Pvt. Ltd., Ferozepur Punjab, is a leading manufacturer and exporter of premium 1121 Basmati, 1509 Basmati, IR64 and long-grain Non-Basmati rice. Supplying top-quality rice to Saudi Arabia, UAE, the Middle East and global markets."
                />

                <meta
                    name="keywords"
                    content="RSG Exports, basmati rice exporters India, 1121 basmati rice manufacturer, 1509 sella rice exporters, IR64 rice suppliers, rice mill Ferozepur Punjab, rice exporters to Saudi Arabia, UAE rice importers"
                />

                {/* Open Graph */}
                <meta property="og:title" content="RSG Exports | India’s Trusted Basmati & Non-Basmati Rice Exporter" />
                <meta
                    property="og:description"
                    content="Explore premium-quality 1121 Basmati, 1509 Basmati, IR64 and Non-Basmati rice manufactured and exported by RSG Exports, Punjab."
                />
                <meta property="og:image" content="https://www.rsgexports.com/home3.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.rsgexports.com/" />

                <link rel="canonical" href="https://www.rsgexports.com/" />

                {/* ✅ SAFE STRUCTURED DATA */}
                <script type="application/ld+json">
                    {JSON.stringify(homeSchema)}
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
