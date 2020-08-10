import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Input';

describe('Input', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper).toMatchSnapshot();
  });

  describe(`when user clicks on 'Get Fruit!' button`, () => {
    it('should call getFruit correctly', () => {
      const onButtonClickMock = jest.fn();
      const wrapper = shallow(
        <Input
          getFruit={onButtonClickMock}
        />
      );

      const button = wrapper.find('.fruitButton');
      button.simulate('click');

      expect(onButtonClickMock).toHaveBeenCalledTimes(1);
    });
  })

  describe('when setText is called', () => {
    it('should update the state', () => {
      const mockEvent = {
        target: {
          name: 'inputText',
          value: 'test'
        }
      };

      const expected = {
        inputText: 'test'
      };

      const wrapper = shallow(<Input />);
      wrapper.instance().setText(mockEvent);
      
      expect(wrapper.state()).toEqual(expected);
    });
  })
})