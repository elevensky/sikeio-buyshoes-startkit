import dispatcher from './AppDispatcher';
import EventEmitter from "events";
//**引入即报错
//import UndoStore from './UndoStore';

let emitter = new EventEmitter();

function emitChange() {
  emitter.emit("change");
}

let _cartItems = {};

dispatcher.register((action) => {
  //dispatcher.waitFor([tokenA]);
  let handler = handlers[action.type];
    // Ignores the action if the store doesn't have a handler for it.
  handler && handler(action);
});

let handlers = {
  // Writer methods. These are the "actions".
  addCartItem(action) {
    let { productId } = action;
    _cartItems[productId] = {
        id: productId,
        quantity: 1
    };

    emitChange();
  },

  removeCartItem(action) {
    delete _cartItems[action.productId];

    emitChange();
  },

  updateCartItemQuantity(action) {
    let {productId, quantity} = action,
        item = _cartItems[productId];
    if(!item || typeof quantity !== 'number') return;

    item.quantity = quantity >= 1 ? quantity : 1;

    emitChange();
  },

  undoShoppingCart(action) {
    let { cartItems } = action;
    _cartItems = cartItems;

    emitChange();
  }
}

export default {
  cartItems() {
    return _cartItems;
  },
  // Reader methods
  addChangeListener(callback) {
    emitter.addListener("change",callback)
  },

  removeChangeListener(callback) {
    emitter.removeListener("change",callback)
  }
}