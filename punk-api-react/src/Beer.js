import React from "react";
import Col from "react-bootstrap/Col";
function Beer(props) {
  console.log(props);
  return (
    <Col xs={12} md={3}>
      <img src={props.data.image_url} alt={props.data.name} />
      <h2>{props.data.name}</h2>
    </Col>
  );
}

export default Beer;
