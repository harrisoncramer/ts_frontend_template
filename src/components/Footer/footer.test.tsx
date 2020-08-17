import React from "react";
import { shallow } from "enzyme";
import Footer from "./index";

describe("Footer", () => {
  it("Should render the Footer", () => {
    const component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
