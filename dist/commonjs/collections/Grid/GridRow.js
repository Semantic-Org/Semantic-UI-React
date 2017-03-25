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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * A row sub-component for Grid.
 */
function GridRow(props) {
  var centered = props.centered,
      children = props.children,
      className = props.className,
      color = props.color,
      columns = props.columns,
      divided = props.divided,
      only = props.only,
      reversed = props.reversed,
      stretched = props.stretched,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign;


  var classes = (0, _classnames2.default)(color, (0, _lib.useKeyOnly)(centered, 'centered'), (0, _lib.useKeyOnly)(divided, 'divided'), (0, _lib.useKeyOnly)(stretched, 'stretched'), (0, _lib.useTextAlignProp)(textAlign), (0, _lib.useValueAndKey)(only, 'only'), (0, _lib.useValueAndKey)(reversed, 'reversed'), (0, _lib.useVerticalAlignProp)(verticalAlign), (0, _lib.useWidthProp)(columns, 'column', true), 'row', className);
  var rest = (0, _lib.getUnhandledProps)(GridRow, props);
  var ElementType = (0, _lib.getElementType)(GridRow, props);

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children
  );
}

GridRow._meta = {
  name: 'GridRow',
  parent: 'Grid',
  type: _lib.META.TYPES.COLLECTION,
  props: {
    color: _lib.SUI.COLORS,
    columns: [].concat(_toConsumableArray(_lib.SUI.WIDTHS), ['equal']),
    only: ['computer', 'large screen', 'mobile', 'tablet mobile', 'tablet', 'widescreen'],
    reversed: ['computer', 'computer vertically', 'mobile', 'mobile vertically', 'tablet', 'tablet vertically'],
    textAlign: _lib.SUI.TEXT_ALIGNMENTS,
    verticalAlign: _lib.SUI.VERTICAL_ALIGNMENTS
  }
};

GridRow.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A row can have its columns centered. */
  centered: _react.PropTypes.bool,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** A grid row can be colored. */
  color: _react.PropTypes.oneOf(GridRow._meta.props.color),

  /** Represents column count per line in Row. */
  columns: _react.PropTypes.oneOf(GridRow._meta.props.columns),

  /** A row can have dividers between its columns. */
  divided: _react.PropTypes.bool,

  /** A row can appear only for a specific device, or screen sizes. */
  only: _react.PropTypes.oneOf(GridRow._meta.props.only),

  /** A  row can specify that its columns should reverse order at different device sizes. */
  reversed: _react.PropTypes.oneOf(GridRow._meta.props.reversed),

  /** An can stretch its contents to take up the entire column height. */
  stretched: _react.PropTypes.bool,

  /** A row can specify its text alignment. */
  textAlign: _react.PropTypes.oneOf(GridRow._meta.props.textAlign),

  /** A row can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: _react.PropTypes.oneOf(GridRow._meta.props.verticalAlign)
};

exports.default = GridRow;