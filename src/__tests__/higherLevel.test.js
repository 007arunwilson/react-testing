import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Enzyme from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });



describe("App component", () => {
  it("renders div with class App", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App")).to.have.lengthOf(1);
  });
});
