import React, { useState } from "react";
import "./App.css";
import MyTitleBar from "./Components/MyTitleBar";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import Switch from "react-switch";

function App() {
  const [roll, setRoll] = useState(0);
  const [ten, setTen] = useState(false);
  const [rollHistory, setRollHistory] = useState([]);

  const value = ten ? 10 : 100;

  function rollDice() {
    setRoll(Math.floor(Math.random() * value));
    setRollHistory([...rollHistory, roll]);
  }

  return (
    <div className="App">
      <MyTitleBar />
      <Button variant="info" onClick={rollDice}>
        Roll
      </Button>
      <Container style={{ marginTop: "20px" }}>
        <span>
          100
          <Switch
            checked={ten}
            onChange={() => setTen(!ten)}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor="#5bc0de"
            offColor="#5bc0de"
          />
          10
        </span>
      </Container>
      <h1>{roll}</h1>
      <Card style={{ flexDirection: "row", justifyContent: "center" }}>
        {rollHistory.map((roll, index) => (
          <p key={index}>{roll}, </p>
        ))}
      </Card>
    </div>
  );
}

export default App;
