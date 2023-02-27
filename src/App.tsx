import {
  ExpenseItemProps,
  ExpenseList,
  ExpensesFilter,
  NewExpense,
} from "@features/expense";
import { Fragment, useState } from "react";

const App = function () {
  const [expenses, setExpenses] = useState(expensesList);

  const addNewExpense = function (expense: ExpenseItemProps) {
    setExpenses((prevState) => [...prevState, expense]);
  };

  return (
    <Fragment>
      <NewExpense addNewExpense={addNewExpense} />
      <ExpenseList expenses={expenses} />
    </Fragment>
  );
};

const expensesList = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

export { App };
