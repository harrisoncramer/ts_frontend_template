import React from "react";
import { shallow } from "enzyme";
import Footer from "./index";

test("renders the component", () => {
  const component = shallow(<Footer />);
  expect(component).toMatchSnapshot();
});
