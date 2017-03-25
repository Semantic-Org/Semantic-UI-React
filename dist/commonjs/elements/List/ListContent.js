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

var _ListDescription = require('./ListDescription');

var _ListDescription2 = _interopRequireDefault(_ListDescription);

var _ListHeader = require('./ListHeader');

var _ListHeader2 = _interopRequireDefault(_ListHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ListContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      description = props.description,
      floated = props.floated,
      header = props.header,
      verticalAlign = props.verticalAlign;


  var classes = (0, _classnames2.default)((0, _lib.useValueAndKey)(floated, 'floated'), (0, _lib.useVerticalAlignProp)(verticalAlign), 'content', className);
  var rest = (0, _lib.getUnhandledProps)(ListContent, props);
  var ElementType = (0, _lib.getElementType)(ListContent, props);

  if (children) {
    return _react2.default.createElement(
      ElementType,
      _extends({}, rest, { className: classes }),
      children
    );
  }

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    _ListHeader2.default.create(header),
    _ListDescription2.default.create(description),
    content
  );
}

ListContent._meta = {
  name: 'ListContent',
  parent: 'List',
  type: _lib.META.TYPES.ELEMENT,
  props: {
    floated: _lib.SUI.FLOATS,
    verticalAlign: _lib.SUI.VERTICAL_ALIGNMENTS
  }
};

ListContent.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Shorthand for ListDescription. */
  description: _lib.customPropTypes.itemShorthand,

  /** An list content can be floated left or right. */
  floated: _react.PropTypes.oneOf(ListContent._meta.props.floated),

  /** Shorthand for ListHeader. */
  header: _lib.customPropTypes.itemShorthand,

  /** An element inside a list can be vertically aligned. */
  verticalAlign: _react.PropTypes.oneOf(ListContent._meta.props.verticalAlign)
};

ListContent.create = (0, _lib.createShorthandFactory)(ListContent, function (content) {
  return { content: content };
});

exports.default = ListContent;