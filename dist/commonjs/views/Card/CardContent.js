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

var _CardDescription = require('./CardDescription');

var _CardDescription2 = _interopRequireDefault(_CardDescription);

var _CardHeader = require('./CardHeader');

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardMeta = require('./CardMeta');

var _CardMeta2 = _interopRequireDefault(_CardMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A card can contain blocks of content or extra content meant to be formatted separately from the main content
 */
function CardContent(props) {
  var children = props.children,
      className = props.className,
      description = props.description,
      extra = props.extra,
      header = props.header,
      meta = props.meta;

  var classes = (0, _classnames2.default)(className, (0, _lib.useKeyOnly)(extra, 'extra'), 'content');
  var rest = (0, _lib.getUnhandledProps)(CardContent, props);
  var ElementType = (0, _lib.getElementType)(CardContent, props);

  if (children) {
    return _react2.default.createElement(
      ElementType,
      _extends({}, rest, { className: classes }),
      children
    );
  }

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    (0, _lib.createShorthand)(_CardHeader2.default, function (val) {
      return { content: val };
    }, header),
    (0, _lib.createShorthand)(_CardMeta2.default, function (val) {
      return { content: val };
    }, meta),
    (0, _lib.createShorthand)(_CardDescription2.default, function (val) {
      return { content: val };
    }, description)
  );
}

CardContent._meta = {
  name: 'CardContent',
  parent: 'Card',
  type: _lib.META.TYPES.VIEW
};

CardContent.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Shorthand for CardDescription. */
  description: _lib.customPropTypes.itemShorthand,

  /** A card can contain extra content meant to be formatted separately from the main content */
  extra: _react.PropTypes.bool,

  /** Shorthand for CardHeader. */
  header: _lib.customPropTypes.itemShorthand,

  /** Shorthand for CardMeta. */
  meta: _lib.customPropTypes.itemShorthand
};

exports.default = CardContent;