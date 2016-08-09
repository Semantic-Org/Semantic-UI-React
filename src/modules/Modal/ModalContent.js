import React, { PropTypes } from 'react'
import classNames from 'classnames'
import META from '../../utils/Meta'
import {
  getUnhandledProps,
  useKeyOnly,
} from '../../utils/propUtils'

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
  type: META.type.module,
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
