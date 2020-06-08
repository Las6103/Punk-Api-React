import React from "react";
import Foodpairing from "./Foodpairing.js";
import Menu from "./Navbar.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import axios from "axios";
import { useFormik } from "formik";

function Page(props) {
  const content = props.data.find(
    (data) => data._id === props.match.params.id
  ) || { food_pairing: [] };
  
  const formik = useFormik({
    initialValues: {
      name: content.name,
      image_url: content.image_url,
      tagline: content.tagline,
      description: content.description,
    },

    enableReinitialize: true,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios({
        method: "put",
        url: `http://localhost:8080/beers/id/${content._id}`,
        data: values,
      });
    },
  });

  const submit = () => {
    alert("this is going to be deleted");
    axios({
      method: "delete",
      url: `http://localhost:8080/beers/id/${content._id}`,
    });
  };

  return (
    <div>
      <Menu />
      <Container>
        <Jumbotron fluid>
          <Image src={content.image_url} alt={content.name} />
          <h2>{content.name}</h2>
          <h3>{content.tagline}</h3>
          <p>{content.description}</p>
          <p>This beer was first brewed in {content.first_brewed}</p>
          <h3>Here are some great food pairings!</h3>
          <Foodpairing data={content.food_pairing} />
          <h2>Brewing Tips</h2>
          <p>{content.brewers_tips}</p>
        </Jumbotron>
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Button variant="danger" type="submit" onClick={submit}>
          Delete
        </Button>
      </Container>
    </div>
  );
}

export default Page;
