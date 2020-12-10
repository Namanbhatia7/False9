import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Homepage from './components/homepage/homepage';
import Navbarmain from './components/navbarmain/navbarmain';
import Competitions from "./components/competitions/competitions";
import {Provider} from 'react-redux'
import store from './redux/store.js'
function App() {
  return (
     <Provider store = {store}>
         <Router>
             <div className = "main-wrapper">
                 <Navbarmain/>


                 <Switch>
                     <Route exact path = "/" component = {()=><Homepage/>}/>
                     <Route path = "/competitions" component = {()=><Competitions/>}/>
                 </Switch>
             </div>
         </Router>
     </Provider>

  );
}

export default App;
