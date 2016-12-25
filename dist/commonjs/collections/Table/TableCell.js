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

var _Icon = require('../../elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TableCell(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      collapsing = props.collapsing,
      content = props.content,
      disabled = props.disabled,
      error = props.error,
      icon = props.icon,
      negative = props.negative,
      positive = props.positive,
      selectable = props.selectable,
      singleLine = props.singleLine,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign,
      warning = props.warning,
      width = props.width;


  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(collapsing, 'collapsing'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(negative, 'negative'), (0, _lib.useKeyOnly)(positive, 'positive'), (0, _lib.useKeyOnly)(selectable, 'selectable'), (0, _lib.useKeyOnly)(singleLine, 'single line'), (0, _lib.useKeyOnly)(warning, 'warning'), (0, _lib.useTextAlignProp)(textAlign), (0, _lib.useVerticalAlignProp)(verticalAlign), (0, _lib.useWidthProp)(width, 'wide'), className);
  var rest = (0, _lib.getUnhandledProps)(TableCell, props);
  var ElementType = (0, _lib.getElementType)(TableCell, props);

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
    _Icon2.default.create(icon),
    content
  );
}

TableCell._meta = {
  name: 'TableCell',
  type: _lib.META.TYPES.COLLECTION,
  parent: 'Table',
  props: {
    textAlign: _lib.SUI.TEXT_ALIGNMENTS,
    verticalAlign: _lib.SUI.VERTICAL_ALIGNMENTS,
    width: _lib.SUI.WIDTHS
  }
};

TableCell.defaultProps = {
  as: 'td'
};

TableCell.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A cell can be active or selected by a user. */
  active: _react.PropTypes.bool,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** A cell can be collapsing so that it only uses as much space as required. */
  collapsing: _react.PropTypes.bool,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A cell can be disabled. */
  disabled: _react.PropTypes.bool,

  /** A cell may call attention to an error or a negative value. */
  error: _react.PropTypes.bool,

  /** Add an Icon by name, props object, or pass an <Icon /> */
  icon: _lib.customPropTypes.itemShorthand,

  /** A cell may let a user know whether a value is bad. */
  negative: _react.PropTypes.bool,

  /** A cell may let a user know whether a value is good. */
  positive: _react.PropTypes.bool,

  /** A cell can be selectable. */
  selectable: _react.PropTypes.bool,

  /** A cell can specify that its contents should remain on a single line and not wrap. */
  singleLine: _react.PropTypes.bool,

  /** A table cell can adjust its text alignment. */
  textAlign: _react.PropTypes.oneOf(TableCell._meta.props.textAlign),

  /** A table cell can adjust its text alignment. */
  verticalAlign: _react.PropTypes.oneOf(TableCell._meta.props.verticalAlign),

  /** A cell may warn a user. */
  warning: _react.PropTypes.bool,

  /** A table can specify the width of individual columns independently. */
  width: _react.PropTypes.oneOf(TableCell._meta.props.width)
};

TableCell.create = (0, _lib.createShorthandFactory)(TableCell, function (content) {
  return { content: content };
}, true);

exports.default = TableCell;