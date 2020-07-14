import React from "react";
import Card from "react-bootstrap/Card";
import "./HistoryCard.css";

export default function HistoryCard(props) {
  return (
    <Card
      border="info"
      className="myCard"
      style={{
        background: props.mode.background,
        color: props.mode.color,
      }}
    >
      {props.history.map((roll, index) => (
        <p key={index}>{roll}, </p>
      ))}
    </Card>
  );
}
