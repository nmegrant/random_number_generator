import React, { useState } from "react";
import "./App.css";
import MyTitleBar from "./Components/MyTitleBar";
import Button from "react-bootstrap/Button";

function App() {
  const [roll, setRoll] = useState(0);

  function rollDice(dice) {
    setRoll(Math.floor(Math.random() * 10));
  }

  return (
    <div className="App">
      <MyTitleBar />
      <Button onClick={rollDice}>Roll</Button>
      <h1>{roll}</h1>
    </div>
  );
}

export default App;
