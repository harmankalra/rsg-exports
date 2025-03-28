import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from '../common/banner';
import Footer from '../common/footer';


function Gallery() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <div>
            <Banner />
          
            <Footer />
        </div>
    );
}

export default Gallery;
