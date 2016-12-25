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

var _Statistic = require('./Statistic');

var _Statistic2 = _interopRequireDefault(_Statistic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StatisticGroup(props) {
  var children = props.children,
      className = props.className,
      color = props.color,
      horizontal = props.horizontal,
      inverted = props.inverted,
      items = props.items,
      size = props.size,
      widths = props.widths;

  var classes = (0, _classnames2.default)('ui', color, (0, _lib.useKeyOnly)(horizontal, 'horizontal'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useWidthProp)(widths), size, 'statistics', className);
  var rest = (0, _lib.getUnhandledProps)(StatisticGroup, props);
  var ElementType = (0, _lib.getElementType)(StatisticGroup, props);

  if (children) {
    return _react2.default.createElement(
      ElementType,
      _extends({}, rest, { className: classes }),
      children
    );
  }

  var itemsJSX = (0, _map3.default)(items, function (item) {
    return _react2.default.createElement(_Statistic2.default, _extends({ key: item.childKey || [item.label, item.title].join('-') }, item));
  });

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    itemsJSX
  );
}

StatisticGroup._meta = {
  name: 'StatisticGroup',
  type: _lib.META.TYPES.VIEW,
  parent: 'Statistic',
  props: {
    color: _lib.SUI.COLORS,
    size: (0, _without3.default)(_lib.SUI.SIZES, 'big', 'massive', 'medium'),
    widths: _lib.SUI.WIDTHS
  }
};

StatisticGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** A statistic group can be formatted to be different colors. */
  color: _react.PropTypes.oneOf(StatisticGroup._meta.props.color),

  /** A statistic group can present its measurement horizontally. */
  horizontal: _react.PropTypes.bool,

  /** A statistic group can be formatted to fit on a dark background. */
  inverted: _react.PropTypes.bool,

  /** Array of props for Statistic. */
  items: _lib.customPropTypes.collectionShorthand,

  /** A statistic group can vary in size. */
  size: _react.PropTypes.oneOf(StatisticGroup._meta.props.size),

  /** A statistic group can have its items divided evenly. */
  widths: _react.PropTypes.oneOf(StatisticGroup._meta.props.widths)
};

exports.default = StatisticGroup;