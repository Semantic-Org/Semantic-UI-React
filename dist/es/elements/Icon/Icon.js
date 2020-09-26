import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _without from "lodash/without";
import _invoke from "lodash/invoke";
import _isNil from "lodash/isNil";
import cx from 'clsx';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { createShorthandFactory, customPropTypes, getElementType, getUnhandledProps, SUI, useKeyOnly, useKeyOrValueAndKey, useValueAndKey } from '../../lib';
import IconGroup from './IconGroup';
/**
 * An icon is a glyph used to represent something else.
 * @see Image
 */

var Icon = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(Icon, _PureComponent);

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

      _invoke(_this.props, 'onClick', e, _this.props);
    };

    return _this;
  }

  var _proto = Icon.prototype;

  _proto.getIconAriaOptions = function getIconAriaOptions() {
    var ariaOptions = {};
    var _this$props = this.props,
        ariaLabel = _this$props['aria-label'],
        ariaHidden = _this$props['aria-hidden'];

    if (_isNil(ariaLabel)) {
      ariaOptions['aria-hidden'] = 'true';
    } else {
      ariaOptions['aria-label'] = ariaLabel;
    }

    if (!_isNil(ariaHidden)) {
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
    var classes = cx(color, name, size, useKeyOnly(bordered, 'bordered'), useKeyOnly(circular, 'circular'), useKeyOnly(disabled, 'disabled'), useKeyOnly(fitted, 'fitted'), useKeyOnly(inverted, 'inverted'), useKeyOnly(link, 'link'), useKeyOnly(loading, 'loading'), useKeyOrValueAndKey(corner, 'corner'), useValueAndKey(flipped, 'flipped'), useValueAndKey(rotated, 'rotated'), 'icon', className);
    var rest = getUnhandledProps(Icon, this.props);
    var ElementType = getElementType(Icon, this.props);
    var ariaOptions = this.getIconAriaOptions();
    return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, ariaOptions, {
      className: classes,
      onClick: this.handleClick
    }));
  };

  return Icon;
}(PureComponent);

Icon.handledProps = ["aria-hidden", "aria-label", "as", "bordered", "circular", "className", "color", "corner", "disabled", "fitted", "flipped", "inverted", "link", "loading", "name", "rotated", "size"];
Icon.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Formatted to appear bordered. */
  bordered: PropTypes.bool,

  /** Icon can formatted to appear circular. */
  circular: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** Color of the icon. */
  color: PropTypes.oneOf(SUI.COLORS),

  /** Icons can display a smaller corner icon. */
  corner: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['top left', 'top right', 'bottom left', 'bottom right'])]),

  /** Show that the icon is inactive. */
  disabled: PropTypes.bool,

  /** Fitted, without space to left or right of Icon. */
  fitted: PropTypes.bool,

  /** Icon can be flipped. */
  flipped: PropTypes.oneOf(['horizontally', 'vertically']),

  /** Formatted to have its colors inverted for contrast. */
  inverted: PropTypes.bool,

  /** Icon can be formatted as a link. */
  link: PropTypes.bool,

  /** Icon can be used as a simple loader. */
  loading: PropTypes.bool,

  /** Name of the icon. */
  name: customPropTypes.suggest(SUI.ALL_ICONS_IN_ALL_CONTEXTS),

  /** Icon can rotated. */
  rotated: PropTypes.oneOf(['clockwise', 'counterclockwise']),

  /** Size of the icon. */
  size: PropTypes.oneOf(_without(SUI.SIZES, 'medium')),

  /** Icon can have an aria label. */
  'aria-hidden': PropTypes.string,

  /** Icon can have an aria label. */
  'aria-label': PropTypes.string
} : {};
Icon.defaultProps = {
  as: 'i'
};
Icon.Group = IconGroup;
Icon.create = createShorthandFactory(Icon, function (value) {
  return {
    name: value
  };
});
export default Icon;