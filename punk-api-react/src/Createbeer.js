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
      first_brewed: "",
      food_pairing: "",
      brewers_tips: "",
      contributed_by: "",
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
        <h2>Create Your Own Beer!</h2>
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
          <Form.Group controlId="formGroupBrewDate">
            <Form.Label>Brew Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insert Brew Date"
              controlid="first_brewed"
              name="first_brewed"
              onChange={formik.handleChange}
              value={formik.values.first_brewed}
            />
          </Form.Group>
          <Form.Group controlId="formGroupFoodPairing">
            <Form.Label>
              Food Pairings <em>* Use a comma to separate food pairings</em>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insert Food Pairing"
              controlid="food_pairing"
              name="food_pairing"
              onChange={formik.handleChange}
              value={formik.values.food_pairing}
            />
          </Form.Group>
          <Form.Group controlId="formGroupBrewingTips">
            <Form.Label>Brewing Tips</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insert Brewing Tips"
              controlid="brewers_tips"
              name="brewers_tips"
              onChange={formik.handleChange}
              value={formik.values.brewers_tips}
            />
          </Form.Group>
          <Form.Group controlId="formGroupCreator">
            <Form.Label>Creator</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insert Creator"
              controlid="contributed_by"
              name="contributed_by"
              onChange={formik.handleChange}
              value={formik.values.contributed_by}
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
