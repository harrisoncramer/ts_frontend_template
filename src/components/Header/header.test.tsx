import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

test("renders the component", () => {
  const component = shallow(<Header />);
  expect(component).toMatchSnapshot();
});
