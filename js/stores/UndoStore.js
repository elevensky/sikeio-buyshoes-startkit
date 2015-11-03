import dispatcher from './AppDispatcher';
import CartStore from "./CartStore";
const EventEmitter = require("events");

let emitter = new EventEmitter();
let _history = [];
function emitChange() {
  emitter.emit("change");
}

function undoShoppingCart(action) {
  CartStore.setCartItems(action);
  emitChange();
}

dispatcher.register((action) => {
   if(action.type === 'undoShoppingCart') {
      undoShoppingCart(action);
   }
});

export default {
  gethistoryItems() {
    return _history;
  },

  sethistoryItems(cartItems) {
    _history.push(cartItems);
  },

  lastHistoryItem() {
    return _history.pop();
  },
  // Reader methods
  addChangeListener(callback) {
    emitter.addListener("change",callback)
  },

  removeChangeListener(callback) {
    emitter.removeListener("change",callback)
  }
}