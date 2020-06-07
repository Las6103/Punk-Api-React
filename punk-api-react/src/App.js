import React, { Component } from "react";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Beerlist from "./Beerlist.js";
import Container from "react-bootstrap/Container";
import Page from "./Page.js";
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
        <Route
          path="/beers/:id"
          render={(props) => <Page {...props} data={this.state.data} />}
        />

        <Route path="/">
          <div className="main">
            <header>
              <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Punk Beers</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Create</Nav.Link>
                </Nav>
              </Navbar>
            </header>
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
