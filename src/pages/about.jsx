import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from '../common/banner';
import Footer from '../common/footer';
import Expert from '../components/about/expert';
import OurMission from '../components/about/ourmission';
import InfrastructureShowcase from '../components/about/ourinfra';
import Countries from '../components/about/exportcountry';
import FoundersMess from '../components/about/foundermessage';

function About() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <div>
            <Banner />
            <Expert />
            <OurMission />   
            <InfrastructureShowcase />
            <Countries />
            <FoundersMess />
            <Footer />
        </div>
    );
}

export default About;
