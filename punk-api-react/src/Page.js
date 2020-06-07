import React from "react";
import Menu from "./Navbar.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useFormik } from "formik";

function Page(props) {
  const content =
    props.data.find((data) => data._id === props.match.params.id) || {};
  console.log(content);
  const formik = useFormik({
    initialValues: {
      name: content.name,
      image_url: content.image_url,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios({
        method: "put",
        url: `http://localhost:8080/beers/id/${content._id}`,
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
      <Button variant="danger" type="submit">Delete</Button>
    </div>
  );
}

export default Page;
