import React, { PropTypes, Component } from 'react';
import ProductStore, { toggleShowOnlyLike } from '../stores/ProductStore';
import connect from './connect';

class SiteTitle extends Component {
  handleClick() {
    toggleShowOnlyLike();
  }
  render() {
    let isFilterLike = this.props.toggleFilterLike;
    return (
      <div className="title">
        <h2>Buy Me Shoes</h2>
        <img
          onClick={this.handleClick.bind(this)}
          className="product__heart"
          src={isFilterLike ? "img/heart-liked.svg" : "img/heart.svg"}
        />
      </div>
    );
  }
}

@connect(ProductStore, 'toggleFilterLike')
class ConnectedSiteTitle extends SiteTitle {};

export default ConnectedSiteTitle;