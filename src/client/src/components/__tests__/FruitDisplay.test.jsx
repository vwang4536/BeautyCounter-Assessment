import React from 'react';
import { shallow } from 'enzyme';
import FruitDisplay from '../FruitDisplay';

describe('FruitDisplay', () => {
  it('renders correctly', () => {
    const mockFruit = {
      name: 'pineapple',
      weight: 5,
      image: 'test'
    }
    const wrapper = shallow(<FruitDisplay fruit={mockFruit} />);
    expect(wrapper).toMatchSnapshot();
  });
})