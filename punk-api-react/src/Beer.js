import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function Beer(props) {
  console.log(props);
  
  return (
    <Col xs={12} md={2}>
      <Link to={`/beers/${props.data._id}`}>
        <Card>
          <Card.Img variant="top" src={props.data.image_url} />
          <Card.Body>
            <Card.Title>{props.data.name}</Card.Title>
            <Card.Text>
              {props.data.tagline}
            </Card.Text>
            
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default Beer;
