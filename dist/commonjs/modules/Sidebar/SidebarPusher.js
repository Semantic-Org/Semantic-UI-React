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
 * A pushable sub-component for Sidebar.
 */
function SidebarPusher(props) {
  var className = props.className,
      dimmed = props.dimmed,
      children = props.children,
      content = props.content;
  var classes = (0, _clsx.default)('pusher', (0, _lib.useKeyOnly)(dimmed, 'dimmed'), className);
  var rest = (0, _lib.getUnhandledProps)(SidebarPusher, props);
  var ElementType = (0, _lib.getElementType)(SidebarPusher, props);
  return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
    className: classes
  }), _lib.childrenUtils.isNil(children) ? content : children);
}

SidebarPusher.handledProps = ["as", "children", "className", "content", "dimmed"];
SidebarPusher.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Controls whether or not the dim is displayed. */
  dimmed: _propTypes.default.bool
} : {};
var _default = SidebarPusher;
exports.default = _default;