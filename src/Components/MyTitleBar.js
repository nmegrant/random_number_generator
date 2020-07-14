import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import Switch from "react-switch";

export default function MyTitleBar(props) {
  return (
    <Jumbotron
      fluid
      style={{
        backgroundColor: "rgba(102, 16, 242, 0.2)",
        padding: "20px",
        dislay: "flex",
      }}
    >
      <Container>
        <h1>RNG</h1>{" "}
        <span>
          light mode
          <Switch
            checked={props.darkMode}
            onChange={props.changeDarkMode}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor="#5bc0de"
            offColor="#000000"
          />{" "}
          dark mode
        </span>
        <p>Pick the dice you want to roll.</p>
      </Container>
    </Jumbotron>
  );
}
