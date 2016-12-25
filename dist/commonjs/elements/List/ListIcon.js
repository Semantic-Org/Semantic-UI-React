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

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ListIcon(props) {
  var className = props.className,
      verticalAlign = props.verticalAlign;

  var classes = (0, _classnames2.default)((0, _lib.useVerticalAlignProp)(verticalAlign), className);
  var rest = (0, _lib.getUnhandledProps)(ListIcon, props);

  return _react2.default.createElement(_Icon2.default, _extends({}, rest, { className: classes }));
}

ListIcon._meta = {
  name: 'ListIcon',
  parent: 'List',
  type: _lib.META.TYPES.ELEMENT,
  props: {
    verticalAlign: _lib.SUI.VERTICAL_ALIGNMENTS
  }
};

ListIcon.propTypes = {
  /** Additional classes. */
  className: _react.PropTypes.string,

  /** An element inside a list can be vertically aligned. */
  verticalAlign: _react.PropTypes.oneOf(ListIcon._meta.props.verticalAlign)
};

ListIcon.create = (0, _lib.createShorthandFactory)(ListIcon, function (name) {
  return { name: name };
});

exports.default = ListIcon;