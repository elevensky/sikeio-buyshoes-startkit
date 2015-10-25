import React, { PropTypes, Component } from 'react';

const CartStore = require("../stores/CartStore");
const { updateCartItemQuantity } = CartStore;

class QuantityControl extends Component {
  addClick() {
    let quantity = parseInt(this.props.quantity);
    updateCartItemQuantity(this.props.productid, this.props.quantity+1);
  }

  decsClick() {
    let quantity = parseInt(this.props.quantity);
    updateCartItemQuantity(this.props.productid, this.props.quantity-1);
  }

  render() {
    let quantity = this.props.quantity;
    let variant = this.props.variant;
    return (
      <div className={"adjust-qty adjust-qty--"+variant}>
        <a onClick={this.decsClick.bind(this)} className="adjust-qty__button">-</a>
        <div className="adjust-qty__number">{quantity}</div>
        <a onClick={this.addClick.bind(this)} className="adjust-qty__button">+</a>
      </div>
    );
  }
}

export default QuantityControl;