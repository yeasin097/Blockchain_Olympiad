import React from 'react';
import './TopBanner.css';
import feature1 from '../Farmer/images/Fa2.jpeg';
import feature2 from '../Farmer/images/Fa3.jpg';
import feature3 from '../Farmer/images/Fa4.jpg';
import feature4 from '../Farmer/images/Fa5.jpg';

const TopBanner = () => {
    return (
        <div className='bg-brand'>
            <div className='container'>
                <img src = "" alt = ""/>
                <div className='row'>
                    <div style={{borderRadius: '50px'}} className="col m-2 bg-white m-2">
                        <img src= {feature1} width = '60' className='img-fluid py-1' alt = "" />
                        <a href = "/" className='text-decoration-none text-dark fw-bold ps-2'>Free Shopping</a>
                    </div>
                    <div style={{borderRadius: '50px'}} className="col m-2 bg-white m-2">
                        <img src= {feature2} width = '60' className='img-fluid py-1' alt = "" />
                        <a href = "/" className='text-decoration-none text-dark fw-bold ps-2'>Grocery Shopping</a>
                    </div>
                    <div style={{borderRadius: '50px'}} className="col m-2 bg-white m-2">
                        <img src= {feature3} width = '60' className='img-fluid py-1' alt = "" />
                        <a href = "/" className='text-decoration-none text-dark fw-bold ps-2'>Baraz Mall Shopping</a>
                    </div>
                    <div style={{borderRadius: '50px'}} className="col m-2 bg-white m-2">
                        <img src= {feature4} width = '60' className='img-fluid py-1' alt = "" />
                        <a href = "/" className='text-decoration-none text-dark fw-bold ps-2'>Digital sheba</a>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default TopBanner;