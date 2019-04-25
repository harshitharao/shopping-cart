import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    const { productList, onAdd } = this.props;
    return (
      <ul>
        {productList.map((product) => {
          return <li key={product.name}>{product.name}  {product.price} <button onClick={() => onAdd(product)}>Add</button></li>
        })}
      </ul>
    );
  }
}

export default ProductList;
