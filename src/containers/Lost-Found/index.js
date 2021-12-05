import React, { useEffect } from "react";
import CarouselLF from "../Lost-Found/Carousel-Lf";
import ComposeModalLF from "./Compose-Lf";
import Scroll from "../scroll";
import FeedLF from "./Feed-Lf";

import "bootstrap/dist/css/bootstrap.min.css";
function Lostfound() {
  useEffect(() => {
    document.title = "Zopstore | Lost and Found";
  }, []);

  return (
    <div
      className="home"
      style={{ backgroundColor: "#f7f7f2", minHeight: "100vh" }}
    >
      <CarouselLF />
      <ComposeModalLF />
      <FeedLF />
      {/* <Scroll showBelow={550} /> */}
    </div>
  );
}

export default Lostfound;
