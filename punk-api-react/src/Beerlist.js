import React from "react";
import Beer from "./Beer.js";
import Row from "react-bootstrap/Row";
function Beerlist(props) {
  // console.log(props.data);
  return (
    <Row>
      {props.data.map((data) => {
        return <Beer data={data} key={data.name} />;
      })}
    </Row>
  );
}

export default Beerlist;
