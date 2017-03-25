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

var _TableCell = require('./TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TableRow(props) {
  var active = props.active,
      cellAs = props.cellAs,
      cells = props.cells,
      children = props.children,
      className = props.className,
      disabled = props.disabled,
      error = props.error,
      negative = props.negative,
      positive = props.positive,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign,
      warning = props.warning;


  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(negative, 'negative'), (0, _lib.useKeyOnly)(positive, 'positive'), (0, _lib.useKeyOnly)(warning, 'warning'), (0, _lib.useTextAlignProp)(textAlign), (0, _lib.useVerticalAlignProp)(verticalAlign), className);
  var rest = (0, _lib.getUnhandledProps)(TableRow, props);
  var ElementType = (0, _lib.getElementType)(TableRow, props);

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
    (0, _map3.default)(cells, function (cell) {
      return _TableCell2.default.create(cell, { as: cellAs });
    })
  );
}

TableRow._meta = {
  name: 'TableRow',
  type: _lib.META.TYPES.COLLECTION,
  parent: 'Table',
  props: {
    textAlign: _lib.SUI.TEXT_ALIGNMENTS,
    verticalAlign: _lib.SUI.VERTICAL_ALIGNMENTS
  }
};

TableRow.defaultProps = {
  as: 'tr',
  cellAs: 'td'
};

TableRow.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A row can be active or selected by a user. */
  active: _react.PropTypes.bool,

  /** An element type to render as (string or function). */
  cellAs: _lib.customPropTypes.as,

  /** Shorthand array of props for TableCell. */
  cells: _lib.customPropTypes.collectionShorthand,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** A row can be disabled. */
  disabled: _react.PropTypes.bool,

  /** A row may call attention to an error or a negative value. */
  error: _react.PropTypes.bool,

  /** A row may let a user know whether a value is bad. */
  negative: _react.PropTypes.bool,

  /** A row may let a user know whether a value is good. */
  positive: _react.PropTypes.bool,

  /** A table row can adjust its text alignment. */
  textAlign: _react.PropTypes.oneOf(TableRow._meta.props.textAlign),

  /** A table row can adjust its vertical alignment. */
  verticalAlign: _react.PropTypes.oneOf(TableRow._meta.props.verticalAlign),

  /** A row may warn a user. */
  warning: _react.PropTypes.bool
};

TableRow.create = (0, _lib.createShorthandFactory)(TableRow, function (cells) {
  return { cells: cells };
}, true);

exports.default = TableRow;