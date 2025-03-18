import React from 'react';
import Banner from '../common/banner';

import Footer from '../common/footer';
import Expert from '../components/about/expert';
import OurMission from '../components/about/ourmission';
import InfrastructureShowcase from '../components/about/ourinfra';
function About() {


    return (
        <div>
            <Banner />
 < Expert />
        <OurMission />   
        <InfrastructureShowcase />
< Footer />
            {/* Other content can go here */}
        </div>
    );
}

export default About;