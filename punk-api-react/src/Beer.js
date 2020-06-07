import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
function Beer(props) {
  console.log(props);
  return (
    <Col xs={12} md={3}>
      <Link to={`/beers/${props.data._id}`}>
        <Image src={props.data.image_url} alt={props.data.name} fluid />
        <h3>{props.data.name}</h3>
      </Link>
    </Col>
  );
}

export default Beer;
