import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderSuccesPage = ({ siparis }) => {
  const [lastSiparis, setLastSiparis] = useState({
    id: 1,
    name: "Galaktik",
    price: 0,
    boyut: "",
    hamur: "",
    text: "",
    count: 1,
    secimler: "",
    totalPrice: "",
  });
  /* console.log("sucseeses", siparis); */

  axios
    .get("https://75e9o.mocklab.io/json/1")
    .then((res) => {
      setLastSiparis(siparis);
      
    })
    .catch((err) => {
      console.error(
        "Product data çekilirken bir hata ile karşılaşıldı > ",
        err
      );
    });

  if (lastSiparis.price === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <h2>Teknolojik Yemekler</h2>
        <div>
          <h4>lezzetin yolda</h4>
          <h2>Sipariş Alındı</h2>
        </div>
        <br></br>
        
        <div>            
          <h5>{lastSiparis.name}</h5>
          <ul>Boyut: {lastSiparis.boyut} </ul>
          <ul>Hamur: {lastSiparis.hamur} </ul>
        </div>
      </div>
    );
  }
};
export default OrderSuccesPage;
