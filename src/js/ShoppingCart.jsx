import React, { Component } from 'react';
import ProductList from './ProductList';
import Cart from "./Cart";

const productList = [
  {
    name: 'Dove Soap',
    price: 39.99
  },
  {
    name: 'Pears',
    price: 20
  },
  {
    name: 'colgate',
    price: 40
  }
];

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProducts: []
    }
  }

  onAdd = (product) => {
    this.setState({ selectedProducts: [...this.state.selectedProducts, product] })
  };

  render() {
    return (
      <div>
        <h1>Shopping Cart</h1>
        <ProductList productList={productList} onAdd={this.onAdd}/>
        <Cart selectedProducts={this.state.selectedProducts}/>
      </div>
    );
  }
}

export default ShoppingCart;
