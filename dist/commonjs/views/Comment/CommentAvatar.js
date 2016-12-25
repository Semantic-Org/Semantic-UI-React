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

function CommentAvatar(props) {
  var className = props.className,
      src = props.src;

  var classes = (0, _classnames2.default)('avatar', className);
  var rest = (0, _lib.getUnhandledProps)(CommentAvatar, props);
  var ElementType = (0, _lib.getElementType)(CommentAvatar, props);

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    (0, _lib.createHTMLImage)(src)
  );
}

CommentAvatar._meta = {
  name: 'CommentAvatar',
  parent: 'Comment',
  type: _lib.META.TYPES.VIEW
};

CommentAvatar.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Specifies the URL of the image. */
  src: _react.PropTypes.string
};

exports.default = CommentAvatar;