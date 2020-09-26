import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _isNil from "lodash/isNil";
import _invoke from "lodash/invoke";
import cx from 'clsx';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { childrenUtils, createShorthandFactory, customPropTypes, getElementType, getUnhandledProps, useKeyOnly } from '../../lib';
import Icon from '../../elements/Icon';
/**
 * A title sub-component for Accordion component.
 */

var AccordionTitle = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AccordionTitle, _Component);

  function AccordionTitle() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      return _invoke(_this.props, 'onClick', e, _this.props);
    };

    return _this;
  }

  var _proto = AccordionTitle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        children = _this$props.children,
        className = _this$props.className,
        content = _this$props.content,
        icon = _this$props.icon;
    var classes = cx(useKeyOnly(active, 'active'), 'title', className);
    var rest = getUnhandledProps(AccordionTitle, this.props);
    var ElementType = getElementType(AccordionTitle, this.props);
    var iconValue = _isNil(icon) ? 'dropdown' : icon;

    if (!childrenUtils.isNil(children)) {
      return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
        className: classes,
        onClick: this.handleClick
      }), children);
    }

    return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
      className: classes,
      onClick: this.handleClick
    }), Icon.create(iconValue, {
      autoGenerateKey: false
    }), content);
  };

  return AccordionTitle;
}(Component);

AccordionTitle.handledProps = ["active", "as", "children", "className", "content", "icon", "index", "onClick"];
export { AccordionTitle as default };
AccordionTitle.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Whether or not the title is in the open state. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for Icon. */
  icon: customPropTypes.itemShorthand,

  /** AccordionTitle index inside Accordion. */
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func
} : {};
AccordionTitle.create = createShorthandFactory(AccordionTitle, function (content) {
  return {
    content: content
  };
});