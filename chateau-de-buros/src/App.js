import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes ,
  Route,
} from "react-router-dom";

import Booking from "./pages/Booking";
import TravelInfo from "./pages/TravelInfo";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/travelinfo" element={<TravelInfo />} />
          <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
