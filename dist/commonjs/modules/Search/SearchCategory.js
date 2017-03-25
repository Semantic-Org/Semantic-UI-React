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

var defaultRenderer = function defaultRenderer(_ref) {
  var name = _ref.name;
  return name;
};

function SearchCategory(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      renderer = props.renderer;

  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), 'category', className);
  var rest = (0, _lib.getUnhandledProps)(SearchCategory, props);
  var ElementType = (0, _lib.getElementType)(SearchCategory, props);

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    _react2.default.createElement(
      'div',
      { className: 'name' },
      renderer ? renderer(props) : defaultRenderer(props)
    ),
    children
  );
}

SearchCategory._meta = {
  name: 'SearchCategory',
  parent: 'Search',
  type: _lib.META.TYPES.MODULE
};

SearchCategory.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** The item currently selected by keyboard shortcut. */
  active: _react.PropTypes.bool,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Display name. */
  name: _react.PropTypes.string,

  /**
   * A function that returns the category contents.
   * Receives all SearchCategory props.
   */
  renderer: _react.PropTypes.func,

  /** Array of Search.Result props */
  results: _react.PropTypes.array
};

exports.default = SearchCategory;