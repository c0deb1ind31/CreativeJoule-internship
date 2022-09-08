import React from "react";
import "./hero.css";
import heroImage from "../../assets/hero.webp";
export default function Hero() {
  return (
    <div className="hero-section">
      <img className="hero-img" src={heroImage} alt="hero" srcset="" />
    </div>
  );
}
