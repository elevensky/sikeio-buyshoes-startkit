import React, { PropTypes, Component } from 'react';

const CartStore = require("../stores/CartStore");

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
    let cartitems = CartStore.getCartitems();
    let subtotal = 0;
    for(let key in cartitems) {
      if(cartitems.hasOwnProperty(key)) {
        subtotal += cartitems[key].price*cartitems[key].quantity;
      }
    }
    subtotal = "$" + subtotal.toFixed(2);
    return (
      <div>
        {this.Checkoutcoupon()}
        <div className="checkout__line">
          <div className="checkout__line__label"> Discount </div>
          <div className="checkout__line__amount"> -$90 </div>
        </div>

        <div className="checkout__line">
          <div className="checkout__line__label"> Subtotal</div>
          <div className="checkout__line__amount checkout__line__amount--omg-savings"> {subtotal} </div>
        </div>

        <div className="checkout__line">
          <div className="checkout__line__amount checkout__line__amount--strikeout"> $360 </div>
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

export default Checkout;