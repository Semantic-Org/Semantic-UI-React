'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Dropdown = require('../../modules/Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A Select is sugar for <Dropdown selection />.
 * @see Dropdown
 * @see Form
 */
function Select(props) {
  return _react2.default.createElement(_Dropdown2.default, _extends({}, props, { selection: true }));
}

Select._meta = {
  name: 'Select',
  type: _lib.META.TYPES.ADDON
};

Select.Divider = _Dropdown2.default.Divider;
Select.Header = _Dropdown2.default.Header;
Select.Item = _Dropdown2.default.Item;
Select.Menu = _Dropdown2.default.Menu;

exports.default = Select;