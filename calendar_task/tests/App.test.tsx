import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";
import "@testing-library/jest-dom";

test("User opens the calendar and changes the delivery date", () => {
  jest.useFakeTimers().setSystemTime(new Date("2024-01-04"));
  render(<App />);

  const calendarButton = screen.getByRole("button");
  userEvent.click(calendarButton);

  const selectedDate = screen.getByText("8");
  userEvent.click(selectedDate);

  const changeDateButton = screen.getByRole("button", { name: "Change date" });
  userEvent.click(changeDateButton);

  expect(screen.getByText("08 January 2024")).toBeInTheDocument();
});
