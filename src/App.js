import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Page404 from "./components/Page404";
import Home from "./components/Home";
import Header from "./components/Header";
import Profile from "./components/Profile";

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header />
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </HelmetProvider>
  );
};

export default App;
