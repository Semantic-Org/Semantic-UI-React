'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Checkbox = require('../../modules/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _FormField = require('./FormField');

var _FormField2 = _interopRequireDefault(_FormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sugar for <Form.Field control={Checkbox} />
 * @see Checkbox
 * @see Form
 */
function FormCheckbox(props) {
  var control = props.control;

  var rest = (0, _lib.getUnhandledProps)(FormCheckbox, props);
  var ElementType = (0, _lib.getElementType)(FormCheckbox, props);

  return _react2.default.createElement(ElementType, _extends({}, rest, { control: control }));
}

FormCheckbox._meta = {
  name: 'FormCheckbox',
  parent: 'Form',
  type: _lib.META.TYPES.COLLECTION
};

FormCheckbox.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A FormField control prop */
  control: _FormField2.default.propTypes.control
};

FormCheckbox.defaultProps = {
  as: _FormField2.default,
  control: _Checkbox2.default
};

exports.default = FormCheckbox;