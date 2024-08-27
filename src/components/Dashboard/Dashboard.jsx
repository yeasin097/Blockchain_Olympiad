import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Hero from '../Hero/Hero';
import Feature from '../Feature/Feature'

const Dashboard  = () => {
  return (
    <div>
         
   <Hero />
   <Feature />

    </div>
  
  )
}

export default Dashboard