"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

/**
 * A placeholder can contain have lines of text.
 */
function PlaceholderLine(props) {
  var className = props.className,
      length = props.length;
  var classes = (0, _clsx.default)('line', length, className);
  var rest = (0, _lib.getUnhandledProps)(PlaceholderLine, props);
  var ElementType = (0, _lib.getElementType)(PlaceholderLine, props);
  return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
    className: classes
  }));
}

PlaceholderLine.handledProps = ["as", "className", "length"];
PlaceholderLine.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** A line can specify how long its contents should appear. */
  length: _propTypes.default.oneOf(['full', 'very long', 'long', 'medium', 'short', 'very short'])
} : {};
var _default = PlaceholderLine;
exports.default = _default;