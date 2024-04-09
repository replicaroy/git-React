import { useState } from "react";
import { BrowserRouter  } from "react-router-dom";
import "./App.css";
import Navbars from "./component/Navbars";
import Mainrouter from './component/Mainrouter'
import Footer from "./component/Footer";

function App() {

  return (
    <>
      <Navbars />
    <Mainrouter/>
    
    <Footer/>
    </>
  );
}

export default App;
