import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Homepage from './components/homepage/homepage';
import Navbarmain from './components/navbarmain/navbarmain';
function App() {
  return (
    <Router>
      <div className = "main-wrapper">
        <Navbarmain/>
      </div>

      <Switch>
        <Route exact path = "/" component = {()=><Homepage/>}/>
      </Switch>
    </Router>
  );
}

export default App;
