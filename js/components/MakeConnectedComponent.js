import React from 'react';
import ConnectedStore from './ConnectedStore';

function MakeConnectedComponent(ViewComponent, store, ...propNames) {

  let Store = store
  // TODO: Define ConnectedViewComponent

  class ConnectedViewComponent extends React.Component {
    componentDidMount() {
      store.addChangeListener(this.forceUpdate.bind(this));
    }
    render() {
      return (
        <ConnectedStore store={Store} propNames={propNames}>
          {props => <ViewComponent {...props} {...this.props}/>}
        </ConnectedStore>
      );
    }
  }
  // Return the component
  return ConnectedViewComponent;
}

module.exports = MakeConnectedComponent;