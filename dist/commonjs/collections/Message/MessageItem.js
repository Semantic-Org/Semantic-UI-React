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

function MessageItem(props) {
  var children = props.children,
      className = props.className,
      content = props.content;

  var classes = (0, _classnames2.default)('content', className);
  var rest = (0, _lib.getUnhandledProps)(MessageItem, props);
  var ElementType = (0, _lib.getElementType)(MessageItem, props);

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    content || children
  );
}

MessageItem._meta = {
  name: 'MessageItem',
  parent: 'Message',
  type: _lib.META.TYPES.COLLECTION
};

MessageItem.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.itemShorthand,

  /** Additional classes. */
  className: _react.PropTypes.string
};

MessageItem.defaultProps = {
  as: 'li'
};

MessageItem.create = (0, _lib.createShorthandFactory)(MessageItem, function (content) {
  return { content: content };
}, true);

exports.default = MessageItem;