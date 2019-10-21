import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import BeerSearchWithFoodPage from './pages/beerSearchWithFood/BeerSearchWithFoodPage';

describe('App Component', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  it('should contain a page to search beers matching food', () => {
    expect(wrapper.find(BeerSearchWithFoodPage)).toHaveLength(1);
  });
});
