import React, { useEffect } from 'react';
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
            <Banner />
            <ContactSection />
            <ContactForm />
            <ContactView />
            <Footer />
        </div>
    );
}

export default Contact;
