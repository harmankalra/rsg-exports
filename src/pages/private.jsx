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

            {/* 🔥 PRIVATE LABELING PAGE — FULL SEO OPTIMIZATION */}
            <Helmet>
                <title>Private Labelling | Custom Basmati & Non-Basmati Rice Packaging – RSG Exports</title>

                <meta
                    name="description"
                    content="RSG Exports Pvt. Ltd. offers world-class private labelling and OEM services for Basmati and Non-Basmati rice. Create your own rice brand with custom packaging in 1kg to 40kg bags, export-grade printing, and premium rice varieties like 1121, 1509, IR64 and long-grain Non-Basmati. Ideal for importers across Saudi Arabia, UAE, Middle East and Africa."
                />

                <meta
                    name="keywords"
                    content="private label rice, white label rice packaging, OEM rice supplier, custom rice packaging India, 1121 basmati private label, IR64 white label supplier, rice exporters private labeling, RSG Exports private label"
                />

                {/* Social Sharing */}
                <meta property="og:title" content="Private Labelling | Create Your Own Premium Rice Brand with RSG Exports" />
                <meta
                    property="og:description"
                    content="Launch your own rice brand with RSG Exports’ private labelling service. Custom packaging, OEM printing, and export-ready Basmati & Non-Basmati rice trusted in global markets."
                />
                <meta property="og:image" content="%PUBLIC_URL%/home3.jpg" />
                <meta property="og:type" content="website" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.rsgexports.com/private-labelling" />
            </Helmet>

            <Banner />
            <WhiteLabelingPage />
            <PartnerSection />
            <Footer />
        </div>
    );
}

export default Privatelabel;
