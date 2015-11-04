import React, { PropTypes, Component } from 'react';
import Product from './Product';
import MakeConnectedComponent from './MakeConnectedComponent';
import connect from './connect';

import { addCartItem } from '../stores/actions';

import ProductStore from '../stores/ProductStore';
import CartStore from '../stores/CartStore';
import LikeStore from '../stores/LikeStore';

class Products extends Component {
  render() {
    let { filteredProducts, cartItems, likeItems } = this.props;
    let productsList = [];

    for(let key in filteredProducts) {
      if(filteredProducts.hasOwnProperty(key)) {
        let product = filteredProducts[key];
        //let liked = typeof likeItems[key] !== 'undefined';
        //liked声明为数组和对象判断方式不一致
        let liked = likeItems.indexOf(key) > -1 ? true : false ;
        let inCart = typeof cartItems[key] !== 'undefined';
        productsList.push(
          <Product
            key={key}
            product={product}
            isInCart={inCart}
            isLike={liked}
          />
        );
      }
    }
    return (
      <div className="products">
        {productsList}
      </div>
    );
  }
}

//export default Products;
//module.exports = MakeConnectedComponent(MakeConnectedComponent(MakeConnectedComponent(Products, ProductStore, "productItems"), CartStore, "cartItems"),LikeStore,"likeItems");
/*
JS Decorator实现方式
*/
@connect(ProductStore,"filteredProducts")
@connect(CartStore,"cartItems")
@connect(LikeStore,"likeItems")
class ConnectedProducts extends Products {};

module.exports = ConnectedProducts;