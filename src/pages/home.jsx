import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from '../common/banner';
import RSGFoodsGrid from '../components/home/ambition';
import TimelineCarousel from '../components/home/journey';
import FrontlineRice from '../components/home/frontline';
import ProductShowcase from '../components/home/frontproduct';
import RSGExports from '../components/home/whychoseus';
import TeamShowcase from '../components/home/ourteam';
import RicePackaging from '../components/home/whitelabel';
import TestimonialSlider from '../components/home/testimonial';
import Footer from '../common/footer';

function Home() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <Banner />
            <RSGFoodsGrid />
            <TimelineCarousel />
            <FrontlineRice />
            <ProductShowcase />
            <RSGExports />
            <RicePackaging />
            <TeamShowcase />
            <TestimonialSlider />
            <Footer />
        </div>
    );
}

export default Home;
