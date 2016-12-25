'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FeedExtra(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      images = props.images,
      text = props.text;

  var classes = (0, _classnames2.default)(className, (0, _lib.useKeyOnly)(images, 'images'), (0, _lib.useKeyOnly)(content || text, 'text'), 'extra');
  var rest = (0, _lib.getUnhandledProps)(FeedExtra, props);
  var ElementType = (0, _lib.getElementType)(FeedExtra, props);

  if (children) {
    return _react2.default.createElement(
      ElementType,
      _extends({}, rest, { className: classes }),
      children
    );
  }

  // TODO need a "collection factory" to handle creating multiple image elements and their keys
  var imageElements = (0, _map3.default)(images, function (image, index) {
    var key = [index, image].join('-');
    return (0, _lib.createHTMLImage)(image, { key: key });
  });

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    content,
    imageElements
  );
}

FeedExtra._meta = {
  name: 'FeedExtra',
  parent: 'Feed',
  type: _lib.META.TYPES.VIEW
};

FeedExtra.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** An event can contain additional information like a set of images. */
  images: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['text']), _react.PropTypes.oneOfType([_react.PropTypes.bool, _lib.customPropTypes.collectionShorthand])]),

  /** An event can contain additional text information. */
  text: _react.PropTypes.bool
};

exports.default = FeedExtra;