import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _invoke from "lodash/invoke";
import cx from 'clsx';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { childrenUtils, createShorthandFactory, customPropTypes, getUnhandledProps, getElementType, useKeyOnly } from '../../lib';
/**
 * A section sub-component for Breadcrumb component.
 */

var BreadcrumbSection = /*#__PURE__*/function (_Component) {
  _inheritsLoose(BreadcrumbSection, _Component);

  function BreadcrumbSection() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.computeElementType = function () {
      var _this$props = _this.props,
          link = _this$props.link,
          onClick = _this$props.onClick;
      if (link || onClick) return 'a';
    };

    _this.handleClick = function (e) {
      return _invoke(_this.props, 'onClick', e, _this.props);
    };

    return _this;
  }

  var _proto = BreadcrumbSection.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        active = _this$props2.active,
        children = _this$props2.children,
        className = _this$props2.className,
        content = _this$props2.content,
        href = _this$props2.href;
    var classes = cx(useKeyOnly(active, 'active'), 'section', className);
    var rest = getUnhandledProps(BreadcrumbSection, this.props);
    var ElementType = getElementType(BreadcrumbSection, this.props, this.computeElementType);
    return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
      className: classes,
      href: href,
      onClick: this.handleClick
    }), childrenUtils.isNil(children) ? content : children);
  };

  return BreadcrumbSection;
}(Component);

BreadcrumbSection.handledProps = ["active", "as", "children", "className", "content", "href", "link", "onClick"];
export { BreadcrumbSection as default };
BreadcrumbSection.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Style as the currently active section. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: customPropTypes.every([customPropTypes.disallow(['link']), PropTypes.string]),

  /** Render as an `a` tag instead of a `div`. */
  link: customPropTypes.every([customPropTypes.disallow(['href']), PropTypes.bool]),

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func
} : {};
BreadcrumbSection.create = createShorthandFactory(BreadcrumbSection, function (content) {
  return {
    content: content,
    link: true
  };
});