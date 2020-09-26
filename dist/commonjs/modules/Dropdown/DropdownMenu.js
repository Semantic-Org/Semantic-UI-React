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
 * A dropdown menu can contain a menu.
 */
function DropdownMenu(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      direction = props.direction,
      open = props.open,
      scrolling = props.scrolling;
  var classes = (0, _clsx.default)(direction, (0, _lib.useKeyOnly)(open, 'visible'), (0, _lib.useKeyOnly)(scrolling, 'scrolling'), 'menu transition', className);
  var rest = (0, _lib.getUnhandledProps)(DropdownMenu, props);
  var ElementType = (0, _lib.getElementType)(DropdownMenu, props);
  return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
    className: classes
  }), _lib.childrenUtils.isNil(children) ? content : children);
}

DropdownMenu.handledProps = ["as", "children", "className", "content", "direction", "open", "scrolling"];
DropdownMenu.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A dropdown menu can open to the left or to the right. */
  direction: _propTypes.default.oneOf(['left', 'right']),

  /** Whether or not the dropdown menu is displayed. */
  open: _propTypes.default.bool,

  /** A dropdown menu can scroll. */
  scrolling: _propTypes.default.bool
} : {};
var _default = DropdownMenu;
exports.default = _default;