import React from 'react';
import { shallow } from 'enzyme';
import Snackbar from '@material-ui/core/Snackbar';
import ErrorMessageToast from './ErrorMessageToast';
import MessageToast from './MessageToast';

describe('ErrorMessageToast Component', () => {
  it('should display on bottom left', () => {
    const wrapper = shallow(<ErrorMessageToast show message="message" />);

    const snackBarElement = wrapper.find(Snackbar);

    expect(snackBarElement).toHaveLength(1);
    expect(snackBarElement.props().anchorOrigin.vertical).toEqual('bottom');
    expect(snackBarElement.props().anchorOrigin.horizontal).toEqual('left');
  });

  it('should auto hide in 2 seconds', () => {
    const wrapper = shallow(<ErrorMessageToast show message="message" />);

    const snackBarElement = wrapper.find(Snackbar);

    expect(snackBarElement).toHaveLength(1);
    expect(snackBarElement.props().autoHideDuration).toEqual(2000);
  });

  it('should error variant toast', () => {
    const wrapper = shallow(<ErrorMessageToast show message="message" />);

    const messageToastElement = wrapper.find(MessageToast);

    expect(messageToastElement).toHaveLength(1);
    expect(messageToastElement.parent().is(Snackbar)).toBeTruthy();
    expect(messageToastElement.props().variant).toEqual('error');
  });
});
