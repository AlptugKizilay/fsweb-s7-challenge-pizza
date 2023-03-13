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

  /* siparis(sipariss) */
  return (
    <div className="d-flex flex-column mb-2 justify-content-center" >
      <div className="header">
        <h1 className="text-center">Teknolojik Yemekler</h1>
        <Nav card fill justified>
          <NavItem>
            <NavLink active href="/">
              Anasayfa
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="/pizza" >
              Seçenekler
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="/order-pizza">
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
