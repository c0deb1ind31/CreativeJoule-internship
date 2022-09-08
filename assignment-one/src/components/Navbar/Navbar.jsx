import React from "react";
import "./navbar.css";
export default function Navbar() {
  return (
    <div className="navbar ">
      <div className="nav-logo">Foxxy</div>
      <div className="nav-items">
        <ul>
          <li>For Porperties</li>
          <li>For Renters</li>
          <li>Pricing</li>
        </ul>
        <button>Login</button>
      </div>
    </div>
  );
}
