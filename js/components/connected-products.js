import React from 'react';
import ConnectedStore from './ConnectedStore';
import Products from './Products';
import connect from './connect';

const ProductStore = require("../stores/ProductStore");
import CartStore, { addCartItem, updateCartItemQuantity } from '../stores/CartStore';
import LikeStore from '../stores/LikeStore';

@connect(ProductStore,"productItems")
@connect(CartStore,"cartItems")
@connect(LikeStore,"likeItems")
class ConnectedProducts extends Products {};

export default ConnectedProducts;