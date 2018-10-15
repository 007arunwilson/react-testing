import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Enzyme from "enzyme";
import { expect as chaiExpect } from "chai";
import Adapter from "enzyme-adapter-react-16";
import MainLayout from "../containers/MainLayout";
Enzyme.configure({ adapter: new Adapter() });

describe("App component", () => {
  it("App component renders MainLayout", () => {
    const wrapper = shallow(<App />);
    chaiExpect(wrapper.find(MainLayout)).to.have.lengthOf(1);
    //expect(true).toBeTruthy();
  });
});
