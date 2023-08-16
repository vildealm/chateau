import React from "react";
import "../styles/Layout.css"
import {Link} from "react-router-dom";

function Layout () {
    return (
        <nav className="navigation">
            <Link to="/" className="brand-name">
                Château de Buros
            </ Link>
      <div
        className="navigation-menu">
        <ul>
          <li>
            <Link to={{pathname: "/booking"}}>Booking</Link>
          </li>
          <li>
            <Link to={{pathname: "/travelinfo"}}>Travel Information</Link>
          </li>
          <li>
            <Link to={{pathname: "/about"}}>About us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Layout;