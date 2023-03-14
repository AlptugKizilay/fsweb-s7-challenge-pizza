import React, { useEffect, useState } from "react";
import Order from "../components/Order";

import {
    Nav,
    NavItem,
    NavLink,
    
  } from "reactstrap";
const OrderPage = ({siparis}) => {
  const [sipariss, setSipariss] = useState();

  console.log("siparis orderpage " , sipariss);
  siparis(sipariss);

  
  return (
    <div className="d-flex flex-column mb-2 justify-content-center" >
      <div className="header" style={{background: "#6c5b7c"}}>
        <h1 className="text-center m-4"style={{
            fontSize: "3.5rem",
            
            color: "#f8b595",
            fontFamily: "Satisfy, cursive",
          }} >Teknolojik Yemekler</h1>
        <Nav card fill justified className="border border-start-0 border-end-0">
          <NavItem >
            <NavLink active href="/" className="p-3 mb-2 " style={{color: "#f6c667", fontWeight: "bolder"}}>
              Anasayfa
            </NavLink >
          </NavItem>
          <NavItem >
            <NavLink active href="/pizza" className="p-3 mb-2  " style={{color: "#f6c667", fontWeight: "bolder"}}>
              Seçenekler
            </NavLink>
          </NavItem>
          <NavItem >
            <NavLink active href="/order-pizza" className="p-3 mb-2 " style={{color: "#f6c667", fontWeight: "bolder"}}>
              Sipariş Oluştur
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <Order siparisss={setSipariss} />
    </div>
  );
};
export default OrderPage;
