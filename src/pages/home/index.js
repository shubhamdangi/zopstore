import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
    <div className="home" style={{ backgroundColor: "#f7f7f2" }}>
      <Router>
        <Navbar1 />
        <Carousel1 />
        {/* <Search /> */}
        <ComposeModal />
        <Feed />
        <Scroll showBelow={550} />
        <Footer />
      </Router>
    </div>
  );
}

export default Home;
