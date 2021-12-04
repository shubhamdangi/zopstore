import React from "react";
import Banner from "./lost1.png";
// import Banner2 from "./banner2.jpg";
import "./style.css";

export default function CarouselLF() {
  return (
    <>
      <div className="banner-containerLF">
        <div className="banner1-container">
          {/* <h1>LOST AND FOUND</h1> */}
          <img src={Banner} className="bannerLF" alt="LOST AND FOUND ICON" />
        </div>
        <div className="banner2-container">
          <img src={Banner} className="bannerLFM" alt="LOST AND FOUND ICON" />
        </div>
          <h2 >Lost or Found anything at your college campus?</h2>
      </div>
      
    </>
  );
}
