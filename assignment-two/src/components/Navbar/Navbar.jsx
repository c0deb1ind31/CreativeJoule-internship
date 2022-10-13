import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
export default function Navbar() {

  const [path, setPath] = useState("Hello");
  const current_path = useLocation();

  useEffect(() => {
    setPath(current_path.pathname);
  }, [current_path]

  );

  return (
    <nav>
      <h3>NETFLIX</h3>
      <ul>
        <li className={path==="/"? "active" : null}>
          <Link to="/"> Home</Link>
        </li>
        <li className={path==="/aboutus"? "active" : null}>
          <Link to="/aboutus"> About us</Link>
        </li>
  
        <li className={path==="/contactus"? "active" : null}>
          <Link to="/contactus">Contact us</Link>
        </li>


      </ul>
    </nav>
  );
}
