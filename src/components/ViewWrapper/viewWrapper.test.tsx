import React from "react";
import { shallow } from "enzyme";
import ViewWrapper from "./index";

import Dashboard from "../../views/Dashboard";
import Calendar from "../../views/Calendar";
import About from "../../views/About";
import NotFound from "../../views/NotFound";

describe("ViewWrapper", () => {
  it("Should render the Dashboard view", () => {
    const component = shallow(<ViewWrapper View={Dashboard} />);
    expect(component).toMatchSnapshot();
  });
  it("Should render the Calendar view", () => {
    const component = shallow(<ViewWrapper View={Calendar} />);
    expect(component).toMatchSnapshot();
  });
  it("Should render the About view", () => {
    const component = shallow(<ViewWrapper View={About} />);
    expect(component).toMatchSnapshot();
  });
  it("Should render the NotFound view", () => {
    const component = shallow(<ViewWrapper View={NotFound} />);
    expect(component).toMatchSnapshot();
  });
});
