import React from "react";
import "./Card.css";

export default function Card(props) {
  const classes = `card ${props.className}`;
  const names = `name ${props.name}`;
  return (
    <div name={names} className={classes}>
      {props.children}
    </div>
  );
}
