import React from 'react';
import ConnectedStore from './ConnectedStore';

function MakeConnectedComponent(ViewComponent, store, ...propNames) {

  class ConnectedViewComponent extends React.Component {
    componentDidMount() {
      store.addChangeListener(this.forceUpdate.bind(this));
    }
    render() {
      return (
        <ConnectedStore store={store} propNames={propNames}>
          {props => <ViewComponent {...this.props} {...props}/>}
        </ConnectedStore>
      );
    }
  }
  // Return the component
  return ConnectedViewComponent;
}

module.exports = MakeConnectedComponent;