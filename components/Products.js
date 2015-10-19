import React, { PropTypes, Component } from 'react';
import Product from './Product';
import {products, cartItems} from '../js/data';

class Products extends Component {
  render() {
    let products = products;
    let cartItems = cartItems;
    let productsList = [];
    for(let key in products) {
      if(products.hasOwnProperty(key)) {
        for(let ckey in cartItems) {
          if(ckey === key) {
            products[key].quantity = cartItems[ckey].quantity;
          }
        }
        productsList.push(<Product key={products[key].id} product={products[key]} item={products[key].quantity}/>);
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