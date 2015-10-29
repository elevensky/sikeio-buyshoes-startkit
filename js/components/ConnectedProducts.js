import React from 'react';
import ConnectedStore from './ConnectedStore';
import Products from './Products';

const ProductStore = require("../stores/ProductStore");
import CartStore, { addCartItem, updateCartItemQuantity } from '../stores/CartStore';
import LikeStore from '../stores/LikeStore';

class ConnectedProducts extends React.Component {
  componentDidMount() {
    ProductStore.addChangeListener(this.forceUpdate.bind(this));
  }

  render() {
    return (
     <ConnectedStore store={ProductStore} propNames={["productItems"]}>
        {props1 => {
          return (<ConnectedStore store={CartStore} propNames={["cartItems"]}>
            {props2 => {
              return (<ConnectedStore store={LikeStore} propNames={["likeItems"]}>
                {props3 => { return <Products {...props1} {...props2} {...props3}/>; }}
              </ConnectedStore>);
            }}
          </ConnectedStore>);
        }}
      </ConnectedStore>
    );
  }
}

export default ConnectedProducts;