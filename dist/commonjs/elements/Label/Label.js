"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _isUndefined2 = _interopRequireDefault(require("lodash/isUndefined"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _Image = _interopRequireDefault(require("../Image/Image"));

var _LabelDetail = _interopRequireDefault(require("./LabelDetail"));

var _LabelGroup = _interopRequireDefault(require("./LabelGroup"));

/**
 * A label displays content classification.
 */
var Label = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(Label, _Component);

  function Label() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      var onClick = _this.props.onClick;
      if (onClick) onClick(e, _this.props);
    };

    _this.handleIconOverrides = function (predefinedProps) {
      return {
        onClick: function onClick(e) {
          (0, _invoke2.default)(predefinedProps, 'onClick', e);
          (0, _invoke2.default)(_this.props, 'onRemove', e, _this.props);
        }
      };
    };

    return _this;
  }

  var _proto = Label.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        attached = _this$props.attached,
        basic = _this$props.basic,
        children = _this$props.children,
        circular = _this$props.circular,
        className = _this$props.className,
        color = _this$props.color,
        content = _this$props.content,
        corner = _this$props.corner,
        detail = _this$props.detail,
        empty = _this$props.empty,
        floating = _this$props.floating,
        horizontal = _this$props.horizontal,
        icon = _this$props.icon,
        image = _this$props.image,
        onRemove = _this$props.onRemove,
        pointing = _this$props.pointing,
        prompt = _this$props.prompt,
        removeIcon = _this$props.removeIcon,
        ribbon = _this$props.ribbon,
        size = _this$props.size,
        tag = _this$props.tag;
    var pointingClass = pointing === true && 'pointing' || (pointing === 'left' || pointing === 'right') && pointing + " pointing" || (pointing === 'above' || pointing === 'below') && "pointing " + pointing;
    var classes = (0, _clsx.default)('ui', color, pointingClass, size, (0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(circular, 'circular'), (0, _lib.useKeyOnly)(empty, 'empty'), (0, _lib.useKeyOnly)(floating, 'floating'), (0, _lib.useKeyOnly)(horizontal, 'horizontal'), (0, _lib.useKeyOnly)(image === true, 'image'), (0, _lib.useKeyOnly)(prompt, 'prompt'), (0, _lib.useKeyOnly)(tag, 'tag'), (0, _lib.useKeyOrValueAndKey)(corner, 'corner'), (0, _lib.useKeyOrValueAndKey)(ribbon, 'ribbon'), (0, _lib.useValueAndKey)(attached, 'attached'), 'label', className);
    var rest = (0, _lib.getUnhandledProps)(Label, this.props);
    var ElementType = (0, _lib.getElementType)(Label, this.props);

    if (!_lib.childrenUtils.isNil(children)) {
      return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
        className: classes,
        onClick: this.handleClick
      }), children);
    }

    var removeIconShorthand = (0, _isUndefined2.default)(removeIcon) ? 'delete' : removeIcon;
    return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({
      className: classes,
      onClick: this.handleClick
    }, rest), _Icon.default.create(icon, {
      autoGenerateKey: false
    }), typeof image !== 'boolean' && _Image.default.create(image, {
      autoGenerateKey: false
    }), content, _LabelDetail.default.create(detail, {
      autoGenerateKey: false
    }), onRemove && _Icon.default.create(removeIconShorthand, {
      autoGenerateKey: false,
      overrideProps: this.handleIconOverrides
    }));
  };

  return Label;
}(_react.Component);

exports.default = Label;
Label.handledProps = ["active", "as", "attached", "basic", "children", "circular", "className", "color", "content", "corner", "detail", "empty", "floating", "horizontal", "icon", "image", "onClick", "onRemove", "pointing", "prompt", "removeIcon", "ribbon", "size", "tag"];
Label.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** A label can be active. */
  active: _propTypes.default.bool,

  /** A label can attach to a content segment. */
  attached: _propTypes.default.oneOf(['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right']),

  /** A label can reduce its complexity. */
  basic: _propTypes.default.bool,

  /** Primary content. */
  children: _propTypes.default.node,

  /** A label can be circular. */
  circular: _propTypes.default.bool,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Color of the label. */
  color: _propTypes.default.oneOf(_lib.SUI.COLORS),

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A label can position itself in the corner of an element. */
  corner: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.oneOf(['left', 'right'])]),

  /** Shorthand for LabelDetail. */
  detail: _lib.customPropTypes.itemShorthand,

  /** Formats the label as a dot. */
  empty: _lib.customPropTypes.every([_propTypes.default.bool, _lib.customPropTypes.demand(['circular'])]),

  /** Float above another element in the upper right corner. */
  floating: _propTypes.default.bool,

  /** A horizontal label is formatted to label content along-side it horizontally. */
  horizontal: _propTypes.default.bool,

  /** Shorthand for Icon. */
  icon: _lib.customPropTypes.itemShorthand,

  /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
  image: _propTypes.default.oneOfType([_propTypes.default.bool, _lib.customPropTypes.itemShorthand]),

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _propTypes.default.func,

  /**
   * Adds an "x" icon, called when "x" is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onRemove: _propTypes.default.func,

  /** A label can point to content next to it. */
  pointing: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.oneOf(['above', 'below', 'left', 'right'])]),

  /** A label can prompt for an error in your forms. */
  prompt: _propTypes.default.bool,

  /** Shorthand for Icon to appear as the last child and trigger onRemove. */
  removeIcon: _lib.customPropTypes.itemShorthand,

  /** A label can appear as a ribbon attaching itself to an element. */
  ribbon: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.oneOf(['right'])]),

  /** A label can have different sizes. */
  size: _propTypes.default.oneOf(_lib.SUI.SIZES),

  /** A label can appear as a tag. */
  tag: _propTypes.default.bool
} : {};
Label.Detail = _LabelDetail.default;
Label.Group = _LabelGroup.default;
Label.create = (0, _lib.createShorthandFactory)(Label, function (value) {
  return {
    content: value
  };
});