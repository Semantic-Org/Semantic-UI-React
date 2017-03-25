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

/**
 * A pushable sub-component for Sidebar.
 */
function SidebarPushable(props) {
  var className = props.className,
      children = props.children;


  var classes = (0, _classnames2.default)('pushable', className);
  var rest = (0, _lib.getUnhandledProps)(SidebarPushable, props);
  var ElementType = (0, _lib.getElementType)(SidebarPushable, props);

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children
  );
}

SidebarPushable._meta = {
  name: 'SidebarPushable',
  type: _lib.META.TYPES.MODULE,
  parent: 'Sidebar'
};

SidebarPushable.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string
};

exports.default = SidebarPushable;