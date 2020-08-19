import React from "react";
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Header from "./index";
import Links from "./links";

describe("Header", () => {
  it("should open drawer", () => {
    const { getByTestId } = render(<Header />);
    fireEvent.click(getByTestId("menuButton"));
    expect(getByTestId("drawer")).toBeVisible();
  });
  it("should close drawer", async () => {
    const { getByTestId, queryByTestId } = render(<Header />);
    fireEvent.click(getByTestId("menuButton"));
    expect(getByTestId("drawer")).toBeVisible();
    fireEvent.click(getByTestId("closeButton"));
    await waitForElementToBeRemoved(getByTestId("drawer"));
    expect(queryByTestId("drawer")).toBeNull();
  });
});

describe("Links", () => {
  it("should render links", () => {
    const setMobileOpen = jest.fn();
    const { getByText } = render(
      <Links
        links={[
          { link: "/ok", label: "ok" },
          { link: "/yes", label: "yes" },
        ]}
        setMobileOpen={setMobileOpen}
      />
    );
    expect(getByText("ok")).toBeInTheDocument();
    expect(getByText("yes")).toBeInTheDocument();
  });

  it("should call callback on click", () => {
    const setMobileOpen = jest.fn();
    const { getByText } = render(
      <Links
        links={[
          { link: "/ok", label: "ok" },
          { link: "/yes", label: "yes" },
        ]}
        setMobileOpen={setMobileOpen}
      />
    );
    fireEvent.click(getByText("ok"));
    expect(setMobileOpen).toHaveBeenCalled();
  });
});
