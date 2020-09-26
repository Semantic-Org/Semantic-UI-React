import _extends from "@babel/runtime/helpers/esm/extends";
import cx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { childrenUtils, createShorthandFactory, customPropTypes, getElementType, getUnhandledProps } from '../../lib';
/**
 * An item can contain content metadata.
 */

function ItemMeta(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = cx('meta', className);
  var rest = getUnhandledProps(ItemMeta, props);
  var ElementType = getElementType(ItemMeta, props);
  return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

ItemMeta.handledProps = ["as", "children", "className", "content"];
ItemMeta.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand
} : {};
ItemMeta.create = createShorthandFactory(ItemMeta, function (content) {
  return {
    content: content
  };
});
export default ItemMeta;