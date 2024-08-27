import React from 'react';
import './BarazMall.css';
import d1 from '../Farmer/images/Fa5.jpg';
import d2 from '../Farmer/images/Fa6.jpg';
import d3 from '../Farmer/images/Fa7.jpg';
import d4 from '../Farmer/images/Fa8.jpg';
import d5 from '../Farmer/images/Fa9.jpg';
import d6 from '../Farmer/images/Fa10.jpg';

const BarazMall = () => {
    return (
        <div className='bg-brand'>
            
            <div className='container py-5'>
                <h2 className='fs-5'> Baraz Mall </h2>
                <div className='d-flex flex-wrap flashsale-container'>
                    <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                        <img src = {d1} className = 'img-fluid' alt = "flash-sale-product" />
                        <p className='card-title'>Buds air wireles..</p>
                        <h3 className='card-price'>400tk</h3>
                        <h4 className='card-text'>400tk<strike className='text-muted'>-33%</strike></h4>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                        <img src = {d2} className = 'img-fluid' alt = "flash-sale-product" />
                        <p className='card-title'>Buds air wireles..</p>
                        <h3 className='card-price'>400tk</h3>
                        <h4 className='card-text'>400tk<strike className='text-muted'>-33%</strike></h4>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                        <img src = {d3} className = 'img-fluid' alt = "flash-sale-product" />
                        <p className='card-title'>Buds air wireles..</p>
                        <h3 className='card-price'>400tk</h3>
                        <h4 className='card-text'>400tk<strike className='text-muted'>-33%</strike></h4>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                        <img src = {d4} className = 'img-fluid' alt = "flash-sale-product" />
                        <p className='card-title'>Buds air wireles..</p>
                        <h3 className='card-price'>400tk</h3>
                        <h4 className='card-text'>400tk<strike className='text-muted'>-33%</strike></h4>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                        <img src = {d5} className = 'img-fluid' alt = "flash-sale-product" />
                        <p className='card-title'>Buds air wireles..</p>
                        <h3 className='card-price'>400tk</h3>
                        <h4 className='card-text'>400tk<strike className='text-muted'>-33%</strike></h4>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                        <img src = {d6} className = 'img-fluid' alt = "flash-sale-product" />
                        <p className='card-title'>Buds air wireles..</p>
                        <h3 className='card-price'>400tk</h3>
                        <h4 className='card-text'>400tk<strike className='text-muted'>-33%</strike></h4>
                    </div>
                
                </div>
            </div>
            
        </div>
    );
};

export default BarazMall;