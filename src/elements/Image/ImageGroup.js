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
 * A group of images
 */
function ImageGroup(props) {
  const { className, children, size } = props
  const classes = cx('ui', size, className, 'images')
  const rest = getUnhandledProps(ImageGroup, props)
  const ElementType = getElementType(ImageGroup, props)

  return <ElementType className={classes} {...rest}>{children}</ElementType>
}

ImageGroup._meta = {
  name: 'ImageGroup',
  parent: 'Image',
  type: META.TYPES.ELEMENT,
  props: {
    size: SUI.SIZES,
  },
}

ImageGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Class names for custom styling. */
  children: PropTypes.any,

  /** Class names for custom styling. */
  className: PropTypes.string,

  /** A group of images can be formatted to have the same size. */
  size: PropTypes.oneOf(ImageGroup._meta.props.size),
}

export default ImageGroup
