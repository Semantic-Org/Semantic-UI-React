"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _without2 = _interopRequireDefault(require("lodash/without"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _isNil2 = _interopRequireDefault(require("lodash/isNil"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _IconGroup = _interopRequireDefault(require("./IconGroup"));

/**
 * An icon is a glyph used to represent something else.
 * @see Image
 */
var Icon = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2.default)(Icon, _PureComponent);

  function Icon() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      var disabled = _this.props.disabled;

      if (disabled) {
        e.preventDefault();
        return;
      }

      (0, _invoke2.default)(_this.props, 'onClick', e, _this.props);
    };

    return _this;
  }

  var _proto = Icon.prototype;

  _proto.getIconAriaOptions = function getIconAriaOptions() {
    var ariaOptions = {};
    var _this$props = this.props,
        ariaLabel = _this$props['aria-label'],
        ariaHidden = _this$props['aria-hidden'];

    if ((0, _isNil2.default)(ariaLabel)) {
      ariaOptions['aria-hidden'] = 'true';
    } else {
      ariaOptions['aria-label'] = ariaLabel;
    }

    if (!(0, _isNil2.default)(ariaHidden)) {
      ariaOptions['aria-hidden'] = ariaHidden;
    }

    return ariaOptions;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        bordered = _this$props2.bordered,
        circular = _this$props2.circular,
        className = _this$props2.className,
        color = _this$props2.color,
        corner = _this$props2.corner,
        disabled = _this$props2.disabled,
        fitted = _this$props2.fitted,
        flipped = _this$props2.flipped,
        inverted = _this$props2.inverted,
        link = _this$props2.link,
        loading = _this$props2.loading,
        name = _this$props2.name,
        rotated = _this$props2.rotated,
        size = _this$props2.size;
    var classes = (0, _clsx.default)(color, name, size, (0, _lib.useKeyOnly)(bordered, 'bordered'), (0, _lib.useKeyOnly)(circular, 'circular'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(fitted, 'fitted'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(link, 'link'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useKeyOrValueAndKey)(corner, 'corner'), (0, _lib.useValueAndKey)(flipped, 'flipped'), (0, _lib.useValueAndKey)(rotated, 'rotated'), 'icon', className);
    var rest = (0, _lib.getUnhandledProps)(Icon, this.props);
    var ElementType = (0, _lib.getElementType)(Icon, this.props);
    var ariaOptions = this.getIconAriaOptions();
    return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, ariaOptions, {
      className: classes,
      onClick: this.handleClick
    }));
  };

  return Icon;
}(_react.PureComponent);

Icon.handledProps = ["aria-hidden", "aria-label", "as", "bordered", "circular", "className", "color", "corner", "disabled", "fitted", "flipped", "inverted", "link", "loading", "name", "rotated", "size"];
Icon.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Formatted to appear bordered. */
  bordered: _propTypes.default.bool,

  /** Icon can formatted to appear circular. */
  circular: _propTypes.default.bool,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Color of the icon. */
  color: _propTypes.default.oneOf(_lib.SUI.COLORS),

  /** Icons can display a smaller corner icon. */
  corner: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.oneOf(['top left', 'top right', 'bottom left', 'bottom right'])]),

  /** Show that the icon is inactive. */
  disabled: _propTypes.default.bool,

  /** Fitted, without space to left or right of Icon. */
  fitted: _propTypes.default.bool,

  /** Icon can be flipped. */
  flipped: _propTypes.default.oneOf(['horizontally', 'vertically']),

  /** Formatted to have its colors inverted for contrast. */
  inverted: _propTypes.default.bool,

  /** Icon can be formatted as a link. */
  link: _propTypes.default.bool,

  /** Icon can be used as a simple loader. */
  loading: _propTypes.default.bool,

  /** Name of the icon. */
  name: _lib.customPropTypes.suggest(_lib.SUI.ALL_ICONS_IN_ALL_CONTEXTS),

  /** Icon can rotated. */
  rotated: _propTypes.default.oneOf(['clockwise', 'counterclockwise']),

  /** Size of the icon. */
  size: _propTypes.default.oneOf((0, _without2.default)(_lib.SUI.SIZES, 'medium')),

  /** Icon can have an aria label. */
  'aria-hidden': _propTypes.default.string,

  /** Icon can have an aria label. */
  'aria-label': _propTypes.default.string
} : {};
Icon.defaultProps = {
  as: 'i'
};
Icon.Group = _IconGroup.default;
Icon.create = (0, _lib.createShorthandFactory)(Icon, function (value) {
  return {
    name: value
  };
});
var _default = Icon;
exports.default = _default;