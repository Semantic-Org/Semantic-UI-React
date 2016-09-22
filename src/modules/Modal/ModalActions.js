import React, { PropTypes } from 'react'
import classNames from 'classnames'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function ModalActions(props) {
  const { children, className } = props

  const classes = classNames(
    className,
    'actions'
  )

  const rest = getUnhandledProps(ModalActions, props)
  const ElementType = getElementType(ModalActions, props)

  return (
    <ElementType className={classes} {...rest}>
      {children}
    </ElementType>
  )
}

ModalActions._meta = {
  name: 'ModalActions',
  type: META.TYPES.MODULE,
  parent: 'Modal',
}

ModalActions.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the modal actions */
  children: PropTypes.any,

  /** Classes to add to the modal actions className */
  className: PropTypes.string,
}

export default ModalActions
