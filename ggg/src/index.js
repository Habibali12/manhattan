import React from "react";
import ReactDOM from "react-dom";
// import BestSeller from "./components/bestseller";
// import Description from "./components/description";
// import Header from "./components/header";
// import NewBestSeller from "./components/new_bestseller";
// import SearchFrom from "./components/searchfrom";
import "./styles/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SingleProd from "./components/singleprod";
import Cart from "./components/cart";
import Checkout from "./components/checkout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/SingleProd" element={<SingleProd />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
