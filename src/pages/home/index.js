import React, { useEffect } from "react";

import { Carousel1, ComposeModal, Scroll } from "../../containers";
import Feed from "../../containers/feed";
import "bootstrap/dist/css/bootstrap.min.css";
function Home() {
  useEffect(() => {
    document.title = "Zopstore | Buy or Sell Anything at your college campus";
  }, []);

  return (
    <div
      className="home"
      style={{ backgroundColor: "#f7f7f2", minHeight: "100vh" }}
    >
      <Carousel1 />
      <ComposeModal />
      <Feed />
      <Scroll showBelow={550} />
    </div>
  );
}

export default Home;
