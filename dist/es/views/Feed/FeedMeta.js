import _extends from "@babel/runtime/helpers/esm/extends";
import cx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { childrenUtils, createShorthand, customPropTypes, getElementType, getUnhandledProps } from '../../lib';
import FeedLike from './FeedLike';
/**
 * A feed can contain a meta.
 */

function FeedMeta(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      like = props.like;
  var classes = cx('meta', className);
  var rest = getUnhandledProps(FeedMeta, props);
  var ElementType = getElementType(FeedMeta, props);

  if (!childrenUtils.isNil(children)) {
    return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }

  return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), createShorthand(FeedLike, function (val) {
    return {
      content: val
    };
  }, like, {
    autoGenerateKey: false
  }), content);
}

FeedMeta.handledProps = ["as", "children", "className", "content", "like"];
FeedMeta.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for FeedLike. */
  like: customPropTypes.itemShorthand
} : {};
export default FeedMeta;