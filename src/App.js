import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  

  return (
    <>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
    </>
  );
};
export default App;
