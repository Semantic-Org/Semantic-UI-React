'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A group of segments can be formatted to appear together.
 */
function SegmentGroup(props) {
  var children = props.children,
      className = props.className,
      compact = props.compact,
      horizontal = props.horizontal,
      piled = props.piled,
      raised = props.raised,
      size = props.size,
      stacked = props.stacked;

  var classes = (0, _classnames2.default)('ui', size, (0, _lib.useKeyOnly)(horizontal, 'horizontal'), (0, _lib.useKeyOnly)(compact, 'compact'), (0, _lib.useKeyOnly)(piled, 'piled'), (0, _lib.useKeyOnly)(raised, 'raised'), (0, _lib.useKeyOnly)(stacked, 'stacked'), className, 'segments');
  var rest = (0, _lib.getUnhandledProps)(SegmentGroup, props);
  var ElementType = (0, _lib.getElementType)(SegmentGroup, props);

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children
  );
}

SegmentGroup._meta = {
  name: 'SegmentGroup',
  parent: 'Segment',
  type: _lib.META.TYPES.ELEMENT,
  props: {
    size: (0, _without3.default)(_lib.SUI.SIZES, 'medium')
  }
};

SegmentGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** A segment may take up only as much space as is necessary */
  compact: _react.PropTypes.bool,

  /** Formats content to be aligned horizontally */
  horizontal: _react.PropTypes.bool,

  /** Formatted to look like a pile of pages. */
  piled: _react.PropTypes.bool,

  /** A segment group may be formatted to raise above the page. */
  raised: _react.PropTypes.bool,

  /** A segment group can have different sizes. */
  size: _react.PropTypes.oneOf(SegmentGroup._meta.props.size),

  /** Formatted to show it contains multiple pages. */
  stacked: _react.PropTypes.bool
};

exports.default = SegmentGroup;