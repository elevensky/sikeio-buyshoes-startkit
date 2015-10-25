import React, { PropTypes, Component } from 'react';

class SiteTitle extends Component {
  render() {
    return (
      <div className="title">
        <h2>Buy Me Shoes</h2>
        <img className="title__heart" src="img/heart.svg"/>
      </div>
    );
  }
}

export default SiteTitle;