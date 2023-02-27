import { ChangeEvent } from "react";
import style from "./expense-filter.module.css";

type ExpensesFilterProps = {
  year: number;
  setNewYear: (newYear: number) => void;
};

const ExpensesFilter = ({ setNewYear, year }: ExpensesFilterProps) => {
  const handleSelectChange = function (ev: ChangeEvent) {
    const target = ev.target as HTMLSelectElement;
    setNewYear(Number(target.value));
  };

  return (
    <div className={style["expenses-filter"]}>
      <div className={style["expenses-filter__control"]}>
        <label>Filter by year</label>
        <select onChange={handleSelectChange} value={year}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export { ExpensesFilter };
