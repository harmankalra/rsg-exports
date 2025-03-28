import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from '../common/banner';
import WhiteLabelingPage from '../components/private/privatelabel';
import PartnerSection from '../components/private/partnerwithus'
import Footer from '../common/footer';

function Privatelabel() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <div>
            <Banner />
            <WhiteLabelingPage />
            <PartnerSection />
            <Footer />
        </div>
    );
}

export default Privatelabel;
