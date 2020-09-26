"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

var _TextArea = _interopRequireDefault(require("../../addons/TextArea"));

var _FormField = _interopRequireDefault(require("./FormField"));

/**
 * Sugar for <Form.Field control={TextArea} />.
 * @see Form
 * @see TextArea
 */
function FormTextArea(props) {
  var control = props.control;
  var rest = (0, _lib.getUnhandledProps)(FormTextArea, props);
  var ElementType = (0, _lib.getElementType)(FormTextArea, props);
  return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
    control: control
  }));
}

FormTextArea.handledProps = ["as", "control"];
FormTextArea.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** A FormField control prop. */
  control: _FormField.default.propTypes.control
} : {};
FormTextArea.defaultProps = {
  as: _FormField.default,
  control: _TextArea.default
};
var _default = FormTextArea;
exports.default = _default;