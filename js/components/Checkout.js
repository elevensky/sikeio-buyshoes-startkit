import React, { PropTypes, Component } from 'react';
import connect from './connect';

import { productItems } from '../stores/ProductStore';
import CartStore from '../stores/CartStore';

class Checkout extends Component {
  componentDidMount() {
    CartStore.addChangeListener(this.forceUpdate.bind(this));
  }

  Checkoutcoupon() {
    return (
      <div>
        <hr className="checkout__divider"/>
        <input type="text" className="checkout__coupon-input" placeholder="coupon code"></input>
      </div>
    );
  }

  render() {
    let { cartItems } = this.props;
    let products = productItems();
    let subtotal = 0;
    for(let key in cartItems) {
      if(cartItems.hasOwnProperty(key)) {
        subtotal += products[key].price*cartItems[key].quantity;
      }
    }
    subtotal = "$" + subtotal.toFixed(2);
    return (
      <div>
        {this.Checkoutcoupon()}

        <div className="checkout__line">
          <div className="checkout__line__label"> Subtotal</div>
          <div className="checkout__line__amount checkout__line__amount--omg-savings"> {subtotal} </div>
        </div>

        <a className="checkout__button">
          <img  className="checkout__button__icon" src="img/cart-icon.svg"/>
          <div className="checkout__button__label">
            Checkout
          </div>
        </a>
      </div>
    );
  }
}

@connect(CartStore, 'cartItems')
class connectCheckout extends Checkout {};

export default connectCheckout;