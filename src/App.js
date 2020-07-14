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
  const [darkMode, setDarkMode] = useState(false);

  function changeDarkMode() {
    setDarkMode(!darkMode);
  }

  const value = ten ? 10 : 100;
  const mode = darkMode
    ? { background: "#222", color: "#FFF" }
    : { background: "#FFF", color: "#222" };

  function rollDice() {
    setRoll(Math.floor(Math.random() * value));
    setRollHistory([...rollHistory, roll]);
  }

  return (
    <div
      className="App"
      style={{
        background: mode.background,
        color: mode.color,
        height: "2000px",
      }}
    >
      <MyTitleBar darkMode={darkMode} changeDarkMode={changeDarkMode} />
      <Button variant="info" onClick={rollDice}>
        Roll
      </Button>
      <Container style={{ marginTop: "20px", justifyContent: "center" }}>
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

        <h1>{roll}</h1>
        <Card
          border="info"
          style={{
            flexDirection: "row",
            justifyContent: "center",
            background: mode.background,
            color: mode.color,
            width: "200px",
            flexWrap: "wrap",
          }}
        >
          {rollHistory.map((roll, index) => (
            <p key={index}>{roll}, </p>
          ))}
        </Card>
      </Container>
    </div>
  );
}

export default App;
