import React, { useState } from "react";
import "./App.css";
import MyTitleBar from "./Components/MyTitleBar";
import Button from "react-bootstrap/Button";

import Switch from "react-switch";

function App() {
  const [roll, setRoll] = useState(0);
  const [value, setValue] = useState(100);

  function rollDice() {
    setRoll(Math.floor(Math.random() * value));
  }

  return (
    <div className="App">
      <MyTitleBar />
      <Button variant="info" onClick={rollDice}>
        Roll
      </Button>

      <h1>10</h1>

      <Switch
        checked={value}
        onChange={() => {
          if (value === 10) {
            setValue(100);
          } else {
            setValue(10);
          }
        }}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor="#5bc0de"
        offColor="#5bc0de"
      />
      <h1>100</h1>

      <h1>{roll}</h1>
      <h1>{value}</h1>
    </div>
  );
}

export default App;
