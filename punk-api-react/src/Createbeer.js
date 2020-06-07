import React from "react";
import Form from "react-bootstrap/Form";
import Menu from "./Navbar.js";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useFormik } from "formik";

function Createbeer() {
  const formik = useFormik({
    initialValues: {
      name: "",
      image_url: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios({
        method: "post",
        url: "http://localhost:8080/beers",
        data: values,
      });
    },
  });
  return (
    <div>
      <Menu />
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="formGroupName">
          <Form.Label>Beer Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter beer name"
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Createbeer;
