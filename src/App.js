import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Add this import
import Home from './Pages/Home';
import Farmers from './Pages/Farmer/Farmers';
import AccountDetails from './Pages/Farmer/AccountDetails';
import AddProductForInspection from './Pages/Farmer/AddProductForInspection';
import InspectedProductDetails from './Pages/Farmer/InspectedProductDetails';
import AddProductToInspection from './Pages/Farmer/AddProductToInspection';

import AuctionHistoryPage from './Pages/Farmer/AuctionHistoryPage';
import CreateAuction from './Pages/Farmer/CreateAuction';
import OngoingAuction from './Pages/Farmer/OngoingAuction';
import AuctionItemDetails from './Pages/Farmer/AuctionItemDetails';
import SaleHistorypage from './Pages/Farmer/SaleHistoryPage';
import CreateSale from './Pages/Farmer/CreateSale';
import ConnectWallet from './Components/ConnectWallet/ConnectWallet';
import Biditems from './Components/Farmer/Biditems';
import BidProduct from './Components/Farmer/BidProduct';
import Product_sell_history from './Components/Farmer/Product_sell_history';
import Product_buy_history from './Components/Farmer/Product_buy_history';
import Login from './Components/LoginSignup/Login';
import Register from './Components/LoginSignup/Register';

import Inspectors from './Pages/Inspector/Inspectors';
import AccountDetailsI from './Pages/Inspector/AccountDetailsI';
import ProductForInspectionI from './Pages/Inspector/ProductForInspectionI';
import InspectedProductDetailsI from './Pages/Inspector/InspectedProductDetailsI';
import InspectedProductDetails2I from './Pages/Inspector/InspectedProductDetails2I';
import AddProductToInspectionI from './Pages/Inspector/AddProductToInspectionI';
import Admin from './Pages/Admin/admin';
import Orders from "D:/Blockchain/Blockchain_Olympiad/src/Components/Admin/Pages/Orders";
import Customers from "D:/Blockchain/Blockchain_Olympiad/src/Components/Admin/Pages/Customers";
import Products from "D:/Blockchain/Blockchain_Olympiad/src/Components/Admin/Pages/Products";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/farmer" element={<Farmers />} />
            <Route path="/" element={<Home />} />
            <Route path="/accountdetails" element={<AccountDetails />} />
            <Route path="/addproductforinspection" element={<AddProductForInspection/>}/>
            <Route path="/inspectedproductdetails" element={<InspectedProductDetails />} />
            <Route path="/addproducttoinspection" element={<AddProductToInspection/>} />
            <Route path = "/auctionhistorypage" element={<AuctionHistoryPage />} />
            <Route path = "/createauction" element={<CreateAuction />} />
            <Route path = "/ongoingauction" element={<OngoingAuction />} />
            <Route path = "/auctiondetails" element= {<AuctionItemDetails />} />
            <Route path = "/salehistorypage" element={<SaleHistorypage />} />
            <Route path = "/createsale" element={<CreateSale />} />
            <Route path="/connectwallet" element={<ConnectWallet />} />
            <Route path="/biditems" element={ <Biditems/>} />
            <Route path="/BidProduct/:id" element={ <BidProduct/>} />

            <Route path="/Product_sell_history" element={<Product_sell_history/>} />
            <Route path="/Product_buy_history" element={<Product_buy_history/>} />
	    <Route path="/login" element={<Login />} />
          	<Route path="/register" element={<Register />} />
	    <Route path="/inspector" element={<Inspectors />} />
        
            <Route path="/accountdetails_I" element={<AccountDetailsI />} />
            <Route path="/productforinspection_I" element={<ProductForInspectionI/>}/>
            <Route path="/inspectedproductdetails_I" element={<InspectedProductDetailsI />} />
            <Route path="/inspectedproductdetails2_I" element={<InspectedProductDetails2I />} />
            <Route path="/addproducttoinspection_I" element={<AddProductToInspectionI/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/customers" element={<Customers/>}/>
            <Route path="/products" element={<Products/>}/>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
