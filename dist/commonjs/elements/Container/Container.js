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
 * A container limits content to a maximum width
 */
function Container(props) {
  var text = props.text,
      textAlign = props.textAlign,
      fluid = props.fluid,
      children = props.children,
      className = props.className;

  var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(text, 'text'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useTextAlignProp)(textAlign), 'container', className);
  var rest = (0, _lib.getUnhandledProps)(Container, props);
  var ElementType = (0, _lib.getElementType)(Container, props);

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children
  );
}

Container._meta = {
  name: 'Container',
  type: _lib.META.TYPES.ELEMENT,
  props: {
    textAlign: _lib.SUI.TEXT_ALIGNMENTS
  }
};

Container.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Reduce maximum width to more naturally accommodate text */
  text: _react.PropTypes.bool,

  /** Container has no maximum with */
  fluid: _react.PropTypes.bool,

  /** Align container text */
  textAlign: _react.PropTypes.oneOf(Container._meta.props.textAlign)
};

exports.default = Container;