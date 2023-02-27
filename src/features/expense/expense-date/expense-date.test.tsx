import { render, screen } from "@testing-library/react";
import { ExpenseDate } from "./expense-date.component";

describe("ExpenseDate component tests", () => {
  it("Should correct rendering", () => {
    render(<ExpenseDate date={new Date(2020, 7, 14)} />);

    const monthElement = screen.getByText(/sierpień/i);
    const dayElement = screen.getByText("14");
    const yearElement = screen.getByText("2020");

    expect(monthElement).toBeInTheDocument();
    expect(dayElement).toBeInTheDocument();
    expect(yearElement).toBeInTheDocument();
  });
});
