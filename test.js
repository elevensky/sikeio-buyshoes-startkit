'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ConnectedStore = require('./ConnectedStore');

var _ConnectedStore2 = _interopRequireDefault(_ConnectedStore);

var _Products = require('./Products');

var _Products2 = _interopRequireDefault(_Products);

var _storesCartStore = require('../stores/CartStore');

var _storesCartStore2 = _interopRequireDefault(_storesCartStore);

var _storesLikeStore = require('../stores/LikeStore');

var _storesLikeStore2 = _interopRequireDefault(_storesLikeStore);

var ProductStore = require("../stores/ProductStore");

var ConnectedProducts = (function (_React$Component) {
  _inherits(ConnectedProducts, _React$Component);

  function ConnectedProducts() {
    _classCallCheck(this, ConnectedProducts);

    _get(Object.getPrototypeOf(ConnectedProducts.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ConnectedProducts, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      ProductStore.addChangeListener(this.forceUpdate.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _ConnectedStore2['default'],
        { store: ProductStore, propNames: ["productItems"] },
        function (props1) {
          var propsobj1 = Object.assign(props1, _react2['default'].createElement(
            _ConnectedStore2['default'],
            { store: _storesCartStore2['default'], propNames: ["cartItems"] },
            function (props2) {
              var props2obj = Object.assign(props2, _react2['default'].createElement(
                _ConnectedStore2['default'],
                { store: _storesLikeStore2['default'], propNames: ["likeItems"] },
                function (props3) {
                  return props3;
                }
              ));
              return props2obj;
            }
          ));
          return _react2['default'].createElement(_Products2['default'], propsobj1);
        }
      );
    }
  }]);

  return ConnectedProducts;
})(_react2['default'].Component);

exports['default'] = ConnectedProducts;
module.exports = exports['default'];
