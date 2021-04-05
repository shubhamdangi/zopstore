import React from "react";
import {
  Carousel1,
  ComposeModal,
  Footer,
  Navbar1,
  Scroll,
} from "../../containers";
import Compose from "../../containers/compose";
import Feed from "../../containers/feed";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Home() {
  return (
    <div className="home">
      <Navbar1 />
      <Carousel1 />
      <ComposeModal />
      <Feed />
      <Scroll showBelow={550} />
      <Footer />
    </div>
  );
}

export default Home;
