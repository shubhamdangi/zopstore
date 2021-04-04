import "./App.css";
import { Home } from "./pages/";
import { UserContextProvider } from "./contexts/user";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Home />
      </div>
    </UserContextProvider>
  );
}

export default App;
