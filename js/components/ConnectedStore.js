import React from 'react';

class ConnectedStore extends React.Component {
  componentDidMount() {
    this.props.store.addChangeListener(this.forceUpdate.bind(this));
  }

  render() {
    let Store = this.props.store;
    let storeProps = {};
    for(let key in Store) {
      if(Store.hasOwnProperty(key)) {
        if(this.props.propNames.indexOf(key) > -1) {
          storeProps[key] = Store[key]();
        }
      }
    }

    let contentRenderFunction = this.props.children;
    return contentRenderFunction(storeProps);
  }
}

export default ConnectedStore;