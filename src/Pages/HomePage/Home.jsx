import React from 'react';

import img1 from '../../../../../Banner pic/1.jpg'
import img2 from '../../../../../Banner pic/2.jpg'
import img3 from '../../../../../Banner pic/3.jpg'
import img4 from '../../../../../Banner pic/4.jpg'

import Banner from '../../Components/Banner/Banner';
import AboutUs from '../../Components/AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <AboutUs></AboutUs>
        </div>
    );
};

export default Home;