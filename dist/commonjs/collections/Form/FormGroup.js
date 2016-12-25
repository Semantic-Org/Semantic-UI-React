'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * A set of fields can appear grouped together
 * @see Form
 */
function FormGroup(props) {
  var children = props.children,
      className = props.className,
      grouped = props.grouped,
      inline = props.inline,
      widths = props.widths;

  var classes = (0, _classnames2.default)((0, _lib.useWidthProp)(widths, null, true), (0, _lib.useKeyOnly)(inline, 'inline'), (0, _lib.useKeyOnly)(grouped, 'grouped'), 'fields', className);
  var rest = (0, _lib.getUnhandledProps)(FormGroup, props);
  var ElementType = (0, _lib.getElementType)(FormGroup, props);

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children
  );
}

FormGroup._meta = {
  name: 'FormGroup',
  parent: 'Form',
  type: _lib.META.TYPES.COLLECTION,
  props: {
    widths: [].concat(_toConsumableArray(_lib.SUI.WIDTHS), ['equal'])
  }
};

FormGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Fields can show related choices */
  grouped: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['inline']), _react.PropTypes.bool]),

  /** Multiple fields may be inline in a row */
  inline: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['grouped']), _react.PropTypes.bool]),

  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width */
  widths: _react.PropTypes.oneOf(FormGroup._meta.props.widths)
};

FormGroup.defaultProps = {
  as: 'div'
};

exports.default = FormGroup;