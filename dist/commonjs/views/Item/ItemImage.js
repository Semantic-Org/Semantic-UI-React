'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Image = require('../../elements/Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An item can contain an image
 **/
function ItemImage(props) {
  var size = props.size;

  var rest = (0, _lib.getUnhandledProps)(ItemImage, props);

  return _react2.default.createElement(_Image2.default, _extends({}, rest, { size: size, ui: !!size, wrapped: true }));
}

ItemImage._meta = {
  name: 'ItemImage',
  parent: 'Item',
  type: _lib.META.TYPES.VIEW
};

ItemImage.propTypes = {
  /** An image may appear at different sizes */
  size: _react.PropTypes.oneOf(_Image2.default._meta.props.size)
};

exports.default = ItemImage;