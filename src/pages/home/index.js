import React from "react";

import {
  Carousel1,
  ComposeModal,
  Footer,
  Navbar1,
  Scroll,
  Search,
} from "../../containers";
import Feed from "../../containers/feed";
import "bootstrap/dist/css/bootstrap.min.css";
function Home() {
  return (
    <div
      className="home"
      style={{ backgroundColor: "#f7f7f2", minHeight: "100vh" }}
    >
      {/* <Navbar1 /> */}
      <Carousel1 />
      {/* <Search /> */}
      <ComposeModal />
      <Feed />
      <Scroll showBelow={550} />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
