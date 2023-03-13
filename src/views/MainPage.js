import React from "react";
import { Button, Form } from "reactstrap";
import background from "../assets/mvp-banner.png";

const MainPage = () => {
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{
        backgroundImage: `url(${background})`,
        height:"100vh",
        maxWidth: "100vw",
        maxHeight: "100vh",
      }}
    >
      <div className="d-flex flex-column align-items-center">
        <h2
          style={{
            margin: "5rem",
          }}
        >
          Teknolojik Yemekler
        </h2>
        <h1 style={{ textAlign: "center" }}>
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
          }}
        >
          SİPARİŞ VER
        </Button>
        {/* <img className="main-Banner" src={require("../assets/mvp-banner.png")} style={{ maxWidth: "50vw", maxHeight: "50vh" }} /> */}
      </div>
    </div>
  );
};
export default MainPage;
