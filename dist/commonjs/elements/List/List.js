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

var _ListContent = require('./ListContent');

var _ListContent2 = _interopRequireDefault(_ListContent);

var _ListDescription = require('./ListDescription');

var _ListDescription2 = _interopRequireDefault(_ListDescription);

var _ListHeader = require('./ListHeader');

var _ListHeader2 = _interopRequireDefault(_ListHeader);

var _ListIcon = require('./ListIcon');

var _ListIcon2 = _interopRequireDefault(_ListIcon);

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListList = require('./ListList');

var _ListList2 = _interopRequireDefault(_ListList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A list groups related content
 **/
function List(props) {
  var animated = props.animated,
      bulleted = props.bulleted,
      celled = props.celled,
      children = props.children,
      className = props.className,
      divided = props.divided,
      floated = props.floated,
      horizontal = props.horizontal,
      inverted = props.inverted,
      items = props.items,
      link = props.link,
      ordered = props.ordered,
      relaxed = props.relaxed,
      size = props.size,
      selection = props.selection,
      verticalAlign = props.verticalAlign;


  var classes = (0, _classnames2.default)('ui', size, (0, _lib.useKeyOnly)(animated, 'animated'), (0, _lib.useKeyOnly)(bulleted, 'bulleted'), (0, _lib.useKeyOnly)(celled, 'celled'), (0, _lib.useKeyOnly)(divided, 'divided'), (0, _lib.useKeyOnly)(horizontal, 'horizontal'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(link, 'link'), (0, _lib.useKeyOnly)(ordered, 'ordered'), (0, _lib.useKeyOnly)(selection, 'selection'), (0, _lib.useKeyOrValueAndKey)(relaxed, 'relaxed'), (0, _lib.useValueAndKey)(floated, 'floated'), (0, _lib.useVerticalAlignProp)(verticalAlign), 'list', className);
  var rest = (0, _lib.getUnhandledProps)(List, props);
  var ElementType = (0, _lib.getElementType)(List, props);

  if (children) {
    return _react2.default.createElement(
      ElementType,
      _extends({}, rest, { role: 'list', className: classes }),
      children
    );
  }

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { role: 'list', className: classes }),
    (0, _map3.default)(items, function (item) {
      return _ListItem2.default.create(item);
    })
  );
}

List._meta = {
  name: 'List',
  type: _lib.META.TYPES.ELEMENT,
  props: {
    floated: _lib.SUI.FLOATS,
    relaxed: ['very'],
    size: _lib.SUI.SIZES,
    verticalAlign: _lib.SUI.VERTICAL_ALIGNMENTS
  }
};

List.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A list can animate to set the current item apart from the list. */
  animated: _react.PropTypes.bool,

  /** A list can mark items with a bullet. */
  bulleted: _react.PropTypes.bool,

  /** A list can divide its items into cells. */
  celled: _react.PropTypes.bool,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** A list can show divisions between content. */
  divided: _react.PropTypes.bool,

  /** An list can be floated left or right. */
  floated: _react.PropTypes.oneOf(List._meta.props.floated),

  /** A list can be formatted to have items appear horizontally. */
  horizontal: _react.PropTypes.bool,

  /** A list can be inverted to appear on a dark background. */
  inverted: _react.PropTypes.bool,

  /** Shorthand array of props for ListItem. */
  items: _lib.customPropTypes.collectionShorthand,

  /** A list can be specially formatted for navigation links. */
  link: _react.PropTypes.bool,

  /** A list can be ordered numerically. */
  ordered: _react.PropTypes.bool,

  /** A list can relax its padding to provide more negative space. */
  relaxed: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(List._meta.props.relaxed)]),

  /** A selection list formats list items as possible choices. */
  selection: _react.PropTypes.bool,

  /** A list can vary in size. */
  size: _react.PropTypes.oneOf(List._meta.props.size),

  /** An element inside a list can be vertically aligned. */
  verticalAlign: _react.PropTypes.oneOf(List._meta.props.verticalAlign)
};

List.Content = _ListContent2.default;
List.Description = _ListDescription2.default;
List.Header = _ListHeader2.default;
List.Icon = _ListIcon2.default;
List.Item = _ListItem2.default;
List.List = _ListList2.default;

exports.default = List;