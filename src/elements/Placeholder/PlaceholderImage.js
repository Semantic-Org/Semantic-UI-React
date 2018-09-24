import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { customPropTypes, getElementType, getUnhandledProps } from '../../lib'

/**
 * A placeholder can contain an image.
 */
function PlaceholderImage(props) {
  const { className, shape } = props
  const classes = cx(shape, 'image', className)
  const rest = getUnhandledProps(PlaceholderImage, props)
  const ElementType = getElementType(PlaceholderImage, props)

  return <ElementType {...rest} className={classes} />
}

PlaceholderImage.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Additional classes. */
  className: PropTypes.string,

  /** An image can modify size correctly with responsive styles. */
  shape: PropTypes.oneOf(['square', 'rectangular']),
}

export default PlaceholderImage
