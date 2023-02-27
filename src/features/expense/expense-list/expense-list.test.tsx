import { render, screen } from "@testing-library/react";
import { ExpenseList } from "./expense-list.component";

describe("ExpenseList component tests", () => {
  it("Should correct render elements", () => {
    render(
      <ExpenseList
        expenses={[
          {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
          },
          {
            id: "e2",
            title: "New TV",
            amount: 799.49,
            date: new Date(2021, 2, 12),
          },
        ]}
      />
    );

    const sectionElement = screen.getByTestId("expenses");

    expect(sectionElement.children.length).toBe(2);
  });

  it("Should render results not found when is 0 element", () => {
    render(<ExpenseList expenses={[]} />);

    const notFound = screen.getByText(/Results not found/i);
    expect(notFound).toBeInTheDocument();
  });
});
