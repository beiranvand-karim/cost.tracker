/* global expect, describe, it, beforeEach */
import React from "react";
import renderer from "react-test-renderer";
import {shallow} from "enzyme";
import CostTable from "../components/CostTable";
import costs from "../__helpers__/costs";

describe('CostTable', () => {

   it('should render without crashing', () => {
      shallow(<CostTable costs={costs}/>)
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<CostTable costs={costs}/>).toJSON();
      expect(tree).toMatchSnapshot()
   });

});
