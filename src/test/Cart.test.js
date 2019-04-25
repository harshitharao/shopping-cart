import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Cart from '../js/Cart';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cart />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('cart', () => {
  it('should render empty cart', () => {
    const wrapper = shallow(<Cart selectedProducts={[]}/>);
    expect(wrapper.find('li')).toHaveLength(0);
    expect(wrapper.find('p').text()).toContain('Total: 0');
  });

  it('should render cart with products selected', () => {
    const selectedProducts = [
      { name: 'Dove Soap', price: 39.99},
      { name: 'Dove Soap', price: 39.99},
      { name: 'Dove Soap', price: 39.99},
      { name: 'Dove Soap', price: 39.99},
      { name: 'Dove Soap', price: 39.99}
    ];
    const wrapper = shallow(<Cart selectedProducts={selectedProducts}/>);
    expect(wrapper.find('li')).toHaveLength(5);
    expect(wrapper.find('p').text()).toEqual('Total: 199.95');
  });
});
