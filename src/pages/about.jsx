import React from 'react';
import Banner from '../common/banner';

import Footer from '../common/footer';
import Expert from '../components/about/expert';
import OurMission from '../components/about/ourmission';
import InfrastructureShowcase from '../components/about/ourinfra';
import Countries from '../components/about/exportcountry';
import FoundersMess from '../components/about/foundermessage';
function About() {



    return (
        <div>
            <Banner />
 < Expert />
        <OurMission />   
        <InfrastructureShowcase />
        <Countries />
        < FoundersMess />
< Footer />
            {/* Other content can go here */}
        </div>
    );
}

export default About;