import React, { PropTypes, Component } from 'react';

import { updateCartItemQuantity } from '../stores/actions';

class QuantityControl extends Component {
  addClick() {
    let quantity = parseInt(this.props.item.quantity);
    updateCartItemQuantity(this.props.item.id, this.props.item.quantity+1);
  }

  decsClick() {
    let quantity = parseInt(this.props.item.quantity);
    updateCartItemQuantity(this.props.item.id, this.props.item.quantity-1);
  }

  render() {
    let quantity = this.props.item.quantity;
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