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

function LabelGroup(props) {
  var children = props.children,
      circular = props.circular,
      className = props.className,
      color = props.color,
      size = props.size,
      tag = props.tag;


  var classes = (0, _classnames2.default)('ui', color, size, (0, _lib.useKeyOnly)(circular, 'circular'), (0, _lib.useKeyOnly)(tag, 'tag'), 'labels', className);
  var rest = (0, _lib.getUnhandledProps)(LabelGroup, props);
  var ElementType = (0, _lib.getElementType)(LabelGroup, props);

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children
  );
}

LabelGroup._meta = {
  name: 'LabelGroup',
  parent: 'Label',
  type: _lib.META.TYPES.ELEMENT,
  props: {
    color: _lib.SUI.COLORS,
    size: _lib.SUI.SIZES
  }
};

LabelGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Labels can share shapes. */
  circular: _react.PropTypes.bool,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Label group can share colors together. */
  color: _react.PropTypes.oneOf(LabelGroup._meta.props.color),

  /** Label group can share sizes together. */
  size: _react.PropTypes.oneOf(LabelGroup._meta.props.size),

  /** Label group can share tag formatting. */
  tag: _react.PropTypes.bool
};

exports.default = LabelGroup;