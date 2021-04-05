import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./banner.jpg";

export default function Carousel() {
  return (
    <>
      <div
        className="blankdiv"
        style={{
          height: "15vh",
          backgroundColor: "#f7f7f2",
        }}
      ></div>
      <div
        className="carousel"
        style={{
          width: "100%",
          height: "10vw",
          margin: "0 0 10vw 0",
        }}
      >
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Banner} class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
