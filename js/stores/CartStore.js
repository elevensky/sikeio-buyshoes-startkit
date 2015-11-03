import dispatcher from './AppDispatcher';
import UndoStore from "./UndoStore";
import EventEmitter from "events";

let emitter = new EventEmitter();

function emitChange() {
  emitter.emit("change");
}

let _cartItems = {};

let handlers = {
  // Writer methods. These are the "actions".
  addCartItem(action) {
    UndoStore.sethistoryItems(_.cloneDeep(_cartItems));
    if(_cartItems[action.product.id]){
      _cartItems[action.product.id]['quantity']++;
    } else {
      _cartItems[action.product.id] = action.product;
      _cartItems[action.product.id]['quantity'] = 1;
    }

    emitChange();
  },

  removeCartItem(action) {
    UndoStore.sethistoryItems(_.cloneDeep(_cartItems));
    delete _cartItems[action.productId];

    emitChange();
  },

  updateCartItemQuantity(action) {
    if(action.quantity > 0) {
      _cartItems[action.productId]['quantity'] = action.quantity;
    } else {
      _cartItems[action.productId]['quantity'] = 1;
    }
    emitChange();
  },
}

dispatcher.register((action) => {
   let handler = handlers[action.type];
    // Ignores the action if the store doesn't have a handler for it.
    handler && handler(action);
});

export default {
  cartItems() {
    return _cartItems;
  },
  setCartItems(cartItems) {
    return _cartItems = cartItems;
  },
  // Reader methods
  addChangeListener(callback) {
    emitter.addListener("change",callback)
  },

  removeChangeListener(callback) {
    emitter.removeListener("change",callback)
  }
}