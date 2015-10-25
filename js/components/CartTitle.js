import React, { PropTypes, Component } from 'react';

class CartTitle extends Component {
  render() {
    let title = this.props.title ? this.props.title : "Shopping Cart";
    let extendstyle = this.props.isspacer ? 'cart__title--spacer' : '';
    return (<h3 className={"cart__title "+extendstyle}>{title}</h3>);
  }
}

export default CartTitle;