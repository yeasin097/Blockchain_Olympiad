import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import AuctionList from '../../Components/Farmer/AuctionList';
import LogoSearchBar from '../../Components/LogoSearchBar/LogoSearchBar';

const OngoingAuction = () => {
    return (
        <div>
            <Navbar />
            <AuctionList />
        </div>
    );
};

export default OngoingAuction;