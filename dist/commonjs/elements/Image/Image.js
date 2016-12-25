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

var _Dimmer = require('../../modules/Dimmer');

var _Dimmer2 = _interopRequireDefault(_Dimmer);

var _Label = require('../Label/Label');

var _Label2 = _interopRequireDefault(_Label);

var _ImageGroup = require('./ImageGroup');

var _ImageGroup2 = _interopRequireDefault(_ImageGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An image is a graphic representation of something.
 * @see Icon
 */
function Image(props) {
  var alt = props.alt,
      avatar = props.avatar,
      bordered = props.bordered,
      centered = props.centered,
      children = props.children,
      className = props.className,
      dimmer = props.dimmer,
      disabled = props.disabled,
      floated = props.floated,
      fluid = props.fluid,
      height = props.height,
      hidden = props.hidden,
      href = props.href,
      inline = props.inline,
      label = props.label,
      shape = props.shape,
      size = props.size,
      spaced = props.spaced,
      src = props.src,
      verticalAlign = props.verticalAlign,
      width = props.width,
      wrapped = props.wrapped,
      ui = props.ui;


  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(ui, 'ui'), size, shape, (0, _lib.useKeyOnly)(avatar, 'avatar'), (0, _lib.useKeyOnly)(bordered, 'bordered'), (0, _lib.useKeyOnly)(centered, 'centered'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(hidden, 'hidden'), (0, _lib.useKeyOnly)(inline, 'inline'), (0, _lib.useKeyOrValueAndKey)(spaced, 'spaced'), (0, _lib.useValueAndKey)(floated, 'floated'), (0, _lib.useVerticalAlignProp)(verticalAlign, 'aligned'), 'image', className);
  var rest = (0, _lib.getUnhandledProps)(Image, props);
  var ElementType = (0, _lib.getElementType)(Image, props, function () {
    if (dimmer || label || wrapped || children) return 'div';
  });

  if (children) {
    return _react2.default.createElement(
      ElementType,
      _extends({}, rest, { className: classes }),
      children
    );
  }

  var rootProps = _extends({}, rest, { className: classes });
  var imgTagProps = { alt: alt, src: src, height: height, width: width };

  if (ElementType === 'img') return _react2.default.createElement(ElementType, _extends({}, rootProps, imgTagProps));

  return _react2.default.createElement(
    ElementType,
    _extends({}, rootProps, { href: href }),
    _Dimmer2.default.create(dimmer),
    _Label2.default.create(label),
    _react2.default.createElement('img', imgTagProps)
  );
}

Image.Group = _ImageGroup2.default;

Image._meta = {
  name: 'Image',
  type: _lib.META.TYPES.ELEMENT,
  props: {
    verticalAlign: _lib.SUI.VERTICAL_ALIGNMENTS,
    floated: _lib.SUI.FLOATS,
    shape: ['rounded', 'circular'],
    size: _lib.SUI.SIZES,
    spaced: ['left', 'right']
  }
};

Image.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Alternate text for the image specified. */
  alt: _react.PropTypes.string,

  /** An image may be formatted to appear inline with text as an avatar. */
  avatar: _react.PropTypes.bool,

  /** An image may include a border to emphasize the edges of white or transparent content. */
  bordered: _react.PropTypes.bool,

  /** An image can appear centered in a content block. */
  centered: _react.PropTypes.bool,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** An image can show that it is disabled and cannot be selected. */
  disabled: _react.PropTypes.bool,

  /** Shorthand for Dimmer. */
  dimmer: _lib.customPropTypes.itemShorthand,

  /** An image can sit to the left or right of other content. */
  floated: _react.PropTypes.oneOf(Image._meta.props.floated),

  /** An image can take up the width of its container. */
  fluid: _lib.customPropTypes.every([_react.PropTypes.bool, _lib.customPropTypes.disallow(['size'])]),

  /** The img element height attribute. */
  height: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),

  /** An image can be hidden. */
  hidden: _react.PropTypes.bool,

  /** Renders the Image as an <a> tag with this href. */
  href: _react.PropTypes.string,

  /** An image may appear inline. */
  inline: _react.PropTypes.bool,

  /** Shorthand for Label. */
  label: _lib.customPropTypes.itemShorthand,

  /** An image may appear rounded or circular. */
  shape: _react.PropTypes.oneOf(Image._meta.props.shape),

  /** An image may appear at different sizes. */
  size: _react.PropTypes.oneOf(Image._meta.props.size),

  /** An image can specify that it needs an additional spacing to separate it from nearby content. */
  spaced: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(Image._meta.props.spaced)]),

  /** Specifies the URL of the image. */
  src: _react.PropTypes.string,

  /** Whether or not to add the ui className. */
  ui: _react.PropTypes.bool,

  /** An image can specify its vertical alignment */
  verticalAlign: _react.PropTypes.oneOf(Image._meta.props.verticalAlign),

  /** The img element width attribute */
  width: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),

  /** An image can render wrapped in a `div.ui.image` as alternative HTML markup */
  wrapped: _lib.customPropTypes.every([_react.PropTypes.bool,
  // these props wrap the image in an a tag already
  _lib.customPropTypes.disallow(['href'])])
};

Image.defaultProps = {
  as: 'img',
  ui: true
};

Image.create = (0, _lib.createShorthandFactory)(Image, function (value) {
  return { src: value };
});

exports.default = Image;