import _extends from "@babel/runtime/helpers/esm/extends";
import cx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { childrenUtils, customPropTypes, getElementType, getUnhandledProps, useKeyOnly } from '../../lib';
/**
 * A placeholder can contain a header.
 */

function PlaceholderHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      image = props.image;
  var classes = cx(useKeyOnly(image, 'image'), 'header', className);
  var rest = getUnhandledProps(PlaceholderHeader, props);
  var ElementType = getElementType(PlaceholderHeader, props);
  return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

PlaceholderHeader.handledProps = ["as", "children", "className", "content", "image"];
PlaceholderHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A placeholder can contain an image. */
  image: PropTypes.bool
} : {};
export default PlaceholderHeader;