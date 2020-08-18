import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./index";

describe("About", () => {
  it("should render the About view", () => {
    const { getByText } = render(<About />);
    expect(getByText(/This application was designed/));
  });
});
