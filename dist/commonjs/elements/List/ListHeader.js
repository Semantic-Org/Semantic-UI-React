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
 * A list item can contain a header.
 */
function ListHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = (0, _clsx.default)('header', className);
  var rest = (0, _lib.getUnhandledProps)(ListHeader, props);
  var ElementType = (0, _lib.getElementType)(ListHeader, props);
  return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
    className: classes
  }), _lib.childrenUtils.isNil(children) ? content : children);
}

ListHeader.handledProps = ["as", "children", "className", "content"];
ListHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand
} : {};
ListHeader.create = (0, _lib.createShorthandFactory)(ListHeader, function (content) {
  return {
    content: content
  };
});
var _default = ListHeader;
exports.default = _default;