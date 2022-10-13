import React from "react";
import "./productcard.css";
export default function ProductCard() {
  return (
    <div className="card-container">
      <div className="figma-embed">
        <iframe
          style={{ border: "none" }}
          title="figma"
          width="100%"
          height="100%"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FsCMKCETQcIra14qJuyBHYX%2FHitchhiking%3Fnode-id%3D107%253A12"
          allowfullscreen
        ></iframe>
      </div>
      <div className="card-body">
        <h2>Mordern UI Dashboard Kit</h2>
        <p id="head">Owner</p>
        <p id="value">0xfEf7fF88995c62982eE5a463956d7c6301291EFD</p>
        <p id="head">Price</p>
        <p id="value">10 Matic</p>
        <button className="buy-btn"> Buy </button>
      </div>
    </div>
  );
}
