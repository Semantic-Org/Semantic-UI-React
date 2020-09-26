import _extends from "@babel/runtime/helpers/esm/extends";
import cx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { createHTMLImage, getElementType, getUnhandledProps, htmlImageProps, partitionHTMLProps } from '../../lib';
/**
 * A comment can contain an image or avatar.
 */

function CommentAvatar(props) {
  var className = props.className,
      src = props.src;
  var classes = cx('avatar', className);
  var rest = getUnhandledProps(CommentAvatar, props);

  var _partitionHTMLProps = partitionHTMLProps(rest, {
    htmlProps: htmlImageProps
  }),
      imageProps = _partitionHTMLProps[0],
      rootProps = _partitionHTMLProps[1];

  var ElementType = getElementType(CommentAvatar, props);
  return /*#__PURE__*/React.createElement(ElementType, _extends({}, rootProps, {
    className: classes
  }), createHTMLImage(src, {
    autoGenerateKey: false,
    defaultProps: imageProps
  }));
}

CommentAvatar.handledProps = ["as", "className", "src"];
CommentAvatar.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Additional classes. */
  className: PropTypes.string,

  /** Specifies the URL of the image. */
  src: PropTypes.string
} : {};
export default CommentAvatar;