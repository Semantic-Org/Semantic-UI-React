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

var _FeedContent = require('./FeedContent');

var _FeedContent2 = _interopRequireDefault(_FeedContent);

var _FeedLabel = require('./FeedLabel');

var _FeedLabel2 = _interopRequireDefault(_FeedLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FeedEvent(props) {
  var content = props.content,
      children = props.children,
      className = props.className,
      date = props.date,
      extraImages = props.extraImages,
      extraText = props.extraText,
      image = props.image,
      icon = props.icon,
      meta = props.meta,
      summary = props.summary;

  var classes = (0, _classnames2.default)(className, 'event');
  var rest = (0, _lib.getUnhandledProps)(FeedEvent, props);
  var ElementType = (0, _lib.getElementType)(FeedEvent, props);

  var hasContentProp = content || date || extraImages || extraText || meta || summary;
  var contentProps = { content: content, date: date, extraImages: extraImages, extraText: extraText, meta: meta, summary: summary };

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    (0, _lib.createShorthand)(_FeedLabel2.default, function (val) {
      return { icon: val };
    }, icon),
    (0, _lib.createShorthand)(_FeedLabel2.default, function (val) {
      return { image: val };
    }, image),
    hasContentProp && _react2.default.createElement(_FeedContent2.default, contentProps),
    children
  );
}

FeedEvent._meta = {
  name: 'FeedEvent',
  parent: 'Feed',
  type: _lib.META.TYPES.VIEW
};

FeedEvent.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Shorthand for FeedContent. */
  content: _FeedContent2.default.propTypes.content,

  /** Shorthand for FeedDate. */
  date: _FeedContent2.default.propTypes.date,

  /** Shorthand for FeedExtra with images. */
  extraImages: _FeedContent2.default.propTypes.extraImages,

  /** Shorthand for FeedExtra with content. */
  extraText: _FeedContent2.default.propTypes.extraText,

  /** An event can contain icon label. */
  icon: _lib.customPropTypes.itemShorthand,

  /** An event can contain image label. */
  image: _lib.customPropTypes.itemShorthand,

  /** Shorthand for FeedMeta. */
  meta: _FeedContent2.default.propTypes.meta,

  /** Shorthand for FeedSummary. */
  summary: _FeedContent2.default.propTypes.summary
};

exports.default = FeedEvent;