import React, { PropTypes, Component } from 'react';

class Cartitem extends Component {
  render() {
    let {name, price, imagePath, quantity} = this.props.cartitem;
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
          <img className="cart-item__trash" src="img/trash-icon.svg"/>
        </div>

        <div className="cart-item__qty">
          <div className="adjust-qty">
            <a className="adjust-qty__button">-</a>
            <div className="adjust-qty__number">{quantity}</div>
            <a className="adjust-qty__button">+</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Cartitem;