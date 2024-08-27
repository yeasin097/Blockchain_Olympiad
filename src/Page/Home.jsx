import React from 'react';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';
import TopProducts from '../components/TopProducts/TopProducts';
import Vegetable from '../components/Vegetable/Vegetable';
import Review_about from '../components/Review/Review_about';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <TopProducts />
      <Products />
      <Vegetable />
      <Review_about />
      <Footer />
    </div>
  );
}

export default Home;
