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
 * A set of fields can appear grouped together.
 * @see Form
 */
function FormGroup(props) {
  var children = props.children,
      className = props.className,
      grouped = props.grouped,
      inline = props.inline,
      unstackable = props.unstackable,
      widths = props.widths;
  var classes = (0, _clsx.default)((0, _lib.useKeyOnly)(grouped, 'grouped'), (0, _lib.useKeyOnly)(inline, 'inline'), (0, _lib.useKeyOnly)(unstackable, 'unstackable'), (0, _lib.useWidthProp)(widths, null, true), 'fields', className);
  var rest = (0, _lib.getUnhandledProps)(FormGroup, props);
  var ElementType = (0, _lib.getElementType)(FormGroup, props);
  return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
    className: classes
  }), children);
}

FormGroup.handledProps = ["as", "children", "className", "grouped", "inline", "unstackable", "widths"];
FormGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Fields can show related choices. */
  grouped: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['inline']), _propTypes.default.bool]),

  /** Multiple fields may be inline in a row. */
  inline: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['grouped']), _propTypes.default.bool]),

  /** A form group can prevent itself from stacking on mobile. */
  unstackable: _propTypes.default.bool,

  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width. */
  widths: _propTypes.default.oneOf([].concat(_lib.SUI.WIDTHS, ['equal']))
} : {};
var _default = FormGroup;
exports.default = _default;