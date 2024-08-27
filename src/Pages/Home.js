import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import LogoSearchBar from '../Components/LogoSearchBar/LogoSearchBar';
import Carousel from '../Components/Carousel/Carousel';
import TopBanner from '../Components/TopBanner/TopBanner';
import FlashSale from '../Components/FlashSale/FlashSale';
import BarazMall from '../Components/BarazMall/BarazMall';
import Footer from '../Components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <LogoSearchBar />
            <Carousel />
            <TopBanner />
            <FlashSale />
            <BarazMall />
            <Footer />
        </div>
    );
};

export default Home;