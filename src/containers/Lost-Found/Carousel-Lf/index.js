import React from "react";
// import Banner from "./banner.jpg";
// import Banner2 from "./banner2.jpg";
import "./style.css";

export default function CarouselLF() {
  return (
    <>
      <div className="banner-container">
        <div className="banner1-container">
          <h1>LOST AND FOUND</h1>
          {/* <img src={Banner} className="banner1" alt="..." /> */}
        </div>
        <div className="banner2-container">
          <h1>LOST AND FOUND MOBILE</h1>
          {/* <img src={Banner2} className="banner2" alt="..." /> */}
        </div>
      </div>
    </>
  );
}
