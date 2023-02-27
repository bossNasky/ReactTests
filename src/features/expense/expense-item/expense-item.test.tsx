import { render, screen } from "@testing-library/react";
import { ExpenseItem } from "./expense-item.component";

describe("ExpenseItem component tests", () => {
  it("Should correct rendering", () => {
    render(
      <ExpenseItem
        id="key1"
        title="A Book"
        amount={34.99}
        date={new Date(2020, 7, 14)}
      />
    );

    const titleElement = screen.getByRole("heading", { name: "A Book" });
    const priceElement = screen.getByText(/34.99/);

    expect(titleElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });
});
