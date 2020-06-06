import React, { Component } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
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
    console.log(this.state.data);
    return (
      <div className="App">
        <Button variant="primary">Primary</Button>
      </div>
    );
  }
}

export default App;
