import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _invoke from "lodash/invoke";
import cx from 'clsx';
import keyboardKey from 'keyboard-key';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getElementType, getUnhandledProps, useKeyOnly } from '../../lib';
/**
 * An internal icon sub-component for Rating component
 */

var RatingIcon = /*#__PURE__*/function (_Component) {
  _inheritsLoose(RatingIcon, _Component);

  function RatingIcon() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      _invoke(_this.props, 'onClick', e, _this.props);
    };

    _this.handleKeyUp = function (e) {
      _invoke(_this.props, 'onKeyUp', e, _this.props);

      switch (keyboardKey.getCode(e)) {
        case keyboardKey.Enter:
        case keyboardKey.Spacebar:
          e.preventDefault();

          _invoke(_this.props, 'onClick', e, _this.props);

          break;

        default:
      }
    };

    _this.handleMouseEnter = function (e) {
      _invoke(_this.props, 'onMouseEnter', e, _this.props);
    };

    return _this;
  }

  var _proto = RatingIcon.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        className = _this$props.className,
        selected = _this$props.selected;
    var classes = cx(useKeyOnly(active, 'active'), useKeyOnly(selected, 'selected'), 'icon', className);
    var rest = getUnhandledProps(RatingIcon, this.props);
    var ElementType = getElementType(RatingIcon, this.props);
    return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
      className: classes,
      onClick: this.handleClick,
      onKeyUp: this.handleKeyUp,
      onMouseEnter: this.handleMouseEnter,
      role: "radio"
    }));
  };

  return RatingIcon;
}(Component);

RatingIcon.handledProps = ["active", "as", "className", "index", "onClick", "onKeyUp", "onMouseEnter", "selected"];
export { RatingIcon as default };
RatingIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Indicates activity of an icon. */
  active: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** An index of icon inside Rating. */
  index: PropTypes.number,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  /**
   * Called on keyup.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onKeyUp: PropTypes.func,

  /**
   * Called on mouseenter.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseEnter: PropTypes.func,

  /** Indicates selection of an icon. */
  selected: PropTypes.bool
} : {};
RatingIcon.defaultProps = {
  as: 'i'
};