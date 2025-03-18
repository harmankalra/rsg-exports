import React from 'react';
import Banner from '../common/banner';

import Footer from '../common/footer';
import ContactSection from '../components/contact/contactmap';
import ContactForm from '../components/contact/contactform';
function Contact() {

    return (
        <div>
            <Banner />
          < ContactSection />
< ContactForm />
          
< Footer />
            {/* Other content can go here */}
        </div>
    );
}

export default Contact;