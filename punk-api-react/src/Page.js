import React, { useState, Component } from "react";
import Foodpairing from "./Foodpairing.js";
import Menu from "./Navbar.js";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import axios from "axios";
import { Formik } from "formik";

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: {
        food_pairing: [],
      },
      show: false,
      showUpdate: false,
    };
  }

  componentDidMount() {
    fetch(`http://localhost:8080/beers/id/${this.props.match.params.id}`)
      .then((unparsedData) => unparsedData.json())
      .then((parsedData) => {
        this.setState({ beer: parsedData });
        console.log(this.state.beer);
      });
  }

  update = (values) => {
    axios({
      method: "put",
      url: `http://localhost:8080/beers/id/${this.state.beer._id}`,
      data: values,
    });
  };

  delete = () => {
    return axios({
      method: "delete",
      url: `http://localhost:8080/beers/id/${this.state.beer._id}`,
    });
  };

  handleShowUpdate = () => {
    this.setState({ showUpdate: true });
  };

  handleCloseUpdate = () => {
    this.setState({ showUpdate: false });
  };

  handleUpdate = () => {
    //   formik.handlesubmit bs
    this.setState({ showUpdate: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleDelete = () => {
    this.delete().then(() => {
      this.setState({ show: false });
      this.props.history.push("/");
    });
  };

  render() {
    // const handleUpdate = () => {
    //   // TODO: you were going to figure out how to call formik methods, such as submit
    //   // apart from useing "useFormik({})"
    //   //   formik.handleSubmit();
    //   setShowUpdate(false);
    //   window.location.reload(true);
    // };

    const content = this.state.beer;

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
          <Formik
            initialValues={{
              name: content.name,
              image_url: content.image_url,
              tagline: content.tagline,
              description: content.description,
            }}
            enableReinitialize={true}
            onSubmit={(values) => this.update(values)}
          >
            {() => (
              <Form>
                <Form.Group controlId="formGroupName">
                  <Form.Label>Beer Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter beer name"
                    controlid="name"
                    name="name"
                  />
                </Form.Group>
                <Form.Group controlId="formGroupImage">
                  <Form.Label>Beer Image</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insert Image URL"
                    controlid="image_url"
                    name="image_url"
                  />
                </Form.Group>
                <Form.Group controlId="formGroupTagline">
                  <Form.Label>Tagline</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insert Tagline"
                    controlid="tagline"
                    name="tagline"
                  />
                </Form.Group>
                <Form.Group controlId="formGroupDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insert Description"
                    controlid="description"
                    name="description"
                  />
                </Form.Group>
              </Form>
            )}
          </Formik>
          <Button
            variant="primary"
            type="submit"
            onClick={this.handleShowUpdate}
          >
            Update
          </Button>
          <Button variant="danger" type="submit" onClick={this.handleShow}>
            Delete
          </Button>

          <Modal show={this.state.showUpdate} onHide={this.handleCloseUpdate}>
            <Modal.Header closeButton>
              <Modal.Title>Please confirm</Modal.Title>
            </Modal.Header>
            <Modal.Body>You're about to update this delicious beer!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleCloseUpdate}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleUpdate}>
                Update
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Delete Modal */}
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Please confirm</Modal.Title>
            </Modal.Header>
            <Modal.Body>You're about to delete this delicious beer!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="danger" onClick={this.handleDelete}>
                DELETE
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </div>
    );
  }
}

export default Page;
