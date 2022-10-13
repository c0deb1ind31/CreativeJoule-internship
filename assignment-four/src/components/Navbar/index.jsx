import React from "react";
import "./navbar.css";
const Navbar = ({ account, loadWeb3 }) => {
  return (
    <nav className="navbar">
      <div className="logo">NEXUS</div>
      <button className="wallet-btn" onClick={() => loadWeb3()}>
        {account ? account : "Connect Wallet"}
      </button>
    </nav>
  );
};

export default Navbar;
