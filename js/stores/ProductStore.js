const LikeStore = require("./LikeStore");
const EventEmitter = require("events");

let emitter = new EventEmitter();

function emitChange() {
  emitter.emit("change");
}

let _productItems = {
    "jameson-vulc": {
        id: "jameson-vulc",
        name: "Jameson Vulc",
        price: 64.99,
        imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
        quantity: 0,
    },

    "marana-x-hook-ups": {
        id: "marana-x-hook-ups",
        name: "Marana X Hook-Up",
        price: 79.99,
        imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
        quantity: 0
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

let _showOnlyLike = false;

module.exports = {
  // Reader methods
  productItems() {
    return _productItems;
  },

  filteredProducts() {
    // Return all products or only liked products, depending on _showOnlyLike
    let likearr = LikeStore.likeItems();
    let filterProducts = {};
    if(_showOnlyLike) {
        for(let key in _productItems)
        if(likearr.indexOf(key) > -1) {
          filterProducts[key] = _productItems[key];
        }
    } else {
        filterProducts = _productItems;
    }
    return filterProducts;
  },

  // Actions
  toggleShowOnlyLike() {
    _showOnlyLike = !_showOnlyLike;
    //重要的事情说三遍，action之后一定要emit事件。action之后一定要emit事件，action之后一定要emit事件。
    emitChange();
  },
  addChangeListener(callback) {
    emitter.addListener("change",callback)
  },

  removeChangeListener(callback) {
    emitter.removeListener("change",callback)
  }
}