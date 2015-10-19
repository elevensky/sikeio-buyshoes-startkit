import React, { PropTypes, Component } from 'react';
import Ps from 'perfect-scrollbar';
import CartItem from './CartItem';
import CartTitle from './CartTitle';
import { cartItems } from '../js/data';

class Cart extends Component {
  componentDidMount() {
    let $content = React.findDOMNode(this.refs.content);
    Ps.initialize($content);
  }

  render() {
    let cartitems = cartItems;
    let cartList = [];
    for(let key in cartitems) {
      if(cartitems.hasOwnProperty(key)) {
        cartList.push(<CartItem key={cartitems[key].id} cartitem={cartitems[key]}/>);
      }
    }
    return (
      <div className="cart">
        <CartTitle/>
        <div ref="content" className="cart__content">
          <CartTitle isspacer='1'/>
          {cartList}
        </div>
    </div>
    );
  }
}

export default Cart;