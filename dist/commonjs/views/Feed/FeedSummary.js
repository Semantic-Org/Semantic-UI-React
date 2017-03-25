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

var _FeedDate = require('./FeedDate');

var _FeedDate2 = _interopRequireDefault(_FeedDate);

var _FeedUser = require('./FeedUser');

var _FeedUser2 = _interopRequireDefault(_FeedUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FeedSummary(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      date = props.date,
      user = props.user;

  var classes = (0, _classnames2.default)(className, 'summary');
  var rest = (0, _lib.getUnhandledProps)(FeedSummary, props);
  var ElementType = (0, _lib.getElementType)(FeedSummary, props);

  if (children) {
    return _react2.default.createElement(
      ElementType,
      _extends({}, rest, { className: classes }),
      children
    );
  }

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    (0, _lib.createShorthand)(_FeedUser2.default, function (val) {
      return { content: val };
    }, user),
    content,
    (0, _lib.createShorthand)(_FeedDate2.default, function (val) {
      return { content: val };
    }, date)
  );
}

FeedSummary._meta = {
  name: 'FeedSummary',
  parent: 'Feed',
  type: _lib.META.TYPES.VIEW
};

FeedSummary.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Shorthand for FeedDate. */
  date: _lib.customPropTypes.itemShorthand,

  /** Shorthand for FeedUser. */
  user: _lib.customPropTypes.itemShorthand
};

exports.default = FeedSummary;