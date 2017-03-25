'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isPlainObject2 = require('lodash/isPlainObject');

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Image = require('../../elements/Image');

var _Image2 = _interopRequireDefault(_Image);

var _ListContent = require('./ListContent');

var _ListContent2 = _interopRequireDefault(_ListContent);

var _ListDescription = require('./ListDescription');

var _ListDescription2 = _interopRequireDefault(_ListDescription);

var _ListHeader = require('./ListHeader');

var _ListHeader2 = _interopRequireDefault(_ListHeader);

var _ListIcon = require('./ListIcon');

var _ListIcon2 = _interopRequireDefault(_ListIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ListItem(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      content = props.content,
      description = props.description,
      disabled = props.disabled,
      header = props.header,
      icon = props.icon,
      image = props.image,
      value = props.value;


  var ElementType = (0, _lib.getElementType)(ListItem, props);
  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(ElementType !== 'li', 'item'), className);
  var rest = (0, _lib.getUnhandledProps)(ListItem, props);
  var valueProp = ElementType === 'li' ? { value: value } : { 'data-value': value };

  if (children) {
    return _react2.default.createElement(
      ElementType,
      _extends({}, rest, { role: 'listitem', className: classes }, valueProp),
      children
    );
  }

  var iconElement = _ListIcon2.default.create(icon);
  var imageElement = _Image2.default.create(image);

  // See description of `content` prop for explanation about why this is necessary.
  if (!(0, _react.isValidElement)(content) && (0, _isPlainObject3.default)(content)) {
    return _react2.default.createElement(
      ElementType,
      _extends({}, rest, { role: 'listitem', className: classes }, valueProp),
      iconElement || imageElement,
      _ListContent2.default.create(content, { header: header, description: description })
    );
  }

  var headerElement = _ListHeader2.default.create(header);
  var descriptionElement = _ListDescription2.default.create(description);

  if (iconElement || imageElement) {
    return _react2.default.createElement(
      ElementType,
      _extends({}, rest, { role: 'listitem', className: classes }, valueProp),
      iconElement || imageElement,
      (content || headerElement || descriptionElement) && _react2.default.createElement(
        _ListContent2.default,
        null,
        headerElement,
        descriptionElement,
        content
      )
    );
  }

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { role: 'listitem', className: classes }, valueProp),
    headerElement,
    descriptionElement,
    content
  );
}

ListItem._meta = {
  name: 'ListItem',
  parent: 'List',
  type: _lib.META.TYPES.ELEMENT
};

ListItem.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A list item can active. */
  active: _react.PropTypes.bool,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /**
   * Shorthand for primary content.
   *
   * Heads up!
   *
   * This is handled slightly differently than the typical `content` prop since
   * the wrapping ListContent is not used when there's no icon or image.
   *
   * If you pass content as:
   * - an element/literal, it's treated as the sibling node to
   * header/description (whether wrapped in Item.Content or not).
   * - a props object, it forces the presence of Item.Content and passes those
   * props to it. If you pass a content prop within that props object, it
   * will be treated as the sibling node to header/description.
   */
  content: _lib.customPropTypes.itemShorthand,

  /** Shorthand for ListDescription. */
  description: _lib.customPropTypes.itemShorthand,

  /** A list item can disabled. */
  disabled: _react.PropTypes.bool,

  /** Shorthand for ListHeader. */
  header: _lib.customPropTypes.itemShorthand,

  /** Shorthand for ListIcon. */
  icon: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['image']), _lib.customPropTypes.itemShorthand]),

  /** Shorthand for Image. */
  image: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['icon']), _lib.customPropTypes.itemShorthand]),

  /** A value for an ordered list. */
  value: _react.PropTypes.string
};

ListItem.create = (0, _lib.createShorthandFactory)(ListItem, function (content) {
  return { content: content };
}, true);

exports.default = ListItem;