'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Button = require('../../elements/Button');

var _Button2 = _interopRequireDefault(_Button);

var _FormField = require('./FormField');

var _FormField2 = _interopRequireDefault(_FormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sugar for <Form.Field control={Button} />
 * @see Button
 * @see Form
 */
function FormButton(props) {
  var control = props.control;

  var rest = (0, _lib.getUnhandledProps)(FormButton, props);
  var ElementType = (0, _lib.getElementType)(FormButton, props);

  return _react2.default.createElement(ElementType, _extends({}, rest, { control: control }));
}

FormButton._meta = {
  name: 'FormButton',
  parent: 'Form',
  type: _lib.META.TYPES.COLLECTION
};

FormButton.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A FormField control prop */
  control: _FormField2.default.propTypes.control
};

FormButton.defaultProps = {
  as: _FormField2.default,
  control: _Button2.default
};

exports.default = FormButton;