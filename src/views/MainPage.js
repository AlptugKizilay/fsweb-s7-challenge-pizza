import React from "react";
import { Button, Form } from "reactstrap";

const MainPage = () => {
  return (
    <div className="d-flex flex-column align-items-center"
      style={{
        height: "100vh",
        maxWidth: "100vw",
        maxHeight: "100vh",
        fontFamily: "Barlow, sans-serif",
        background: "#155263",
      }}
    >
      <div className="d-flex flex-column align-items-center">
        <h2
          style={{
            margin: "5rem",
            fontSize: "3.5rem",
            fontWeight: "bolder",
            color: "white",
            fontFamily: "Satisfy, cursive",
            /* font-family: 'Barlow', sans-serif;
            font-family: 'Quattrocento', serif;
            font-family: 'Satisfy', cursive; */
          }}
        >
          Teknolojik Yemekler
        </h2>
        <h1
          style={{
            textAlign: "center",
            fontSize: "4.5rem",
            fontWeight: "bolder",
            color: "#ffc93c",
          }}
        >
          KOD ACIKTIRIR
          <br></br>
          PIZZA DOYURUR
        </h1>

        <Button
          id="order-button"
          color="warning"
          href="/order-pizza"
          style={{
            margin: "2rem",
            fontWeight: "bolder",
          }}
          data-test-id="main-order-button"
        >
          SİPARİŞ VER
        </Button>

        <img
          className="main-Banner"
          src={require("../assets/esnek-form-banner.png")}
          style={{
            maxWidth: "80vw",
            maxHeight: "80vh",
          }}
        />
      </div>
    </div>
  );
};
export default MainPage;
