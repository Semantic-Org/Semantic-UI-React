import React, { PropTypes } from 'react'
import cx from 'classnames'

import { getElementType, getUnhandledProps, META } from '../../lib'

function ModalDescription(props) {
  const { children, className } = props

  const classes = cx(
    className,
    'description'
  )

  const rest = getUnhandledProps(ModalDescription, props)
  const ElementType = getElementType(ModalDescription, props)
  return (
    <ElementType className={classes} {...rest}>
      {children}
    </ElementType>
  )
}

ModalDescription._meta = {
  name: 'ModalDescription',
  type: META.TYPES.MODULE,
  parent: 'Modal',
}

ModalDescription.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content */
  children: PropTypes.any,

  /** Classes to add to the className */
  className: PropTypes.string,
}

export default ModalDescription
