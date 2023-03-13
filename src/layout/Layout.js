import React, {useState} from "react";

import { Route, Routes } from "react-router-dom";
import Order from "../components/Order";
import MainPage from "../views/MainPage";
import OrderPage from "../views/OrderPage";
import OrderSuccesPage from "../views/OrderSuccesPage";


const Layout = () => {
  const[siparis,setSiparis] = useState();
  const siparisDetail = (e) => {
    setSiparis(e);
    console.log("siparisLayout ", siparis);
    
  }

  return (
    <div className="main.container" >
     
      <div className="page-content">
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/order-pizza" element={<OrderPage siparis={siparisDetail} />}/>
          <Route path="/pizza" element={<OrderSuccesPage siparis={siparis}/>}/>
         

        </Routes>
      </div>
    </div>
  );
};
export default Layout;
