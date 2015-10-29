import React from 'react';

function MakeConnectedComponent(ViewComponent, store, ...propNames) {

  let Store = store
  let props = propNames;
  // TODO: Define ConnectedViewComponent

  let storeProps = {};
  for(let key in Store) {
    if(Store.hasOwnProperty(key)) {
      if(props.indexOf(key) > -1) {
        storeProps[key] = Store[key]();
      }
    }
  }

  class ConnectedViewComponent extends React.Component {
    componentDidMount() {
      Store.addChangeListener(this.forceUpdate.bind(this));
    }
    render() {
    return (
      <ViewComponent {...storeProps}/>
    );
  }
  }
  // Return the component
  return ConnectedViewComponent;
}

module.exports = MakeConnectedComponent;