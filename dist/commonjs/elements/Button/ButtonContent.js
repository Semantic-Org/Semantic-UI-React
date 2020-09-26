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
 * Used in some Button types, such as `animated`.
 */
function ButtonContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      hidden = props.hidden,
      visible = props.visible;
  var classes = (0, _clsx.default)((0, _lib.useKeyOnly)(visible, 'visible'), (0, _lib.useKeyOnly)(hidden, 'hidden'), 'content', className);
  var rest = (0, _lib.getUnhandledProps)(ButtonContent, props);
  var ElementType = (0, _lib.getElementType)(ButtonContent, props);
  return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
    className: classes
  }), _lib.childrenUtils.isNil(children) ? content : children);
}

ButtonContent.handledProps = ["as", "children", "className", "content", "hidden", "visible"];
ButtonContent.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Initially hidden, visible on hover. */
  hidden: _propTypes.default.bool,

  /** Initially visible, hidden on hover. */
  visible: _propTypes.default.bool
} : {};
var _default = ButtonContent;
exports.default = _default;