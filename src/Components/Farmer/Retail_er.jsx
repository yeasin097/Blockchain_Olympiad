import React from 'react';
import { Link } from 'react-router-dom';
import bid from '../Farmer/images/bid.jpg';
import sale from '../Farmer/images/sale.jpg';
import account from '../Farmer/images/account.jpg';
import delivery from '../Farmer/images/delivery.png';
import history from '../Farmer/images/history.png';
import trade from '../Farmer/images/trade.png';
import './FarmerOption.css';
import './Whole_sell.css';


const Retail_er = () => {
  return (
    <div>





    <h3 className='whole'>Retailer</h3>


     
    <div className="Whole-out">
    
      <div className="whole-out1">
        <div>
          <img
            className="bid-img1"
            src={sale}
            alt=""
          ></img>
        </div>
        <div className="whole-out2">
          <Link>
            <span className="whole-out3">Sell products</span>
          </Link>
        </div>
      </div>

      <div className="whole-out1">
        <div>
          <img
            className="bid-img1"
            src={delivery}
            alt=""
          ></img>
        </div>
        <div className="whole-out2">
          <Link to="/">
            <span className="whole-out3">Buy products</span>
          </Link>
        </div>
      </div>
      <div className="whole-out1">
        <div>
          <img
            className="bid-img1"
            src={trade}
            alt=""
          ></img>
        </div>
        <div className="whole-out2">
          <Link to="/Product_sell_history">
            <span className="whole-out3">Product selling History</span>
          </Link>
        </div>
      </div>
      <div className="whole-out1">
        <div>
          <img
            className="bid-img1"
            src={history}
            alt=""
          ></img>
        </div>
        <div className="whole-out2">
          <Link  to="/Product_buy_history">
            <span className="whole-out3">Product buying History</span>
          </Link>
        </div>
      </div>
      <div className="whole-out1">
        <div>
          <img
            className="bid-img1"
            src={account}
            alt=""
          ></img>
        </div>
        <div className="whole-out2">
          <Link>
            <span className="whole-out3">Account details</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Retail_er
