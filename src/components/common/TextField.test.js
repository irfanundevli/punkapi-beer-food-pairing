import React from 'react';
import { shallow } from 'enzyme';
import MaterialTextField from '@material-ui/core/TextField';
import TextField from './TextField';

describe('TextField Component', () => {
  it('should contain material text field', () => {
    const onChange = () => {};

    const wrapper = shallow(
      <TextField name="name" label="label" onChange={onChange} />
    );

    expect(wrapper.find(MaterialTextField)).toHaveLength(1);
  });
});
