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

function StatisticLabel(props) {
  var children = props.children,
      className = props.className,
      label = props.label;

  var classes = (0, _classnames2.default)(className, 'label');
  var rest = (0, _lib.getUnhandledProps)(StatisticLabel, props);
  var ElementType = (0, _lib.getElementType)(StatisticLabel, props);

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children || label
  );
}

StatisticLabel._meta = {
  name: 'StatisticLabel',
  parent: 'Statistic',
  type: _lib.META.TYPES.VIEW
};

StatisticLabel.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Shorthand for primary content. */
  label: _lib.customPropTypes.contentShorthand
};

exports.default = StatisticLabel;