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
 * A dropdown menu can contain dividers to separate related content.
 */
function DropdownDivider(props) {
  var className = props.className;
  var classes = (0, _clsx.default)('divider', className);
  var rest = (0, _lib.getUnhandledProps)(DropdownDivider, props);
  var ElementType = (0, _lib.getElementType)(DropdownDivider, props);
  return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
    className: classes
  }));
}

DropdownDivider.handledProps = ["as", "className"];
DropdownDivider.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Additional classes. */
  className: _propTypes.default.string
} : {};
var _default = DropdownDivider;
exports.default = _default;