import React from 'react';
import { shallow } from 'enzyme';
import MaterialButton from '@material-ui/core/Button';
import Button from './Button';

describe('Button Component', () => {
  it('should contain material button', () => {
    const wrapper = shallow(<Button name="name" label="label" />);

    expect(wrapper.find(MaterialButton)).toHaveLength(1);
  });
});
