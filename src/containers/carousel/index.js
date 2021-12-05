import React from "react";
import Banner from "./banner-pc.png";
import Banner2 from "./mini.png";
import "./style.css";

export default function Carousel() {
  return (
    <>
      <div className="banner-container">
        <div className="banner1-container">
          <img src={Banner} className="banner1" alt="..." />
        </div>
        <div className="banner2-container">
          <img src={Banner2} className="banner2" alt="..." />
        </div>
      </div>
    </>
  );
}
