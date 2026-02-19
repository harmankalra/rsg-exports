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
                    content="1121 basmati rice, 1509 rice, IR64 rice exporters, non basmati rice varieties, long grain rice India, basmati rice manufacturer Punjab, rice supplier for Middle East, Indian rice export range, RSG Exports rice types"
                />

                {/* Social Sharing */}
                <meta property="og:title" content="RSG Exports | Complete Range of Basmati & Non-Basmati Rice" />
                <meta
                    property="og:description"
                    content="Discover RSG Exports’ full variety of premium Indian rice — from 1121 and 1509 Basmati to IR64 and Sona Masoori. Export-grade quality trusted worldwide."
                />
                <meta property="og:image" content="%PUBLIC_URL%/home3.jpg" />
                <meta property="og:type" content="website" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.rsgexports.com/range" />
            </Helmet>

            <Banner />
            <RiceRange />
            <Footer />
        </div>
    );
}

export default Privatelabel;
