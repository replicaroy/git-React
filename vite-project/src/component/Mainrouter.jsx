import React from "react";
import { Routes, Route } from "react-router-dom";
import Homes from "./Home/";
import Cartpage from "./Cartpage";
import Productpage from "./Productpage/";
import Errorpage from "./Errorpage";

const Mainrouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homes />} />;
        <Route path="cartpage" element={<Cartpage />} />;
        <Route path="productpage" element={<Productpage />} /> ;       
        <Route path="/*" element={<Errorpage />} /> ;
      </Routes>
    </div>
  );
};

export default Mainrouter;
