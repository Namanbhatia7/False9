import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import Navbarmain from "./components/navbarmain/navbarmain";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <Navbarmain />
      </div>

      <Switch>
        <Route exact path="/" component={() => <Homepage />} />
      </Switch>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
