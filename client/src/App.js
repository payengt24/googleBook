import React from "react";
import Nav from "./components/Nav";
import Save from "./pages/save";
import Home from "./pages/home";
import NoMatch from "./pages/noMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/save" component={Save} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
