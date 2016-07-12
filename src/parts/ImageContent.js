import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../utils/Meta'
import { getUnhandledProps } from '../utils/propUtils'

function ImageContent(props) {
  const { children, className } = props
  const classes = cx(
    className,
    'imagecontent'
  )
  const rest = getUnhandledProps(ImageContent, props)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

ImageContent._meta = {
  library: META.library.semanticUI,
  type: META.type.part,
  name: 'ImageContent'
}

ImageContent.propTypes = {
  /** Primary content of the ImageContent. */
  children: PropTypes.node,

  /** Classes to add to the ImageContent className. */
  className: PropTypes.string,
}

export default ImageContent
