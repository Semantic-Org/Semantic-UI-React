"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _isNil2 = _interopRequireDefault(require("lodash/isNil"));

var _reactComponentRef = require("@fluentui/react-component-ref");

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _Label = _interopRequireDefault(require("../Label/Label"));

var _ButtonContent = _interopRequireDefault(require("./ButtonContent"));

var _ButtonGroup = _interopRequireDefault(require("./ButtonGroup"));

var _ButtonOr = _interopRequireDefault(require("./ButtonOr"));

/**
 * A Button indicates a possible user action.
 * @see Form
 * @see Icon
 * @see Label
 */
var Button = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(Button, _Component);

  function Button() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.ref = /*#__PURE__*/(0, _react.createRef)();

    _this.computeElementType = function () {
      var _this$props = _this.props,
          attached = _this$props.attached,
          label = _this$props.label;
      if (!(0, _isNil2.default)(attached) || !(0, _isNil2.default)(label)) return 'div';
    };

    _this.computeTabIndex = function (ElementType) {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex;
      if (!(0, _isNil2.default)(tabIndex)) return tabIndex;
      if (disabled) return -1;
      if (ElementType === 'div') return 0;
    };

    _this.focus = function () {
      return (0, _invoke2.default)(_this.ref.current, 'focus');
    };

    _this.handleClick = function (e) {
      var disabled = _this.props.disabled;

      if (disabled) {
        e.preventDefault();
        return;
      }

      (0, _invoke2.default)(_this.props, 'onClick', e, _this.props);
    };

    _this.hasIconClass = function () {
      var _this$props3 = _this.props,
          labelPosition = _this$props3.labelPosition,
          children = _this$props3.children,
          content = _this$props3.content,
          icon = _this$props3.icon;
      if (icon === true) return true;
      return icon && (labelPosition || _lib.childrenUtils.isNil(children) && (0, _isNil2.default)(content));
    };

    return _this;
  }

  var _proto = Button.prototype;

  _proto.computeButtonAriaRole = function computeButtonAriaRole(ElementType) {
    var role = this.props.role;
    if (!(0, _isNil2.default)(role)) return role;
    if (ElementType !== 'button') return 'button';
  };

  _proto.render = function render() {
    var _this$props4 = this.props,
        active = _this$props4.active,
        animated = _this$props4.animated,
        attached = _this$props4.attached,
        basic = _this$props4.basic,
        children = _this$props4.children,
        circular = _this$props4.circular,
        className = _this$props4.className,
        color = _this$props4.color,
        compact = _this$props4.compact,
        content = _this$props4.content,
        disabled = _this$props4.disabled,
        floated = _this$props4.floated,
        fluid = _this$props4.fluid,
        icon = _this$props4.icon,
        inverted = _this$props4.inverted,
        label = _this$props4.label,
        labelPosition = _this$props4.labelPosition,
        loading = _this$props4.loading,
        negative = _this$props4.negative,
        positive = _this$props4.positive,
        primary = _this$props4.primary,
        secondary = _this$props4.secondary,
        size = _this$props4.size,
        toggle = _this$props4.toggle;
    var baseClasses = (0, _clsx.default)(color, size, (0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(circular, 'circular'), (0, _lib.useKeyOnly)(compact, 'compact'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(this.hasIconClass(), 'icon'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useKeyOnly)(negative, 'negative'), (0, _lib.useKeyOnly)(positive, 'positive'), (0, _lib.useKeyOnly)(primary, 'primary'), (0, _lib.useKeyOnly)(secondary, 'secondary'), (0, _lib.useKeyOnly)(toggle, 'toggle'), (0, _lib.useKeyOrValueAndKey)(animated, 'animated'), (0, _lib.useKeyOrValueAndKey)(attached, 'attached'));
    var labeledClasses = (0, _clsx.default)((0, _lib.useKeyOrValueAndKey)(labelPosition || !!label, 'labeled'));
    var wrapperClasses = (0, _clsx.default)((0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useValueAndKey)(floated, 'floated'));
    var rest = (0, _lib.getUnhandledProps)(Button, this.props);
    var ElementType = (0, _lib.getElementType)(Button, this.props, this.computeElementType);
    var tabIndex = this.computeTabIndex(ElementType);

    if (!(0, _isNil2.default)(label)) {
      var buttonClasses = (0, _clsx.default)('ui', baseClasses, 'button', className);
      var containerClasses = (0, _clsx.default)('ui', labeledClasses, 'button', className, wrapperClasses);

      var labelElement = _Label.default.create(label, {
        defaultProps: {
          basic: true,
          pointing: labelPosition === 'left' ? 'right' : 'left'
        },
        autoGenerateKey: false
      });

      return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
        className: containerClasses,
        onClick: this.handleClick
      }), labelPosition === 'left' && labelElement, /*#__PURE__*/_react.default.createElement(_reactComponentRef.Ref, {
        innerRef: this.ref
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: buttonClasses,
        "aria-pressed": toggle ? !!active : undefined,
        disabled: disabled,
        tabIndex: tabIndex
      }, _Icon.default.create(icon, {
        autoGenerateKey: false
      }), " ", content)), (labelPosition === 'right' || !labelPosition) && labelElement);
    }

    var classes = (0, _clsx.default)('ui', baseClasses, wrapperClasses, labeledClasses, 'button', className);
    var hasChildren = !_lib.childrenUtils.isNil(children);
    var role = this.computeButtonAriaRole(ElementType);
    return /*#__PURE__*/_react.default.createElement(_reactComponentRef.Ref, {
      innerRef: this.ref
    }, /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
      className: classes,
      "aria-pressed": toggle ? !!active : undefined,
      disabled: disabled && ElementType === 'button' || undefined,
      onClick: this.handleClick,
      role: role,
      tabIndex: tabIndex
    }), hasChildren && children, !hasChildren && _Icon.default.create(icon, {
      autoGenerateKey: false
    }), !hasChildren && content));
  };

  return Button;
}(_react.Component);

Button.handledProps = ["active", "animated", "as", "attached", "basic", "children", "circular", "className", "color", "compact", "content", "disabled", "floated", "fluid", "icon", "inverted", "label", "labelPosition", "loading", "negative", "onClick", "positive", "primary", "role", "secondary", "size", "tabIndex", "toggle"];
Button.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** A button can show it is currently the active user selection. */
  active: _propTypes.default.bool,

  /** A button can animate to show hidden content. */
  animated: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.oneOf(['fade', 'vertical'])]),

  /** A button can be attached to other content. */
  attached: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.oneOf(['left', 'right', 'top', 'bottom'])]),

  /** A basic button is less pronounced. */
  basic: _propTypes.default.bool,

  /** Primary content. */
  children: _lib.customPropTypes.every([_propTypes.default.node, _lib.customPropTypes.disallow(['label']), _lib.customPropTypes.givenProps({
    icon: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.object.isRequired, _propTypes.default.element.isRequired])
  }, _lib.customPropTypes.disallow(['icon']))]),

  /** A button can be circular. */
  circular: _propTypes.default.bool,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** A button can have different colors */
  color: _propTypes.default.oneOf([].concat(_lib.SUI.COLORS, ['facebook', 'google plus', 'instagram', 'linkedin', 'twitter', 'vk', 'youtube'])),

  /** A button can reduce its padding to fit into tighter spaces. */
  compact: _propTypes.default.bool,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A button can show it is currently unable to be interacted with. */
  disabled: _propTypes.default.bool,

  /** A button can be aligned to the left or right of its container. */
  floated: _propTypes.default.oneOf(_lib.SUI.FLOATS),

  /** A button can take the width of its container. */
  fluid: _propTypes.default.bool,

  /** Add an Icon by name, props object, or pass an <Icon />. */
  icon: _lib.customPropTypes.some([_propTypes.default.bool, _propTypes.default.string, _propTypes.default.object, _propTypes.default.element]),

  /** A button can be formatted to appear on dark backgrounds. */
  inverted: _propTypes.default.bool,

  /** Add a Label by text, props object, or pass a <Label />. */
  label: _lib.customPropTypes.some([_propTypes.default.string, _propTypes.default.object, _propTypes.default.element]),

  /** A labeled button can format a Label or Icon to appear on the left or right. */
  labelPosition: _propTypes.default.oneOf(['right', 'left']),

  /** A button can show a loading indicator. */
  loading: _propTypes.default.bool,

  /** A button can hint towards a negative consequence. */
  negative: _propTypes.default.bool,

  /**
   * Called after user's click.
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _propTypes.default.func,

  /** A button can hint towards a positive consequence. */
  positive: _propTypes.default.bool,

  /** A button can be formatted to show different levels of emphasis. */
  primary: _propTypes.default.bool,

  /** The role of the HTML element. */
  role: _propTypes.default.string,

  /** A button can be formatted to show different levels of emphasis. */
  secondary: _propTypes.default.bool,

  /** A button can have different sizes. */
  size: _propTypes.default.oneOf(_lib.SUI.SIZES),

  /** A button can receive focus. */
  tabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** A button can be formatted to toggle on and off. */
  toggle: _propTypes.default.bool
} : {};
Button.defaultProps = {
  as: 'button'
};
Button.Content = _ButtonContent.default;
Button.Group = _ButtonGroup.default;
Button.Or = _ButtonOr.default;
Button.create = (0, _lib.createShorthandFactory)(Button, function (value) {
  return {
    content: value
  };
});
var _default = Button;
exports.default = _default;