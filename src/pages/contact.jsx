import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from '../common/banner';
import Footer from '../common/footer';
import ContactSection from '../components/contact/contactmap';
import ContactForm from '../components/contact/contactform';
import ContactView from "../components/contact/contactview";

function Contact() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <div>

            {/* 🔥 CONTACT PAGE — FULL SEO OPTIMIZATION */}
            <Helmet>
                <title>Contact RSG Exports | Basmati & Non-Basmati Rice Export Enquiries</title>

                <meta
                    name="description"
                    content="Get in touch with RSG Exports Pvt. Ltd., Ferozepur, Punjab — a leading exporter of 1121 Basmati, 1509 Basmati, IR64 and long-grain Non-Basmati rice to Saudi Arabia, UAE and global markets. Contact us for bulk rice orders, export pricing, private labelling and OEM services."
                />

                <meta
                    name="keywords"
                    content="contact RSG Exports, rice exporter contact, basmati rice suppliers India, rice export enquiries, rice mill in Ferozepur, IR64 supplier Punjab, Saudi Arabia rice exporters, UAE rice import"
                />

                {/* Social Sharing */}
                <meta property="og:title" content="Contact RSG Exports | Premium Rice Exporters from India" />
                <meta
                    property="og:description"
                    content="Reach out to RSG Exports for Basmati & Non-Basmati rice export enquiries, bulk orders, pricing, private label requests and global supply partnerships."
                />
                <meta property="og:image" content="%PUBLIC_URL%/Group13.webp" />
                <meta property="og:type" content="website" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.rsgexports.com/contact" />
            </Helmet>

            <Banner />
            <ContactSection />
            <ContactForm />
            <ContactView />
            <Footer />
        </div>
    );
}

export default Contact;
