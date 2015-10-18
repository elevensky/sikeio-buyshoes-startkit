"use strict";

var SiteTitle = React.createClass({
  displayName: "SiteTitle",

  render: function render() {
    return React.createElement(
      "div",
      { className: "title" },
      React.createElement(
        "h2",
        null,
        "Buy Me Shoes"
      ),
      React.createElement("img", { className: "title__heart", src: "img/heart.svg" })
    );
  }
});
/*
Products
- Product
- Quantity
*/
var QuantityControl = React.createClass({
  displayName: "QuantityControl",

  render: function render() {
    return React.createElement(
      "div",
      { className: "adjust-qty" },
      React.createElement(
        "a",
        { className: "adjust-qty__button" },
        "-"
      ),
      React.createElement(
        "div",
        { className: "adjust-qty__number" },
        quantity
      ),
      React.createElement(
        "a",
        { className: "adjust-qty__button" },
        "+"
      )
    );
  }
});

var Product = React.createClass({
  displayName: "Product",

  render: function render() {
    var _props$product = this.props.product;
    var name = _props$product.name;
    var price = _props$product.price;
    var imagePath = _props$product.imagePath;
    var quantity = _props$product.quantity;

    return React.createElement(
      "div",
      { className: "product" },
      React.createElement(
        "div",
        { className: "product__display" },
        React.createElement(
          "div",
          { className: "product__img-wrapper" },
          React.createElement("img", { className: "product__img", src: imagePath })
        ),
        React.createElement(
          "a",
          { className: "product__add" },
          React.createElement("img", { className: "product__add__icon", src: "img/cart-icon.svg" })
        ),
        React.createElement(
          "div",
          { className: "product__price" },
          "$" + price
        )
      ),
      React.createElement(
        "div",
        { className: "product__description" },
        React.createElement(
          "div",
          { className: "product__name" },
          name
        ),
        React.createElement("img", { className: "product__heart", src: "img/heart.svg" })
      )
    );
  }
});

var Products = React.createClass({
  displayName: "Products",

  render: function render() {
    var products = this.props.products;
    var productsList = [];
    for (var key in products) {
      if (products.hasOwnProperty(key)) {
        productsList.push(React.createElement(Product, { key: products[key].id, product: products[key] }));
      }
    }
    return React.createElement(
      "div",
      { className: "products" },
      productsList
    );
  }
});
/*
Cart 组件
-Carttitle
-Cartitem
*/
var Carttitle = React.createClass({
  displayName: "Carttitle",

  render: function render() {
    var title = this.props.title ? this.props.title : "Shopping Cart";
    var extendstyle = this.props.isspacer ? 'cart__title--spacer' : '';
    return React.createElement(
      "h3",
      { className: "cart__title " + extendstyle },
      title
    );
  }
});

var Cartitem = React.createClass({
  displayName: "Cartitem",

  render: function render() {
    var _props$cartitem = this.props.cartitem;
    var name = _props$cartitem.name;
    var price = _props$cartitem.price;
    var imagePath = _props$cartitem.imagePath;
    var quantity = _props$cartitem.quantity;

    return React.createElement(
      "div",
      { className: "cart-item" },
      React.createElement(
        "div",
        { className: "cart-item__top-part" },
        React.createElement(
          "div",
          { className: "cart-item__image" },
          React.createElement("img", { src: imagePath })
        ),
        React.createElement(
          "div",
          { className: "cart-item__top-part__middle" },
          React.createElement(
            "div",
            { className: "cart-item__title" },
            name
          ),
          React.createElement(
            "div",
            { className: "cart-item__price" },
            quantity > 1 ? "$" + price + " x " + quantity : "$" + price
          )
        ),
        React.createElement("img", { className: "cart-item__trash", src: "img/trash-icon.svg" })
      ),
      React.createElement(
        "div",
        { className: "cart-item__qty" },
        React.createElement(
          "div",
          { className: "adjust-qty" },
          React.createElement(
            "a",
            { className: "adjust-qty__button" },
            "-"
          ),
          React.createElement(
            "div",
            { className: "adjust-qty__number" },
            quantity
          ),
          React.createElement(
            "a",
            { className: "adjust-qty__button" },
            "+"
          )
        )
      )
    );
  }
});

var Cart = React.createClass({
  displayName: "Cart",

  componentDidMount: function componentDidMount() {
    var $content = React.findDOMNode(this.refs.content);
    Ps.initialize($content);
  },
  render: function render() {
    var cartitems = this.props.cartitems;
    var cartList = [];
    for (var key in cartitems) {
      if (cartitems.hasOwnProperty(key)) {
        cartList.push(React.createElement(Cartitem, { key: cartitems[key].id, cartitem: cartitems[key] }));
      }
    }
    return React.createElement(
      "div",
      { className: "cart" },
      React.createElement(Carttitle, null),
      React.createElement(
        "div",
        { ref: "content", className: "cart__content" },
        React.createElement(Carttitle, { isspacer: "1" }),
        cartList
      )
    );
  }
});

/*
Checkout component
-Checkoutcoupon
*/
var Checkoutcoupon = React.createClass({
  displayName: "Checkoutcoupon",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement("hr", { className: "checkout__divider" }),
      React.createElement("input", { type: "text", className: "checkout__coupon-input", placeholder: "coupon code" })
    );
  }
});

var Checkout = React.createClass({
  displayName: "Checkout",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Checkoutcoupon, null),
      React.createElement(
        "div",
        { className: "checkout__line" },
        React.createElement(
          "div",
          { className: "checkout__line__label" },
          " Discount "
        ),
        React.createElement(
          "div",
          { className: "checkout__line__amount" },
          " -$90 "
        )
      ),
      React.createElement(
        "div",
        { className: "checkout__line" },
        React.createElement(
          "div",
          { className: "checkout__line__label" },
          " Subtotal"
        ),
        React.createElement(
          "div",
          { className: "checkout__line__amount checkout__line__amount--strikeout" },
          " $450 "
        )
      ),
      React.createElement(
        "div",
        { className: "checkout__line" },
        React.createElement(
          "div",
          { className: "checkout__line__amount checkout__line__amount--omg-savings" },
          " $360 "
        )
      ),
      React.createElement(
        "a",
        { className: "checkout__button" },
        React.createElement("img", { className: "checkout__button__icon", src: "img/cart-icon.svg" }),
        React.createElement(
          "div",
          { className: "checkout__button__label" },
          "Checkout"
        )
      )
    );
  }
});

var Siderbar = React.createClass({
  displayName: "Siderbar",

  render: function render() {
    return React.createElement(
      "a",
      { className: "site__right-sidebar-toggle" },
      React.createElement("img", { src: "img/arrow-icon.svg" })
    );
  }
});

var App = React.createClass({
  displayName: "App",

  // `render` 方法将生成 `buyshoes` 网页的 Virtual DOM。
  renderBackground: function renderBackground() {
    return React.createElement(
      "div",
      { className: "bg" },
      React.createElement("div", { className: "bg__img" })
    );
  },
  render: function render() {
    var products = {
      "jameson-vulc": {
        id: "jameson-vulc",
        name: "Jameson Vulc",
        price: 64.99,
        imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
        quantity: 1
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
        quantity: 0
      },

      "jameson-e-lite-julian-davidson-4": {
        id: "jameson-e-lite-julian-davidson-4",
        name: "Jameson E-Lite Julian Davidson",
        price: 74.99,
        imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
        quantity: 0
      },

      "scout-womens-6": {
        id: "scout-womens-6",
        name: "Scout Women's",
        imagePath: "img/shoes/scout-womens-6-teal-orig.png",
        price: 59.99,
        quantity: 0
      },

      "scout-womens-coco-ho-5": {
        id: "scout-womens-coco-ho-5",
        name: "Scout Women's Coco Ho",
        imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
        price: 59.99,
        quantity: 0
      },

      "jameson-2-womens-8": {
        id: "jameson-2-womens-8",
        name: "Jameson 2 Women's",
        imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
        price: 59.99,
        quantity: 0
      },

      "corby-womens-2": {
        id: "corby-womens-2",
        name: "Corby Women's",
        imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
        price: 44.99,
        quantity: 0
      }
    };

    var cartItems = {
      "jameson-vulc": {
        id: "jameson-vulc",
        name: "Jameson Vulc",
        price: 64.99,
        imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
        quantity: 1
      },

      "marana-x-hook-ups": {
        id: "marana-x-hook-ups",
        name: "Marana X Hook-Up",
        price: 79.99,
        imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
        quantity: 2
      },

      "scout-womens-6": {
        id: "scout-womens-6",
        name: "Scout Women's",
        imagePath: "img/shoes/scout-womens-6-teal-orig.png",
        price: 59.99,
        quantity: 2
      },

      "scout-womens-coco-ho-5": {
        id: "scout-womens-coco-ho-5",
        name: "Scout Women's Coco Ho",
        imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
        price: 59.99,
        quantity: 1
      },

      "jameson-2-womens-8": {
        id: "jameson-2-womens-8",
        name: "Jameson 2 Women's",
        imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
        price: 59.99,
        quantity: 1
      }
    };
    return React.createElement(
      "div",
      { className: "site" },
      this.renderBackground(),
      React.createElement(
        "div",
        { className: "site__main" },
        React.createElement(
          "div",
          { className: "site__left-sidebar" },
          React.createElement(SiteTitle, null)
        ),
        React.createElement(
          "div",
          { className: "site__content" },
          React.createElement(Products, { products: products })
        )
      ),
      React.createElement(
        "div",
        { className: "site__right-sidebar" },
        React.createElement(Cart, { cartitems: cartItems }),
        React.createElement(Checkout, null)
      ),
      React.createElement(Siderbar, null)
    );
  }
});

window.onload = function () {
  // 使用 App 组件替换 `#root` 的 innerHTML。
  React.render(React.createElement(App, null), document.querySelector("#root"));
};
