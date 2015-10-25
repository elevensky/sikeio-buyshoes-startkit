import React, { PropTypes, Component } from 'react';
import Product from './Product';
import { products } from '../data';

class Products extends Component {
  render() {
    let productsList = [];

    for(let key in products) {
      if(products.hasOwnProperty(key)) {
        productsList.push(<Product key={key} product={products[key]} item={products[key].quantity}/>);
      }
    }
    return (
      <div className="products">
        {productsList}
      </div>
    );
  }
}

export default Products;