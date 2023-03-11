import React from "react";
import Order from "../components/Order";
import {
    Nav,
    NavItem,
    NavLink,
    
  } from "reactstrap";
const OrderPage = () => {
  return (
    <div>
      <div className="header">
        <h1>Teknolojik Yemekler</h1>
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
      <Order />
    </div>
  );
};
export default OrderPage;
