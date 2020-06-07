import React from "react";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
function Beer(props) {
  console.log(props);
  return (
    <Link to={`/beers/${props.data._id}`}>
      <Col xs={12} md={3}>
        <img src={props.data.image_url} alt={props.data.name} />
        <h2>{props.data.name}</h2>
      </Col>
    </Link>
  );
}

export default Beer;
