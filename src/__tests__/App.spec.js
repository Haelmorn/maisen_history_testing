import React from 'react'
import { mount, shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import App from '../App'
import FeatureHistory from '../FeatureHistory';
import FeatureInputFields from '../FeatureInputFields';

configure({ adapter: new Adapter() });
describe('Maisen Feature History App', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  })
  it("Contains FeatureHistory component", () => {
    let wrapper = mount(<App />)
    expect(wrapper.find(FeatureHistory)).toHaveLength(1)
  })
  it("Contains FeatureHistory component", () => {
    let wrapper = mount(<App />)
    expect(wrapper.find(FeatureInputFields)).toHaveLength(1)
  })
});