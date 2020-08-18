import React from "react";
import {
  render,
  screen,
  fireEvent,
  getAllByRole,
} from "@testing-library/react";
import Header from "./index";

describe("Header", () => {
  it("should have header text", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Cloture"));
  });
  it("should open drawer", () => {
    const { getByRole, getByText } = render(<Header />);
    fireEvent.click(getByRole("button"));
    expect(getByText(/Senate/)).toBeVisible();
  });
  //it("should close drawer with x click", () => {
  //const { getByRole, getByText, container } = render(<Header />);
  //fireEvent.click(getByRole("button"));
  //fireEvent.click(screen.getAllByRole("button")[0]);
  //expect(getByText(/Senate/)).not.toBeVisible();
  //});
});
