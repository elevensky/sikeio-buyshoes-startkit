import React, { PropTypes, Component } from 'react';
import QuantityControl from './QuantityControl';
import { productItems } from '../stores/ProductStore';

import { removeCartItem } from '../stores/actions';

class CartItem extends Component {
  handleRemove() {
    removeCartItem(this.props.cartItem.id);
  }
  render() {
    let { id, quantity } = this.props.cartItem;
    let { name, price, imagePath } = productItems()[id];

    return (
      <div className="cart-item">
        <div className="cart-item__top-part">
          <div className="cart-item__image">
            <img src={imagePath}/>
          </div>
          <div className="cart-item__top-part__middle">
            <div className="cart-item__title">
              {name}
            </div>
            <div className="cart-item__price">
              {quantity > 1 ? "$"+price+" x "+quantity : "$"+price}
            </div>
          </div>
          <img onClick={this.handleRemove.bind(this)} className="cart-item__trash" src="img/trash-icon.svg"/>
        </div>
        <QuantityControl item={this.props.cartItem} />
      </div>
    );
  }
}

export default CartItem;