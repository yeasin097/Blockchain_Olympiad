import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import Logo from '../../images/hero/logo1.jpg';

const Menu = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "Farmers' Product", link: "/Farmer" },
    { id: 3, name: "Retailers' Product", link: "/Retailor" },
    { id: 4, name: "Wholesalers' Product", link: "/WholeSale" },
    { id: 5, name: "Cart", link: "/Cart" },
];

const Navbar = () => {
    const navigate = useNavigate(); // Initialize navigate function

    return (
        <div>
            <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
                <div className="bg-white py-2">
                    <div className="container flex justify-between items-center">
                        <div>
                            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                                <img src={Logo} alt="Logo" className="w-14" />
                                <h1 className='text-xl italic text-green-800'>Harvest <br /> Home</h1>
                            </a>
                        </div>
                        <div data-aos="zoom-in" className="flex justify-center py-2">
                            <ul className="sm:flex hidden items-center gap-4">
                                {Menu.map((data) => (
                                    <li key={data.id}>
                                        <a
                                            href={data.link}
                                            className="inline-block px-4 hover:text-primary duration-200 text-bold"
                                        >
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative flex items-center">
                            <button className="group relative cursor-pointer bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-black py-0 px-3 rounded-full ">
                                <a href="#" className="flex items-center gap-[2px] py-2">
                                    Login/Signup
                                    <span>
                                        <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                                    </span>
                                </a>
                                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                                    <ul>
                                        <li>
                                            <a
                                                href="#login"
                                                className="block px-0 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                                            >
                                                Login
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#signup"
                                                className="block px-0 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                                            >
                                                Signup
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </button>

                            <button
                                onClick={() => navigate('/Cart')} // Use navigate to change route
                                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-2 px-6 rounded-full flex items-center gap-2 group ml-2"
                            >
                                Order
                                <FaCartShopping className='text-xl text-black drop-shadow-sm cursor-pointer' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
