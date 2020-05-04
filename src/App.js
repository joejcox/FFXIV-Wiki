import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
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

        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Router>
    </HelmetProvider>
  );
};

export default App;
