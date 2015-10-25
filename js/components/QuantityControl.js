import React, { PropTypes, Component } from 'react';

class QuantityControl extends Component {
  render() {
    let quantity = this.props.item;
    let variant = this.props.variant;
    return (
      <div className={"adjust-qty adjust-qty--"+variant}>
        <a className="adjust-qty__button">-</a>
        <div className="adjust-qty__number">{quantity}</div>
        <a className="adjust-qty__button">+</a>
      </div>
    );
  }
}

export default QuantityControl;