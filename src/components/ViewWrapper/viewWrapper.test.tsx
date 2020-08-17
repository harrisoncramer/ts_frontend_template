import React from "react";
import { shallow } from "enzyme";
import ViewWrapper from "./index";

import Dashboard from "../../views/Dashboard";
import Calendar from "../../views/Calendar";
import About from "../../views/About";
import NotFound from "../../views/NotFound";

test("Renders the dashboard view", () => {
  const component = shallow(<ViewWrapper View={Dashboard} />);
  expect(component).toMatchSnapshot();
});
test("Renders the calendar view", () => {
  const component = shallow(<ViewWrapper View={Calendar} />);
  expect(component).toMatchSnapshot();
});
test("Renders the about view", () => {
  const component = shallow(<ViewWrapper View={About} />);
  expect(component).toMatchSnapshot();
});
test("Renders the notfound view", () => {
  const component = shallow(<ViewWrapper View={NotFound} />);
  expect(component).toMatchSnapshot();
});
