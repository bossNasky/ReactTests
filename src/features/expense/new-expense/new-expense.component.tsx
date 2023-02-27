import { ExpenseItemProps } from "../expense-item/expense-item.component";
import { ExpenseForm } from "./expense-form/expense-form.component";
import style from "./new-expense.module.css";

export type NewExpenseProps = {
  addNewExpense: (expense: ExpenseItemProps) => void;
};

const NewExpense = function ({ addNewExpense }: NewExpenseProps) {
  return (
    <div className={style["new-expense"]}>
      <ExpenseForm addNewExpense={addNewExpense} />
    </div>
  );
};

export { NewExpense };
