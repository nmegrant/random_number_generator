import React, { useState } from "react";
import "./App.css";
import MyTitleBar from "./Components/MyTitleBar";
import Button from "react-bootstrap/Button";

import Switch from "react-switch";

function App() {
  const [roll, setRoll] = useState(0);
  // const [ten, setTen] = useState(false);

  // const value = ten ? 10 : 100;

  function rollDice() {
    setRoll(Math.floor(Math.random() * 10));
  }

  // function handleChange(checked) {
  //   setTen(!checked);
  // }

  return (
    <div className="App">
      <MyTitleBar />
      <Button variant="info" onClick={rollDice}>
        Roll
      </Button>
      {/* <h1>100</h1>
      <Switch
        checked={false}
        onChange={handleChange}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor="#5bc0de"
        offColor="#5bc0de"
      />
      <h1>10</h1> */}
      <h1>{roll}</h1>
    </div>
  );
}

export default App;
