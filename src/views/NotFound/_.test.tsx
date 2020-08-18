import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "./index";

describe("NotFound", () => {
  it("should render the NotFound view", () => {
    const { getByText } = render(<NotFound />);
    expect(getByText("Sorry, that page could not be found"));
  });
});
