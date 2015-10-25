import React, { PropTypes, Component } from 'react';
import QuantityControl from './QuantityControl';

class Product extends Component {
  getcartnum() {
    let item  = this.props.item;
    if(item > 0) {
      return (<QuantityControl item={item} variant="gray"/>);
    } else {
      return (<a className="product__add"><img className="product__add__icon" src="img/cart-icon.svg"/></a>);
    }
  }

  render() {
    let { name, price, imagePath } = this.props.product;
    return (
      <div className="product">
        <div className="product__display">
          <div className="product__img-wrapper">
            <img className="product__img" src={imagePath}/>
          </div>

          {this.getcartnum()}

          <div className="product__price">
            {"$"+price}
          </div>
        </div>

        <div className="product__description">
          <div className="product__name">
            {name}
          </div>
          <img className="product__heart" src="img/heart.svg"/>
        </div>
      </div>
    );
  }
}

export default Product;