/*
let SiteTitle = React.createClass({
  render:function() {
    return (
      <div className="title">
        <h2>Buy Me Shoes</h2>
        <img className="title__heart" src="img/heart.svg"/>
      </div>
    );
  }
});
/*
Products
- Product
- Quantity
*/
/*
let QuantityControl = React.createClass({
  render:function() {
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
});

let Product = React.createClass({
  getcartnum:function() {
    let item  = this.props.item;
    if(item > 0) {
      return (<QuantityControl item={item} variant="gray"/>);
    } else {
      return (<a className="product__add"><img className="product__add__icon" src="img/cart-icon.svg"/></a>);
    }
  },
  render:function() {
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
});

let Products = React.createClass({
  render: function() {
    let products = this.props.products;
    let cartItems = this.props.cartitems;
    let productsList = [];
    for(let key in products) {
      if(products.hasOwnProperty(key)) {
        for(let ckey in cartItems) {
          if(ckey === key) {
            products[key].quantity = cartItems[ckey].quantity;
          }
        }
        productsList.push(<Product key={products[key].id} product={products[key]} item={products[key].quantity}/>);
      }
    }
    return (
      <div className="products">
        {productsList}
      </div>
    );
  }
});
/*
Cart 组件
-Carttitle
-Cartitem
*/
/*
let Carttitle = React.createClass({
  render: function() {
    let title = this.props.title ? this.props.title : "Shopping Cart";
    let extendstyle = this.props.isspacer ? 'cart__title--spacer' : '';
    return (<h3 className={"cart__title "+extendstyle}>{title}</h3>);
  }
});

let Cartitem = React.createClass({
  render: function() {
    let {name, price, imagePath, quantity} = this.props.cartitem;
    return(
      <div className="cart-item">
        <div className="cart-item__top-part">
          <div className="cart-item__image">
            <img src={imagePath}/>
          </div>
          <div className="cart-item__top-part__middle">
            <div className="cart-item__title">
              {name}
            </div>
            <div className="cart-item__price">
              {quantity > 1 ? "$"+price+" x "+quantity : "$"+price }
            </div>
          </div>
          <img className="cart-item__trash" src="img/trash-icon.svg"/>
        </div>

        <div className="cart-item__qty">
          <div className="adjust-qty">
            <a className="adjust-qty__button">-</a>
            <div className="adjust-qty__number">{quantity}</div>
            <a className="adjust-qty__button">+</a>
          </div>
        </div>
      </div>
    );
  }
});

let Cart = React.createClass({
  componentDidMount() {
    let $content = React.findDOMNode(this.refs.content);
    Ps.initialize($content);
  },
  render: function() {
    let cartitems = this.props.cartitems;
    let cartList = [];
    for(let key in cartitems) {
      if(cartitems.hasOwnProperty(key)) {
        cartList.push(<Cartitem key={cartitems[key].id} cartitem={cartitems[key]}/>);
      }
    }
    return (
      <div className="cart">
        <Carttitle/>
        <div ref="content" className="cart__content">
          <Carttitle isspacer='1'/>
          {cartList}
        </div>
    </div>
    );
  }
});

/*
Checkout component
-Checkoutcoupon
*/
/*
let Checkoutcoupon = React.createClass({
  render: function() {
    return (
      <div>
        <hr className="checkout__divider"/>
        <input type="text" className="checkout__coupon-input" placeholder="coupon code"></input>
      </div>
    );
  }
});

let Checkout = React.createClass({
  render: function() {
    let cartitems = this.props.cartitems;
    let subtotal = 0;
    for(let key in cartitems) {
      if(cartitems.hasOwnProperty(key)) {
        subtotal += cartitems[key].price*cartitems[key].quantity;
      }
    }
    subtotal = "$" + subtotal;
    return (
      <div>
        <Checkoutcoupon/>
        <div className="checkout__line">
          <div className="checkout__line__label"> Discount </div>
          <div className="checkout__line__amount"> -$90 </div>
        </div>

        <div className="checkout__line">
          <div className="checkout__line__label"> Subtotal</div>
          <div className="checkout__line__amount checkout__line__amount--strikeout"> {subtotal} </div>
        </div>

        <div className="checkout__line">
          <div className="checkout__line__amount checkout__line__amount--omg-savings"> $360 </div>
        </div>

        <a className="checkout__button">
          <img  className="checkout__button__icon" src="img/cart-icon.svg"/>
          <div className="checkout__button__label">
            Checkout
          </div>
        </a>
      </div>
    );
  }
});

let Siderbar = React.createClass({
  render: function() {
    return (
      <a className="site__right-sidebar-toggle">
        <img src="img/arrow-icon.svg"/>
      </a>
    );
  }
});

let App = React.createClass({
  // `render` 方法将生成 `buyshoes` 网页的 Virtual DOM。
  renderBackground: function() {
    return (
      <div className="bg">
        <div className="bg__img">
        </div>
      </div>
    );
  },
  render:function() {
    let products = {
      "jameson-vulc": {
          id: "jameson-vulc",
          name: "Jameson Vulc",
          price: 64.99,
          imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
          quantity: 1,
      },

      "marana-x-hook-ups": {
          id: "marana-x-hook-ups",
          name: "Marana X Hook-Up",
          price: 79.99,
          imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
          quantity: 2
      },

      "jameson-e-lite": {
          id: "jameson-e-lite",
          name: "Jameson E-Lite",
          price: 69.99,
          imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
          quantity: 0,
      },

      "jameson-e-lite-julian-davidson-4": {
          id: "jameson-e-lite-julian-davidson-4",
          name: "Jameson E-Lite Julian Davidson",
          price: 74.99,
          imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
          quantity: 0,
      },

      "scout-womens-6": {
          id: "scout-womens-6",
          name: "Scout Women's",
          imagePath: "img/shoes/scout-womens-6-teal-orig.png",
          price: 59.99,
          quantity: 0,
      },

      "scout-womens-coco-ho-5": {
          id: "scout-womens-coco-ho-5",
          name: "Scout Women's Coco Ho",
          imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
          price: 59.99,
          quantity: 0,
      },

      "jameson-2-womens-8": {
          id: "jameson-2-womens-8",
          name: "Jameson 2 Women's",
          imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
          price: 59.99,
          quantity: 0,
      },

      "corby-womens-2": {
          id: "corby-womens-2",
          name: "Corby Women's",
          imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
          price: 44.99,
          quantity: 0,
      },
    };

    let cartItems = {
      "jameson-vulc": {
          id: "jameson-vulc",
          name: "Jameson Vulc",
          price: 64.99,
          imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
          quantity: 1,
      },

      "marana-x-hook-ups": {
          id: "marana-x-hook-ups",
          name: "Marana X Hook-Up",
          price: 79.99,
          imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
          quantity: 2,
      },

      "scout-womens-6": {
          id: "scout-womens-6",
          name: "Scout Women's",
          imagePath: "img/shoes/scout-womens-6-teal-orig.png",
          price: 59.99,
          quantity: 2,
      },

      "scout-womens-coco-ho-5": {
          id: "scout-womens-coco-ho-5",
          name: "Scout Women's Coco Ho",
          imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
          price: 59.99,
          quantity: 1,
      },

      "jameson-2-womens-8": {
          id: "jameson-2-womens-8",
          name: "Jameson 2 Women's",
          imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
          price: 59.99,
          quantity: 1,
      },
    };
    return (
      <div className="site">
        {this.renderBackground()}

        <div className="site__main">
          <div className="site__left-sidebar">
            <SiteTitle/>
          </div>

          <div className="site__content">
            <Products products={products} cartitems={cartItems}/>
          </div>
        </div>

        <div className="site__right-sidebar">
          <Cart cartitems={cartItems}/>
          <Checkout cartitems={cartItems}/>
        </div>
        <Siderbar/>
      </div>
    );
  }
});
*/
import React from 'react';
import App from './components/App';

window.onload = () => {
  // 使用 App 组件替换 `#root` 的 innerHTML。
  React.render(<App/>,document.querySelector("#root"));
}