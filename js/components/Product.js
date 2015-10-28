import React, { PropTypes, Component } from 'react';
import QuantityControl from './QuantityControl';

import CartStore, { addCartItem, updateCartItemQuantity } from '../stores/CartStore';
import LikeStore from '../stores/LikeStore';

class Product extends Component {
  componentDidMount() {
    CartStore.addChangeListener(this.forceUpdate.bind(this));
    LikeStore.addChangeListener(this.forceUpdate.bind(this));
  }

  handleClick(event) {
    let product = this.props.product;
    addCartItem(product);
  }
  likeIt(event) {
    let product = this.props.product;
    let { id } = this.props.product;
    LikeStore.addLikeItem(id);
  }
  getcartnum() {
    let Cartitems = CartStore.getCartitems();
    let item;
    if(Cartitems[this.props.product['id']]) {
      item = Cartitems[this.props.product['id']]['quantity'];
    } else {
      item = 0;
    }

    if(item > 0) {
      return (<QuantityControl productid={this.props.product.id} quantity={item} variant="gray"/>);
    } else {
      return (<a className="product__add" onClick={this.handleClick.bind(this)}><img className="product__add__icon" src="img/cart-icon.svg"/></a>);
    }
  }

  render() {
    let key = this.props.key;
    let { id, name, price, imagePath } = this.props.product;
    let likeitems = LikeStore.getLikeitems();
    let islike = likeitems.indexOf(id);
    return (
      <div key={key} className="product">
        <div className="product__display">
          <div className="product__price">
            {"$"+price}
          </div>

          <div className="product__img-wrapper">
            <img className="product__img" src={imagePath}/>
          </div>

          {this.getcartnum()}
        </div>

        <div className="product__description">
          <div className="product__name">
            {name}
          </div>
          <img onClick={this.likeIt.bind(this)} className="product__heart" src={islike > -1 ? "img/heart-liked.svg" : "img/heart.svg"}/>
        </div>
      </div>
    );
  }
}

export default Product;