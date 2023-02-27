import { useState } from "react";
import { ExpensesFilter } from "../expense-filter/expense-filter.component";
import {
  ExpenseItem,
  ExpenseItemProps,
} from "../expense-item/expense-item.component";
import style from "./expense-list.module.css";

type ExpenseListProps = {
  expenses: ExpenseItemProps[];
};

const ExpenseList = function ({ expenses }: ExpenseListProps) {
  const [year, setYear] = useState(2021);

  const setNewYear = function (newYear: number) {
    setYear(newYear);
  };

  const filteredData = expenses.filter(
    (expense) => expense.date.getFullYear() === year
  );

  return (
    <div className={style["expenses"]}>
      <ExpensesFilter year={year} setNewYear={setNewYear} />
      {filteredData.length > 0 ? (
        filteredData.map((expense) => (
          <ExpenseItem key={expense.id} {...expense} />
        ))
      ) : (
        <p>Results not found</p>
      )}
    </div>
  );
};

export { ExpenseList };
