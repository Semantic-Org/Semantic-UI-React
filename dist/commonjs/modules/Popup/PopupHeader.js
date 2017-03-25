'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = PopupHeader;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A PopupHeader displays a header in a Popover.
 */
function PopupHeader(props) {
  var children = props.children,
      className = props.className;

  var classes = (0, _classnames2.default)('header', className);
  var rest = (0, _lib.getUnhandledProps)(PopupHeader, props);
  var ElementType = (0, _lib.getElementType)(PopupHeader, props);

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children
  );
}

PopupHeader.create = (0, _lib.createShorthandFactory)(PopupHeader, function (value) {
  return { children: value };
});

PopupHeader.propTypes = {
  /** The header of the Popup */
  children: _react.PropTypes.node,

  /** Classes to add to the Popup header className. */
  className: _react.PropTypes.string
};

PopupHeader._meta = {
  name: 'PopupHeader',
  type: _lib.META.TYPES.MODULE,
  parent: 'Popup'
};