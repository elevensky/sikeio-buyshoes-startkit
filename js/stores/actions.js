import dispatcher from './AppDispatcher';
import LoggingService from './LoggingService';
import UndoStore from "./UndoStore";

LoggingService();

export function addCartItem(product) {
  dispatcher.dispatch({type: "addCartItem", product: product});
}

export function removeCartItem(productId) {
  dispatcher.dispatch({type: "removeCartItem", productId: productId});
}

export function updateCartItemQuantity(productId, quantity) {
  dispatcher.dispatch({type: "updateCartItemQuantity", productId: productId, quantity: quantity});
}

export function undoShoppingCart() {
  let cartItems = UndoStore.lastHistoryItem();
  dispatcher.dispatch({type: "undoShoppingCart", cartItems: cartItems})
}

export default dispatcher;