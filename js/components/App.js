import React, { PropTypes, Component } from 'react';
import SiteTitle from './SiteTitle';
import Products from './Products';
import Checkout from './Checkout';
import Cart from './Cart';

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
            <Products />
          </div>
        </div>
        <div className="site__right-sidebar">
          <Cart />
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