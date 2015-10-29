import React, { PropTypes, Component } from 'react';
import Ps from 'perfect-scrollbar';
import CartItem from './CartItem';
import CartTitle from './CartTitle';
import MakeConnectedComponent from './MakeConnectedComponent';

import CartStore from '../stores/CartStore';

class Cart extends Component {
  componentDidMount() {
    let $content = React.findDOMNode(this.refs.content);
    Ps.initialize($content);
  }

  render() {
    let {cartItems} = this.props;
    let cartList = [];
    for(let key in cartItems) {
      if(cartItems.hasOwnProperty(key)) {
        cartList.push(<CartItem key={cartItems[key].id} cartitem={cartItems[key]}/>);
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

export default  MakeConnectedComponent(Cart, CartStore,"cartItems");;