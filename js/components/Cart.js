import React, { PropTypes, Component } from 'react';
import Ps from 'perfect-scrollbar';
import CartItem from './CartItem';
import CartTitle from './CartTitle';
import MakeConnectedComponent from './MakeConnectedComponent';
import { undoShoppingCart } from '../stores/actions';
import CartStore from '../stores/CartStore';
import UndoStore from '../stores/UndoStore';

class Cart extends Component {
  componentDidMount() {
    UndoStore.addChangeListener(this.forceUpdate.bind(this));
    let $content = React.findDOMNode(this.refs.content);
    Ps.initialize($content);
  }

  undo() {
    undoShoppingCart();
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
        <h3 className="cart__undo"><a onClick={this.undo.bind(this)}>undo</a></h3>
      </div>
    );
  }
}

export default  MakeConnectedComponent(Cart, CartStore,"cartItems");;