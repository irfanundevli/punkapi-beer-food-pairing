import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import SearchButton from './SearchButton';

describe('SearchButton Component', () => {
  it('should contain a button', () => {
    const wrapper = shallow(<SearchButton name="search" />);

    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
