import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Routes} from "./pages/home/routs";


class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Routes} />
      </Router>
    );
  }
}

export default App;