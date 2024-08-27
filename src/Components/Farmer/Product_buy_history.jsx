import React from "react";
import { Link } from "react-router-dom";

import d1 from '../Farmer/images/tomato.jpg';
import d2 from '../Farmer/images/spinach.jpg';
import d3 from '../Farmer/images/pineapple.jpg';
import d4 from '../Farmer/images/cucum.jpg';
import d5 from '../Farmer/images/carrot.jpg';
import d6 from '../Farmer/images/pepper.jpg';
import d7 from '../Farmer/images/apple.jpg';
import d8 from '../Farmer/images/potato.jpg';
import d9 from '../Farmer/images/orange.jpg';
import d10 from '../Farmer/images/orange.jpg';



const ProductData = [
  {
    id: 1,
    image: d1, // Use require to dynamically load the image
    name: "Fresh Tomatoes",
    address: "CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: true,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "Running",
    buyer:"Rakib",
    mobile:"017XXXXXXXX",
    quantity:20,

  },

  {
    id: 2,
    image: d5, // Use require to dynamically load the image
    name: "Fresh Carrots",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: true,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "Running",
    buyer:"Rahim",
    mobile:"017XXXXXXXX",
    quantity:10,
  },

  {
    id: 3,
    image: d2, // Use require to dynamically load the image
    name: "Egyptian Garlic",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: true,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "Running",
    buyer:"Rahim",
    mobile:"017XXXXXXXX",
    quantity:20,
  },

  {
    id: 4,
    image: d3, // Use require to dynamically load the image
    name: "Brussels",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: true,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "Running",
    buyer:"Rahim",
    mobile:"017XXXXXXXX",
    quantity:10,
  },

  {
    id: 5,
    image: d9, // Use require to dynamically load the image
    name: "Bangladeshi Orange",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: false,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "Running",
    buyer:"Rahim",
    mobile:"017XXXXXXXX",
    quantity:30,
  },

  {
    id: 6,
    image: d1, // Use require to dynamically load the image
    name: "Fresh Red Tomatoes",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: true,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "Running",
    buyer:"Rahim",
    mobile:"017XXXXXXXX",
    quantity:20,
  },

  {
    id: 7,
    image: d8, // Use require to dynamically load the image
    name: "Fresh Red Tomatoes",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: true,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "End",
    buyer:"Rahim",
    mobile:"017XXXXXXXX",
    quantity:10,
  },

  {
    id: 8,
    image: d6, // Use require to dynamically load the image
    name: "Fresh Red Tomatoes",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: false,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "End",
    buyer:"Rahim",
    mobile:"017XXXXXXXX",
    quantity:20,
  },
];
const Product_buy_history = () => {
  return (
    <div className="p_sell_out2">
      <div className="cartout1">
        <div className="Out1">
          <div className="border-t border-green-300">
            <table className="content-table">
              <thead>
                <tr>
                  <th>Seller</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Total amount</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                
                {ProductData.map((item, index) => (
                  <tr key={index}>
                     <td className="">
                      <div className="">
                            {item.buyer}
                      </div>
                      <div className="tab-cont-name">
                     
                           {item.mobile}
                 
                      </div>
                    </td>
                    <td className="">
                      <div className="tab-cont-img2">
                       
                          <img
                            className="tab-img-cont"
                            src={item.image}
                            alt=""
                          ></img>
                
                      </div>
                      <div className="tab-cont-name">
                     
                          {item.name}
                  
                      </div>
                    </td>
                 
                    <td>{item.quantity}</td>
                     <td>TK.{item.basePrice}</td>
                    <td>TK.{item.endTime}</td>
        
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_buy_history;
