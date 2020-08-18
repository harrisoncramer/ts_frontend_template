import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "./index";

describe("Dashboard", () => {
  it("should render the Dashboard view", () => {
    render(<Dashboard />);
  });
});
