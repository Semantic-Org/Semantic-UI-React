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
 * A dropdown contains a selected value.
 */
function DropdownText(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = (0, _clsx.default)('divider', className);
  var rest = (0, _lib.getUnhandledProps)(DropdownText, props);
  var ElementType = (0, _lib.getElementType)(DropdownText, props);
  return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({
    "aria-atomic": true,
    "aria-live": "polite",
    role: "alert"
  }, rest, {
    className: classes
  }), _lib.childrenUtils.isNil(children) ? content : children);
}

DropdownText.handledProps = ["as", "children", "className", "content"];
DropdownText.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand
} : {};
DropdownText.create = (0, _lib.createShorthandFactory)(DropdownText, function (val) {
  return {
    content: val
  };
});
var _default = DropdownText;
exports.default = _default;