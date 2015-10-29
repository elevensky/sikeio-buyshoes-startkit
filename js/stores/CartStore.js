const EventEmitter = require("events");

let emitter = new EventEmitter();

function emitChange() {
  emitter.emit("change");
}

let _cartItems = {};

module.exports = {
  // Reader methods
  cartItems() {
    return _cartItems;
  },
  // Writer methods. These are the "actions".
  addCartItem(product) {
    if(_cartItems[product.id]){
      _cartItems[product.id]['quantity']++;
    } else {
      _cartItems[product.id] = product;
      _cartItems[product.id]['quantity'] = 1;
    }

    emitter.emit("change");
  },

  removeCartItem(productID) {
    delete _cartItems[productID];
    emitter.emit("change");
  },

  updateCartItemQuantity(productId, quantity){
    if(quantity > 0) {
      _cartItems[productId]['quantity'] = quantity;
    } else {
      _cartItems[productId]['quantity'] = 1;
    }
    emitter.emit("change");
  },

  addChangeListener(callback) {
    emitter.addListener("change",callback)
  },

  removeChangeListener(callback) {
    emitter.removeListener("change",callback)
  }
}