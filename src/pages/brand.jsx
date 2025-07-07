import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from '../common/banner';
import Items from '../components/product/item'
import Footer from '../common/footer';


function Product() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <div>
            <Banner />
            <Items />
            <Footer />
        </div>
    );
}

export default Product;
