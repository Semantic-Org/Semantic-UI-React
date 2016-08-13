import React, { PropTypes } from 'react'
import cx from 'classnames'

import {
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

  return <div className={classes} {...rest}>{children}</div>
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
  /** Class names for custom styling. */
  children: PropTypes.any,

  /** Class names for custom styling. */
  className: PropTypes.string,

  /** A group of images can be formatted to have the same size. */
  size: PropTypes.oneOf(ImageGroup._meta.props.size),
}

export default ImageGroup
