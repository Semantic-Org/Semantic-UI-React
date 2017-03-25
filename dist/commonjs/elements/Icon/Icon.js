'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _IconGroup = require('./IconGroup');

var _IconGroup2 = _interopRequireDefault(_IconGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An icon is a glyph used to represent something else
 * @see Image
 */
function Icon(props) {
  var bordered = props.bordered,
      className = props.className,
      circular = props.circular,
      color = props.color,
      corner = props.corner,
      disabled = props.disabled,
      fitted = props.fitted,
      flipped = props.flipped,
      inverted = props.inverted,
      link = props.link,
      loading = props.loading,
      name = props.name,
      rotated = props.rotated,
      size = props.size;


  var classes = (0, _classnames2.default)(size, color, (0, _lib.useKeyOnly)(bordered, 'bordered'), (0, _lib.useKeyOnly)(circular, 'circular'), (0, _lib.useKeyOnly)(corner, 'corner'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(fitted, 'fitted'), (0, _lib.useValueAndKey)(flipped, 'flipped'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(link, 'link'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useValueAndKey)(rotated, 'rotated'), name, className, 'icon');
  var rest = (0, _lib.getUnhandledProps)(Icon, props);
  var ElementType = (0, _lib.getElementType)(Icon, props);

  return _react2.default.createElement(ElementType, _extends({}, rest, { 'aria-hidden': 'true', className: classes }));
}

Icon.Group = _IconGroup2.default;

Icon._meta = {
  name: 'Icon',
  type: _lib.META.TYPES.ELEMENT,
  props: {
    color: _lib.SUI.COLORS,
    flipped: ['horizontally', 'vertically'],
    name: _lib.SUI.ICONS_AND_ALIASES,
    rotated: ['clockwise', 'counterclockwise'],
    size: (0, _without3.default)(_lib.SUI.SIZES, 'medium')
  }
};

Icon.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Formatted to appear bordered */
  bordered: _react.PropTypes.bool,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Icon can formatted to appear circular */
  circular: _react.PropTypes.bool,

  /** Color of the icon. */
  color: _react.PropTypes.oneOf(Icon._meta.props.color),

  /** Icons can display a smaller corner icon */
  corner: _react.PropTypes.bool,

  /** Show that the icon is inactive */
  disabled: _react.PropTypes.bool,

  /** Fitted, without space to left or right of Icon. */
  fitted: _react.PropTypes.bool,

  /** Icon can flipped */
  flipped: _react.PropTypes.oneOf(Icon._meta.props.flipped),

  /** Formatted to have its colors inverted for contrast */
  inverted: _react.PropTypes.bool,

  /** Name of the icon */
  name: _lib.customPropTypes.suggest(Icon._meta.props.name),

  /** Icon can be formatted as a link */
  link: _react.PropTypes.bool,

  /** Icon can be used as a simple loader */
  loading: _react.PropTypes.bool,

  /** Icon can rotated */
  rotated: _react.PropTypes.oneOf(Icon._meta.props.rotated),

  /** Size of the icon. */
  size: _react.PropTypes.oneOf(Icon._meta.props.size)
};

Icon.defaultProps = {
  as: 'i'
};

Icon.create = (0, _lib.createShorthandFactory)(Icon, function (value) {
  return { name: value };
});

exports.default = Icon;