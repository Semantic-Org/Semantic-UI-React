'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require('../../lib');

var _Icon = require('../../elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _MessageContent = require('./MessageContent');

var _MessageContent2 = _interopRequireDefault(_MessageContent);

var _MessageHeader = require('./MessageHeader');

var _MessageHeader2 = _interopRequireDefault(_MessageHeader);

var _MessageList = require('./MessageList');

var _MessageList2 = _interopRequireDefault(_MessageList);

var _MessageItem = require('./MessageItem');

var _MessageItem2 = _interopRequireDefault(_MessageItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A message displays information that explains nearby content
 * @see Form
 */
function Message(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      header = props.header,
      icon = props.icon,
      list = props.list,
      onDismiss = props.onDismiss,
      hidden = props.hidden,
      visible = props.visible,
      floating = props.floating,
      compact = props.compact,
      attached = props.attached,
      warning = props.warning,
      info = props.info,
      positive = props.positive,
      success = props.success,
      negative = props.negative,
      error = props.error,
      color = props.color,
      size = props.size;


  var classes = (0, _classnames2.default)('ui', size, color, (0, _lib.useKeyOnly)(icon, 'icon'), (0, _lib.useKeyOnly)(hidden, 'hidden'), (0, _lib.useKeyOnly)(visible, 'visible'), (0, _lib.useKeyOnly)(floating, 'floating'), (0, _lib.useKeyOnly)(compact, 'compact'), (0, _lib.useKeyOrValueAndKey)(attached, 'attached'), (0, _lib.useKeyOnly)(warning, 'warning'), (0, _lib.useKeyOnly)(info, 'info'), (0, _lib.useKeyOnly)(positive, 'positive'), (0, _lib.useKeyOnly)(success, 'success'), (0, _lib.useKeyOnly)(negative, 'negative'), (0, _lib.useKeyOnly)(error, 'error'), 'message', className);

  var dismissIcon = onDismiss && _react2.default.createElement(_Icon2.default, { name: 'close', onClick: onDismiss });
  var rest = (0, _lib.getUnhandledProps)(Message, props);
  var ElementType = (0, _lib.getElementType)(Message, props);

  if (children) {
    return _react2.default.createElement(
      ElementType,
      _extends({}, rest, { className: classes }),
      dismissIcon,
      children
    );
  }

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    dismissIcon,
    _Icon2.default.create(icon),
    (header || content || list) && _react2.default.createElement(
      _MessageContent2.default,
      null,
      _MessageHeader2.default.create(header),
      _MessageList2.default.create(list),
      (0, _lib.createShorthand)('p', function (val) {
        return { children: val };
      }, content)
    )
  );
}

Message._meta = {
  name: 'Message',
  type: _lib.META.TYPES.COLLECTION,
  props: {
    attached: ['bottom'],
    color: _lib.SUI.COLORS,
    size: (0, _without3.default)(_lib.SUI.SIZES, 'medium')
  }
};

Message.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Shorthand for MessageHeader. */
  header: _lib.customPropTypes.itemShorthand,

  /** A message can contain an icon. */
  icon: _react.PropTypes.oneOfType([_react.PropTypes.bool, _lib.customPropTypes.itemShorthand]),

  /** Array shorthand items for the MessageList. Mutually exclusive with children. */
  list: _lib.customPropTypes.collectionShorthand,

  /**
   * A message that the user can choose to hide.
   * Called when the user clicks the "x" icon. This also adds the "x" icon.
   */
  onDismiss: _react.PropTypes.func,

  /** A message can be hidden. */
  hidden: _react.PropTypes.bool,

  /** A message can be set to visible to force itself to be shown. */
  visible: _react.PropTypes.bool,

  /** A message can float above content that it is related to. */
  floating: _react.PropTypes.bool,

  /** A message can only take up the width of its content. */
  compact: _react.PropTypes.bool,

  /** A message can be formatted to attach itself to other content. */
  attached: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(Message._meta.props.attached)]),

  /** A message may be formatted to display warning messages. */
  warning: _react.PropTypes.bool,

  /** A message may be formatted to display information. */
  info: _react.PropTypes.bool,

  /** A message may be formatted to display a positive message.  Same as `success`. */
  positive: _react.PropTypes.bool,

  /** A message may be formatted to display a positive message.  Same as `positive`. */
  success: _react.PropTypes.bool,

  /** A message may be formatted to display a negative message. Same as `error`. */
  negative: _react.PropTypes.bool,

  /** A message may be formatted to display a negative message. Same as `negative`. */
  error: _react.PropTypes.bool,

  /** A message can be formatted to be different colors. */
  color: _react.PropTypes.oneOf(Message._meta.props.color),

  /** A message can have different sizes. */
  size: _react.PropTypes.oneOf(Message._meta.props.size)
};

Message.Content = _MessageContent2.default;
Message.Header = _MessageHeader2.default;
Message.List = _MessageList2.default;
Message.Item = _MessageItem2.default;

exports.default = Message;