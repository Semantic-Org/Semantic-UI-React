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

/**
 * A divider sub-component for Breadcrumb component.
 */
function BreadcrumbDivider(props) {
  var children = props.children,
      content = props.content,
      icon = props.icon,
      className = props.className;

  var classes = (0, _classnames2.default)(className, 'divider');
  var rest = (0, _lib.getUnhandledProps)(BreadcrumbDivider, props);
  var ElementType = (0, _lib.getElementType)(BreadcrumbDivider, props);

  if (icon) return _Icon2.default.create(icon, _extends({}, rest, { className: classes }));

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    content || children || '/'
  );
}

BreadcrumbDivider._meta = {
  name: 'BreadcrumbDivider',
  type: _lib.META.TYPES.COLLECTION,
  parent: 'Breadcrumb'
};

BreadcrumbDivider.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Render as an `Icon` component with `divider` class instead of a `div`. */
  icon: _lib.customPropTypes.itemShorthand
};

BreadcrumbDivider.create = (0, _lib.createShorthandFactory)(BreadcrumbDivider, function (icon) {
  return { icon: icon };
});

exports.default = BreadcrumbDivider;