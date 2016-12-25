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
 * Button.Group
 */
function ButtonGroup(props) {
  var attached = props.attached,
      basic = props.basic,
      children = props.children,
      className = props.className,
      color = props.color,
      compact = props.compact,
      fluid = props.fluid,
      icon = props.icon,
      inverted = props.inverted,
      labeled = props.labeled,
      negative = props.negative,
      positive = props.positive,
      primary = props.primary,
      secondary = props.secondary,
      size = props.size,
      toggle = props.toggle,
      vertical = props.vertical,
      widths = props.widths;


  var classes = (0, _classnames2.default)('ui', size, color, (0, _lib.useValueAndKey)(attached, 'attached'), (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(compact, 'compact'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(icon, 'icon'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(labeled, 'labeled'), (0, _lib.useKeyOnly)(negative, 'negative'), (0, _lib.useKeyOnly)(positive, 'positive'), (0, _lib.useKeyOnly)(primary, 'primary'), (0, _lib.useKeyOnly)(secondary, 'secondary'), (0, _lib.useKeyOnly)(toggle, 'toggle'), (0, _lib.useKeyOnly)(vertical, 'vertical'), (0, _lib.useWidthProp)(widths), 'buttons', className);

  var rest = (0, _lib.getUnhandledProps)(ButtonGroup, props);
  var ElementType = (0, _lib.getElementType)(ButtonGroup, props);

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children
  );
}

ButtonGroup._meta = {
  name: 'ButtonGroup',
  parent: 'Button',
  type: _lib.META.TYPES.ELEMENT,
  props: {
    attached: ['left', 'right', 'top', 'bottom'],
    color: _lib.SUI.COLORS,
    size: _lib.SUI.SIZES,
    widths: _lib.SUI.WIDTHS
  }
};

ButtonGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A button can be attached to the top or bottom of other content */
  attached: _react.PropTypes.oneOf(ButtonGroup._meta.props.attached),

  /** Groups can be less pronounced */
  basic: _react.PropTypes.bool,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Groups can have a shared color */
  color: _react.PropTypes.oneOf(ButtonGroup._meta.props.color),

  /** Groups can reduce their padding to fit into tighter spaces */
  compact: _react.PropTypes.bool,

  /** Groups can take the width of their container */
  fluid: _react.PropTypes.bool,

  /** Groups can be formatted as icons */
  icon: _react.PropTypes.bool,

  /** Groups can be formatted to appear on dark backgrounds */
  inverted: _react.PropTypes.bool,

  /** Groups can be formatted as labeled icon buttons */
  labeled: _react.PropTypes.bool,

  /** Groups can hint towards a negative consequence */
  negative: _react.PropTypes.bool,

  /** Groups can hint towards a positive consequence */
  positive: _react.PropTypes.bool,

  /** Groups can be formatted to show different levels of emphasis */
  primary: _react.PropTypes.bool,

  /** Groups can be formatted to show different levels of emphasis */
  secondary: _react.PropTypes.bool,

  /** Groups can have different sizes */
  size: _react.PropTypes.oneOf(ButtonGroup._meta.props.size),

  /** Groups can be formatted to toggle on and off */
  toggle: _react.PropTypes.bool,

  /** Groups can be formatted to appear vertically */
  vertical: _react.PropTypes.bool,

  /** Groups can have their widths divided evenly */
  widths: _react.PropTypes.oneOf(ButtonGroup._meta.props.widths)
};

exports.default = ButtonGroup;