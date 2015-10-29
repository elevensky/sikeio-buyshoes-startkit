import React, { PropTypes, Component } from 'react';
import SiteTitle from './SiteTitle';
import ConnectedProducts from './ConnectedProducts';
import Checkout from './Checkout';
import ConnectedCart from './ConnectedCart';

class App extends Component {
  render() {
    return (
      <div className="site">
        <div className="bg">
          <div className="bg__img">
          </div>
        </div>

        <div className="site__main">
          <div className="site__left-sidebar">
            <SiteTitle />
          </div>
          <div className="site__content">
            <ConnectedProducts />
          </div>
        </div>
        <div className="site__right-sidebar">
          <ConnectedCart />
          <Checkout />
        </div>
        <a className="site__right-sidebar-toggle">
          <img src="img/arrow-icon.svg" />
        </a>
      </div>
    );
  }
}

export default App;