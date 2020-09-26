import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import cx from 'clsx';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { childrenUtils, customPropTypes, getElementType, getUnhandledProps, SUI, useKeyOnly } from '../../lib';
import Image from '../../elements/Image';
import CardContent from './CardContent';
import CardDescription from './CardDescription';
import CardGroup from './CardGroup';
import CardHeader from './CardHeader';
import CardMeta from './CardMeta';
/**
 * A card displays site content in a manner similar to a playing card.
 */

var Card = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Card, _Component);

  function Card() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      var onClick = _this.props.onClick;
      if (onClick) onClick(e, _this.props);
    };

    return _this;
  }

  var _proto = Card.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        centered = _this$props.centered,
        children = _this$props.children,
        className = _this$props.className,
        color = _this$props.color,
        content = _this$props.content,
        description = _this$props.description,
        extra = _this$props.extra,
        fluid = _this$props.fluid,
        header = _this$props.header,
        href = _this$props.href,
        image = _this$props.image,
        link = _this$props.link,
        meta = _this$props.meta,
        onClick = _this$props.onClick,
        raised = _this$props.raised;
    var classes = cx('ui', color, useKeyOnly(centered, 'centered'), useKeyOnly(fluid, 'fluid'), useKeyOnly(link, 'link'), useKeyOnly(raised, 'raised'), 'card', className);
    var rest = getUnhandledProps(Card, this.props);
    var ElementType = getElementType(Card, this.props, function () {
      if (onClick) return 'a';
    });

    if (!childrenUtils.isNil(children)) {
      return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
        className: classes,
        href: href,
        onClick: this.handleClick
      }), children);
    }

    if (!childrenUtils.isNil(content)) {
      return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
        className: classes,
        href: href,
        onClick: this.handleClick
      }), content);
    }

    return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
      className: classes,
      href: href,
      onClick: this.handleClick
    }), Image.create(image, {
      autoGenerateKey: false,
      defaultProps: {
        ui: false,
        wrapped: true
      }
    }), (description || header || meta) && /*#__PURE__*/React.createElement(CardContent, {
      description: description,
      header: header,
      meta: meta
    }), extra && /*#__PURE__*/React.createElement(CardContent, {
      extra: true
    }, extra));
  };

  return Card;
}(Component);

Card.handledProps = ["as", "centered", "children", "className", "color", "content", "description", "extra", "fluid", "header", "href", "image", "link", "meta", "onClick", "raised"];
export { Card as default };
Card.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A Card can center itself inside its container. */
  centered: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A Card can be formatted to display different colors. */
  color: PropTypes.oneOf(SUI.COLORS),

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for CardDescription. */
  description: customPropTypes.itemShorthand,

  /** Shorthand for primary content of CardContent. */
  extra: customPropTypes.contentShorthand,

  /** A Card can be formatted to take up the width of its container. */
  fluid: PropTypes.bool,

  /** Shorthand for CardHeader. */
  header: customPropTypes.itemShorthand,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: PropTypes.string,

  /** A card can contain an Image component. */
  image: customPropTypes.itemShorthand,

  /** A card can be formatted to link to other content. */
  link: PropTypes.bool,

  /** Shorthand for CardMeta. */
  meta: customPropTypes.itemShorthand,

  /**
   * Called on click. When passed, the component renders as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  /** A Card can be formatted to raise above the page. */
  raised: PropTypes.bool
} : {};
Card.Content = CardContent;
Card.Description = CardDescription;
Card.Group = CardGroup;
Card.Header = CardHeader;
Card.Meta = CardMeta;