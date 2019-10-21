import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import BeerSearchWithFoodPage from './BeerSearchWithFoodPage';
import SearchButton from '../../common/SearchButton';
import TextField from '../../common/TextField';
import DataTable from '../../common/DataTable';

jest.mock('axios');

describe('BeerSearchWithFoodPage Component', () => {
  let wrapper;

  beforeAll(() => {
    const onChange = () => {};
    wrapper = shallow(<BeerSearchWithFoodPage onChange={onChange} />);
  });

  it('should contain a form inside a container', () => {
    const formWrapper = wrapper.find('form');

    expect(formWrapper).toHaveLength(1);
    expect(formWrapper.parent().is(Container)).toBeTruthy();
  });

  it('should contain a text field inside form', () => {
    const textFieldWrapper = wrapper.find(TextField);

    expect(textFieldWrapper).toHaveLength(1);
    expect(textFieldWrapper.parent().is('form')).toBeTruthy();
  });

  it('should contain a search button to find beers match with food', () => {
    expect(wrapper.find(SearchButton)).toHaveLength(1);
  });

  it('should show greeting message when page is mounted', () => {
    const greetingWrapper = wrapper.find('h3');

    expect(greetingWrapper).toHaveLength(1);
    expect(greetingWrapper.text()).toEqual('Hi Jacek, Enjoy your meal.');
  });

  it('shoud invoke web service on onSubmit', () => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 2,
          name: 'name',
          description: 'description',
          first_brewed: 'first_brewed',
        },
      ],
    });

    const formElement = wrapper.find('form');
    formElement.simulate('submit', {
      preventDefault: () => {},
    });

    expect(axios.get).toHaveBeenCalled();
  });
});
