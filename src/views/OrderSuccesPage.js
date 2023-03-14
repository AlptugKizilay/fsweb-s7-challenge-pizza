import React, { useEffect, useState } from "react";
import { Card, CardText, CardTitle } from "reactstrap";
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
      <div className="d-flex flex-column align-items-center" style={{width:"60%", margin:".1rem 20%"}}>
        <h2 style={{fontSize: "3.5rem",
            fontWeight: "bolder",
            color: "white",
            fontFamily: "Satisfy, cursive",}} >Teknolojik Yemekler</h2>
        
        <h4 style={{fontFamily: "Satisfy, cursive",}}>lezzetin yolda</h4>
        <h2>Sipariş Alındı</h2>
       

        <hr></hr>
        <br></br>

        <div className="border border-warning rounded-5 p-3" style={{
            maxWidth: "50%",
          }}>
          <h5 className="text-center fs-4">{lastSiparis.name}</h5>
          <ul className="p-1">
            Boyut:<strong> {lastSiparis.boyut}</strong>{" "}
          </ul>
          <ul className="p-1">
            Hamur:<strong> {lastSiparis.hamur}</strong>{" "}
          </ul>
          <ul className="p-1">
            Ek Malzemeler:<strong>{lastSiparis.ekMalzemeler.join(", ")}</strong>{" "}
          </ul>
          <ul className="p-1">
            Sipariş Notu:<strong> {lastSiparis.text}</strong>{" "}
          </ul>
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
            <span>
              Toplam: <strong> {lastSiparis.totalPrice} TL</strong>{" "}
            </span>
          </CardText>
        </Card>
      </div>
    );
  }
};
export default OrderSuccesPage;
