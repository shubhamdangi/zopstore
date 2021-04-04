import React from "react";
import { Card1, ComposeModal, Navbar, Scroll } from "../../containers";
import Compose from "../../containers/compose";
import Feed from "../../containers/feed";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <ComposeModal />
      <Feed />
      <Scroll showBelow={550} />
    </div>
  );
}

export default Home;
