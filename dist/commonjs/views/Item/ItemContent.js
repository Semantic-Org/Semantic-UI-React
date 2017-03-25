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

var _ItemHeader = require('./ItemHeader');

var _ItemHeader2 = _interopRequireDefault(_ItemHeader);

var _ItemDescription = require('./ItemDescription');

var _ItemDescription2 = _interopRequireDefault(_ItemDescription);

var _ItemExtra = require('./ItemExtra');

var _ItemExtra2 = _interopRequireDefault(_ItemExtra);

var _ItemMeta = require('./ItemMeta');

var _ItemMeta2 = _interopRequireDefault(_ItemMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An item can contain content
 **/
function ItemContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      description = props.description,
      extra = props.extra,
      header = props.header,
      meta = props.meta,
      verticalAlign = props.verticalAlign;

  var classes = (0, _classnames2.default)(className, (0, _lib.useVerticalAlignProp)(verticalAlign), 'content');
  var rest = (0, _lib.getUnhandledProps)(ItemContent, props);
  var ElementType = (0, _lib.getElementType)(ItemContent, props);

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
    (0, _lib.createShorthand)(_ItemHeader2.default, function (val) {
      return { content: val };
    }, header),
    (0, _lib.createShorthand)(_ItemMeta2.default, function (val) {
      return { content: val };
    }, meta),
    (0, _lib.createShorthand)(_ItemDescription2.default, function (val) {
      return { content: val };
    }, description),
    (0, _lib.createShorthand)(_ItemExtra2.default, function (val) {
      return { content: val };
    }, extra),
    content
  );
}

ItemContent._meta = {
  name: 'ItemContent',
  parent: 'Item',
  type: _lib.META.TYPES.VIEW,
  props: {
    verticalAlign: _lib.SUI.VERTICAL_ALIGNMENTS
  }
};

ItemContent.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Shorthand for ItemDescription component. */
  description: _lib.customPropTypes.itemShorthand,

  /** Shorthand for ItemExtra component. */
  extra: _lib.customPropTypes.itemShorthand,

  /** Shorthand for ItemHeader component. */
  header: _lib.customPropTypes.itemShorthand,

  /** Shorthand for ItemMeta component. */
  meta: _lib.customPropTypes.itemShorthand,

  /** Content can specify its vertical alignment */
  verticalAlign: _react.PropTypes.oneOf(ItemContent._meta.props.verticalAlign)
};

exports.default = ItemContent;