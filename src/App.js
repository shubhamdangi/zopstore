import "./App.css";
import { About, Home, Premium, Contact, Faq } from "./pages/";
import { UserContextProvider } from "./contexts/user";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Navbar1, Publish } from "./containers";
import ReqPremium from "./pages/reqPremium";
// import Publish from "./pages/publish-page";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Router>
          <Navbar1 />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/premium">
              <Premium />
            </Route>
            <Route exact path="/premium/apply">
              <ReqPremium />
            </Route>
            <Route exact path="/publish">
              <Publish />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/faq">
              <Faq />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </UserContextProvider>
  );
}

export default App;
