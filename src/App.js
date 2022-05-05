import React from "react";
import "./App.css";
import Cli from "./components/Cli";
import Cloud from "./components/Cloud";
import Footer from "./components/Footer";
import Languages from "./components/Languages";
import Navbar from "./components/Navbar";
import ShowCase from "./components/ShowCase";
import Stats from "./components/Stats";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Features from "./components/Features";
import Docs from "./components/Docs";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <ShowCase />
          <Stats />
          <Cli />
          <Cloud />
          <Languages />
          <Footer />
        </Route>
        <Route exact path="/features">
          <Navbar />
          <Features />
          <Footer />
        </Route>
        <Route exact path="/docs">
          <Navbar />
          <Docs />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
