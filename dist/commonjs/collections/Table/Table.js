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

var _TableBody = require('./TableBody');

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = require('./TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableFooter = require('./TableFooter');

var _TableFooter2 = _interopRequireDefault(_TableFooter);

var _TableHeader = require('./TableHeader');

var _TableHeader2 = _interopRequireDefault(_TableHeader);

var _TableHeaderCell = require('./TableHeaderCell');

var _TableHeaderCell2 = _interopRequireDefault(_TableHeaderCell);

var _TableRow = require('./TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A table displays a collections of data grouped into rows
 */
function Table(props) {
  var basic = props.basic,
      attached = props.attached,
      renderBodyRow = props.renderBodyRow,
      celled = props.celled,
      children = props.children,
      className = props.className,
      collapsing = props.collapsing,
      color = props.color,
      columns = props.columns,
      compact = props.compact,
      definition = props.definition,
      fixed = props.fixed,
      footerRow = props.footerRow,
      headerRow = props.headerRow,
      inverted = props.inverted,
      padded = props.padded,
      selectable = props.selectable,
      singleLine = props.singleLine,
      size = props.size,
      stackable = props.stackable,
      striped = props.striped,
      structured = props.structured,
      tableData = props.tableData,
      unstackable = props.unstackable;


  var classes = (0, _classnames2.default)('ui', color, size, (0, _lib.useKeyOrValueAndKey)(attached, 'attached'), (0, _lib.useKeyOrValueAndKey)(basic, 'basic'), (0, _lib.useKeyOnly)(celled, 'celled'), (0, _lib.useKeyOnly)(collapsing, 'collapsing'), (0, _lib.useKeyOrValueAndKey)(compact, 'compact'), (0, _lib.useKeyOnly)(definition, 'definition'), (0, _lib.useKeyOnly)(fixed, 'fixed'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOrValueAndKey)(padded, 'padded'), (0, _lib.useKeyOnly)(selectable, 'selectable'), (0, _lib.useKeyOnly)(singleLine, 'single line'), (0, _lib.useKeyOnly)(stackable, 'stackable'), (0, _lib.useKeyOnly)(striped, 'striped'), (0, _lib.useKeyOnly)(structured, 'structured'), (0, _lib.useKeyOnly)(unstackable, 'unstackable'), (0, _lib.useWidthProp)(columns, 'column'), className, 'table');
  var rest = (0, _lib.getUnhandledProps)(Table, props);
  var ElementType = (0, _lib.getElementType)(Table, props);

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
    headerRow && _react2.default.createElement(
      _TableHeader2.default,
      null,
      _TableRow2.default.create(headerRow, { cellAs: 'th' })
    ),
    _react2.default.createElement(
      _TableBody2.default,
      null,
      renderBodyRow && (0, _map3.default)(tableData, function (data, index) {
        return _TableRow2.default.create(renderBodyRow(data, index));
      })
    ),
    footerRow && _react2.default.createElement(
      _TableFooter2.default,
      null,
      _TableRow2.default.create(footerRow)
    )
  );
}

Table._meta = {
  name: 'Table',
  type: _lib.META.TYPES.COLLECTION,
  props: {
    attached: ['top', 'bottom'],
    basic: ['very'],
    color: _lib.SUI.COLORS,
    columns: _lib.SUI.WIDTHS,
    compact: ['very'],
    padded: ['very'],
    size: (0, _without3.default)(_lib.SUI.SIZES, 'mini', 'tiny', 'medium', 'big', 'huge', 'massive')
  }
};

Table.defaultProps = {
  as: 'table'
};

Table.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Attach table to other content */
  attached: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(Table._meta.props.attached), _react.PropTypes.bool]),

  /** A table can reduce its complexity to increase readability. */
  basic: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(Table._meta.props.basic)]),

  /** A table may be divided each row into separate cells. */
  celled: _react.PropTypes.bool,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** A table can be collapsing, taking up only as much space as its rows. */
  collapsing: _react.PropTypes.bool,

  /** A table can be given a color to distinguish it from other tables. */
  color: _react.PropTypes.oneOf(Table._meta.props.color),

  /** A table can specify its column count to divide its content evenly. */
  columns: _react.PropTypes.oneOf(Table._meta.props.columns),

  /** A table may sometimes need to be more compact to make more rows visible at a time. */
  compact: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(Table._meta.props.compact)]),

  /** A table may be formatted to emphasize a first column that defines a rows content. */
  definition: _react.PropTypes.bool,

  /**
   * A table can use fixed a special faster form of table rendering that does not resize table cells based on content
   */
  fixed: _react.PropTypes.bool,

  /** Shorthand for a TableRow to be placed within Table.Footer. */
  footerRow: _lib.customPropTypes.itemShorthand,

  /** Shorthand for a TableRow to be placed within Table.Header. */
  headerRow: _lib.customPropTypes.itemShorthand,

  /** A table's colors can be inverted. */
  inverted: _react.PropTypes.bool,

  /** A table may sometimes need to be more padded for legibility. */
  padded: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(Table._meta.props.padded)]),

  /**
   * A function that takes (data, index) and returns shorthand for a TableRow
   * to be placed within Table.Body.
   */
  renderBodyRow: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _lib.customPropTypes.demand(['tableData']), _react.PropTypes.func]),

  /** A table can have its rows appear selectable. */
  selectable: _react.PropTypes.bool,

  /** A table can specify that its cell contents should remain on a single line and not wrap. */
  singleLine: _react.PropTypes.bool,

  /** A table can also be small or large. */
  size: _react.PropTypes.oneOf(Table._meta.props.size),

  /** A table can specify how it stacks table content responsively. */
  stackable: _react.PropTypes.bool,

  /** A table can stripe alternate rows of content with a darker color to increase contrast. */
  striped: _react.PropTypes.bool,

  /** A table can be formatted to display complex structured data. */
  structured: _react.PropTypes.bool,

  /** Data to be passed to the renderBodyRow function. */
  tableData: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _lib.customPropTypes.demand(['renderBodyRow']), _react.PropTypes.array]),

  /** A table can specify how it stacks table content responsively. */
  unstackable: _react.PropTypes.bool
};

Table.Body = _TableBody2.default;
Table.Cell = _TableCell2.default;
Table.Footer = _TableFooter2.default;
Table.Header = _TableHeader2.default;
Table.HeaderCell = _TableHeaderCell2.default;
Table.Row = _TableRow2.default;

exports.default = Table;