import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _isPlainObject from "lodash/isPlainObject";
import _invoke from "lodash/invoke";
import cx from 'clsx';
import PropTypes from 'prop-types';
import React, { Component, isValidElement } from 'react';
import { childrenUtils, createShorthandFactory, customPropTypes, getElementType, getUnhandledProps, useKeyOnly } from '../../lib';
import Image from '../Image';
import ListContent from './ListContent';
import ListDescription from './ListDescription';
import ListHeader from './ListHeader';
import ListIcon from './ListIcon';
/**
 * A list item can contain a set of items.
 */

var ListItem = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ListItem, _Component);

  function ListItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      var disabled = _this.props.disabled;
      if (!disabled) _invoke(_this.props, 'onClick', e, _this.props);
    };

    return _this;
  }

  var _proto = ListItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        children = _this$props.children,
        className = _this$props.className,
        content = _this$props.content,
        description = _this$props.description,
        disabled = _this$props.disabled,
        header = _this$props.header,
        icon = _this$props.icon,
        image = _this$props.image,
        value = _this$props.value;
    var ElementType = getElementType(ListItem, this.props);
    var classes = cx(useKeyOnly(active, 'active'), useKeyOnly(disabled, 'disabled'), useKeyOnly(ElementType !== 'li', 'item'), className);
    var rest = getUnhandledProps(ListItem, this.props);
    var valueProp = ElementType === 'li' ? {
      value: value
    } : {
      'data-value': value
    };

    if (!childrenUtils.isNil(children)) {
      return /*#__PURE__*/React.createElement(ElementType, _extends({}, valueProp, {
        role: "listitem",
        className: classes,
        onClick: this.handleClick
      }, rest), children);
    }

    var iconElement = ListIcon.create(icon, {
      autoGenerateKey: false
    });
    var imageElement = Image.create(image, {
      autoGenerateKey: false
    }); // See description of `content` prop for explanation about why this is necessary.

    if (! /*#__PURE__*/isValidElement(content) && _isPlainObject(content)) {
      return /*#__PURE__*/React.createElement(ElementType, _extends({}, valueProp, {
        role: "listitem",
        className: classes,
        onClick: this.handleClick
      }, rest), iconElement || imageElement, ListContent.create(content, {
        autoGenerateKey: false,
        defaultProps: {
          header: header,
          description: description
        }
      }));
    }

    var headerElement = ListHeader.create(header, {
      autoGenerateKey: false
    });
    var descriptionElement = ListDescription.create(description, {
      autoGenerateKey: false
    });

    if (iconElement || imageElement) {
      return /*#__PURE__*/React.createElement(ElementType, _extends({}, valueProp, {
        role: "listitem",
        className: classes,
        onClick: this.handleClick
      }, rest), iconElement || imageElement, (content || headerElement || descriptionElement) && /*#__PURE__*/React.createElement(ListContent, null, headerElement, descriptionElement, content));
    }

    return /*#__PURE__*/React.createElement(ElementType, _extends({}, valueProp, {
      role: "listitem",
      className: classes,
      onClick: this.handleClick
    }, rest), headerElement, descriptionElement, content);
  };

  return ListItem;
}(Component);

ListItem.handledProps = ["active", "as", "children", "className", "content", "description", "disabled", "header", "icon", "image", "onClick", "value"];
ListItem.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A list item can active. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /**
   * Shorthand for primary content.
   *
   * Heads up!
   *
   * This is handled slightly differently than the typical `content` prop since
   * the wrapping ListContent is not used when there's no icon or image.
   *
   * If you pass content as:
   * - an element/literal, it's treated as the sibling node to
   * header/description (whether wrapped in Item.Content or not).
   * - a props object, it forces the presence of Item.Content and passes those
   * props to it. If you pass a content prop within that props object, it
   * will be treated as the sibling node to header/description.
   */
  content: customPropTypes.itemShorthand,

  /** Shorthand for ListDescription. */
  description: customPropTypes.itemShorthand,

  /** A list item can disabled. */
  disabled: PropTypes.bool,

  /** Shorthand for ListHeader. */
  header: customPropTypes.itemShorthand,

  /** Shorthand for ListIcon. */
  icon: customPropTypes.every([customPropTypes.disallow(['image']), customPropTypes.itemShorthand]),

  /** Shorthand for Image. */
  image: customPropTypes.every([customPropTypes.disallow(['icon']), customPropTypes.itemShorthand]),

  /** A ListItem can be clicked */
  onClick: PropTypes.func,

  /** A value for an ordered list. */
  value: PropTypes.string
} : {};
ListItem.create = createShorthandFactory(ListItem, function (content) {
  return {
    content: content
  };
});
export default ListItem;