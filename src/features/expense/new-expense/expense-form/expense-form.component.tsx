import { FormEvent, useState } from "react";
import { NewExpenseProps } from "../new-expense.component";
import style from "./expense-form.module.css";

const ExpenseForm = function ({ addNewExpense }: NewExpenseProps) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleInputChange = function (ev: FormEvent) {
    const target = ev.currentTarget as HTMLInputElement;
    setFormData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const clearInputs = function () {
    setFormData({
      title: "",
      amount: "",
      date: "",
    });
  };

  const handleFormSubmit = function (ev: FormEvent) {
    ev.preventDefault();

    const formattedData = {
      ...formData,
      id: Math.random().toString(),
      amount: Number(formData.amount),
      date: new Date(formData.date),
    };

    addNewExpense(formattedData);
    setShowForm(false);
    clearInputs();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {showForm && (
        <div className={style["new-expense__controls"]}>
          <div className={style["new-expense__control"]}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className={style["new-expense__control"]}>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              min="0.01"
              step="0.01"
              value={formData.amount}
              onChange={handleInputChange}
            />
          </div>
          <div className={style["new-expense__control"]}>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              min="2019-01-01"
              max="2022-12-31"
              value={formData.date}
              onChange={handleInputChange}
            />
          </div>
        </div>
      )}
      {showForm ? (
        <div className={style["new-expense__actions"]}>
          <button type="button" onClick={() => setShowForm(false)}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      ) : (
        <button onClick={() => setShowForm(true)}>Add New Expense</button>
      )}
    </form>
  );
};

export { ExpenseForm };
