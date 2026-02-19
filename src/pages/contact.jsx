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
                    content="Get in touch with RSG Exports Pvt. Ltd., Ferozepur, Punjab — a leading exporter of 1121 Basmati, 1509 Basmati, IR64 and long-grain Non-Basmati rice to Saudi Arabia, UAE and global markets."
                />

                <meta
                    name="keywords"
                    content="contact RSG Exports, rice exporter contact India, basmati rice supplier enquiry, IR64 rice exporter Punjab, rice export company contact"
                />

                {/* Open Graph */}
                <meta property="og:title" content="Contact RSG Exports | Premium Rice Exporters from India" />
                <meta
                    property="og:description"
                    content="Reach out to RSG Exports for Basmati & Non-Basmati rice export enquiries, bulk orders, pricing and private label services."
                />
                <meta property="og:image" content="https://www.rsgexports.com/Group13.webp" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.rsgexports.com/contact" />

                {/* Canonical */}
                <link rel="canonical" href="https://www.rsgexports.com/contact" />

                {/* 🔥 Structured Data - Contact Page */}
                <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "ContactPage",
      "@id": "https://www.rsgexports.com/contact#contactpage",
      "url": "https://www.rsgexports.com/contact",
      "name": "Contact RSG Exports Pvt. Ltd.",
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
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9056022232",
        "contactType": "Sales",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Hindi"]
      },
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
            <ContactSection />
            <ContactForm />
            <ContactView />
            <Footer />

        </div>
    );
}

export default Contact;
