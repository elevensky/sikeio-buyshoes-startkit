import React, { PropTypes, Component } from 'react';
import QuantityControl from './QuantityControl';

const CartStore = require("../stores/CartStore");
const {addCartItem} = CartStore;

class Product extends Component {
  componentDidMount() {
    CartStore.addChangeListener(this.forceUpdate.bind(this));
  }

  handleClick(event) {
    let product = this.props.product;
    addCartItem(product);
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
      return (<QuantityControl item={item} variant="gray"/>);
    } else {
      return (<a className="product__add" onClick={this.handleClick.bind(this)}><img className="product__add__icon" src="img/cart-icon.svg"/></a>);
    }
  }

  render() {
    let key = this.props.key;
    let { name, price, imagePath } = this.props.product;
    return (
      <div key={key} className="product">
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