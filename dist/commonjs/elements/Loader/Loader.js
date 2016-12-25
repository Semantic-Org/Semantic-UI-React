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
 * A loader alerts a user to wait for an activity to complete.
 * @see Dimmer
 */
function Loader(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      content = props.content,
      disabled = props.disabled,
      indeterminate = props.indeterminate,
      inline = props.inline,
      inverted = props.inverted,
      size = props.size;


  var classes = (0, _classnames2.default)('ui', size, (0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(indeterminate, 'indeterminate'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(children || content, 'text'), (0, _lib.useKeyOrValueAndKey)(inline, 'inline'), 'loader', className);
  var rest = (0, _lib.getUnhandledProps)(Loader, props);
  var ElementType = (0, _lib.getElementType)(Loader, props);

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children || content
  );
}

Loader._meta = {
  name: 'Loader',
  type: _lib.META.TYPES.ELEMENT,
  props: {
    inline: ['centered'],
    size: _lib.SUI.SIZES
  }
};

Loader.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A loader can be active or visible. */
  active: _react.PropTypes.bool,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A loader can be disabled or hidden. */
  disabled: _react.PropTypes.bool,

  /** A loader can show it's unsure of how long a task will take. */
  indeterminate: _react.PropTypes.bool,

  /** Loaders can appear inline with content. */
  inline: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(Loader._meta.props.inline)]),

  /** Loaders can have their colors inverted. */
  inverted: _react.PropTypes.bool,

  /** Loaders can have different sizes. */
  size: _react.PropTypes.oneOf(Loader._meta.props.size)
};

exports.default = Loader;