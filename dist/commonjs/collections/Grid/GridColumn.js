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

/**
 * A column sub-component for Grid.
 */
function GridColumn(props) {
  var children = props.children,
      className = props.className,
      computer = props.computer,
      color = props.color,
      floated = props.floated,
      largeScreen = props.largeScreen,
      mobile = props.mobile,
      only = props.only,
      stretched = props.stretched,
      tablet = props.tablet,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign,
      widescreen = props.widescreen,
      width = props.width;


  var classes = (0, _classnames2.default)(color, (0, _lib.useKeyOnly)(stretched, 'stretched'), (0, _lib.useTextAlignProp)(textAlign), (0, _lib.useValueAndKey)(floated, 'floated'), (0, _lib.useValueAndKey)(only, 'only'), (0, _lib.useVerticalAlignProp)(verticalAlign), (0, _lib.useWidthProp)(computer, 'wide computer'), (0, _lib.useWidthProp)(largeScreen, 'wide large screen'), (0, _lib.useWidthProp)(mobile, 'wide mobile'), (0, _lib.useWidthProp)(tablet, 'wide tablet'), (0, _lib.useWidthProp)(widescreen, 'wide widescreen'), (0, _lib.useWidthProp)(width, 'wide'), 'column', className);
  var rest = (0, _lib.getUnhandledProps)(GridColumn, props);
  var ElementType = (0, _lib.getElementType)(GridColumn, props);

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children
  );
}

GridColumn._meta = {
  name: 'GridColumn',
  parent: 'Grid',
  type: _lib.META.TYPES.COLLECTION,
  props: {
    color: _lib.SUI.COLORS,
    computer: _lib.SUI.WIDTHS,
    floated: _lib.SUI.FLOATS,
    largeScreen: _lib.SUI.WIDTHS,
    mobile: _lib.SUI.WIDTHS,
    only: ['computer', 'large screen', 'mobile', 'tablet mobile', 'tablet', 'widescreen'],
    tablet: _lib.SUI.WIDTHS,
    textAlign: _lib.SUI.TEXT_ALIGNMENTS,
    verticalAlign: _lib.SUI.VERTICAL_ALIGNMENTS,
    widescreen: _lib.SUI.WIDTHS,
    width: _lib.SUI.WIDTHS
  }
};

GridColumn.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** A column can specify a width for a computer. */
  computer: _react.PropTypes.oneOf(GridColumn._meta.props.width),

  /** A grid column can be colored. */
  color: _react.PropTypes.oneOf(GridColumn._meta.props.color),

  /** A column can sit flush against the left or right edge of a row. */
  floated: _react.PropTypes.oneOf(GridColumn._meta.props.floated),

  /** A column can specify a width for a large screen device. */
  largeScreen: _react.PropTypes.oneOf(GridColumn._meta.props.width),

  /** A column can specify a width for a mobile device. */
  mobile: _react.PropTypes.oneOf(GridColumn._meta.props.width),

  /** A column can appear only for a specific device, or screen sizes. */
  only: _react.PropTypes.oneOf(GridColumn._meta.props.only),

  /** An can stretch its contents to take up the entire grid or row height. */
  stretched: _react.PropTypes.bool,

  /** A column can specify a width for a tablet device. */
  tablet: _react.PropTypes.oneOf(GridColumn._meta.props.width),

  /** A row can specify its text alignment. */
  textAlign: _react.PropTypes.oneOf(GridColumn._meta.props.textAlign),

  /** A column can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: _react.PropTypes.oneOf(GridColumn._meta.props.verticalAlign),

  /** A column can specify a width for a wide screen device. */
  widescreen: _react.PropTypes.oneOf(GridColumn._meta.props.width),

  /** Represents width of column. */
  width: _react.PropTypes.oneOf(GridColumn._meta.props.width)
};

exports.default = GridColumn;