import { MouseEvent } from "react";
import { ExpenseDate } from "../expense-date/expense-date.component";
import style from "./expense-item.module.css";

export type ExpenseItemProps = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};

const ExpenseItem = function ({ title, amount, date }: ExpenseItemProps) {
  return (
    <div className={style["expense-item"]}>
      <ExpenseDate date={date} />
      <div className={style["expense-item__description"]}>
        <h2>{title}</h2>
        <div className={style["expense-item__price"]}>${amount}</div>
      </div>
    </div>
  );
};

export { ExpenseItem };
