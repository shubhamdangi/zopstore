import "./App.css";
import { About, Home, Premium, Contact, Faq, Careers, Share } from "./pages/";
import { UserContextProvider } from "./contexts/user";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, ScrollToTop, Navbar1, Publish } from "./containers";
import ReqPremium from "./pages/reqPremium";
import ReactGA from "react-ga";
import Lostfound from "./containers/Lost-Found";
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Router>
          <ScrollToTop>
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
              <Route exact path="/careers">
                <Careers />
              </Route>
              <Route exact path="/lostfound">
                <Lostfound />
              </Route>
              <Route exact path="/share">
                <Share />
              </Route>
            </Switch>
            <Footer />
          </ScrollToTop>
        </Router>
      </div>
    </UserContextProvider>
  );
}

export default App;
