import React, { Component } from 'react';
import { shallow } from 'enzyme';
import MainContainer from '../MainContainer';

describe('MainContainer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MainContainer />);
    expect(wrapper).toMatchSnapshot();
  });
})