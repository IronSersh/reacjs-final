
import './App.css';

import { BrowserRouter as Router, Switch , Route } from "react-router-dom";

import Home from "./views/home";
import perifericos from "./views/perifericos";
import software from "./views/software";

import Barra from'./barra/barra'


function App() {
  
  return (
    <>
      <Router>
      <div className="App">
        <Barra />
        <Switch >
          <Route path="/Home" component={Home} />
          <Route path="/perifericos" component={perifericos} />
          <Route path="/" component={software} />
        </Switch >
      </div>
    </Router>
    
    </>
  );
}

export default App;
