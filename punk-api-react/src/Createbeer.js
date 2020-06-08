import React from "react";
import Form from "react-bootstrap/Form";
import Menu from "./Navbar.js";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useFormik } from "formik";

function Createbeer() {
  const formik = useFormik({
    initialValues: {
      name: "",
      image_url: "",
      tagline: "",
      description: "",
      food_pairing: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios({
        method: "post",
        url: "http://localhost:8080/beers",
        data: {
          ...values,
          food_pairing: values.food_pairing.split(","),
        },
      });
    },
  });
  return (
    <div>
      <Menu />
      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="formGroupName">
            <Form.Label>Beer Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insert Name"
              controlid="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Form.Group>
          <Form.Group controlId="formGroupImage">
            <Form.Label>Beer Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insert Image URL"
              controlid="image_url"
              name="image_url"
              onChange={formik.handleChange}
              value={formik.values.image_url}
            />
          </Form.Group>
          <Form.Group controlId="formGroupTagline">
            <Form.Label>Tagline</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insert Tagline"
              controlid="tagline"
              name="tagline"
              onChange={formik.handleChange}
              value={formik.values.tagline}
            />
          </Form.Group>
          <Form.Group controlId="formGroupDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insert Description"
              controlid="description"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </Form.Group>
          <Form.Group controlId="formGroupFoodPairing">
            <Form.Label>Food Pairing</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insert Food Pairing"
              controlid="food_pairing"
              name="food_pairing"
              onChange={formik.handleChange}
              value={formik.values.food_pairing}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Createbeer;
