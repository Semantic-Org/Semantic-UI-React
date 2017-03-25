'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = PopupContent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A PopupContent displays the content body of a Popover.
 */
function PopupContent(props) {
  var children = props.children,
      className = props.className;

  var classes = (0, _classnames2.default)('content', className);
  var rest = (0, _lib.getUnhandledProps)(PopupContent, props);
  var ElementType = (0, _lib.getElementType)(PopupContent, props);

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children
  );
}

PopupContent.create = (0, _lib.createShorthandFactory)(PopupContent, function (value) {
  return { children: value };
});

PopupContent.propTypes = {
  /** The content of the Popup */
  children: _react.PropTypes.node,

  /** Classes to add to the Popup content className. */
  className: _react.PropTypes.string
};

PopupContent._meta = {
  name: 'PopupContent',
  type: _lib.META.TYPES.MODULE,
  parent: 'Popup'
};