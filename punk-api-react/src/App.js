import React, { Component } from "react";
import "./App.css";
import Menu from "./Navbar.js";
import Beerlist from "./Beerlist.js";
import Container from "react-bootstrap/Container";
import Page from "./Page.js";
import Createbeer from "./Createbeer.js";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    let url = "http://localhost:8080/beers";
    fetch(url)
      .then((unparsedData) => unparsedData.json())
      .then((parsedData) => {
        this.setState({ data: parsedData });
      });
  }

  render() {
    // console.log(this.state.data);
    return (
      <Switch>
        <Route path="/create" render={() => <Createbeer />} />
        <Route
          path="/beers/:id"
          render={(props) => <Page {...props} data={this.state.data} />}
        />

        <Route path="/">
          <div className="main">
            <Menu />
            <Container>
              <Beerlist data={this.state.data} />
            </Container>
          </div>
        </Route>
      </Switch>
    );
  }
}

export default App;
