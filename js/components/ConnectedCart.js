import React from 'react';
import ConnectedStore from './ConnectedStore';
import Cart from './Cart';

const CartStore = require("../stores/CartStore");

class ConnectedCart extends React.Component {
  componentDidMount() {
    CartStore.addChangeListener(this.forceUpdate.bind(this));
  }

  render() {
    return (
      <ConnectedStore store={CartStore} propNames={["cartItems"]}>
        {props => <Cart {...props}/>}
      </ConnectedStore>
    );
  }
}

export default ConnectedCart;