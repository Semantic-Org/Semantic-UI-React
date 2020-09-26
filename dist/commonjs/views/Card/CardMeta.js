"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _without2 = _interopRequireDefault(require("lodash/without"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

/**
 * A card can contain content metadata.
 */
function CardMeta(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      textAlign = props.textAlign;
  var classes = (0, _clsx.default)((0, _lib.useTextAlignProp)(textAlign), 'meta', className);
  var rest = (0, _lib.getUnhandledProps)(CardMeta, props);
  var ElementType = (0, _lib.getElementType)(CardMeta, props);
  return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
    className: classes
  }), _lib.childrenUtils.isNil(children) ? content : children);
}

CardMeta.handledProps = ["as", "children", "className", "content", "textAlign"];
CardMeta.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A card meta can adjust its text alignment. */
  textAlign: _propTypes.default.oneOf((0, _without2.default)(_lib.SUI.TEXT_ALIGNMENTS, 'justified'))
} : {};
var _default = CardMeta;
exports.default = _default;