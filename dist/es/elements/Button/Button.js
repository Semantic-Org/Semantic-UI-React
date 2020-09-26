import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _invoke from "lodash/invoke";
import _isNil from "lodash/isNil";
import { Ref } from '@fluentui/react-component-ref';
import cx from 'clsx';
import PropTypes from 'prop-types';
import React, { Component, createRef } from 'react';
import { childrenUtils, customPropTypes, createShorthandFactory, getElementType, getUnhandledProps, SUI, useKeyOnly, useKeyOrValueAndKey, useValueAndKey } from '../../lib';
import Icon from '../Icon/Icon';
import Label from '../Label/Label';
import ButtonContent from './ButtonContent';
import ButtonGroup from './ButtonGroup';
import ButtonOr from './ButtonOr';
/**
 * A Button indicates a possible user action.
 * @see Form
 * @see Icon
 * @see Label
 */

var Button = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Button, _Component);

  function Button() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.ref = /*#__PURE__*/createRef();

    _this.computeElementType = function () {
      var _this$props = _this.props,
          attached = _this$props.attached,
          label = _this$props.label;
      if (!_isNil(attached) || !_isNil(label)) return 'div';
    };

    _this.computeTabIndex = function (ElementType) {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex;
      if (!_isNil(tabIndex)) return tabIndex;
      if (disabled) return -1;
      if (ElementType === 'div') return 0;
    };

    _this.focus = function () {
      return _invoke(_this.ref.current, 'focus');
    };

    _this.handleClick = function (e) {
      var disabled = _this.props.disabled;

      if (disabled) {
        e.preventDefault();
        return;
      }

      _invoke(_this.props, 'onClick', e, _this.props);
    };

    _this.hasIconClass = function () {
      var _this$props3 = _this.props,
          labelPosition = _this$props3.labelPosition,
          children = _this$props3.children,
          content = _this$props3.content,
          icon = _this$props3.icon;
      if (icon === true) return true;
      return icon && (labelPosition || childrenUtils.isNil(children) && _isNil(content));
    };

    return _this;
  }

  var _proto = Button.prototype;

  _proto.computeButtonAriaRole = function computeButtonAriaRole(ElementType) {
    var role = this.props.role;
    if (!_isNil(role)) return role;
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
    var baseClasses = cx(color, size, useKeyOnly(active, 'active'), useKeyOnly(basic, 'basic'), useKeyOnly(circular, 'circular'), useKeyOnly(compact, 'compact'), useKeyOnly(fluid, 'fluid'), useKeyOnly(this.hasIconClass(), 'icon'), useKeyOnly(inverted, 'inverted'), useKeyOnly(loading, 'loading'), useKeyOnly(negative, 'negative'), useKeyOnly(positive, 'positive'), useKeyOnly(primary, 'primary'), useKeyOnly(secondary, 'secondary'), useKeyOnly(toggle, 'toggle'), useKeyOrValueAndKey(animated, 'animated'), useKeyOrValueAndKey(attached, 'attached'));
    var labeledClasses = cx(useKeyOrValueAndKey(labelPosition || !!label, 'labeled'));
    var wrapperClasses = cx(useKeyOnly(disabled, 'disabled'), useValueAndKey(floated, 'floated'));
    var rest = getUnhandledProps(Button, this.props);
    var ElementType = getElementType(Button, this.props, this.computeElementType);
    var tabIndex = this.computeTabIndex(ElementType);

    if (!_isNil(label)) {
      var buttonClasses = cx('ui', baseClasses, 'button', className);
      var containerClasses = cx('ui', labeledClasses, 'button', className, wrapperClasses);
      var labelElement = Label.create(label, {
        defaultProps: {
          basic: true,
          pointing: labelPosition === 'left' ? 'right' : 'left'
        },
        autoGenerateKey: false
      });
      return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
        className: containerClasses,
        onClick: this.handleClick
      }), labelPosition === 'left' && labelElement, /*#__PURE__*/React.createElement(Ref, {
        innerRef: this.ref
      }, /*#__PURE__*/React.createElement("button", {
        className: buttonClasses,
        "aria-pressed": toggle ? !!active : undefined,
        disabled: disabled,
        tabIndex: tabIndex
      }, Icon.create(icon, {
        autoGenerateKey: false
      }), " ", content)), (labelPosition === 'right' || !labelPosition) && labelElement);
    }

    var classes = cx('ui', baseClasses, wrapperClasses, labeledClasses, 'button', className);
    var hasChildren = !childrenUtils.isNil(children);
    var role = this.computeButtonAriaRole(ElementType);
    return /*#__PURE__*/React.createElement(Ref, {
      innerRef: this.ref
    }, /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
      className: classes,
      "aria-pressed": toggle ? !!active : undefined,
      disabled: disabled && ElementType === 'button' || undefined,
      onClick: this.handleClick,
      role: role,
      tabIndex: tabIndex
    }), hasChildren && children, !hasChildren && Icon.create(icon, {
      autoGenerateKey: false
    }), !hasChildren && content));
  };

  return Button;
}(Component);

Button.handledProps = ["active", "animated", "as", "attached", "basic", "children", "circular", "className", "color", "compact", "content", "disabled", "floated", "fluid", "icon", "inverted", "label", "labelPosition", "loading", "negative", "onClick", "positive", "primary", "role", "secondary", "size", "tabIndex", "toggle"];
Button.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A button can show it is currently the active user selection. */
  active: PropTypes.bool,

  /** A button can animate to show hidden content. */
  animated: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['fade', 'vertical'])]),

  /** A button can be attached to other content. */
  attached: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['left', 'right', 'top', 'bottom'])]),

  /** A basic button is less pronounced. */
  basic: PropTypes.bool,

  /** Primary content. */
  children: customPropTypes.every([PropTypes.node, customPropTypes.disallow(['label']), customPropTypes.givenProps({
    icon: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.object.isRequired, PropTypes.element.isRequired])
  }, customPropTypes.disallow(['icon']))]),

  /** A button can be circular. */
  circular: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** A button can have different colors */
  color: PropTypes.oneOf([].concat(SUI.COLORS, ['facebook', 'google plus', 'instagram', 'linkedin', 'twitter', 'vk', 'youtube'])),

  /** A button can reduce its padding to fit into tighter spaces. */
  compact: PropTypes.bool,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A button can show it is currently unable to be interacted with. */
  disabled: PropTypes.bool,

  /** A button can be aligned to the left or right of its container. */
  floated: PropTypes.oneOf(SUI.FLOATS),

  /** A button can take the width of its container. */
  fluid: PropTypes.bool,

  /** Add an Icon by name, props object, or pass an <Icon />. */
  icon: customPropTypes.some([PropTypes.bool, PropTypes.string, PropTypes.object, PropTypes.element]),

  /** A button can be formatted to appear on dark backgrounds. */
  inverted: PropTypes.bool,

  /** Add a Label by text, props object, or pass a <Label />. */
  label: customPropTypes.some([PropTypes.string, PropTypes.object, PropTypes.element]),

  /** A labeled button can format a Label or Icon to appear on the left or right. */
  labelPosition: PropTypes.oneOf(['right', 'left']),

  /** A button can show a loading indicator. */
  loading: PropTypes.bool,

  /** A button can hint towards a negative consequence. */
  negative: PropTypes.bool,

  /**
   * Called after user's click.
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  /** A button can hint towards a positive consequence. */
  positive: PropTypes.bool,

  /** A button can be formatted to show different levels of emphasis. */
  primary: PropTypes.bool,

  /** The role of the HTML element. */
  role: PropTypes.string,

  /** A button can be formatted to show different levels of emphasis. */
  secondary: PropTypes.bool,

  /** A button can have different sizes. */
  size: PropTypes.oneOf(SUI.SIZES),

  /** A button can receive focus. */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** A button can be formatted to toggle on and off. */
  toggle: PropTypes.bool
} : {};
Button.defaultProps = {
  as: 'button'
};
Button.Content = ButtonContent;
Button.Group = ButtonGroup;
Button.Or = ButtonOr;
Button.create = createShorthandFactory(Button, function (value) {
  return {
    content: value
  };
});
export default Button;