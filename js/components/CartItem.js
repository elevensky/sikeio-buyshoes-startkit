import React, { PropTypes, Component } from 'react';
import QuantityControl from './QuantityControl';

import CartStore from '../stores/CartStore';
import { removeCartItem } from '../stores/actions';

class Cartitem extends Component {
  componentDidMount() {
    CartStore.addChangeListener(this.forceUpdate.bind(this));
  }
  handleRemove() {
    let productId = this.props.cartitem['id'];
    removeCartItem(productId);
  }
  render() {
    let { id, name, price, imagePath, quantity } = this.props.cartitem;
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
              {quantity > 1 ? "$"+price+" x "+quantity : "$"+price }
            </div>
          </div>
          <img onClick={this.handleRemove.bind(this)} className="cart-item__trash" src="img/trash-icon.svg"/>
        </div>
        <QuantityControl productid={id} quantity={quantity}/>
      </div>
    );
  }
}

export default Cartitem;