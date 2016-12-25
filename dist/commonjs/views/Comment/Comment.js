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

var _CommentAction = require('./CommentAction');

var _CommentAction2 = _interopRequireDefault(_CommentAction);

var _CommentActions = require('./CommentActions');

var _CommentActions2 = _interopRequireDefault(_CommentActions);

var _CommentAuthor = require('./CommentAuthor');

var _CommentAuthor2 = _interopRequireDefault(_CommentAuthor);

var _CommentAvatar = require('./CommentAvatar');

var _CommentAvatar2 = _interopRequireDefault(_CommentAvatar);

var _CommentContent = require('./CommentContent');

var _CommentContent2 = _interopRequireDefault(_CommentContent);

var _CommentGroup = require('./CommentGroup');

var _CommentGroup2 = _interopRequireDefault(_CommentGroup);

var _CommentMetadata = require('./CommentMetadata');

var _CommentMetadata2 = _interopRequireDefault(_CommentMetadata);

var _CommentText = require('./CommentText');

var _CommentText2 = _interopRequireDefault(_CommentText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A comment displays user feedback to site content
 * */
function Comment(props) {
  var className = props.className,
      children = props.children,
      collapsed = props.collapsed;


  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(collapsed, 'collapsed'), 'comment', className);
  var rest = (0, _lib.getUnhandledProps)(Comment, props);
  var ElementType = (0, _lib.getElementType)(Comment, props);

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children
  );
}

Comment._meta = {
  name: 'Comment',
  type: _lib.META.TYPES.VIEW
};

Comment.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Comment can be collapsed, or hidden from view. */
  collapsed: _react.PropTypes.bool
};

Comment.Author = _CommentAuthor2.default;
Comment.Action = _CommentAction2.default;
Comment.Actions = _CommentActions2.default;
Comment.Avatar = _CommentAvatar2.default;
Comment.Content = _CommentContent2.default;
Comment.Group = _CommentGroup2.default;
Comment.Metadata = _CommentMetadata2.default;
Comment.Text = _CommentText2.default;

exports.default = Comment;