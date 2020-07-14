import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default function MyTitleBar(props) {
  return (
    <Jumbotron
      fluid
      style={{ backgroundColor: "rgba(102, 16, 242, 0.2)", padding: "20px" }}
    >
      <Container>
        <h1>RNG</h1>
        <p>Pick the dice you want to roll.</p>
      </Container>
    </Jumbotron>
  );
}
