import React, { PropTypes } from 'react'
import classNames from 'classnames'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function ModalHeader(props) {
  const { children, className } = props

  const classes = classNames(
    className,
    'header'
  )

  const rest = getUnhandledProps(ModalHeader, props)
  const ElementType = getElementType(ModalHeader, props)

  return (
    <ElementType className={classes} {...rest}>
      {children}
    </ElementType>
  )
}

ModalHeader._meta = {
  name: 'ModalHeader',
  type: META.TYPES.MODULE,
  parent: 'Modal',
}

ModalHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the modal header */
  children: PropTypes.any,

  /** Classes to add to the modal header className */
  className: PropTypes.string,
}

export default ModalHeader
