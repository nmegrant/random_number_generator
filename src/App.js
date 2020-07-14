import React from "react";
import "./App.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Jumbotron
        fluid
        style={{ backgroundColor: "rgba(102, 16, 242, 0.2)", padding: "20px" }}
      >
        <Container>
          <h1>RNGn</h1>
          <p>Pick the dice you want to roll.</p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default App;
