import React, { Component } from "react";
import Beer from "./Beer.js";
import Row from "react-bootstrap/Row";

class Beerlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://punk-api-beers.herokuapp.com/beers")
      .then((unparsedData) => unparsedData.json())
      .then((parsedData) => {
        this.setState({ data: parsedData });
      });
    console.log("works");
  }

  render() {
    return (
      <Row>
        {this.state.data.map((data) => {
          return <Beer data={data} key={data.name} />;
        })}
      </Row>
    );
  }
}

export default Beerlist;
