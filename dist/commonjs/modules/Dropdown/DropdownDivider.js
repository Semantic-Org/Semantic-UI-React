'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DropdownDivider(props) {
  var className = props.className;

  var classes = (0, _classnames2.default)('divider', className);
  var rest = (0, _lib.getUnhandledProps)(DropdownDivider, props);
  var ElementType = (0, _lib.getElementType)(DropdownDivider, props);

  return _react2.default.createElement(ElementType, _extends({}, rest, { className: classes }));
}

DropdownDivider._meta = {
  name: 'DropdownDivider',
  parent: 'Dropdown',
  type: _lib.META.TYPES.MODULE
};

DropdownDivider.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Additional classes. */
  className: _react.PropTypes.string
};

exports.default = DropdownDivider;