import { render, screen } from "@testing-library/react";
import { ExpenseForm } from "./expense-form.component";

describe("ExpenseForm component tests", () => {
  it("Should correct rendering", () => {
    render(<ExpenseForm addNewExpense={() => {}} />);
  });
});
