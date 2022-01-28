import React from "react";
import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  let month = props.date.toLocaleString("en-GB", { month: "long" });
  let year = props.date.toLocaleString("en-GB", { year: "numeric" });
  let day = props.date.toLocaleString("en-GB", { day: "numeric" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
