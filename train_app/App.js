// src/App.js
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import Authenticate from "./components/Authenticate";
import AllTrains from "./components/AllTrains";
import SingleTrain from "./components/SingleTrain";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/authenticate" component={Authenticate} />
          <Route path="/all-trains" component={AllTrains} />
          <Route path="/train/:trainNumber" component={SingleTrain} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
