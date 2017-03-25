'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A dimmable sub-component for Dimmer.
 */
function DimmerDimmable(props) {
  var blurring = props.blurring,
      className = props.className,
      children = props.children,
      dimmed = props.dimmed;


  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(blurring, 'blurring'), (0, _lib.useKeyOnly)(dimmed, 'dimmed'), 'dimmable', className);
  var rest = (0, _lib.getUnhandledProps)(DimmerDimmable, props);
  var ElementType = (0, _lib.getElementType)(DimmerDimmable, props);

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children
  );
}

DimmerDimmable._meta = {
  name: 'DimmerDimmable',
  type: _lib.META.TYPES.MODULE,
  parent: 'Dimmer'
};

DimmerDimmable.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A dimmable element can blur its contents. */
  blurring: _react.PropTypes.bool,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Controls whether or not the dim is displayed. */
  dimmed: _react.PropTypes.bool
};

exports.default = DimmerDimmable;