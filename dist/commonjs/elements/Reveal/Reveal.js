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

var _RevealContent = require('./RevealContent');

var _RevealContent2 = _interopRequireDefault(_RevealContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A reveal displays additional content in place of previous content when activated.
 */
function Reveal(props) {
  var active = props.active,
      animated = props.animated,
      children = props.children,
      className = props.className,
      disabled = props.disabled,
      instant = props.instant;


  var classes = (0, _classnames2.default)('ui', animated, (0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(instant, 'instant'), 'reveal', className);
  var rest = (0, _lib.getUnhandledProps)(Reveal, props);
  var ElementType = (0, _lib.getElementType)(Reveal, props);

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children
  );
}

Reveal._meta = {
  name: 'Reveal',
  type: _lib.META.TYPES.ELEMENT,
  props: {
    animated: ['fade', 'small fade', 'move', 'move right', 'move up', 'move down', 'rotate', 'rotate left']
  }
};

Reveal.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** An active reveal displays its hidden content. */
  active: _react.PropTypes.bool,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** A disabled reveal will not animate when hovered. */
  disabled: _react.PropTypes.bool,

  /** An animation name that will be applied to Reveal. */
  animated: _react.PropTypes.oneOf(Reveal._meta.props.animated),

  /** An element can show its content without delay. */
  instant: _react.PropTypes.bool
};

Reveal.Content = _RevealContent2.default;

exports.default = Reveal;