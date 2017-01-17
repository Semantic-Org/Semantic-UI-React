import React, { PropTypes } from 'react'
import cx from 'classnames'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
} from '../../lib'

/**
 * A group of images.
 */
function ImageGroup(props) {
  const { children, className, size } = props
  const classes = cx('ui', size, className, 'images')
  const rest = getUnhandledProps(ImageGroup, props)
  const ElementType = getElementType(ImageGroup, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

ImageGroup._meta = {
  name: 'ImageGroup',
  parent: 'Image',
  type: META.TYPES.ELEMENT,
}

ImageGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A group of images can be formatted to have the same size. */
  size: PropTypes.oneOf(SUI.SIZES),
}

export default ImageGroup
