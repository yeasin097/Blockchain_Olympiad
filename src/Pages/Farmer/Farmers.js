import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import LogoSearchBar from '../../Components/LogoSearchBar/LogoSearchBar';
import FarmerOption from '../../Components/Farmer/FarmerOption';
import Whole_sell from '../../Components/Farmer/Whole_sell';
import Retail_er from '../../Components/Farmer/Retail_er';


const Farmers = () => {
    return (
        <div>
            <Navbar />
            <LogoSearchBar />
            <FarmerOption />
            <Whole_sell/>
            <Retail_er/>
        
            
        </div>
    );
};

export default Farmers;
