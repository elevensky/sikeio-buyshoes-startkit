import React from 'react';
import ConnectedStore from './ConnectedStore';
import Products from './Products';

const ProductStore = require("../stores/ProductStore");

class ConnectedProducts extends React.Component {
  componentDidMount() {
    ProductStore.addChangeListener(this.forceUpdate.bind(this));
  }

  render() {
    return (
      <ConnectedStore store={ProductStore} propNames={["productItems"]}>
      { props => <Products {...props}/> }
      </ConnectedStore>
    );
  }
}

export default ConnectedProducts;