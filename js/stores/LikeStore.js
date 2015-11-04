const EventEmitter = require("events");

let emitter = new EventEmitter();

function emitChange() {
  emitter.emit("change");
}

let _likeItems = [];

module.exports = {
  // Reader methods
  likeItems() {
    return _likeItems;
  },
  // Writer methods. These are the "actions".
  toggleLike(productId) {
    let index = _likeItems.indexOf(productId);

    if(index > -1) {
        _likeItems.splice(index, 1);
    } else {
      _likeItems.push(productId);
    }

    emitChange();
  },

  addChangeListener(callback) {
    emitter.addListener("change",callback)
  },

  removeChangeListener(callback) {
    emitter.removeListener("change",callback)
  }
}