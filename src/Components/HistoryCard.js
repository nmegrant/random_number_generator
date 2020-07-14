import React from "react";
import Card from "react-bootstrap/Card";

export default function HistoryCard(props) {
  return (
    <Card
      border="info"
      className="myCard"
      style={{
        background: props.mode.background,
        color: props.mode.color,
        flexDirection: "row",
        justifyContent: "center",
        width: "400px",
        flexWrap: "wrap",
        padding: "10px",
      }}
    >
      {props.history.map((roll, index) => (
        <p key={index} style={{ padding: "5px" }}>
          {roll},{" "}
        </p>
      ))}
    </Card>
  );
}
