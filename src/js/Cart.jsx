import React, { Component } from 'react';

class Cart extends Component {
  static defaultProps = { selectedProducts: [] }
  render() {
    const { selectedProducts } = this.props;
    return (
      <div>
        <ul>
          {selectedProducts.map((product, index) => {
            return <li key={index}>{product.name}  {product.price}</li>
          })}
        </ul>
        <p>Total: {selectedProducts.reduce((acc, product) => { return acc + product.price}, 0).toFixed(2)}</p>
      </div>
    );
  }
}

export default Cart;
