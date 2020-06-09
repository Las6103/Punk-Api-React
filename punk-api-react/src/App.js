import React, { Component } from "react";
import "./App.css";
import Menu from "./Navbar.js";
import Beerlist from "./Beerlist.js";
import Footer from "./footer.js"
import Container from "react-bootstrap/Container";
import Page from "./Page.js";
import Createbeer from "./Createbeer.js";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <Switch>
        <Route path="/create" render={() => <Createbeer />} />
        <Route
          path="/beers/:id"
          render={(props) => (
            <Page {...props}  />
          )}
        />

        <Route path="/">
          <div className="main">
            <Menu />
            <Container>
              <Beerlist />
              <Footer />
            </Container>
          </div>
        </Route>
      </Switch>
    );
  }
}

export default App;
