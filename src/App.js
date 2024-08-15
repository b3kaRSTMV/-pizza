import React from "react";
import {Routes, Route} from "react-router-dom";
import "./scss/app.scss";
import  Header from "./Components/Header";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Home from "./pages/Homee";



function App() {
  return (
    <div className="wrapper">
     <Header/>
      <div className="content">
        <div className="container">
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="cart" element={<Cart/>}/>
         </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
