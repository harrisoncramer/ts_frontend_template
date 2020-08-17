import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

describe("Header", () => {
  it("Should render the Header", () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
