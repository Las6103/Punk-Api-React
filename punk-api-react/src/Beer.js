import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Beer.css";
import { Link } from "react-router-dom";
function Beer(props) {
  
  
  return (
    <Col xs={12} md={4}>
      <Link to={`/beers/${props.data._id}`}>
        <Card>
          <Card.Img className="img" variant="top" style={{ backgroundImage: `url(${props.data.image_url})` }} />
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
