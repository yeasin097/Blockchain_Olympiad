import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../images/Feature/account.jpg'
import img2 from '../../images/Feature/history.png'
import img3 from '../../images/Feature/wishlist.jpg'
import img4 from '../../images/Feature/aboutis.png'

const FeatureSection = () => {
    const navigate = useNavigate();

    const features = [
        { image: img1, title: 'Account Details', link: '/AccountDetail' },
        { image: img2, title: 'Order History', link: '/OrderHistory' },
        { image: img3, title: 'Wishlist', link: '/Wishlist' },
        { image: img4, title: 'Support', link: '/support' }
    ];

    return (
        <section className="bg-green-100 py-3">
            <div className="container mx-auto px-4">
                
                <div className="grid grid-cols-4 gap-4">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden  flex flex-col items-center">
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="flex w-28 h-29 object-cover "
                            />
                            <div className="p-4 text-center">
                                
                                <button
                                    onClick={() => navigate(feature.link)}
                                    className="mt-2 w-full hover:bg-custom_gradient  text-green-900 hover:text-white hover:w-[1000px] hover:h-[40px] text-bold text-1xl"
                                >
                                    {feature.title}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;


