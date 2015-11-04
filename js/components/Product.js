import React, { PropTypes, Component } from 'react';
import QuantityControl from './QuantityControl';
import {cartItems} from '../stores/CartStore';
import LikeStore from '../stores/LikeStore';
import { addCartItem } from '../stores/actions';

class Product extends Component {
  handleClick(e) {
    e.preventDefault();
    addCartItem(this.props.product.id);
  }

  likeItem(e) {
    let { id } = this.props.product;
    LikeStore.toggleLike(id);
  }

  getcartnum() {
    if(this.props.isInCart) {
      let product = cartItems()[this.props.product.id]
      return (<QuantityControl item={product} variant="gray"/>);
    } else {
      return (
        <a
          className="product__add"
          onClick={this.handleClick.bind(this)}
        >
        <img className="product__add__icon" src="img/cart-icon.svg"/>
        </a>
      );
    }
  }

  render() {
    let key = this.props.key;
    let { name, price, imagePath } = this.props.product;
    return (
      <div className="product">
        <div className="product__display">
          <div className="product__price">
            {"$"+price}
          </div>

          <div className="product__img-wrapper">
            <img className="product__img" alt={name} src={imagePath}/>
          </div>

          {this.getcartnum()}
        </div>

        <div className="product__description">
          <div className="product__name">
            {name}
          </div>
          <img
            onClick={this.likeItem.bind(this)}
            className="product__heart"
            src={this.props.isLike ? "img/heart-liked.svg" : "img/heart.svg"}
          />
        </div>
      </div>
    );
  }
}

export default Product;