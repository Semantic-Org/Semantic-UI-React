import React, { PropTypes } from 'react'
import cx from 'classnames'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function ModalActions(props) {
  const { children, className } = props
  const classes = cx(className, 'actions')
  const rest = getUnhandledProps(ModalActions, props)
  const ElementType = getElementType(ModalActions, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

ModalActions._meta = {
  name: 'ModalActions',
  type: META.TYPES.MODULE,
  parent: 'Modal',
}

ModalActions.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

export default ModalActions
