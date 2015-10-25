import React, { PropTypes, Component } from 'react';
import Product from './Product';
import {cartItems, products} from '../data';

class Products extends Component {
  render() {
    let Products = products;
    let CartItems = cartItems;
    let productsList = [];
    for(let key in products) {
      if(Products.hasOwnProperty(key)) {
        for(let ckey in CartItems) {
          if(ckey === key) {
            Products[key].quantity = CartItems[ckey].quantity;
          }
        }
        productsList.push(<Product key={Products[key].id} product={Products[key]} item={Products[key].quantity}/>);
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