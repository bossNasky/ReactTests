import style from "./expense-date.module.css";

type ExpenseDateProps = {
  date: Date;
};

const ExpenseDate = function ({ date }: ExpenseDateProps) {
  const day = date.toLocaleString("pl-PL", { day: "2-digit" });
  const month = date.toLocaleString("pl-PL", { month: "long" });
  const year = date.getFullYear();
  return (
    <div className={style["expense-date"]}>
      <div className={style["expense-date__month"]}>{month}</div>
      <div className={style["expense-date__day"]}>{day}</div>
      <div className={style["expense-date__year"]}>{year}</div>
    </div>
  );
};

export { ExpenseDate };
