import React, { PropTypes } from 'react'
import cx from 'classnames'
import META from '../../utils/Meta'

function Image(props) {
  const {
    className,
  } = props

  const classes = cx(
    'sd-image', 'ui',
    className,
    'image'
  )

  return (
    <img {...props} className={classes} />
  )
}

Image._meta = {
  library: META.library.semanticUI,
  name: 'Image',
  type: META.type.element,
}

Image.propTypes = {
  /** Class names for custom styling. */
  className: PropTypes.string,

  /** Alternate text for the image specified */
  alt: PropTypes.string,

  /** Specifies the URL of the image */
  src: PropTypes.string,
}

export default Image
