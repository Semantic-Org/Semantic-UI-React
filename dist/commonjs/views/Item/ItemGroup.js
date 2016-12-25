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

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A group of items
 **/
function ItemGroup(props) {
  var children = props.children,
      className = props.className,
      divided = props.divided,
      items = props.items,
      link = props.link,
      relaxed = props.relaxed;

  var classes = (0, _classnames2.default)('ui', className, (0, _lib.useKeyOnly)(divided, 'divided'), (0, _lib.useKeyOnly)(link, 'link'), (0, _lib.useKeyOrValueAndKey)(relaxed, 'relaxed'), 'items');
  var rest = (0, _lib.getUnhandledProps)(ItemGroup, props);
  var ElementType = (0, _lib.getElementType)(ItemGroup, props);

  if (children) {
    return _react2.default.createElement(
      ElementType,
      _extends({}, rest, { className: classes }),
      children
    );
  }

  var itemsJSX = (0, _map3.default)(items, function (item) {
    var childKey = item.childKey,
        itemProps = _objectWithoutProperties(item, ['childKey']);

    var finalKey = childKey || [itemProps.content, itemProps.description, itemProps.header, itemProps.meta].join('-');

    return _react2.default.createElement(_Item2.default, _extends({}, itemProps, { key: finalKey }));
  });

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    itemsJSX
  );
}

ItemGroup._meta = {
  name: 'ItemGroup',
  type: _lib.META.TYPES.VIEW,
  parent: 'Item',
  props: {
    relaxed: ['very']
  }
};

ItemGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Items can be divided to better distinguish between grouped content. */
  divided: _react.PropTypes.bool,

  /** Shorthand array of props for Item. */
  items: _lib.customPropTypes.collectionShorthand,

  /** An item can be formatted so that the entire contents link to another page. */
  link: _react.PropTypes.bool,

  /** A group of items can relax its padding to provide more negative space. */
  relaxed: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(ItemGroup._meta.props.relaxed)])
};

exports.default = ItemGroup;