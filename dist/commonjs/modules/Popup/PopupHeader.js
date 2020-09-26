"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = PopupHeader;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

/**
 * A PopupHeader displays a header in a Popover.
 */
function PopupHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = (0, _clsx.default)('header', className);
  var rest = (0, _lib.getUnhandledProps)(PopupHeader, props);
  var ElementType = (0, _lib.getElementType)(PopupHeader, props);
  return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
    className: classes
  }), _lib.childrenUtils.isNil(children) ? content : children);
}

PopupHeader.handledProps = ["as", "children", "className", "content"];
PopupHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand
} : {};
PopupHeader.create = (0, _lib.createShorthandFactory)(PopupHeader, function (children) {
  return {
    children: children
  };
});