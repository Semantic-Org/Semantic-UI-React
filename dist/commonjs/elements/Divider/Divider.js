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
 * A divider visually segments content into groups
 */
function Divider(props) {
  var horizontal = props.horizontal,
      vertical = props.vertical,
      inverted = props.inverted,
      fitted = props.fitted,
      hidden = props.hidden,
      section = props.section,
      clearing = props.clearing,
      children = props.children,
      className = props.className;


  var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(horizontal, 'horizontal'), (0, _lib.useKeyOnly)(vertical, 'vertical'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(fitted, 'fitted'), (0, _lib.useKeyOnly)(hidden, 'hidden'), (0, _lib.useKeyOnly)(section, 'section'), (0, _lib.useKeyOnly)(clearing, 'clearing'), 'divider', className);
  var rest = (0, _lib.getUnhandledProps)(Divider, props);
  var ElementType = (0, _lib.getElementType)(Divider, props);

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children
  );
}

Divider._meta = {
  name: 'Divider',
  type: _lib.META.TYPES.ELEMENT
};

Divider.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Divider can segment content horizontally */
  horizontal: _react.PropTypes.bool,

  /** Divider can segment content vertically */
  vertical: _react.PropTypes.bool,

  /** Divider can have it's colours inverted */
  inverted: _react.PropTypes.bool,

  /** Divider can be fitted without any space above or below it */
  fitted: _react.PropTypes.bool,

  /** Divider can divide content without creating a dividing line */
  hidden: _react.PropTypes.bool,

  /** Divider can provide greater margins to divide sections of content */
  section: _react.PropTypes.bool,

  /** Divider can clear the content above it */
  clearing: _react.PropTypes.bool
};

exports.default = Divider;