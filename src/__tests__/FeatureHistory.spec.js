import React from 'react'
import renderer from 'react-test-renderer';
import { mount, shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import restoreState  from '../App'
import FeatureHistory from '../FeatureHistory';
import { create } from "react-test-renderer";

configure({ adapter: new Adapter() });
describe('Maisen Feature History Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<FeatureHistory fieldHistory={[["", "", ""]]} restoreState={restoreState}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should increase it's state featureHistory field len by 1 after receiving new input data", () => {
      const wrapper = mount(<FeatureHistory fieldHistory={[["a", "b", "c"]]} />);
      console.log(wrapper)
  })
});