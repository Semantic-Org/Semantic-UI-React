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
 * A content sub-component for the Reveal.
 */
function RevealContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      hidden = props.hidden,
      visible = props.visible;
  var classes = (0, _clsx.default)('ui', (0, _lib.useKeyOnly)(hidden, 'hidden'), (0, _lib.useKeyOnly)(visible, 'visible'), 'content', className);
  var rest = (0, _lib.getUnhandledProps)(RevealContent, props);
  var ElementType = (0, _lib.getElementType)(RevealContent, props);
  return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
    className: classes
  }), _lib.childrenUtils.isNil(children) ? content : children);
}

RevealContent.handledProps = ["as", "children", "className", "content", "hidden", "visible"];
RevealContent.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A reveal may contain content that is visible before interaction. */
  hidden: _propTypes.default.bool,

  /** A reveal may contain content that is hidden before user interaction. */
  visible: _propTypes.default.bool
} : {};
var _default = RevealContent;
exports.default = _default;