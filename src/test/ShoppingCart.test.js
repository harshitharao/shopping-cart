import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import ShoppingCart from '../js/ShoppingCart';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShoppingCart />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('shopping cart', () => {
  it('should render header', () => {
    const wrapper = shallow(<ShoppingCart/>);
    expect(wrapper.find('h1').text()).toBe('Shopping Cart');
  });

  it('list the products', () => {
    const wrapper = shallow(<ShoppingCart/>);
    expect(wrapper.find('ProductList')).toHaveLength(1)
  });

  it('add the product to cart', () => {
    const wrapper = mount(<ShoppingCart />);
    const addClick = wrapper.find('li').at(0);

    expect(addClick.text()).toContain('Dove')

    addClick.find('button').simulate('click');
    const cart = wrapper.find('Cart');

    expect(cart.find('li')).toHaveLength(1);
    expect(cart.find('p').text()).toContain('Total: 39.99');
  })

  it('add the product to cart 5 times', () => {
    const wrapper = mount(<ShoppingCart />);
    const addClick = wrapper.find('li').at(0);

    expect(addClick.text()).toContain('Dove')

    addClick.find('button').simulate('click');
    addClick.find('button').simulate('click');
    addClick.find('button').simulate('click');
    addClick.find('button').simulate('click');
    addClick.find('button').simulate('click');
    const cart = wrapper.find('Cart');

    expect(cart.find('li')).toHaveLength(5);
    expect(cart.find('p').text()).toEqual('Total: 199.95');
  })
});
