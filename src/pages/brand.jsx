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
            {/* 🔥 SEO for Brands Page (Frontline Rice Brand) */}
            <Helmet>
                <title>Our Brands | Frontline Premium Basmati & Non-Basmati Rice by RSG Exports</title>

                <meta
                    name="description"
                    content="Explore Frontline — the flagship brand of RSG Exports, offering premium Basmati and Non-Basmati rice varieties including 1121, 1509, Steam, Sella and IR64. Export-ready packaging, long-grain quality, and consistent taste trusted across Middle East markets."
                />

                <meta
                    name="keywords"
                    content="Frontline rice brand, RSG Exports brands, premium basmati rice, 1121 basmati export brand, 1509 rice packaging, IR64 rice brand, rice brands in India, export rice brands, frontline rice"
                />

                {/* Social Sharing */}
                <meta property="og:title" content="Frontline – Premium Rice Brand by RSG Exports" />
                <meta
                    property="og:description"
                    content="Discover Frontline, RSG Exports’ premium rice brand featuring 1121 Basmati, 1509 Basmati, IR64 and long-grain Non-Basmati varieties for international markets."
                />
                <meta property="og:image" content="%PUBLIC_URL%/home3.jpg" />
                <meta property="og:type" content="website" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.rsgexports.com/brands" />
            </Helmet>

            <Banner />
            <Items />
            <Footer />
        </div>
    );
}

export default Product;
