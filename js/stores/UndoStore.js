import dispatcher from './AppDispatcher';
import EventEmitter from 'events';
import {cartItems} from './CartStore';
import _ from 'lodash';

let emitter = new EventEmitter();
let _history = [];

function emitChange() {
  emitter.emit("change");
}

dispatcher.register((action) => {
    let handler = handlers[action.type];
    handler && handler(action);
});

let handlers = {
  addCartItem(action) {
      _history.push(_.cloneDeep(cartItems()));

      emitChange();
  },

  removeCartItem(action) {
      _history.push(_.cloneDeep(cartItems()));

      emitChange();
  }
};

export default {
  lastHistoryItems() {
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