import React, { PropTypes } from 'react'
import classNames from 'classnames'

import { getUnhandledProps, META, useKeyOnly } from '../../lib'

function ModalContent(props) {
  const { children, image, className } = props

  const classes = classNames(
    className,
    useKeyOnly(image, 'image'),
    'content'
  )

  const rest = getUnhandledProps(ModalContent, props)

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

ModalContent._meta = {
  name: 'ModalContent',
  type: META.TYPES.MODULE,
  parent: 'Modal',
}

ModalContent.propTypes = {
  /** Primary content of the modal content */
  children: PropTypes.any,

  /** Classes to add to the modal content className */
  className: PropTypes.string,

  /** A modal can contain image content */
  image: PropTypes.bool,
}

export default ModalContent
