import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, amount, date }) => {
  const [titleState, setTitleState] = useState(title);

  const clickHandler = () => {
    setTitleState("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{titleState}</h2>
        <div className="expense-item__price">${amount}</div>
        <button type="button" onClick={clickHandler}>
          Change Title
        </button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
