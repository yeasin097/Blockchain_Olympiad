import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import Product from './Components/Product/Product';
import RetailProd from './Components/Product/RetailProd';
import Home from './Page/Home';
import WholeProd from './Components/Product/WholeProd';
import TopProducts from './Components/TopProducts/TopProducts';
import Vegetable from './Components/Vegetable/Vegetable';
import WholeSale from './Components/Farmers_prod/WholeSale'
import Cart from './Components/Cart/Cart';
import Review from './Components/Review/Review_about';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import Farmer from './Components/Farmers_prod/Farmer'
import Retailor from './Components/Farmers_prod/Retailor'
import Feature from './Components/Feature/Feature'
import Wishlist from './Components/Wishlist/Wishlist'
import ProceedCheckOut from './Components/ProceedCheckOut/ProceedCheckOut'
import OrderHistory from './Components/OrderHistory/OrderHistory'
import AccountDetail from './Components/AccountDetail/AccountDetail'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Review_about from './Components/Review/Review_about';
import Rev from './Components/Review/Rev';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/Feature" element={<Feature />} />
        <Route path="/topproducts" element={<TopProducts />} />

        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/farmer" element={<Farmer />} />
        
        <Route path="/Cart" element={<Cart />} />
        <Route path="/vegetable" element={<Vegetable />} />
        
        <Route path="/WholeSale" element={<WholeSale />} />
        <Route path="/WholeProd/:id" element={<WholeProd />} />
        <Route path="/Review" element={<Review_about />} />
        <Route path="/Rev" element={<Rev />} />
        <Route path="/Retailor" element={<Retailor />} />
        <Route path="/RetailProd/:id" element={<RetailProd />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/OrderHistory" element={<OrderHistory />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path ="/ProceedCheckOut" element ={<ProceedCheckOut/>}/>
        
        <Route path="/AccountDetail" element={<AccountDetail/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
