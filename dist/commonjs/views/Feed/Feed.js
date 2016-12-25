'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _FeedContent = require('./FeedContent');

var _FeedContent2 = _interopRequireDefault(_FeedContent);

var _FeedDate = require('./FeedDate');

var _FeedDate2 = _interopRequireDefault(_FeedDate);

var _FeedEvent = require('./FeedEvent');

var _FeedEvent2 = _interopRequireDefault(_FeedEvent);

var _FeedExtra = require('./FeedExtra');

var _FeedExtra2 = _interopRequireDefault(_FeedExtra);

var _FeedLabel = require('./FeedLabel');

var _FeedLabel2 = _interopRequireDefault(_FeedLabel);

var _FeedLike = require('./FeedLike');

var _FeedLike2 = _interopRequireDefault(_FeedLike);

var _FeedMeta = require('./FeedMeta');

var _FeedMeta2 = _interopRequireDefault(_FeedMeta);

var _FeedSummary = require('./FeedSummary');

var _FeedSummary2 = _interopRequireDefault(_FeedSummary);

var _FeedUser = require('./FeedUser');

var _FeedUser2 = _interopRequireDefault(_FeedUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Feed(props) {
  var children = props.children,
      className = props.className,
      events = props.events,
      size = props.size;

  var classes = (0, _classnames2.default)('ui', className, size, 'feed');
  var rest = (0, _lib.getUnhandledProps)(Feed, props);
  var ElementType = (0, _lib.getElementType)(Feed, props);

  if (children) {
    return _react2.default.createElement(
      ElementType,
      _extends({}, rest, { className: classes }),
      children
    );
  }

  var eventElements = (0, _map3.default)(events, function (eventProps) {
    var childKey = eventProps.childKey,
        date = eventProps.date,
        meta = eventProps.meta,
        summary = eventProps.summary,
        eventData = _objectWithoutProperties(eventProps, ['childKey', 'date', 'meta', 'summary']);

    var finalKey = childKey || [date, meta, summary].join('-');

    return _react2.default.createElement(_FeedEvent2.default, _extends({
      date: date,
      key: finalKey,
      meta: meta,
      summary: summary
    }, eventData));
  });

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    eventElements
  );
}

Feed._meta = {
  name: 'Feed',
  type: _lib.META.TYPES.VIEW,
  props: {
    size: (0, _without3.default)(_lib.SUI.SIZES, 'mini', 'tiny', 'medium', 'big', 'huge', 'massive')
  }
};

Feed.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Shorthand array of props for FeedEvent. */
  events: _lib.customPropTypes.collectionShorthand,

  /** A feed can have different sizes. */
  size: _react.PropTypes.oneOf(Feed._meta.props.size)
};

Feed.Content = _FeedContent2.default;
Feed.Date = _FeedDate2.default;
Feed.Event = _FeedEvent2.default;
Feed.Extra = _FeedExtra2.default;
Feed.Label = _FeedLabel2.default;
Feed.Like = _FeedLike2.default;
Feed.Meta = _FeedMeta2.default;
Feed.Summary = _FeedSummary2.default;
Feed.User = _FeedUser2.default;

exports.default = Feed;