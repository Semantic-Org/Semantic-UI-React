import React, { PropTypes } from 'react'
import classNames from 'classnames'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

function ModalContent(props) {
  const { children, image, className } = props

  const classes = classNames(
    className,
    useKeyOnly(image, 'image'),
    'content'
  )

  const rest = getUnhandledProps(ModalContent, props)
  const ElementType = getElementType(ModalContent, props)

  return (
    <ElementType className={classes} {...rest}>
      {children}
    </ElementType>
  )
}

ModalContent._meta = {
  name: 'ModalContent',
  type: META.TYPES.MODULE,
  parent: 'Modal',
}

ModalContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the modal content */
  children: PropTypes.any,

  /** Classes to add to the modal content className */
  className: PropTypes.string,

  /** A modal can contain image content */
  image: PropTypes.bool,
}

export default ModalContent
