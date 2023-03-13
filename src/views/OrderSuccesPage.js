import React, { useEffect, useState } from "react";
import {Card,CardText,CardTitle} from "reactstrap";
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
  console.log("sucseeses", siparis);

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
        <hr></hr>
        <br></br>
        
        <div>            
          <h5>{lastSiparis.name}</h5>
          <ul>Boyut:<strong> {lastSiparis.boyut}</strong> </ul>
          <ul>Hamur:<strong> {lastSiparis.hamur}</strong> </ul>
          <ul>Ek Malzemeler:<strong>{lastSiparis.ekMalzemeler.join(", ")}</strong>  </ul>
          <ul>Sipariş Notu:<strong> {lastSiparis.text}</strong> </ul>
        </div>
        <Card
              body
              className="my-2"
              style={{
                width: "15rem",
              }}
            >
        <CardTitle tag="h5">Sipariş Toplamı</CardTitle>
              <CardText>
                Adet: <strong>{lastSiparis.count}</strong>
                <br></br>
                Seçimler: <strong>{lastSiparis.secimler} TL</strong> 
                <br></br>
                <span>Toplam: <strong> {lastSiparis.totalPrice} TL</strong> </span>
              </CardText>
              
            </Card>
      </div>
    );
  }
};
export default OrderSuccesPage;
