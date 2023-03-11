import React from "react";

import { Route, Routes } from "react-router-dom";
import Order from "../components/Order";
import MainPage from "../views/MainPage";
import OrderPage from "../views/OrderPage";
import OrderSuccesPage from "../views/OrderSuccesPage";


const Layout = () => {
  return (
    <div className="main.container">
     
      <div className="page-content">
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/order-pizza" element={<OrderPage />}/>
          <Route path="/pizza" element={<OrderSuccesPage />}/>

        </Routes>
      </div>
    </div>
  );
};
export default Layout;
