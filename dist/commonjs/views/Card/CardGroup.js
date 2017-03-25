'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A group of cards.
 */
function CardGroup(props) {
  var children = props.children,
      className = props.className,
      doubling = props.doubling,
      items = props.items,
      itemsPerRow = props.itemsPerRow,
      stackable = props.stackable;

  var classes = (0, _classnames2.default)('ui', (0, _lib.useWidthProp)(itemsPerRow), (0, _lib.useKeyOnly)(doubling, 'doubling'), (0, _lib.useKeyOnly)(stackable, 'stackable'), className, 'cards');
  var rest = (0, _lib.getUnhandledProps)(CardGroup, props);
  var ElementType = (0, _lib.getElementType)(CardGroup, props);

  if (children) {
    return _react2.default.createElement(
      ElementType,
      _extends({}, rest, { className: classes }),
      children
    );
  }

  var content = (0, _map3.default)(items, function (item) {
    var key = item.key || [item.header, item.description].join('-');
    return _react2.default.createElement(_Card2.default, _extends({ key: key }, item));
  });

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    content
  );
}

CardGroup._meta = {
  name: 'CardGroup',
  parent: 'Card',
  props: {
    itemsPerRow: _lib.SUI.WIDTHS
  },
  type: _lib.META.TYPES.VIEW
};

CardGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** A group of cards can double its column width for mobile */
  doubling: _react.PropTypes.bool,

  /** Shorthand array of props for Card. */
  items: _lib.customPropTypes.collectionShorthand,

  /** A group of cards can set how many cards should exist in a row */
  itemsPerRow: _react.PropTypes.oneOf(CardGroup._meta.props.itemsPerRow),

  /** A group of cards can automatically stack rows to a single columns on mobile devices */
  stackable: _react.PropTypes.bool
};

exports.default = CardGroup;