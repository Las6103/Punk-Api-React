import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Menu() {
  return (
    <header>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Punk Beers</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/create">Create</Nav.Link>
          <Nav.Link href="/update">Update</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
}

export default Menu;
