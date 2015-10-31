import React, { PropTypes, Component } from 'react';
import { toggleShowOnlyLike } from '../stores/ProductStore';

class SiteTitle extends Component {
  handleClick() {
    toggleShowOnlyLike();
  }
  render() {
    return (
      <div className="title">
        <h2>Buy Me Shoes</h2>
        <img onClick={this.handleClick.bind(this)} className="title__heart" src="img/heart.svg"/>
      </div>
    );
  }
}

export default SiteTitle;